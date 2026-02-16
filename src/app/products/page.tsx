import type { Metadata } from 'next';
import ProductsHubClient from './ProductsHubClient';

export const metadata: Metadata = {
    title: 'Premium Plastic Piping Systems | Crown Plastic Pipes',
    description:
        'Explore 5,000+ UPVC, PPR, and HDPE piping solutions engineered for Gulf infrastructure. ISO 9001:2015 certified, 30+ years of manufacturing excellence.',
    openGraph: {
        title: 'Premium Plastic Piping Systems | Crown Plastic Pipes',
        description:
            'Explore 5,000+ UPVC, PPR, and HDPE piping solutions engineered for Gulf infrastructure. ISO 9001:2015 certified, 30+ years of manufacturing excellence.',
        url: 'https://crownplasticuae.com/products',
        siteName: 'Crown Plastic Pipes',
        type: 'website',
    },
    alternates: { canonical: 'https://crownplasticuae.com/products' },
};

export default function ProductsPage() {
    return <ProductsHubClient />;
}
