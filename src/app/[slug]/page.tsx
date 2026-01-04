// Service Area Page - Dynamic route for LocalBusiness schemas
// Routes: /upvc-pipes-dubai, /upvc-pipes-abu-dhabi, /upvc-pipes-sharjah, etc.

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceAreas } from '@/config/schemas';
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
  
  if (!area) {
    return {
      title: 'Service Area Not Found',
    };
  }

  const baseUrl = 'https://crownplasticuae.com';
  
  return {
    title: `UPVC Pipes ${area.city} | Crown Plastic Pipes Supplier`,
    description: area.description,
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
      title: `UPVC Pipes ${area.city} - Crown Plastic Pipes`,
      description: area.description,
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
      title: `UPVC Pipes ${area.city} | Crown Plastic Pipes`,
      description: area.description,
    },
  };
}

export default function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const area = serviceAreas.find((a) => a.slug === params.slug);
  
  if (!area) {
    notFound();
  }

  return <ServiceAreaClient area={area} />;
}
