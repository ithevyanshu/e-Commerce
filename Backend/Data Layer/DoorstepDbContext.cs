using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shared;

namespace Data_Layer
{
    public class DoorstepDbContext : DbContext
    {
        public DoorstepDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<RegisterUser> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }

    }
}
