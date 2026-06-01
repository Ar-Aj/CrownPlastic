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
  upvcDrainagePipesBs5255BsEn1329,
  upvcDrainagePipesBsEn1401,
  upvcDrainagePipesNonStandard,
} from './upvcDrainageData';
import {
  upvcDrainageFittingsBsEn1329,
  upvcDrainageFittingsBsEn1401,
  upvcDrainageFittingsPushfit,
} from './upvcDrainageFittingsData';
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
import {
  pvcHpPipesIso4422,
  pvcHpPipesDin806162,
  pvcHpPipesBsEnIso14522,
  pvcHpPipesBs3505,
  pvcHpPipesBs3506,
  pvcHpPipesAstmD1785,
  pvcHpPipesAstmD2241,
} from './pvcHighPressurePipesData';
import {
  pvcHpFittingsDin8063,
  pvcHpFittingsBsEn14523,
  pvcHpFittingsValves,
} from './pvcHighPressureFittingsData';
import { pvcSch40FittingsAstmD2466 } from './pvcSch40FittingsData';
import {
  pvcDuctPipesNemaTc2,
  pvcDuctPipesNemaTc68,
  pvcDuctPipesDin8062,
  pvcDuctPipesEtisalatDu,
  pvcDuctPipesBs350506,
  pvcDuctPipesNonStandard,
} from './pvcDuctPipesData';
import { pvcDuctFittingsStandard } from './pvcDuctFittingsData';
import {
  pvcConduitPipesCompressionForce,
  pvcConduitPipesSch40,
  pvcConduitPipesSch80,
} from './pvcConduitPipesData';
import {
  pprPipesSdr11Pn10,
  pprPipesSdr74Pn16,
  pprPipesSdr6Pn20,
  pprPipesSdr5Pn25,
} from './pprPipesData';
import {
  hdpePipes5mpaPe63,
  hdpePipes63mpaPe80,
  hdpePipes8mpaPe100,
  hdpePipesDin8072,
  hdpePipesAsaeS435,
  hdpePipesAustStd2698,
  hdpePipesBs197267,
  hdpePipesPolyethyleneRolls,
} from './hdpePipesData';
import { pexPipesPn125Pn20 } from './pexPipesData';
import {
  fabricationGreaseTrapTypeA,
  fabricationGreaseTrapTypeB,
  fabricationGreaseTrapTypeC,
  fabricationGreaseTrapTypeD,
  fabricationAccessories,
} from './fabricationsAccessoriesData';
import { pvcSolventDetailConfig } from './solventData';

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
  // UPVC Drainage Pipes & Fittings (OLD taxonomy — kept for backward compat)
  // ─────────────────────────────────────────────────────────────────────────────
  'upvc-drainage-bs-en-1329': upvcDrainageBsEn1329,
  'upvc-drainage-bs-en-1401': upvcDrainageBsEn1401,

  // ─────────────────────────────────────────────────────────────────────────────
  // UPVC Drainage Pipes (NEW taxonomy — Phase 2.1)
  // ─────────────────────────────────────────────────────────────────────────────
  'upvc-drainage-pipes-bs5255-bs-en-1329': upvcDrainagePipesBs5255BsEn1329,
  'upvc-drainage-pipes-bs-en-1401': upvcDrainagePipesBsEn1401,
  'upvc-drainage-pipes-non-standard': upvcDrainagePipesNonStandard,

  // ─────────────────────────────────────────────────────────────────────────────
  // UPVC Drainage Fittings (NEW taxonomy — Phase 2.2)
  // ─────────────────────────────────────────────────────────────────────────────
  'upvc-drainage-fittings-bs-en-1329': upvcDrainageFittingsBsEn1329,
  'upvc-drainage-fittings-bs-en-1401': upvcDrainageFittingsBsEn1401,
  'upvc-drainage-fittings-pushfit': upvcDrainageFittingsPushfit,

  // ─────────────────────────────────────────────────────────────────────────────
  // PVC High Pressure Pipes (Phase 2.3)
  // ─────────────────────────────────────────────────────────────────────────────
  'pvc-hp-pipes-iso-4422': pvcHpPipesIso4422,
  'pvc-hp-pipes-din-8061-62': pvcHpPipesDin806162,
  'pvc-hp-pipes-bs-en-iso-1452-2': pvcHpPipesBsEnIso14522,
  'pvc-hp-pipes-bs-3505': pvcHpPipesBs3505,
  'pvc-hp-pipes-bs-3506': pvcHpPipesBs3506,
  'pvc-hp-pipes-astm-d1785': pvcHpPipesAstmD1785,
  'pvc-hp-pipes-astm-d2241': pvcHpPipesAstmD2241,

  // ─────────────────────────────────────────────────────────────────────────────
  // PVC High Pressure Fittings (Phase 2.4)
  // ─────────────────────────────────────────────────────────────────────────────
  'pvc-hp-fittings-din-8063': pvcHpFittingsDin8063,
  'pvc-hp-fittings-bs-en-1452-3': pvcHpFittingsBsEn14523,
  'pvc-hp-fittings-valves': pvcHpFittingsValves,

  // ─────────────────────────────────────────────────────────────────────────────
  // PVC SCH 40 Fittings (Phase 2.5)
  // ─────────────────────────────────────────────────────────────────────────────
  'pvc-sch-40-fittings-astm-d2466': pvcSch40FittingsAstmD2466,

  // ─────────────────────────────────────────────────────────────────────────────
  // PVC Duct Pipes (Phase 2.6)
  // ─────────────────────────────────────────────────────────────────────────────
  'pvc-duct-pipes-nema-tc-2': pvcDuctPipesNemaTc2,
  'pvc-duct-pipes-nema-tc-6-8': pvcDuctPipesNemaTc68,
  'pvc-duct-pipes-din-8062': pvcDuctPipesDin8062,
  'pvc-duct-pipes-etisalat-du': pvcDuctPipesEtisalatDu,
  'pvc-duct-pipes-bs-3505-06': pvcDuctPipesBs350506,
  'pvc-duct-pipes-non-standard': pvcDuctPipesNonStandard,

  // ─────────────────────────────────────────────────────────────────────────────
  // PVC Duct Fittings (Phase 2.7)
  // ─────────────────────────────────────────────────────────────────────────────
  'pvc-duct-fittings-standard': pvcDuctFittingsStandard,

  // ─────────────────────────────────────────────────────────────────────────────
  // PVC Conduit Pipes (Phase 2.8)
  // ─────────────────────────────────────────────────────────────────────────────
  'pvc-conduit-pipes-compression-force': pvcConduitPipesCompressionForce,
  'pvc-conduit-pipes-sch-40': pvcConduitPipesSch40,
  'pvc-conduit-pipes-sch-80': pvcConduitPipesSch80,

  // ─────────────────────────────────────────────────────────────────────────────
  // PP-R Pipes (Phase 2.9)
  // ─────────────────────────────────────────────────────────────────────────────
  'ppr-pipes-sdr11-pn10': pprPipesSdr11Pn10,
  'ppr-pipes-sdr7-4-pn16': pprPipesSdr74Pn16,
  'ppr-pipes-sdr6-pn20': pprPipesSdr6Pn20,
  'ppr-pipes-sdr5-pn25': pprPipesSdr5Pn25,

  // ─────────────────────────────────────────────────────────────────────────────
  // HDPE Pipes (Phase 2.10)
  // ─────────────────────────────────────────────────────────────────────────────
  'hdpe-pipes-5mpa-pe63': hdpePipes5mpaPe63,
  'hdpe-pipes-6-3mpa-pe80': hdpePipes63mpaPe80,
  'hdpe-pipes-8mpa-pe100': hdpePipes8mpaPe100,
  'hdpe-pipes-din-8072': hdpePipesDin8072,
  'hdpe-pipes-asae-s435': hdpePipesAsaeS435,
  'hdpe-pipes-aust-std-2698': hdpePipesAustStd2698,
  'hdpe-pipes-bs-1972-67': hdpePipesBs197267,
  'polyethylene-pipe-rolls': hdpePipesPolyethyleneRolls,

  // ─────────────────────────────────────────────────────────────────────────────
  // PEX Pipes (Phase 2.11)
  // ─────────────────────────────────────────────────────────────────────────────
  'pex-pipes-pn-12-5-pn-20': pexPipesPn125Pn20,

  // ─────────────────────────────────────────────────────────────────────────────
  // Fabrications & Accessories (Phase 2.12)
  // ─────────────────────────────────────────────────────────────────────────────
  'fabrication-grease-trap-type-a': fabricationGreaseTrapTypeA,
  'fabrication-grease-trap-type-b': fabricationGreaseTrapTypeB,
  'fabrication-grease-trap-type-c': fabricationGreaseTrapTypeC,
  'fabrication-grease-trap-type-d': fabricationGreaseTrapTypeD,
  'fabrication-accessories': fabricationAccessories,

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
  // PVC Conduit Pipes
  // ─────────────────────────────────────────────────────────────────────────────
  'pvc-conduit-sch-40': upvcConduitSch40,
  'pvc-conduit-sch-80': upvcConduitSch80,

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
  'pvc-solvents': pvcSolventDetailConfig,
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
