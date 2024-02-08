using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Data_Layer.Interface
{
    public interface IOrderDL
    {
        void Add(Shared.Order order);
        DbSet<Shared.Order> Get(string Id);
        void Save();
    }
}
