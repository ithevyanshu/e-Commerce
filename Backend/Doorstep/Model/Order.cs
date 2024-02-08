using System.ComponentModel.DataAnnotations;

namespace backend.Model;

public class Order
{
    public string? Id { get; set; }

    [Required] public string? UserId { get; set; }

    [Required] public string? ProductId { get; set; }

    [Required] public string? ProductName { get; set; }

    [Required] public string? Image { get; set; }

    public string? Price { get; set; }

    [Required] public int Quantity { get; set; }

    public string? OrderDate { get; set; }
}