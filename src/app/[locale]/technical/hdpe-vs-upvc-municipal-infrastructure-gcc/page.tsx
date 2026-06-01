// HDPE vs UPVC Municipal Infrastructure GCC - Technical Article Page
// Phase 5 BOFU - Commercial Intent SEO

import { Metadata } from 'next';
import HDPEvsUPVCClient from './HDPEvsUPVCClient';
import { OrganizationSchema } from '@/components/schemas/OrganizationSchema';

const baseUrl = 'https://crownplasticuae.com';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';
  const slug = 'hdpe-vs-upvc-municipal-infrastructure-gcc';

  return {
    title: isAr
      ? 'HDPE مقابل UPVC للبنية التحتية البلدية في الخليج | كراون بلاستيك'
      : 'HDPE vs UPVC Pipes / Fittings for GCC Infrastructure Projects',
    description: isAr
      ? 'مقارنة شاملة بين أنابيب HDPE و UPVC لمشاريع البنية التحتية البلدية للمياه والصرف في الإمارات ودول الخليج.'
      : 'Compare HDPE and UPVC pipes for large-scale municipal water and drainage infrastructure across the UAE and GCC.',
    keywords: [
      'HDPE vs UPVC pipes',
      'municipal infrastructure GCC',
      'HDPE pipes UAE',
      'UPVC pipes UAE',
      'water infrastructure pipes',
      'ISO 4427 HDPE',
      'BS EN 1452 UPVC',
      'GCC pipe selection',
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
      title: isAr ? 'HDPE مقابل UPVC: اختيار الأنبوب المناسب للبنية التحتية' : 'HDPE vs UPVC: Selecting the Right Pipe for GCC Municipal Infrastructure',
      description: isAr ? 'مقارنة تقنية شاملة لمشاريع المياه والصرف البلدية.' : 'Comprehensive technical comparison for municipal water and drainage projects.',
      url: `${baseUrl}/${locale}/technical/${slug}`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'article',
      publishedTime: '2025-05-13T00:00:00Z',
      modifiedTime: '2025-05-13T00:00:00Z',
      authors: ['Crown Plastic Pipes Technical Team'],
      images: [{ url: `${baseUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: isAr ? 'مقارنة HDPE و UPVC' : 'HDPE vs UPVC Comparison' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr ? 'HDPE مقابل UPVC للبنية التحتية' : 'HDPE vs UPVC Infrastructure Comparison',
      description: isAr ? 'أيّ أنبوب تختار لمشروعك البلدي؟' : 'Which pipe to select for your municipal project?',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function HDPEvsUPVCPage() {
  return (
    <>
      <OrganizationSchema />
      <HDPEvsUPVCClient />
    </>
  );
}
