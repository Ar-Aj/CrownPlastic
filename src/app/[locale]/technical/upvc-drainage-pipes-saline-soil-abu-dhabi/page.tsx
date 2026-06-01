// UPVC Drainage Pipes for Saline Soil Abu Dhabi - Technical Article Page
// Phase 5 BOFU - Commercial Intent SEO

import { Metadata } from 'next';
import UPVCDrainageSalineClient from './UPVCDrainageSalineClient';
import { OrganizationSchema } from '@/components/schemas/OrganizationSchema';

const baseUrl = 'https://crownplasticuae.com';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';
  const slug = 'upvc-drainage-pipes-saline-soil-abu-dhabi';

  return {
    title: isAr
      ? 'أنابيب UPVC للصرف في التربة الملحية بأبوظبي | كراون بلاستيك'
      : 'UPVC Drainage Pipes / Fittings for Saline Soil in Abu Dhabi',
    description: isAr
      ? 'اكتشف لماذا أنظمة صرف UPVC مصمّمة خصيصاً لتحمّل ظروف التربة الملحية القاسية في أبوظبي ودول الخليج.'
      : 'Discover why our UPVC drainage systems are engineered for the harsh, highly saline soil conditions found in Abu Dhabi and across the GCC.',
    keywords: [
      'UPVC drainage pipes Abu Dhabi',
      'saline soil pipes UAE',
      'BS EN 1401 drainage',
      'BS EN 1329 pipes',
      'sabkha soil piping',
      'UPVC Pipes / Fittings GCC',
      'Crown Plastic drainage',
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
        ? 'أفضل أنابيب UPVC للصرف في التربة الملحية بأبوظبي'
        : 'Best UPVC Drainage Pipes for Saline Soil in Abu Dhabi & GCC',
      description: isAr
        ? 'حلول صرف UPVC المقاومة للتربة الملحية والسبخة لمشاريع أبوظبي ودول الخليج.'
        : 'UPVC drainage solutions resistant to saline sabkha soil for Abu Dhabi and GCC projects.',
      url: `${baseUrl}/${locale}/technical/${slug}`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'article',
      publishedTime: '2025-05-13T00:00:00Z',
      modifiedTime: '2025-05-13T00:00:00Z',
      authors: ['Crown Plastic Pipes Technical Team'],
      images: [{ url: `${baseUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: isAr ? 'أنابيب UPVC للصرف في أبوظبي' : 'UPVC Drainage Pipes Abu Dhabi' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr ? 'أنابيب UPVC للتربة الملحية في أبوظبي' : 'UPVC Drainage Pipes for Saline Soil Abu Dhabi',
      description: isAr ? 'حلول صرف مقاومة للملوحة لمشاريع الخليج.' : 'Salinity-resistant drainage solutions for GCC projects.',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function UPVCDrainageSalinePage() {
  return (
    <>
      <OrganizationSchema />
      <UPVCDrainageSalineClient />
    </>
  );
}
