using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data_Layer.Interface;
using Microsoft.EntityFrameworkCore;

namespace Data_Layer.Implementation
{
    public class OrderDL : IOrderDL
    {
        public readonly DoorstepDbContext _context;

        public OrderDL(DoorstepDbContext context)
        {
            _context = context;
        }

        public void Add(Shared.Order order)
        {
            _context.Orders.Add(order);
        }

        public DbSet<Shared.Order> Get(string Id)
        {
            return _context.Orders;
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
