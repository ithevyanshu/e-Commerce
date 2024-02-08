using Business_Layer.Interface;
using Microsoft.AspNetCore.Mvc;
using Shared;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class OrderController : ControllerBase
{
    private readonly IOrder _order;

    public OrderController(IOrder order)
    {
        _order = order;
    }

    [HttpPost("order-placed")]
    public IActionResult AddOrder(List<Order> orders)
    {
        _order.AddOrder(orders);
        return Ok("Success");
    }

    [HttpGet("user-order/{id}")]
    public IActionResult GetOrder(string id)
    {
        return Ok(_order.GetOrder(id));
    }
}