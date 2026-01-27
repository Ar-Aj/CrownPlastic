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

const bsEn1329Fittings: Fitting[] = [
  // 1. ELBOW 90°
  {
    id: 'elbow-90',
    code: undefined,
    name: 'ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/drainage/bs-en-1329/elbow-90.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
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
    image: '/images/fittings/drainage/bs-en-1329/elbow-45.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
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
    image: '/images/fittings/drainage/bs-en-1329/socket-coupler.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
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
    image: '/images/fittings/drainage/bs-en-1329/reducer-bush-socket.jpg',
    sizes: [
      { sizeMm: '2 x 1 1/2"' },
      { sizeMm: '3 x 2"' },
      { sizeMm: '4 x 2"' },
      { sizeMm: '4 x 3"' },
      { sizeMm: '6 x 4"' },
      { sizeMm: '8 x 6"' },
    ],
    table: {
      id: 'reducer-bush-socket',
      title: 'REDUCER BUSH/SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'h', label: 'H' },
      ],
      rows: [
        { nominal_size_inch: '2 x 1 1/2"', d: '55.9', d_1: '42.9', l: '22.5', h: '31.0' },
        { nominal_size_inch: '3 x 2"', d: '82.6', d_1: '55.9', l: '29.0', h: '42.0' },
        { nominal_size_inch: '4 x 2"', d: '110.0', d_1: '55.9', l: '29.0', h: '50.0' },
        { nominal_size_inch: '4 x 3"', d: '110.0', d_1: '82.6', l: '40.0', h: '50.0' },
        { nominal_size_inch: '6 x 4"', d: '160.0', d_1: '110.0', l: '48.0', h: '60.0' },
        { nominal_size_inch: '8 x 6"', d: '200.0', d_1: '160.0', l: '58.0', h: '73.0' },
      ],
    },
  },
  // 5. TEE 87.5°
  {
    id: 'tee-87-5',
    code: undefined,
    name: 'TEE 87.5°',
    family: 'moulded',
    image: '/images/fittings/drainage/bs-en-1329/tee-87-5.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'dimensions_mm_d_l_h', label: 'DIMENSIONS (mm) d L H' },
      ],
      rows: [
        { nominal_size_inch: '1 1/2"', d: '52.0', dimensions_mm_d_l_h: '42.9 23.0 100.5' },
        { nominal_size_inch: '2"', d: '62.0', dimensions_mm_d_l_h: '55.9 29.0 133.0' },
        { nominal_size_inch: '3"', d: '91.2', dimensions_mm_d_l_h: '82.6 40.0 170.0' },
        { nominal_size_inch: '4"', d: '120.6', dimensions_mm_d_l_h: '110.0 48.0 219.0' },
        { nominal_size_inch: '6"', d: '173.6', dimensions_mm_d_l_h: '160.0 58.0 296.0' },
        { nominal_size_inch: '8"', d: '216.0', dimensions_mm_d_l_h: '200.0 70.0 355.0' },
      ],
    },
  },
  // 6. Y - 45°/SKEW TEE
  {
    id: 'y-45-skew-tee',
    code: undefined,
    name: 'Y - 45°/SKEW TEE',
    family: 'moulded',
    image: '/images/fittings/drainage/bs-en-1329/y-45-skew-tee.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'h', label: 'H' },
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
      image: '/images/fittings/drainage/bs-en-1329/elbow-90-male-female.jpg',
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
          { key: 'd', label: 'D' },
          { key: 'd_1', label: 'd' },
          { key: 'l', label: 'L' },
          { key: 'l1', label: 'L1' },
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
      image: '/images/fittings/drainage/bs-en-1329/tee-87-5-male-female.jpg',
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
          { key: 'd', label: 'D' },
          { key: 'd_1', label: 'd' },
          { key: 'l', label: 'L' },
          { key: 'l1', label: 'L1' },
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
      image: '/images/fittings/drainage/bs-en-1329/access-cap-clean-out.jpg',
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
          { key: 'd_h', label: 'd H' },
        ],
        rows: [
          { nominal_size_inch: '11/2"', d_h: '42.9 48.50' },
          { nominal_size_inch: '2"', d_h: '55.9 61.00' },
          { nominal_size_inch: '3"', d_h: '82.6 82.00' },
          { nominal_size_inch: '4"', d_h: '110.0 99.00' },
          { nominal_size_inch: '6"', d_h: '160.0 125.00' },
          { nominal_size_inch: '8"', d_h: null },
        ],
      },
    },
    // 10. ACCESS/DOOR ELBOW 90°
    {
      id: 'access-door-elbow-90',
      code: undefined,
      name: 'ACCESS/DOOR ELBOW 90°',
      family: 'moulded',
      image: '/images/fittings/drainage/bs-en-1329/access-door-elbow-90.jpg',
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
          { key: 'd', label: 'D' },
          { key: 'd_1', label: 'd' },
          { key: 'l_tr', label: 'L Tr' },
          { key: 'd1', label: 'd1' },
          { key: 'h', label: 'H' },
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
      image: '/images/fittings/drainage/bs-en-1329/access-door-tee-87-5.jpg',
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
          { key: 'd', label: 'd' },
          { key: 'l', label: 'L' },
          { key: 'l1', label: 'L1' },
          { key: 'h', label: 'H' },
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
      image: '/images/fittings/drainage/bs-en-1329/female-threaded-elbow.jpg',
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
          { key: 'g', label: 'G' },
          { key: 'd', label: 'd' },
          { key: 'l', label: 'L' },
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
    // 13. INSPECTION PORT/ DOOR SOOKET
      {
        id: 'inspection-port-door-sooket',
        code: undefined,
        name: 'INSPECTION PORT/ DOOR SOOKET',
        family: 'moulded',
        image: '/images/fittings/drainage/bs-en-1329/inspection-port-door-sooket.jpg',
        sizes: [
          { sizeMm: '11/_2"' },
          { sizeMm: '2"' },
          { sizeMm: '3"' },
          { sizeMm: '4"' },
          { sizeMm: '6"' },
          { sizeMm: '8"' },
        ],
        table: {
          id: 'inspection-port-door-sooket',
          title: 'INSPECTION PORT/ DOOR SOOKET',
          columns: [
            { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
            { key: 'd', label: 'D' },
            { key: 'd_l', label: 'd L' },
            { key: 'h', label: 'H' },
          ],
          rows: [
            { nominal_size_inch: '11/_2"', d: null, d_l: null, h: null },
            { nominal_size_inch: '2"', d: '62.0', d_l: '55.9 29', h: '111.0' },
            { nominal_size_inch: '3"', d: '91.2', d_l: '82.6 40', h: '168.8' },
            { nominal_size_inch: '4"', d: '120.6', d_l: '110.0 48', h: '230.0' },
            { nominal_size_inch: '6"', d: '173.6', d_l: '160.0 58', h: '275.0' },
            { nominal_size_inch: '8"', d: '216.0', d_l: '200.0 70', h: '335.0' },
          ],
        },
      },
      // 14. VENT COWL
      {
        id: 'vent-cowl',
        code: undefined,
        name: 'VENT COWL',
        family: 'moulded',
        image: '/images/fittings/drainage/bs-en-1329/vent-cowl.jpg',
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
            { key: 'd_l', label: 'd L' },
          ],
          rows: [
            { nominal_size_inch: '11/2"', d_l: null },
            { nominal_size_inch: '2"', d_l: '55.9 49' },
            { nominal_size_inch: '3"', d_l: '82.6 82' },
            { nominal_size_inch: '4"', d_l: '110.0 99.9' },
            { nominal_size_inch: '6"', d_l: '160.0 143' },
            { nominal_size_inch: '8"', d_l: null },
          ],
        },
      },
      // 15. FEMALE THREADED SOCKET
      {
        id: 'female-threaded-socket',
        code: undefined,
        name: 'FEMALE THREADED SOCKET',
        family: 'moulded',
        image: '/images/fittings/drainage/bs-en-1329/female-threaded-socket.jpg',
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
            { key: 'd', label: 'd' },
            { key: 'g_h', label: 'G H' },
          ],
          rows: [
            { nominal_size_inch: '1 1/2"', d: '42.9', g_h: 'A" 54' },
            { nominal_size_inch: '2"', d: null, g_h: null },
            { nominal_size_inch: '3"', d: null, g_h: null },
            { nominal_size_inch: '4"', d: null, g_h: null },
            { nominal_size_inch: '6"', d: null, g_h: null },
            { nominal_size_inch: '8"', d: null, g_h: null },
          ],
        },
      },
      // 16. PARAPET ROOF DRAIN
      {
        id: 'parapet-roof-drain',
        code: undefined,
        name: 'PARAPET ROOF DRAIN',
        family: 'moulded',
        image: '/images/fittings/drainage/bs-en-1329/parapet-roof-drain.jpg',
        sizes: [
          { sizeMm: '4"' },
        ],
        table: {
          id: 'parapet-roof-drain',
          title: 'PARAPET ROOF DRAIN',
          columns: [
            { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
            { key: 'h1', label: 'H1' },
            { key: 'd', label: 'D' },
            { key: 'd_1', label: 'd' },
            { key: 'l', label: 'L' },
            { key: 'b_h', label: 'B H' },
            { key: 'h2', label: 'H2' },
          ],
          rows: [
            { nominal_size_inch: '4"', h1: '117.0', d: '110.0', d_1: '99.5', l: '4.5', b_h: '167.5 40.5', h2: '211.5' },
          ],
        },
      },
      // 17. ROOF DRAIN
      {
        id: 'roof-drain',
        code: undefined,
        name: 'ROOF DRAIN',
        family: 'moulded',
        image: '/images/fittings/drainage/bs-en-1329/roof-drain.jpg',
        sizes: [
          { sizeMm: '4"' },
        ],
        table: {
          id: 'roof-drain',
          title: 'ROOF DRAIN',
          columns: [
            { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
            { key: 'd1_d2', label: 'd1 d2' },
            { key: 'd1', label: 'D1' },
            { key: 'd2_l1', label: 'D2 L1' },
            { key: 'l2', label: 'L2' },
            { key: 'h1', label: 'H1' },
            { key: 'h2', label: 'H2' },
          ],
          rows: [
            { nominal_size_inch: '4"', d1_d2: '63 110.0', d1: '122.1', d2_l1: '164.9 45', l2: '60', h1: '179.2', h2: '111.6' },
          ],
        },
      },
      // 18. FLOOR DRAIN/TRAP TYPE - A
      {
        id: 'floor-drain-trap-type-a',
        code: undefined,
        name: 'FLOOR DRAIN/TRAP TYPE - A',
        family: 'moulded',
        image: '/images/fittings/drainage/bs-en-1329/floor-drain-trap-type-a.jpg',
        sizes: [
          { sizeMm: '4"X3"X2"X12"' },
        ],
        table: {
          id: 'floor-drain-trap-type-a',
          title: 'FLOOR DRAIN/TRAP TYPE - A',
          columns: [
            { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
            { key: 'd', label: 'D' },
            { key: 'd_1', label: 'd' },
            { key: 'd1_d2', label: 'd1 d2' },
            { key: 'd3x3_h', label: 'D3X3 Η' },
            { key: 'l', label: 'L' },
          ],
          rows: [
            { nominal_size_inch: '4"X3"X2"X12"', d: '116.8', d_1: '110.0', d1_d2: '82.6 55.9', d3x3_h: '42.9 149', l: '80.5' },
          ],
        },
      },
      // 19. FLOOR DRAIN/TRAP TYPE - B
        {
          id: 'floor-drain-trap-type-b',
          code: undefined,
          name: 'FLOOR DRAIN/TRAP TYPE - B',
          family: 'moulded',
          image: '/images/fittings/drainage/bs-en-1329/floor-drain-trap-type-b.jpg',
          sizes: [
            { sizeMm: 'UFDB 110X63X50CRG 110X63X50' },
          ],
          table: {
            id: 'floor-drain-trap-type-b',
            title: 'FLOOR DRAIN/TRAP TYPE - B',
            columns: [
              { key: 'd', label: 'd' },
              { key: 'd1_d2_h', label: 'd1 d2 H' },
              { key: 'l', label: 'L' },
            ],
            rows: [
              { d: '110', d1_d2_h: '50 63 76', l: '43.7' },
            ],
          },
        },
        // 20. FLOOR DRAIN/TRAP TYPE - C
        {
          id: 'floor-drain-trap-type-c',
          code: undefined,
          name: 'FLOOR DRAIN/TRAP TYPE - C',
          family: 'moulded',
          image: '/images/fittings/drainage/bs-en-1329/floor-drain-trap-type-c.jpg',
          sizes: [
            { sizeMm: '4X3X2' },
          ],
          table: {
            id: 'floor-drain-trap-type-c',
            title: 'FLOOR DRAIN/TRAP TYPE - C',
            columns: [
              { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
              { key: 'd', label: 'D' },
              { key: 'd_d1x3', label: 'd d1x3' },
              { key: 'h', label: 'H' },
              { key: 'l', label: 'L' },
            ],
            rows: [
              { nominal_size_mm: '4X3X2', d: '110', d_d1x3: '82.6 55.9', h: '118', l: '51.5' },
            ],
          },
        },
        // 21. FLOOR DRAIN/TRAP COVER TYPE - A I
        {
          id: 'floor-drain-trap-cover-type-a-i',
          code: undefined,
          name: 'FLOOR DRAIN/TRAP COVER TYPE - A I',
          family: 'moulded',
          image: '/images/fittings/drainage/bs-en-1329/floor-drain-trap-cover-type-a-i.jpg',
          sizes: [
            { sizeMm: '150 X 150' },
          ],
          table: {
            id: 'floor-drain-trap-cover-type-a-i',
            title: 'FLOOR DRAIN/TRAP COVER TYPE - A I',
            columns: [
              { key: 'nominal_size_mm_lxw', label: 'NOMINAL SIZE (mm) LXW' },
              { key: 'd', label: 'd' },
              { key: 'd1', label: 'd1' },
              { key: 'h', label: 'H' },
            ],
            rows: [
              { nominal_size_mm_lxw: '150 X 150', d: '110', d1: '99.5', h: '31.8' },
            ],
          },
        },
        // 22. FLOOR DRAIN/TRAP COVER TYPE - A II
        {
          id: 'floor-drain-trap-cover-type-a-ii',
          code: undefined,
          name: 'FLOOR DRAIN/TRAP COVER TYPE - A II',
          family: 'moulded',
          image: '/images/fittings/drainage/bs-en-1329/floor-drain-trap-cover-type-a-ii.jpg',
          sizes: [
            { sizeMm: '150 X 150' },
          ],
          table: {
            id: 'floor-drain-trap-cover-type-a-ii',
            title: 'FLOOR DRAIN/TRAP COVER TYPE - A II',
            columns: [
              { key: 'nominal_size_mm_lxw', label: 'NOMINAL SIZE (mm) LXW' },
              { key: 'd', label: 'd' },
              { key: 'd1', label: 'D1' },
              { key: 'h', label: 'H' },
            ],
            rows: [
              { nominal_size_mm_lxw: '150 X 150', d: '110', d1: '86', h: '31.8' },
            ],
          },
        },
        // 23. FLOOR DRAIN/TRAP COVER TYPE - B
        {
          id: 'floor-drain-trap-cover-type-b',
          code: undefined,
          name: 'FLOOR DRAIN/TRAP COVER TYPE - B',
          family: 'moulded',
          image: '/images/fittings/drainage/bs-en-1329/floor-drain-trap-cover-type-b.jpg',
          sizes: [
            { sizeMm: '150X150' },
          ],
          table: {
            id: 'floor-drain-trap-cover-type-b',
            title: 'FLOOR DRAIN/TRAP COVER TYPE - B',
            columns: [
              { key: 'nominal_size_mm_lxw', label: 'NOMINAL SIZE (mm) LXW' },
              { key: 'd', label: 'd' },
              { key: 'd1', label: 'd1' },
              { key: 'h', label: 'H' },
            ],
            rows: [
              { nominal_size_mm_lxw: '150X150', d: '110', d1: '105', h: '9' },
            ],
          },
        },
        // 24. BALCONY TRAP
        {
          id: 'balcony-trap',
          code: undefined,
          name: 'BALCONY TRAP',
          family: 'moulded',
          image: '/images/fittings/drainage/bs-en-1329/balcony-trap.jpg',
          sizes: [
            { sizeMm: '3"X3"' },
          ],
          table: {
            id: 'balcony-trap',
            title: 'BALCONY TRAP',
            columns: [
              { key: 'nominal_size_mm_lxw', label: 'NOMINAL SIZE (mm) LXW' },
              { key: 'dimensions_mm_d_d1', label: 'DIMENSIONS (mm) d d1' },
              { key: 'h', label: 'H' },
            ],
            rows: [
              { nominal_size_mm_lxw: '3"X3"', dimensions_mm_d_d1: '42.9 55.9', h: '22' },
            ],
          },
        },
];

// ═══════════════════════════════════════════════════════════════════════════════
// BS EN 1401 FITTINGS (8 fittings from PDF JSON)
// Source: src/UPVC DRAINAGE FITTINGS BS EN 1401 - SUPERSEDED BS 4660 AND BS 5481.txt
// ═══════════════════════════════════════════════════════════════════════════════
const bsEn1401Fittings: Fitting[] = [
  // 1. ELBOW 90°
  {
    id: 'elbow-90',
    code: undefined,
    name: 'ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/drainage/bs-en-1401/elbow-90.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
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
    image: '/images/fittings/drainage/bs-en-1401/elbow-45.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
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
    image: '/images/fittings/drainage/bs-en-1401/socket-coupler.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
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
    image: '/images/fittings/drainage/bs-en-1401/reducer-bush-socket.jpg',
    sizes: [
      { sizeMm: '4x3"' },
      { sizeMm: '6x3"' },
      { sizeMm: '8x6"' },
    ],
    table: {
      id: 'reducer-bush-socket',
      title: 'REDUCER BUSH/SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'h', label: 'H' },
      ],
      rows: [
        { nominal_size_inch: '4x3"', d: '110.0', d_1: '82.6', l: '40.0', h: '50.0' },
        { nominal_size_inch: '6x3"', d: '160.0', d_1: '110.0', l: '48.0', h: '60.0' },
        { nominal_size_inch: '8x6"', d: '200.0', d_1: '160.0', l: '58.0', h: '73.0' },
      ],
    },
  },
  // 5. ΤΕΕ 87.5°
  {
    id: 'tee-87-5',
    code: undefined,
    name: 'ΤΕΕ 87.5°',
    family: 'moulded',
    image: '/images/fittings/drainage/bs-en-1401/tee-87-5.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'h', label: 'H' },
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
    image: '/images/fittings/drainage/bs-en-1401/y-45-skew-tee.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_l', label: 'd L' },
        { key: 'h', label: 'H' },
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
    image: '/images/fittings/drainage/bs-en-1401/access-cap-clean-out.jpg',
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
        { key: 'd', label: 'd' },
        { key: 'h', label: 'H' },
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
    image: '/images/fittings/drainage/bs-en-1401/access-door-elbow-90.jpg',
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
        { key: 'd', label: 'D' },
        { key: 'd_1', label: 'd' },
        { key: 'd1_h_l_tr', label: 'D1 H L Tr' },
      ],
      rows: [
        { nominal_size_inch: '3"', d: '92.5', d_1: '82.6', d1_h_l_tr: '43.0 Tr76X4 66.5 96.0' },
        { nominal_size_inch: '4"', d: '120.6', d_1: '110.0', d1_h_l_tr: '51.3 Tr104X4 90.4 119.3' },
        { nominal_size_inch: '6"', d: null, d_1: null, d1_h_l_tr: null },
        { nominal_size_inch: '8"', d: null, d_1: null, d1_h_l_tr: null },
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
  
  overview: `Crown Plastic Pipes manufactures a comprehensive range of PVC-U drainage fittings complying with BS EN 1329-1:2014, which supersedes the legacy British standards BS 5255 and BS 4514. These fittings are designed for above-ground soil and waste discharge applications in residential, commercial, and industrial buildings. The product range includes elbows, tees, couplers, access fittings, floor drains, roof drains, and specialized components for complete drainage system solutions.`,
  overviewAr: `تصنع كراون للأنابيب البلاستيكية مجموعة شاملة من توصيلات الصرف PVC-U المطابقة لمعيار BS EN 1329-1:2014، الذي يحل محل المعايير البريطانية القديمة BS 5255 و BS 4514. هذه التوصيلات مصممة لتطبيقات تصريف التربة والنفايات الأرضية في المباني السكنية والتجارية والصناعية.`,
  
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
    { label: 'BS EN 1329-1:2014 Drainage Fittings Catalogue (PDF)', href: '/pdfs/UPVC%20DRAINAGE%20FITTING%20BS%20EN%201329-1%202014%20-%20SUPERSEDED%20BS%205255%20%26%20BS%204514.pdf' },
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
  
  overview: `Crown Plastic Pipes manufactures a complete range of PVC-U drainage fittings conforming to BS EN 1401, which supersedes the British standards BS 4660 and BS 5481. These heavy-duty fittings are specifically designed for underground sewerage and stormwater drainage applications. The orange colour provides easy identification for below-ground installations, distinguishing them from above-ground systems.`,
  overviewAr: `تصنع كراون للأنابيب البلاستيكية مجموعة كاملة من توصيلات الصرف PVC-U المطابقة لمعيار BS EN 1401، الذي يحل محل المعايير البريطانية BS 4660 و BS 5481. هذه التوصيلات للخدمة الشاقة مصممة خصيصاً لتطبيقات الصرف الصحي ومياه الأمطار تحت الأرض.`,
  
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
    { label: 'BS EN 1401 Drainage Fittings Catalogue (PDF)', href: '/pdfs/UPVC%20DRAINAGE%20FITTINGS%20BS%20EN%201401%20-%20SUPERSEDED%20BS%204660%20%26%20BS%205481.pdf' },
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
};

