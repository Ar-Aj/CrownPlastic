import type { Metadata } from 'next';
import { getCategoryBySlug, productCategories } from '@/config/products';
import { en } from '@/i18n/en';
import { ar } from '@/i18n/ar';
import CategoryClient from './CategoryClient';

interface CategoryPageProps {
  params: { locale: string; category: string };
}

// Pre-render all product category pages at build time
export async function generateStaticParams() {
  return productCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);

  if (!cat) {
    return {
      title: 'Product Category | Crown Plastic Pipes',
      description: 'Browse our product range.',
    };
  }

  const baseUrl = 'https://crownplasticuae.com';
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';
  const translations = isAr ? ar : en;
  const catName = isAr ? (cat.nameAr || cat.name) : cat.name;

  // ─── Commercial intent SEO overrides (per-category slug) ───────────
  // Falls back to generic template if no override exists for this slug.
  const overrides = translations.products.seo.category_overrides as
    Record<string, { meta_title: string; h1: string; hero_subtext: string }> | undefined;
  const override = overrides?.[params.category];

  const rawTitle = override?.meta_title
    ?? translations.products.seo.category_title_template.replace('{category}', catName);
  const description = override?.hero_subtext
    ?? translations.products.seo.category_description_template.replace('{category}', catName);

  // Use absolute title when override already contains the brand name,
  // otherwise let the root layout template append '| Crown Plastic Pipes'
  const title = override ? { absolute: rawTitle } : rawTitle;

  const urlEn = `${baseUrl}/en/products/${params.category}`;
  const urlAr = `${baseUrl}/ar/products/${params.category}`;

  return {
    title,
    description,
    openGraph: {
      title: rawTitle,
      description,
      url: isAr ? urlAr : urlEn,
      siteName: isAr ? '\u0643\u0631\u0627\u0648\u0646 \u0628\u0644\u0627\u0633\u062a\u064a\u0643' : 'Crown Plastic Pipes',
      type: 'website',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: rawTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: rawTitle,
      description,
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: isAr ? urlAr : urlEn,
      languages: {
        'en': urlEn,
        'ar': urlAr,
        'x-default': urlEn,
      },
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryClient params={params} />;
}
