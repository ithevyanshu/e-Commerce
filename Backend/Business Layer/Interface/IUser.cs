using Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Business_Layer.Interface
{
    public interface IUser
    {
        public void Register(RegisterUser user);
        public string Login(LoginUser user);
        public DbSet<RegisterUser> Get();
    }
}
