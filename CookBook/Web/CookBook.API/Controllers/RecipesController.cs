using CookBook.Data.Models;
using CookBook.InputModels.Recipes;
using CookBook.Services.Data.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CookBook.API.Controllers
{
    [Route("api/recipes")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly IRecipeService recipeService;

        public RecipesController(IRecipeService recipeService)
        {
            this.recipeService = recipeService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var recipe = await recipeService.GetById(id);

            if (recipe == null) {
                return NotFound(new { ErrorMsg = "Recipe not found!" });
            }

            return Ok(new { Recipe = recipe });
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var recipes = await recipeService.GetAll();

            return Ok(new {
                Recipes = recipes
            });
        }

        // ----
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateRecipeInputModel recipeInputModel)
        {
            if (!this.ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }

            try {
                var newRecipe = new Recipe {
                    Title = recipeInputModel.Title,
                    Description = recipeInputModel.Description,
                    PreparationTime = recipeInputModel.PreparationTime,
                    CookingTime = recipeInputModel.CookingTime,
                    Servings = recipeInputModel.Servings,
                    CreatedOn = DateTime.UtcNow
                };

                await this.recipeService.Create(newRecipe);
            }
            catch {
                return StatusCode(500, new { ErrorMsg = "Error while creating a new recipe!" });
            }

            return Ok(new { SuccessMsg = "Successfully added a new recipe!" });

        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var recipe = await this.recipeService.GetById(id);

            if (recipe == null) {
                return NotFound(new { ErrorMsg = "Trying to delete a non-existing recipe!" });
            }

            try {
                await this.recipeService.Delete(recipe);
            }
            catch {
                return BadRequest(new { ErrorMsg = "An error occurred while deleting recipe!" });
            }

            return Ok(new { SuccessMsg = "Successfully deleted recipe!" });
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id,
            [FromBody] CreateRecipeInputModel recipeInputModel)
        {
            if (!this.ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }

            var recipe = await this.recipeService.GetById(id);

            if (recipe == null) {
                return NotFound(new { ErrorMsg = "Trying to updated a non-existing recipe!" });
            }

            try {
                recipe.Title = recipeInputModel.Title;
                recipe.Description = recipeInputModel.Description;
                recipe.PreparationTime = recipeInputModel.PreparationTime;
                recipe.CookingTime = recipeInputModel.CookingTime;
                recipe.Servings = recipeInputModel.Servings;
                recipe.ModifiedOn = DateTime.UtcNow;

                await this.recipeService.Update(recipe);
            }
            catch {
                return BadRequest(new { ErrorMsg = "An error occurred while updating recipe!" });
            }

            return Ok(new { SuccessMsg = "Successfully updated recipe!" });
        }
    }
}
