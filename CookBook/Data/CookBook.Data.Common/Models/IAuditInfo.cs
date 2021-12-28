using System;

namespace CookBook.Data.Common.Models
{
    public interface IAuditInfo
    {
        DateTime CreatedOn { get; set; }

        DateTime? ModifiedOn { get; set; } 
    }
}
