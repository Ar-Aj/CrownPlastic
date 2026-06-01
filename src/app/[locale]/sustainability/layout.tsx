import { Metadata } from 'next';

// ═══════════════════════════════════════════════════════════════════════════════
// SUSTAINABILITY PAGE - SEO METADATA
// ═══════════════════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
  title: 'Sustainability | Long-Life UPVC Piping Systems',
  description: 'Sustainable UPVC piping solutions for GCC projects. 50+ year service life, ISO certified manufacturing, lead-free formulations. Reduce replacement waste with reliable piping systems from Crown Plastic Pipes UAE.',
  keywords: [
    'sustainable piping systems',
    'long life UPVC pipes',
    'sustainable UPVC UAE',
    'reliable building drainage GCC',
    'environmentally responsible piping',
    'ISO certified pipe manufacturing',
    'long lasting pipes Dubai',
    'sustainable construction materials UAE',
    'UPVC recyclable pipes',
    'green building piping systems',
    'lead-free pipes UAE',
    'Gulf sustainable infrastructure',
  ],
  alternates: {
    canonical: '/sustainability',
  },
  openGraph: {
    title: 'Sustainability | Long-Life UPVC Piping Systems | Crown Plastic Pipes',
    description: 'Sustainable UPVC piping solutions engineered for 50+ years of reliable service. Reduce replacement waste, minimize failures, and build infrastructure that lasts. ISO certified manufacturing in UAE.',
    url: '/sustainability',
    type: 'website',
    images: [
      {
        url: '/images/og-sustainability.jpeg',
        width: 1200,
        height: 630,
        alt: 'Crown Plastic Pipes - Sustainable UPVC Piping Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainability | Long-Life UPVC Piping Systems',
    description: 'Sustainable UPVC piping solutions for GCC projects. 50+ year service life design, ISO certified manufacturing.',
    images: ['/images/og-sustainability.jpeg'],
  },
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
