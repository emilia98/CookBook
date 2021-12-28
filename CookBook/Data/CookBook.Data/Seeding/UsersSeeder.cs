using CookBook.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CookBook.Data.Seeding
{
    internal class UsersSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            await SeedUserAsync(userManager, "admin", "admin@cookbook.com", "admin1234");
            await SeedUserAsync(userManager, "editor", "editor@cookbook.com", "editor1234");
            await SeedUserAsync(userManager, "ordinary_user", "ordinary_user@cookbook.com", "user1234");
        }

        private static async Task SeedUserAsync(UserManager<ApplicationUser> userManager, string username, string email, string password)
        {
            var user = await userManager.FindByNameAsync(username);

            if (user == null) 
            {
                var result = await userManager.CreateAsync(
                    new ApplicationUser() {
                        UserName = username,
                        Email = email,
                        NormalizedUserName = username.ToUpper(),
                        NormalizedEmail = email.ToUpper()
                    }, password);

                if(!result.Succeeded) 
                {
                    throw new Exception(string.Join(Environment.NewLine, result.Errors.Select(e => e.Description)));
                }
            }
        }
    }
}
