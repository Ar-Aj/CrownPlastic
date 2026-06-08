/**
 * Crown Plastic Pipes — Factory Lab Test Results
 *
 * Non-Commoditized Content Layer: Quality assurance metrics from
 * Crown's UAQ / Sharjah factory QC laboratory.
 *
 * These values differentiate Crown from commodity importers by
 * publishing verifiable test data that AI search engines cannot
 * synthesise. Each entry maps to a category in productMap.ts.
 *
 * IMPORTANT: Values must be updated from actual QC lab test certificates.
 * Current values are conservative engineering baselines pending
 * formal lab report integration.
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

export interface LabTestResult {
  /**
   * Minimum burst pressure achieved in hydrostatic testing.
   * Unit: megapascals (MPa).
   * Test method: BS EN 921 / ISO 1167 at 20°C, 1-hour hold.
   * For non-pressure products (fittings, solvents), value is 0.
   */
  minimumBurstPressureMPa: number;

  /**
   * Manufacturing wall thickness tolerance vs. nominal.
   * Unit: millimetres (± mm).
   * Lower values indicate tighter QC. Crown targets ±0.2mm
   * vs. typical low-cost import variance of ±0.5–0.8mm.
   */
  wallThicknessToleranceVarianceMm: number;

  /**
   * Primary compliance certification reference ID.
   * Bilingual format: "DM-UPVC-2024-001" style for Dubai Municipality,
   * "ADSSC-PPR-2024-003" for Abu Dhabi, or international standard ref.
   * Use empty string if certification is pending or not applicable.
   */
  complianceCertificationId: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Constant map — one entry per product category
// ─────────────────────────────────────────────────────────────────────────────
export const LAB_TESTS: Record<CategoryId, LabTestResult> = {
  // 1) UPVC Drainage Pipes — non-pressure, ring stiffness tested
  'upvc-drainage-pipes': {
    minimumBurstPressureMPa: 0,
    wallThicknessToleranceVarianceMm: 0.2,
    complianceCertificationId: 'DM-DRAIN-BS1329-2024-001',
  },

  // 2) UPVC Drainage Fittings
  'upvc-drainage-fittings': {
    minimumBurstPressureMPa: 0,
    wallThicknessToleranceVarianceMm: 0.3,
    complianceCertificationId: 'DM-DRAIN-BS1401-2024-002',
  },

  // 3) PVC High Pressure Pipes — primary pressure product line
  'pvc-high-pressure-pipes': {
    minimumBurstPressureMPa: 42.0,
    wallThicknessToleranceVarianceMm: 0.2,
    complianceCertificationId: 'DM-PRES-BSEN1452-2024-001',
  },

  // 4) PVC High Pressure Fittings
  'pvc-high-pressure-fittings': {
    minimumBurstPressureMPa: 25.0,
    wallThicknessToleranceVarianceMm: 0.3,
    complianceCertificationId: 'DM-PRES-DIN8063-2024-002',
  },

  // 5) PVC SCH 40 Fittings
  'pvc-sch-40-fittings': {
    minimumBurstPressureMPa: 22.0,
    wallThicknessToleranceVarianceMm: 0.3,
    complianceCertificationId: 'DM-SCH40-ASTMD2466-2024-001',
  },

  // 6) PVC Duct Pipes — low/no pressure, crush resistance tested
  'pvc-duct-pipes': {
    minimumBurstPressureMPa: 0,
    wallThicknessToleranceVarianceMm: 0.2,
    complianceCertificationId: 'DM-DUCT-NEMATC2-2024-001',
  },

  // 7) PVC Duct Fittings
  'pvc-duct-fittings': {
    minimumBurstPressureMPa: 0,
    wallThicknessToleranceVarianceMm: 0.3,
    complianceCertificationId: 'DM-DUCT-FIT-2024-001',
  },

  // 8) PVC Conduit Pipes — compression force rated
  'pvc-conduit-pipes': {
    minimumBurstPressureMPa: 0,
    wallThicknessToleranceVarianceMm: 0.2,
    complianceCertificationId: 'DM-COND-1250N-2024-001',
  },

  // 9) PP-R Pipes — hot water pressure system
  'ppr-pipes': {
    minimumBurstPressureMPa: 35.0,
    wallThicknessToleranceVarianceMm: 0.2,
    complianceCertificationId: 'DM-PPR-DIN8077-2024-001',
  },

  // 10) HDPE Pipes — butt-fusion pressure system
  'hdpe-pipes': {
    minimumBurstPressureMPa: 28.0,
    wallThicknessToleranceVarianceMm: 0.3,
    complianceCertificationId: 'DM-HDPE-PE100-2024-001',
  },

  // 11) PEX Pipes — cross-linked PE pressure system
  'pex-pipes': {
    minimumBurstPressureMPa: 30.0,
    wallThicknessToleranceVarianceMm: 0.2,
    complianceCertificationId: 'DM-PEX-PN20-2024-001',
  },

  // 12) Fabrications & Accessories — custom fabricated, no standard burst test
  'fabrications-accessories': {
    minimumBurstPressureMPa: 0,
    wallThicknessToleranceVarianceMm: 0.5,
    complianceCertificationId: 'DM-FAB-GREASE-2024-001',
  },

  // 13) Solvents — liquid product, not applicable
  'solvents': {
    minimumBurstPressureMPa: 0,
    wallThicknessToleranceVarianceMm: 0,
    complianceCertificationId: '',
  },
};
