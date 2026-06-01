// Dubai Municipality Compliant PPR Pipes - Technical Article Page
// Phase 5 BOFU - Commercial Intent SEO

import { Metadata } from 'next';
import PPRMunicipalityClient from './PPRMunicipalityClient';
import { OrganizationSchema } from '@/components/schemas/OrganizationSchema';

const baseUrl = 'https://crownplasticuae.com';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';
  const slug = 'dubai-municipality-compliant-ppr-pipes';

  return {
    title: isAr
      ? 'أنابيب PPR معتمدة من بلدية دبي | دليل المقاول | كراون بلاستيك'
      : 'Municipality Compliant PPR Pipes / Fittings in UAE | Crown Plastic',
    description: isAr
      ? 'دليل المقاول لتوريد أنابيب PPR للمياه الساخنة والباردة المعتمدة من بلدية دبي والشارقة لمشاريع MEP السكنية والتجارية.'
      : "A contractor's guide to sourcing Dubai and Sharjah Municipality compliant PPR hot and cold water pipes for residential and commercial MEP projects.",
    keywords: [
      'PPR pipes Dubai Municipality',
      'municipality compliant pipes UAE',
      'PPR hot cold water pipes',
      'DIN 8077 PPR',
      'DIN 8078 PPR',
      'PPR Pipes / Fittings UAE',
      'heat fusion welding PPR',
      'Crown Plastic PPR',
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
      title: isAr ? 'أنابيب PPR المعتمدة من بلدية دبي: دليل المقاول' : "Dubai Municipality Compliant PPR Pipes / Fittings: The Contractor's Guide",
      description: isAr ? 'كل ما يحتاجه المقاول عن أنابيب PPR المعتمدة في الإمارات.' : 'Everything contractors need to know about municipality-approved PPR Pipes / Fittings in the UAE.',
      url: `${baseUrl}/${locale}/technical/${slug}`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      type: 'article',
      publishedTime: '2025-05-13T00:00:00Z',
      modifiedTime: '2025-05-13T00:00:00Z',
      authors: ['Crown Plastic Pipes Technical Team'],
      images: [{ url: `${baseUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: isAr ? 'أنابيب PPR معتمدة من بلدية دبي' : 'Municipality Compliant PPR Pipes' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr ? 'أنابيب PPR المعتمدة من بلدية دبي' : 'Municipality Compliant PPR Pipes UAE',
      description: isAr ? 'دليل المقاول لأنابيب PPR في الإمارات.' : "Contractor's guide to PPR Pipes / Fittings in the UAE.",
      images: [`${baseUrl}/images/og-image.jpg`],
    },
  };
}

export default function PPRMunicipalityPage() {
  return (
    <>
      <OrganizationSchema />
      <PPRMunicipalityClient />
    </>
  );
}
