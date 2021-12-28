using CookBook.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CookBook.Services.Data.Contracts
{
    public interface IRecipeService
    {
        Task Create(Recipe recipe);

        Task<IEnumerable<Recipe>> GetAll(int? count = null);

        Task<Recipe> GetById(int id);

        Task Update(Recipe recipe);

        Task Delete(Recipe recipe);
    }
}
