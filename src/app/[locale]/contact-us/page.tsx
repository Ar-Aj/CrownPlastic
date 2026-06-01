import type { Metadata } from 'next';
import ContactHubClient from './ContactHubClient';

const baseUrl = 'https://crownplasticuae.com';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';

  const title = 'Contact Crown Plastic Pipes | Quotes & Careers';
  const description =
    'Get in touch with Crown Plastic Pipes for general inquiries, project quotes, or career opportunities.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/contact-us`,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      type: 'website',
      locale: isAr ? 'ar_AE' : 'en_AE',
      alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Contact Crown Plastic Pipes',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/contact-us`,
      languages: {
        'en': `${baseUrl}/en/contact-us`,
        'ar': `${baseUrl}/ar/contact-us`,
        'x-default': `${baseUrl}/en/contact-us`,
      },
    },
  };
}

export default function ContactPage() {
  return <ContactHubClient />;
}
