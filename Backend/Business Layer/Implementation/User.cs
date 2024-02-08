﻿using Data_Layer.Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Shared;

namespace Business_Layer.Implementation
{
    public class User : Interface.IUser
    {   
        private readonly IUserDL _user;
        private readonly IConfiguration _config;
        public User(IUserDL user)
        {
            _user = user;
        }

        public DbSet<RegisterUser> Get()
        {
            return _user.Get();
        }

        public void Register(RegisterUser user)
        {
            if (Get().Count() == 0)
            {
                user.Role = "Admin";
            }
            else
            {
                user.Role = "User";
            }
            user.Id = Guid.NewGuid().ToString();
            _user.Add(user);
            _user.Save();
        }

        public string Login(LoginUser user)
        {
            var dbUser = Get().FirstOrDefault(u => u.Email == user.Email && u.Password == user.Password);
            if (dbUser != null)
            {
                var jwtServices = new JwtServices();
                return jwtServices.GenerateToken(dbUser.Id, dbUser.Username, dbUser.Email, dbUser.Number, dbUser.Role);
            }
            return "Failure";
        }

    }
}
