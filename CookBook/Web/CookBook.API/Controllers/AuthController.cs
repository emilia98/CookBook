using CookBook.Common;
using CookBook.Data.Models;
using CookBook.InputModels.Authentication;
using CookBook.Services.External.Contracts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace CookBook.API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly RoleManager<ApplicationRole> roleManager;
        private readonly ITokenService tokenService;

        public AuthController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            RoleManager<ApplicationRole> roleManager,
            ITokenService tokenService)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.roleManager = roleManager;
            this.tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginInputModel loginInputModel)
        {
            if (!ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }

            var user = await GetUserByUsernameOrEmail(loginInputModel.UsernameEmail.ToUpper());

            if (user == null) {
                return Unauthorized(new { ErrorMsg = "Invalid username/email!" });
            }

            var loginResult = await signInManager.CheckPasswordSignInAsync(user, loginInputModel.Password, false);

            if (!loginResult.Succeeded) {
                return Unauthorized(new { ErrorMsg = "Invalid username/email or password!" });
            }

            return Ok(new {
                Username = user.UserName,
                Token = await tokenService.CreateToken(user)
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterInputModel registerInputModel)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            if (await GetUserByEmail(registerInputModel.Email.ToUpper()) != null) {
                return BadRequest(new { ErrorMsg = "This email is already taken!" });
            }

            if (await GetUserByUsername(registerInputModel.Username.ToUpper()) != null) {
                return BadRequest(new { ErrorMsg = "This username is already taken!" });
            }

            var newUser = new ApplicationUser {
                Email = registerInputModel.Email,
                UserName = registerInputModel.Username
            };

            var registerResult = await userManager.CreateAsync(newUser, registerInputModel.Password);

            if (!registerResult.Succeeded) {
                return BadRequest(new { ErrorMsg = "An error occurred while trying to register!" });
            }

            var roleResult = await userManager.AddToRoleAsync(newUser, GlobalConstants.UserRoleName);

            if (!roleResult.Succeeded) {
                return BadRequest(new { ErrorMsg = "An error occurred while trying to register!" });
            }

            var loginResult = await signInManager.CheckPasswordSignInAsync(newUser, registerInputModel.Password, false);

            if (!loginResult.Succeeded) {
                return Unauthorized(new {
                    ErrorMsg = "Error while logging in!"
                });
            }

            return Ok(new {
                Username = newUser.UserName,
                Token = await tokenService.CreateToken(newUser)
            });
        }
        private async Task<ApplicationUser> GetUserByUsernameOrEmail(string usernameEmail)
        {
            return await userManager.Users.FirstOrDefaultAsync(x => x.NormalizedUserName == usernameEmail || x.NormalizedEmail == usernameEmail);
        }


        private async Task<ApplicationUser> GetUserByEmail(string email)
        {
            return await userManager.Users.FirstOrDefaultAsync(x => x.NormalizedEmail == email);
        }

        private async Task<ApplicationUser> GetUserByUsername(string username)
        {
            return await userManager.Users.FirstOrDefaultAsync(x => x.NormalizedUserName == username);
        }
    }
}
