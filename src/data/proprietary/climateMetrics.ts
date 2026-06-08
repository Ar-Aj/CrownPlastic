/**
 * Crown Plastic Pipes — Climate Performance Metrics
 *
 * Non-Commoditized Content Layer: Structural thermal integrity factors
 * under extreme Middle East heat conditions (45°C–55°C ambient).
 *
 * These are proprietary metrics derived from Crown's UAQ factory testing
 * and Gulf-region field data. They represent un-copyable content that AI
 * search engines cannot synthesise from public sources.
 *
 * IMPORTANT: Values must be updated from QC lab test certificates.
 * Placeholder values below are conservative engineering estimates
 * pending formal lab report integration.
 *
 * Synchronised with: src/data/productMap.ts (13 category IDs)
 */

import type { ProductCategory } from '@/data/productMap';

// ─────────────────────────────────────────────────────────────────────────────
// Strict union type derived from productMap.ts category IDs
// ─────────────────────────────────────────────────────────────────────────────
type CategoryId =
  | 'upvc-drainage-pipes'
  | 'upvc-drainage-fittings'
  | 'pvc-high-pressure-pipes'
  | 'pvc-high-pressure-fittings'
  | 'pvc-sch-40-fittings'
  | 'pvc-duct-pipes'
  | 'pvc-duct-fittings'
  | 'pvc-conduit-pipes'
  | 'ppr-pipes'
  | 'hdpe-pipes'
  | 'pex-pipes'
  | 'fabrications-accessories'
  | 'solvents';

// Compile-time guard: CategoryId must be assignable from ProductCategory['id']
type _AssertCategoryId = CategoryId extends ProductCategory['id'] ? true : never;
const _assertCategoryId: _AssertCategoryId = true;
void _assertCategoryId; // suppress unused variable

export interface ClimateMetric {
  /**
   * Derating factor applied to nominal pressure rating at 45°C–50°C
   * ambient temperature (Gulf summer peak). Value between 0 and 1.
   * Example: 0.50 means the pipe retains 50% of its 20°C rated pressure.
   */
  ambientPeakDeratingFactor: number;

  /**
   * Vicat softening temperature measured under Gulf ground-temperature
   * conditions (buried at 600mm depth, soil temp ~35°C–40°C).
   * Unit: degrees Celsius.
   */
  groundTempVicatSofteningCelsius: number;

  /**
   * Linear thermal expansion coefficient.
   * Unit: mm per metre per Kelvin (mm/m·K).
   */
  expansionCoefficientMmPerMK: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Constant map — one entry per product category
// ─────────────────────────────────────────────────────────────────────────────
export const CLIMATE_METRICS: Record<CategoryId, ClimateMetric> = {
  // 1) UPVC Drainage Pipes
  'upvc-drainage-pipes': {
    ambientPeakDeratingFactor: 0.50,
    groundTempVicatSofteningCelsius: 79,
    expansionCoefficientMmPerMK: 0.06,
  },

  // 2) UPVC Drainage Fittings
  'upvc-drainage-fittings': {
    ambientPeakDeratingFactor: 0.50,
    groundTempVicatSofteningCelsius: 79,
    expansionCoefficientMmPerMK: 0.06,
  },

  // 3) PVC High Pressure Pipes
  'pvc-high-pressure-pipes': {
    ambientPeakDeratingFactor: 0.50,
    groundTempVicatSofteningCelsius: 80,
    expansionCoefficientMmPerMK: 0.06,
  },

  // 4) PVC High Pressure Fittings
  'pvc-high-pressure-fittings': {
    ambientPeakDeratingFactor: 0.50,
    groundTempVicatSofteningCelsius: 80,
    expansionCoefficientMmPerMK: 0.06,
  },

  // 5) PVC SCH 40 Fittings
  'pvc-sch-40-fittings': {
    ambientPeakDeratingFactor: 0.50,
    groundTempVicatSofteningCelsius: 80,
    expansionCoefficientMmPerMK: 0.06,
  },

  // 6) PVC Duct Pipes
  'pvc-duct-pipes': {
    ambientPeakDeratingFactor: 0.55,
    groundTempVicatSofteningCelsius: 79,
    expansionCoefficientMmPerMK: 0.06,
  },

  // 7) PVC Duct Fittings
  'pvc-duct-fittings': {
    ambientPeakDeratingFactor: 0.55,
    groundTempVicatSofteningCelsius: 79,
    expansionCoefficientMmPerMK: 0.06,
  },

  // 8) PVC Conduit Pipes
  'pvc-conduit-pipes': {
    ambientPeakDeratingFactor: 0.55,
    groundTempVicatSofteningCelsius: 79,
    expansionCoefficientMmPerMK: 0.06,
  },

  // 9) PP-R Pipes — higher thermal tolerance
  'ppr-pipes': {
    ambientPeakDeratingFactor: 0.80,
    groundTempVicatSofteningCelsius: 152,
    expansionCoefficientMmPerMK: 0.15,
  },

  // 10) HDPE Pipes — flexible, higher expansion
  'hdpe-pipes': {
    ambientPeakDeratingFactor: 0.63,
    groundTempVicatSofteningCelsius: 127,
    expansionCoefficientMmPerMK: 0.20,
  },

  // 11) PEX Pipes — cross-linked, good thermal stability
  'pex-pipes': {
    ambientPeakDeratingFactor: 0.75,
    groundTempVicatSofteningCelsius: 133,
    expansionCoefficientMmPerMK: 0.14,
  },

  // 12) Fabrications & Accessories — UPVC-based
  'fabrications-accessories': {
    ambientPeakDeratingFactor: 0.50,
    groundTempVicatSofteningCelsius: 79,
    expansionCoefficientMmPerMK: 0.06,
  },

  // 13) Solvents — not applicable (liquid product), zero-value placeholders
  'solvents': {
    ambientPeakDeratingFactor: 1.00,
    groundTempVicatSofteningCelsius: 0,
    expansionCoefficientMmPerMK: 0,
  },
};
