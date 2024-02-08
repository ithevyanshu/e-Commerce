using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Data_Layer.Interface
{
    public interface IProductDL
    {
        public void Add(Shared.Product product);
        public void Delete(Shared.Product product);
        public void Update(Shared.Product product);
        public Shared.Product Get(string Id);
        public DbSet<Shared.Product> Get();
        public void Save();
    }
}
