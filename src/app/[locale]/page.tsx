import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

// ═══════════════════════════════════════════════════════════════════════════════
// HOMEPAGE SEO METADATA
// Dedicated metadata for the highest-value page on the site.
// Locale-aware: Arabic pages get Arabic title & description for GCC CTR.
// ═══════════════════════════════════════════════════════════════════════════════

const baseUrl = 'https://crownplasticuae.com';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';

  const title = isAr
    ? 'كراون بلاستيك للأنابيب والوصلات | أنابيب UPVC PPR HDPE الإمارات'
    : 'Crown Plastic Pipes / Fittings | Leading UPVC, PPR, HDPE Manufacturer UAE';

  const description = isAr
    ? 'كراون بلاستيك هي شركة رائدة في تصنيع أنابيب ووصلات UPVC و PPR و HDPE عالية الجودة في الإمارات. حاصلة على شهادة ISO 9001:2015، تخدم دبي والشارقة وأبوظبي ودول الخليج.'
    : 'Crown Plastic is a premier manufacturer of high-quality UPVC, PPR, and HDPE Pipes / Fittings in the UAE. ISO 9001:2015 certified, serving Dubai, Sharjah, Abu Dhabi & GCC.';

  const urlEn = `${baseUrl}/en`;
  const urlAr = `${baseUrl}/ar`;

  return {
    title,
    description,
    alternates: {
      canonical: isAr ? urlAr : urlEn,
      languages: {
        'en': urlEn,
        'ar': urlAr,
        'x-default': urlEn,
      },
    },
    openGraph: {
      title,
      description,
      url: isAr ? urlAr : urlEn,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: isAr ? ['en_AE'] : ['ar_AE'],
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isAr
            ? 'مصنع كراون بلاستيك - أنابيب ووصلات UPVC PPR HDPE الإمارات'
            : 'Crown Plastic Pipes Factory - UPVC PPR HDPE Pipes / Fittings UAE',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function HomePage() {
  return <HomePageClient />;
}
