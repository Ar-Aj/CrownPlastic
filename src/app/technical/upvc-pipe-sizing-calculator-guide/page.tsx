// UPVC Pipe Sizing Calculator Guide - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import PipeSizingGuideClient from './PipeSizingGuideClient';

const baseUrl = 'https://crownplasticuae.com';

export const metadata: Metadata = {
  title: 'UPVC Pipe Sizing Guide & Calculator | Flow Rate & Pressure Calculator',
  description: 'Complete guide to sizing UPVC pipes for water supply systems. Learn pipe sizing formulas, flow rate calculations, pressure drop analysis, and use our reference tables. Expert guide from Crown Plastic Pipes.',
  keywords: [
    'UPVC pipe sizing',
    'pipe sizing calculator',
    'water pipe sizing',
    'flow rate calculation',
    'pipe diameter selection',
    'pressure drop calculation',
    'pipe sizing formula',
    'plumbing pipe sizes',
    'water supply pipe sizing',
    'Crown Plastic Pipes sizing',
  ],
  alternates: {
    canonical: `${baseUrl}/technical/upvc-pipe-sizing-calculator-guide`,
  },
  openGraph: {
    title: 'UPVC Pipe Sizing Guide: Formulas, Tables & Calculator',
    description: 'Learn how to size UPVC pipes correctly. Flow rate formulas, pressure calculations, and sizing tables.',
    url: `${baseUrl}/technical/upvc-pipe-sizing-calculator-guide`,
    siteName: 'Crown Plastic Pipes',
    locale: 'en_AE',
    type: 'article',
    publishedTime: '2024-02-01T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Crown Plastic Pipes Technical Team'],
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'UPVC Pipe Sizing Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPVC Pipe Sizing Calculator Guide',
    description: 'Complete guide to sizing UPVC pipes with formulas and reference tables.',
  },
};

export default function PipeSizingGuidePage() {
  return <PipeSizingGuideClient />;
}
