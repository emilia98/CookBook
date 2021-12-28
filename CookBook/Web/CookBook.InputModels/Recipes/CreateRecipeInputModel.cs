using System.ComponentModel.DataAnnotations;

namespace CookBook.InputModels.Recipes
{
    public class CreateRecipeInputModel
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int PreparationTime { get; set; }

        [Required]
        public int CookingTime { get; set; }

        [Required]
        public int Servings { get; set; }
    }
}
