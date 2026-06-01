// Technical Guides Hub Page - SEO Landing Page
// Phase 5 BOFU - Content Velocity Hub

import { Metadata } from 'next';
import TechnicalHubClient from './TechnicalHubClient';
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
    title: isAr
      ? 'الأدلة التقنية | أنابيب UPVC و PPR و HDPE | كراون بلاستيك'
      : 'Technical Guides | UPVC, PPR & HDPE Pipes / Fittings | Crown Plastic',
    description: isAr
      ? 'مكتبة الأدلة التقنية الشاملة لأنابيب UPVC و PPR و HDPE. مواصفات، معايير، مقارنات، وأفضل ممارسات التركيب من كراون بلاستيك.'
      : 'Comprehensive technical guide library for UPVC, PPR & HDPE Pipes / Fittings. Specifications, standards, comparisons, and installation best practices from Crown Plastic.',
    alternates: {
      canonical: `${baseUrl}/${locale}/technical`,
      languages: {
        en: `${baseUrl}/en/technical`,
        ar: `${baseUrl}/ar/technical`,
        'x-default': `${baseUrl}/en/technical`,
      },
    },
    openGraph: {
      title: isAr ? 'الأدلة التقنية | كراون بلاستيك' : 'Technical Guides | Crown Plastic Pipes',
      description: isAr
        ? 'أدلة تقنية متخصصة لمهندسي ومقاولي أنظمة الأنابيب في الإمارات والخليج.'
        : 'Expert technical guides for piping system engineers and contractors across UAE and GCC.',
      url: `${baseUrl}/${locale}/technical`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'website',
      images: [{ url: `${baseUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: isAr ? 'أدلة كراون بلاستيك التقنية' : 'Crown Plastic Technical Guides' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr ? 'الأدلة التقنية | كراون بلاستيك' : 'Technical Guides | Crown Plastic',
      description: isAr ? 'مكتبة أدلة تقنية شاملة.' : 'Comprehensive technical guide library.',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function TechnicalHubPage() {
  return (
    <>
      <OrganizationSchema />
      <TechnicalHubClient />
    </>
  );
}
