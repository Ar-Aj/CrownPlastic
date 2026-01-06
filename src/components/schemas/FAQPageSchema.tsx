// FAQPage Schema Component for Crown Plastic Pipes - Phase 2 AEO
// Generates FAQPage JSON-LD for featured snippet optimization

import Script from 'next/script';
import { FAQItem } from '@/config/faqs';

const baseUrl = 'https://crownplasticuae.com';

interface FAQPageSchemaProps {
  faqs: FAQItem[];
  pageUrl?: string;
}

export function FAQPageSchema({ faqs, pageUrl }: FAQPageSchemaProps) {
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl || baseUrl + '/support/faqs'}#faqpage`,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      '@id': `${baseUrl}/support/faqs#${faq.id}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        url: `${baseUrl}/support/faqs#${faq.id}`,
      },
    })),
  };

  return (
    <Script
      id="faqpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
    />
  );
}

// Cluster-specific FAQ schema for technical pages
interface ClusterFAQSchemaProps {
  faqs: FAQItem[];
  clusterName: string;
  pageUrl: string;
}

export function ClusterFAQSchema({ faqs, clusterName, pageUrl }: ClusterFAQSchemaProps) {
  const clusterFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faqpage`,
    name: `${clusterName} - Frequently Asked Questions`,
    description: `Expert answers to common questions about ${clusterName.toLowerCase()} from Crown Plastic Pipes.`,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      '@id': `${pageUrl}#${faq.id}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        url: `${pageUrl}#${faq.id}`,
        dateCreated: new Date().toISOString().split('T')[0],
        author: {
          '@type': 'Organization',
          name: 'Crown Plastic Pipes Technical Team',
          url: baseUrl,
        },
      },
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Crown Plastic Pipes Factory L.L.C.',
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
    },
  };

  return (
    <Script
      id={`cluster-faq-schema-${clusterName.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(clusterFaqSchema) }}
    />
  );
}

// Single FAQ for inline embedding on product/technical pages
interface SingleFAQSchemaProps {
  question: string;
  answer: string;
  pageUrl: string;
  faqId: string;
}

export function SingleFAQSchema({ question, answer, pageUrl, faqId }: SingleFAQSchemaProps) {
  const singleFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'Question',
    '@id': `${pageUrl}#${faqId}`,
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
      url: `${pageUrl}#${faqId}`,
      author: {
        '@type': 'Organization',
        name: 'Crown Plastic Pipes Technical Team',
      },
    },
  };

  return (
    <Script
      id={`single-faq-${faqId}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(singleFaqSchema) }}
    />
  );
}

export default FAQPageSchema;
