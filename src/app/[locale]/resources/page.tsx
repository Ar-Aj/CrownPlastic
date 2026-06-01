import type { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';

export const metadata: Metadata = {
    title: 'Technical Resources & Specifications | Crown Plastic Pipes',
    description:
        'Explore our comprehensive library of technical specifications, material properties, and ISO certifications for UPVC, PPR, and HDPE piping systems.',
    openGraph: {
        title: 'Technical Resources & Specifications | Crown Plastic Pipes',
        description:
            'Explore our comprehensive library of technical specifications, material properties, and ISO certifications for UPVC, PPR, and HDPE piping systems.',
        url: 'https://crownplasticuae.com/resources',
        siteName: 'Crown Plastic Pipes',
        type: 'website',
    },
    alternates: { canonical: 'https://crownplasticuae.com/resources' },
};

export default function ResourcesPage() {
    return <ResourcesClient />;
}
