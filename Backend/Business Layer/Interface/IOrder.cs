using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Layer.Interface
{
    public interface IOrder
    {
        public void AddOrder(List<Shared.Order> orders);
        public List<Shared.Order> GetOrder(string id);
    }
}
