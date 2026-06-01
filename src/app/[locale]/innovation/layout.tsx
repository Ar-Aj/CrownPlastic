import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation in UPVC Piping Technology | Crown Plastic Pipes',
  description:
    'Innovation in UPVC manufacturing technology, precision extrusion, and quality control. Crown Plastic Pipes delivers technologically advanced piping systems for GCC construction and infrastructure projects.',
  keywords: [
    'innovation in piping systems',
    'UPVC manufacturing technology',
    'quality control pipe production',
    'precision extrusion UPVC',
    'R&D piping technology',
    'GCC infrastructure piping',
    'pipe testing laboratory',
    'ISO 9001 pipe manufacturer',
    'advanced pipe manufacturing UAE',
    'technical piping solutions Dubai',
    'UPVC technology innovation',
    'pipe quality assurance',
  ],
  alternates: {
    canonical: '/innovation',
  },
  openGraph: {
    title: 'Innovation in UPVC Piping Technology | Crown Plastic Pipes',
    description:
      'Precision extrusion, rigorous quality testing, and continuous R&D. Discover how Crown Plastic Pipes leads in piping technology for Gulf construction projects.',
    url: '/innovation',
    siteName: 'Crown Plastic Pipes',
    images: [
      {
        url: '/images/og-innovation.jpeg',
        width: 1200,
        height: 630,
        alt: 'Crown Plastic Pipes - Innovation in UPVC Manufacturing Technology',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovation in UPVC Piping Technology',
    description:
      'Precision extrusion and quality testing for UPVC pipes. Crown Plastic Pipes delivers advanced piping systems for GCC projects.',
    images: ['/images/og-innovation.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InnovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
