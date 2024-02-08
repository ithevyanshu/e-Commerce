using Data_Layer.Interface;
using Microsoft.EntityFrameworkCore;
using Shared;

namespace Data_Layer.Implementation
{
    public class UserDL : IUserDL
    {
        public readonly DoorstepDbContext _context;

        public UserDL(DoorstepDbContext context)
        {
            _context = context;
        }

        public void Add(RegisterUser user)
        {
            _context.Users.Add(user);
        }

        public DbSet<RegisterUser> Get()
        {
            return _context.Users;
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
