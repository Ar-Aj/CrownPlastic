/**
 * Crown Plastic Pipes — GCC Project Deployment References
 *
 * Non-Commoditized Content Layer: Actual project deployments
 * across UAE and GCC markets with verifiable metrics.
 *
 * These references provide the un-copyable "social proof" that
 * differentiates Crown from commodity importers. Each entry links
 * a product category (from productMap.ts) to a specific region
 * (from regions.ts / markets.ts) with real tonnage and application data.
 *
 * IMPORTANT: Project names and tonnage figures must be verified
 * by Crown's sales and engineering teams. Current entries are
 * template references pending formal approval for publication.
 *
 * Synchronised with:
 *   - src/data/productMap.ts (categoryId values)
 *   - src/data/regions.ts (regionSlug values)
 */

import type { ProductCategory } from '@/data/productMap';

// ─────────────────────────────────────────────────────────────────────────────
// Strict union types
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

type RegionSlug =
  | 'upvc-pipes-dubai'
  | 'upvc-pipes-abu-dhabi'
  | 'upvc-pipes-sharjah'
  | 'upvc-pipes-saudi-arabia'
  | 'upvc-pipes-kuwait'
  | 'upvc-pipes-qatar';

// Compile-time guard
type _AssertCategoryId = CategoryId extends ProductCategory['id'] ? true : never;
const _assertCategoryId: _AssertCategoryId = true;
void _assertCategoryId;

export interface ProjectReference {
  /** Unique identifier for this project reference */
  id: string;

  /** Product category ID from productMap.ts */
  categoryId: CategoryId;

  /** Region slug from regions.ts */
  regionSlug: RegionSlug;

  /** Official project name or development name */
  projectName: string;

  /** Total tonnage of Crown pipes supplied (metric tonnes) */
  tonnageSupplied: number;

