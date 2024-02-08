using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Layer.Interface
{
    public interface IProduct
    {
        public void Add(Shared.Product product);
        public void Update(Shared.Product product);
        public void UpdateQuantity(string id, int qunatity);
        public List<Shared.Product> Get();
        public Shared.Product Get(string id);
        public void Delete(string id);
    }
}
