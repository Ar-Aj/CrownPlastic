// UPVC vs PVC vs PPR Comparison - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import UPVCComparisonClient from './UPVCComparisonClient';
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
    title: 'UPVC vs PVC vs PPR Pipes Comparison | Technical Guide | Crown Plastic Pipes',
    description: 'Compare UPVC, PVC & PPR pipes: durability, pressure ratings, temperature limits & cost. Expert specs table to choose the right pipe. Crown Plastic Pipes.',
    keywords: [
      'UPVC vs PVC',
      'UPVC vs PPR',
      'PVC vs PPR pipes',
      'pipe material comparison',
      'best pipes for water supply',
      'UPVC pipe advantages',
      'PPR pipe temperature',
      'PVC pipe applications',
      'plastic pipe comparison',
      'which pipe is best',
      'Crown Plastic Pipes comparison',
      'unplasticized PVC',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/technical/upvc-vs-pvc-vs-ppr-comparison`,
      languages: {
        'en': `${baseUrl}/en/technical/upvc-vs-pvc-vs-ppr-comparison`,
        'ar': `${baseUrl}/ar/technical/upvc-vs-pvc-vs-ppr-comparison`,
        'x-default': `${baseUrl}/en/technical/upvc-vs-pvc-vs-ppr-comparison`,
      },
    },
    openGraph: {
      title: 'UPVC vs PVC vs PPR: Which Pipe Material Should You Choose?',
      description: 'Detailed comparison of three major plastic pipe materials. Tables, specs, applications, and expert recommendations.',
      url: `${baseUrl}/${locale}/technical/upvc-vs-pvc-vs-ppr-comparison`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'article',
      publishedTime: '2024-01-20T00:00:00Z',
      modifiedTime: '2025-05-01T00:00:00Z',
      authors: ['Crown Plastic Pipes Technical Team'],
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'UPVC vs PVC vs PPR Pipe Comparison',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'UPVC vs PVC vs PPR Pipes Comparison',
      description: 'Complete technical comparison guide for plastic pipe materials.',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function UPVCComparisonPage() {
  return (
    <>
      <OrganizationSchema />
      <UPVCComparisonClient />
    </>
  );
}
