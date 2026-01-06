// Regional Product Catalog Page - Phase 3 AEO Fix
// Separate regional pages with single-currency pricing
// Using route: /products/regional/[country]/upvc-pipes

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRegionalCatalog, getRegionalPricing, getAllRegionSlugs } from '@/config/regional-products';
import RegionalProductCatalogClient from './RegionalProductCatalogClient';

const baseUrl = 'https://crownplasticuae.com';

interface PageProps {
  params: Promise<{ country: string }>;
}

// Generate static params for all regions
export async function generateStaticParams() {
  return getAllRegionSlugs().map((regionSlug) => ({
    country: regionSlug,
  }));
}

// Generate metadata with canonical tag
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const catalog = getRegionalCatalog(resolvedParams.country);

  if (!catalog) {
    return {
      title: 'Product Catalog Not Found',
    };
  }

  return {
    title: catalog.title,
    description: catalog.description,
    keywords: [
      `UPVC pipes ${catalog.region}`,
      `${catalog.currency} pricing UPVC`,
      `pipe supplier ${catalog.region}`,
      `${catalog.region} construction materials`,
      ...catalog.certifications,
    ],
    alternates: {
      // Canonical points to main product page to prevent duplication concerns
      canonical: catalog.canonicalBase,
      languages: {
        'en': `/products/regional/${resolvedParams.country}/upvc-pipes`,
        'ar': `/products/regional/${resolvedParams.country}/upvc-pipes`,
      },
    },
    openGraph: {
      title: catalog.title,
      description: catalog.description,
      url: `${baseUrl}/products/regional/${resolvedParams.country}/upvc-pipes`,
      type: 'website',
      locale: 'en_AE',
    },
  };
}

export default async function RegionalProductCatalogPage({ params }: PageProps) {
  const resolvedParams = await params;
  const catalog = getRegionalCatalog(resolvedParams.country);
  const products = getRegionalPricing(resolvedParams.country);

  if (!catalog) {
    notFound();
  }

  return <RegionalProductCatalogClient catalog={catalog} products={products} />;
}

// Make page static
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate daily
