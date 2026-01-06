// Offer & Pricing Schema Component for Crown Plastic Pipes - Phase 3 AEO
// Implements Offer, AggregateOffer, and Regional Pricing JSON-LD

import Script from 'next/script';
import { companyInfo, marketsServed } from '@/config/schemas';

const baseUrl = 'https://crownplasticuae.com';

// ============================================
// SINGLE OFFER SCHEMA
// ============================================

export interface OfferSchemaProps {
  productName: string;
  productUrl: string;
  sku: string;
  price?: number;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'LimitedAvailability';
  priceValidUntil?: string;
  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition';
  seller?: string;
  deliveryLeadTime?: number; // in days
}

export function OfferSchema({
  productName,
  productUrl,
  sku,
  price,
  priceCurrency = 'AED',
  availability = 'InStock',
  priceValidUntil,
  itemCondition = 'NewCondition',
  seller = companyInfo.name,
  deliveryLeadTime = 3,
}: OfferSchemaProps) {
  const validUntil = priceValidUntil || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#offer`,
    name: productName,
    sku: sku,
    url: productUrl,
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: priceCurrency,
      ...(price && { price: price.toString() }),
      ...(!price && { 
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: priceCurrency,
          valueAddedTaxIncluded: false,
        }
      }),
      priceValidUntil: validUntil,
      availability: `https://schema.org/${availability}`,
      itemCondition: `https://schema.org/${itemCondition}`,
      seller: {
        '@type': 'Organization',
        name: seller,
        url: baseUrl,
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          currency: priceCurrency,
          value: '0', // Free shipping for bulk orders
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: marketsServed.map(m => m.code),
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: deliveryLeadTime,
            unitCode: 'DAY',
          },
        },
      },
      eligibleRegion: marketsServed.map(m => ({
        '@type': 'Country',
        name: m.name,
      })),
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
      },
    },
  };

  return (
    <Script
      id={`offer-schema-${sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
    />
  );
}

// ============================================
// AGGREGATE OFFER SCHEMA (Price Range)
// ============================================

export interface AggregateOfferSchemaProps {
  productName: string;
  productUrl: string;
  lowPrice: number;
  highPrice: number;
  priceCurrency?: string;
  offerCount?: number;
  availability?: 'InStock' | 'OutOfStock';
}

export function AggregateOfferSchema({
  productName,
  productUrl,
  lowPrice,
  highPrice,
  priceCurrency = 'AED',
  offerCount = 10,
  availability = 'InStock',
}: AggregateOfferSchemaProps) {
  const aggregateOfferSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#aggregate-offer`,
    name: productName,
    url: productUrl,
    brand: {
      '@type': 'Brand',
      name: 'Crown Plastic Pipes',
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: lowPrice.toString(),
      highPrice: highPrice.toString(),
      priceCurrency: priceCurrency,
      offerCount: offerCount,
      availability: `https://schema.org/${availability}`,
      seller: {
        '@type': 'Organization',
        name: companyInfo.name,
        url: baseUrl,
      },
    },
  };

  return (
    <Script
      id={`aggregate-offer-schema-${productName.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }}
    />
  );
}

// ============================================
// REGIONAL PRICING SCHEMA
// ============================================

export interface RegionalPricing {
  region: string;
  regionCode: string;
  currency: string;
  lowPrice: number;
  highPrice: number;
}

export interface RegionalOfferSchemaProps {
  productName: string;
  productUrl: string;
  regionalPricing: RegionalPricing[];
}

export function RegionalOfferSchema({
  productName,
  productUrl,
  regionalPricing,
}: RegionalOfferSchemaProps) {
  const regionalSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#regional-offers`,
    name: productName,
    url: productUrl,
    brand: {
      '@type': 'Brand',
      name: 'Crown Plastic Pipes',
    },
    offers: regionalPricing.map(region => ({
      '@type': 'Offer',
      priceCurrency: region.currency,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: region.currency,
        minPrice: region.lowPrice.toString(),
        maxPrice: region.highPrice.toString(),
      },
      areaServed: {
        '@type': 'Country',
        name: region.region,
        identifier: region.regionCode,
      },
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: companyInfo.name,
      },
    })),
  };

  return (
    <Script
      id={`regional-offer-schema-${productName.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(regionalSchema) }}
    />
  );
}

// ============================================
// BULK PRICING TIERS SCHEMA (Phase 1 Add-on)
// Standard pricing tiers for all products
// ============================================

export interface PricingTier {
  minQuantity: number;
  maxQuantity?: number;
  price: number;
  currency?: string;
  discountPercentage?: number;
  tierName?: string;
}

// Standard bulk pricing tier structure
export interface StandardBulkTier {
  name: string;
  minQty: number;
  maxQty?: number;
  discount: string; // e.g., '0%', '-5%', '-10%', 'Contact Sales'
}

export const standardBulkTiers: StandardBulkTier[] = [
  { name: 'Standard', minQty: 1, maxQty: 10, discount: '0%' },
  { name: 'Volume', minQty: 11, maxQty: 50, discount: '-5%' },
  { name: 'Bulk', minQty: 51, maxQty: 100, discount: '-10%' },
  { name: 'Wholesale', minQty: 101, discount: 'Contact Sales' },
];

// Generate pricing tiers from base price
export function generateBulkPricingTiers(basePrice: number, currency: string = 'AED'): PricingTier[] {
  return [
    { minQuantity: 1, maxQuantity: 10, price: basePrice, currency, discountPercentage: 0, tierName: 'Standard' },
    { minQuantity: 11, maxQuantity: 50, price: Math.round(basePrice * 0.95 * 100) / 100, currency, discountPercentage: 5, tierName: 'Volume (5% off)' },
    { minQuantity: 51, maxQuantity: 100, price: Math.round(basePrice * 0.90 * 100) / 100, currency, discountPercentage: 10, tierName: 'Bulk (10% off)' },
    // 100+ units: Contact sales - represented with 0 price (indicates custom quote)
    { minQuantity: 101, price: 0, currency, discountPercentage: 15, tierName: 'Wholesale (Contact Sales)' },
  ];
}

export interface BulkPricingSchemaProps {
  productName: string;
  productUrl: string;
  sku: string;
  pricingTiers: PricingTier[];
  currency?: string;
  useStandardTiers?: boolean; // If true, generate standard bulk tiers automatically
  basePrice?: number; // Required if useStandardTiers is true
}

export function BulkPricingSchema({
  productName,
  productUrl,
  sku,
  pricingTiers,
  currency = 'AED',
  useStandardTiers = false,
  basePrice,
}: BulkPricingSchemaProps) {
  // Generate standard tiers if requested
  const tiers = useStandardTiers && basePrice 
    ? generateBulkPricingTiers(basePrice, currency) 
    : pricingTiers;

  // Filter out tiers with 0 price (contact sales)
  const validTiers = tiers.filter(tier => tier.price > 0);
  const hasContactSalesTier = tiers.some(tier => tier.price === 0);

  const bulkPricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#bulk-pricing`,
    name: productName,
    sku: sku,
    url: productUrl,
    description: `Bulk pricing available. ${hasContactSalesTier ? 'Contact sales for orders of 100+ units.' : ''}`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: currency,
      lowPrice: Math.min(...validTiers.map(t => t.price)).toString(),
      highPrice: Math.max(...validTiers.map(t => t.price)).toString(),
      offerCount: validTiers.length,
      offers: validTiers.map((tier, index) => ({
        '@type': 'Offer',
        '@id': `${productUrl}#tier-${index + 1}`,
        priceCurrency: tier.currency || currency,
        price: tier.price.toString(),
        ...(tier.tierName && { name: tier.tierName }),
        ...(tier.discountPercentage && tier.discountPercentage > 0 && {
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: tier.price.toString(),
            priceCurrency: tier.currency || currency,
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: tier.minQuantity,
              ...(tier.maxQuantity && { maxValue: tier.maxQuantity }),
              unitCode: 'C62',
            },
          },
        }),
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          minValue: tier.minQuantity,
          ...(tier.maxQuantity && { maxValue: tier.maxQuantity }),
          unitCode: 'C62', // Unit
        },
        availability: 'https://schema.org/InStock',
        priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      })),
    },
  };

  return (
    <Script
      id={`bulk-pricing-schema-${sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(bulkPricingSchema) }}
    />
  );
}

// ============================================
// DEFAULT REGIONAL PRICING DATA
// ============================================

export const defaultRegionalPricing: RegionalPricing[] = [
  { region: 'United Arab Emirates', regionCode: 'AE', currency: 'AED', lowPrice: 50, highPrice: 500 },
  { region: 'Saudi Arabia', regionCode: 'SA', currency: 'SAR', lowPrice: 50, highPrice: 500 },
  { region: 'Kuwait', regionCode: 'KW', currency: 'KWD', lowPrice: 15, highPrice: 150 },
  { region: 'Qatar', regionCode: 'QA', currency: 'QAR', lowPrice: 50, highPrice: 500 },
  { region: 'Bahrain', regionCode: 'BH', currency: 'BHD', lowPrice: 15, highPrice: 150 },
  { region: 'Oman', regionCode: 'OM', currency: 'OMR', lowPrice: 20, highPrice: 200 },
];

export default OfferSchema;
