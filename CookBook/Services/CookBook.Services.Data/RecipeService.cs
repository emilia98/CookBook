using CookBook.Data.Common.Repositories;
using CookBook.Data.Models;
using CookBook.Services.Data.Contracts;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CookBook.Services.Data
{
    public class RecipeService : IRecipeService
    {
        private readonly IRepository<Recipe> recipeRepository;

        public RecipeService(IRepository<Recipe> recipeRepository)
        {
            this.recipeRepository = recipeRepository;
        }

        public async Task Create(Recipe recipe)
        {
            await recipeRepository.AddAsync(recipe);
            await recipeRepository.SaveChangesAsync();
        }

        public async Task Delete(Recipe recipe)
        {
            recipeRepository.Delete(recipe);
            await recipeRepository.SaveChangesAsync();
        }

        // TODO: to output model
        public async Task<IEnumerable<Recipe>> GetAll(int? count = null)
        {
            var recipes = await recipeRepository.All().ToListAsync();

            if (count.HasValue) {
                return recipes.Take(count.Value);
            }

            return recipes;
        }

        // TODO: to output model
        public async Task<Recipe> GetById(int id)
        {
            return await recipeRepository.All().Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task Update(Recipe recipe)
        {
            recipeRepository.Update(recipe);
            await recipeRepository.SaveChangesAsync();
        }
    }
}
