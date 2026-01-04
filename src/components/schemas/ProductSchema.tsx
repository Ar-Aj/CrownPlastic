// Product Schema Component for Crown Plastic Pipes
// Generates unique JSON-LD for each product variant

import Script from 'next/script';
import { ProductSpecification, getProductSchemaData, companyInfo } from '@/config/schemas';

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
    <Script
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
    <Script
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
      { '@type': 'PropertyValue', name: 'Certification', value: 'ISO 9001:2015, NSF, Kitemark' },
    ],
    image: [
      `${baseUrl}/images/products/upvc-pressure.jpg`,
      `${baseUrl}/images/products/upvc-pressure-pipes-metric.jpg`,
    ],
    offers: {
      '@type': 'Offer',
      '@id': `${productUrl}#offer`,
      url: productUrl,
      priceCurrency: 'AED',
      price: '0',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'AED',
        price: '0',
        priceType: 'https://schema.org/ListPrice',
        valueAddedTaxIncluded: false,
      },
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Organization',
          name: 'BSI Kitemark Certification',
        },
        reviewBody: `Certified to ${product.standards[0]} standards for potable water applications. Quality verified through independent testing.`,
        datePublished: '2024-01-15',
      },
    ],
    isRelatedTo: [
      {
        '@type': 'Product',
        name: 'UPVC Pressure Fittings',
        url: `${baseUrl}/products/upvc-pressure/fittings`,
      },
    ],
  };

  return (
    <Script
      id={`product-detail-schema-${product.sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(detailSchema) }}
    />
  );
}

export default ProductSchema;
