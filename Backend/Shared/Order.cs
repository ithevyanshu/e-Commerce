using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared
{
    public class Order
    {
        public string? Id { get; set; }
        [Required] public string? UserId { get; set; }
        [Required] public string? ProductId { get; set; }
        [Required] public string? ProductName { get; set; }
        [Required] public string? Image { get; set; }
        public string? Price { get; set; }
        [Required] public int Quantity { get; set; }
        public string? OrderDate { get; set; }
    }
}
