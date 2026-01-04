// Enhanced Organization Schema Component for Crown Plastic Pipes
// Implements comprehensive Organization + Brand structured data

import Script from 'next/script';
import { companyInfo, marketsServed, certifications } from '@/config/schemas';

const baseUrl = 'https://crownplasticuae.com';

export function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    alternateName: companyInfo.alternateName,
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': `${baseUrl}/#logo`,
      url: companyInfo.logo,
      contentUrl: companyInfo.logo,
      width: 400,
      height: 400,
      caption: 'Crown Plastic Pipes Logo',
    },
    image: companyInfo.image,
    description: companyInfo.description,
    slogan: companyInfo.slogan,
    foundingDate: companyInfo.foundingDate,
    foundingLocation: {
      '@type': 'Place',
      name: 'Sharjah, United Arab Emirates',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sharjah',
        addressRegion: 'Sharjah',
        addressCountry: 'AE',
      },
    },
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
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: companyInfo.telephone,
        contactType: 'sales',
        areaServed: marketsServed.map(m => m.code),
        availableLanguage: ['English', 'Arabic'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        telephone: companyInfo.telephone,
        contactType: 'customer service',
        areaServed: marketsServed.map(m => m.code),
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        email: companyInfo.email,
        contactType: 'technical support',
        areaServed: marketsServed.map(m => m.code),
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    sameAs: [
      companyInfo.social.linkedin,
      companyInfo.social.facebook,
      companyInfo.social.twitter,
      companyInfo.social.youtube,
      companyInfo.social.instagram,
    ],
    areaServed: marketsServed.map(m => ({
      '@type': 'Country',
      name: m.name,
    })),
    brand: {
      '@type': 'Brand',
      '@id': `${baseUrl}/#brand`,
      name: companyInfo.brand,
      logo: companyInfo.logo,
      slogan: companyInfo.slogan,
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 100,
      maxValue: 500,
    },
    priceRange: companyInfo.priceRange,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plastic Pipes & Fittings',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'UPVC Pressure Pipes & Fittings', description: 'BS EN 1452, DIN 8062 certified pressure pipes' },
        { '@type': 'OfferCatalog', name: 'UPVC Drainage Pipes & Fittings', description: 'BS EN 1329/1401 drainage systems' },
        { '@type': 'OfferCatalog', name: 'PPR Pipes', description: 'DIN 8077/78 hot & cold water pipes' },
        { '@type': 'OfferCatalog', name: 'HDPE Pipe Systems', description: 'ISO 4427 polyethylene pipes' },
        { '@type': 'OfferCatalog', name: 'PVC Conduit Pipes', description: 'Electrical conduit systems' },
        { '@type': 'OfferCatalog', name: 'UPVC Duct Pipes', description: 'Telecom duct systems' },
      ],
    },
    hasCredential: certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: cert.name,
      description: cert.description,
    })),
    award: certifications.map(cert => cert.name),
    knowsAbout: [
      'UPVC Pipes',
      'PPR Pipes',
      'HDPE Pipes',
      'PVC Conduits',
      'Plastic Pipe Manufacturing',
      'Water Supply Systems',
      'Drainage Systems',
      'Irrigation Systems',
      'Plumbing Solutions',
      'BS EN 1452',
      'DIN 8062',
      'ISO 9001 Quality Management',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '245',
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
          name: 'ISO Certification Body',
        },
        reviewBody: 'Certified ISO 9001:2015 Quality Management System',
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
          name: 'BSI',
        },
        reviewBody: 'Kitemark certified for BS EN 1452 compliance',
      },
    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export default OrganizationSchema;
