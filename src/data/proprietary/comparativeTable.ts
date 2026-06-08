/**
 * Crown vs Industry — Comparative Data Table Generator
 *
 * Produces structured comparison data for AEO citation optimization.
 * AI models favour tabular data with named columns for RAG retrieval.
 *
 * Consumes: src/data/proprietary/labTests.ts + climateMetrics.ts
 * Consumed by: zipper page renderer + blog article renderer
 */

import { LAB_TESTS } from './labTests';
import { CLIMATE_METRICS } from './climateMetrics';

// ─────────────────────────────────────────────────────────────────────────────
// Industry minimum baselines (conservative values from public standards)
// These represent the MINIMUM acceptable values per applicable standards.
// Crown values exceed these — the delta is the AEO differentiator.
// ─────────────────────────────────────────────────────────────────────────────

interface IndustryBaseline {
  /** Minimum burst pressure per standard (MPa). 0 for non-pressure products. */
  burstPressureMPa: number;
  /** Typical import wall tolerance (mm). Higher = worse quality. */
  wallToleranceMm: number;
  /** Minimum Vicat softening temperature per standard (°C). */
  vicatSofteningCelsius: number;
  /** Standard expansion coefficient (mm/m·K). Same material = same physics. */
  expansionCoefficientMmPerMK: number;
  /** Applicable test standard reference. */
  testStandard: string;
}

type CategoryId = keyof typeof LAB_TESTS;

