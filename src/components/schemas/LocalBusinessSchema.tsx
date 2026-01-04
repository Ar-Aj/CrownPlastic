// LocalBusiness Schema Component for Crown Plastic Pipes
// Generates location-specific JSON-LD for service area pages

import Script from 'next/script';
import { ServiceArea, getLocalBusinessSchemaData, companyInfo } from '@/config/schemas';

const baseUrl = 'https://crownplasticuae.com';

interface LocalBusinessSchemaProps {
  serviceArea: ServiceArea;
}

export function LocalBusinessSchema({ serviceArea }: LocalBusinessSchemaProps) {
  const schemaData = getLocalBusinessSchemaData(serviceArea, baseUrl);

  return (
    <Script
      id={`localbusiness-schema-${serviceArea.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

// Enhanced LocalBusiness schema with full details (for contact page)
export function LocalBusinessDetailSchema() {
  const detailSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: companyInfo.name,
    alternateName: companyInfo.alternateName,
    description: companyInfo.description,
    url: baseUrl,
    telephone: companyInfo.telephone,
    faxNumber: companyInfo.faxNumber,
    email: companyInfo.email,
    image: companyInfo.image,
    logo: companyInfo.logo,
    priceRange: companyInfo.priceRange,
    currenciesAccepted: 'AED, USD, SAR',
    paymentAccepted: 'Cash, Bank Transfer, Letter of Credit',
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.streetAddress,
      addressLocality: companyInfo.address.addressLocality,
      addressRegion: companyInfo.address.addressRegion,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: companyInfo.geo.latitude,
      longitude: companyInfo.geo.longitude,
    },
    hasMap: `https://maps.google.com/?q=${companyInfo.geo.latitude},${companyInfo.geo.longitude}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday'],
        opens: '08:00',
        closes: '12:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '14:00',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Oman' },
    ],
    serviceType: [
      'Pipe Manufacturer',
      'Pipe Supplier',
      'Plumbing Materials',
      'Construction Materials',
      'UPVC Pipes',
      'PPR Pipes',
      'HDPE Pipes',
      'Industrial Piping Solutions',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plastic Pipes & Fittings Catalog',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'UPVC Pressure Pipes', description: 'BS EN 1452 certified' },
        { '@type': 'OfferCatalog', name: 'UPVC Drainage Pipes', description: 'BS EN 1329/1401' },
        { '@type': 'OfferCatalog', name: 'PPR Pipes', description: 'DIN 8077/78' },
        { '@type': 'OfferCatalog', name: 'HDPE Pipes', description: 'ISO 4427' },
        { '@type': 'OfferCatalog', name: 'PVC Conduits', description: 'Electrical conduits' },
        { '@type': 'OfferCatalog', name: 'UPVC Duct Pipes', description: 'Telecom ducts' },
      ],
    },
    sameAs: [
      companyInfo.social.linkedin,
      companyInfo.social.facebook,
      companyInfo.social.twitter,
      companyInfo.social.youtube,
      companyInfo.social.instagram,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '156',
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
          '@type': 'Person',
          name: 'Ahmed M.',
        },
        reviewBody: 'Excellent quality UPVC pipes for our construction project. Fast delivery to Dubai.',
        datePublished: '2024-06-15',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Organization',
          name: 'ABC Construction LLC',
        },
        reviewBody: 'Reliable supplier with ISO certified products. Using Crown pipes for 5+ years.',
        datePublished: '2024-03-20',
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UPVC Pipe Supply',
          description: 'BS EN 1452 certified UPVC pressure pipes for water supply',
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: companyInfo.geo.latitude,
            longitude: companyInfo.geo.longitude,
          },
          geoRadius: '500 km',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical Support',
          description: 'Product specifications, installation guidance, project assistance',
        },
      },
    ],
  };

  return (
    <Script
      id="localbusiness-detail-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(detailSchema) }}
    />
  );
}

export default LocalBusinessSchema;
