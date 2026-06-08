import { MetadataRoute } from 'next';
import { productCategories } from '@/config/products';
import { serviceAreas } from '@/config/schemas';
import { allRegionalMarkets } from '@/config/markets';
import { regionalProductCatalogs } from '@/config/regional-products';
import { blogArticles } from '@/content/blogs';
import { ALL_CATEGORY_IDS, ALL_REGION_SLUGS } from '@/data/zipperContent';

// ─────────────────────────────────────────────────────────────
// Trilingual Sitemap Generator
// Every URL has /en/, /ar/, and /fr/ variants with hreflang alternates
// ─────────────────────────────────────────────────────────────

const baseUrl = 'https://crownplasticuae.com';
const locales = ['en', 'ar', 'fr'] as const;

/**
 * Generate sitemap entries for both locales with hreflang alternates.
 * Each path produces 2 URL entries (EN + AR) with cross-linked alternates.
 */
function bilingualEntries(
  path: string,
  opts: { priority: number; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }
): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}${path}`,
    lastModified: new Date(),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static Pages ──────────────────────────────────────────
  const staticPages = [
    ...bilingualEntries('', { priority: 1.0, changeFrequency: 'weekly' }),
    ...bilingualEntries('/about-us', { priority: 0.8, changeFrequency: 'monthly' }),
    ...bilingualEntries('/products', { priority: 0.9, changeFrequency: 'weekly' }),
    ...bilingualEntries('/innovation', { priority: 0.7, changeFrequency: 'monthly' }),
    ...bilingualEntries('/sustainability', { priority: 0.7, changeFrequency: 'monthly' }),
    ...bilingualEntries('/resources', { priority: 0.6, changeFrequency: 'monthly' }),
    ...bilingualEntries('/contact-us', { priority: 0.8, changeFrequency: 'monthly' }),
    ...bilingualEntries('/join-us', { priority: 0.6, changeFrequency: 'monthly' }),
    ...bilingualEntries('/media-blogs', { priority: 0.6, changeFrequency: 'weekly' }),
    ...bilingualEntries('/privacy-policy', { priority: 0.3, changeFrequency: 'yearly' }),
    ...bilingualEntries('/sitemap', { priority: 0.4, changeFrequency: 'monthly' }),
  ];

  // ── Product Category Pages ────────────────────────────────
  const categoryPages = productCategories.flatMap((category) =>
    bilingualEntries(`/products/${category.slug}`, { priority: 0.85, changeFrequency: 'weekly' })
  );

  // ── Product Detail Pages ──────────────────────────────────
  const productPages = productCategories.flatMap((category) =>
    category.subProducts.flatMap((product) =>
      bilingualEntries(`/products/${category.slug}/${product.slug}`, { priority: 0.7, changeFrequency: 'monthly' })
    )
  );

  // ── Service Area Pages (LocalBusiness schema for AEO) ─────
  const serviceAreaPages = serviceAreas.flatMap((area) =>
    bilingualEntries(`/${area.slug}`, { priority: 0.75, changeFrequency: 'monthly' })
  );

  // ── Support Pages ─────────────────────────────────────────
  const supportPages = bilingualEntries('/support/faqs', { priority: 0.9, changeFrequency: 'monthly' });

  // ── Technical Guide Pages ─────────────────────────────────
  const technicalPages = [
    ...bilingualEntries('/technical', { priority: 0.8, changeFrequency: 'weekly' }),
    ...bilingualEntries('/technical/bs-en-1452-complete-guide', { priority: 0.85, changeFrequency: 'monthly' }),
    ...bilingualEntries('/technical/upvc-vs-pvc-vs-ppr-comparison', { priority: 0.85, changeFrequency: 'monthly' }),
    ...bilingualEntries('/technical/upvc-installation-best-practices', { priority: 0.85, changeFrequency: 'monthly' }),
    ...bilingualEntries('/technical/certifications-compliance-guide', { priority: 0.85, changeFrequency: 'monthly' }),
    ...bilingualEntries('/technical/upvc-pipe-sizing-calculator-guide', { priority: 0.85, changeFrequency: 'monthly' }),
    ...bilingualEntries('/technical/pvc-pressure-pipe-specs-prices-dubai', { priority: 0.85, changeFrequency: 'monthly' }),
    ...bilingualEntries('/technical/upvc-drainage-pipes-saline-soil-abu-dhabi', { priority: 0.85, changeFrequency: 'monthly' }),
    ...bilingualEntries('/technical/dubai-municipality-compliant-ppr-pipes', { priority: 0.85, changeFrequency: 'monthly' }),
    ...bilingualEntries('/technical/hdpe-vs-upvc-municipal-infrastructure-gcc', { priority: 0.85, changeFrequency: 'monthly' }),
  ];

  // ── Market Pages ──────────────────────────────────────────
  const marketPages = [
    ...bilingualEntries('/market', { priority: 0.8, changeFrequency: 'monthly' }),
    ...allRegionalMarkets.flatMap((market) =>
      bilingualEntries(`/market/${market.slug}`, { priority: 0.8, changeFrequency: 'monthly' })
    ),
  ];

  // ── Regional Product Catalog Pages ────────────────────────
  const regionalProductPages = regionalProductCatalogs.flatMap((catalog) =>
    bilingualEntries(`/products/regional/${catalog.regionSlug}/upvc-pipes`, { priority: 0.85, changeFrequency: 'weekly' })
  );

  // ── Blog Pages ────────────────────────────────────────────
  const blogPages = [
    ...bilingualEntries('/blogs', { priority: 0.7, changeFrequency: 'weekly' }),
    ...blogArticles.flatMap((article) =>
      bilingualEntries(`/blogs/${article.slug}`, { priority: 0.65, changeFrequency: 'monthly' })
    ),
  ];

  // ── Programmatic Zipper Pages (Product × Location) ────────
  // 13 categories × 6 regions = 78 paths × 2 locales = 156 URLs
  const solutionsPages = ALL_CATEGORY_IDS.flatMap((categoryId) =>
    ALL_REGION_SLUGS.flatMap((regionSlug) =>
      bilingualEntries(`/solutions/${categoryId}/${regionSlug}`, { priority: 0.9, changeFrequency: 'weekly' })
    )
  );

  return [
    ...staticPages,
    ...categoryPages,
    ...productPages,
    ...serviceAreaPages,
    ...supportPages,
    ...technicalPages,
    ...marketPages,
    ...regionalProductPages,
    ...blogPages,
    ...solutionsPages,
  ];
}

