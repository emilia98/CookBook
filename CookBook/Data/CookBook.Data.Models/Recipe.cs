using CookBook.Data.Common.Models;
using System.ComponentModel.DataAnnotations;

namespace CookBook.Data.Models
{
    public class Recipe : BaseModel<int>
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

        [Required]
        public int UserId { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
