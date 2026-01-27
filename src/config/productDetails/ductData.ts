/**
 * UPVC Duct Pipes & Accessories - Product Detail Configuration
 * 
 * Source: UPVC DUCT PIPES AND ACCESSORIES.txt JSON (extracted from PDF)
 * 
 * This product covers both:
 * - UPVC Duct Pipes (Black/Dark Grey) for electrical/telecom cable protection
 * - UPVC Duct Accessories/Fittings (End Caps, Sockets, Bellmouths, Bends)
 */

import { type ProductDetailConfig, type PipeTable, type Fitting, type FittingSpecTable } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// PIPE TABLES - Extracted from UPVC DUCT PIPES AND ACCESSORIES.txt JSON
// ═══════════════════════════════════════════════════════════════════════════════

const ductPipesTables: PipeTable[] = [
  // Table 1: NEMA TC 2: 2003 ELECTRICAL PVC-U TUBING & CONDUITS
  {
    id: 'nema_tc_2_2003_electrical',
    title: 'NEMA TC 2: 2003 ELECTRICAL PVC-U TUBING & CONDUITS:',
    columns: [
      { key: 'nominal_size_inch', label: 'Nominal Size (Inch)' },
      { key: 'mean_od_min', label: 'Mean Outside Dia. (mm) Min' },
      { key: 'mean_od_max', label: 'Mean Outside Dia. (mm) Max' },
      { key: 'epc_40_min', label: 'EPC 40 Min' },
      { key: 'epc_40_max', label: 'EPC 40 Max' },
      { key: 'epc_80_min', label: 'EPC 80 Min' },
      { key: 'epc_80_max', label: 'EPC 80 Max' },
    ],
    rows: [
      { nominal_size_inch: '1/2"', mean_od_min: '21.2', mean_od_max: '21.5', epc_40_min: '2.77', epc_40_max: '3.25', epc_80_min: '3.73', epc_80_max: '4.15' },
      { nominal_size_inch: '3/4"', mean_od_min: '26.6', mean_od_max: '26.9', epc_40_min: '2.87', epc_40_max: '3.25', epc_80_min: '3.91', epc_80_max: '4.42' },
      { nominal_size_inch: '1"', mean_od_min: '33.4', mean_od_max: '33.7', epc_40_min: '3.38', epc_40_max: '3.62', epc_80_min: '4.55', epc_80_max: '4.82' },
      { nominal_size_inch: '1 1/4"', mean_od_min: '42.1', mean_od_max: '42.4', epc_40_min: '3.56', epc_40_max: '3.80', epc_80_min: '4.85', epc_80_max: '5.10' },
      { nominal_size_inch: '1 1/2"', mean_od_min: '48.1', mean_od_max: '48.4', epc_40_min: '3.68', epc_40_max: '4.05', epc_80_min: '5.08', epc_80_max: '5.35' },
      { nominal_size_inch: '2"', mean_od_min: '60.2', mean_od_max: '60.5', epc_40_min: '3.91', epc_40_max: '4.25', epc_80_min: '5.54', epc_80_max: '6.02' },
      { nominal_size_inch: '3"', mean_od_min: '88.7', mean_od_max: '89.1', epc_40_min: '5.49', epc_40_max: '6.01', epc_80_min: '7.62', epc_80_max: '7.95' },
      { nominal_size_inch: '4"', mean_od_min: '114.1', mean_od_max: '114.5', epc_40_min: '6.02', epc_40_max: '7.05', epc_80_min: '8.56', epc_80_max: '9.25' },
      { nominal_size_inch: '6"', mean_od_min: '168.2', mean_od_max: '168.5', epc_40_min: '7.11', epc_40_max: '8.10', epc_80_min: '10.97', epc_80_max: '11.23' },
      { nominal_size_inch: '8"', mean_od_min: '218.8', mean_od_max: '219.4', epc_40_min: '8.18', epc_40_max: '9.56', epc_80_min: '12.70', epc_80_max: '13.15' },
    ],
  },
  // Table 2: NEMA TC 6 & 8/ASTM F 512 PVC-U DUCT PIPE FOR UNDERGROUND
  {
    id: 'nema_tc_6_8_astm_f512_underground',
    title: 'NEMA TC 6 & 8/ASTM F 512 PVC-U DUCT PIPE FOR UNDER GROUND INSTALLATIONS',
    columns: [
      { key: 'nominal_size_inch', label: 'Nominal Size (Inch)' },
      { key: 'mean_od_min', label: 'Mean Outside Dia. (mm) Min' },
      { key: 'mean_od_max', label: 'Mean Outside Dia. (mm) Max' },
      { key: 'eb_20', label: 'EB-20' },
      { key: 'eb_35', label: 'EB-35' },
      { key: 'db_60', label: 'DB-60' },
      { key: 'db_100', label: 'DB-100' },
      { key: 'db_120', label: 'DB-120' },
    ],
    rows: [
      { nominal_size_inch: '1"', mean_od_min: '33.4', mean_od_max: '33.7', eb_20: '', eb_35: '', db_60: '', db_100: '', db_120: '1.52' },
      { nominal_size_inch: '1 1/2"', mean_od_min: '48.1', mean_od_max: '48.4', eb_20: '', eb_35: '', db_60: '1.52', db_100: '', db_120: '1.65' },
      { nominal_size_inch: '2"', mean_od_min: '60.2', mean_od_max: '60.5', eb_20: '', eb_35: '1.52', db_60: '1.65', db_100: '', db_120: '2.11' },
      { nominal_size_inch: '3"', mean_od_min: '88.7', mean_od_max: '89.1', eb_20: '1.70', eb_35: '2.08', db_60: '2.54', db_100: '3.07', db_120: '3.23' },
      { nominal_size_inch: '4"', mean_od_min: '114.1', mean_od_max: '114.5', eb_20: '2.26', eb_35: '2.77', db_60: '3.33', db_100: '3.94', db_120: '4.22' },
      { nominal_size_inch: '6"', mean_od_min: '168.2', mean_od_max: '168.5', eb_20: '3.43', eb_35: '4.17', db_60: '4.98', db_100: '5.82', db_120: '6.20' },
    ],
  },
  // Table 3: Metric size Pressure Pipes: DIN 8062
  {
    id: 'metric_pressure_pipes_din_8062',
    title: 'Metric size Pressure Pipes: DIN 8062',
    columns: [
      { key: 'nominal_size_mm', label: 'Nominal Size mm' },
      { key: 'mean_od_min', label: 'Mean Outside Dia. Min' },
      { key: 'mean_od_max', label: 'Mean Outside Dia. Max' },
      { key: 'pn16_min', label: 'PN-16 Min' },
      { key: 'pn16_max', label: 'PN-16 Max' },
      { key: 'pn10_min', label: 'PN-10 Min' },
      { key: 'pn10_max', label: 'PN-10 Max' },
      { key: 'pn6_min', label: 'PN-6 Min' },
      { key: 'pn6_max', label: 'PN-6 Max' },
      { key: 'pn4_min', label: 'PN-4 Min' },
      { key: 'pn4_max', label: 'PN-4 Max' },
    ],
    rows: [
      { nominal_size_mm: '20 mm', mean_od_min: '20.0', mean_od_max: '20.2', pn16_min: '1.5', pn16_max: '1.9', pn10_min: '', pn10_max: '', pn6_min: '', pn6_max: '', pn4_min: '', pn4_max: '' },
      { nominal_size_mm: '25 mm', mean_od_min: '25.0', mean_od_max: '25.2', pn16_min: '1.9', pn16_max: '2.3', pn10_min: '1.5', pn10_max: '1.8', pn6_min: '', pn6_max: '', pn4_min: '', pn4_max: '' },
      { nominal_size_mm: '32 mm', mean_od_min: '32.0', mean_od_max: '32.2', pn16_min: '2.4', pn16_max: '2.9', pn10_min: '1.8', pn10_max: '1.9', pn6_min: '', pn6_max: '', pn4_min: '', pn4_max: '' },
      { nominal_size_mm: '40 mm', mean_od_min: '40.0', mean_od_max: '40.2', pn16_min: '3.0', pn16_max: '3.5', pn10_min: '1.9', pn10_max: '2.3', pn6_min: '1.8', pn6_max: '', pn4_min: '', pn4_max: '' },
      { nominal_size_mm: '50 mm', mean_od_min: '50.0', mean_od_max: '50.2', pn16_min: '3.7', pn16_max: '4.3', pn10_min: '2.4', pn10_max: '2.9', pn6_min: '1.8', pn6_max: '', pn4_min: '', pn4_max: '' },
      { nominal_size_mm: '63 mm', mean_od_min: '63.0', mean_od_max: '63.2', pn16_min: '4.7', pn16_max: '5.4', pn10_min: '3.0', pn10_max: '3.4', pn6_min: '1.9', pn6_max: '', pn4_min: '', pn4_max: '' },
      { nominal_size_mm: '75 mm', mean_od_min: '75.0', mean_od_max: '75.3', pn16_min: '5.6', pn16_max: '6.4', pn10_min: '3.6', pn10_max: '4.2', pn6_min: '2.2', pn6_max: '', pn4_min: '1.8', pn4_max: '2.2' },
      { nominal_size_mm: '90 mm', mean_od_min: '90.0', mean_od_max: '90.3', pn16_min: '6.7', pn16_max: '7.6', pn10_min: '4.3', pn10_max: '5.1', pn6_min: '2.7', pn6_max: '', pn4_min: '1.8', pn4_max: '2.3' },
      { nominal_size_mm: '110 mm', mean_od_min: '110.0', mean_od_max: '110.3', pn16_min: '8.2', pn16_max: '9.3', pn10_min: '5.3', pn10_max: '5.9', pn6_min: '3.2', pn6_max: '', pn4_min: '2.2', pn4_max: '2.6' },
      { nominal_size_mm: '125 mm', mean_od_min: '125.0', mean_od_max: '125.3', pn16_min: '9.3', pn16_max: '10.3', pn10_min: '6.0', pn10_max: '6.8', pn6_min: '3.7', pn6_max: '', pn4_min: '2.5', pn4_max: '2.9' },
      { nominal_size_mm: '140 mm', mean_od_min: '140.0', mean_od_max: '140.4', pn16_min: '10.4', pn16_max: '11.8', pn10_min: '6.7', pn10_max: '7.5', pn6_min: '4.1', pn6_max: '', pn4_min: '2.8', pn4_max: '3.3' },
      { nominal_size_mm: '160 mm', mean_od_min: '160.0', mean_od_max: '160.4', pn16_min: '11.9', pn16_max: '11.3', pn10_min: '7.7', pn10_max: '8.5', pn6_min: '4.7', pn6_max: '', pn4_min: '3.2', pn4_max: '3.8' },
      { nominal_size_mm: '180 mm', mean_od_min: '180.0', mean_od_max: '180.4', pn16_min: '13.4', pn16_max: '15.0', pn10_min: '8.6', pn10_max: '9.4', pn6_min: '5.3', pn6_max: '', pn4_min: '3.6', pn4_max: '4.2' },
      { nominal_size_mm: '200 mm', mean_od_min: '200.0', mean_od_max: '200.4', pn16_min: '14.9', pn16_max: '16.6', pn10_min: '9.6', pn10_max: '10.7', pn6_min: '5.9', pn6_max: '', pn4_min: '4.0', pn4_max: '4.4' },
      { nominal_size_mm: '225 mm', mean_od_min: '225.0', mean_od_max: '225.5', pn16_min: '16.7', pn16_max: '18.6', pn10_min: '10.8', pn10_max: '11.6', pn6_min: '6.6', pn6_max: '', pn4_min: '4.5', pn4_max: '4.9' },
      { nominal_size_mm: '250 mm', mean_od_min: '250.0', mean_od_max: '250.5', pn16_min: '18.6', pn16_max: '20.7', pn10_min: '11.9', pn10_max: '13.3', pn6_min: '7.3', pn6_max: '', pn4_min: '4.9', pn4_max: '5.7' },
      { nominal_size_mm: '280 mm', mean_od_min: '280.0', mean_od_max: '280.5', pn16_min: '20.8', pn16_max: '23.1', pn10_min: '13.4', pn10_max: '14.9', pn6_min: '8.2', pn6_max: '', pn4_min: '5.5', pn4_max: '6.3' },
      { nominal_size_mm: '315 mm', mean_od_min: '315.0', mean_od_max: '315.6', pn16_min: '23.4', pn16_max: '26.0', pn10_min: '15.0', pn10_max: '16.7', pn6_min: '9.2', pn6_max: '10.4', pn4_min: '6.2', pn4_max: '7.1' },
    ],
  },
  // Table 4: DUCT PIPE FOR ELECTRICAL AND TELEPHONE CABLE (Etisalat & DU)
  {
    id: 'etisalat_du_duct_pipe',
    title: 'DUCT PIPE FOR ELECTRICAL AND TELEPHONE CABLE Dimensions as per Etisalat & DU specifications',
    columns: [
      { key: 'product', label: 'Product' },
      { key: 'od_min', label: 'Outside Diameter Min' },
      { key: 'od_max', label: 'Outside Diameter Max' },
      { key: 'wt_min', label: 'Wall Thickness Min' },
      { key: 'wt_max', label: 'Wall Thickness Max' },
    ],
    rows: [
      { product: 'D54 DUCT PIPE', od_min: '96.30', od_max: '96.70', wt_min: '3.25', wt_max: '3.65' },
      { product: 'D56 DUCT PIPE', od_min: '53.80', od_max: '54.00', wt_min: '1.55', wt_max: '1.70' },
      { product: 'D57 DUCT PIPE', od_min: '114.30', od_max: '114.50', wt_min: '3.40', wt_max: '3.65' },
    ],
  },
  // Table 5: Imperial size Pressure Pipes: BS 3505/06
  {
    id: 'imperial_pressure_pipes_bs_3505_06',
    title: 'Imperial size Pressure Pipes: BS 3505/06',
    columns: [
      { key: 'nominal_size_inch', label: 'Nominal Size inch' },
      { key: 'mean_od', label: 'Mean Outside Dia Min Max' },
      { key: 'pn15_class_e', label: 'PN-15 (Class-E)' },
      { key: 'pn12_class_d', label: 'PN-12 (Class-D)' },
      { key: 'pn9_class_c', label: 'PN-9 (Class-C)' },
      { key: 'pn6_class_b', label: 'PN-6 (Class-B)' },
      { key: 'non_pressure_class_o', label: 'Non Pressure (Class-O)' },
    ],
    rows: [
      { nominal_size_inch: '1/2"', mean_od: '21.2 21.5', pn15_class_e: '1.7 2.1', pn12_class_d: '', pn9_class_c: '', pn6_class_b: '', non_pressure_class_o: '' },
      { nominal_size_inch: '3/4"', mean_od: '26.6 26.9', pn15_class_e: '1.9 2.5', pn12_class_d: '', pn9_class_c: '', pn6_class_b: '', non_pressure_class_o: '' },
      { nominal_size_inch: '1"', mean_od: '33.4 33.7', pn15_class_e: '2.2 2.8', pn12_class_d: '', pn9_class_c: '', pn6_class_b: '', non_pressure_class_o: '' },
      { nominal_size_inch: '1 1/4"', mean_od: '42.1 42.4', pn15_class_e: '2.7 3.3', pn12_class_d: '2.2 2.7', pn9_class_c: '', pn6_class_b: '', non_pressure_class_o: '1.8 2.2' },
      { nominal_size_inch: '1 1/2"', mean_od: '48.1 48.4', pn15_class_e: '3.1 3.7', pn12_class_d: '2.5 3.0', pn9_class_c: '', pn6_class_b: '', non_pressure_class_o: '1.8 2.2' },
      { nominal_size_inch: '2"', mean_od: '60.2 60.5', pn15_class_e: '3.9 4.5', pn12_class_d: '3.1 3.7', pn9_class_c: '2.5 3.0', pn6_class_b: '', non_pressure_class_o: '1.8 2.2' },
      { nominal_size_inch: '3"', mean_od: '88.7 89.1', pn15_class_e: '5.7 6.6', pn12_class_d: '4.6 5.3', pn9_class_c: '3.5 4.1', pn6_class_b: '2.9 3.4', non_pressure_class_o: '1.8 2.2' },
      { nominal_size_inch: '4"', mean_od: '114.1 114.5', pn15_class_e: '7.3 8.4', pn12_class_d: '6.0 6.9', pn9_class_c: '4.5 5.2', pn6_class_b: '3.4 4.0', non_pressure_class_o: '2.3 3.1' },
      { nominal_size_inch: '6"', mean_od: '168 168.5', pn15_class_e: '10.8 12.5', pn12_class_d: '8.8 10.2', pn9_class_c: '6.6 7.6', pn6_class_b: '4.5 5.2', non_pressure_class_o: '3.1 3.7' },
      { nominal_size_inch: '8"', mean_od: '218.8 219.4', pn15_class_e: '12.6 14.5', pn12_class_d: '10.3 11.9', pn9_class_c: '7.8 9.0', pn6_class_b: '5.3 6.1', non_pressure_class_o: '3.1 3.7' },
      { nominal_size_inch: '10"', mean_od: '272.6 273.4', pn15_class_e: '15.7 18.1', pn12_class_d: '12.8 14.8', pn9_class_c: '9.7 11.2', pn6_class_b: '6.6 7.6', non_pressure_class_o: '3.1 3.7' },
      { nominal_size_inch: '12"', mean_od: '323.4 324.3', pn15_class_e: '18.7 21.6', pn12_class_d: '15.2 17.5', pn9_class_c: '11.5 13.3', pn6_class_b: '7.8 9.0', non_pressure_class_o: '3.1 3.7' },
    ],
  },
  // Table 6: NON-STANDARD DUCT PIPE
  {
    id: 'non_standard_duct_pipe',
    title: 'NON-STANDARD DUCT PIPE',
    columns: [
      { key: 'product', label: 'Product' },
      { key: 'od_min', label: 'Outside Min' },
      { key: 'od_max', label: 'Diameter Max' },
      { key: 'wt', label: 'Min Wall Thickness Max' },
    ],
    rows: [
      { product: '75 DUCT PIPE', od_min: '75.00', od_max: '75.30', wt: '1.70 2.00' },
      { product: '90 DUCT PIPE', od_min: '90.00', od_max: '90.30', wt: '1.70 2.00' },
      { product: '110 DUCT PIPE', od_min: '110.00', od_max: '110.40', wt: '2.40 2.80' },
      { product: '160 DUCT PIPE', od_min: '160.00', od_max: '160.40', wt: '3.60 4.00' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// FITTINGS - Extracted from UPVC DUCT PIPES AND ACCESSORIES.txt JSON
// ═══════════════════════════════════════════════════════════════════════════════

const ductFittings: Fitting[] = [
  // 1. DUCT END CAPS
  {
    id: 'duct_end_caps',
    code: undefined,
    name: 'DUCT END CAPS',
    family: 'fabricated',
    image: '/images/fittings/duct/duct_end_caps.jpg',
    sizes: [
      { sizeMm: '2" C/56' },
      { sizeMm: '3" C/54D' },
      { sizeMm: '4" C/110 mm' },
      { sizeMm: '6" C / 160 mm' },
      { sizeMm: '8" C/200 mm' },
    ],
    table: {
      id: 'duct_end_caps',
      title: 'DUCT END CAPS',
      columns: [
        { key: 'size', label: 'Ø/SIZE' },
        { key: 'id', label: 'ID' },
        { key: 'h', label: 'H' },
      ],
      rows: [
        { size: '2" C/56', id: '60.5/54', h: '30' },
        { size: '3" C/54D', id: '89.5/96.7', h: '30' },
        { size: '4" C/110 mm', id: '114.5/110', h: '30' },
        { size: '6" C / 160 mm', id: '168.5/160', h: '40' },
        { size: '8" C/200 mm', id: '219.4/200', h: '45' },
      ],
    },
  },
  // 2. DUCT SOCKETS
  {
    id: 'duct_sockets',
    code: undefined,
    name: 'DUCT SOCKETS',
    family: 'fabricated',
    image: '/images/fittings/duct/duct_sockets.jpg',
    sizes: [
      { sizeMm: '2" C/56' },
      { sizeMm: '3" C/54D' },
      { sizeMm: '4" C/110 mm' },
      { sizeMm: '6" C/160 mm' },
      { sizeMm: '8" C/200 mm' },
    ],
    table: {
      id: 'duct_sockets',
      title: 'DUCT SOCKETS',
      columns: [
        { key: 'size', label: 'Ø/SIZE' },
        { key: 'id', label: 'ID' },
        { key: 'l', label: 'L' },
      ],
      rows: [
        { size: '2" C/56', id: '60.5/54', l: '116.5' },
        { size: '3" C/54D', id: '89.5/96.7', l: '162' },
        { size: '4" C/110 mm', id: '114.5/110', l: '172' },
        { size: '6" C/160 mm', id: '168.5/160', l: '258' },
        { size: '8" C/200 mm', id: '219.4/200', l: '294' },
      ],
    },
  },
  // 3. DUCT BELLMOUTHS
  {
    id: 'duct_bellmouths',
    code: undefined,
    name: 'DUCT BELLMOUTHS',
    family: 'fabricated',
    image: '/images/fittings/duct/duct_bellmouths.jpg',
    sizes: [
      { sizeMm: '2" C/56' },
      { sizeMm: '3" C/54D' },
      { sizeMm: '4" C/110 mm' },
      { sizeMm: '6" C/160 mm' },
      { sizeMm: '8" C/200 mm' },
    ],
    table: {
      id: 'duct_bellmouths',
      title: 'DUCT BELLMOUTHS',
      columns: [
        { key: 'size', label: 'Ø/SIZE' },
        { key: 'id', label: 'ID' },
        { key: 'od', label: 'OD' },
        { key: 'wt', label: 'WT' },
      ],
      rows: [
        { size: '2" C/56', id: '110', od: '117', wt: '3.5/1.63' },
        { size: '3" C/54D', id: '161.5', od: '168', wt: '3.5/1.63' },
        { size: '4" C/110 mm', id: '201', od: '212', wt: '4/340' },
        { size: '6" C/160 mm', id: '250.5', od: '265', wt: '5.00' },
        { size: '8" C/200 mm', id: '315', od: '332', wt: '6.25' },
      ],
    },
  },
  // 4. DUCT 90/45° LR BENDS
  {
    id: 'duct_90_45_lr_bends',
    code: undefined,
    name: 'DUCT 90/45° LR BENDS',
    family: 'fabricated',
    image: '/images/fittings/duct/duct_90_45_lr_bends.jpg',
    sizes: [
      { sizeMm: '1"' },
      { sizeMm: '1½"' },
      { sizeMm: '2" C/56' },
      { sizeMm: '3" C/54D' },
      { sizeMm: '4" C/110 mm' },
      { sizeMm: '6" C/160 mm' },
      { sizeMm: '8" C/200 mm' },
    ],
    table: {
      id: 'duct_90_45_lr_bends',
      title: 'DUCT 90/45° LR BENDS',
      columns: [
        { key: 'size', label: 'Ø/SIZE' },
        { key: 'l1', label: 'L1' },
        { key: 'l2', label: 'L2' },
        { key: 'l3', label: 'L3' },
        { key: 'l4', label: 'L4' },
        { key: 'r', label: 'R' },
      ],
      rows: [
        { size: '1"', l1: '220', l2: '220', l3: '280', l4: '280', r: '200' },
        { size: '1½"', l1: '310', l2: '310', l3: '400', l4: '400', r: '300' },
        { size: '2" C/56', l1: '481', l2: '481', l3: '567', l4: '567', r: '300' },
        { size: '3" C/54D', l1: '638', l2: '638', l3: '755', l4: '755', r: '400' },
        { size: '4" C/110 mm', l1: '626', l2: '626', l3: '683', l4: '683', r: '400' },
        { size: '6" C/160 mm', l1: '699', l2: '699', l3: '717', l4: '717', r: '400' },
        { size: '8" C/200 mm', l1: '914', l2: '914', l3: '1090', l4: '1090', r: '600' },
      ],
    },
  },
  // 5. DUCT 90° LIGHTING LR BENDS 4"
  {
    id: 'duct_90_lighting_lr_bends_4',
    code: undefined,
    name: 'DUCT 90° LIGHTING LR BENDS 4"',
    family: 'fabricated',
    image: '/images/fittings/duct/duct_90_lighting_lr_bends_4.jpg',
    sizes: [
      { sizeMm: '4" CLASS C - 12 Mtr.' },
      { sizeMm: '4" CLASS C - 14 Mtr.' },
      { sizeMm: '4" CLASS C - 16/18 Mtr.' },
      { sizeMm: '4" CLASS C - 25 Mtr.' },
    ],
    table: {
      id: 'duct_90_lighting_lr_bends_4',
      title: 'DUCT 90° LIGHTING LR BENDS 4"',
      columns: [
        { key: 'size', label: 'Ø/SIZE' },
        { key: 'poles', label: 'POLES' },
        { key: 'radius', label: 'RADIUS (mm)' },
        { key: 'h', label: 'H(mm)' },
        { key: 'w', label: 'W(mm)' },
      ],
      rows: [
        { size: '4" CLASS C', poles: '12 Mtr.', radius: '600', h: '1050', w: '600' },
        { size: '4" CLASS C', poles: '14 Mtr.', radius: '600', h: '1050', w: '600' },
        { size: '4" CLASS C', poles: '16/18 Mtr.', radius: '600', h: '1070', w: '600' },
        { size: '4" CLASS C', poles: '25 Mtr.', radius: '600', h: '1050', w: '1150' },
      ],
    },
  },
  // 6. DUCT 90° STREET LIGHTING LR BENDS 3"
  {
    id: 'duct_90_street_lighting_lr_bends_3',
    code: undefined,
    name: 'DUCT 90° STREET LIGHTING L R BENDS 3"',
    family: 'fabricated',
    image: '/images/fittings/duct/duct_90_street_lighting_lr_bends_3.jpg',
    sizes: [
      { sizeMm: '3" CLASS C - 3.5 Mtr.' },
      { sizeMm: '3" CLASS C - 5 Mtr.' },
      { sizeMm: '3" CLASS C - 6 Mtr.' },
      { sizeMm: '3" CLASS C - 8 Mtr.' },
      { sizeMm: '3" CLASS C - 10 Mtr.' },
    ],
    table: {
      id: 'duct_90_street_lighting_lr_bends_3',
      title: 'DUCT 90° STREET LIGHTING L R BENDS 3"',
      columns: [
        { key: 'size', label: 'Ø/SIZE' },
        { key: 'poles', label: 'POLES' },
        { key: 'radius', label: 'RADIUS (mm)' },
        { key: 'h', label: 'H(mm)' },
        { key: 'w', label: 'W(mm)' },
      ],
      rows: [
        { size: '3" CLASS C', poles: '3.5 Mtr.', radius: '600', h: '700', w: '600' },
        { size: '3" CLASS C', poles: '5 Mtr.', radius: '600', h: '700', w: '600' },
        { size: '3" CLASS C', poles: '6 Mtr.', radius: '600', h: '1050', w: '600' },
        { size: '3" CLASS C', poles: '8 Mtr.', radius: '600', h: '1050', w: '600' },
        { size: '3" CLASS C', poles: '10 Mtr.', radius: '600', h: '1050', w: '600' },
      ],
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// FEATURES & APPLICATIONS
// ═══════════════════════════════════════════════════════════════════════════════

const ductFeatures = [
  'Available in standard length of 5.8 meters or as required',
  'PN ratings indicate working pressure at 20°C',
  'Duct 90/45° LR Bends include one solvent socket end',
  'Duct 90° Lighting LR Bends available for 4" Class C duct pipe, in various pole sizes',
  'Duct 90° Street Lighting LR Bends available for 3" Class C duct pipe, in various pole sizes',
  'Manufactured by Crown Plastic Pipes Factory L.L.C.',
];

const ductApplications = [
  'Above ground electrical applications (EPC 40 PVC and EPC 80 PVC)',
  'Concrete encased applications (EPC 40 PVC, EPC 80 PVC, EB-20, EB-35, Type DB products)',
  'Direct Burial (EPC 40 PVC, EPC 80 PVC, DB-60, DB-100, DB-120)',
  'Underground installations for communications and electrical wire & cable',
  'Electrical and telephone cable (D54, D56, D57 DUCT PIPE)',
  'Duct applications for fabricated accessories',
];

// ═══════════════════════════════════════════════════════════════════════════════
// UPVC DUCT PIPES & ACCESSORIES CONFIG
// ═══════════════════════════════════════════════════════════════════════════════

export const upvcDuctPipesAndAccessories: ProductDetailConfig = {
  slug: 'upvc-duct-black',
  categorySlug: 'upvc-duct',
  
  title: 'UPVC Duct Pipes & Accessories Black Pipes / Fittings',
  titleAr: 'أنابيب وملحقات قنوات UPVC',
  
  shortDescription: 'Black/Dark Grey UPVC duct pipes and accessories manufactured to NEMA, DIN, BS, and Etisalat/DU specifications for electrical, communication, and cable protection applications.',
  shortDescriptionAr: 'أنابيب وملحقات قنوات UPVC باللون الأسود/الرمادي الداكن مصنعة وفقاً لمعايير NEMA وDIN وBS ومواصفات اتصالات/دو لتطبيقات الكهرباء والاتصالات وحماية الكابلات.',
  
  overview: `The document provides a product catalogue for UPVC/PVC Duct Pipes and associated accessories, manufactured to various international standards for electrical, communication, and pressure applications.

**Pipes Range:**
The catalogue details UPVC duct pipes manufactured according to various standards, including Metric size Pressure Pipes (DIN 8062) and Imperial size Pressure Pipes (BS 3505/06) and non-pressure pipe (Class-O). The pipes are also manufactured for electrical and telephone cable applications based on Etisalat & DU specifications, and for underground installations based on NEMA standards.

**Accessories Range:**
The catalogue includes a range of fabricated products for duct applications, specifically Duct End Caps, Duct Sockets, Duct Bellmouths, and Duct 90/45° LR Bends. These accessories are listed with dimensional data.

**Key Specifications:**
• Material: Polyvinyl Chloride (PVC) / Unplasticized Polyvinyl Chloride (UPVC/PVC)
• Colour: Black/Dark Grey or as required
• Pressure Classes: Schedule 40, Schedule 80, PN-4 to PN-16, Class-B to Class-E, DB/EB series
• Standards: NEMA TC 2: 2003, NEMA TC 6 & 8/ASTM F 512, DIN 8062, BS 3505/06, Etisalat & DU specifications`,

  overviewAr: `يوفر المستند كتالوج منتجات لأنابيب وملحقات قنوات UPVC/PVC، المصنعة وفقاً لمعايير دولية مختلفة لتطبيقات الكهرباء والاتصالات والضغط.

**نطاق الأنابيب:**
يتضمن الكتالوج أنابيب قنوات UPVC المصنعة وفقاً لمعايير مختلفة، بما في ذلك أنابيب الضغط بالقياس المتري (DIN 8062) وأنابيب الضغط بالقياس الإمبراطوري (BS 3505/06) وأنابيب بدون ضغط (Class-O).

**نطاق الملحقات:**
يتضمن الكتالوج مجموعة من المنتجات المصنعة لتطبيقات القنوات، وتحديداً أغطية نهاية القناة، وموصلات القناة، وفوهات القناة، ومنحنيات القناة 90/45°.`,
  
  features: ductFeatures,
  featuresAr: [
    'متوفر بطول قياسي 5.8 متر أو حسب الطلب',
    'تشير تصنيفات PN إلى ضغط العمل عند 20 درجة مئوية',
    'منحنيات 90/45° تتضمن طرف مقبس لحام واحد',
    'منحنيات إضاءة 90° متوفرة لأنابيب 4 بوصة فئة C',
    'منحنيات إضاءة الشوارع 90° متوفرة لأنابيب 3 بوصة فئة C',
    'مصنعة بواسطة مصنع كراون للأنابيب البلاستيكية ذ.م.م.',
  ],
  
  applications: ductApplications,
  applicationsAr: [
    'التطبيقات الكهربائية فوق الأرض (EPC 40 PVC و EPC 80 PVC)',
    'التطبيقات المغلفة بالخرسانة (EPC 40 PVC, EPC 80 PVC, EB-20, EB-35, منتجات DB)',
    'الدفن المباشر (EPC 40 PVC, EPC 80 PVC, DB-60, DB-100, DB-120)',
    'التركيبات تحت الأرض للاتصالات والأسلاك والكابلات الكهربائية',
    'كابلات الكهرباء والهاتف (D54, D56, D57 DUCT PIPE)',
    'تطبيقات القنوات للملحقات المصنعة',
  ],
  
  pipesTables: ductPipesTables,
  
  fittings: ductFittings,
  
  downloads: [
    { label: 'UPVC Duct Pipes Catalogue (PDF)', href: '/pdfs/UPVC-DUCT-PIPES-CATALOGUE.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Use appropriate solvent cement for PVC/UPVC joints',
      'Ensure proper depth of insertion in socket joints',
      'Allow adequate curing time before pressure testing',
      'Use manufacturer-recommended accessories and fittings',
      'Follow Etisalat/DU specifications for telecom installations',
      'Store pipes in covered areas away from direct sunlight',
    ],
    donts: [
      'Do not use pipes beyond their rated pressure class',
      'Do not expose to temperatures above the rated limit',
      'Do not use incompatible fittings from other material systems',
      'Do not install without proper bedding for underground applications',
      'Do not drag pipes over rough surfaces during handling',
      'Do not use damaged or deformed pipes',
    ],
  },
};
