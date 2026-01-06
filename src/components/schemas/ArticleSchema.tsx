// Article Schema Component for Crown Plastic Pipes - Phase 2 AEO
// Implements Article JSON-LD with E-E-A-T signals for technical guides

import Script from 'next/script';
import { companyInfo } from '@/config/schemas';

const baseUrl = 'https://crownplasticuae.com';

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  keywords: string[];
  articleBody?: string;
  wordCount?: number;
  imageUrl?: string;
  category?: string;
  mainEntity?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  keywords,
  articleBody,
  wordCount,
  imageUrl,
  category,
  mainEntity,
}: ArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: title,
    name: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    keywords: keywords.join(', '),
    wordCount: wordCount,
    articleBody: articleBody,
    inLanguage: 'en',
    isAccessibleForFree: true,
    
    // Author - Organization for E-E-A-T
    author: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Crown Plastic Pipes Technical Team',
      url: baseUrl,
      logo: companyInfo.logo,
      description: 'Expert team with 30+ years experience in UPVC, PPR, and HDPE pipe manufacturing and technical consultation.',
      knowsAbout: [
        'UPVC Pipes',
        'PPR Pipes',
        'HDPE Pipes',
        'BS EN 1452',
        'DIN 8062',
        'Pipe Installation',
        'Water Supply Systems',
        'Plumbing Engineering',
      ],
    },
    
    // Publisher
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: companyInfo.name,
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: companyInfo.logo,
        width: 400,
        height: 400,
      },
    },
    
    // Main Entity (What the article is about)
    ...(mainEntity && {
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      about: {
        '@type': 'Thing',
        name: mainEntity,
      },
    }),
    
    // Image
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    }),
    
    // Article Section/Category
    ...(category && {
      articleSection: category,
    }),
    
    // Citation for authority
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'BS EN 1452:2009 - Plastics piping systems for water supply',
        url: 'https://www.bsigroup.com/',
      },
      {
        '@type': 'CreativeWork',
        name: 'DIN 8062 - UPVC Pipes Dimensions',
        url: 'https://www.din.de/',
      },
    ],
    
    // Expertise signals
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.key-takeaway', '.summary'],
    },
  };

  return (
    <Script
      id={`article-schema-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 50)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

// Technical Guide specific schema with enhanced E-E-A-T
interface TechnicalGuideSchemaProps extends ArticleSchemaProps {
  proficiencyLevel?: 'Beginner' | 'Intermediate' | 'Expert';
  dependencies?: string[];
  relatedGuides?: { title: string; url: string }[];
}

export function TechnicalGuideSchema({
  proficiencyLevel = 'Intermediate',
  dependencies,
  relatedGuides,
  ...articleProps
}: TechnicalGuideSchemaProps) {
  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${articleProps.url}#techguide`,
    headline: articleProps.title,
    name: articleProps.title,
    description: articleProps.description,
    url: articleProps.url,
    datePublished: articleProps.datePublished,
    dateModified: articleProps.dateModified || articleProps.datePublished,
    keywords: articleProps.keywords.join(', '),
    proficiencyLevel: proficiencyLevel,
    
    author: {
      '@type': 'Organization',
      name: 'Crown Plastic Pipes Technical Team',
      url: baseUrl,
      description: 'ISO 9001:2015 certified pipe manufacturer with 30+ years experience',
    },
    
    publisher: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: companyInfo.logo,
      },
    },
    
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleProps.url,
    },
    
    ...(dependencies && {
      dependencies: dependencies.join(', '),
    }),
    
    ...(relatedGuides && relatedGuides.length > 0 && {
      relatedLink: relatedGuides.map(guide => ({
        '@type': 'Article',
        name: guide.title,
        url: guide.url,
      })),
    }),
    
    isAccessibleForFree: true,
    inLanguage: 'en',
    
    // Audience
    audience: {
      '@type': 'Audience',
      audienceType: 'Engineers, Contractors, Architects, Plumbers',
    },
  };

  return (
    <Script
      id={`tech-guide-schema-${articleProps.title.toLowerCase().replace(/\s+/g, '-').substring(0, 50)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
    />
  );
}

export default ArticleSchema;
