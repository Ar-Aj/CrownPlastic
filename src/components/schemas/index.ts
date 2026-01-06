// Reusable Schema Components for Crown Plastic Pipes
// These components inject JSON-LD structured data into page <head>

export { OrganizationSchema } from './OrganizationSchema';
export { ProductSchema } from './ProductSchema';
export { LocalBusinessSchema } from './LocalBusinessSchema';
export { BreadcrumbSchema } from './BreadcrumbSchema';
export { ProductListSchema } from './ProductListSchema';

// Phase 2 AEO Schemas
export { FAQPageSchema, ClusterFAQSchema, SingleFAQSchema } from './FAQPageSchema';
export { ArticleSchema, TechnicalGuideSchema } from './ArticleSchema';
export { HowToSchema, SimpleHowToSchema, InstallationGuideSchema } from './HowToSchema';

// Phase 3 AEO Schemas - Conversion Optimization
// Review Schema - GOOGLE COMPLIANT: Only renders with real customer reviews
export { ProductReviewSchema, OrganizationRatingSchema, LocalBusinessRatingSchema } from './ReviewSchema';
export type { CustomerReview } from './ReviewSchema';
// Offer Schema with standardized bulk pricing tiers
export { OfferSchema, AggregateOfferSchema, RegionalOfferSchema, BulkPricingSchema, defaultRegionalPricing, standardBulkTiers, generateBulkPricingTiers } from './OfferSchema';
export type { PricingTier, StandardBulkTier } from './OfferSchema';
export { ProductQASchema, getProductQA, upvcPressurePipeQA, upvcDrainagePipeQA, pprPipeQA, hdpePipeQA, genericProductQA } from './QASchema';
