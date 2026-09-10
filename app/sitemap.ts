import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sanskruti.ind.in";
  // Ensure canonical production domain is used instead of vercel.app preview URLs
  const baseUrl = rawUrl.includes("vercel.app") ? "https://www.sanskruti.ind.in" : rawUrl;

  const routes = [
    "",
    "/about-us",
    "/why-us",
    "/projects",
    "/ongoing-projects/codename-sanskruti",
    "/ongoing-projects/motwani-anandam",
    "/ongoing-projects/motwani-anantam",
    "/news",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}