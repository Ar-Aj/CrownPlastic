/**
 * UPVC Drainage Pipes & Fittings - Product Detail Configurations
 * 
 * This file contains the detailed product data for drainage standards:
 * - BS EN 1329-1:2014 / Supersedes BS 5255 & BS 4514 (Light Grey / Olive) - 24 fittings populated
 * - BS EN 1401 / Supersedes BS 4660 & BS 5481 (Orange) - placeholder (to be populated)
 */

import { type ProductDetailConfig, type Fitting } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// BS EN 1329-1:2014 FITTINGS (24 fitting types)
// Generated from: src/UPVC DRAINAGE FITTING BS EN 1329-1,2014 - SUPERSEDED BS 5255 AND BS4514.txt
// ═══════════════════════════════════════════════════════════════════════════════

export const bsEn1329Fittings: Fitting[] = [
  // 1. ELBOW 90°
  {
    id: 'elbow-90',
    code: undefined,
    name: 'ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/grey-elbow90.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/grey-elbow90.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/olive-elbow90.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'elbow-90',
      title: 'ELBOW 90°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: '52.0', d_1: '42.9', l: '23.0' },
        { nominal_size_inch: '2"', d: '62.0', d_1: '55.9', l: '29.0' },
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40.0' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48.0' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58.0' },
        { nominal_size_inch: '8"', d: '216.0', d_1: '200.0', l: '70.0' },
      ],
    },
  },
  // 2. ELBOW 45°
  {
    id: 'elbow-45',
    code: undefined,
    name: 'ELBOW 45°',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/elbow45.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/elbow45.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/elbow45.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'elbow-45',
      title: 'ELBOW 45°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: '52.0', d_1: '42.9', l: '23.0' },
        { nominal_size_inch: '2"', d: '62.0', d_1: '55.9', l: '29.0' },
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40.0' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48.0' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58.0' },
        { nominal_size_inch: '8"', d: '216.0', d_1: '200.0', l: '70.0' },
      ],
    },
  },
  // 3. SOCKET/COUPLER
  {
    id: 'socket-coupler',
    code: undefined,
    name: 'SOCKET/COUPLER',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/socketcoupler.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/socketcoupler.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/socketcoupler.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'socket-coupler',
      title: 'SOCKET/COUPLER',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: '52.0', d_1: '42.9', l: '23' },
        { nominal_size_inch: '2"', d: '62.0', d_1: '55.9', l: '29' },
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58' },
        { nominal_size_inch: '8"', d: '216.0', d_1: '200.0', l: '70' },
      ],
    },
  },
  // 4. REDUCER BUSH/SOCKET
  {
    id: 'reducer-bush-socket',
    code: undefined,
    name: 'REDUCER BUSH/SOCKET',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/reducerbush.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/reducerbush.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/remove_the_side_202604082341.png' },
    sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch',
    sizes: [
      { sizeMm: '2" x 1 1/2"' },
      { sizeMm: '3" x 2"' },
      { sizeMm: '4" x 2"' },
      { sizeMm: '4" x 3"' },
      { sizeMm: '6" x 4"' },
      { sizeMm: '8" x 6"' },
    ],
    table: {
      id: 'reducer-bush-socket',
      title: 'REDUCER BUSH/SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'Nominal Size (Inch x Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '2" x 1 1/2"', d: '55.9', d_1: '42.9', l: '22.5', h: '31.0' },
        { nominal_size_inch: '3" x 2"', d: '82.6', d_1: '55.9', l: '29.0', h: '42.0' },
        { nominal_size_inch: '4" x 2"', d: '110.0', d_1: '55.9', l: '29.0', h: '50.0' },
        { nominal_size_inch: '4" x 3"', d: '110.0', d_1: '82.6', l: '40.0', h: '50.0' },
        { nominal_size_inch: '6" x 4"', d: '160.0', d_1: '110.0', l: '48.0', h: '60.0' },
        { nominal_size_inch: '8" x 6"', d: '200.0', d_1: '160.0', l: '58.0', h: '73.0' },
      ],
    },
  },
  // 5. TEE 87.5°
  {
    id: 'tee-87-5',
    code: undefined,
    name: 'TEE 87.5°',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/tee87.5.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/tee87.5.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/tee87.5.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'tee-87-5',
      title: 'TEE 87.5°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: '52.0', d_1: '42.9', l: '23.0', h: '100.5' },
        { nominal_size_inch: '2"', d: '62.0', d_1: '55.9', l: '29.0', h: '133.0' },
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40.0', h: '170.0' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48.0', h: '219.0' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58.0', h: '296.0' },
        { nominal_size_inch: '8"', d: '216.0', d_1: '200.0', l: '70.0', h: '355.0' },
      ],
    },
  },
  // 6. Y - 45°/SKEW TEE
  {
    id: 'y-45-skew-tee',
    code: undefined,
    name: 'Y - 45°/SKEW TEE',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/y45skew.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/y45skew.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/y45skew.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'y-45-skew-tee',
      title: 'Y - 45°/SKEW TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: '52.0', d_1: '42.9', l: '23.0', h: '121.1' },
        { nominal_size_inch: '2"', d: '62.0', d_1: '55.9', l: '29.0', h: '152.1' },
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40.0', h: '195.0' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48.0', h: '259.0' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58.0', h: '257.0' },
      ],
    },
  },
  // 7. ELBOW 90° MALE/FEMALE
  {
    id: 'elbow-90-male-female',
    code: undefined,
    name: 'ELBOW 90° MALE/FEMALE',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/elbow90malefemale.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/elbow90malefemale.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/elbow90malefemale.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'elbow-90-male-female',
      title: 'ELBOW 90° MALE/FEMALE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: null, d_1: null, l: null, l1: null },
        { nominal_size_inch: '2"', d: null, d_1: null, l: null, l1: null },
        { nominal_size_inch: '3"', d: null, d_1: null, l: null, l1: null },
        { nominal_size_inch: '4"', d: '110', d_1: '110', l: '49', l1: '130' },
        { nominal_size_inch: '6"', d: null, d_1: null, l: null, l1: null },
        { nominal_size_inch: '8"', d: null, d_1: null, l: null, l1: null },
      ],
    },
  },
  // 8. TEE 87.5° MALE/FEMALE
  {
    id: 'tee-87-5-male-female',
    code: undefined,
    name: 'TEE 87.5° MALE/FEMALE',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/tee87.5malefemale.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/tee87.5malefemale.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/tee87.5malefemale.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'tee-87-5-male-female',
      title: 'TEE 87.5° MALE/FEMALE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: null, d_1: null, l: null, l1: null },
        { nominal_size_inch: '2"', d: null, d_1: null, l: null, l1: null },
        { nominal_size_inch: '3"', d: null, d_1: null, l: null, l1: null },
        { nominal_size_inch: '4"', d: '110', d_1: '110', l: '112', l1: '49' },
        { nominal_size_inch: '6"', d: null, d_1: null, l: null, l1: null },
        { nominal_size_inch: '8"', d: null, d_1: null, l: null, l1: null },
      ],
    },
  },
  // 9. ACCESS CAP/CLEAN OUT
  {
    id: 'access-cap-clean-out',
    code: undefined,
    name: 'ACCESS CAP/CLEAN OUT',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/accesscap.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/accesscap.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/accesscap3.png' },
    sizes: [
      { sizeMm: '11/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'access-cap-clean-out',
      title: 'ACCESS CAP/CLEAN OUT',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm', colSpan: 2 },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '11/2"', d: '42.9', h: '48.50' },
        { nominal_size_inch: '2"', d: '55.9', h: '61.00' },
        { nominal_size_inch: '3"', d: '82.6', h: '82.00' },
        { nominal_size_inch: '4"', d: '110.0', h: '99.00' },
        { nominal_size_inch: '6"', d: '160.0', h: '125.00' },
        { nominal_size_inch: '8"', d: null, h: null },
      ],
    },
  },
  // 10. ACCESS/DOOR ELBOW 90°
  {
    id: 'access-door-elbow-90',
    code: undefined,
    name: 'ACCESS/DOOR ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/accesselbow90.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/accesselbow90.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/accesselbow90.png' },
    sizes: [
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'access-door-elbow-90',
      title: 'ACCESS/DOOR ELBOW 90°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 5 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l_tr', label: 'L Tr', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '3"', d: '92.5', d_1: '82.6', l_tr: '43 Tr76X4', d1: '66.5', h: '96.0' },
        { nominal_size_inch: '4"', d: '120.0', d_1: '110.0', l_tr: '51.3 Tr104X4', d1: '90.4', h: '119.3' },
        { nominal_size_inch: '6"', d: null, d_1: null, l_tr: null, d1: null, h: null },
      ],
    },
  },
  // 11. ACCESS/DOOR TEE 87.5°
  {
    id: 'access-door-tee-87-5',
    code: undefined,
    name: 'ACCESS/DOOR TEE 87.5°',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/accessdoortee87.5.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/accessdoortee87.5.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/accessdoortee87.5.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'access-door-tee-87-5',
      title: 'ACCESS/DOOR TEE 87.5°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: null, l: null, l1: null, h: null },
        { nominal_size_inch: '2"', d: null, l: null, l1: null, h: null },
        { nominal_size_inch: '3"', d: null, l: null, l1: null, h: null },
        { nominal_size_inch: '4"', d: '110.0', l: '130.2', l1: '142.1', h: '250.3' },
        { nominal_size_inch: '6"', d: '160.0', l: '144.1', l1: '144.1', h: '288.2' },
        { nominal_size_inch: '8"', d: null, l: null, l1: null, h: null },
      ],
    },
  },
  // 12. FEMALE THREADED ELBOW
  {
    id: 'female-threaded-elbow',
    code: undefined,
    name: 'FEMALE THREADED ELBOW',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/femalethreadedelbow.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/femalethreadedelbow.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/femalethreadedelbow.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'female-threaded-elbow',
      title: 'FEMALE THREADED ELBOW',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'g', label: 'G', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', g: '1 1/2"', d: '42.9', l: '54.75' },
        { nominal_size_inch: '2"', g: null, d: null, l: null },
        { nominal_size_inch: '3"', g: null, d: null, l: null },
        { nominal_size_inch: '4"', g: null, d: null, l: null },
        { nominal_size_inch: '6"', g: null, d: null, l: null },
        { nominal_size_inch: '8"', g: null, d: null, l: null },
      ],
    },
  },
  // 13. INSPECTION PORT/ DOOR SOCKET
  {
    id: 'inspection-port-door-sooket',
    code: undefined,
    name: 'INSPECTION PORT/ DOOR SOCKET',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/inspectiondoorsocket.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/inspectiondoorsocket.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/inspectiondoorsocket.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'inspection-port-door-sooket',
      title: 'INSPECTION PORT/ DOOR SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: null, d_1: null, l: null, h: null },
        { nominal_size_inch: '2"', d: '62.0', d_1: '55.9', l: '29', h: '111.0' },
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40', h: '168.8' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48', h: '230.0' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58', h: '275.0' },
        { nominal_size_inch: '8"', d: '216.0', d_1: '200.0', l: '70', h: '335.0' },
      ],
    },
  },
  // 14. VENT COWL
  {
    id: 'vent-cowl',
    code: undefined,
    name: 'VENT COWL',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/ventcap.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/ventcap.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/ventcap.png' },
    sizes: [
      { sizeMm: '11/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'vent-cowl',
      title: 'VENT COWL',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm', colSpan: 2 },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '11/2"', d: null, l: null },
        { nominal_size_inch: '2"', d: '55.9', l: '49' },
        { nominal_size_inch: '3"', d: '82.6', l: '82' },
        { nominal_size_inch: '4"', d: '110.0', l: '99.9' },
        { nominal_size_inch: '6"', d: '160.0', l: '143' },
        { nominal_size_inch: '8"', d: null, l: null },
      ],
    },
  },
  // 15. FEMALE THREADED SOCKET
  {
    id: 'female-threaded-socket',
    code: undefined,
    name: 'FEMALE THREADED SOCKET',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/femalesocket.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/femalesocket.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/femalesocket.png' },
    sizes: [
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'female-threaded-socket',
      title: 'FEMALE THREADED SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'g', label: 'G', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: '42.9', g: '1/2"', h: '54' },
        { nominal_size_inch: '2"', d: null, g: null, h: null },
        { nominal_size_inch: '3"', d: null, g: null, h: null },
        { nominal_size_inch: '4"', d: null, g: null, h: null },
        { nominal_size_inch: '6"', d: null, g: null, h: null },
        { nominal_size_inch: '8"', d: null, g: null, h: null },
      ],
    },
  },
  // 16. PARAPET ROOF DRAIN
  {
    id: 'parapet-roof-drain',
    code: undefined,
    name: 'PARAPET ROOF DRAIN',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/parapet floordrain.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/parapet floordrain.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/parapet floordrain.png' },
    sizes: [
      { sizeMm: '4"' },
    ],
    table: {
      id: 'parapet-roof-drain',
      title: 'PARAPET ROOF DRAIN',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'h1', label: 'H1', groupLabel: 'products.tables.dimensions_mm', colSpan: 7 },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'b', label: 'B', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h2', label: 'H2', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '4"', h1: '117.0', d: '110.0', d_1: '99.5', l: '4.5', b: '167.5', h: '40.5', h2: '211.5' },
      ],
    },
  },
  // 17. ROOF DRAIN
  {
    id: 'roof-drain',
    code: undefined,
    name: 'ROOF DRAIN',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/roofdrain.png',
      colorVariants: { grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/roofdrain.png', olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/roofdrain.png' },
    sizes: [
      { sizeMm: '4"' },
    ],
    table: {
      id: 'roof-drain',
      title: 'ROOF DRAIN',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm', colSpan: 7 },
        { key: 'd2', label: 'd2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h1', label: 'H1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h2', label: 'H2', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '4"', d1: '63', d2: '110.0', d1_upper: '122.1', d2_upper: '164.9', l1: '45', l2: '60', h1: '179.2', h2: '111.6' },
      ],
    },
  },
  // 18. FLOOR DRAIN/TRAP TYPE - A
  {
    id: 'floor-drain-trap-type-a',
    code: undefined,
    name: 'FLOOR DRAIN/TRAP TYPE - A',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP TYPE - A.png',
    colorVariants: {
      grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP TYPE - A.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/FLOOR DRAINTRAP TYPE - A.png',
    },
    sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch_inch_inch',
    sizes: [
      { sizeMm: '4" X 3" X 2" X 12"' },
    ],
    table: {
      id: 'floor-drain-trap-type-a',
      title: 'FLOOR DRAIN/TRAP TYPE - A',
      columns: [
        { key: 'nominal_size_inch', label: 'Nominal Size (Inch x Inch x Inch x Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 6 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2', label: 'd2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd3x3', label: 'D3X3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '4" X 3" X 2" X 12"', d: '116.8', d_1: '110.0', d1: '82.6', d2: '55.9', d3x3: '42.9', h: '149', l: '80.5' },
      ],
    },
  },
  // 19. FLOOR DRAIN/TRAP TYPE - C
  {
    id: 'floor-drain-trap-type-c',
    code: undefined,
    name: 'FLOOR DRAIN/TRAP TYPE - C',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP TYPE - C.png',
    colorVariants: {
      grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP TYPE - C.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/FLOOR DRAINTRAP TYPE - C.png',
    },
    sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch_inch',
    sizes: [
      { sizeMm: '4" X 3" X 2"' },
    ],
    table: {
      id: 'floor-drain-trap-type-c',
      title: 'FLOOR DRAIN/TRAP TYPE - C',
      columns: [
        { key: 'nominal_size_inch', label: 'Nominal Size (Inch x Inch x Inch)' },
        { key: 'd', label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 5 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1x3', label: 'd1x3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '4" X 3" X 2"', d: '110', d_1: '82.6', d1x3: '55.9', h: '118', l: '51.5' },
      ],
    },
  },
  // 20. FLOOR DRAIN/TRAP COVER TYPE - A I
  {
    id: 'floor-drain-trap-cover-type-a-i',
    code: undefined,
    name: 'FLOOR DRAIN/TRAP COVER TYPE - A I',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP COVER TYPE - A I.png',
    colorVariants: {
      grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP COVER TYPE - A I.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/FLOOR DRAINTRAP COVER TYPE - A I.png',
    },
    sizeHeaderOverride: 'products.tables.nominal_size_mm_lxw',
    sizes: [
      { sizeMm: '150 X 150' },
    ],
    table: {
      id: 'floor-drain-trap-cover-type-a-i',
      title: 'FLOOR DRAIN/TRAP COVER TYPE - A I',
      columns: [
        { key: 'nominal_size_mm_lxw', label: 'Nominal Size (mm x mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_mm_lxw: '150 X 150', d: '110', d1: '99.5', h: '31.8' },
      ],
    },
  },
  // 21. FLOOR DRAIN/TRAP COVER TYPE - A II
  {
    id: 'floor-drain-trap-cover-type-a-ii',
    code: undefined,
    name: 'FLOOR DRAIN/TRAP COVER TYPE - A II',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP COVER TYPE - A II.png',
    colorVariants: {
      grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP COVER TYPE - A II.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/FLOOR DRAINTRAP COVER TYPE - A II.png',
    },
    sizeHeaderOverride: 'products.tables.nominal_size_mm_lxw',
    sizes: [
      { sizeMm: '150 X 150' },
    ],
    table: {
      id: 'floor-drain-trap-cover-type-a-ii',
      title: 'FLOOR DRAIN/TRAP COVER TYPE - A II',
      columns: [
        { key: 'nominal_size_mm_lxw', label: 'Nominal Size (mm x mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd1', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_mm_lxw: '150 X 150', d: '110', d1: '86', h: '31.8' },
      ],
    },
  },
  // 22. FLOOR DRAIN/TRAP COVER TYPE - B
  {
    id: 'floor-drain-trap-cover-type-b',
    code: undefined,
    name: 'FLOOR DRAIN/TRAP COVER TYPE - B',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP COVER TYPE - B.png',
    colorVariants: {
      grey: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/grey/FLOOR DRAINTRAP COVER TYPE - B.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC-DRAINAGE-FITTING-BS-EN-1329/olive/FLOOR DRAINTRAP COVER TYPE - B.png',
    },
    sizeHeaderOverride: 'products.tables.nominal_size_mm_lxw',
    sizes: [
      { sizeMm: '150 X 150' },
    ],
    table: {
      id: 'floor-drain-trap-cover-type-b',
      title: 'FLOOR DRAIN/TRAP COVER TYPE - B',
      columns: [
        { key: 'nominal_size_mm_lxw', label: 'Nominal Size (mm x mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_mm_lxw: '150 X 150', d: '110', d1: '105', h: '9' },
      ],
    },
  },
];


// ═══════════════════════════════════════════════════════════════════════════════
// BS EN 1401 FITTINGS (8 fittings from PDF JSON)
// Source: src/UPVC DRAINAGE FITTINGS BS EN 1401 - SUPERSEDED BS 4660 AND BS 5481.txt
// ═══════════════════════════════════════════════════════════════════════════════
export const bsEn1401Fittings: Fitting[] = [
  // 1. ELBOW 90°
  {
    id: 'elbow-90',
    code: undefined,
    name: 'ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/elbow90.png',
    sizes: [
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'elbow-90',
      title: 'ELBOW 90°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40.0' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48.0' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58.0' },
        { nominal_size_inch: '8"', d: '216.0', d_1: '200.0', l: '70.0' },
      ],
    },
  },
  // 2. ELBOW 45°
  {
    id: 'elbow-45',
    code: undefined,
    name: 'ELBOW 45°',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/elbow45.png',
    sizes: [
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'elbow-45',
      title: 'ELBOW 45°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40.0' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48.0' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58.0' },
        { nominal_size_inch: '8"', d: '216.0', d_1: '200.0', l: '70.0' },
      ],
    },
  },
  // 3. SOCKET/COUPLER
  {
    id: 'socket-coupler',
    code: undefined,
    name: 'SOCKET/COUPLER',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/socketcoupler.png',
    sizes: [
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'socket-coupler',
      title: 'SOCKET/COUPLER',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58' },
        { nominal_size_inch: '8"', d: '216.0', d_1: '200.0', l: '70' },
      ],
    },
  },
  // 4. REDUCER BUSH/SOCKET
  {
    id: 'reducer-bush-socket',
    code: undefined,
    name: 'REDUCER BUSH/SOCKET',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/reducerbush.png',
    sizeHeaderOverride: 'products.tables.hp_fit_nominal_size_inch_inch',
    sizes: [
      { sizeMm: '4" x 3"' },
      { sizeMm: '6" x 3"' },
      { sizeMm: '8" x 6"' },
    ],
    table: {
      id: 'reducer-bush-socket',
      title: 'REDUCER BUSH/SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'Nominal Size (Inch x Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h',   label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '4" x 3"', d: '110.0', d_1: '82.6', l: '40.0', h: '50.0' },
        { nominal_size_inch: '6" x 3"', d: '160.0', d_1: '110.0', l: '48.0', h: '60.0' },
        { nominal_size_inch: '8" x 6"', d: '200.0', d_1: '160.0', l: '58.0', h: '73.0' },
      ],
    },
  },
  // 5. ΤΕΕ 87.5°
  {
    id: 'tee-87-5',
    code: undefined,
    name: 'ΤΕΕ 87.5°',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/tee87.5.png',
    sizes: [
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'tee-87-5',
      title: 'ΤΕΕ 87.5°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 4 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l',   label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h',   label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '3"', d: '91.2', d_1: '82.6', l: '40.0', h: '170.0' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', l: '48.0', h: '219.0' },
        { nominal_size_inch: '6"', d: '173.6', d_1: '160.0', l: '58.0', h: '296.0' },
        { nominal_size_inch: '8"', d: '216.0', d_1: '200.0', l: '70.0', h: '355.0' },
      ],
    },
  },
  // 6. Y - 45°/SKEW TEE
  {
    id: 'y-45-skew-tee',
    code: undefined,
    name: 'Y - 45°/SKEW TEE',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/y45skew.png',
    sizes: [
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'y-45-skew-tee',
      title: 'Y - 45°/SKEW TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_l', label: 'd L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h',   label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '3"', d: '91.2', d_l: '82.6 40.0', h: '195.0' },
        { nominal_size_inch: '4"', d: '120.6', d_l: '110.0 48.0', h: '259.0' },
        { nominal_size_inch: '6"', d: '173.6', d_l: '160.0 58.0', h: '257.0' },
        { nominal_size_inch: '8"', d: null, d_l: null, h: null },
      ],
    },
  },
  // 7. ACCESS CAP/CLEAN OUT
  {
    id: 'access-cap-clean-out',
    code: undefined,
    name: 'ACCESS CAP/CLEAN OUT',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/accesscap.png',
    sizes: [
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'access-cap-clean-out',
      title: 'ACCESS CAP/CLEAN OUT',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'd', groupLabel: 'products.tables.dimensions_mm', colSpan: 2 },
        { key: 'h',   label: 'H', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '3"', d: '82.6', h: '70' },
        { nominal_size_inch: '4"', d: '110.0', h: '76' },
        { nominal_size_inch: '6"', d: '160.0', h: '100' },
        { nominal_size_inch: '8"', d: '200.0', h: null },
      ],
    },
  },
  // 8. ACCESS/DOOR ELBOW 90°
  {
    id: 'access-door-elbow-90',
    code: undefined,
    name: 'ACCESS/DOOR ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/accesselbow90.png',
    sizes: [
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
      { sizeMm: '8"' },
    ],
    table: {
      id: 'access-door-elbow-90',
      title: 'ACCESS/DOOR ELBOW 90°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd',   label: 'D', groupLabel: 'products.tables.dimensions_mm', colSpan: 3 },
        { key: 'd_1', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_h_l_tr', label: 'D1 H L Tr', groupLabel: 'products.tables.dimensions_mm' },
      ],
      rows: [
        { nominal_size_inch: '3"', d: '92.5', d_1: '82.6', d1_h_l_tr: '43.0 Tr76X4 66.5 96.0' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', d1_h_l_tr: '51.3 Tr104X4 90.4 119.3' },
        { nominal_size_inch: '6"', d: null, d_1: null, d1_h_l_tr: null },
        { nominal_size_inch: '8"', d: null, d_1: null, d1_h_l_tr: null },
      ],
    },
  },
  // 9. GULLY TRAP A
  {
    id: 'gully-trap-a',
    code: undefined,
    name: 'GULLY TRAP A',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/gullytrapa.jpeg',
    sizes: [
      { sizeMm: 'Customisable' },
    ],
    table: {
      id: 'gully-trap-a',
      title: 'GULLY TRAP A',
      columns: [
        { key: 'size', label: 'Size / Dimensions' },
        { key: 'action', label: 'Action' },
      ],
      rows: [
        { size: 'Customisable', action: 'Contact Us for Specifications →  /contact-us' },
      ],
    },
  },
  // 10. GULLY TRAP B
  {
    id: 'gully-trap-b',
    code: undefined,
    name: 'GULLY TRAP B',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/gullytrapb.jpeg',
    sizes: [
      { sizeMm: 'Customisable' },
    ],
    table: {
      id: 'gully-trap-b',
      title: 'GULLY TRAP B',
      columns: [
        { key: 'size', label: 'Size / Dimensions' },
        { key: 'action', label: 'Action' },
      ],
      rows: [
        { size: 'Customisable', action: 'Contact Us for Specifications →  /contact-us' },
      ],
    },
  },
  // 11. HOPPER TRAP
  {
    id: 'hopper-trap',
    code: undefined,
    name: 'HOPPER TRAP',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/hopper trap.jpeg',
    sizes: [
      { sizeMm: 'Customisable' },
    ],
    table: {
      id: 'hopper-trap',
      title: 'HOPPER TRAP',
      columns: [
        { key: 'size', label: 'Size / Dimensions' },
        { key: 'action', label: 'Action' },
      ],
      rows: [
        { size: 'Customisable', action: 'Contact Us for Specifications →  /contact-us' },
      ],
    },
  },
  // 12. P TRAP
  {
    id: 'p-trap',
    code: undefined,
    name: 'P TRAP',
    family: 'moulded',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/UPVC Drainage Fittings BS EN 1401/orange/p trap.jpeg',
    sizes: [
      { sizeMm: 'Customisable' },
    ],
    table: {
      id: 'p-trap',
      title: 'P TRAP',
      columns: [
        { key: 'size', label: 'Size / Dimensions' },
        { key: 'action', label: 'Action' },
      ],
      rows: [
        { size: 'Customisable', action: 'Contact Us for Specifications →  /contact-us' },
      ],
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// UPVC DRAINAGE BS EN 1329-1:2014
// Above-ground soil and waste discharge systems (Light Grey / Olive)
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcDrainageBsEn1329: ProductDetailConfig = {
  slug: 'upvc-drainage-bs-en-1329',
  categorySlug: 'upvc-drainage',

  title: 'UPVC Drainage Fittings BS EN 1329-1:2014 (Supersedes BS 5255 & BS 4514)',
  titleAr: 'توصيلات الصرف UPVC بمعيار BS EN 1329-1:2014 (يحل محل BS 5255 و BS 4514)',

  shortDescription: 'PVC-U drainage fittings for above-ground soil and waste discharge systems. Light grey/olive colour for internal and external installations.',
  shortDescriptionAr: 'توصيلات صرف PVC-U لأنظمة تصريف التربة والنفايات الأرضية. لون رمادي فاتح/زيتوني للتركيبات الداخلية والخارجية.',

  overview: `Crown Plastic Pipes / Fittings manufactures a comprehensive range of PVC-U drainage fittings complying with BS EN 1329-1:2014, which supersedes the legacy British standards BS 5255 and BS 4514. These fittings are designed for above-ground soil and waste discharge applications in residential, commercial, and industrial buildings. The product range includes elbows, tees, couplers, access fittings, floor drains, roof drains, and specialized components for complete drainage system solutions.`,
  overviewAr: `تصنع كراون للأنابيب والوصلات البلاستيكية مجموعة شاملة من توصيلات الصرف PVC-U المطابقة لمعيار BS EN 1329-1:2014، الذي يحل محل المعايير البريطانية القديمة BS 5255 و BS 4514. هذه التوصيلات مصممة لتطبيقات تصريف التربة والنفايات الأرضية في المباني السكنية والتجارية والصناعية.`,

  // TODO: Extract specific features from PDF when available
  features: [
    'Conforms to BS EN 1329-1:2014 standard',
    'Supersedes BS 5255 & BS 4514',
    'Ring-seal push-fit joints for quick assembly',
    'Sound dampening properties',
    'Complete system compatibility',
    'Light grey/olive colour for identification',
    'ISO 9001:2015 certified production',
    'Comprehensive range of 24+ fitting types',
  ],
  featuresAr: [
    'مطابق لمعيار BS EN 1329-1:2014',
    'يحل محل BS 5255 و BS 4514',
    'وصلات بالحلقة المانعة للتجميع السريع',
    'خصائص عزل صوتي',
    'توافق تام مع النظام',
    'لون رمادي فاتح/زيتوني للتعرف',
    'إنتاج معتمد بمعيار ISO 9001:2015',
    'مجموعة شاملة من أكثر من 24 نوع توصيلة',
  ],

  // TODO: Add specific applications when available
  applications: [
    'Internal soil and waste discharge systems',
    'External above-ground drainage',
    'Residential bathroom and kitchen drainage',
    'Commercial building waste systems',
    'Industrial facility drainage',
    'Roof drainage connections',
    'Floor drain installations',
    'Balcony and terrace drainage',
  ],
  applicationsAr: [
    'أنظمة تصريف التربة والنفايات الداخلية',
    'الصرف الأرضي الخارجي',
    'صرف الحمامات والمطابخ السكنية',
    'أنظمة نفايات المباني التجارية',
    'صرف المرافق الصناعية',
    'توصيلات صرف الأسطح',
    'تركيبات مصارف الأرضيات',
    'صرف الشرفات والتراسات',
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // Pipes Section (Note: This catalogue focuses on fittings)
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'bs-en-1329-pipes-note',
      title: 'Pipes Information',
      columns: [
        { key: 'note', label: 'Note', align: 'left' },
      ],
      rows: [
        { note: 'This catalogue focuses on drainage fittings. For pipe specifications, please refer to the separate UPVC Drainage Pipes catalogue or contact our technical team.' },
      ],
    },
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // Fittings Section (24 fittings populated from PDF JSON)
  // ───────────────────────────────────────────────────────────────────────────
  fittings: bsEn1329Fittings,

  downloads: [
    { label: 'BS EN 1329-1:2014 Drainage Fittings Catalogue (PDF)', href: '/pdfs/UPVC%20DRAINAGE%20FITTING%20BS%20EN%201329-1%2C2014%20-%20SUPERSEDED%20BS%205255%20AND%20BS4514.pdf' },
  ],

  dosDonts: {
    dos: [
      'Use ring-seal joints with proper lubrication',
      'Ensure correct pipe gradient for proper drainage',
      'Support pipes at manufacturer-recommended intervals',
      'Use correct fittings for internal vs external applications',
      'Provide adequate access points for maintenance',
    ],
    donts: [
      'Do not use for pressure applications',
      'Do not expose to temperatures above 60°C continuously',
      'Do not use incompatible lubricants on ring seals',
      'Do not mix with other drainage systems without adapters',
      'Do not install without proper fall/gradient',
    ],
  },
  dosDontsAr: {
    dos: [
      'استخدم وصلات الحلقة المانعة مع تشحيم مناسب',
      'تأكد من الميل الصحيح للأنابيب لصرف سليم',
      'ادعم الأنابيب على فترات موصى بها من الشركة المصنعة',
      'استخدم التوصيلات الصحيحة للتطبيقات الداخلية مقابل الخارجية',
      'وفّر نقاط وصول كافية للصيانة',
    ],
    donts: [
      'لا تستخدم لتطبيقات الضغط',
      'لا تعرّض لدرجات حرارة تتجاوز 60 درجة مئوية بشكل مستمر',
      'لا تستخدم مواد تشحيم غير متوافقة على الحلقات المانعة',
      'لا تخلط مع أنظمة صرف أخرى بدون محولات',
      'لا تركّب بدون ميل/انحدار مناسب',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// UPVC DRAINAGE BS EN 1401
// Underground drainage and sewerage systems (Orange)
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcDrainageBsEn1401: ProductDetailConfig = {
  slug: 'upvc-drainage-bs-en-1401',
  categorySlug: 'upvc-drainage',

  title: 'UPVC Drainage Fittings BS EN 1401 (Supersedes BS 4660 & BS 5481)',
  titleAr: 'توصيلات الصرف UPVC بمعيار BS EN 1401 (يحل محل BS 4660 و BS 5481)',

  shortDescription: 'Heavy-duty PVC-U drainage fittings for underground sewerage and stormwater systems. Orange colour for below-ground identification.',
  shortDescriptionAr: 'توصيلات صرف PVC-U للخدمة الشاقة لأنظمة الصرف الصحي ومياه الأمطار تحت الأرض. لون برتقالي للتعرف تحت الأرض.',

  overview: `Crown Plastic Pipes / Fittings manufactures a complete range of PVC-U drainage fittings conforming to BS EN 1401, which supersedes the British standards BS 4660 and BS 5481. These heavy-duty fittings are specifically designed for underground sewerage and stormwater drainage applications. The orange colour provides easy identification for below-ground installations, distinguishing them from above-ground systems.`,
  overviewAr: `تصنع كراون للأنابيب والوصلات البلاستيكية مجموعة كاملة من توصيلات الصرف PVC-U المطابقة لمعيار BS EN 1401، الذي يحل محل المعايير البريطانية BS 4660 و BS 5481. هذه التوصيلات للخدمة الشاقة مصممة خصيصاً لتطبيقات الصرف الصحي ومياه الأمطار تحت الأرض.`,

  // TODO: Extract specific features from PDF when available
  features: [
    'Conforms to BS EN 1401 standard',
    'Supersedes BS 4660 & BS 5481',
    'High impact resistance for underground installation',
    'Root resistant construction',
    'Long-term durability (50+ years expected life)',
    'Orange colour for underground identification',
    'ISO 9001:2015 certified production',
    'Ring-seal joints for watertight connections',
  ],
  featuresAr: [
    'مطابق لمعيار BS EN 1401',
    'يحل محل BS 4660 و BS 5481',
    'مقاومة صدم عالية للتركيب تحت الأرض',
    'بناء مقاوم للجذور',
    'متانة طويلة المدى (عمر متوقع 50+ سنة)',
    'لون برتقالي للتعرف تحت الأرض',
    'إنتاج معتمد بمعيار ISO 9001:2015',
    'وصلات بالحلقة المانعة للتوصيلات المانعة للماء',
  ],

  // TODO: Add specific applications when available
  applications: [
    'Underground sewerage systems',
    'Stormwater drainage networks',
    'Building drainage connections',
    'Property sewer lines',
    'Foul water drainage',
    'Surface water drainage',
    'Highway drainage systems',
    'Industrial effluent drainage',
  ],
  applicationsAr: [
    'أنظمة الصرف الصحي تحت الأرض',
    'شبكات صرف مياه الأمطار',
    'توصيلات صرف المباني',
    'خطوط صرف الممتلكات',
    'صرف المياه الملوثة',
    'صرف المياه السطحية',
    'أنظمة صرف الطرق السريعة',
    'صرف المخلفات الصناعية',
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // Pipes Section (Note: This catalogue focuses on fittings)
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'bs-en-1401-pipes-note',
      title: 'Pipes Information',
      columns: [
        { key: 'note', label: 'Note', align: 'left' },
      ],
      rows: [
        { note: 'This catalogue focuses on drainage fittings. For underground pipe specifications, please refer to the separate UPVC Underground Drainage Pipes catalogue or contact our technical team.' },
      ],
    },
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // Fittings Section (Placeholder - to be populated from PDF JSON)
  // ───────────────────────────────────────────────────────────────────────────
  fittings: bsEn1401Fittings,

  downloads: [
    { label: 'BS EN 1401 Drainage Fittings Catalogue (PDF)', href: '/pdfs/UPVC%20DRAINAGE%20FITTINGS%20BS%20EN%201401%20-%20SUPERSEDED%20BS%204660%20AND%20BS%205481.pdf' },
  ],

  dosDonts: {
    dos: [
      'Ensure proper bedding and backfill for underground pipes',
      'Use ring-seal joints with correct lubricant',
      'Follow minimum cover depth requirements',
      'Compact backfill in layers to avoid pipe damage',
      'Conduct water testing before backfilling',
    ],
    donts: [
      'Do not use for pressure applications',
      'Do not install without proper pipe bedding',
      'Do not backfill with large stones or debris',
      'Do not connect to pressure systems',
      'Do not expose orange pipes above ground permanently',
    ],
  },
  dosDontsAr: {
    dos: [
      'تأكد من الفرشة والردم المناسبين للأنابيب تحت الأرض',
      'استخدم وصلات الحلقة المانعة مع المادة المزلقة الصحيحة',
      'اتبع متطلبات الحد الأدنى لعمق الغطاء',
      'رصّ الردم على طبقات لتجنب إتلاف الأنابيب',
      'أجرِ اختبار المياه قبل الردم',
    ],
    donts: [
      'لا تستخدم لتطبيقات الضغط',
      'لا تركّب بدون فرشة أنابيب مناسبة',
      'لا تردم بالحجارة الكبيرة أو الأنقاض',
      'لا توصل بأنظمة الضغط',
      'لا تعرّض الأنابيب البرتقالية فوق الأرض بشكل دائم',
    ],
  },
};



// ═══════════════════════════════════════════════════════════════════════════════
// PUSHFIT FITTINGS
// ═══════════════════════════════════════════════════════════════════════════════
export const pushfitFittings: Fitting[] = [
  {
    id: 'pushfit-45-elbow-with-two-rubber-rings',
    code: undefined,
    name: '45° ELBOW WITH TWO RUBBER RINGS',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/45elbow.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/45elbow.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/45elbow (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/45elbow (2).png'
    },
    sizes: [
      { sizeMm: '110' },
      { sizeMm: '160' }
    ],
    table: {
      id: 'pushfit-45-elbow-with-two-rubber-rings',
      title: '45° ELBOW WITH TWO RUBBER RINGS',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '110', d_upper: '116.8', d: '111', l: '51', h: '88' },
        { nominal_size: '160', d_upper: '169.8', d: '162', l: '66.6', h: '119.6' }
      ]
    }
  },
  {
    id: 'pushfit-90-elbow-m-f',
    code: undefined,
    name: '90° ELBOW M/F',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/90elbowmf.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/90elbowmf.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/90elbowmf (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/90elbowmf (2).png'
    },
    sizes: [
      { sizeMm: '40mm' },
      { sizeMm: '50mm' },
      { sizeMm: '75mm' },
      { sizeMm: '110mm' },
      { sizeMm: '160mm' },
      { sizeMm: '200mm' },
      { sizeMm: '250mm' }
    ],
    table: {
      id: 'pushfit-90-elbow-m-f',
      title: '90° ELBOW M/F',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '40mm', d: '40.5', d1: '36', d_upper: '44.5', d1_upper: '40', d2_upper: '54', l: '17.43', l1: '36.28', l2: '62.87', l3: '60' },
        { nominal_size: '50mm', d: '50.5', d1: '44', d_upper: '56.5', d1_upper: '50', d2_upper: '66', l: '18.4', l1: '36.5', l2: '72.19', l3: '66.93' },
        { nominal_size: '75mm', d: '76', d1: '69', d_upper: '82', d1_upper: '75', d2_upper: '92', l: '18.9', l1: '44', l2: '92.53', l3: '85.9' },
        { nominal_size: '110mm', d: '111', d1: '103', d_upper: '118', d1_upper: '110', d2_upper: '128.2', l: '24', l1: '71.78', l2: '144.4', l3: '136.56' },
        { nominal_size: '160mm', d: '161', d1: '152.8', d_upper: '168.2', d1_upper: '160', d2_upper: '180.8', l: '26.48', l1: '66', l2: '157.22', l3: '159.59' },
        { nominal_size: '200mm', d: '201.6', d1: '191.6', d_upper: '210', d1_upper: '200', d2_upper: '225.4', l: '33.16', l1: '82', l2: '197.93', l3: '200.64' },
        { nominal_size: '250mm', d: '252.7', d1: '237.2', d_upper: '264.9', d1_upper: '250', d2_upper: '286.7', l: '49.3', l1: '103.9', l2: '256.6', l3: '249.7' }
      ]
    }
  },
  {
    id: 'pushfit-reducing-skew-tee-m-f',
    code: undefined,
    name: 'REDUCING SKEW TEE M/F',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Reducing Skew Tee Malefemale.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Reducing Skew Tee Malefemale.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/Reducing Skew Tee Malefemale (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/Reducing Skew Tee Malefemale (2).png'
    },
    sizes: [
      { sizeMm: '75 X 50' },
      { sizeMm: '110 X 50' },
      { sizeMm: '110 X 75' },
      { sizeMm: '160 X 110' },
      { sizeMm: '110 X 40' },
      { sizeMm: '200 X 110' },
      { sizeMm: '200 X 160' },
      { sizeMm: '250 X 110' },
      { sizeMm: '250 X 160' },
      { sizeMm: '250 X 200' }
    ],
    table: {
      id: 'pushfit-reducing-skew-tee-m-f',
      title: 'REDUCING SKEW TEE M/F',
      columns: [
        { key: 'nominal_size', label: 'Nominal Size (mm x mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2', label: 'd2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd3_upper', label: 'D3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd4_upper', label: 'D4', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l5', label: 'L5', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l6', label: 'L6', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '75 X 50', d: '76', d1: '69', d2: '50.5', d_upper: '82', d1_upper: '75', d2_upper: '56.5', d3_upper: '92', d4_upper: '66', l: '18.9', l1: '44', l2: '125.37', l3: '18.4', l4: '43', l5: '123.15', l6: '174' },
        { nominal_size: '110 X 50', d: '111', d1: '103.6', d2: '50.5', d_upper: '117.4', d1_upper: '110', d2_upper: '56.5', d3_upper: '127.6', d4_upper: '66', l: '21.09', l1: '51', l2: '150.1', l3: '18.4', l4: '43', l5: '148.19', l6: '194' },
        { nominal_size: '110 X 75', d: '111', d1: '103.6', d2: '76', d_upper: '117.4', d1_upper: '110', d2_upper: '82', d3_upper: '127.6', d4_upper: '92', l: '21.09', l1: '51', l2: '168.17', l3: '18.9', l4: '44', l5: '168.44', l6: '230' },
        { nominal_size: '160 X 110', d: '161', d1: '152.8', d2: '111', d_upper: '168.2', d1_upper: '160', d2_upper: '117.4', d3_upper: '180.8', d4_upper: '127.6', l: '26.48', l1: '66', l2: '233.62', l3: '21.09', l4: '51', l5: '229.09', l6: '315' },
        { nominal_size: '110 X 40', d: '111', d1: '103.6', d2: '40.5', d_upper: '117.4', d1_upper: '110', d2_upper: '44.5', d3_upper: '127.6', d4_upper: '54', l: '21.27', l1: '51', l2: '141.62', l3: '17.43', l4: '36', l5: '141.44', l6: '178' },
        { nominal_size: '200 X 110', d: '191.6', d1: '201.6', d2: '111.4', d_upper: '200', d1_upper: '210', d2_upper: '117.8', d3_upper: '225.4', d4_upper: '127.6', l: '33.33', l1: '82', l2: '280', l3: '362', l4: '21.09', l5: '51.45', l6: '270' },
        { nominal_size: '200 X 160', d: '191.6', d1: '201.6', d2: '161.4', d_upper: '200', d1_upper: '210', d2_upper: '168.6', d3_upper: '225.4', d4_upper: '180.8', l: '33.33', l1: '82', l2: '320', l3: '438.5', l4: '26.48', l5: '66', l6: '310' },
        { nominal_size: '250 X 110', d: '252.7', d1: '237.2', d2: '111.9', d_upper: '264.9', d1_upper: '250', d2_upper: '118.5', d3_upper: '286.7', d4_upper: '127.8', l: '49.3', l1: '103.9', l2: '333.7', l3: '21.2', l4: '51.5', l5: '296', l6: '417' },
        { nominal_size: '250 X 160', d: '252.7', d1: '237.2', d2: '162', d_upper: '264.9', d1_upper: '250', d2_upper: '169.8', d3_upper: '286.7', d4_upper: '127.8', l: '49.3', l1: '103.9', l2: '369', l3: '27.1', l4: '66.6', l5: '339.2', l6: '488' },
        { nominal_size: '250 X 200', d: '252.7', d1: '237.2', d2: '202.3', d_upper: '264.9', d1_upper: '250', d2_upper: '211.8', d3_upper: '286.7', d4_upper: '127.8', l: '49.3', l1: '103.9', l2: '397.3', l3: '34.1', l4: '82.7', l5: '381.8', l6: '544' }
      ]
    }
  },
  {
    id: 'pushfit-skew-tee-m-f',
    code: undefined,
    name: 'SKEW TEE M/F',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/skew tee mf (2).png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/skew tee mf (2).png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/skew tee mf (3).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/skew tee mf (1).png'
    },
    sizes: [
      { sizeMm: '50 X 50' },
      { sizeMm: '75 X 75' },
      { sizeMm: '110 X 110' },
      { sizeMm: '160 X 160' },
      { sizeMm: '200' },
      { sizeMm: '250' }
    ],
    table: {
      id: 'pushfit-skew-tee-m-f',
      title: 'SKEW TEE M/F',
      columns: [
        { key: 'nominal_size', label: 'Nominal Size (mm x mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '50 X 50', d: '50.5', d1: '44', d_upper: '56.5', d1_upper: '50', d2_upper: '66', l: '18.4', l1: '36.5', l2: '105.12', l3: '105.12', l4: '159' },
        { nominal_size: '75 X 75', d: '76', d1: '69', d_upper: '82', d1_upper: '75', d2_upper: '92', l: '18.9', l1: '44', l2: '143.4', l3: '143.4', l4: '209' },
        { nominal_size: '110 X 110', d: '111', d1: '103', d_upper: '118', d1_upper: '110', d2_upper: '128.2', l: '24', l1: '72.5', l2: '215.44', l3: '215.44', l4: '318.5' },
        { nominal_size: '160 X 160', d: '161', d1: '152.8', d_upper: '168.2', d1_upper: '160', d2_upper: '180.8', l: '26.48', l1: '66', l2: '269.54', l3: '269.54', l4: '386' },
        { nominal_size: '200', d: '201', d1: '191.6', d_upper: '210', d1_upper: '200', d2_upper: '225.4', l: '33.16', l1: '82', l2: '342.01', l3: '342.01', l4: '488.5' },
        { nominal_size: '250', d: '252.7', d1: '237.2', d_upper: '264.9', d1_upper: '250', d2_upper: '286.7', l: '49.3', l1: '103.9', l2: '432', l3: '432', l4: '614' }
      ]
    }
  },
  {
    id: 'pushfit-tee-m-f-with-gasket',
    code: undefined,
    name: 'TEE M/F WITH GASKET',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/tee mf with gasket.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/tee mf with gasket.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/tee mf with gasket (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/tee mf with gasket (2).png'
    },
    sizes: [
      { sizeMm: '40 X 40' },
      { sizeMm: '50 X 50' },
      { sizeMm: '75 X 75' },
      { sizeMm: '110 X 110' },
      { sizeMm: '160 X 160' },
      { sizeMm: '200 X 200' },
      { sizeMm: '250 X 250' }
    ],
    table: {
      id: 'pushfit-tee-m-f-with-gasket',
      title: 'TEE M/F WITH GASKET',
      columns: [
        { key: 'nominal_size', label: 'Nominal Size (mm x mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '40 X 40', d: '41.5', d1: '36', d_upper: '45.5', d1_upper: '40', d2_upper: '54', l: '17.4', l1: '36', l2: '65', l3: '65', l4: '125' },
        { nominal_size: '50 X 50', d: '50.5', d1: '46', d_upper: '54.5', d1_upper: '50', d2_upper: '64', l: '17.5', l1: '45.7', l2: '79', l3: '87.8', l4: '159' },
        { nominal_size: '75 X 75', d: '76', d1: '69', d_upper: '82', d1_upper: '75', d2_upper: '92', l: '18.9', l1: '44', l2: '95.8', l3: '95.8', l4: '182' },
        { nominal_size: '110 X 110', d: '111', d1: '103', d_upper: '118', d1_upper: '110', d2_upper: '128.2', l: '24', l1: '72.5', l2: '148.96', l3: '142.26', l4: '283' },
        { nominal_size: '160 X 160', d: '161', d1: '152.8', d_upper: '168.2', d1_upper: '160', d2_upper: '180.8', l: '26.48', l1: '66', l2: '164.37', l3: '164.37', l4: '324' },
        { nominal_size: '200 X 200', d: '201.6', d1: '191.6', d_upper: '210', d1_upper: '200', d2_upper: '225.4', l: '33.16', l1: '82', l2: '203', l3: '205.5', l4: '406' },
        { nominal_size: '250 X 250', d: '252.7', d1: '244', d_upper: '264.9', d1_upper: '250', d2_upper: '286.7', l: '49.3', l1: '103.9', l2: '261.5', l3: '261.5', l4: '511.5' }
      ]
    }
  },
  {
    id: 'pushfit-reducing-coupler',
    code: undefined,
    name: 'REDUCING COUPLER',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/reducingcoupler.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/reducingcoupler.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/reducingcoupler (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/reducingcoupler (2).png'
    },
    sizes: [
      { sizeMm: '75 X 50' },
      { sizeMm: '110 X 50' },
      { sizeMm: '110 X 75' },
      { sizeMm: '160 X 110' },
      { sizeMm: '200 X 160' },
      { sizeMm: '250 X 200' }
    ],
    table: {
      id: 'pushfit-reducing-coupler',
      title: 'REDUCING COUPLER',
      columns: [
        { key: 'nominal_size', label: 'Nominal Size (mm x mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '75 X 50', d: '50.5', d1: '69', d_upper: '56.5', d1_upper: '75', d2_upper: '66', l: '18.4', l1: '36.5', l2: '50', l3: '12.5', h: '116' },
        { nominal_size: '110 X 50', d: '50.5', d1: '103.6', d_upper: '56.5', d1_upper: '110', d2_upper: '66', l: '18.4', l1: '36.5', l2: '63', l3: '30', h: '132' },
        { nominal_size: '110 X 75', d: '76', d1: '103.6', d_upper: '82', d1_upper: '110', d2_upper: '92', l: '18.9', l1: '44', l2: '63', l3: '17.5', h: '145' },
        { nominal_size: '160 X 110', d: '111', d1: '152.8', d_upper: '117.4', d1_upper: '160', d2_upper: '127.6', l: '21.09', l1: '51', l2: '83', l3: '25', h: '181' },
        { nominal_size: '200 X 160', d: '161.4', d1: '191.6', d_upper: '168.6', d1_upper: '200', d2_upper: '180.8', l: '26.7', l1: '66', l2: '105.2', l3: '19.7', h: '224' },
        { nominal_size: '250 X 200', d: '202.3', d1: '237.2', d_upper: '211.8', d1_upper: '250', d2_upper: '227.2', l: '33.9', l1: '82.8', l2: '130', l3: '25', h: '265.8' }
      ]
    }
  },
  {
    id: 'pushfit-coupling',
    code: undefined,
    name: 'COUPLING',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/coupling.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/coupling.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/coupling (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/coupling (2).png'
    },
    sizes: [
      { sizeMm: '50mm' },
      { sizeMm: '75mm' },
      { sizeMm: '110mm' },
      { sizeMm: '160mm' },
      { sizeMm: '200mm' },
      { sizeMm: '250mm' }
    ],
    table: {
      id: 'pushfit-coupling',
      title: 'COUPLING',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '50mm', d: '50.5', d_upper: '56.5', d1_upper: '66', l: '18.4', l1: '43', l2: '90' },
        { nominal_size: '75mm', d: '76', d_upper: '82', d1_upper: '92', l: '18.9', l1: '50', l2: '104' },
        { nominal_size: '110mm', d: '111', d_upper: '118', d1_upper: '128.2', l: '24', l1: '78.3', l2: '160.6' },
        { nominal_size: '160mm', d: '161', d_upper: '168.2', d1_upper: '180.8', l: '26.48', l1: '83', l2: '172' },
        { nominal_size: '200mm', d: '201.6', d_upper: '210', d1_upper: '225.4', l: '33.16', l1: '100', l2: '208' },
        { nominal_size: '250mm', d: '252.7', d_upper: '264.9', d1_upper: '286.7', l: '49.3', l1: '130.1', l2: '270.2' }
      ]
    }
  },
  {
    id: 'pushfit-30-sweep-with-single-rubber-sockets',
    code: undefined,
    name: '30° SWEEP WITH SINGLE RUBBER SOCKETS',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/30sweepwithsinglerubbersockets.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/30sweepwithsinglerubbersockets.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/30sweepwithsinglerubbersockets (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/30sweepwithsinglerubbersockets (2).png'
    },
    sizes: [
      { sizeMm: '110' }
    ],
    table: {
      id: 'pushfit-30-sweep-with-single-rubber-sockets',
      title: '30° SWEEP WITH SINGLE RUBBER SOCKETS',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '110', d2_upper: '128.2', d_upper: '118', d: '111', d1_upper: '110', d1: '103', l1: '24', l2: '72.51', l3: '107.03', l4: '92.83' }
      ]
    }
  },
  {
    id: 'pushfit-90-sweep-with-double-socket-rings',
    code: undefined,
    name: '90° SWEEP WITH DOUBLE SOCKET RINGS',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/90sweepwithdoublesocketrings.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/90sweepwithdoublesocketrings.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/90sweepwithdoublesocketrings (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/90sweepwithdoublesocketrings (2).png'
    },
    sizes: [
      { sizeMm: '110' },
      { sizeMm: '160' }
    ],
    table: {
      id: 'pushfit-90-sweep-with-double-socket-rings',
      title: '90° SWEEP WITH DOUBLE SOCKET RINGS',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '110', d1_upper: '128.2', d_upper: '118', d: '111', l1: '24', l2: '58', l3: '180.94', l4: '150.74' },
        { nominal_size: '160', d1_upper: '182.8', d_upper: '169.8', d: '162', l1: '27.3', l2: '66.6', l3: '163', l4: '163' }
      ]
    }
  },
  {
    id: 'pushfit-90-sweep-with-single-socket-rings',
    code: undefined,
    name: '90° SWEEP WITH SINGLE SOCKET RINGS',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/90sweepwithsinglesocketrings.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/90sweepwithsinglesocketrings.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/90sweepwithsinglesocketrings (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/90sweepwithsinglesocketrings (2).png'
    },
    sizes: [
      { sizeMm: '110' }
    ],
    table: {
      id: 'pushfit-90-sweep-with-single-socket-rings',
      title: '90° SWEEP WITH SINGLE SOCKET RINGS',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '110', d2_upper: '128.2', d_upper: '118', d: '111', d1_upper: '110', d1: '103', l1: '24', l2: '58', l3: '194.93', l4: '213' }
      ]
    }
  },
  {
    id: 'pushfit-reducing-tee-m-f',
    code: undefined,
    name: 'REDUCING TEE M/F',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/reducingteemf.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/reducingteemf.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/reducingteemf (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/reducingteemf (2).png'
    },
    sizes: [
      { sizeMm: '75 X 50' },
      { sizeMm: '110 X 40' },
      { sizeMm: '110 X 50' },
      { sizeMm: '110 X 75' },
      { sizeMm: '160 X 110' },
      { sizeMm: '200 X 110' },
      { sizeMm: '200 X 160' },
      { sizeMm: '250 X 110' },
      { sizeMm: '250 X 160' },
      { sizeMm: '250 X 200' }
    ],
    table: {
      id: 'pushfit-reducing-tee-m-f',
      title: 'REDUCING TEE M/F',
      columns: [
        { key: 'nominal_size', label: 'Nominal Size (mm x mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2', label: 'd2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd3_upper', label: 'D3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd4_upper', label: 'D4', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l5', label: 'L5', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l6', label: 'L6', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '75 X 50', d: '76', d1: '69', d2: '50.5', d_upper: '82', d1_upper: '75', d2_upper: '56.5', d3_upper: '92', d4_upper: '66', l: '18.9', l1: '44', l2: '83.29', l3: '18.4', l4: '43', l5: '86.88', l6: '157' },
        { nominal_size: '110 X 40', d: '111', d1: '103.6', d2: '40.5', d_upper: '117.4', d1_upper: '110', d2_upper: '44.5', d3_upper: '127.6', d4_upper: '54', l: '21.09', l1: '51', l2: '81.23', l3: '17.43', l4: '36.28', l5: '100', l6: '168' },
        { nominal_size: '110 X 50', d: '111', d1: '103.6', d2: '50.5', d_upper: '117.4', d1_upper: '110', d2_upper: '56.5', d3_upper: '127.6', d4_upper: '66', l: '21.09', l1: '51', l2: '91.82', l3: '18.4', l4: '43', l5: '104.4', l6: '178' },
        { nominal_size: '110 X 75', d: '111', d1: '103.6', d2: '76', d_upper: '117.4', d1_upper: '110', d2_upper: '82', d3_upper: '127.6', d4_upper: '92', l: '21.09', l1: '51', l2: '104.33', l3: '18.9', l4: '44', l5: '113.32', l6: '203' },
        { nominal_size: '160 X 110', d: '161', d1: '152.8', d2: '111', d_upper: '168.2', d1_upper: '160', d2_upper: '117.4', d3_upper: '180.8', d4_upper: '127.6', l: '26.48', l1: '66', l2: '139.35', l3: '21.09', l4: '51', l5: '146.83', l6: '274' },
        { nominal_size: '200 X 110', d: '191.6', d1: '201.6', d2: '111.4', d_upper: '200', d1_upper: '210', d2_upper: '117.8', d3_upper: '225.4', d4_upper: '127.6', l: '33.33', l1: '82', l2: '156', l3: '321', l4: '21.09', l5: '51.45', l6: '170' },
        { nominal_size: '200 X 160', d: '191.6', d1: '201.6', d2: '161.4', d_upper: '200', d1_upper: '210', d2_upper: '168.6', d3_upper: '225.4', d4_upper: '180.8', l: '33.33', l1: '82', l2: '181', l3: '371', l4: '26.48', l5: '66.51', l6: '190' },
        { nominal_size: '250 X 110', d: '252.7', d1: '237.2', d2: '111.9', d_upper: '264.9', d1_upper: '250', d2_upper: '118.5', d3_upper: '286.7', d4_upper: '127.8', l: '49.3', l1: '103.9', l2: '191.4', l3: '21.2', l4: '51.5', l5: '191.7', l6: '371' },
        { nominal_size: '250 X 160', d: '252.7', d1: '237.2', d2: '162', d_upper: '264.9', d1_upper: '250', d2_upper: '169.8', d3_upper: '286.7', d4_upper: '182.8', l: '49.3', l1: '103.9', l2: '216.4', l3: '27.1', l4: '66.6', l5: '211.1', l6: '422' },
        { nominal_size: '250 X 200', d: '252.7', d1: '237.2', d2: '202.3', d_upper: '264.9', d1_upper: '250', d2_upper: '211.8', d3_upper: '286.7', d4_upper: '227.2', l: '49.3', l1: '103.9', l2: '236.5', l3: '34.2', l4: '82.7', l5: '233.7', l6: '462' }
      ]
    }
  },
  {
    id: 'pushfit-90-saddle-branch',
    code: undefined,
    name: '90° SADDLE BRANCH',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/90saddlebranch.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/90saddlebranch.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/90saddlebranch (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/90saddlebranch (2).png'
    },
    sizes: [
      { sizeMm: '200 X 160' }
    ],
    table: {
      id: 'pushfit-90-saddle-branch',
      title: '90° SADDLE BRANCH',
      columns: [
        { key: 'nominal_size', label: 'Nominal Size (mm x mm)' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '200 X 160', d_upper: '168.2', d: '161', l: '66', h: '322' }
      ]
    }
  },
  {
    id: 'pushfit-inspection-elbow-m-f',
    code: undefined,
    name: 'INSPECTION ELBOW M/F',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Inspection_Elbow_M_F_202604110107.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Inspection_Elbow_M_F_202604110107.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/Inspection_Elbow_M_F_202604110107 (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/Inspection_Elbow_M_F_202604110107 (2).png'
    },
    sizes: [
      { sizeMm: '110mm' }
    ],
    table: {
      id: 'pushfit-inspection-elbow-m-f',
      title: 'INSPECTION ELBOW M/F',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '110mm', d: '111', d1: '103.6', d_upper: '117.4', d1_upper: '110', d2_upper: '127.6', l: '21.38', l1: '51', l2: '146', l3: '143.84', l4: '175' }
      ]
    }
  },
  {
    id: 'pushfit-inspection-port-m-f',
    code: undefined,
    name: 'INSPECTION PORT M/F',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Inspection_Port_M_F_202604110131.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Inspection_Port_M_F_202604110131.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/Inspection_Port_M_F_202604110131 (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/Inspection_Port_M_F_202604110131 (2).png'
    },
    sizes: [
      { sizeMm: '110' },
      { sizeMm: '160' }
    ],
    table: {
      id: 'pushfit-inspection-port-m-f',
      title: 'INSPECTION PORT M/F',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1', label: 'd1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2', label: 'd2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd2_upper', label: 'D2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'tr', label: 'Tr', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '110', d: '103.6', d1: '111', d2: '97', d_upper: '110', d1_upper: '117.4', d2_upper: '127.6', tr: '107.5', h: '233', l: '21.09', l1: '51', l2: '110.6', l3: '20', l4: '88' },
        { nominal_size: '160', d: '152.8', d1: '161', d2: '54.5', d_upper: '160', d1_upper: '168.2', d2_upper: '180.8', tr: '164', h: '324', l: '26.48', l1: '66', l2: '164.37', l3: '87.8', l4: '125' }
      ]
    }
  },
  {
    id: 'pushfit-tee-with-3-socket-rubber-equal-tee',
    code: undefined,
    name: 'TEE WITH 3 SOCKET RUBBER (EQUAL TEE)',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Tee with 3 Socket Rubber (Equal Tee).png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Tee with 3 Socket Rubber (Equal Tee).png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/Tee with 3 Socket Rubber (Equal Tee) (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/Tee with 3 Socket Rubber (Equal Tee) (2).png'
    },
    sizes: [
      { sizeMm: '110' },
      { sizeMm: '160' }
    ],
    table: {
      id: 'pushfit-tee-with-3-socket-rubber-equal-tee',
      title: 'TEE WITH 3 SOCKET RUBBER (EQUAL TEE)',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l1', label: 'L1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l3', label: 'L3', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l4', label: 'L4', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '110', d1_upper: '128.2', d_upper: '118', d: '111', l1: '24', l2: '72.51', l3: '144', l4: '169', l: '305' },
        { nominal_size: '160', d1_upper: '182.8', d_upper: '169.8', d: '162', l1: '27.3', l2: '66.6', l3: '166', l4: '166', l: '333' }
      ]
    }
  },
  {
    id: 'pushfit-pvc-door-elbow',
    code: undefined,
    name: 'PVC DOOR ELBOW',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/PVC_Door_Elbow_202604110104.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/PVC_Door_Elbow_202604110104.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/PVC_Door_Elbow_202604110104 (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/PVC_Door_Elbow_202604110104 (2).png'
    },
    sizes: [
      { sizeMm: '110' },
      { sizeMm: '160' }
    ],
    table: {
      id: 'pushfit-pvc-door-elbow',
      title: 'PVC DOOR ELBOW',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd1_upper', label: 'D1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h1_upper', label: 'H1', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h2_upper', label: 'H2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h3_upper', label: 'H3', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '110', d_upper: '127.6', d1_upper: '117.4', d: '111', h1_upper: '150', h2_upper: '51', h3_upper: '21.1' },
        { nominal_size: '160', d_upper: '182.8', d1_upper: '169.8', d: '162', h1_upper: '193', h2_upper: '66.6', h3_upper: '27.1' }
      ]
    }
  },
  {
    id: 'pushfit-skew-tee-with-three-rubber-rings',
    code: undefined,
    name: 'SKEW TEE WITH THREE RUBBER RINGS',
    family: 'pushfit',
    image: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Skew Tee with Three Rubber Rings.png',
    colorVariants: {
      orange: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/Skew Tee with Three Rubber Rings.png',
      olive: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/olive/Skew Tee with Three Rubber Rings (2).png',
      lightGrey: '/images/fittings/UPVC DRAINAGE FITTINGS/Upvc Drainage Fittings PushFit/light grey/Skew Tee with Three Rubber Rings (2).png'
    },
    sizes: [
      { sizeMm: '110' },
      { sizeMm: '160' }
    ],
    table: {
      id: 'pushfit-skew-tee-with-three-rubber-rings',
      title: 'SKEW TEE WITH THREE RUBBER RINGS',
      columns: [
        { key: 'nominal_size', label: 'NOMINAL SIZE (mm)' },
        { key: 'd_upper', label: 'D', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'd', label: 'd', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l', label: 'L', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'l2', label: 'L2', groupLabel: 'products.tables.dimensions_mm' },
        { key: 'h', label: 'H', groupLabel: 'products.tables.dimensions_mm' }
      ],
      rows: [
        { nominal_size: '110', d_upper: '116.8', d: '111', l: '89', l2: '193', h: '282' },
        { nominal_size: '160', d_upper: '169.8', d: '162', l: '120.4', l2: '275.6', h: '396' }
      ]
    }
  },
];
