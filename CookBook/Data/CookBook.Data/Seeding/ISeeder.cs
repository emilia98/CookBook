using System;
using System.Threading.Tasks;

namespace CookBook.Data.Seeding
{
    public interface ISeeder
    {
        Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider);
    }
}
