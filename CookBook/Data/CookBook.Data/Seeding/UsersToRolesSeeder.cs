using CookBook.Common;
using CookBook.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CookBook.Data.Seeding
{
    internal class UsersToRolesSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<ApplicationRole>>();

            await SeedUserToRole(dbContext, userManager, roleManager, "admin", GlobalConstants.AdministratorRoleName);
            await SeedUserToRole(dbContext, userManager, roleManager, "editor", GlobalConstants.EditorRoleName);
            await SeedUserToRole(dbContext, userManager, roleManager, "ordinary_user", GlobalConstants.UserRoleName);
        }

        private static async Task SeedUserToRole(
            ApplicationDbContext dbContext,
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            string username,
            string roleName)
        {
            var user = await userManager.FindByNameAsync(username);
            var role = await roleManager.FindByNameAsync(roleName);

            if (user == null || role == null) {
                return;
            }

            var exists = dbContext.UserRoles.Any(x => x.UserId == user.Id && x.RoleId == role.Id);

            if (exists) {
                return;
            }

            dbContext.UserRoles.Add(new IdentityUserRole<int> {
                UserId = user.Id,
                RoleId = role.Id
            });

            await dbContext.SaveChangesAsync();
        }
    }
}
