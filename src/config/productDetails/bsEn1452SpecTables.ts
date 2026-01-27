/**
 * BS EN 1452:3 / BS 4346 (PN 15) - Fitting Specification Tables
 * 
 * Full technical specification tables extracted from PDF catalogue.
 * Each table corresponds to a fitting type with all dimension columns preserved.
 * 
 * IMPORTANT: Values are preserved exactly as extracted from PDF.
 * Do NOT modify, round, or "clean up" any values.
 */

import { type FittingSpecTable } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// BS EN 1452 FITTING SPECIFICATION TABLES
// ═══════════════════════════════════════════════════════════════════════════════

export const bsEn1452SpecTables: FittingSpecTable[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // ELBOW 90°
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'elbow-90',
    title: 'ELBOW 90°',
    columns: [
      { key: 'nominalSizeMm', label: 'NOMINAL SIZE (mm)' },
      { key: 'd', label: 'd' },
      { key: 'L', label: 'L' },
      { key: 'PN', label: 'PN' },
    ],
    rows: [
      { nominalSizeMm: '1/2"', d: '21.34', L: '16.5', PN: '15' },
      { nominalSizeMm: '3/4"', d: '26.67', L: '19.5', PN: '15' },
      { nominalSizeMm: '1"', d: '33.4', L: '22.5', PN: '15' },
      { nominalSizeMm: '1 1/4"', d: '42.16', L: '26.5', PN: '15' },
      { nominalSizeMm: '1 1/2"', d: '48.26', L: '31.5', PN: '15' },
      { nominalSizeMm: '2"', d: '60.33', L: '36.5', PN: '15' },
      { nominalSizeMm: '3"', d: '88.9', L: '51', PN: '15' },
      { nominalSizeMm: '4"', d: '114.3', L: '63.5', PN: '15' },
      { nominalSizeMm: '6"', d: '168.3', L: '91', PN: '15' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ELBOW 45°
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'elbow-45',
    title: 'ELBOW 45°',
    columns: [
      { key: 'nominalSizeMm', label: 'NOMINAL SIZE (mm)' },
      { key: 'd', label: 'd' },
      { key: 'L', label: 'L' },
      { key: 'PN', label: 'PN' },
    ],
    rows: [
      { nominalSizeMm: '1/2"', d: '21.34', L: '16.5', PN: '15' },
      { nominalSizeMm: '3/4"', d: '26.67', L: '19.5', PN: '15' },
      { nominalSizeMm: '1"', d: '33.4', L: '22.5', PN: '15' },
      { nominalSizeMm: '1 1/4"', d: '42.16', L: '26.5', PN: '15' },
      { nominalSizeMm: '1 1/2"', d: '48.26', L: '31.5', PN: '15' },
      { nominalSizeMm: '2"', d: '60.33', L: '36.5', PN: '15' },
      { nominalSizeMm: '3"', d: '88.9', L: '51', PN: '15' },
      { nominalSizeMm: '4"', d: '114.3', L: '63.5', PN: '15' },
      { nominalSizeMm: '6"', d: '168.3', L: '91', PN: '15' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // FEMALE ELBOW 90°
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'female-elbow-90',
    title: 'FEMALE ELBOW 90°',
    columns: [
      { key: 'nominalSizeMm', label: 'NOMINAL SIZE (mm)' },
      { key: 'd', label: 'd' },
      { key: 'gL', label: 'G L' },
      { key: 'PN', label: 'PN' },
    ],
    rows: [
      { nominalSizeMm: '1/2"', d: '21.34', gL: '1/2" 16.5', PN: '15' },
      { nominalSizeMm: '3/4"', d: '26.67', gL: '3/4" 19.5', PN: '15' },
      { nominalSizeMm: '1"', d: '33.4', gL: '1" 22.5', PN: '15' },
      { nominalSizeMm: '1 1/4"', d: '42.16', gL: '1 1/4" 26.5', PN: '15' },
      { nominalSizeMm: '1 1/2"', d: '48.26', gL: '1 1/2" 31.5', PN: '15' },
      { nominalSizeMm: '2"', d: '60.33', gL: '2" 36.5', PN: '15' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SOCKET/COUPLER
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'socket-coupler',
    title: 'SOCKET/COUPLER',
    columns: [
      { key: 'nominalSizeMm', label: 'NOMINAL SIZE (mm)' },
      { key: 'd', label: 'd' },
      { key: 'L', label: 'L' },
      { key: 'PN', label: 'PN' },
    ],
    rows: [
      { nominalSizeMm: '1/2"', d: '21.34', L: '16.5', PN: '15' },
      { nominalSizeMm: '3/4"', d: '26.67', L: '19.5', PN: '15' },
      { nominalSizeMm: '1"', d: '33.4', L: '22.5', PN: '15' },
      { nominalSizeMm: '1 1/4"', d: '42.16', L: '26.5', PN: '15' },
      { nominalSizeMm: '1 1/2"', d: '48.26', L: '31.5', PN: '15' },
      { nominalSizeMm: '2"', d: '60.33', L: '36.5', PN: '15' },
      { nominalSizeMm: '3"', d: '88.9', L: '51', PN: '15' },
      { nominalSizeMm: '4"', d: '114.3', L: '63.5', PN: '15' },
      { nominalSizeMm: '6"', d: '168.3', L: '91', PN: '15' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // REDUCER BUSH/SOCKET
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'reducer-bush-socket',
    title: 'REDUCER BUSH/SOCKET',
    columns: [
      { key: 'nominalSizeMm', label: 'NOMINAL SIZE (mm)' },
      { key: 'D', label: 'D' },
      { key: 'd', label: 'd' },
      { key: 'L', label: 'L' },
      { key: 'PN', label: 'PN' },
    ],
    rows: [
      { nominalSizeMm: '3/4"x1/2"', D: '26.67', d: '21.34', L: '16.5', PN: '15' },
      { nominalSizeMm: '1x1/2"', D: '33.4', d: '21.34', L: '16.5', PN: '15' },
      { nominalSizeMm: '1x3/4"', D: '33.4', d: '26.67', L: '19.5', PN: '15' },
      { nominalSizeMm: '1 1/4"x1/2"', D: '42.16', d: '21.34', L: '16.5', PN: '15' },
      { nominalSizeMm: '1 1/4"x3/4"', D: '42.16', d: '26.67', L: '19.5', PN: '15' },
      { nominalSizeMm: '1 1/4"x1"', D: '42.16', d: '33.4', L: '22.5', PN: '15' },
      { nominalSizeMm: '1 1/2"x1/2"', D: '48.26', d: '21.34', L: '16.5', PN: '15' },
      { nominalSizeMm: '1 1/2"x3/4"', D: '48.26', d: '26.67', L: '19.5', PN: '15' },
      { nominalSizeMm: '1 1/2"x1"', D: '48.26', d: '33.4', L: '22.5', PN: '15' },
      { nominalSizeMm: '2x1/2"', D: '60.33', d: '21.34', L: '16.5', PN: '15' },
      { nominalSizeMm: '2x3/4"', D: '60.33', d: '26.67', L: '19.5', PN: '15' },
      { nominalSizeMm: '2x1"', D: '60.33', d: '33.4', L: '22.5', PN: '15' },
      { nominalSizeMm: '2x1 1/2"', D: '60.33', d: '48.26', L: '26.5', PN: '15' },
      { nominalSizeMm: '3x1 1/2"', D: '88.9', d: '48.26', L: '26.5', PN: '15' },
      { nominalSizeMm: '3x2"', D: '88.9', d: '60.33', L: '36.5', PN: '15' },
      { nominalSizeMm: '4x2"', D: '114.3', d: '60.33', L: '36.5', PN: '15' },
      { nominalSizeMm: '4x3"', D: '114.3', d: '88.9', L: '51', PN: '15' },
      // Note: JSON was truncated at this point - add remaining rows when full data is provided
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // TODO: Add remaining tables from PDF when full JSON is provided:
  // - TEE
  // - REDUCING TEE
  // - CROSS
  // - CAP
  // - PLUG
  // - UNION
  // - FLANGE ADAPTOR
  // - etc.
  // ─────────────────────────────────────────────────────────────────────────────
];
