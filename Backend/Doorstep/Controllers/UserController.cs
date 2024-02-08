using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Shared;
using Business_Layer.Interface;


namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
[EnableCors("AllowOrigin")]
public class UserController : ControllerBase
{
    private readonly IUser _user;

    public UserController(IUser user)
    {
        _user = user;
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public IActionResult Register(RegisterUser user)
    {
        if (_user.Get().FirstOrDefault(u => u.Email == user.Email) != null)
        {
            return Ok("Email already exists");
        }
        _user.Register(user);
        return Ok("Success");
    }

    [AllowAnonymous]
    [HttpPost("login")]
    public IActionResult Login(LoginUser user)
    {
        return Ok(_user.Login(user));
    }
}