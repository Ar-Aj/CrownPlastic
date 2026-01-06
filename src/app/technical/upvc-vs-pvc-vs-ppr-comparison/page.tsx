// UPVC vs PVC vs PPR Comparison - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import UPVCComparisonClient from './UPVCComparisonClient';

const baseUrl = 'https://crownplasticuae.com';

export const metadata: Metadata = {
  title: 'UPVC vs PVC vs PPR Pipes: Complete Comparison Guide 2024',
  description: 'Comprehensive comparison of UPVC, PVC, and PPR pipes. Compare durability, temperature resistance, cost, lifespan, and applications. Expert guide helps you choose the right pipe material for your project.',
  keywords: [
    'UPVC vs PVC',
    'UPVC vs PPR',
    'PVC vs PPR pipes',
    'pipe material comparison',
    'best pipes for water supply',
    'UPVC pipe advantages',
    'PPR pipe temperature',
    'PVC pipe applications',
    'plastic pipe comparison',
    'which pipe is best',
    'Crown Plastic Pipes comparison',
    'unplasticized PVC',
  ],
  alternates: {
    canonical: `${baseUrl}/technical/upvc-vs-pvc-vs-ppr-comparison`,
  },
  openGraph: {
    title: 'UPVC vs PVC vs PPR: Which Pipe Material Should You Choose?',
    description: 'Detailed comparison of three major plastic pipe materials. Tables, specs, applications, and expert recommendations.',
    url: `${baseUrl}/technical/upvc-vs-pvc-vs-ppr-comparison`,
    siteName: 'Crown Plastic Pipes',
    locale: 'en_AE',
    type: 'article',
    publishedTime: '2024-01-20T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Crown Plastic Pipes Technical Team'],
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'UPVC vs PVC vs PPR Pipe Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPVC vs PVC vs PPR Pipes Comparison',
    description: 'Complete technical comparison guide for plastic pipe materials.',
  },
};

export default function UPVCComparisonPage() {
  return <UPVCComparisonClient />;
}
