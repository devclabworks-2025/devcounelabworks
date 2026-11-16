import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://counelabworks.com";
  const routes = [
    "",
    "/about",
    "/contactus",
    "/oppo",
    "/roh",
    "/wardah",
    "/dialogue",
    "/piled",
    "/javajazz",
    "/gaia",
    "/again",
    "/esplanade",
    "/musiumnasional",
    "/gallery",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/gallery") || route.startsWith("/about") ? 0.8 : 0.7,
  }));
}
