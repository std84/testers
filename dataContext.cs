using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Text;
using test.MODAL;
using test.DATA;
namespace test.DATA
{
    public class dataContext: DbContext
    {

   
        public dataContext(DbContextOptions<dataContext> options) : base(options)
        {
        }
                public DbSet<basicModal> basicModal { get; set; }
   
        protected override void OnModelCreating(ModelBuilder builder)
        {
           // builder
             // .ApplyConfiguration(new CategoryConfiguration());
            builder.ApplyConfiguration(new basicModalConfiguration());
        
        }
    }
}