// LocalBusiness Schema Component for Crown Plastic Pipes
// Generates location-specific JSON-LD for service area pages

import { ServiceArea, getLocalBusinessSchemaData, companyInfo } from '@/config/schemas';
import { useLanguage } from '@/context/LanguageContext';

const baseUrl = 'https://crownplasticuae.com';

interface LocalBusinessSchemaProps {
  serviceArea: ServiceArea;
}

export function LocalBusinessSchema({ serviceArea }: LocalBusinessSchemaProps) {
  const { language } = useLanguage();
  const schemaData = getLocalBusinessSchemaData(serviceArea, baseUrl, language);

  return (
    <script
      id={`localbusiness-schema-${serviceArea.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

// Enhanced LocalBusiness schema with full details (for contact page)
export function LocalBusinessDetailSchema() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const isFr = language === 'fr';

  const detailSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: isAr ? 'مصنع كراون لأنابيب البلاستيك ذ.م.م' : isFr ? 'Crown Plastic Pipes Factory LLC' : companyInfo.name,
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
    hasMap: companyInfo.hasMap,
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
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'Abu Dhabi' },
      { '@type': 'City', name: 'Sharjah' },
      { '@type': 'Region', name: 'GCC' },
      { '@type': 'Region', name: 'Middle East' }
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
        { '@type': 'OfferCatalog', name: 'PVC Duct Pipes', description: 'Telecom ducts' },
      ],
    },
    sameAs: [],
    // NOTE: Aggregate rating intentionally removed until real customer reviews are collected
    // Google requires authentic reviews - do not use fabricated ratings
    // Re-enable after collecting minimum 5-10 genuine customer reviews
    // aggregateRating: { '@type': 'AggregateRating', ratingValue: 0, ratingCount: 0, bestRating: 5 },
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
    <script
      id="localbusiness-detail-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(detailSchema) }}
    />
  );
}

export default LocalBusinessSchema;
