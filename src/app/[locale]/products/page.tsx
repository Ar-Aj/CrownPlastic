import type { Metadata } from 'next';
import ProductsHubClient from './ProductsHubClient';

const baseUrl = 'https://crownplasticuae.com';

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const locale = params.locale || 'en';
    const isAr = locale === 'ar';

    const title = 'Premium Plastic Piping Systems | Crown Plastic Pipes';
    const description =
        'Explore 5,000+ UPVC, PPR, and HDPE piping solutions engineered for Gulf infrastructure. ISO 9001:2015 certified, 30+ years of manufacturing excellence.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${locale}/products`,
            siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
            type: 'website',
            locale: isAr ? 'ar_AE' : 'en_AE',
            alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
            images: [
                {
                    url: `${baseUrl}/images/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Premium Plastic Piping Systems | Crown Plastic Pipes',
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
            canonical: `${baseUrl}/${locale}/products`,
            languages: {
                'en': `${baseUrl}/en/products`,
                'ar': `${baseUrl}/ar/products`,
                'x-default': `${baseUrl}/en/products`,
            },
        },
    };
}

export default function ProductsPage() {
    return <ProductsHubClient />;
}
