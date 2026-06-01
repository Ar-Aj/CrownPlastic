// Service Area Page - Dynamic route for LocalBusiness schemas
// Routes: /upvc-pipes-dubai, /upvc-pipes-abu-dhabi, /upvc-pipes-sharjah, etc.

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceAreas } from '@/config/schemas';
import { regionsMap } from '@/data/regions';
import ServiceAreaClient from './ServiceAreaClient';

interface ServiceAreaPageProps {
  params: { slug: string };
}

// Generate static params for all service areas
export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

// Generate metadata for each service area page
export async function generateMetadata({ params }: ServiceAreaPageProps): Promise<Metadata> {
  const area = serviceAreas.find((a) => a.slug === params.slug);
  const region = regionsMap[params.slug];

  if (!area) {
    return {
      title: 'Service Area Not Found',
    };
  }

  const baseUrl = 'https://crownplasticuae.com';

  // Use enriched meta from regions data when available, fallback to original
  const metaTitle = region?.metaTitle || `UPVC Pipes ${area.city} | Crown Plastic Pipes Supplier`;
  const metaDesc = region?.metaDesc || area.description;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: [
      `UPVC pipes ${area.city}`,
      `PPR pipes ${area.city}`,
      `HDPE pipes ${area.city}`,
      `plastic pipes ${area.city}`,
      `pipe supplier ${area.city}`,
      `plumbing materials ${area.city}`,
      `BS EN 1452 ${area.city}`,
      `Crown Plastic Pipes ${area.city}`,
      ...area.districts.map((d) => `pipes ${d}`),
    ],
    alternates: {
      canonical: `${baseUrl}/${area.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `${baseUrl}/${area.slug}`,
      siteName: 'Crown Plastic Pipes',
      locale: 'en_AE',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `UPVC Pipes Supplier in ${area.city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDesc,
    },
  };
}

export default function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const area = serviceAreas.find((a) => a.slug === params.slug);
  const region = regionsMap[params.slug];

  if (!area || !region) {
    notFound();
  }

  return <ServiceAreaClient area={area} region={region} />;
}