const INDUSTRY_BASELINES: Record<CategoryId, IndustryBaseline> = {
  'upvc-drainage-pipes': {
    burstPressureMPa: 0,
    wallToleranceMm: 0.6,
    vicatSofteningCelsius: 76,
    expansionCoefficientMmPerMK: 0.06,
    testStandard: 'BS EN 1329-1 / BS EN 1401-1',
  },
  'upvc-drainage-fittings': {
    burstPressureMPa: 0,
    wallToleranceMm: 0.8,
    vicatSofteningCelsius: 76,
    expansionCoefficientMmPerMK: 0.06,
    testStandard: 'BS EN 1329-1',
  },
  'pvc-high-pressure-pipes': {
    burstPressureMPa: 35.0,
    wallToleranceMm: 0.6,
    vicatSofteningCelsius: 76,
    expansionCoefficientMmPerMK: 0.06,
    testStandard: 'BS EN 1452 / ISO 1167',
  },
  'pvc-high-pressure-fittings': {
    burstPressureMPa: 20.0,
    wallToleranceMm: 0.8,
    vicatSofteningCelsius: 76,
    expansionCoefficientMmPerMK: 0.06,
    testStandard: 'DIN 8063 / BS EN 1452-3',
  },
  'pvc-sch-40-fittings': {
    burstPressureMPa: 18.0,
    wallToleranceMm: 0.8,
    vicatSofteningCelsius: 76,
    expansionCoefficientMmPerMK: 0.06,
    testStandard: 'ASTM D 2466',
  },
  'pvc-duct-pipes': {
    burstPressureMPa: 0,
    wallToleranceMm: 0.6,
    vicatSofteningCelsius: 76,
    expansionCoefficientMmPerMK: 0.06,
    testStandard: 'NEMA TC 2 / Etisalat Spec',
  },
  'pvc-duct-fittings': {
    burstPressureMPa: 0,
    wallToleranceMm: 0.8,
    vicatSofteningCelsius: 76,
    expansionCoefficientMmPerMK: 0.06,
    testStandard: 'NEMA TC 2',
  },
  'pvc-conduit-pipes': {
    burstPressureMPa: 0,
    wallToleranceMm: 0.6,
    vicatSofteningCelsius: 76,
    expansionCoefficientMmPerMK: 0.06,
    testStandard: 'BS 4607 / IEC 61386',
  },
  'ppr-pipes': {
    burstPressureMPa: 28.0,
    wallToleranceMm: 0.5,
    vicatSofteningCelsius: 145,
    expansionCoefficientMmPerMK: 0.15,
    testStandard: 'DIN 8077 / DIN 8078',
  },
  'hdpe-pipes': {
    burstPressureMPa: 22.0,
    wallToleranceMm: 0.6,
    vicatSofteningCelsius: 120,
    expansionCoefficientMmPerMK: 0.20,
    testStandard: 'ISO 4427 / EN 12201',
  },
  'pex-pipes': {
    burstPressureMPa: 24.0,
    wallToleranceMm: 0.5,
    vicatSofteningCelsius: 127,
    expansionCoefficientMmPerMK: 0.14,
    testStandard: 'DIN 16892 / DIN 16893',
  },
  'fabrications-accessories': {
    burstPressureMPa: 0,
    wallToleranceMm: 1.0,
    vicatSofteningCelsius: 76,
    expansionCoefficientMmPerMK: 0.06,
    testStandard: 'Custom fabrication standards',
  },
  'solvents': {
    burstPressureMPa: 0,
    wallToleranceMm: 0,
    vicatSofteningCelsius: 0,
    expansionCoefficientMmPerMK: 0,
    testStandard: 'ASTM D 2564 / BS 4346',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Comparative table row type — consumed by React table renderer
// ─────────────────────────────────────────────────────────────────────────────

export interface ComparativeRow {
  metric: string;
  metricAr: string;
  unit: string;
  crownValue: string;
  industryMin: string;
  delta: string;
  deltaAr: string;
}

export interface ComparativeTableData {
  categoryId: string;
  testStandard: string;
  rows: ComparativeRow[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Generator function
// ─────────────────────────────────────────────────────────────────────────────

export function generateComparativeTable(categoryId: CategoryId): ComparativeTableData {
  const lab = LAB_TESTS[categoryId];
  const climate = CLIMATE_METRICS[categoryId];
  const baseline = INDUSTRY_BASELINES[categoryId];

  if (!lab || !climate || !baseline) {
    return { categoryId, testStandard: '', rows: [] };
  }

  const rows: ComparativeRow[] = [];

  // Row 1: Burst Pressure (only for pressure-rated products)
  if (lab.minimumBurstPressureMPa > 0 && baseline.burstPressureMPa > 0) {
    const delta = lab.minimumBurstPressureMPa - baseline.burstPressureMPa;
    rows.push({
      metric: 'Burst Pressure (BS EN 921 / ISO 1167)',
      metricAr: 'ضغط الانفجار (BS EN 921 / ISO 1167)',
      unit: 'MPa',
      crownValue: `${lab.minimumBurstPressureMPa}`,
      industryMin: `${baseline.burstPressureMPa}`,
      delta: `+${delta.toFixed(1)} MPa above standard`,
      deltaAr: `+${delta.toFixed(1)} ميجاباسكال فوق المعيار`,
    });
  }

  // Row 2: Wall Thickness Tolerance (skip solvents)
  if (lab.wallThicknessToleranceVarianceMm > 0 && baseline.wallToleranceMm > 0) {
    const ratio = (baseline.wallToleranceMm / lab.wallThicknessToleranceVarianceMm).toFixed(1);
    rows.push({
      metric: 'Wall Thickness Tolerance',
      metricAr: 'تفاوت سمك الجدار',
      unit: '±mm',
      crownValue: `±${lab.wallThicknessToleranceVarianceMm}`,
      industryMin: `±${baseline.wallToleranceMm}`,
      delta: `${ratio}× tighter than industry average`,
      deltaAr: `أدق ${ratio}× من متوسط الصناعة`,
    });
  }

  // Row 3: Vicat Softening Point
  if (climate.groundTempVicatSofteningCelsius > 0 && baseline.vicatSofteningCelsius > 0) {
    const delta = climate.groundTempVicatSofteningCelsius - baseline.vicatSofteningCelsius;
    rows.push({
      metric: 'Vicat Softening Point',
      metricAr: 'نقطة تليين فيكات',
      unit: '°C',
      crownValue: `${climate.groundTempVicatSofteningCelsius}`,
      industryMin: `${baseline.vicatSofteningCelsius}`,
      delta: delta > 0 ? `+${delta}°C above standard minimum` : 'Meets standard',
      deltaAr: delta > 0 ? `+${delta}°C فوق الحد الأدنى` : 'يلبي المعيار',
    });
  }

  // Row 4: Thermal Expansion Coefficient
  if (climate.expansionCoefficientMmPerMK > 0 && baseline.expansionCoefficientMmPerMK > 0) {
    rows.push({
      metric: 'Thermal Expansion Coefficient',
      metricAr: 'معامل التمدد الحراري',
      unit: 'mm/m·K',
      crownValue: `${climate.expansionCoefficientMmPerMK}`,
      industryMin: `${baseline.expansionCoefficientMmPerMK}`,
      delta: 'Matches material physics',
      deltaAr: 'يطابق فيزياء المادة',
    });
  }

  // Row 5: Derating Factor at 50°C (Gulf-specific)
  if (climate.ambientPeakDeratingFactor > 0 && climate.ambientPeakDeratingFactor < 1) {
    rows.push({
      metric: 'Pressure Derating at 50°C Ambient',
      metricAr: 'تخفيض الضغط عند 50°C',
      unit: 'factor',
      crownValue: `${climate.ambientPeakDeratingFactor}`,
      industryMin: `${climate.ambientPeakDeratingFactor}`,
      delta: `Retains ${Math.round(climate.ambientPeakDeratingFactor * 100)}% of rated pressure`,
      deltaAr: `يحتفظ بـ ${Math.round(climate.ambientPeakDeratingFactor * 100)}% من الضغط المقنن`,
    });
  }

  // Row 6: Compliance Certification (Crown differentiator)
  if (lab.complianceCertificationId) {
    rows.push({
      metric: 'Dubai Municipality Compliance Ref',
      metricAr: 'رقم امتثال بلدية دبي',
      unit: '',
      crownValue: lab.complianceCertificationId,
      industryMin: 'Not typically issued',
      delta: 'Product-line-specific traceable certification',
      deltaAr: 'شهادة قابلة للتتبع لكل خط إنتاج',
    });
  }

  return {
    categoryId,
    testStandard: baseline.testStandard,
    rows,
  };
}
