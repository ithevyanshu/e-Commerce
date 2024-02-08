using Business_Layer.Interface;
using Data_Layer.Interface;

namespace Business_Layer.Implementation
{
    public class Order : IOrder
    {
        private readonly IOrderDL _order;

        public Order(IOrderDL order)
        {
            _order = order;
        }

        public void AddOrder(List<Shared.Order> orders)
        {
            foreach (var order in orders)
            {
                order.Id = Guid.NewGuid().ToString();
                order.OrderDate = DateTime.Now.ToString();
                _order.Add(order);
            }
            _order.Save();
        }

        public List<Shared.Order> GetOrder(string id)
        {
            List<Shared.Order> orders = _order.Get(id)
                .Where(o => o.UserId == id)
                .OrderByDescending(o => o.OrderDate)
                .ToList();

            if (orders.Count == 0) return new List<Shared.Order>();
            return orders;
        }
    }
}
