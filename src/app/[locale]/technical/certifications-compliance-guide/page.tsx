// Quality & ISO Certifications Compliance Guide - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import CertificationsGuideClient from './CertificationsGuideClient';
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
        title: 'ISO & Quality Certifications for Pipes | Technical Guide | Crown Plastic Pipes',
        description: 'ISO 9001, BS EN 1452, ASTM D1785 & DIN 8062 compliance guide for UPVC pipes. Testing standards & certification requirements. Crown Plastic Pipes.',
        keywords: [
            'ISO 9001:2015 certification',
            'BS EN 1452',
            'ASTM D1785',
            'DIN 8062',
            'pipe quality standards',
            'international pipe compliance',
            'UAE pipe certification',
            'plastic pipe regulations',
            'ISO certified pipes',
            'Crown Plastic Pipes certified',
        ],
        alternates: {
            canonical: `${baseUrl}/${locale}/technical/certifications-compliance-guide`,
            languages: {
                'en': `${baseUrl}/en/technical/certifications-compliance-guide`,
                'ar': `${baseUrl}/ar/technical/certifications-compliance-guide`,
                'x-default': `${baseUrl}/en/technical/certifications-compliance-guide`,
            },
        },
        openGraph: {
            title: 'Quality & ISO Certifications: Complete Compliance Guide for Pipes',
            description: 'Everything you need to know about ISO, BS EN, ASTM, and DIN certification for plastic pipes.',
            url: `${baseUrl}/${locale}/technical/certifications-compliance-guide`,
            siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
            locale: isAr ? 'ar_AE' : 'en_AE',
            alternateLocale: [isAr ? 'en_AE' : 'ar_AE'],
            type: 'article',
            publishedTime: '2024-01-30T00:00:00Z',
            modifiedTime: '2025-05-01T00:00:00Z',
            authors: ['Crown Plastic Pipes Technical Team'],
            images: [
                {
                    url: `${baseUrl}/images/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Quality & ISO Certifications Guide',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Quality & ISO Certifications Guide for Pipes',
            description: 'Complete guide to international quality certifications and standards compliance.',
            images: [`${baseUrl}/images/og-image.jpg`],
        },
    };
}

export default function CertificationsGuidePage() {
    return (
        <>
            <OrganizationSchema />
            <CertificationsGuideClient />
        </>
    );
}
