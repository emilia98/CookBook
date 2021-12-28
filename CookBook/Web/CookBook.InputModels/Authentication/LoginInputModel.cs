using System.ComponentModel.DataAnnotations;

namespace CookBook.InputModels.Authentication
{
    public class LoginInputModel
    {
        [Required]
        public string UsernameEmail { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
