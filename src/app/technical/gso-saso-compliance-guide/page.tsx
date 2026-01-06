// GSO SASO Compliance Guide - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import GSOSASOGuideClient from './GSOSASOGuideClient';

const baseUrl = 'https://crownplasticuae.com';

export const metadata: Metadata = {
  title: 'GSO and SASO Compliance Guide for Pipes | Gulf Standards 2024',
  description: 'Complete guide to GSO EN 805 and SASO TR-BM-5 compliance for plastic pipes in Gulf countries. Learn certification requirements, testing standards, and how Crown Plastic Pipes meets all GCC regulations.',
  keywords: [
    'GSO EN 805',
    'SASO certification',
    'SASO TR-BM-5',
    'Gulf Standard Organization',
    'Saudi Arabia pipe standards',
    'GCC pipe compliance',
    'UAE pipe certification',
    'plastic pipe regulations',
    'SASO quality mark',
    'Crown Plastic Pipes certified',
  ],
  alternates: {
    canonical: `${baseUrl}/technical/gso-saso-compliance-guide`,
  },
  openGraph: {
    title: 'GSO and SASO Pipe Standards: Complete Compliance Guide',
    description: 'Everything you need to know about GSO and SASO certification for plastic pipes in the Gulf region.',
    url: `${baseUrl}/technical/gso-saso-compliance-guide`,
    siteName: 'Crown Plastic Pipes',
    locale: 'en_AE',
    type: 'article',
    publishedTime: '2024-01-30T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Crown Plastic Pipes Technical Team'],
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'GSO SASO Compliance Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSO SASO Compliance Guide for Pipes',
    description: 'Complete guide to Gulf Standards Organization and SASO certification.',
  },
};

export default function GSOSASOGuidePage() {
  return <GSOSASOGuideClient />;
}
