using Data_Layer.Interface;
using Microsoft.EntityFrameworkCore;

namespace Data_Layer.Implementation
{
    public class ProductDL : IProductDL
    {
        public readonly DoorstepDbContext _context;

        public ProductDL(DoorstepDbContext context)
        {
            _context = context;
        }

        public void Add(Shared.Product product)
        {
            _context.Products.Add(product);
        }

        public DbSet<Shared.Product> Get()
        {
            return _context.Products;
        }

        public Shared.Product Get(string Id)
        {
            return _context.Products.Find(Id);
        }

        public void Update(Shared.Product product)
        {
            _context.Products.Update(product);
        }

        public void Delete(Shared.Product product)
        {
            _context.Products.Remove(product);
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
