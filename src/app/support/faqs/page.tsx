// FAQ Page for Crown Plastic Pipes - Phase 2 AEO
// Comprehensive FAQ with FAQPage schema for featured snippet optimization

import { Metadata } from 'next';
import FAQPageClient from './FAQPageClient';
import { allFAQs } from '@/config/faqs';

const baseUrl = 'https://crownplasticuae.com';

export const metadata: Metadata = {
  title: 'FAQs | UPVC Pipe Questions & Expert Answers',
  description: 'Expert answers to 50+ frequently asked questions about UPVC pipes, PPR, HDPE, installation, standards (BS EN 1452, DIN 8062), and pipe selection. Free technical support from Crown Plastic Pipes.',
  keywords: [
    'UPVC pipe FAQ',
    'PVC pipe questions',
    'BS EN 1452 explained',
    'UPVC vs PVC difference',
    'how to install UPVC pipes',
    'UPVC pipe standards',
    'pipe sizing guide',
    'solvent cement cure time',
    'PN pressure rating',
    'UPVC drinking water safe',
    'pipe installation tips',
    'Crown Plastic Pipes FAQ',
  ],
  alternates: {
    canonical: `${baseUrl}/support/faqs`,
  },
  openGraph: {
    title: 'UPVC Pipe FAQs | Expert Answers from Crown Plastic Pipes',
    description: 'Get expert answers to common questions about UPVC, PPR, HDPE pipes. Technical standards, installation guides, product comparisons.',
    url: `${baseUrl}/support/faqs`,
    siteName: 'Crown Plastic Pipes',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Crown Plastic Pipes FAQ - Expert UPVC Pipe Answers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPVC Pipe FAQs | Crown Plastic Pipes',
    description: 'Expert answers to 50+ frequently asked questions about UPVC pipes, standards, installation, and selection.',
  },
};

export default function FAQPage() {
  return <FAQPageClient faqs={allFAQs} />;
}
