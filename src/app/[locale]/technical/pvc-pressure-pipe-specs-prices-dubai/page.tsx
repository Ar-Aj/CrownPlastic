// PVC High Pressure Pipe Specs & Prices Dubai - Technical Article Page
// Phase 5 BOFU - Commercial Intent SEO

import { Metadata } from 'next';
import PVCPressureDubaiClient from './PVCPressureDubaiClient';
import { OrganizationSchema } from '@/components/schemas/OrganizationSchema';

const baseUrl = 'https://crownplasticuae.com';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';
  const slug = 'pvc-pressure-pipe-specs-prices-dubai';

  return {
    title: isAr
      ? 'أنابيب PVC للضغط العالي في دبي | مواصفات PN10 و PN16 | كراون بلاستيك'
      : 'PVC Pressure Pipes / Fittings in Dubai | PN10 & PN16 Specs',
    description: isAr
      ? 'دليل شامل لمواصفات أنابيب PVC للضغط العالي، الفرق بين PN10 و PN16، والتوريد لمشاريع الأبراج السكنية في دبي.'
      : 'Complete guide to PVC pressure pipe specifications, PN10 vs PN16 differences, and procurement for high-rise plumbing projects in Dubai.',
    keywords: [
      'PVC pressure pipes Dubai',
      'PN10 vs PN16 pipes',
      'high-rise plumbing Dubai',
      'PVC pipe specifications UAE',
      'Crown Plastic pressure pipes',
      'BS EN 1452 Dubai',
      'water supply pipes UAE',
      'PVC Pipes / Fittings Dubai',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/technical/${slug}`,
      languages: {
        en: `${baseUrl}/en/technical/${slug}`,
        ar: `${baseUrl}/ar/technical/${slug}`,
        'x-default': `${baseUrl}/en/technical/${slug}`,
      },
    },
    openGraph: {
      title: isAr
        ? 'مواصفات أنابيب PVC للضغط العالي وأسعارها في دبي'
        : 'PVC High Pressure Pipe Specifications & Prices in Dubai',
      description: isAr
        ? 'دليل مواصفات أنابيب PVC للضغط العالي PN10 مقابل PN16 لمشاريع البنية التحتية في دبي والإمارات.'
        : 'PVC pressure pipe specs guide: PN10 vs PN16 for Dubai high-rise and infrastructure projects.',
      url: `${baseUrl}/${locale}/technical/${slug}`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'article',
      publishedTime: '2025-05-13T00:00:00Z',
      modifiedTime: '2025-05-13T00:00:00Z',
      authors: ['Crown Plastic Pipes Technical Team'],
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isAr ? 'أنابيب PVC للضغط العالي في دبي' : 'PVC Pressure Pipes in Dubai',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr
        ? 'مواصفات أنابيب PVC للضغط العالي في دبي'
        : 'PVC High Pressure Pipe Specs Dubai',
      description: isAr
        ? 'مقارنة PN10 و PN16 لمشاريع دبي.'
        : 'PN10 vs PN16 comparison for Dubai projects.',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function PVCPressureDubaiPage() {
  return (
    <>
      <OrganizationSchema />
      <PVCPressureDubaiClient />
    </>
  );
}
