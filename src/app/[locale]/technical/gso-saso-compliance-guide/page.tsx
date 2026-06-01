// 301 Redirect: Old GSO SASO Compliance Guide → New Certifications Guide
// This page exists only to redirect old URLs to the new location for SEO preservation.
// Since this is a static export, we use a client-side redirect via meta refresh.

import { Metadata } from 'next';
import OldGSORedirectClient from './OldGSORedirectClient';

export const metadata: Metadata = {
  title: 'Redirecting to Quality & ISO Certifications Guide',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://crownplasticuae.com/technical/certifications-compliance-guide',
  },
  other: {
    'http-equiv': 'refresh',
    content: '0;url=/technical/certifications-compliance-guide/',
  },
};

export default function OldGSOSASOGuidePage() {
  return <OldGSORedirectClient />;
}
