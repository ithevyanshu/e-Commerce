using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Business_Layer.Interface;
using Data_Layer.Interface;

namespace Business_Layer.Implementation
{
    public class Product : IProduct
    {
        private readonly IProductDL _product;
        public Product(IProductDL product)
        {
            _product = product;
        }

        public void Add(Shared.Product product)
        {
            product.Id = Guid.NewGuid().ToString();
            product.FinalPrice = product.Price - product.Price * product.Discount / 100;
            _product.Add(product);
            _product.Save();
        }

        public void Update(Shared.Product product)
        {
            product.FinalPrice = product.Price - product.Price * product.Discount / 100;
            _product.Update(product);
            _product.Save();
        }

        public void UpdateQuantity(string id, int qunatity){
            var product = _product.Get(id);
            product.Quantity = product.Quantity - qunatity;
            _product.Update(product);
            _product.Save();
        }

        public List<Shared.Product> Get()
        {
            return _product.Get().ToList();
        }

        public Shared.Product Get(string id)
        {
            return _product.Get().FirstOrDefault(x => x.Id == id);
        }

        public void Delete(string id)
        {
            var product = _product.Get().FirstOrDefault(x => x.Id == id);
            _product.Delete(product);
            _product.Save();
        }
    }
}
