import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://demirhannakliyat.com.tr';
  const locales = ['tr', 'en', 'de', 'ar'];
  const routes = ['', 'services', 'about', 'contact', 'services/home-moving', 'services/office-moving', 'services/international', 'services/storage'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const path = route ? `/${route}` : '';
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
