import { MetadataRoute } from 'next';
import { productCategories } from '@/config/products';
import { serviceAreas } from '@/config/schemas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://crownplasticuae.com';
  const currentDate = new Date().toISOString();
  
  // Static pages with their priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/innovation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sustainability`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news-media`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  // Product category pages
  const categoryPages: MetadataRoute.Sitemap = productCategories.map((category) => ({
    url: `${baseUrl}/products/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Product detail pages
  const productPages: MetadataRoute.Sitemap = productCategories.flatMap((category) =>
    category.subProducts.map((product) => ({
      url: `${baseUrl}/products/${category.slug}/${product.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Service area pages (LocalBusiness schema pages for AEO)
  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${baseUrl}/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75, // High priority for local SEO
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...serviceAreaPages];
}
