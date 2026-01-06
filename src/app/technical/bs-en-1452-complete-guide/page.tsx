// BS EN 1452 Complete Guide - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import BSEN1452GuideClient from './BSEN1452GuideClient';

const baseUrl = 'https://crownplasticuae.com';

export const metadata: Metadata = {
  title: 'BS EN 1452 Standard Complete Guide | UPVC Pressure Pipes Explained',
  description: 'Comprehensive guide to BS EN 1452 standard for UPVC pressure pipes. Learn about MRS 25 MPa, pressure ratings (PN10-PN25), material specifications, testing requirements, and compliance. Expert technical resource from Crown Plastic Pipes.',
  keywords: [
    'BS EN 1452',
    'UPVC pressure pipes standard',
    'MRS 25 MPa',
    'PN10 PN16 pressure rating',
    'European pipe standard',
    'UPVC water supply pipes',
    'plastic pipe specifications',
    'potable water pipes standard',
    'Crown Plastic Pipes BS EN 1452',
    'DIN 8062 comparison',
  ],
  alternates: {
    canonical: `${baseUrl}/technical/bs-en-1452-complete-guide`,
  },
  openGraph: {
    title: 'BS EN 1452 Standard: Complete Technical Guide',
    description: 'Everything you need to know about BS EN 1452 - the European standard for UPVC pressure pipes. MRS ratings, pressure classes, specifications.',
    url: `${baseUrl}/technical/bs-en-1452-complete-guide`,
    siteName: 'Crown Plastic Pipes',
    locale: 'en_AE',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Crown Plastic Pipes Technical Team'],
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'BS EN 1452 UPVC Pipe Standard Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BS EN 1452 Standard Complete Guide',
    description: 'Comprehensive technical guide to BS EN 1452 for UPVC pressure pipes.',
  },
};

export default function BSEN1452GuidePage() {
  return <BSEN1452GuideClient />;
}
