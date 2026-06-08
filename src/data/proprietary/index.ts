/**
 * Crown Plastic Pipes — Proprietary Data Layer
 *
 * Barrel export for all non-commoditized content data.
 * These modules contain Crown-specific metrics, lab results,
 * and project references that cannot be replicated by AI search.
 */

export { CLIMATE_METRICS } from './climateMetrics';
export type { ClimateMetric } from './climateMetrics';

export { LAB_TESTS } from './labTests';
export type { LabTestResult } from './labTests';

export {
  PROJECT_REFERENCES,
  getProjectsByCategory,
  getProjectsByRegion,
  getProjectsForZipper,
  getTotalTonnage,
  getProjectCount,
} from './projectReferences';
export type { ProjectReference } from './projectReferences';

export { generateComparativeTable } from './comparativeTable';
export type { ComparativeRow, ComparativeTableData } from './comparativeTable';
