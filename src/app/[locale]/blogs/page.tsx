import { Metadata } from 'next';
import BlogsClient from './BlogsClient';

// ─────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Piping Solutions Blog | UPVC, PPR, HDPE Guides for UAE & GCC | Crown Plastic Pipes',
  description: 'Expert guides on UPVC, PPR, and HDPE piping systems for UAE and GCC construction projects. Technical articles, compliance guides, and installation best practices from Crown Plastic Pipes.',
  keywords: [
    'UPVC pipes blog UAE',
    'piping solutions GCC',
    'plastic pipe guides Dubai',
    'PPR pipes articles',
    'HDPE irrigation guides',
    'international standards compliance',
    'BS EN 1452 guide',
    'pipe installation best practices',
  ],
  alternates: {
    canonical: 'https://crownplasticuae.com/blogs',
  },
  openGraph: {
    title: 'Piping Solutions Blog | Crown Plastic Pipes',
    description: 'Expert guides on UPVC, PPR, and HDPE piping systems for UAE and GCC construction projects.',
    url: 'https://crownplasticuae.com/blogs',
    siteName: 'Crown Plastic Pipes',
    locale: 'en_AE',
    type: 'website',
  },
};

// ─────────────────────────────────────────────────────────────
// Page Component (Server wrapper)
// ─────────────────────────────────────────────────────────────
export default function BlogsPage() {
  return <BlogsClient />;
}
