// HowTo Schema Component for Crown Plastic Pipes - Phase 2 AEO
// Implements HowTo JSON-LD for installation guides and step-by-step content

import Script from 'next/script';
import { companyInfo } from '@/config/schemas';

const baseUrl = 'https://crownplasticuae.com';

export interface HowToStep {
  name: string;
  text: string;
  imageUrl?: string;
  videoUrl?: string;
  tipText?: string;
}

export interface HowToSupply {
  name: string;
  quantity?: string;
}

export interface HowToTool {
  name: string;
  required?: boolean;
}

export interface HowToSchemaProps {
  name: string;
  description: string;
  url: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration (e.g., 'PT1H30M')
  estimatedCost?: {
    currency: string;
    minValue: number;
    maxValue: number;
  };
  supplies?: HowToSupply[];
  tools?: HowToTool[];
  imageUrl?: string;
  videoUrl?: string;
  yield?: string;
}

export function HowToSchema({
  name,
  description,
  url,
  steps,
  totalTime,
  estimatedCost,
  supplies,
  tools,
  imageUrl,
  videoUrl,
  yield: howToYield,
}: HowToSchemaProps) {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${url}#howto`,
    name: name,
    description: description,
    url: url,
    
    // Steps
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      '@id': `${url}#step${index + 1}`,
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.imageUrl && {
        image: {
          '@type': 'ImageObject',
          url: step.imageUrl,
        },
      }),
      ...(step.videoUrl && {
        video: {
          '@type': 'VideoObject',
          contentUrl: step.videoUrl,
        },
      }),
      ...(step.tipText && {
        tip: step.tipText,
      }),
    })),
    
    // Time
    ...(totalTime && {
      totalTime: totalTime,
    }),
    
    // Cost
    ...(estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: estimatedCost.currency,
        value: {
          '@type': 'QuantitativeValue',
          minValue: estimatedCost.minValue,
          maxValue: estimatedCost.maxValue,
        },
      },
    }),
    
    // Supplies
    ...(supplies && supplies.length > 0 && {
      supply: supplies.map(supply => ({
        '@type': 'HowToSupply',
        name: supply.name,
        ...(supply.quantity && { requiredQuantity: supply.quantity }),
      })),
    }),
    
    // Tools
    ...(tools && tools.length > 0 && {
      tool: tools.map(tool => ({
        '@type': 'HowToTool',
        name: tool.name,
        ...(tool.required !== undefined && { requiredQuantity: tool.required ? '1' : '0' }),
      })),
    }),
    
    // Image
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
    }),
    
    // Video
    ...(videoUrl && {
      video: {
        '@type': 'VideoObject',
        name: name,
        description: description,
        contentUrl: videoUrl,
        uploadDate: new Date().toISOString().split('T')[0],
      },
    }),
    
    // Yield
    ...(howToYield && {
      yield: howToYield,
    }),
    
    // Author
    author: {
      '@type': 'Organization',
      name: 'Crown Plastic Pipes Technical Team',
      url: baseUrl,
    },
    
    // Publisher
    publisher: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: companyInfo.logo,
      },
    },
    
    // Additional metadata
    inLanguage: 'en',
    isAccessibleForFree: true,
  };

  return (
    <Script
      id={`howto-schema-${name.toLowerCase().replace(/\s+/g, '-').substring(0, 50)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
}

// Simplified HowTo for inline use
interface SimpleHowToProps {
  name: string;
  description: string;
  url: string;
  steps: string[]; // Simple string array for quick implementation
  totalTime?: string;
}

export function SimpleHowToSchema({ name, description, url, steps, totalTime }: SimpleHowToProps) {
  return (
    <HowToSchema
      name={name}
      description={description}
      url={url}
      steps={steps.map((stepText, index) => ({
        name: `Step ${index + 1}`,
        text: stepText,
      }))}
      totalTime={totalTime}
    />
  );
}

// Installation Guide specific HowTo
interface InstallationGuideSchemaProps {
  pipeMaterial: 'UPVC' | 'PPR' | 'HDPE';
  applicationType: string;
  url: string;
  steps: HowToStep[];
}

export function InstallationGuideSchema({
  pipeMaterial,
  applicationType,
  url,
  steps,
}: InstallationGuideSchemaProps) {
  const name = `How to Install ${pipeMaterial} Pipes for ${applicationType}`;
  const description = `Complete step-by-step guide for installing ${pipeMaterial} pipes for ${applicationType.toLowerCase()}. BS EN 1452 compliant installation methods from Crown Plastic Pipes.`;
  
  const commonTools: HowToTool[] = [
    { name: 'Pipe cutter or fine-tooth saw', required: true },
    { name: 'Deburring tool', required: true },
    { name: 'Measuring tape', required: true },
    { name: 'Marker pen', required: true },
    { name: 'Clean cloth', required: true },
  ];
  
  const upvcTools: HowToTool[] = [
    ...commonTools,
    { name: 'Solvent cement', required: true },
    { name: 'PVC primer (for larger pipes)', required: false },
    { name: 'Applicator brush', required: true },
  ];
  
  const pprTools: HowToTool[] = [
    ...commonTools,
    { name: 'PPR welding machine', required: true },
    { name: 'Pipe shears', required: true },
  ];

  return (
    <HowToSchema
      name={name}
      description={description}
      url={url}
      steps={steps}
      tools={pipeMaterial === 'PPR' ? pprTools : upvcTools}
      supplies={[
        { name: `${pipeMaterial} pipes`, quantity: 'As per project requirement' },
        { name: `${pipeMaterial} fittings`, quantity: 'As per project requirement' },
      ]}
    />
  );
}

export default HowToSchema;
