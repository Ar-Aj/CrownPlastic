// Product Schema Component for Crown Plastic Pipes
// Generates unique JSON-LD for each product variant

import { ProductSpecification, getProductSchemaData, companyInfo } from '@/config/schemas';
import type { ProductDetailConfig } from '@/types/productDetail';

const baseUrl = 'https://crownplasticuae.com';

interface ProductSchemaProps {
  product: ProductSpecification;
  url?: string;
}

export function ProductSchema({ product, url }: ProductSchemaProps) {
  const schemaData = getProductSchemaData(product, baseUrl);

  // Override URL if provided
  if (url) {
    schemaData.offers.url = url;
    schemaData['@id'] = `${url}#product`;
  }

  return (
    <script
      id={`product-schema-${product.sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

// Multi-product schema for category pages
interface ProductListSchemaProps {
  products: ProductSpecification[];
  categoryName: string;
  categoryUrl: string;
}

export function ProductListSchema({ products, categoryName, categoryUrl }: ProductListSchemaProps) {
  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${categoryUrl}#productlist`,
    name: categoryName,
    description: `Complete range of ${categoryName} from Crown Plastic Pipes. BS EN 1452, DIN 8062 certified.`,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `${baseUrl}/products/upvc-pressure/${product.sku.toLowerCase()}#product`,
        name: product.name,
        description: `${product.name} - ${product.material}. ${product.pressureRating}, ${product.diameter}. Standards: ${product.standards.join(', ')}`,
        sku: product.sku,
        brand: {
          '@type': 'Brand',
          name: 'Crown Plastic Pipes',
        },
        manufacturer: {
          '@type': 'Organization',
          name: companyInfo.name,
        },
        offers: {
          '@type': 'Offer',
          availability: `https://schema.org/${product.availability}`,
          priceCurrency: 'AED',
        },
      },
    })),
  };

  return (
    <script
      id="product-list-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
    />
  );
}

// Schema for individual product detail page with full specifications
interface ProductDetailSchemaProps {
  product: ProductSpecification;
  categoryName: string;
  categorySlug: string;
}

