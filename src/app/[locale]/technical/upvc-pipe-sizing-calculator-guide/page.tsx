// UPVC Pipe Sizing Calculator Guide - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import PipeSizingGuideClient from './PipeSizingGuideClient';
import { OrganizationSchema } from '@/components/schemas/OrganizationSchema';

const baseUrl = 'https://crownplasticuae.com';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';

  return {
    title: 'UPVC Pipe Sizing Calculator & Guide | Technical Guide | Crown Plastic Pipes',
    description: 'UPVC pipe sizing formulas, flow rate calculator & pressure drop tables. Select the right diameter for your project. Crown Plastic Pipes.',
    keywords: [
      'UPVC pipe sizing',
      'pipe sizing calculator',
      'water pipe sizing',
      'flow rate calculation',
      'pipe diameter selection',
      'pressure drop calculation',
      'pipe sizing formula',
      'plumbing pipe sizes',
      'water supply pipe sizing',
      'Crown Plastic Pipes sizing',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/technical/upvc-pipe-sizing-calculator-guide`,
      languages: {
        'en': `${baseUrl}/en/technical/upvc-pipe-sizing-calculator-guide`,
        'ar': `${baseUrl}/ar/technical/upvc-pipe-sizing-calculator-guide`,
        'x-default': `${baseUrl}/en/technical/upvc-pipe-sizing-calculator-guide`,
      },
    },
    openGraph: {
      title: 'UPVC Pipe Sizing Guide: Formulas, Tables & Calculator',
      description: 'Learn how to size UPVC pipes correctly. Flow rate formulas, pressure calculations, and sizing tables.',
      url: `${baseUrl}/${locale}/technical/upvc-pipe-sizing-calculator-guide`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'article',
      publishedTime: '2024-02-01T00:00:00Z',
      modifiedTime: '2025-05-01T00:00:00Z',
      authors: ['Crown Plastic Pipes Technical Team'],
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'UPVC Pipe Sizing Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'UPVC Pipe Sizing Calculator Guide',
      description: 'Complete guide to sizing UPVC pipes with formulas and reference tables.',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function PipeSizingGuidePage() {
  return (
    <>
      <OrganizationSchema />
      <PipeSizingGuideClient />
    </>
  );
}
