import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codenamesanskruti.com';
  const routes = [
    '',
    '/about-us',
    '/why-us',
    '/ongoing-projects/codename-sanskruti',
    '/careers',
    '/news',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
