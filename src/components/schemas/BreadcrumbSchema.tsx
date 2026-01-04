// Breadcrumb Schema Component for Crown Plastic Pipes
// Generates BreadcrumbList JSON-LD for navigation hierarchy

import Script from 'next/script';

const baseUrl = 'https://crownplasticuae.com';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  // Always start with Home
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    ...items,
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url || `${baseUrl}/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

// Pre-built breadcrumbs for common pages
export function ProductsBreadcrumb() {
  return (
    <BreadcrumbSchema
      items={[
        { name: 'Products', url: `${baseUrl}/products` },
      ]}
    />
  );
}

export function ProductCategoryBreadcrumb({ categoryName, categorySlug }: { categoryName: string; categorySlug: string }) {
  return (
    <BreadcrumbSchema
      items={[
        { name: 'Products', url: `${baseUrl}/products` },
        { name: categoryName, url: `${baseUrl}/products/${categorySlug}` },
      ]}
    />
  );
}

export function ProductDetailBreadcrumb({ 
  categoryName, 
  categorySlug, 
  productName, 
  productSlug 
}: { 
  categoryName: string; 
  categorySlug: string;
  productName: string;
  productSlug: string;
}) {
  return (
    <BreadcrumbSchema
      items={[
        { name: 'Products', url: `${baseUrl}/products` },
        { name: categoryName, url: `${baseUrl}/products/${categorySlug}` },
        { name: productName, url: `${baseUrl}/products/${categorySlug}/${productSlug}` },
      ]}
    />
  );
}

export function AboutBreadcrumb() {
  return (
    <BreadcrumbSchema
      items={[
        { name: 'About Us', url: `${baseUrl}/about-us` },
      ]}
    />
  );
}

export function ContactBreadcrumb() {
  return (
    <BreadcrumbSchema
      items={[
        { name: 'Contact Us', url: `${baseUrl}/contact-us` },
      ]}
    />
  );
}

export function ServiceAreaBreadcrumb({ cityName, slug }: { cityName: string; slug: string }) {
  return (
    <BreadcrumbSchema
      items={[
        { name: 'Service Areas', url: `${baseUrl}/service-areas` },
        { name: `UPVC Pipes ${cityName}`, url: `${baseUrl}/${slug}` },
      ]}
    />
  );
}

export default BreadcrumbSchema;
