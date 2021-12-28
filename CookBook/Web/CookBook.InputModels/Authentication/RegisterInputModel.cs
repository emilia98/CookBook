using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CookBook.InputModels.Authentication
{
    public class RegisterInputModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Email is not in valid format!")]
        public string Email { get; set; }

        [Required]
        public string FullName { get; set; }
    }
}