export function ProductDetailSchema({ product, categoryName, categorySlug }: ProductDetailSchemaProps) {
  const productUrl = `${baseUrl}/products/${categorySlug}/${product.sku.toLowerCase()}`;

  const detailSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.name,
    description: `${product.name} - Premium ${product.material} pipe manufactured by Crown Plastic Pipes Factory L.L.C. Compliant with ${product.standards.join(', ')}. Diameter: ${product.diameter}, Pressure Rating: ${product.pressureRating}. Ideal for ${product.application.join(', ')}.`,
    sku: product.sku,
    mpn: product.sku,
    gtin13: undefined, // Add if available
    brand: {
      '@type': 'Brand',
      name: 'Crown Plastic Pipes',
      logo: companyInfo.logo,
    },
    manufacturer: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: companyInfo.url,
      logo: companyInfo.logo,
      address: {
        '@type': 'PostalAddress',
        streetAddress: companyInfo.address.streetAddress,
        addressLocality: companyInfo.address.addressLocality,
        addressCountry: companyInfo.address.addressCountry,
      },
    },
    category: `Plumbing Pipes > ${categoryName}`,
    material: product.material,
    color: product.color,
    size: product.diameter,
    weight: undefined, // Add if available
    width: product.diameter,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Diameter', value: product.diameter, unitCode: 'MMT' },
      { '@type': 'PropertyValue', name: 'Pressure Rating', value: product.pressureRating },
      { '@type': 'PropertyValue', name: 'Standards Compliance', value: product.standards.join(', ') },
      { '@type': 'PropertyValue', name: 'Operating Temperature', value: product.temperatureRange },
      { '@type': 'PropertyValue', name: 'Available Lengths', value: product.length },
      { '@type': 'PropertyValue', name: 'Color', value: product.color },
      { '@type': 'PropertyValue', name: 'Material', value: product.material },
      { '@type': 'PropertyValue', name: 'Application', value: product.application.join(', ') },
      { '@type': 'PropertyValue', name: 'Country of Origin', value: 'United Arab Emirates' },
      { '@type': 'PropertyValue', name: 'Certification', value: 'ISO 9001:2015, ISO 14001:2015, ISO 45001:2018' },
    ],
    image: [
      `${baseUrl}/images/products/upvc-pressure.jpg`,
      `${baseUrl}/images/products/upvc-pressure-pipes.jpg`,
    ],
    offers: {
      '@type': 'Offer',
      '@id': `${productUrl}#offer`,
      url: productUrl,
      priceCurrency: 'AED',
      // Price intentionally omitted — B2B request-a-quote model.
      // Setting price: '0' made Google think products are free.
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: `https://schema.org/${product.availability}`,
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: companyInfo.name,
        url: companyInfo.url,
      },
      deliveryLeadTime: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 7,
        unitCode: 'DAY',
      },
      eligibleRegion: [
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'Kuwait' },
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Bahrain' },
        { '@type': 'Country', name: 'Oman' },
      ],
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'AED',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: ['AE', 'SA', 'KW', 'QA', 'BH', 'OM'],
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
            maxValue: 5,
            unitCode: 'DAY',
          },
        },
      },
    },
    // aggregateRating and review intentionally removed.
    // Previous values were fabricated (BSI Kitemark as reviewer, 4.9/87 count).
    // Re-enable after collecting genuine customer reviews to avoid Google manual action.
    isRelatedTo: [
      {
        '@type': 'Product',
        name: 'PVC Pressure Fittings BS EN 1452',
        url: `${baseUrl}/products/upvc-pressure/pvc-pressure-bs-en-1452`,
      },
    ],
  };

  return (
    <script
      id={`product-detail-schema-${product.sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(detailSchema) }}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ENHANCED PRODUCT SCHEMA (Phase 3.1) - AEO Optimized for ProductDetailConfig
// ═══════════════════════════════════════════════════════════════════════════════
interface EnhancedProductSchemaProps {
  product: ProductDetailConfig;
  categoryName: string;
  categorySlug: string;
}

/**
 * Extracts structured spec data from pipesTables for JSON-LD injection.
 * Takes the first table, first 3 non-standalone columns, first 3 rows.
 */
function extractSpecProperties(product: ProductDetailConfig) {
  const properties: { '@type': string; name: string; value: string }[] = [];

  if (!product.pipesTables || product.pipesTables.length === 0) return properties;

  const table = product.pipesTables[0];
  if (!table.columns || table.columns.length === 0 || !table.rows || table.rows.length === 0) return properties;

  // Get first 3 meaningful column headers (skip the label/size column at index 0)
  const specColumns = table.columns.slice(0, 4); // include label col + 3 data cols
  const labelCol = specColumns[0];
  const dataCols = specColumns.slice(1, 4);

  // Extract first 3 rows of data
  const sampleRows = table.rows.slice(0, 3);

  for (const row of sampleRows) {
    const labelValue = row[labelCol.key];
    if (!labelValue) continue;

    for (const col of dataCols) {
      const cellValue = row[col.key];
      if (cellValue != null && cellValue !== '' && cellValue !== '-') {
        const propName = `${col.groupLabel || col.superGroupLabel || col.label} (${labelValue})`;
        properties.push({
          '@type': 'PropertyValue',
          name: propName,
          value: cellValue,
        });
      }
    }
  }

  return properties;
}

export function EnhancedProductSchema({ product, categoryName, categorySlug }: EnhancedProductSchemaProps) {
  const productUrl = `${baseUrl}/products/${categorySlug}/${product.slug}`;

  // Clean overview up to 155 chars
  const rawText = product.overview || product.shortDescription || '';
  const description = rawText.length > 155 ? rawText.substring(0, 155).trim() + '...' : rawText;

  // Map features to AdditionalProperty
  const technicalFeatures = (product.features || []).map(feature => ({
    '@type': 'PropertyValue',
    name: 'Feature',
    value: feature,
  }));

  // Extract spec table data as AdditionalProperty
  const specProperties = extractSpecProperties(product);

  const enhancedSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.title,
    description: description,
    sku: product.slug,
    brand: {
      '@type': 'Brand',
      name: 'Crown Plastic Pipes / Fittings',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Crown Plastic Pipes / Fittings',
      logo: companyInfo.logo,
      url: baseUrl,
    },
    category: `Plumbing Pipes > ${categoryName}`,
    ...(product.image ? { image: [`${baseUrl}${product.image}`] } : {}),
    additionalProperty: [...technicalFeatures, ...specProperties],
    offers: {
      '@type': 'Offer',
      '@id': `${productUrl}#offer`,
      url: productUrl,
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: companyInfo.name,
        url: baseUrl,
      },
      areaServed: ['AE', 'SA', 'OM', 'QA', 'BH', 'KW'],
      eligibleRegion: [
        { '@type': 'Country', name: 'AE' },
        { '@type': 'Country', name: 'SA' },
        { '@type': 'Country', name: 'OM' },
        { '@type': 'Country', name: 'QA' },
        { '@type': 'Country', name: 'BH' },
        { '@type': 'Country', name: 'KW' },
      ],
    },
  };

  return (
    <script
      id={`enhanced-schema-${product.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedSchema) }}
    />
  );
}

export default ProductSchema;
