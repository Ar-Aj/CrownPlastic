// BS EN 1452 Complete Guide - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import BSEN1452GuideClient from './BSEN1452GuideClient';
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
    title: 'BS EN 1452 Standard for UPVC Pipes | Technical Guide | Crown Plastic Pipes',
    description: 'BS EN 1452 UPVC pressure pipe standard explained: MRS 25 MPa, PN10–PN25 ratings, material specs & testing. Expert resource. Crown Plastic Pipes.',
    keywords: [
      'BS EN 1452',
      'UPVC pressure pipes standard',
      'MRS 25 MPa',
      'PN10 PN16 pressure rating',
      'European pipe standard',
      'UPVC water supply pipes',
      'plastic pipe specifications',
      'potable water pipes standard',
      'Crown Plastic Pipes BS EN 1452',
      'DIN 8062 comparison',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/technical/bs-en-1452-complete-guide`,
      languages: {
        'en': `${baseUrl}/en/technical/bs-en-1452-complete-guide`,
        'ar': `${baseUrl}/ar/technical/bs-en-1452-complete-guide`,
        'x-default': `${baseUrl}/en/technical/bs-en-1452-complete-guide`,
      },
    },
    openGraph: {
      title: 'BS EN 1452 Standard: Complete Technical Guide',
      description: 'Everything you need to know about BS EN 1452 - the European standard for UPVC pressure pipes. MRS ratings, pressure classes, specifications.',
      url: `${baseUrl}/${locale}/technical/bs-en-1452-complete-guide`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'article',
      publishedTime: '2024-01-15T00:00:00Z',
      modifiedTime: '2025-05-01T00:00:00Z',
      authors: ['Crown Plastic Pipes Technical Team'],
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'BS EN 1452 UPVC Pipe Standard Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BS EN 1452 Standard Complete Guide',
      description: 'Comprehensive technical guide to BS EN 1452 for UPVC pressure pipes.',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function BSEN1452GuidePage() {
  return (
    <>
      <OrganizationSchema />
      <BSEN1452GuideClient />
    </>
  );
}
