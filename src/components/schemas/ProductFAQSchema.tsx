import { type ProductDetailConfig } from '@/types/productDetail';

interface ProductFAQSchemaProps {
  product: ProductDetailConfig;
}

export function ProductFAQSchema({ product }: ProductFAQSchemaProps) {
  const qaPairs: { question: string; answer: string }[] = [];

  // ── PRIORITY: Hand-authored AEO FAQs ─────────────────────────────────
  // If the product has hand-authored faqs, use them exclusively for the
  // schema since they target real search queries for Featured Snippets.
  if (product.faqs && product.faqs.length > 0) {
    for (const faq of product.faqs) {
      qaPairs.push({ question: faq.q, answer: faq.a });
    }
  } else {
    // ── FALLBACK: Auto-generated from features + dosDonts ─────────────
    // Legacy behaviour preserved for products without hand-authored FAQs.
    if (product.features && product.features.length > 0) {
      qaPairs.push({
        question: `What are the key features of ${product.title}?`,
        answer: `The key features of ${product.title} include: ${product.features.join(', ')}.`,
      });
    }

    if (product.dosDonts?.dos && product.dosDonts.dos.length > 0) {
      qaPairs.push({
        question: `What are the installation best practices for ${product.title}?`,
        answer: `When installing ${product.title}, you should: ${product.dosDonts.dos.join(' ')}`,
      });
    }

    if (product.dosDonts?.donts && product.dosDonts.donts.length > 0) {
      qaPairs.push({
        question: `What mistakes should be avoided when using ${product.title}?`,
        answer: `When using ${product.title}, avoid the following: ${product.dosDonts.donts.join(' ')}`,
      });
    }
  }

  if (qaPairs.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qaPairs.map((pair) => ({
      '@type': 'Question',
      name: pair.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: pair.answer,
      },
    })),
  };

  return (
    <script
      id={`faq-schema-${product.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
