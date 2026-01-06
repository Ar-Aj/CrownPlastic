// UPVC Installation Best Practices - Technical Article Page
// Phase 2 AEO - Featured Snippet Optimization

import { Metadata } from 'next';
import InstallationGuideClient from './InstallationGuideClient';

const baseUrl = 'https://crownplasticuae.com';

export const metadata: Metadata = {
  title: 'UPVC Pipe Installation Best Practices | Step-by-Step Guide 2024',
  description: 'Complete guide to installing UPVC pipes correctly. Learn proper solvent cement application, joint preparation, curing times, pressure testing, and avoid common installation mistakes. Expert tips from Crown Plastic Pipes.',
  keywords: [
    'UPVC pipe installation',
    'how to install UPVC pipes',
    'solvent cement application',
    'UPVC joint preparation',
    'pipe installation guide',
    'pressure pipe installation',
    'UPVC fitting insertion depth',
    'pipe curing time',
    'plumbing installation tips',
    'Crown Plastic Pipes installation',
  ],
  alternates: {
    canonical: `${baseUrl}/technical/upvc-installation-best-practices`,
  },
  openGraph: {
    title: 'How to Install UPVC Pipes: Professional Best Practices',
    description: 'Step-by-step installation guide with expert tips. Proper techniques for solvent cement, joints, and pressure testing.',
    url: `${baseUrl}/technical/upvc-installation-best-practices`,
    siteName: 'Crown Plastic Pipes',
    locale: 'en_AE',
    type: 'article',
    publishedTime: '2024-01-25T00:00:00Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Crown Plastic Pipes Technical Team'],
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'UPVC Pipe Installation Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPVC Pipe Installation Best Practices',
    description: 'Professional step-by-step guide to installing UPVC pipes correctly.',
  },
};

export default function InstallationGuidePage() {
  return <InstallationGuideClient />;
}
