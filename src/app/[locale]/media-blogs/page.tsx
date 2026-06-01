import { Metadata } from 'next';
import MediaBlogsClient from './MediaBlogsClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';
  const baseUrl = 'https://crownplasticuae.com';
  
  return {
    title: 'Media & Blogs | UPVC, PPR, HDPE Piping Insights | Crown Plastic Pipes',
    description: 'Explore videos and expert insights on UPVC, PPR, and HDPE piping systems for Gulf construction and infrastructure projects. Technical guides from Crown Plastic Pipes.',
    keywords: [
      'UPVC pipes videos',
      'piping solutions blog UAE',
      'plastic pipe guides GCC',
      'Crown Plastic media',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/media-blogs`,
    },
    openGraph: {
      title: 'Media & Blogs | Crown Plastic Pipes',
      description:
        'Videos, factory tours, and expert insights on UPVC, PPR, and HDPE Pipes / Fittings for Gulf infrastructure projects.',
      url: `${baseUrl}/${locale}/media-blogs`,
      siteName: 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'article',
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Media & Blogs | Crown Plastic Pipes',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Media & Blogs | Crown Plastic Pipes',
      description: 'Videos, factory tours, and expert insights on UPVC, PPR, and HDPE Pipes / Fittings.',
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function MediaBlogsPage() {
  return <MediaBlogsClient />;
}
