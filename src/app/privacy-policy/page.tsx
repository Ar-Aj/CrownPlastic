// Redirect: root /privacy-policy → /en/privacy-policy
// This stub exists because the canonical privacy-policy page lives under [locale].
// Since output is 'export' (static), we use a meta-refresh redirect.

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting to Privacy Policy',
  robots: 'noindex, follow',
  other: {
    'http-equiv': 'refresh',
    content: '0;url=/en/privacy-policy/',
  },
};

export default function PrivacyPolicyRedirect() {
  return (
    <p>Redirecting to <a href="/en/privacy-policy/">Privacy Policy</a>...</p>
  );
}
