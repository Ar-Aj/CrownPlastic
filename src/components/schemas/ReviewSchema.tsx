// Review & Rating Schema Component for Crown Plastic Pipes - Phase 3 AEO
// GOOGLE COMPLIANT: Only renders reviews when real customer data is provided
// Do NOT use fabricated reviews or certification-based ratings

import Script from 'next/script';
import { companyInfo } from '@/config/schemas';

const baseUrl = 'https://crownplasticuae.com';

// ============================================
// REAL CUSTOMER REVIEW INTERFACE
// ============================================

export interface CustomerReview {
  authorName: string;
  authorType?: 'Person' | 'Organization';
  ratingValue: number; // 1-5
  reviewBody: string;
  datePublished: string; // ISO date format YYYY-MM-DD
  reviewTitle?: string;
}

// ============================================
// PRODUCT REVIEW SCHEMA - REAL REVIEWS ONLY
// ============================================

export interface ProductReviewSchemaProps {
  productName: string;
  productUrl: string;
  sku: string;
  reviews?: CustomerReview[]; // Optional - only render if real reviews exist
  bestRating?: number;
  worstRating?: number;
}

export function ProductReviewSchema({
  productName,
  productUrl,
  sku,
  reviews,
  bestRating = 5,
  worstRating = 1,
}: ProductReviewSchemaProps) {
  // GOOGLE COMPLIANCE: Only render if we have real reviews
  if (!reviews || reviews.length === 0) {
    // Return empty placeholder comment for future implementation
    return (
      <Script
        id={`product-review-placeholder-${sku}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            '@id': `${productUrl}#product-reviews-pending`,
            name: productName,
            sku: sku,
            url: productUrl,
            // NOTE: AggregateRating omitted - awaiting real customer reviews
            // Minimum 5-10 authentic reviews required before enabling
          }),
        }}
      />
    );
  }

  // Calculate aggregate rating from real reviews
  const totalRating = reviews.reduce((sum, r) => sum + r.ratingValue, 0);
  const averageRating = Math.round((totalRating / reviews.length) * 10) / 10;

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product-reviews`,
    name: productName,
    sku: sku,
    url: productUrl,
    brand: {
      '@type': 'Brand',
      name: 'Crown Plastic Pipes',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      bestRating: bestRating,
      worstRating: worstRating,
      ratingCount: reviews.length,
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: bestRating,
      },
      author: {
        '@type': review.authorType || 'Person',
        name: review.authorName,
      },
      ...(review.reviewTitle && { name: review.reviewTitle }),
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };

  return (
    <Script
      id={`product-review-schema-${sku}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}

// ============================================
// ORGANIZATION AGGREGATE RATING SCHEMA - REAL REVIEWS ONLY
// ============================================

export interface OrganizationRatingSchemaProps {
  reviews?: CustomerReview[]; // Optional - only render if real reviews exist
  bestRating?: number;
}

export function OrganizationRatingSchema({
  reviews,
  bestRating = 5,
}: OrganizationRatingSchemaProps) {
  // GOOGLE COMPLIANCE: Only render if we have real reviews
  if (!reviews || reviews.length === 0) {
    // Return placeholder with no rating
    return (
      <Script
        id="organization-rating-placeholder"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': `${baseUrl}#organization-rating-pending`,
            name: companyInfo.name,
            url: baseUrl,
            // NOTE: AggregateRating omitted - awaiting real customer reviews
            // Collect authentic reviews via Google Business Profile, email surveys,
            // or verified purchase reviews before enabling this schema
          }),
        }}
      />
    );
  }

  // Calculate aggregate rating from real reviews
  const totalRating = reviews.reduce((sum, r) => sum + r.ratingValue, 0);
  const averageRating = Math.round((totalRating / reviews.length) * 10) / 10;

  const orgRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}#organization-rating`,
    name: companyInfo.name,
    url: baseUrl,
    logo: companyInfo.logo,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      bestRating: bestRating,
      worstRating: 1,
      ratingCount: reviews.length,
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: bestRating,
      },
      author: {
        '@type': review.authorType || 'Person',
        name: review.authorName,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };

  return (
    <Script
      id="organization-rating-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgRatingSchema) }}
    />
  );
}

// ============================================
// LOCAL BUSINESS RATING SCHEMA - REAL REVIEWS ONLY
// ============================================

export interface LocalBusinessRatingSchemaProps {
  businessName: string;
  city: string;
  pageUrl: string;
  reviews?: CustomerReview[]; // Optional - only render if real reviews exist
}

export function LocalBusinessRatingSchema({
  businessName,
  city,
  pageUrl,
  reviews,
}: LocalBusinessRatingSchemaProps) {
  // GOOGLE COMPLIANCE: Only render if we have real reviews
  if (!reviews || reviews.length === 0) {
    return (
      <Script
        id={`localbusiness-rating-placeholder-${city.toLowerCase().replace(/\s+/g, '-')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${pageUrl}#localbusiness-rating-pending`,
            name: businessName,
            url: pageUrl,
            // NOTE: AggregateRating omitted - awaiting real customer reviews
            // Collect reviews via Google Business Profile for this location
          }),
        }}
      />
    );
  }

  // Calculate aggregate rating from real reviews
  const totalRating = reviews.reduce((sum, r) => sum + r.ratingValue, 0);
  const averageRating = Math.round((totalRating / reviews.length) * 10) / 10;

  const localRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${pageUrl}#localbusiness-rating`,
    name: businessName,
    url: pageUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: reviews.length,
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: 5,
      },
      author: {
        '@type': review.authorType || 'Person',
        name: review.authorName,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };

  return (
    <Script
      id={`localbusiness-rating-${city.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localRatingSchema) }}
    />
  );
}

// ============================================
// REVIEW COLLECTION GUIDANCE
// ============================================

/**
 * HOW TO COLLECT REAL REVIEWS FOR SCHEMA IMPLEMENTATION:
 *
 * 1. Google Business Profile Reviews
 *    - Set up Google Business Profile for Crown Plastic Pipes
 *    - Collect reviews there, then import for schema
 *
 * 2. Post-Purchase Email Surveys
 *    - Send survey to customers after delivery
 *    - Get explicit permission to use reviews on website
 *
 * 3. Verified B2B Reviews
 *    - Request testimonials from verified contractors/distributors
 *    - Include company name, project reference if possible
 *
 * 4. Third-Party Review Platforms
 *    - Alibaba/TradeKey for B2B reviews
 *    - Industry-specific platforms
 *
 * MINIMUM REQUIREMENT: 5-10 authentic reviews before enabling schema
 * Each review MUST have: author name, date, rating (1-5), review text
 */

export default ProductReviewSchema;
