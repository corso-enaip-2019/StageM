using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace WebAppEx
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "EverythingToHome",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" });

            //routes.MapRoute(
            //     name: "employee",
            //     url: "{controller}/{action}/{employee}/{id}",
            //     defaults: new { controller = "Home", action = "Index" });

            //routes.MapRoute(
            //     name: "department",
            //     url: "{controller}/{action}/{department}/{id}",
            //     defaults: new { controller = "Home", action = "Index" });
        }
    }
}
