using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared
{
    public class Product
    {
        public string? Id { get; set; }
        public string? ProductName { get; set; }
        public string? Description { get; set; }
        public string? Category { get; set; }
        public int Quantity { get; set; }
        public string? Image { get; set; }
        public float Price { get; set; }
        public int Discount { get; set; }
        public float FinalPrice { get; set; }
        public string? Specification { get; set; }
    }
}
