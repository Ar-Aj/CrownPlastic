/**
 * Product Details Registry
 * 
 * Maps product slugs to their detailed configuration objects.
 * When a product has a detailed config here, the product detail page
 * will use the enhanced ProductDetailLayout with full pipe tables,
 * fittings gallery, and all sections.
 */

import { type ProductDetailConfig } from '@/types/productDetail';
import {
  pvcPressureDin8063,
  pvcPressureBsEn1452,
  pvcPressureAstmD2466,
} from './pvcPressureData';
import {
  upvcDrainageBsEn1329,
  upvcDrainageBsEn1401,
} from './drainageData';
import {
  pprSdr11Pn10,
  pprSdr7_4Pn16,
  pprSdr6Pn20,
} from './pprData';
import {
  upvcDuctPipesAndAccessories,
} from './ductData';
import {
  upvcConduitSch40,
  upvcConduitSch80,
} from './conduitData';
import {
  greaseTrapTypeA,
  greaseTrapTypeB,
  greaseTrapTypeC,
  greaseTrapTypeD,
} from './fabricationsData';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT DETAILS MAP
// Add new product configs here as they are created
// ═══════════════════════════════════════════════════════════════════════════════

export const PRODUCT_DETAILS_MAP: Record<string, ProductDetailConfig> = {
  // PVC Pressure Pipes & Fittings
  'pvc-pressure-din-8063': pvcPressureDin8063,
  'pvc-pressure-bs-en-1452': pvcPressureBsEn1452,
  'pvc-pressure-astm-d2466': pvcPressureAstmD2466,
  
  // ─────────────────────────────────────────────────────────────────────────────
  // UPVC Drainage Pipes & Fittings
  // ─────────────────────────────────────────────────────────────────────────────
  'upvc-drainage-bs-en-1329': upvcDrainageBsEn1329,
  'upvc-drainage-bs-en-1401': upvcDrainageBsEn1401,
  
  // ─────────────────────────────────────────────────────────────────────────────
  // PPR Pipes
  // ─────────────────────────────────────────────────────────────────────────────
  'ppr-sdr11-pn10': pprSdr11Pn10,
  'ppr-sdr7-4-pn16': pprSdr7_4Pn16,
  'ppr-sdr6-pn20': pprSdr6Pn20,
  
  // ─────────────────────────────────────────────────────────────────────────────
  // UPVC Duct Pipes & Accessories
  // ─────────────────────────────────────────────────────────────────────────────
  'upvc-duct-black': upvcDuctPipesAndAccessories,
  
  // ─────────────────────────────────────────────────────────────────────────────
  // UPVC Conduit Pipes
  // ─────────────────────────────────────────────────────────────────────────────
  'upvc-conduit-sch-40': upvcConduitSch40,
  'upvc-conduit-sch-80': upvcConduitSch80,
  
  // ─────────────────────────────────────────────────────────────────────────────
  // UPVC Fabrications & Accessories – Grease Traps (separate pages per type)
  // ─────────────────────────────────────────────────────────────────────────────
  'pvc-upvc-grease-trap-type-a': greaseTrapTypeA,
  'pvc-upvc-grease-trap-type-b': greaseTrapTypeB,
  'pvc-upvc-grease-trap-type-c': greaseTrapTypeC,
  'pvc-upvc-grease-trap-type-d': greaseTrapTypeD,
  
  // ─────────────────────────────────────────────────────────────────────────────
  // TODO: Add more product configs as they are created
  // ─────────────────────────────────────────────────────────────────────────────
};

/**
 * Check if a product has a detailed configuration available
 */
export function hasProductDetail(slug: string): boolean {
  return slug in PRODUCT_DETAILS_MAP;
}

/**
 * Get product detail configuration by slug
 */
export function getProductDetail(slug: string): ProductDetailConfig | undefined {
  return PRODUCT_DETAILS_MAP[slug];
}

/**
 * Get all product slugs that have detailed configurations
 */
export function getAllDetailedProductSlugs(): string[] {
  return Object.keys(PRODUCT_DETAILS_MAP);
}
