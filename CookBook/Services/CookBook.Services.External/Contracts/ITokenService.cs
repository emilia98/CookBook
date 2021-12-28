using CookBook.Data.Models;
using System.Threading.Tasks;

namespace CookBook.Services.External.Contracts
{
    public interface ITokenService
    {
        Task<string> CreateToken(ApplicationUser user);
    }
}
