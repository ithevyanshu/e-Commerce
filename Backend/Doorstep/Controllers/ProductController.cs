using Business_Layer.Interface;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Shared;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
[EnableCors("AllowOrigin")]
public class ProductController : ControllerBase
{
    private readonly IProduct _product;

    public ProductController(IProduct product)
    { 
        _product = product;
    }

    [HttpPost("add-product")]
    public IActionResult AddProduct(Product product)
    {
        _product.Add(product);
        return Ok("Success");
    }

    [HttpGet("get-product")]
    public IActionResult GetProduct()
    {
        return Ok(_product.Get());
    }

    [HttpGet("get-product/{id}")]
    public IActionResult GetProduct(string id)
    {
        var product = _product.Get(id);
        if (product == null) return Ok("Product not Exists");
        return Ok(product);
    }

    [HttpPut("edit-product/{id}")]
    public IActionResult UpdateProduct(Product product)
    {
        _product.Update(product);
        return Ok("Details Updated");
    }

    [HttpPatch("update-quantity/{id}")]
    public IActionResult UpdateQuantity(string id, int quantity)
    {
        _product.UpdateQuantity(id, quantity);
        return Ok(new { Message = "Quantity Updated" });
    }

    [HttpDelete("delete/{id}")]
    public IActionResult DeleteProduct(string id)
    {
        _product.Delete(id);
        return Ok(new { Message = "Quantity Updated" });
    }
}