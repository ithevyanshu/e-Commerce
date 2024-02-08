using System.Text;
using Data_Layer;
using Data_Layer.Implementation;
using Data_Layer.Interface;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Business_Layer.Interface;
using Business_Layer.Implementation;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<DoorstepDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("MyDBConnection"), b => b.MigrationsAssembly("Doorstep API")));


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder =>
    {
        builder.WithOrigins("http://localhost:4200")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(x =>
{
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "localhost",
        ValidAudience = "localhost",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["jwtConfig:Key"])),
        ClockSkew = TimeSpan.FromMinutes(2)
    };
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IOrderDL, OrderDL>();
builder.Services.AddScoped<IProductDL, ProductDL>();
builder.Services.AddScoped<IUserDL, UserDL>();
builder.Services.AddScoped<IUser, User>();
builder.Services.AddScoped<IOrder, Order>();
builder.Services.AddScoped<IProduct, Product>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowOrigin");

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();