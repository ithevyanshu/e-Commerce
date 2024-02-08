using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace backend.Model;

public class JwtServices
{
    private readonly IConfiguration _config;

    public JwtServices(IConfiguration config)
    {
        _config = config;
        SecretKey = _config.GetSection("JwtConfig").GetSection("Key").Value;
        TokenDuration = Convert.ToInt32(_config.GetSection("JwtConfig").GetSection("Duration").Value);
    }

    public string SecretKey { get; set; }
    public int TokenDuration { get; set; }

    public string GenerateToken(string id, string name, string email, string number, string role)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));

        var signature = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var payload = new[]
        {
            new Claim("id", id),
            new Claim("name", name),
            new Claim("email", email),
            new Claim("number", number),
            new Claim("role", role)
        };

        var jwtToken = new JwtSecurityToken(
            "localhost",
            "localhost",
            payload,
            expires: DateTime.Now.AddMinutes(TokenDuration),
            signingCredentials: signature
        );

        return new JwtSecurityTokenHandler().WriteToken(jwtToken);
    }
}