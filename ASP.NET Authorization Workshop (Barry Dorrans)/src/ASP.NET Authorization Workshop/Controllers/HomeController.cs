using Microsoft.AspNet.Mvc;

namespace ASP.NET_Authorization_Workshop.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return this.View();
        }
    }
}