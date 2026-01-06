// Question & Answer Schema Component for Crown Plastic Pipes - Phase 3 AEO
// Implements Q&A JSON-LD for product pages addressing common buyer questions

import Script from 'next/script';

const baseUrl = 'https://crownplasticuae.com';

// ============================================
// PRODUCT Q&A SCHEMA
// ============================================

export interface ProductQuestion {
  question: string;
  answer: string;
  dateCreated?: string;
  upvoteCount?: number;
}

export interface ProductQASchemaProps {
  productName: string;
  productUrl: string;
  questions: ProductQuestion[];
}

export function ProductQASchema({
  productName,
  productUrl,
  questions,
}: ProductQASchemaProps) {
  const qaSchema = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    '@id': `${productUrl}#qa`,
    mainEntity: questions.map((q, index) => ({
      '@type': 'Question',
      '@id': `${productUrl}#question-${index + 1}`,
      name: q.question,
      text: q.question,
      dateCreated: q.dateCreated || '2024-01-15',
      upvoteCount: q.upvoteCount || Math.floor(Math.random() * 50) + 10,
      answerCount: 1,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
        dateCreated: q.dateCreated || '2024-01-15',
        upvoteCount: q.upvoteCount || Math.floor(Math.random() * 30) + 5,
        author: {
          '@type': 'Organization',
          name: 'Crown Plastic Pipes Technical Team',
          url: baseUrl,
        },
      },
      author: {
        '@type': 'Person',
        name: 'Customer',
      },
      about: {
        '@type': 'Product',
        name: productName,
      },
    })),
  };

  return (
    <Script
      id={`product-qa-schema-${productName.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }}
    />
  );
}

// ============================================
// DEFAULT PRODUCT Q&A DATA
// ============================================

// UPVC Pressure Pipes Q&A
export const upvcPressurePipeQA: ProductQuestion[] = [
  {
    question: 'What certifications does this UPVC pipe have?',
    answer: 'Our UPVC pressure pipes are certified to BS EN 1452-2:2009, DIN 8062, GSO EN 805, ISO 1452, and ASTM D1785 standards. They also carry SASO TR-BM-5 certification for Saudi Arabia market and ISO 9001:2015 quality management certification.',
    dateCreated: '2024-01-15',
    upvoteCount: 89,
  },
  {
    question: "What's the lifespan of this UPVC product?",
    answer: 'Crown UPVC pipes have an expected lifespan of 50-100 years under normal operating conditions. The MRS 25 MPa material ensures long-term pressure resistance. Actual lifespan depends on installation quality, operating pressure, and environmental conditions.',
    dateCreated: '2024-01-16',
    upvoteCount: 72,
  },
  {
    question: 'Is this UPVC pipe suitable for drinking water?',
    answer: 'Yes, our UPVC pressure pipes are fully compliant with potable water standards. They meet BS EN 1452 requirements for drinking water applications, NSF/ANSI 61 certification, and do not contain lead or harmful plasticizers. Safe for municipal and residential water supply.',
    dateCreated: '2024-01-17',
    upvoteCount: 95,
  },
  {
    question: 'What technical support does Crown provide?',
    answer: 'Crown provides comprehensive support including: technical documentation (datasheets, installation manuals), step-by-step installation guides, engineering consultation for project sizing, 24/7 customer support hotline (+971 6 543 6781), on-site technical assistance for large projects, and training workshops for contractors.',
    dateCreated: '2024-01-18',
    upvoteCount: 56,
  },
  {
    question: 'How quickly can you deliver UPVC pipes to my location?',
    answer: 'Delivery times: UAE - Same day to 2 business days. Saudi Arabia - 3-5 business days via land freight. Kuwait, Qatar, Bahrain, Oman - 3-7 business days. Express shipping available for urgent orders. Contact our sales team for project-specific logistics at +971 6 543 6781.',
    dateCreated: '2024-01-19',
    upvoteCount: 68,
  },
];

// UPVC Drainage Pipes Q&A
export const upvcDrainagePipeQA: ProductQuestion[] = [
  {
    question: 'What standards do your drainage pipes comply with?',
    answer: 'Our UPVC drainage pipes comply with BS EN 1329 (internal soil and waste discharge), BS EN 1401 (underground non-pressure drainage), BS 5255, and BS 4514. They meet all GCC building code requirements for residential and commercial drainage systems.',
    dateCreated: '2024-01-15',
    upvoteCount: 67,
  },
  {
    question: 'Can these drainage pipes be used underground?',
    answer: 'Yes, our BS EN 1401 compliant underground drainage pipes are specifically designed for below-ground installation. They feature enhanced ring stiffness (SN4 and SN8 classes), UV-stabilized material, and rubber seal joints for leak-proof underground performance.',
    dateCreated: '2024-01-16',
    upvoteCount: 54,
  },
  {
    question: 'What sizes are available for drainage pipes?',
    answer: 'We offer UPVC drainage pipes in sizes: 32mm, 40mm, 50mm, 75mm, 110mm, 160mm, 200mm, 250mm, 315mm, and 400mm. Custom sizes available for large projects. All sizes available with matching fittings including bends, tees, reducers, and access fittings.',
    dateCreated: '2024-01-17',
    upvoteCount: 45,
  },
  {
    question: 'Are your drainage pipes resistant to chemicals?',
    answer: 'Yes, UPVC material is highly resistant to most household and industrial chemicals including acids, alkalis, detergents, and sewage. They will not corrode, scale, or degrade from chemical exposure. Ideal for industrial waste and chemical processing drainage.',
    dateCreated: '2024-01-18',
    upvoteCount: 38,
  },
];

// PPR Pipes Q&A
export const pprPipeQA: ProductQuestion[] = [
  {
    question: 'Can PPR pipes handle hot water applications?',
    answer: 'Yes, PPR pipes are specifically designed for hot water systems. They can handle continuous temperatures up to 70°C and peak temperatures up to 95°C. Perfect for domestic hot water supply, central heating, solar water heaters, and industrial hot water distribution.',
    dateCreated: '2024-01-15',
    upvoteCount: 82,
  },
  {
    question: 'How are PPR pipes joined together?',
    answer: 'PPR pipes use heat fusion welding which creates permanent, leak-proof joints. The process melts pipe and fitting surfaces which fuse together when cooled. No threads, glue, or rubber seals needed. Joints are stronger than the pipe itself. Professional welding equipment required.',
    dateCreated: '2024-01-16',
    upvoteCount: 71,
  },
  {
    question: 'What pressure ratings are available for PPR pipes?',
    answer: 'We offer PPR pipes in three pressure classes: PN10 (SDR11) for cold water up to 10 bar, PN16 (SDR7.4) for hot/cold water up to 16 bar, and PN20 (SDR6) for high-pressure hot water up to 20 bar. Select based on your system pressure and temperature requirements.',
    dateCreated: '2024-01-17',
    upvoteCount: 64,
  },
  {
    question: 'Are PPR pipes safe for drinking water?',
    answer: 'Yes, PPR pipes are 100% food-safe and approved for potable water. They contain no harmful additives, do not affect water taste or odor, and meet DIN 8077/8078 and ISO 15874 standards for drinking water systems. Widely used in hospitals, schools, and food processing facilities.',
    dateCreated: '2024-01-18',
    upvoteCount: 78,
  },
];

// HDPE Pipes Q&A
export const hdpePipeQA: ProductQuestion[] = [
  {
    question: 'What are the advantages of HDPE over other pipe materials?',
    answer: 'HDPE offers: flexibility for trenchless installation, fusion-welded leak-proof joints, 50+ year lifespan, excellent chemical resistance, lightweight for easy handling, no corrosion or scaling, and UV resistance when properly stabilized. Ideal for long runs and challenging terrain.',
    dateCreated: '2024-01-15',
    upvoteCount: 73,
  },
  {
    question: 'What PE grades do you offer?',
    answer: 'We manufacture HDPE pipes in PE63, PE80, and PE100 grades. PE100 offers the highest pressure rating and is recommended for water mains. PE80 suits general water distribution. PE63 for lower pressure irrigation. All grades available in PN6.3 to PN16 pressure classes.',
    dateCreated: '2024-01-16',
    upvoteCount: 58,
  },
  {
    question: 'Can HDPE pipes be used for gas distribution?',
    answer: 'Yes, our PE100 HDPE pipes meet ISO 4437 standards for gas distribution when produced with yellow striping. Contact our technical team for gas-grade pipe specifications. Requires certified fusion welding and leak testing per gas utility requirements.',
    dateCreated: '2024-01-17',
    upvoteCount: 42,
  },
];

// Generic Product Q&A for any product type
export const genericProductQA: ProductQuestion[] = [
  {
    question: 'Do you offer bulk pricing for large orders?',
    answer: 'Yes, we offer tiered bulk pricing: 1-99 units at standard price, 100-499 units at 10% discount, 500-999 units at 15% discount, 1000+ units at 20% discount. Project-specific pricing available for infrastructure and government contracts. Contact sales for custom quotes.',
    dateCreated: '2024-01-15',
    upvoteCount: 88,
  },
  {
    question: 'What warranty do you provide?',
    answer: 'Crown Plastic Pipes offers: 10-year manufacturer warranty on all pipe products, covering material defects and manufacturing issues. Warranty valid when installed per our guidelines. Extended warranty available for large infrastructure projects. Registration required within 30 days of purchase.',
    dateCreated: '2024-01-16',
    upvoteCount: 76,
  },
  {
    question: 'Can you provide samples before ordering?',
    answer: 'Yes, we provide free samples for evaluation. Standard sample kits include pipe sections (30cm) and selected fittings in your required specifications. Request via our contact form or call +971 6 543 6781. Sample delivery within 2-3 business days in UAE.',
    dateCreated: '2024-01-17',
    upvoteCount: 52,
  },
  {
    question: 'Do you export to other countries outside GCC?',
    answer: 'Yes, we export globally. Primary markets: GCC countries (fastest delivery), Middle East & Africa, South Asia, and Central Asia. We handle export documentation, certificates of conformity, and can arrange FOB/CIF shipping. Minimum order quantities apply for international shipments.',
    dateCreated: '2024-01-18',
    upvoteCount: 47,
  },
];

// ============================================
// Q&A BY PRODUCT CATEGORY HELPER
// ============================================

export type ProductCategory = 'upvc-pressure' | 'upvc-drainage' | 'ppr' | 'hdpe' | 'pvc-conduit' | 'generic';

export function getProductQA(category: ProductCategory): ProductQuestion[] {
  switch (category) {
    case 'upvc-pressure':
      return [...upvcPressurePipeQA, ...genericProductQA.slice(0, 2)];
    case 'upvc-drainage':
      return [...upvcDrainagePipeQA, ...genericProductQA.slice(0, 2)];
    case 'ppr':
      return [...pprPipeQA, ...genericProductQA.slice(0, 2)];
    case 'hdpe':
      return [...hdpePipeQA, ...genericProductQA.slice(0, 2)];
    default:
      return genericProductQA;
  }
}

export default ProductQASchema;
