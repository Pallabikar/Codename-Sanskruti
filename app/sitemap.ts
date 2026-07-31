import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sanskruti.ind.in";

  const routes = [
    "",
    "/about-us",
    "/why-us",
    "/ongoing-projects/codename-sanskruti",
    "/news",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}