using CookBook.Data;
using CookBook.Data.Common;
using CookBook.Data.Common.Repositories;
using CookBook.Data.Models;
using CookBook.Data.Repositories;
using CookBook.Data.Seeding;
using CookBook.InputModels.Authentication;
using CookBook.OutputModels;
using CookBook.Services.Data;
using CookBook.Services.Data.Contracts;
using CookBook.Services.External;
using CookBook.Services.External.Contracts;
using CookBook.Services.Mapping;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;
using System.Reflection;

namespace CookBook.API
{
    public class Startup
    {
        private readonly IConfiguration configuration;

        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            AutoMapperConfig.RegisterMappings(
                typeof(Recipe).GetTypeInfo().Assembly,
                typeof(LoginInputModel).GetTypeInfo().Assembly,
                typeof(RecipeOutputModel).GetTypeInfo().Assembly);

            services.AddCors(options => {
                options.AddPolicy("CORSPolicy", builder => {
                    builder.WithOrigins("http://localhost:3000")
                    .WithMethods("GET", "POST", "PUT", "DELETE")
                    .WithHeaders(HeaderNames.ContentType);
                });
            });
            services.AddDbContext<ApplicationDbContext>(
                options => options.UseSqlServer(this.configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, ApplicationRole>(IdentityOptionsProvider.GetIdentityOptions).AddEntityFrameworkStores<ApplicationDbContext>();


            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "CookBook.API", Version = "v1" });
            });

            services.AddSingleton(this.configuration);

            // Add External Services
            services.AddScoped<ITokenService, TokenService>();

            // Data Repositories
            services.AddScoped(typeof(IDeletableEntityRepository<>), typeof(EfDeletableEntityRepository<>));
            services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));
            services.AddScoped<IDbQueryRunner, DbQueryRunner>();

            // Application Services
            services.AddScoped<IRecipeService, RecipeService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            using (var serviceScope = app.ApplicationServices.CreateScope()) {
                var dbContext = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                dbContext.Database.Migrate();
                new ApplicationDbContextSeeder().SeedAsync(dbContext, serviceScope.ServiceProvider).GetAwaiter().GetResult();
            }

                if (env.IsDevelopment()) {
                    app.UseDeveloperExceptionPage();
                    app.UseSwagger();
                    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "CookBook.API v1"));
                }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CORSPolicy");

            app.UseAuthorization();
            app.UseAuthentication();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
