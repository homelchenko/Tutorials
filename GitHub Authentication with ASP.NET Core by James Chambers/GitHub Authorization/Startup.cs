using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;

using Microsoft.AspNet.Authentication.OAuth;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using Newtonsoft.Json.Linq;

namespace GitHub_Authorization
{
    public class Startup
    {
        private OAuthOptions GitHubOptions => new OAuthOptions
        {
            AuthenticationScheme = "GitHub",
            DisplayName = "GitHub",
            ClientId = this.Configuration["GitHub:ClientId"],
            ClientSecret = this.Configuration["GitHub:ClientSecret"],
            CallbackPath = new PathString("/signin-github"),
            AuthorizationEndpoint = "https://github.com/login/oauth/authorize",
            TokenEndpoint = "https://github.com/login/oauth/access_token",
            UserInformationEndpoint = "https://api.github.com/user",
            ClaimsIssuer = "OAuth2-Github",
            SaveTokensAsClaims = true,
            SignInScheme = "MyApp",

            Events = new OAuthEvents
            {
                OnCreatingTicket = async context => { await CreateGitHubAuthTicket(context); }
            }
        };

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder();

            if (env.IsDevelopment())
            {
                builder.AddUserSecrets();
            }

            this.Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();

            app.UseOAuthAuthentication(this.GitHubOptions);

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);

        private static async Task CreateGitHubAuthTicket(OAuthCreatingTicketContext context)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, context.Options.UserInformationEndpoint);

            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", context.AccessToken);
            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = await context.Backchannel.SendAsync(request, context.HttpContext.RequestAborted);
            response.EnsureSuccessStatusCode();

            JObject user = JObject.Parse(await response.Content.ReadAsStringAsync());

            AddClaims(context, user);
        }

        private static void AddClaims(OAuthCreatingTicketContext context, JObject user)
        {
            string identifier = user.Value<string>("id");

            if (!string.IsNullOrEmpty(identifier))
            {
                context.Identity.AddClaim(
                    new Claim(
                        ClaimTypes.NameIdentifier,
                        identifier,
                        ClaimValueTypes.String,
                        context.Options.ClaimsIssuer));
            }

            string userName = user.Value<string>("login");
            if (!string.IsNullOrEmpty(userName))
            {
                context.Identity.AddClaim(
                    new Claim(
                        ClaimsIdentity.DefaultNameClaimType,
                        userName,
                        ClaimValueTypes.String,
                        context.Options.ClaimsIssuer));
            }

            string name = user.Value<string>("name");
            if (!string.IsNullOrEmpty(name))
            {
                context.Identity.AddClaim(
                    new Claim(
                        "urn:github:name",
                        name,
                        ClaimValueTypes.String,
                        context.Options.ClaimsIssuer));
            }

            string link = user.Value<string>("url");
            if (!string.IsNullOrEmpty(link))
            {
                context.Identity.AddClaim(
                    new Claim(
                        "urn:github:url",
                        link,
                        ClaimValueTypes.String,
                        context.Options.ClaimsIssuer));
            }
        }
    }
}