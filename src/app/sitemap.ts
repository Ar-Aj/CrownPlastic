import { MetadataRoute } from 'next';
import { productCategories } from '@/config/products';
import { serviceAreas } from '@/config/schemas';
import { allRegionalMarkets } from '@/config/markets';
import { regionalProductCatalogs } from '@/config/regional-products';

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

  // Phase 2 AEO: FAQ and Technical Guide pages (Featured Snippet Optimization)
  const supportPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/support/faqs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // High priority for featured snippet targeting
    },
  ];

  const technicalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/technical/bs-en-1452-complete-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/technical/upvc-vs-pvc-vs-ppr-comparison`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/technical/upvc-installation-best-practices`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/technical/gso-saso-compliance-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/technical/upvc-pipe-sizing-calculator-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
  ];

  // Phase 3 AEO: Regional Market Pages (Conversion Optimization)
  const marketPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/market`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...allRegionalMarkets.map((market) => ({
      url: `${baseUrl}/market/${market.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8, // High priority for regional SEO
    })),
  ];

  // Phase 3 FIX: Regional Product Catalog Pages (Single-currency pricing)
  const regionalProductPages: MetadataRoute.Sitemap = regionalProductCatalogs.map((catalog) => ({
    url: `${baseUrl}/market/${catalog.regionSlug}/products/upvc-pipes`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85, // High priority for conversion optimization
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...serviceAreaPages, ...supportPages, ...technicalPages, ...marketPages, ...regionalProductPages];
}
