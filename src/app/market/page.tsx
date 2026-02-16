// Markets Landing Page
// Phase 3 AEO - Regional Market Overview

import { Metadata } from 'next';
import MarketsLandingClient from './MarketsLandingClient';

const baseUrl = 'https://crownplasticuae.com';

// Static SEO metadata (server-side, canonical English)
// Client-side language switching is handled by MarketsLandingClient
export const metadata: Metadata = {
  title: 'UPVC Pipes Markets | GCC & Middle East Coverage | Crown Plastic Pipes',
  description: 'Crown Plastic Pipes serves markets across the GCC region including UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman. GSO & SASO certified products with regional delivery.',
  keywords: [
    'UPVC pipes GCC',
    'Middle East pipe supplier',
    'Gulf region pipes',
    'Saudi Arabia UPVC',
    'UAE pipe manufacturer',
    'Kuwait pipe supplier',
    'Qatar construction materials',
  ],
  alternates: {
    canonical: `${baseUrl}/market`,
  },
};

export default function MarketsPage() {
  return <MarketsLandingClient />;
}
