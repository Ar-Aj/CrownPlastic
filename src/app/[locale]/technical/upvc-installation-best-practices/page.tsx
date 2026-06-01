// UPVC Installation Best Practices - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import InstallationGuideClient from './InstallationGuideClient';
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
    title: 'UPVC Pipe Installation Best Practices | Technical Guide | Crown Plastic Pipes',
    description: 'Step-by-step UPVC pipe installation: solvent cement, joint prep, curing times & pressure testing. Avoid common mistakes. Crown Plastic Pipes.',
    keywords: [
      'UPVC pipe installation',
      'how to install UPVC pipes',
      'solvent cement application',
      'UPVC joint preparation',
      'pipe installation guide',
      'pressure pipe installation',
      'UPVC fitting insertion depth',
      'pipe curing time',
      'plumbing installation tips',
      'Crown Plastic Pipes installation',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/technical/upvc-installation-best-practices`,
      languages: {
        'en': `${baseUrl}/en/technical/upvc-installation-best-practices`,
        'ar': `${baseUrl}/ar/technical/upvc-installation-best-practices`,
        'x-default': `${baseUrl}/en/technical/upvc-installation-best-practices`,
      },
    },
    openGraph: {
      title: 'How to Install UPVC Pipes: Professional Best Practices',
      description: 'Step-by-step installation guide with expert tips. Proper techniques for solvent cement, joints, and pressure testing.',
      url: `${baseUrl}/${locale}/technical/upvc-installation-best-practices`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'article',
      publishedTime: '2024-01-25T00:00:00Z',
      modifiedTime: '2025-05-01T00:00:00Z',
      authors: ['Crown Plastic Pipes Technical Team'],
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'UPVC Pipe Installation Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'UPVC Pipe Installation Best Practices',
      description: 'Professional step-by-step guide to installing UPVC pipes correctly.',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function InstallationGuidePage() {
  return (
    <>
      <OrganizationSchema />
      <InstallationGuideClient />
    </>
  );
}