  /**
   * Quantified application metric describing the deployment.
   * Examples:
   *   "48,000 LM of PN16 110mm trunk mains"
   *   "12,500 LM of BS EN 1329 drainage stacks (40-storey tower)"
   *   "3,200 PPR fittings across 480 residential units"
   */
  applicationMetric: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Project reference entries
//
// NOTE: These are template entries pending Crown sales team verification.
// Replace projectName and tonnage with actual approved data before
// publishing on the live site.
// ─────────────────────────────────────────────────────────────────────────────
export const PROJECT_REFERENCES: ProjectReference[] = [
  // ── Dubai ──────────────────────────────────────────────────────────────────
  {
    id: 'ref-dxb-001',
    categoryId: 'pvc-high-pressure-pipes',
    regionSlug: 'upvc-pipes-dubai',
    projectName: 'Dubai Creek Harbour — Phase 3 Residential Towers',
    tonnageSupplied: 185,
    applicationMetric: '48,000 LM of PN16 BS EN 1452 pressure mains (63mm–160mm)',
  },
  {
    id: 'ref-dxb-002',
    categoryId: 'upvc-drainage-pipes',
    regionSlug: 'upvc-pipes-dubai',
    projectName: 'Business Bay Commercial Complex — Tower D',
    tonnageSupplied: 92,
    applicationMetric: '12,500 LM of BS EN 1329 drainage stacks and branch lines',
  },
  {
    id: 'ref-dxb-003',
    categoryId: 'ppr-pipes',
    regionSlug: 'upvc-pipes-dubai',
    projectName: 'JVC Residential Community — Villas Phase 2',
    tonnageSupplied: 45,
    applicationMetric: '3,200 PPR fittings + 18,000 LM PN20 hot/cold water risers across 480 units',
  },
  {
    id: 'ref-dxb-004',
    categoryId: 'pvc-duct-pipes',
    regionSlug: 'upvc-pipes-dubai',
    projectName: 'DEWA Smart Grid — Underground Cable Protection',
    tonnageSupplied: 120,
    applicationMetric: '35,000 LM of NEMA TC 2 electrical duct pipes (110mm–160mm)',
  },

  // ── Abu Dhabi ──────────────────────────────────────────────────────────────
  {
    id: 'ref-ad-001',
    categoryId: 'pvc-high-pressure-pipes',
    regionSlug: 'upvc-pipes-abu-dhabi',
    projectName: 'Yas Island — Residential District Water Network',
    tonnageSupplied: 210,
    applicationMetric: '55,000 LM of PN10 ISO 4422-2:1996 potable water mains (75mm–200mm)',
  },
  {
    id: 'ref-ad-002',
    categoryId: 'hdpe-pipes',
    regionSlug: 'upvc-pipes-abu-dhabi',
    projectName: 'KIZAD Industrial Zone — Process Water Infrastructure',
    tonnageSupplied: 165,
    applicationMetric: '28,000 LM of PE100 PN16 HDPE industrial process water lines',
  },
  {
    id: 'ref-ad-003',
    categoryId: 'upvc-drainage-fittings',
    regionSlug: 'upvc-pipes-abu-dhabi',
    projectName: 'Saadiyat Cultural District — Museums Drainage',
    tonnageSupplied: 38,
    applicationMetric: '4,800 BS EN 1329 drainage fittings for multi-building complex',
  },

  // ── Sharjah ────────────────────────────────────────────────────────────────
  {
    id: 'ref-shj-001',
    categoryId: 'pvc-high-pressure-pipes',
    regionSlug: 'upvc-pipes-sharjah',
    projectName: 'Aljada Master-Planned Community — Phase 1 Water Mains',
    tonnageSupplied: 150,
    applicationMetric: '42,000 LM of PN16 DIN 8061/62 pressure pipes (50mm–160mm)',
  },
  {
    id: 'ref-shj-002',
    categoryId: 'pvc-conduit-pipes',
    regionSlug: 'upvc-pipes-sharjah',
    projectName: 'SEWA Sharjah — Street Lighting Conduit Upgrade',
    tonnageSupplied: 55,
    applicationMetric: '22,000 LM of SCH 40 PVC conduit pipes for SEWA lighting circuits',
  },

  // ── Saudi Arabia ───────────────────────────────────────────────────────────
  {
    id: 'ref-ksa-001',
    categoryId: 'pvc-high-pressure-pipes',
    regionSlug: 'upvc-pipes-saudi-arabia',
    projectName: 'Riyadh 2nd Industrial City — Factory District Water',
    tonnageSupplied: 320,
    applicationMetric: '85,000 LM of PN16 BS EN 1452 trunk mains (110mm–250mm)',
  },
  {
    id: 'ref-ksa-002',
    categoryId: 'ppr-pipes',
    regionSlug: 'upvc-pipes-saudi-arabia',
    projectName: 'Jeddah Residential Tower Complex — Al Hamra',
    tonnageSupplied: 78,
    applicationMetric: '32,000 LM of PN20 DIN 8077/78 PPR hot/cold water across 3 towers',
  },

  // ── Kuwait ─────────────────────────────────────────────────────────────────
  {
    id: 'ref-kwt-001',
    categoryId: 'pvc-high-pressure-pipes',
    regionSlug: 'upvc-pipes-kuwait',
    projectName: 'Sabhan Industrial Area — Municipal Water Extension',
    tonnageSupplied: 95,
    applicationMetric: '25,000 LM of PN10 BS EN 1452 potable water distribution pipes',
  },

  // ── Qatar ──────────────────────────────────────────────────────────────────
  {
    id: 'ref-qat-001',
    categoryId: 'upvc-drainage-pipes',
    regionSlug: 'upvc-pipes-qatar',
    projectName: 'Lusail City — District Stormwater Drainage Network',
    tonnageSupplied: 140,
    applicationMetric: '38,000 LM of BS EN 1401 underground drainage pipes (160mm–315mm)',
  },
  {
    id: 'ref-qat-002',
    categoryId: 'pvc-duct-pipes',
    regionSlug: 'upvc-pipes-qatar',
    projectName: 'Doha Metro — Gold Line Station Electrical Ducting',
    tonnageSupplied: 68,
    applicationMetric: '18,000 LM of DIN 8062 PVC duct pipes for ELV cable protection',
  },

  // ── Fabrications (cross-region) ────────────────────────────────────────────
  {
    id: 'ref-fab-001',
    categoryId: 'fabrications-accessories',
    regionSlug: 'upvc-pipes-dubai',
    projectName: 'Dubai Food Court District — Grease Trap Installation',
    tonnageSupplied: 12,
    applicationMetric: '85 Type-A and Type-B PVC grease traps for Dubai Municipality compliance',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────────────────────────────────────────

/** Get all project references for a given product category */
export function getProjectsByCategory(categoryId: CategoryId): ProjectReference[] {
  return PROJECT_REFERENCES.filter((ref) => ref.categoryId === categoryId);
}

/** Get all project references for a given region */
export function getProjectsByRegion(regionSlug: RegionSlug): ProjectReference[] {
  return PROJECT_REFERENCES.filter((ref) => ref.regionSlug === regionSlug);
}

/** Get project references for a specific Product × Location intersection */
export function getProjectsForZipper(
  categoryId: CategoryId,
  regionSlug: RegionSlug
): ProjectReference[] {
  return PROJECT_REFERENCES.filter(
    (ref) => ref.categoryId === categoryId && ref.regionSlug === regionSlug
  );
}

/** Get total tonnage supplied across all projects */
export function getTotalTonnage(): number {
  return PROJECT_REFERENCES.reduce((sum, ref) => sum + ref.tonnageSupplied, 0);
}

/** Get total project count */
export function getProjectCount(): number {
  return PROJECT_REFERENCES.length;
}
