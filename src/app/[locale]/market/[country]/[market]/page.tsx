// Regional Market Page - Dynamic Route
// Phase 3 AEO - Conversion Optimization & Regional Expansion

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allRegionalMarkets } from '@/config/markets';
import MarketPageClient from '../../MarketPageClient';

const baseUrl = 'https://crownplasticuae.com';

// Generate static params for all market pages
export async function generateStaticParams() {
  return allRegionalMarkets.map((market) => {
    const parts = market.slug.split('/');
    return {
      country: parts[0],
      market: parts[1],
    };
  });
}

// Generate metadata for each market page
export async function generateMetadata({
  params,
}: {
  params: { country: string; market: string };
}): Promise<Metadata> {
  const slug = `${params.country}/${params.market}`;
  const market = allRegionalMarkets.find((m) => m.slug === slug);

  if (!market) {
    return {
      title: 'Market Not Found',
    };
  }

  return {
    title: `${market.title} | Crown Plastic Pipes`,
    description: market.description,
    keywords: market.keywords,
    alternates: {
      canonical: `${baseUrl}/market/${market.slug}`,
    },
    openGraph: {
      title: market.title,
      description: market.description,
      url: `${baseUrl}/market/${market.slug}`,
      siteName: 'Crown Plastic Pipes',
      locale: 'en_AE',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: market.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: market.title,
      description: market.description,
    },
    other: {
      'geo.region': market.countryCode,
      'geo.placename': market.city || market.country,
    },
  };
}

export default function MarketPage({
  params,
}: {
  params: { country: string; market: string };
}) {
  const slug = `${params.country}/${params.market}`;
  const market = allRegionalMarkets.find((m) => m.slug === slug);

  if (!market) {
    notFound();
  }

  return <MarketPageClient market={market} />;
}
