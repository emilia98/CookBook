using System;

namespace CookBook.OutputModels
{
    public class RecipeOutputModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int PreparationTime { get; set; }

        public int CookingTime { get; set; }

        public int Servings { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }
    }
}
