/**
 * PVC Pressure Pipes & Fittings - Product Detail Configurations
 * 
 * This file contains the detailed product data for the three PVC Pressure standards:
 * - DIN 8063
 * - BS EN 1452:23 / BS 4346 (PN 15)
 * - ASTM D 2466 SCH-40
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 * TODO: The pipe tables (pipesTables) and fittings (fittings) arrays below
 * need to be populated with real data extracted from the PDF catalogues:
 * 
 * 1. UPVC-PRESSURE-FITTINGS-DIN-8063.pdf
 * 2. UPVC-PRESSURE-FITTINGS-BS-EN-14523-BS-4346-PN-15.pdf
 * 3. UPVC-PRESSURE-FITTINGS-ASTM-D-2466-SCH-40.pdf
 * 
 * For each fitting, extract:
 * - code (part number like "8481")
 * - name (full fitting name)
 * - family (moulded, fabricated, brass-insert, solvent-cement, other)
 * - image path (place images in /public/images/fittings/)
 * - sizes array with sizeMm and sizeInch values
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type ProductDetailConfig, type Fitting, type FittingSpecTable } from '@/types/productDetail';

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER: Normalise header keys
// ═══════════════════════════════════════════════════════════════════════════════

function normaliseKey(header: string): string {
  return header
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .replace(/-+/g, '-');
}

// ═══════════════════════════════════════════════════════════════════════════════
// DIN 8063 FITTINGS DATA
// Extracted from PDF JSON - DO NOT modify strings/numbers
// ═══════════════════════════════════════════════════════════════════════════════

const din8063Fittings: Fitting[] = [
  // ELBOW 90°
  {
    id: 'elbow-90',
    code: undefined,
    name: 'ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/elbow-90.jpg',
    sizes: [
      { sizeMm: '20' },
      { sizeMm: '25' },
      { sizeMm: '32' },
      { sizeMm: '40' },
      { sizeMm: '50' },
      { sizeMm: '63' },
      { sizeMm: '75' },
      { sizeMm: '90' },
      { sizeMm: '110' },
      { sizeMm: '160' },
      { sizeMm: '200' },
    ],
    table: {
      id: 'elbow-90',
      title: 'ELBOW 90°',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '20', d: '20', l: '16.5', pn: '16' },
        { nominal_size_mm: '25', d: '25', l: '19.5', pn: '16' },
        { nominal_size_mm: '32', d: '32', l: '22.5', pn: '16' },
        { nominal_size_mm: '40', d: '40', l: '26.5', pn: '16' },
        { nominal_size_mm: '50', d: '50', l: '31.5', pn: '16' },
        { nominal_size_mm: '63', d: '63', l: '38.5', pn: '16' },
        { nominal_size_mm: '75', d: '75', l: '44.5', pn: '16' },
        { nominal_size_mm: '90', d: '90', l: '51.5', pn: '16' },
        { nominal_size_mm: '110', d: '110', l: '61.5', pn: '16' },
        { nominal_size_mm: '160', d: '160', l: '86.5', pn: '16' },
        { nominal_size_mm: '200', d: '200', l: '106.5', pn: '10' },
      ],
    },
  },
  // ELBOW 45°
  {
    id: 'elbow-45',
    code: undefined,
    name: 'ELBOW 45°',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/elbow-45.jpg',
    sizes: [
      { sizeMm: '20' },
      { sizeMm: '25' },
      { sizeMm: '32' },
      { sizeMm: '40' },
      { sizeMm: '50' },
      { sizeMm: '63' },
      { sizeMm: '75' },
      { sizeMm: '90' },
      { sizeMm: '110' },
      { sizeMm: '160' },
      { sizeMm: '200' },
    ],
    table: {
      id: 'elbow-45',
      title: 'ELBOW 45°',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'l_pn', label: 'L PN' },
      ],
      rows: [
        { nominal_size_mm: '20', d: '20', l_pn: '16.5 16' },
        { nominal_size_mm: '25', d: '25', l_pn: '19.5 16' },
        { nominal_size_mm: '32', d: '32', l_pn: '22.5 16' },
        { nominal_size_mm: '40', d: '40', l_pn: '26.5 16' },
        { nominal_size_mm: '50', d: '50', l_pn: '31.5 16' },
        { nominal_size_mm: '63', d: '63', l_pn: '38.5 16' },
        { nominal_size_mm: '75', d: '75', l_pn: '44.5 16' },
        { nominal_size_mm: '90', d: '90', l_pn: '51.5 16' },
        { nominal_size_mm: '110', d: '110', l_pn: '61.5 16' },
        { nominal_size_mm: '160', d: '160', l_pn: '86.5 16' },
        { nominal_size_mm: '200', d: '200', l_pn: '106.5 10' },
      ],
    },
  },
  // FEMALE ELBOW 90°
  {
    id: 'female-elbow-90',
    code: undefined,
    name: 'FEMALE ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/female-elbow-90.jpg',
    sizes: [
      { sizeMm: '20\\times\\frac{1}{2}"' },
      { sizeMm: '25\\times\\frac{3}{4}^{\\prime\\prime}' },
      { sizeMm: '32\\times1"' },
      { sizeMm: '40\\times1\\frac{1}{4}^{\\prime\\prime}' },
      { sizeMm: '50\\times1^{1/2}"' },
      { sizeMm: '63\\times2"' },
    ],
    table: {
      id: 'female-elbow-90',
      title: 'FEMALE ELBOW 90°',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'g_l', label: 'G L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '20\\times\\frac{1}{2}"', d: '20', g_l: '\\frac{1}{2}^{\\prime\\prime} 16.5', pn: '16' },
        { nominal_size_mm: '25\\times\\frac{3}{4}^{\\prime\\prime}', d: '25', g_l: '\\frac{3}{4}^{\\prime\\prime} 19.5', pn: '16' },
        { nominal_size_mm: '32\\times1"', d: '32', g_l: '1^{\\prime\\prime} 22.5', pn: '16' },
        { nominal_size_mm: '40\\times1\\frac{1}{4}^{\\prime\\prime}', d: '40', g_l: '1\\frac{1}{4}^{\\prime\\prime} 26.5', pn: '16' },
        { nominal_size_mm: '50\\times1^{1/2}"', d: '50', g_l: '1^{1/2}" 31.5', pn: '16' },
        { nominal_size_mm: '63\\times2"', d: '63', g_l: '2" 38.5', pn: '16' },
      ],
    },
  },
  // SOCKET/COUPLER
  {
    id: 'socket-coupler',
    code: undefined,
    name: 'SOCKET/COUPLER',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/socket-coupler.jpg',
    sizes: [
      { sizeMm: '20' },
      { sizeMm: '25' },
      { sizeMm: '32' },
      { sizeMm: '40' },
      { sizeMm: '50' },
      { sizeMm: '63' },
      { sizeMm: '75' },
      { sizeMm: '90' },
      { sizeMm: '110' },
      { sizeMm: '160' },
      { sizeMm: '200' },
    ],
    table: {
      id: 'socket-coupler',
      title: 'SOCKET/COUPLER',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '20', d: '20', l: '16.5', pn: '16' },
        { nominal_size_mm: '25', d: '25', l: '19.5', pn: '16' },
        { nominal_size_mm: '32', d: '32', l: '22.5', pn: '16' },
        { nominal_size_mm: '40', d: '40', l: '26.5', pn: '16' },
        { nominal_size_mm: '50', d: '50', l: '31.5', pn: '16' },
        { nominal_size_mm: '63', d: '63', l: '38.5', pn: '16' },
        { nominal_size_mm: '75', d: '75', l: '44.5', pn: '16' },
        { nominal_size_mm: '90', d: '90', l: '51.5', pn: '16' },
        { nominal_size_mm: '110', d: '110', l: '61.5', pn: '16' },
        { nominal_size_mm: '160', d: '160', l: '86.5', pn: '16' },
        { nominal_size_mm: '200', d: '200', l: '106.5', pn: '10' },
      ],
    },
  },
  // REDUCER BUSH/SOCKET
  {
    id: 'reducer-bush-socket',
    code: undefined,
    name: 'REDUCER BUSH/SOCKET',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/reducer-bush-socket.jpg',
    sizes: [
      { sizeMm: '25 X 20' },
      { sizeMm: '32 X 20' },
      { sizeMm: '32 X 25' },
      { sizeMm: '40 X 20' },
      { sizeMm: '40 X 25' },
      { sizeMm: '40 X 32' },
      { sizeMm: '50 X 20' },
      { sizeMm: '50 X 25' },
      { sizeMm: '50 X 32' },
      { sizeMm: '50 X 40' },
      { sizeMm: '63 X 25' },
      { sizeMm: '63 X 32' },
      { sizeMm: '63 X 40' },
      { sizeMm: '63 X 50' },
      { sizeMm: '75 X 50' },
      { sizeMm: '75 X 63' },
      { sizeMm: '90 X 63' },
      { sizeMm: '90 X 75' },
      { sizeMm: '110 X 63' },
      { sizeMm: '110 X 75' },
      { sizeMm: '110 X 90' },
      { sizeMm: '160 X 90' },
      { sizeMm: '160 X 110' },
    ],
    table: {
      id: 'reducer-bush-socket',
      title: 'REDUCER BUSH/SOCKET',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd_upper', label: 'D' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '25 X 20', d_upper: '25', d: '20', l: '16.5', pn: '16' },
        { nominal_size_mm: '32 X 20', d_upper: '32', d: '20', l: '16.5', pn: '16' },
        { nominal_size_mm: '32 X 25', d_upper: '32', d: '25', l: '19.5', pn: '16' },
        { nominal_size_mm: '40 X 20', d_upper: '40', d: '20', l: '16.5', pn: '16' },
        { nominal_size_mm: '40 X 25', d_upper: '40', d: '25', l: '19.5', pn: '16' },
        { nominal_size_mm: '40 X 32', d_upper: '40', d: '32', l: '22.5', pn: '16' },
        { nominal_size_mm: '50 X 20', d_upper: '50', d: '20', l: '16.5', pn: '16' },
        { nominal_size_mm: '50 X 25', d_upper: '50', d: '25', l: '19.5', pn: '16' },
        { nominal_size_mm: '50 X 32', d_upper: '50', d: '32', l: '22.5', pn: '16' },
        { nominal_size_mm: '50 X 40', d_upper: '50', d: '40', l: '26.5', pn: '16' },
        { nominal_size_mm: '63 X 25', d_upper: '63', d: '25', l: '19.5', pn: '16' },
        { nominal_size_mm: '63 X 32', d_upper: '63', d: '32', l: '22.5', pn: '16' },
        { nominal_size_mm: '63 X 40', d_upper: '63', d: '40', l: '26.5', pn: '16' },
        { nominal_size_mm: '63 X 50', d_upper: '63', d: '50', l: '31.5', pn: '16' },
        { nominal_size_mm: '75 X 50', d_upper: '75', d: '50', l: '31.5', pn: '16' },
        { nominal_size_mm: '75 X 63', d_upper: '75', d: '63', l: '38.5', pn: '16' },
        { nominal_size_mm: '90 X 63', d_upper: '90', d: '63', l: '38.5', pn: '16' },
        { nominal_size_mm: '90 X 75', d_upper: '90', d: '75', l: '44.5', pn: '16' },
        { nominal_size_mm: '110 X 63', d_upper: '110', d: '63', l: '38.5', pn: '16' },
        { nominal_size_mm: '110 X 75', d_upper: '110', d: '75', l: '44.5', pn: '16' },
        { nominal_size_mm: '110 X 90', d_upper: '110', d: '90', l: '51.5', pn: '16' },
        { nominal_size_mm: '160 X 90', d_upper: '160', d: '90', l: '51.5', pn: '16' },
        { nominal_size_mm: '160 X 110', d_upper: '160', d: '110', l: '61.5', pn: '16' },
      ],
    },
  },
  // MALE THREADED ADAPTOR/SOCKET/ NIPPLE SOCKET
  {
    id: 'male-threaded-adaptor-socket-nipple-socket',
    code: undefined,
    name: 'MALE THREADED ADAPTOR/SOCKET/ NIPPLE SOCKET',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/male-threaded-adaptor-socket-nipple-socket.jpg',
    sizes: [
      { sizeMm: '20\\times\\frac{1}{2}^{\\prime\\prime}' },
      { sizeMm: '25\\times\\frac{3}{4}^{\\prime\\prime}' },
      { sizeMm: '32\\times1^{\\prime\\prime}' },
      { sizeMm: '40\\times1\\frac{1}{4}^{\\prime\\prime}' },
      { sizeMm: '50\\times1^{1/2}^{\\prime\\prime}' },
      { sizeMm: '63\\times2^{\\prime\\prime}' },
      { sizeMm: '75\\times2^{1}/2^{\\prime\\prime}' },
      { sizeMm: '90\\times3"' },
      { sizeMm: '110\\times4^{\\prime\\prime}' },
    ],
    table: {
      id: 'male-threaded-adaptor-socket-nipple-socket',
      title: 'MALE THREADED ADAPTOR/SOCKET/ NIPPLE SOCKET',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'g', label: 'G' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '20\\times\\frac{1}{2}^{\\prime\\prime}', d: '20', g: '\\frac{1}{2}^{\\prime\\prime}', l: '16.5', pn: '16' },
        { nominal_size_mm: '25\\times\\frac{3}{4}^{\\prime\\prime}', d: '25', g: '\\frac{3}{4}^{\\prime\\prime}', l: '19.5', pn: '16' },
        { nominal_size_mm: '32\\times1^{\\prime\\prime}', d: '32', g: '1^{\\prime\\prime}', l: '22.5', pn: '16' },
        { nominal_size_mm: '40\\times1\\frac{1}{4}^{\\prime\\prime}', d: '40', g: '1\\frac{1}{4}^{\\prime\\prime}', l: '26.5', pn: '16' },
        { nominal_size_mm: '50\\times1^{1/2}^{\\prime\\prime}', d: '50', g: '1^{1}/\\_2^{\\prime\\prime}', l: '31.5', pn: '16' },
        { nominal_size_mm: '63\\times2^{\\prime\\prime}', d: '63', g: '2^{\\prime\\prime}', l: '38.5', pn: '16' },
        { nominal_size_mm: '75\\times2^{1}/2^{\\prime\\prime}', d: '75', g: '2\\frac{1}{2}^{\\prime\\prime}', l: '44.5', pn: '16' },
        { nominal_size_mm: '90\\times3"', d: '90', g: '3^{\\prime\\prime}', l: '51.5', pn: '16' },
        { nominal_size_mm: '110\\times4^{\\prime\\prime}', d: '110', g: '4^{\\prime\\prime}', l: '61.5', pn: '16' },
      ],
    },
  },
  // FEMALE THREADED ADAPTOR/SOCKET G
  {
    id: 'female-threaded-adaptor-socket-g',
    code: undefined,
    name: 'FEMALE THREADED ADAPTOR/SOCKET G',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/female-threaded-adaptor-socket-g.jpg',
    sizes: [
      { sizeMm: '20\\times\\frac{1}{2}^{\\prime\\prime}' },
      { sizeMm: '25\\times\\frac{3}{4}^{\\prime\\prime}' },
      { sizeMm: '32\\times1^{\\prime\\prime}' },
      { sizeMm: '40\\times1^{1/4}^{\\prime\\prime}' },
      { sizeMm: '50\\times1^{1/2}^{\\prime\\prime}' },
      { sizeMm: '63\\times2^{\\prime\\prime}' },
      { sizeMm: '75\\times2\\frac{1}{2}^{\\prime\\prime}' },
      { sizeMm: '90\\times3"' },
      { sizeMm: '110\\times4^{\\prime\\prime}' },
    ],
    table: {
      id: 'female-threaded-adaptor-socket-g',
      title: 'FEMALE THREADED ADAPTOR/SOCKET G',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'g', label: 'G' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '20\\times\\frac{1}{2}^{\\prime\\prime}', d: '20', g: '\\frac{1}{2}^{\\prime\\prime}', l: '16.5', pn: '16' },
        { nominal_size_mm: '25\\times\\frac{3}{4}^{\\prime\\prime}', d: '25', g: '\\frac{3}{4}^{\\prime\\prime}', l: '19.5', pn: '16' },
        { nominal_size_mm: '32\\times1^{\\prime\\prime}', d: '32', g: '1^{\\prime\\prime}', l: '22.5', pn: '16' },
        { nominal_size_mm: '40\\times1^{1/4}^{\\prime\\prime}', d: '40', g: '1^{1/4}^{\\prime\\prime}', l: '26.5', pn: '16' },
        { nominal_size_mm: '50\\times1^{1/2}^{\\prime\\prime}', d: '50', g: '1^{1}/{2}^{\\prime}', l: '31.5', pn: '16' },
        { nominal_size_mm: '63\\times2^{\\prime\\prime}', d: '63', g: '2^{\\prime\\prime}', l: '38.5', pn: '16' },
        { nominal_size_mm: '75\\times2\\frac{1}{2}^{\\prime\\prime}', d: '75', g: '2\\frac{1}{2}^{\\prime\\prime}', l: '44.5', pn: '16' },
        { nominal_size_mm: '90\\times3"', d: '90', g: '3^{\\prime\\prime}', l: '51.5', pn: '16' },
        { nominal_size_mm: '110\\times4^{\\prime\\prime}', d: '110', g: '4^{\\prime\\prime}', l: '61.5', pn: '16' },
      ],
    },
  },
  // EQUAL TEE
  {
    id: 'equal-tee',
    code: undefined,
    name: 'EQUAL TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/equal-tee.jpg',
    sizes: [
      { sizeMm: '20' },
      { sizeMm: '25' },
      { sizeMm: '32' },
      { sizeMm: '40' },
      { sizeMm: '50' },
      { sizeMm: '63' },
      { sizeMm: '75' },
      { sizeMm: '90' },
      { sizeMm: '110' },
      { sizeMm: '160' },
    ],
    table: {
      id: 'equal-tee',
      title: 'EQUAL TEE',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '20', d: '20', l: '16.5', pn: '16' },
        { nominal_size_mm: '25', d: '25', l: '19.5', pn: '16' },
        { nominal_size_mm: '32', d: '32', l: '22.5', pn: '16' },
        { nominal_size_mm: '40', d: '40', l: '26.5', pn: '16' },
        { nominal_size_mm: '50', d: '50', l: '31.5', pn: '16' },
        { nominal_size_mm: '63', d: '63', l: '38.5', pn: '16' },
        { nominal_size_mm: '75', d: '75', l: '44.5', pn: '16' },
        { nominal_size_mm: '90', d: '90', l: '51.5', pn: '16' },
        { nominal_size_mm: '110', d: '110', l: '61.5', pn: '16' },
        { nominal_size_mm: '160', d: '160', l: '86.5', pn: '16' },
      ],
    },
  },
  // FEMALE THREADED TEE
  {
    id: 'female-threaded-tee',
    code: undefined,
    name: 'FEMALE THREADED TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/female-threaded-tee.jpg',
    sizes: [
      { sizeMm: '20 X 2 X 20' },
      { sizeMm: '25\\times\\frac{1}{2}\\times25' },
      { sizeMm: '25 X 4 X 25' },
      { sizeMm: '32\\times\\frac{1}{2}\\times32' },
      { sizeMm: '32 X 4 X 32' },
      { sizeMm: '32 X 1 X 32' },
      { sizeMm: '40\\times1\\frac{1}{4}\\times40' },
      { sizeMm: '50\\times1\\frac{1}{2}\\times50' },
      { sizeMm: '63\\times2\\times63' },
      { sizeMm: '75\\times2\\frac{1}{2}\\times75' },
      { sizeMm: '90 X 3 X 90' },
    ],
    table: {
      id: 'female-threaded-tee',
      title: 'FEMALE THREADED TEE',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'g_l', label: 'G L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '20 X 2 X 20', d: '20', g_l: '\\frac{1}{2}^{\\prime\\prime} 16.5', pn: '16' },
        { nominal_size_mm: '25\\times\\frac{1}{2}\\times25', d: '25', g_l: '\\frac{1}{2}^{\\prime\\prime} 19.5', pn: '16' },
        { nominal_size_mm: '25 X 4 X 25', d: '25', g_l: '\\frac{3}{4}^{\\prime\\prime} 19.5', pn: '16' },
        { nominal_size_mm: '32\\times\\frac{1}{2}\\times32', d: '32', g_l: '\\frac{1}{2}^{\\prime\\prime} 22.5', pn: '16' },
        { nominal_size_mm: '32 X 4 X 32', d: '32', g_l: '\\frac{3}{4}^{\\prime} 22.5', pn: '16' },
        { nominal_size_mm: '32 X 1 X 32', d: '32', g_l: '1^{\\prime\\prime} 22.5', pn: '16' },
        { nominal_size_mm: '40\\times1\\frac{1}{4}\\times40', d: '40', g_l: '1\\frac{1}{4}^{\\prime\\prime} 26.5', pn: '16' },
        { nominal_size_mm: '50\\times1\\frac{1}{2}\\times50', d: '50', g_l: '1^{1}/\\_2^{\\prime\\prime} 31.5', pn: '16' },
        { nominal_size_mm: '63\\times2\\times63', d: '63', g_l: '2^{\\prime\\prime} 38.5', pn: '16' },
        { nominal_size_mm: '75\\times2\\frac{1}{2}\\times75', d: '75', g_l: '2\\frac{1}{2}^{\\prime\\prime} 44.5', pn: '16' },
        { nominal_size_mm: '90 X 3 X 90', d: '90', g_l: '3^{\\prime\\prime} 51.5', pn: '16' },
      ],
    },
  },
  // REDUCING TEE
  {
    id: 'reducing-tee',
    code: undefined,
    name: 'REDUCING TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/reducing-tee.jpg',
    sizes: [
      { sizeMm: '25 X 20 X 25' },
      { sizeMm: '32 X 20 X 32' },
      { sizeMm: '32 X 25 X 32' },
      { sizeMm: '40 X 20 X 40' },
      { sizeMm: '40 X 25 X 40' },
      { sizeMm: '40 X 32 X 40' },
      { sizeMm: '50 X 20 X 50' },
      { sizeMm: '50 X 25 X 50' },
      { sizeMm: '50 X 32 X 50' },
      { sizeMm: '50 X 40 X 50' },
      { sizeMm: '63 X 25 X 63' },
      { sizeMm: '63 X 32 X 63' },
      { sizeMm: '63 X 40 X 63' },
      { sizeMm: '63 X 50 X 63' },
      { sizeMm: '75 X 40 X 75' },
      { sizeMm: '75 X 50 X 75' },
      { sizeMm: '75 X 63 X 75' },
      { sizeMm: '90 X 63 X 90' },
      { sizeMm: '90 X 75 X 90' },
      { sizeMm: '110\\times90\\times110' },
      { sizeMm: '160\\times110\\times160' },
    ],
    table: {
      id: 'reducing-tee',
      title: 'REDUCING TEE',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'd1_l_pn', label: 'd1 L PN' },
      ],
      rows: [
        { nominal_size_mm: '25 X 20 X 25', d: '25', d1_l_pn: '20 19.5 16' },
        { nominal_size_mm: '32 X 20 X 32', d: '32', d1_l_pn: '20 22.5 16' },
        { nominal_size_mm: '32 X 25 X 32', d: '32', d1_l_pn: '25 22.5 16' },
        { nominal_size_mm: '40 X 20 X 40', d: '40', d1_l_pn: '20 26.5 16' },
        { nominal_size_mm: '40 X 25 X 40', d: '40', d1_l_pn: '25 26.5 16' },
        { nominal_size_mm: '40 X 32 X 40', d: '40', d1_l_pn: '32 26.5 16' },
        { nominal_size_mm: '50 X 20 X 50', d: '50', d1_l_pn: '20 31.5 16' },
        { nominal_size_mm: '50 X 25 X 50', d: '50', d1_l_pn: '25 31.5 16' },
        { nominal_size_mm: '50 X 32 X 50', d: '50', d1_l_pn: '32 31.5 16' },
        { nominal_size_mm: '50 X 40 X 50', d: '50', d1_l_pn: '40 31.5 16' },
        { nominal_size_mm: '63 X 25 X 63', d: '63', d1_l_pn: '25 38.5 16' },
        { nominal_size_mm: '63 X 32 X 63', d: '63', d1_l_pn: '32 38.5 16' },
        { nominal_size_mm: '63 X 40 X 63', d: '63', d1_l_pn: '40 38.5 16' },
        { nominal_size_mm: '63 X 50 X 63', d: '63', d1_l_pn: '50 38.5 16' },
        { nominal_size_mm: '75 X 40 X 75', d: '75', d1_l_pn: '40 44.5 16' },
        { nominal_size_mm: '75 X 50 X 75', d: '75', d1_l_pn: '50 44.5 16' },
        { nominal_size_mm: '75 X 63 X 75', d: '75', d1_l_pn: '63 44.5 16' },
        { nominal_size_mm: '90 X 63 X 90', d: '90', d1_l_pn: '63 51.5 16' },
        { nominal_size_mm: '90 X 75 X 90', d: '90', d1_l_pn: '75 51.5 16' },
        { nominal_size_mm: '110\\times90\\times110', d: '110', d1_l_pn: '90 61.5 16' },
        { nominal_size_mm: '160\\times110\\times160', d: '110', d1_l_pn: '110 86.5 16' },
      ],
    },
  },
  // FEMALE REDUCER BUSH
  {
    id: 'female-reducer-bush',
    code: undefined,
    name: 'FEMALE REDUCER BUSH',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/female-reducer-bush.jpg',
    sizes: [
      { sizeMm: '25\\times\\frac{1}{2}"' },
      { sizeMm: '32\\times\\frac{1}{2}^{\\prime\\prime}' },
      { sizeMm: '32\\times\\frac{3}{4}^{\\prime\\prime}' },
      { sizeMm: '40\\times\\frac{1}{2}"' },
      { sizeMm: '50\\times\\frac{1}{2}"' },
    ],
    table: {
      id: 'female-reducer-bush',
      title: 'FEMALE REDUCER BUSH',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd_upper', label: 'D' },
        { key: 'g_l', label: 'G L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '25\\times\\frac{1}{2}"', d_upper: '25', g_l: '\\frac{1}{2}" 32.4', pn: '16' },
        { nominal_size_mm: '32\\times\\frac{1}{2}^{\\prime\\prime}', d_upper: '32', g_l: '\\frac{1}{2}" 35.6', pn: '16' },
        { nominal_size_mm: '32\\times\\frac{3}{4}^{\\prime\\prime}', d_upper: '32', g_l: '\\frac{3}{4}^{\\prime\\prime} 35.6', pn: '16' },
        { nominal_size_mm: '40\\times\\frac{1}{2}"', d_upper: '40', g_l: '\\frac{1}{2}" 40.0', pn: '16' },
        { nominal_size_mm: '50\\times\\frac{1}{2}"', d_upper: '50', g_l: '\\frac{1}{2}^{\\prime\\prime} 43.0', pn: '16' },
      ],
    },
  },
  // UNION
  {
    id: 'union',
    code: undefined,
    name: 'UNION',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/union.jpg',
    sizes: [
      { sizeMm: '20' },
      { sizeMm: '25' },
      { sizeMm: '32' },
      { sizeMm: '40' },
      { sizeMm: '50' },
      { sizeMm: '63' },
    ],
    table: {
      id: 'union',
      title: 'UNION',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '20', d: '20', l: '16.5', pn: '16' },
        { nominal_size_mm: '25', d: '25', l: '18.5', pn: '16' },
        { nominal_size_mm: '32', d: '32', l: '22.5', pn: '16' },
        { nominal_size_mm: '40', d: '40', l: '26.2', pn: '16' },
        { nominal_size_mm: '50', d: '50', l: '31.3', pn: '16' },
        { nominal_size_mm: '63', d: '63', l: '37.5', pn: '16' },
      ],
    },
  },
  // END CAP
  {
    id: 'end-cap',
    code: undefined,
    name: 'END CAP',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/din-8063/end-cap.jpg',
    sizes: [
      { sizeMm: '20' },
      { sizeMm: '25' },
      { sizeMm: '32' },
      { sizeMm: '40' },
      { sizeMm: '50' },
      { sizeMm: '63' },
      { sizeMm: '75' },
      { sizeMm: '90' },
      { sizeMm: '110' },
    ],
    table: {
      id: 'end-cap',
      title: 'END CAP',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '20', d: '20', l: '16.5', pn: '16' },
        { nominal_size_mm: '25', d: '25', l: '19.5', pn: '16' },
        { nominal_size_mm: '32', d: '32', l: '22.5', pn: '16' },
        { nominal_size_mm: '40', d: '40', l: '26.5', pn: '16' },
        { nominal_size_mm: '50', d: '50', l: '31.5', pn: '16' },
        { nominal_size_mm: '63', d: '63', l: '38.5', pn: '16' },
        { nominal_size_mm: '75', d: '75', l: '44.5', pn: '16' },
        { nominal_size_mm: '90', d: '90', l: '51.5', pn: '16' },
        { nominal_size_mm: '110', d: '110', l: '61.5', pn: '16' },
      ],
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// PVC PRESSURE DIN 8063
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcPressureDin8063: ProductDetailConfig = {
  slug: 'pvc-pressure-din-8063',
  categorySlug: 'upvc-pressure',
  
  title: 'PVC Pressure Pipes & Fittings DIN 8063',
  titleAr: 'أنابيب وتوصيلات الضغط PVC بمعيار DIN 8063',
  
  shortDescription: 'German standard PVC pressure pipes and fittings for potable water supply systems. Complete range of moulded, fabricated, and brass insert fittings.',
  shortDescriptionAr: 'أنابيب وتوصيلات الضغط PVC بالمعيار الألماني لأنظمة إمداد المياه الصالحة للشرب.',
  
  overview: 'Crown Plastic Pipes manufactures a comprehensive range of PVC-U pressure pipes and fittings conforming to DIN 8063 standards. These products are designed for potable water supply, irrigation systems, and industrial applications where reliability and longevity are paramount. Our DIN 8063 range includes solvent weld joints ensuring leak-free connections and long service life exceeding 50 years.',
  overviewAr: 'تصنع كراون للأنابيب البلاستيكية مجموعة شاملة من أنابيب وتوصيلات الضغط PVC-U المطابقة لمعايير DIN 8063.',
  
  features: [
    'Conforms to DIN 8063 standard',
    'Lead-free material for potable water safety',
    'Corrosion and chemical resistant',
    'Smooth internal surface for optimal flow',
    'UV stabilized compound',
    '50+ year expected service life',
    'Easy solvent cement jointing',
    'Complete range from 20mm to 400mm',
  ],
  featuresAr: [
    'مطابق لمعيار DIN 8063',
    'مادة خالية من الرصاص لسلامة مياه الشرب',
    'مقاوم للتآكل والمواد الكيميائية',
    'سطح داخلي أملس للتدفق الأمثل',
    'مركب مثبت ضد الأشعة فوق البنفسجية',
    'عمر خدمة متوقع أكثر من 50 سنة',
    'سهولة التوصيل بالإسمنت المذيب',
    'مجموعة كاملة من 20 مم إلى 400 مم',
  ],
  
  applications: [
    'Potable water distribution networks',
    'Agricultural irrigation systems',
    'Swimming pool installations',
    'Industrial water transport',
    'Chemical process plants',
    'Residential plumbing',
    'Commercial building services',
    'Water treatment facilities',
  ],
  applicationsAr: [
    'شبكات توزيع مياه الشرب',
    'أنظمة الري الزراعي',
    'تركيبات حمامات السباحة',
    'نقل المياه الصناعية',
    'مصانع العمليات الكيميائية',
    'السباكة السكنية',
    'خدمات المباني التجارية',
    'مرافق معالجة المياه',
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // TODO: Populate pipesTables from DIN 8063 catalogue
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'din-8063-pipes-pn10',
      title: 'PVC Pressure Pipes DIN 8063 - PN10',
      columns: [
        { key: 'od', label: 'OD (mm)', align: 'center' },
        { key: 'wallThickness', label: 'Wall Thickness (mm)', align: 'center' },
        { key: 'id', label: 'ID (mm)', align: 'center' },
        { key: 'length', label: 'Length (m)', align: 'center' },
      ],
      rows: [
        // TODO: Add pipe specification rows from catalogue
        // Example format:
        // { od: '20', wallThickness: '1.5', id: '17.0', length: '5' },
      ],
    },
    {
      id: 'din-8063-pipes-pn16',
      title: 'PVC Pressure Pipes DIN 8063 - PN16',
      columns: [
        { key: 'od', label: 'OD (mm)', align: 'center' },
        { key: 'wallThickness', label: 'Wall Thickness (mm)', align: 'center' },
        { key: 'id', label: 'ID (mm)', align: 'center' },
        { key: 'length', label: 'Length (m)', align: 'center' },
      ],
      rows: [
        // TODO: Add pipe specification rows from catalogue
      ],
    },
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // DIN 8063 Fittings - extracted from PDF JSON
  // ───────────────────────────────────────────────────────────────────────────
  fittings: din8063Fittings,
  
  downloads: [
    { label: 'DIN 8063 Catalogue (PDF)', href: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20DIN%208063_compressed.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Use solvent cement specifically designed for PVC-U',
      'Clean and degrease all surfaces before jointing',
      'Allow adequate curing time before pressure testing',
      'Support pipes at regular intervals as per guidelines',
      'Store pipes on flat surfaces away from direct sunlight',
    ],
    donts: [
      'Do not use pipes for compressed air or gas applications',
      'Do not expose to temperatures above 60°C',
      'Do not use incompatible solvents or adhesives',
      'Do not overtighten threaded connections',
      'Do not drag pipes across rough surfaces',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// BS EN 1452:3/BS 4346 (PN 15) FITTINGS DATA
// Extracted from PDF JSON - DO NOT modify strings/numbers
// ═══════════════════════════════════════════════════════════════════════════════

const bsEn1452Fittings: Fitting[] = [
  // ELBOW 90°
  {
    id: 'elbow-90',
    code: undefined,
    name: 'ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/elbow-90.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'elbow-90',
      title: 'ELBOW 90°',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '1/2"', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_mm: '3/4"', d: '26.67', l: '19.5', pn: '15' },
        { nominal_size_mm: '1"', d: '33.4', l: '22.5', pn: '15' },
        { nominal_size_mm: '1 1/4"', d: '42.16', l: '26.5', pn: '15' },
        { nominal_size_mm: '1 1/2"', d: '48.26', l: '31.5', pn: '15' },
        { nominal_size_mm: '2"', d: '60.33', l: '36.5', pn: '15' },
        { nominal_size_mm: '3"', d: '88.9', l: '51', pn: '15' },
        { nominal_size_mm: '4"', d: '114.3', l: '63.5', pn: '15' },
        { nominal_size_mm: '6"', d: '168.3', l: '91', pn: '15' },
      ],
    },
  },
  // ELBOW 45°
  {
    id: 'elbow-45',
    code: undefined,
    name: 'ELBOW 45°',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/elbow-45.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'elbow-45',
      title: 'ELBOW 45°',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '1/2"', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_mm: '3/4"', d: '26.67', l: '19.5', pn: '15' },
        { nominal_size_mm: '1"', d: '33.4', l: '22.5', pn: '15' },
        { nominal_size_mm: '1 1/4"', d: '42.16', l: '26.5', pn: '15' },
        { nominal_size_mm: '1 1/2"', d: '48.26', l: '31.5', pn: '15' },
        { nominal_size_mm: '2"', d: '60.33', l: '36.5', pn: '15' },
        { nominal_size_mm: '3"', d: '88.9', l: '51', pn: '15' },
        { nominal_size_mm: '4"', d: '114.3', l: '63.5', pn: '15' },
        { nominal_size_mm: '6"', d: '168.3', l: '91', pn: '15' },
      ],
    },
  },
  // FEMALE ELBOW 90°
  {
    id: 'female-elbow-90',
    code: undefined,
    name: 'FEMALE ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/female-elbow-90.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
    ],
    table: {
      id: 'female-elbow-90',
      title: 'FEMALE ELBOW 90°',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'g_l', label: 'G L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '1/2"', d: '21.34', g_l: '1/2" 16.5', pn: '15' },
        { nominal_size_mm: '3/4"', d: '26.67', g_l: '3/4" 19.5', pn: '15' },
        { nominal_size_mm: '1"', d: '33.4', g_l: '1" 22.5', pn: '15' },
        { nominal_size_mm: '1 1/4"', d: '42.16', g_l: '1 1/4" 26.5', pn: '15' },
        { nominal_size_mm: '1 1/2"', d: '48.26', g_l: '1 1/2" 31.5', pn: '15' },
        { nominal_size_mm: '2"', d: '60.33', g_l: '2" 36.5', pn: '15' },
      ],
    },
  },
  // SOCKET/COUPLER
  {
    id: 'socket-coupler',
    code: undefined,
    name: 'SOCKET/COUPLER',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/socket-coupler.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'socket-coupler',
      title: 'SOCKET/COUPLER',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '1/2"', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_mm: '3/4"', d: '26.67', l: '19.5', pn: '15' },
        { nominal_size_mm: '1"', d: '33.4', l: '22.5', pn: '15' },
        { nominal_size_mm: '1 1/4"', d: '42.16', l: '26.5', pn: '15' },
        { nominal_size_mm: '1 1/2"', d: '48.26', l: '31.5', pn: '15' },
        { nominal_size_mm: '2"', d: '60.33', l: '36.5', pn: '15' },
        { nominal_size_mm: '3"', d: '88.9', l: '51', pn: '15' },
        { nominal_size_mm: '4"', d: '114.3', l: '63.5', pn: '15' },
        { nominal_size_mm: '6"', d: '168.3', l: '91', pn: '15' },
      ],
    },
  },
  // REDUCER BUSH/SOCKET
  {
    id: 'reducer-bush-socket',
    code: undefined,
    name: 'REDUCER BUSH/SOCKET',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/reducer-bush-socket.jpg',
    sizes: [
      { sizeMm: '3/4"x1/2"' },
      { sizeMm: '1x1/2"' },
      { sizeMm: '1x3/4"' },
      { sizeMm: '1 1/4"x1/2"' },
      { sizeMm: '1 1/4"x3/4"' },
      { sizeMm: '1 1/4"x1"' },
      { sizeMm: '1 1/2"x1/2"' },
      { sizeMm: '1 1/2"x3/4"' },
      { sizeMm: '1 1/2"x1"' },
      { sizeMm: '2x1/2"' },
    ],
    table: {
      id: 'reducer-bush-socket',
      title: 'REDUCER BUSH/SOCKET',
      columns: [
        { key: 'nominal_size_mm', label: 'NOMINAL SIZE (mm)' },
        { key: 'd_upper', label: 'D' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_mm: '3/4"x1/2"', d_upper: '26.67', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_mm: '1x1/2"', d_upper: '33.4', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_mm: '1x3/4"', d_upper: '33.4', d: '26.67', l: '19.5', pn: '15' },
        { nominal_size_mm: '1 1/4"x1/2"', d_upper: '42.16', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_mm: '1 1/4"x3/4"', d_upper: '42.16', d: '26.67', l: '19.5', pn: '15' },
        { nominal_size_mm: '1 1/4"x1"', d_upper: '42.16', d: '33.4', l: '22.5', pn: '15' },
        { nominal_size_mm: '1 1/2"x1/2"', d_upper: '48.26', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_mm: '1 1/2"x3/4"', d_upper: '48.26', d: '26.67', l: '19.5', pn: '15' },
        { nominal_size_mm: '1 1/2"x1"', d_upper: '48.26', d: '33.4', l: '22.5', pn: '15' },
        { nominal_size_mm: '2x1/2"', d_upper: '60.33', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_mm: '2x3/4"', d_upper: '60.33', d: '26.67', l: '19.5', pn: '15' },
        { nominal_size_mm: '2x1"', d_upper: '60.33', d: '33.4', l: '22.5', pn: '15' },
        { nominal_size_mm: '2x1 1/2"', d_upper: '60.33', d: '48.26', l: '26.5', pn: '15' },
        { nominal_size_mm: '3x1 1/2"', d_upper: '88.9', d: '48.26', l: '26.5', pn: '15' },
        { nominal_size_mm: '3x2"', d_upper: '88.9', d: '60.33', l: '36.5', pn: '15' },
        { nominal_size_mm: '4x2"', d_upper: '114.3', d: '60.33', l: '36.5', pn: '15' },
        { nominal_size_mm: '4x3"', d_upper: '114.3', d: '88.9', l: '51', pn: '15' },
        { nominal_size_mm: '6x3"', d_upper: '168.3', d: '88.9', l: '60.5', pn: '15' },
        { nominal_size_mm: '6x4"', d_upper: '168.3', d: '114.3', l: '63.5', pn: '15' },
      ],
    },
  },
  // 6. MALE THREADED ADAPTOR /SOCKET/NIPPLE SOCKET
  {
    id: 'male-threaded-adaptor-socket-nipple-socket',
    code: undefined,
    name: 'MALE THREADED ADAPTOR /SOCKET/NIPPLE SOCKET',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/male-threaded-adaptor-socket-nipple-socket.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'male-threaded-adaptor-socket-nipple-socket',
      title: 'MALE THREADED ADAPTOR /SOCKET/NIPPLE SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'g_l', label: 'G L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', d: '21.34', g_l: '1/2" 16.5', pn: '15' },
        { nominal_size_inch: '3/4"', d: '26.67', g_l: '3/4" 19.5', pn: '15' },
        { nominal_size_inch: '1"', d: '33.4', g_l: '1" 22.5', pn: '15' },
        { nominal_size_inch: '1 1/4"', d: '42.16', g_l: '1 1/4" 26.5', pn: '15' },
        { nominal_size_inch: '1 1/2"', d: '48.26', g_l: '1 1/2" 31.5', pn: '15' },
        { nominal_size_inch: '2"', d: '60.33', g_l: '2" 36.5', pn: '15' },
        { nominal_size_inch: '3"', d: '88.9', g_l: '3" 51', pn: '15' },
        { nominal_size_inch: '4"', d: '114.3', g_l: '4" 63.5', pn: '15' },
        { nominal_size_inch: '6"', d: '168.3', g_l: '6" 91', pn: '15' },
      ],
    },
  },
  // 7. FEMALE THREADED ADAPTOR/SOCKET
  {
    id: 'female-threaded-adaptor-socket',
    code: undefined,
    name: 'FEMALE THREADED ADAPTOR/SOCKET',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/female-threaded-adaptor-socket.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'female-threaded-adaptor-socket',
      title: 'FEMALE THREADED ADAPTOR/SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'g_l', label: 'G L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', d: '21.34', g_l: '1/2" 16.5', pn: '15' },
        { nominal_size_inch: '3/4"', d: '26.67', g_l: '3/4" 19.5', pn: '15' },
        { nominal_size_inch: '1"', d: '33.4', g_l: '1" 22.5', pn: '15' },
        { nominal_size_inch: '1 1/4"', d: '42.16', g_l: '1 1/4" 26.5', pn: '15' },
        { nominal_size_inch: '1 1/2"', d: '48.26', g_l: '1 1/2" 31.5', pn: '15' },
        { nominal_size_inch: '2"', d: '60.33', g_l: '2" 36.5', pn: '15' },
        { nominal_size_inch: '3"', d: '88.9', g_l: '3" 51', pn: '15' },
        { nominal_size_inch: '4"', d: '114.3', g_l: '4" 63.5', pn: '15' },
        { nominal_size_inch: '6"', d: '168.3', g_l: '6" 91', pn: null },
      ],
    },
  },
  // 8. EQUAL TEE
  {
    id: 'equal-tee',
    code: undefined,
    name: 'EQUAL TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/equal-tee.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'equal-tee',
      title: 'EQUAL TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'dimensions_l', label: 'DIMENSIONS L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', d: '21.34', dimensions_l: '16.5', pn: '15' },
        { nominal_size_inch: '3/4"', d: '26.67', dimensions_l: '19.5', pn: '15' },
        { nominal_size_inch: '1"', d: '33.4', dimensions_l: '22.5', pn: '15' },
        { nominal_size_inch: '1 1/4"', d: '42.16', dimensions_l: '26.5', pn: '15' },
        { nominal_size_inch: '1 1/2"', d: '48.26', dimensions_l: '31.5', pn: '15' },
        { nominal_size_inch: '2"', d: '60.33', dimensions_l: '36.5', pn: '15' },
        { nominal_size_inch: '3"', d: '88.9', dimensions_l: '51', pn: '15' },
        { nominal_size_inch: '4"', d: '114.3', dimensions_l: '63.5', pn: '15' },
        { nominal_size_inch: '6"', d: '168.3', dimensions_l: '91', pn: '15' },
      ],
    },
  },
  // 9. REDUCING TEE
  {
    id: 'reducing-tee',
    code: undefined,
    name: 'REDUCING TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/reducing-tee.jpg',
    sizes: [
      { sizeMm: '3/4"x1/2"x3/4"' },
      { sizeMm: '1x1/2"x1"' },
      { sizeMm: '1x3/4"x1"' },
      { sizeMm: '1 1/2"x1/2"x1 1/2"' },
      { sizeMm: '1 1/2"x3/4"x1 1/2"' },
      { sizeMm: '1 1/2"x1x1 1/2"' },
      { sizeMm: '2x1/2"x2"' },
      { sizeMm: '2x3/4"x2"' },
      { sizeMm: '2x1x2"' },
      { sizeMm: '2x1 1/2"x2"' },
    ],
    table: {
      id: 'reducing-tee',
      title: 'REDUCING TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'di_l', label: 'di L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '3/4"x1/2"x3/4"', d: '26.67', di_l: '21.34 19.5', pn: '15' },
        { nominal_size_inch: '1x1/2"x1"', d: '33.4', di_l: '21.34 22.5', pn: '15' },
        { nominal_size_inch: '1x3/4"x1"', d: '33.4', di_l: '26.67 22.5', pn: '15' },
        { nominal_size_inch: '1 1/2"x1/2"x1 1/2"', d: '48.26', di_l: '21.34 31.5', pn: '15' },
        { nominal_size_inch: '1 1/2"x3/4"x1 1/2"', d: '48.26', di_l: '26.67 31.5', pn: '15' },
        { nominal_size_inch: '1 1/2"x1x1 1/2"', d: '48.26', di_l: '33.4 31.5', pn: '15' },
        { nominal_size_inch: '2x1/2"x2"', d: '60.33', di_l: '21.34 36.5', pn: '15' },
        { nominal_size_inch: '2x3/4"x2"', d: '60.33', di_l: '26.67 36.5', pn: '15' },
        { nominal_size_inch: '2x1x2"', d: '60.33', di_l: '33.4 36.5', pn: '15' },
        { nominal_size_inch: '2x1 1/2"x2"', d: '60.33', di_l: '48.26 36.5', pn: '15' },
      ],
    },
  },
  // 10. FEMALE THREADED REDUCING TEE
  {
    id: 'female-threaded-reducing-tee',
    code: undefined,
    name: 'FEMALE THREADED REDUCING TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/female-threaded-reducing-tee.jpg',
    sizes: [
      { sizeMm: '3/4"x1/2"x3/4"' },
      { sizeMm: '1x1/2"x1"' },
      { sizeMm: '1x3/4"x1"' },
      { sizeMm: '1 1/2"x1/2"x1 1/2"' },
      { sizeMm: '1 1/2"x3/4"x1 1/2"' },
      { sizeMm: '1 1/2"x1x1 1/2"' },
      { sizeMm: '2x1/2"x2"' },
      { sizeMm: '2x3/4"x2"' },
      { sizeMm: '2x1x2"' },
    ],
    table: {
      id: 'female-threaded-reducing-tee',
      title: 'FEMALE THREADED REDUCING TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'g_l', label: 'G L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '3/4"x1/2"x3/4"', d: '21.34', g_l: '1/2" 19.5', pn: '15' },
        { nominal_size_inch: '1x1/2"x1"', d: '33.4', g_l: '1/2" 22.5', pn: '15' },
        { nominal_size_inch: '1x3/4"x1"', d: '33.4', g_l: '3/4" 22.5', pn: '15' },
        { nominal_size_inch: '1 1/2"x1/2"x1 1/2"', d: '48.26', g_l: '1½" 31.5', pn: '15' },
        { nominal_size_inch: '1 1/2"x3/4"x1 1/2"', d: '48.26', g_l: '3/4" 31.5', pn: '15' },
        { nominal_size_inch: '1 1/2"x1x1 1/2"', d: '48.26', g_l: '1" 31.5', pn: '15' },
        { nominal_size_inch: '2x1/2"x2"', d: '60.33', g_l: '1/2" 36.5', pn: '15' },
        { nominal_size_inch: '2x3/4"x2"', d: '60.33', g_l: '3/4" 36.5', pn: '15' },
        { nominal_size_inch: '2x1x2"', d: '60.33', g_l: '1" 36.5', pn: '15' },
      ],
    },
  },
  // 11. FEMALE THREADED EQUAL TEE
  {
    id: 'female-threaded-equal-tee',
    code: undefined,
    name: 'FEMALE THREADED EQUAL TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/female-threaded-equal-tee.jpg',
    sizes: [
      { sizeMm: '1/2"x1/2"x1/2"' },
      { sizeMm: '3/4"x3/4"x3/4"' },
      { sizeMm: '1x1x1"' },
      { sizeMm: '1 1/4"x1 1/4"x1 1/4"' },
      { sizeMm: '1 1/2"x1 1/2"x1 1/2"' },
      { sizeMm: '2x2x2"' },
    ],
    table: {
      id: 'female-threaded-equal-tee',
      title: 'FEMALE THREADED EQUAL TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'g', label: 'G' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '1/2"x1/2"x1/2"', d: '21.34', g: '1/2"', l: '16.5', pn: '15' },
        { nominal_size_inch: '3/4"x3/4"x3/4"', d: '26.67', g: '3/4"', l: '19.5', pn: '15' },
        { nominal_size_inch: '1x1x1"', d: '33.4', g: '1"', l: '22.5', pn: '15' },
        { nominal_size_inch: '1 1/4"x1 1/4"x1 1/4"', d: '42.16', g: '1 1/4"', l: '26.5', pn: '15' },
        { nominal_size_inch: '1 1/2"x1 1/2"x1 1/2"', d: '48.26', g: '1 1/2"', l: '31.5', pn: '15' },
        { nominal_size_inch: '2x2x2"', d: '60.33', g: '2"X', l: '36.5', pn: '15' },
      ],
    },
  },
  // 12. FEMALE THREADED REDUCER BUSH
  {
    id: 'female-threaded-reducer-bush',
    code: undefined,
    name: 'FEMALE THREADED REDUCER BUSH',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/female-threaded-reducer-bush.jpg',
    sizes: [
      { sizeMm: '3/4"x1/2"' },
      { sizeMm: '1x1/2"' },
      { sizeMm: '1x3/4"' },
      { sizeMm: '1 1/2"x1/2"' },
      { sizeMm: '2x1/2"' },
    ],
    table: {
      id: 'female-threaded-reducer-bush',
      title: 'FEMALE THREADED REDUCER BUSH',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd_upper', label: 'D' },
        { key: 'g_l', label: 'G L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '3/4"x1/2"', d_upper: '21.34', g_l: '1/2" 32.4', pn: '15' },
        { nominal_size_inch: '1x1/2"', d_upper: '33.4', g_l: '1/2" 35.6', pn: '15' },
        { nominal_size_inch: '1x3/4"', d_upper: '33.4', g_l: '3/4" 35.6', pn: '15' },
        { nominal_size_inch: '1 1/2"x1/2"', d_upper: '48.26', g_l: '1/2" 43.0', pn: '15' },
        { nominal_size_inch: '2x1/2"', d_upper: '60.33', g_l: '1/2" 47.4', pn: '15' },
      ],
    },
  },
  // 13. UNION
  {
    id: 'union',
    code: undefined,
    name: 'UNION',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/union.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
    ],
    table: {
      id: 'union',
      title: 'UNION',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_inch: '3/4"', d: '26.67', l: '19.5', pn: '15' },
        { nominal_size_inch: '1"', d: '33.4', l: '22.5', pn: '15' },
        { nominal_size_inch: '1 1/2"', d: '48.26', l: '31.5', pn: '15' },
        { nominal_size_inch: '2"', d: '60.33', l: '36.5', pn: '15' },
      ],
    },
  },
  // 14. FLANGES WITH STUB
  {
    id: 'flanges-with-stub',
    code: undefined,
    name: 'FLANGES WITH STUB',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/flanges-with-stub.jpg',
    sizes: [
      { sizeMm: '2"' },
      { sizeMm: '2 1/2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'flanges-with-stub',
      title: 'FLANGES WITH STUB',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd1_d2', label: 'D1 D2' },
        { key: 'h', label: 'h' },
        { key: 'd3', label: 'D3' },
        { key: 'd4', label: 'D4' },
        { key: 'h_pn', label: 'H PN' },
      ],
      rows: [
        { nominal_size_inch: '2"', d1_d2: '92.5 120', h: '43.5', d3: '152.4', d4: '77.6', h_pn: '20.5 15' },
        { nominal_size_inch: '2 1/2"', d1_d2: '107.6 140', h: '49', d3: '177.6', d4: '92.6', h_pn: '24.8 15' },
        { nominal_size_inch: '3"', d1_d2: '120.6 152.5', h: '54.9', d3: '191.4', d4: '109.4', h_pn: '26.4 15' },
        { nominal_size_inch: '4"', d1_d2: '153.0 191', h: '64.8', d3: '229.7', d4: '134', h_pn: '28.5 15' },
        { nominal_size_inch: '6"', d1_d2: '207.5 241', h: '85', d3: '284', d4: '192.5', h_pn: '32 15' },
      ],
    },
  },
  // 15. HEX NIPPLE
  {
    id: 'hex-nipple',
    code: undefined,
    name: 'HEX NIPPLE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/hex-nipple.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
    ],
    table: {
      id: 'hex-nipple',
      title: 'HEX NIPPLE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'g', label: 'G' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', g: '1/2"', l: '16.5', pn: '15' },
        { nominal_size_inch: '3/4"', g: '3/4"', l: '19.5', pn: '15' },
        { nominal_size_inch: '1"', g: '1"', l: '22.5', pn: '15' },
        { nominal_size_inch: '1 1/2"', g: '1 1/2"', l: '31.5', pn: '15' },
        { nominal_size_inch: '2"', g: '2"', l: '36.5', pn: '15' },
      ],
    },
  },
  // 16. REPAIR SOCKET/ CONVERTABLE SOCKET
  {
    id: 'repair-socket-convertable-socket',
    code: undefined,
    name: 'REPAIR SOCKET/ CONVERTABLE SOCKET',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/repair-socket-convertable-socket.jpg',
    sizes: [
      { sizeMm: '1/2"X20' },
      { sizeMm: '3/4"X25' },
      { sizeMm: '1"X32' },
      { sizeMm: '1 1/4"X40' },
      { sizeMm: '1 1/2"X50' },
      { sizeMm: '2"X63' },
      { sizeMm: '2 1/2"X75' },
      { sizeMm: '3"X90' },
      { sizeMm: '4"X110' },
      { sizeMm: '6"X160' },
      { sizeMm: '8"X200' },
    ],
    table: {
      id: 'repair-socket-convertable-socket',
      title: 'REPAIR SOCKET/ CONVERTABLE SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'd1_l', label: 'd1 L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '1/2"X20', d: '21.34', d1_l: '20 16.5', pn: '15' },
        { nominal_size_inch: '3/4"X25', d: '26.67', d1_l: '25 19.5', pn: '15' },
        { nominal_size_inch: '1"X32', d: '33.4', d1_l: '32 22.5', pn: '15' },
        { nominal_size_inch: '1 1/4"X40', d: null, d1_l: null, pn: null },
        { nominal_size_inch: '1 1/2"X50', d: '48.26', d1_l: '50 31.5', pn: '15' },
        { nominal_size_inch: '2"X63', d: '60.33', d1_l: '63 38', pn: '15' },
        { nominal_size_inch: '2 1/2"X75', d: null, d1_l: null, pn: null },
        { nominal_size_inch: '3"X90', d: null, d1_l: null, pn: null },
        { nominal_size_inch: '4"X110', d: null, d1_l: null, pn: null },
        { nominal_size_inch: '6"X160', d: null, d1_l: null, pn: null },
        { nominal_size_inch: '8"X200', d: null, d1_l: null, pn: null },
      ],
    },
  },
  // 17. END CAP
  {
    id: 'end-cap',
    code: undefined,
    name: 'END CAP',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/bs-en-1452/end-cap.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'end-cap',
      title: 'END CAP',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', d: '21.34', l: '16.5', pn: '15' },
        { nominal_size_inch: '3/4"', d: '26.67', l: '19.5', pn: '15' },
        { nominal_size_inch: '1"', d: '33.4', l: '22.5', pn: '15' },
        { nominal_size_inch: '1 1/2"', d: '48.26', l: '31.5', pn: '15' },
        { nominal_size_inch: '2"', d: '60.33', l: '36.5', pn: '15' },
        { nominal_size_inch: '3"', d: '88.9', l: '51.5', pn: '15' },
        { nominal_size_inch: '4"', d: '114.3', l: '63.5', pn: '15' },
        { nominal_size_inch: '6"', d: '168.3', l: '91', pn: '15' },
      ],
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// PVC PRESSURE BS EN 1452:23 / BS 4346 (PN 15)
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcPressureBsEn1452: ProductDetailConfig = {
  slug: 'pvc-pressure-bs-en-1452',
  categorySlug: 'upvc-pressure',
  
  title: 'PVC Pressure Pipes & Fittings BS EN 1452:23 / BS 4346 (PN 15)',
  titleAr: 'أنابيب وتوصيلات الضغط PVC بمعيار BS EN 1452:23 / BS 4346 (PN 15)',
  
  shortDescription: 'British standard PVC pressure pipes and fittings rated at PN 15 for water supply networks. Certified to BS EN 1452:23 and BS 4346.',
  shortDescriptionAr: 'أنابيب وتوصيلات الضغط PVC بالمعيار البريطاني بتصنيف PN 15 لشبكات إمداد المياه.',
  
  overview: 'Our BS EN 1452 range represents the British standard for PVC-U pressure piping systems. These products are Kitemark certified and widely specified for municipal water distribution, building services, and infrastructure projects across the GCC and Middle East. The PN 15 pressure rating provides a reliable safety margin for demanding applications.',
  overviewAr: 'تمثل مجموعة BS EN 1452 لدينا المعيار البريطاني لأنظمة أنابيب الضغط PVC-U.',
  
  features: [
    'Conforms to BS EN 1452:23 and BS 4346',
    'PN 15 pressure rating',
    'BSI Kitemark certified',
    'NSF approved for potable water',
    'High impact resistance',
    'Precision-molded fittings',
    'Complete system compatibility',
    'Long-term creep resistance',
  ],
  featuresAr: [
    'مطابق لـ BS EN 1452:23 و BS 4346',
    'تصنيف ضغط PN 15',
    'معتمد من BSI Kitemark',
    'معتمد من NSF لمياه الشرب',
    'مقاومة صدم عالية',
    'توصيلات مقولبة بدقة',
    'توافق تام مع النظام',
    'مقاومة الزحف طويلة المدى',
  ],
  
  applications: [
    'Municipal water supply',
    'High-rise building services',
    'Underground water mains',
    'Pump stations',
    'Water meters installation',
    'Fire sprinkler systems',
    'Desalination plant distribution',
    'District cooling systems',
  ],
  applicationsAr: [
    'إمداد المياه البلدية',
    'خدمات المباني الشاهقة',
    'شبكات المياه الرئيسية تحت الأرض',
    'محطات الضخ',
    'تركيب عدادات المياه',
    'أنظمة رش الحريق',
    'توزيع محطات تحلية المياه',
    'أنظمة التبريد المركزي',
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // TODO: Populate pipesTables from BS EN 1452 catalogue
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'bs-en-1452-pipes',
      title: 'PVC Pressure Pipes BS EN 1452:23 - PN 15',
      columns: [
        { key: 'nominalSize', label: 'Nominal Size (DN)', align: 'center' },
        { key: 'od', label: 'OD (mm)', align: 'center' },
        { key: 'wallThickness', label: 'Wall (mm)', align: 'center' },
        { key: 'weight', label: 'Weight (kg/m)', align: 'center' },
      ],
      rows: [
        // TODO: Add pipe specification rows from catalogue
      ],
    },
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // BS EN 1452:3/BS 4346 (PN 15) Fittings - extracted from PDF JSON
  // ───────────────────────────────────────────────────────────────────────────
  fittings: bsEn1452Fittings,
  
  downloads: [
    { label: 'BS EN 1452 Catalogue (PDF)', href: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20BS%20EN%2014523%20-%20BS%204346%20PN%2015_compressed.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Follow BS 8558 installation code of practice',
      'Use only approved jointing compounds',
      'Conduct pressure tests per BS EN 805',
      'Provide thrust blocks at bends and tees',
      'Allow for thermal expansion in long runs',
    ],
    donts: [
      'Do not use for hot water above 25°C',
      'Do not install without proper bedding',
      'Do not use excessive force when jointing',
      'Do not mix with incompatible pipe materials',
      'Do not ignore manufacturer installation guides',
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// ASTM D 2466 SCH-40 FITTINGS DATA
// Extracted from PDF JSON - DO NOT modify strings/numbers
// ═══════════════════════════════════════════════════════════════════════════════

const astmD2466Fittings: Fitting[] = [
  // ELBOW 90°
  {
    id: 'elbow-90',
    code: undefined,
    name: 'ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/elbow-90.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'elbow-90',
      title: 'ELBOW 90°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'dimensions_mm_d_l', label: 'DIMENSIONS (mm) d L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', dimensions_mm_d_l: '21.34 16.5' },
        { nominal_size_inch: '3/4"', dimensions_mm_d_l: '26.67 19.5' },
        { nominal_size_inch: '1"', dimensions_mm_d_l: '33.4 22.5' },
        { nominal_size_inch: '1 1/4"', dimensions_mm_d_l: '42.16 26.5' },
        { nominal_size_inch: '1 1/2"', dimensions_mm_d_l: '48.26 31.5' },
        { nominal_size_inch: '2"', dimensions_mm_d_l: '60.33 36.5' },
        { nominal_size_inch: '3"', dimensions_mm_d_l: '88.9 51' },
        { nominal_size_inch: '4"', dimensions_mm_d_l: '114.3 63.5' },
        { nominal_size_inch: '6"', dimensions_mm_d_l: '168.3 91' },
      ],
    },
  },
  // ELBOW 45°
  {
    id: 'elbow-45',
    code: undefined,
    name: 'ELBOW 45°',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/elbow-45.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'elbow-45',
      title: 'ELBOW 45°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'dimensions_mm_d_l', label: 'DIMENSIONS (mm) d L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', dimensions_mm_d_l: '21.34 16.5' },
        { nominal_size_inch: '3/4"', dimensions_mm_d_l: '26.67 19.5' },
        { nominal_size_inch: '1"', dimensions_mm_d_l: '33.4 22.5' },
        { nominal_size_inch: '1 1/4"', dimensions_mm_d_l: '42.16 26.5' },
        { nominal_size_inch: '1 1/2"', dimensions_mm_d_l: '48.26 31.5' },
        { nominal_size_inch: '2"', dimensions_mm_d_l: '60.33 36.5' },
        { nominal_size_inch: '3"', dimensions_mm_d_l: '88.9 51' },
        { nominal_size_inch: '4"', dimensions_mm_d_l: '114.3 63.5' },
        { nominal_size_inch: '6"', dimensions_mm_d_l: '168.3 91' },
      ],
    },
  },
  // FEMALE ELBOW 90°
  {
    id: 'female-elbow-90',
    code: undefined,
    name: 'FEMALE ELBOW 90°',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/female-elbow-90.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
    ],
    table: {
      id: 'female-elbow-90',
      title: 'FEMALE ELBOW 90°',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'g', label: 'G' },
        { key: 'l', label: 'L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', d: '21.34', g: '1/2"', l: '16.5' },
        { nominal_size_inch: '3/4"', d: '26.67', g: '3/4"', l: '19.5' },
        { nominal_size_inch: '1"', d: '33.4', g: '1"', l: '22.5' },
        { nominal_size_inch: '1 1/4"', d: '42.16', g: '1 1/4"', l: '26.5' },
        { nominal_size_inch: '1 1/2"', d: '48.26', g: '1 1/2"', l: '31.5' },
        { nominal_size_inch: '2"', d: '60.33', g: '2"', l: '36.5' },
      ],
    },
  },
  // SOCKET/COUPLER
  {
    id: 'socket-coupler',
    code: undefined,
    name: 'SOCKET/COUPLER',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/socket-coupler.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'socket-coupler',
      title: 'SOCKET/COUPLER',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'dimensions_mm_d_l', label: 'DIMENSIONS (mm) d L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', dimensions_mm_d_l: '21.34 16.5' },
        { nominal_size_inch: '3/4"', dimensions_mm_d_l: '26.67 19.5' },
        { nominal_size_inch: '1"', dimensions_mm_d_l: '33.4 22.5' },
        { nominal_size_inch: '1 1/4"', dimensions_mm_d_l: '42.16 26.5' },
        { nominal_size_inch: '1 1/2"', dimensions_mm_d_l: '48.26 31.5' },
        { nominal_size_inch: '2"', dimensions_mm_d_l: '60.33 36.5' },
        { nominal_size_inch: '3"', dimensions_mm_d_l: '88.9 51' },
        { nominal_size_inch: '4"', dimensions_mm_d_l: '114.3 63.5' },
        { nominal_size_inch: '6"', dimensions_mm_d_l: '168.3 91' },
      ],
    },
  },
  // REDUCER BUSH/SOCKET
  {
    id: 'reducer-bush-socket',
    code: undefined,
    name: 'REDUCER BUSH/SOCKET',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/reducer-bush-socket.jpg',
    sizes: [
      { sizeMm: '3/4X1/2"' },
      { sizeMm: '1x1/2"' },
      { sizeMm: '1X3/4"' },
      { sizeMm: '1 1/4x1/2"' },
      { sizeMm: '1 1/4X3/4"' },
      { sizeMm: '1 1/4x1"' },
      { sizeMm: '1 1/2x1/2"' },
      { sizeMm: '1 1/2x3/4"' },
      { sizeMm: '1 1/2x1"' },
      { sizeMm: '2x1/2"' },
      { sizeMm: '2X3/4"' },
      { sizeMm: '2x1"' },
      { sizeMm: '2x1 1/2"' },
      { sizeMm: '3x1 1/2"' },
      { sizeMm: '3x2"' },
      { sizeMm: '4 X 2"' },
      { sizeMm: '4x3"' },
      { sizeMm: '6x3"' },
      { sizeMm: '6x4"' },
    ],
    table: {
      id: 'reducer-bush-socket',
      title: 'REDUCER BUSH/SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd_upper', label: 'D' },
        { key: 'd', label: 'd' },
        { key: 'l', label: 'L' },
      ],
      rows: [
        { nominal_size_inch: '3/4X1/2"', d_upper: '26.67', d: '21.34', l: '32.6' },
        { nominal_size_inch: '1x1/2"', d_upper: '33.4', d: '21.34', l: '34.1' },
        { nominal_size_inch: '1X3/4"', d_upper: '33.4', d: '26.67', l: '34.1' },
        { nominal_size_inch: '1 1/4x1/2"', d_upper: '42.16', d: '21.34', l: '36' },
        { nominal_size_inch: '1 1/4X3/4"', d_upper: '42.16', d: '26.67', l: '36' },
        { nominal_size_inch: '1 1/4x1"', d_upper: '42.16', d: '33.4', l: '36' },
        { nominal_size_inch: '1 1/2x1/2"', d_upper: '48.26', d: '21.34', l: '40.8' },
        { nominal_size_inch: '1 1/2x3/4"', d_upper: '48.26', d: '26.67', l: '40.8' },
        { nominal_size_inch: '1 1/2x1"', d_upper: '48.26', d: '33.4', l: '40.8' },
        { nominal_size_inch: '2x1/2"', d_upper: '60.33', d: '21.34', l: '47.4' },
        { nominal_size_inch: '2X3/4"', d_upper: '60.33', d: '26.67', l: '47.4' },
        { nominal_size_inch: '2x1"', d_upper: '60.33', d: '33.4', l: '47.4' },
        { nominal_size_inch: '2x1 1/2"', d_upper: '60.33', d: '48.26', l: '47.4' },
        { nominal_size_inch: '3x1 1/2"', d_upper: '88.9', d: '48.26', l: '58' },
        { nominal_size_inch: '3x2"', d_upper: '88.9', d: '60.33', l: '58' },
        { nominal_size_inch: '4 X 2"', d_upper: '114.3', d: '60.33', l: '54' },
        { nominal_size_inch: '4x3"', d_upper: '114.3', d: '88.9', l: '54' },
        { nominal_size_inch: '6x3"', d_upper: '168.3', d: '88.9', l: '80' },
        { nominal_size_inch: '6x4"', d_upper: '168.3', d: '114.3', l: '80' },
      ],
    },
  },
  // MALE THREADED ADAPTOR /SOCKET/NIPPLE SOCKET
  {
    id: 'male-threaded-adaptor-socket-nipple-socket',
    code: undefined,
    name: 'MALE THREADED ADAPTOR /SOCKET/NIPPLE SOCKET',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/male-threaded-adaptor-socket-nipple-socket.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'male-threaded-adaptor-socket-nipple-socket',
      title: 'MALE THREADED ADAPTOR /SOCKET/NIPPLE SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'g', label: 'G' },
        { key: 'l', label: 'L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', d: '21.34', g: '1/2"', l: '16.5' },
        { nominal_size_inch: '3/4"', d: '26.67', g: '3/4"', l: '19.5' },
        { nominal_size_inch: '1"', d: '33.4', g: '1"', l: '22.5' },
        { nominal_size_inch: '1 1/4"', d: '42.16', g: '1 1/4"', l: '26.5' },
        { nominal_size_inch: '1 1/2"', d: '48.26', g: '1 1/2"', l: '31.5' },
        { nominal_size_inch: '2"', d: '60.33', g: '2"', l: '36.5' },
        { nominal_size_inch: '3"', d: '88.9', g: '3"', l: '51.5' },
        { nominal_size_inch: '4"', d: '114.3', g: '4"', l: '63.5' },
        { nominal_size_inch: '6"', d: '168.3', g: '6"', l: '91' },
      ],
    },
  },
  // FEMALE THREADED ADAPTOR/SOCKET G
  {
    id: 'female-threaded-adaptor-socket-g',
    code: undefined,
    name: 'FEMALE THREADED ADAPTOR/SOCKET G',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/female-threaded-adaptor-socket-g.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'female-threaded-adaptor-socket-g',
      title: 'FEMALE THREADED ADAPTOR/SOCKET G',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'g', label: 'G' },
        { key: 'l', label: 'L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', d: '21.34', g: '1/2"', l: '16.5' },
        { nominal_size_inch: '3/4"', d: '26.67', g: '3/4"', l: '19.5' },
        { nominal_size_inch: '1"', d: '33.4', g: '1"', l: '22.5' },
        { nominal_size_inch: '1 1/4"', d: '42.16', g: '1 1/4"', l: '26.5' },
        { nominal_size_inch: '1 1/2"', d: '48.26', g: '1 1/2"', l: '31.5' },
        { nominal_size_inch: '2"', d: '60.33', g: '2"', l: '36.5' },
        { nominal_size_inch: '3"', d: '88.9', g: '3"', l: '51.5' },
        { nominal_size_inch: '4"', d: '114.3', g: '4"', l: '63.5' },
        { nominal_size_inch: '6"', d: '168.3', g: '6"', l: '91' },
      ],
    },
  },
  // EQUAL TEE
  {
    id: 'equal-tee',
    code: undefined,
    name: 'EQUAL TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/equal-tee.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/4"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'equal-tee',
      title: 'EQUAL TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'dimensions_d', label: 'DIMENSIONS d' },
        { key: 'mm_l', label: '(mm) L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', dimensions_d: '21.34', mm_l: '16.5' },
        { nominal_size_inch: '3/4"', dimensions_d: '26.67', mm_l: '19.5' },
        { nominal_size_inch: '1"', dimensions_d: '33.4', mm_l: '22.5' },
        { nominal_size_inch: '1 1/4"', dimensions_d: '42.16', mm_l: '26.5' },
        { nominal_size_inch: '1 1/2"', dimensions_d: '48.26', mm_l: '31.5' },
        { nominal_size_inch: '2"', dimensions_d: '60.33', mm_l: '36.5' },
        { nominal_size_inch: '3"', dimensions_d: '88.9', mm_l: '51.5' },
        { nominal_size_inch: '4"', dimensions_d: '114.3', mm_l: '63.5' },
        { nominal_size_inch: '6"', dimensions_d: '168.3', mm_l: '91' },
      ],
    },
  },
  // REDUCING TEE
  {
    id: 'reducing-tee',
    code: undefined,
    name: 'REDUCING TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/reducing-tee.jpg',
    sizes: [
      { sizeMm: '3/4x1/2x3/4"' },
      { sizeMm: '1x1/2x1"' },
      { sizeMm: '1X3/4X1"' },
      { sizeMm: '1 1/2x1/2x1 1/2"' },
      { sizeMm: '1 1/2x3/4x1 1/2"' },
      { sizeMm: '1 1/2x1x1 1/2"' },
      { sizeMm: '2x1/2x2"' },
      { sizeMm: '2X3/4x2"' },
      { sizeMm: '2x1x2"' },
      { sizeMm: '2x1 1/2x2"' },
    ],
    table: {
      id: 'reducing-tee',
      title: 'REDUCING TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'dimensions_mm_d_di', label: 'DIMENSIONS (mm) d di' },
        { key: 'l', label: 'L' },
      ],
      rows: [
        { nominal_size_inch: '3/4x1/2x3/4"', dimensions_mm_d_di: '26.67 21.34', l: '19.5' },
        { nominal_size_inch: '1x1/2x1"', dimensions_mm_d_di: '33.4 21.34', l: '22.5' },
        { nominal_size_inch: '1X3/4X1"', dimensions_mm_d_di: '33.4 26.67', l: '22.5' },
        { nominal_size_inch: '1 1/2x1/2x1 1/2"', dimensions_mm_d_di: '48.26 21.34', l: '31.5' },
        { nominal_size_inch: '1 1/2x3/4x1 1/2"', dimensions_mm_d_di: '48.26 26.67', l: '31.5' },
        { nominal_size_inch: '1 1/2x1x1 1/2"', dimensions_mm_d_di: '48.26 33.4', l: '31.5' },
        { nominal_size_inch: '2x1/2x2"', dimensions_mm_d_di: '60.33 21.34', l: '36.5' },
        { nominal_size_inch: '2X3/4x2"', dimensions_mm_d_di: '60.33 26.67', l: '36.5' },
        { nominal_size_inch: '2x1x2"', dimensions_mm_d_di: '60.33 33.4', l: '36.5' },
        { nominal_size_inch: '2x1 1/2x2"', dimensions_mm_d_di: '60.33 48.26', l: '36.5' },
      ],
    },
  },
  // FEMALE THREADED REDUCING TEE
  {
    id: 'female-threaded-reducing-tee',
    code: undefined,
    name: 'FEMALE THREADED REDUCING TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/female-threaded-reducing-tee.jpg',
    sizes: [
      { sizeMm: '3/4X1/2X3/4"' },
      { sizeMm: '1x1/2x1"' },
      { sizeMm: '1x3/4x1"' },
      { sizeMm: '1 1/2x1/2x1 1/2"' },
      { sizeMm: '1 1/2X3/4X1 1/2"' },
      { sizeMm: '1 1/2x1x1 1/2"' },
      { sizeMm: '2x1/2x2"' },
      { sizeMm: '2x3/4x2"' },
      { sizeMm: '2x1x2"' },
    ],
    table: {
      id: 'female-threaded-reducing-tee',
      title: 'FEMALE THREADED REDUCING TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'g', label: 'G' },
        { key: 'l', label: 'L' },
      ],
      rows: [
        { nominal_size_inch: '3/4X1/2X3/4"', d: '21.34', g: '1/2"', l: '19.5' },
        { nominal_size_inch: '1x1/2x1"', d: '33.4', g: '1/2"', l: '22.5' },
        { nominal_size_inch: '1x3/4x1"', d: '33.4', g: '3/4"', l: '22.5' },
        { nominal_size_inch: '1 1/2x1/2x1 1/2"', d: '48.26', g: '1/2"', l: '31.5' },
        { nominal_size_inch: '1 1/2X3/4X1 1/2"', d: '48.26', g: '3/4"', l: '31.5' },
        { nominal_size_inch: '1 1/2x1x1 1/2"', d: '48.26', g: '1"', l: '31.5' },
        { nominal_size_inch: '2x1/2x2"', d: '60.33', g: '1/2"', l: '36.5' },
        { nominal_size_inch: '2x3/4x2"', d: '60.33', g: '3/4"', l: '36.5' },
        { nominal_size_inch: '2x1x2"', d: '60.33', g: '1"', l: '36.5' },
      ],
    },
  },
  // FEMALE THREADED EQUAL TEE
  {
    id: 'female-threaded-equal-tee',
    code: undefined,
    name: 'FEMALE THREADED EQUAL TEE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/female-threaded-equal-tee.jpg',
    sizes: [
      { sizeMm: '1/2X1/2X1/2"' },
      { sizeMm: '3/4x3/4x3/4"' },
      { sizeMm: '1x1x1"' },
      { sizeMm: '1 1/4x1 1/4x1 1/4"' },
      { sizeMm: '1 1/2x1 1/2x1 1/2"' },
      { sizeMm: '2x2x2"' },
    ],
    table: {
      id: 'female-threaded-equal-tee',
      title: 'FEMALE THREADED EQUAL TEE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd', label: 'd' },
        { key: 'l_g', label: 'L G' },
        { key: 'pn', label: 'PN' },
      ],
      rows: [
        { nominal_size_inch: '1/2X1/2X1/2"', d: '21.34', l_g: '1/7" 16.5', pn: '15' },
        { nominal_size_inch: '3/4x3/4x3/4"', d: '26.67', l_g: '3/4" 19.5', pn: '15' },
        { nominal_size_inch: '1x1x1"', d: '33.4', l_g: '1" 22.5', pn: '15' },
        { nominal_size_inch: '1 1/4x1 1/4x1 1/4"', d: '42.16', l_g: '1 1/4" 26.5', pn: '15' },
        { nominal_size_inch: '1 1/2x1 1/2x1 1/2"', d: '48.26', l_g: '1 1/2" 31.5', pn: '15' },
        { nominal_size_inch: '2x2x2"', d: '60.33', l_g: '2" 36.5', pn: '15' },
      ],
    },
  },
  // FEMALE THREADED REDUCER BUSH
  {
    id: 'female-threaded-reducer-bush',
    code: undefined,
    name: 'FEMALE THREADED REDUCER BUSH',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/female-threaded-reducer-bush.jpg',
    sizes: [
      { sizeMm: '3/4x1/2"' },
      { sizeMm: '1x1/2"' },
      { sizeMm: '1X3/4"' },
      { sizeMm: '1 1/2x1/2"' },
      { sizeMm: '2X1/2"' },
    ],
    table: {
      id: 'female-threaded-reducer-bush',
      title: 'FEMALE THREADED REDUCER BUSH',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd_upper', label: 'D' },
        { key: 'g', label: 'G' },
        { key: 'l', label: 'L' },
      ],
      rows: [
        { nominal_size_inch: '3/4x1/2"', d_upper: '21.34', g: '1/2"', l: '32.4' },
        { nominal_size_inch: '1x1/2"', d_upper: '33.4', g: '1/2"', l: '35.6' },
        { nominal_size_inch: '1X3/4"', d_upper: '33.4', g: '3/4"', l: '35.6' },
        { nominal_size_inch: '1 1/2x1/2"', d_upper: '48.26', g: '1/2"', l: '43.0' },
        { nominal_size_inch: '2X1/2"', d_upper: '60.33', g: '1/2"', l: '47.4' },
      ],
    },
  },
  // UNION
  {
    id: 'union',
    code: undefined,
    name: 'UNION',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/union.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
    ],
    table: {
      id: 'union',
      title: 'UNION',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'dimensions_mm_d_l', label: 'DIMENSIONS (mm) d L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', dimensions_mm_d_l: '21.34 16.5' },
        { nominal_size_inch: '3/4"', dimensions_mm_d_l: '26.67 19.5' },
        { nominal_size_inch: '1"', dimensions_mm_d_l: '33.4 22.5' },
        { nominal_size_inch: '1 1/2"', dimensions_mm_d_l: '48.26 31.5' },
        { nominal_size_inch: '2"', dimensions_mm_d_l: '60.33 36.5' },
      ],
    },
  },
  // HEX NIPPLE
  {
    id: 'hex-nipple',
    code: undefined,
    name: 'HEX NIPPLE',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/hex-nipple.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/4"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/2"' },
    ],
    table: {
      id: 'hex-nipple',
      title: 'HEX NIPPLE',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'dimensions_g', label: 'DIMENSIONS G' },
        { key: 'mm_l', label: '(mm) L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', dimensions_g: '1/2"', mm_l: '16.5' },
        { nominal_size_inch: '3/4"', dimensions_g: '3/4"', mm_l: '19.5' },
        { nominal_size_inch: '1"', dimensions_g: '1"', mm_l: '22.5' },
        { nominal_size_inch: '1 1/2"', dimensions_g: '1 1/2"', mm_l: '31.5' },
      ],
    },
  },
  // FLANGES WITH STUB
  {
    id: 'flanges-with-stub',
    code: undefined,
    name: 'FLANGES WITH STUB',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/flanges-with-stub.jpg',
    sizes: [
      { sizeMm: '2"' },
      { sizeMm: '2 1/2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'flanges-with-stub',
      title: 'FLANGES WITH STUB',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'd2', label: 'D2' },
        { key: 'd1', label: 'D1' },
        { key: 'd3', label: 'D3' },
        { key: 'd4', label: 'D4' },
        { key: 'h_upper', label: 'H' },
        { key: 'h', label: 'h' },
        { key: 'd2_lower', label: 'd2' },
      ],
      rows: [
        { nominal_size_inch: '2"', d2: '91.8', d1: '60', d3: '92.5', d4: '120', h_upper: '152.4', h: '77.6', d2_lower: '20.5' },
        { nominal_size_inch: '2 1/2"', d2: '107.2', d1: '73.4', d3: '107.6', d4: '140', h_upper: '177.6', h: '92.6', d2_lower: '24.8' },
        { nominal_size_inch: '3"', d2: '119.9', d1: '89.4', d3: '120.6', d4: '152.5', h_upper: '191.4', h: '109.4', d2_lower: '26.4' },
        { nominal_size_inch: '4"', d2: '152.5', d1: '110.4', d3: '153.0', d4: '191', h_upper: '229.7', h: '134', d2_lower: '28.5' },
        { nominal_size_inch: '6"', d2: '206', d1: '160.5', d3: '207.5', d4: '241', h_upper: '284', h: '192.5', d2_lower: '32' },
      ],
    },
  },
  // REPAIR SOCKET/ CONVERTABLE SOCKET
  {
    id: 'repair-socket-convertable-socket',
    code: undefined,
    name: 'REPAIR SOCKET/ CONVERTABLE SOCKET',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/repair-socket-convertable-socket.jpg',
    sizes: [
      { sizeMm: '1½"X20' },
      { sizeMm: '3½"X25' },
      { sizeMm: '1"X32' },
      { sizeMm: '1 ¼"X40' },
      { sizeMm: '1½"X50' },
      { sizeMm: '2"X63' },
      { sizeMm: '2½"X75' },
      { sizeMm: '3"X90' },
      { sizeMm: '4"X110' },
      { sizeMm: '6"X160' },
      { sizeMm: '8"X200' },
    ],
    table: {
      id: 'repair-socket-convertable-socket',
      title: 'REPAIR SOCKET/ CONVERTABLE SOCKET',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'dimensions_mm_d_d1', label: 'DIMENSIONS (mm) d d1' },
        { key: 'l', label: 'L' },
      ],
      rows: [
        { nominal_size_inch: '1½"X20', dimensions_mm_d_d1: '21.34 20', l: '16.5' },
        { nominal_size_inch: '3½"X25', dimensions_mm_d_d1: '26.67 25', l: '19.5' },
        { nominal_size_inch: '1"X32', dimensions_mm_d_d1: '33.4 32', l: '22.5' },
        { nominal_size_inch: '1 ¼"X40', dimensions_mm_d_d1: null, l: null },
        { nominal_size_inch: '1½"X50', dimensions_mm_d_d1: '48.26 50', l: '31.5' },
        { nominal_size_inch: '2"X63', dimensions_mm_d_d1: '60.33 63', l: '38' },
        { nominal_size_inch: '2½"X75', dimensions_mm_d_d1: null, l: null },
        { nominal_size_inch: '3"X90', dimensions_mm_d_d1: null, l: null },
        { nominal_size_inch: '4"X110', dimensions_mm_d_d1: null, l: null },
        { nominal_size_inch: '6"X160', dimensions_mm_d_d1: null, l: null },
        { nominal_size_inch: '8"X200', dimensions_mm_d_d1: null, l: null },
      ],
    },
  },
  // END CAP
  {
    id: 'end-cap',
    code: undefined,
    name: 'END CAP',
    family: 'moulded',
    image: '/images/fittings/pvc-pressure/astm-d2466/end-cap.jpg',
    sizes: [
      { sizeMm: '1/2"' },
      { sizeMm: '3/2"' },
      { sizeMm: '1"' },
      { sizeMm: '1 1/2"' },
      { sizeMm: '2"' },
      { sizeMm: '3"' },
      { sizeMm: '4"' },
      { sizeMm: '6"' },
    ],
    table: {
      id: 'end-cap',
      title: 'END CAP',
      columns: [
        { key: 'nominal_size_inch', label: 'NOMINAL SIZE (Inch)' },
        { key: 'dimensions_d', label: 'DIMENSIONS d' },
        { key: 'mm_l', label: '(mm) L' },
      ],
      rows: [
        { nominal_size_inch: '1/2"', dimensions_d: '21.34', mm_l: '16.5' },
        { nominal_size_inch: '3/2"', dimensions_d: '26.67', mm_l: '19.5' },
        { nominal_size_inch: '1"', dimensions_d: '33.4', mm_l: '22.5' },
        { nominal_size_inch: '1 1/2"', dimensions_d: '48.26', mm_l: '31.5' },
        { nominal_size_inch: '2"', dimensions_d: '60.33', mm_l: '36.5' },
        { nominal_size_inch: '3"', dimensions_d: '88.9', mm_l: '51' },
        { nominal_size_inch: '4"', dimensions_d: '114.3', mm_l: '63.5' },
        { nominal_size_inch: '6"', dimensions_d: '168.3', mm_l: '91' },
      ],
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// PVC PRESSURE ASTM D 2466 SCH-40
// ═══════════════════════════════════════════════════════════════════════════════

export const pvcPressureAstmD2466: ProductDetailConfig = {
  slug: 'pvc-pressure-astm-d2466',
  categorySlug: 'upvc-pressure',
  
  title: 'PVC Pressure Pipes & Fittings ASTM D 2466 SCH-40',
  titleAr: 'أنابيب وتوصيلات الضغط PVC بمعيار ASTM D 2466 SCH-40',
  
  shortDescription: 'American standard Schedule 40 PVC pressure pipes and fittings. Socket-type fittings with solvent cement joints for industrial and commercial applications.',
  shortDescriptionAr: 'أنابيب وتوصيلات الضغط PVC بالمعيار الأمريكي Schedule 40.',
  
  overview: 'Crown Plastic Pipes offers a complete range of Schedule 40 PVC pipes and fittings manufactured to ASTM D 2466 specifications. The Schedule 40 wall thickness provides excellent pressure ratings while maintaining economical installation costs. Ideal for industrial process piping, chemical handling, and high-demand commercial applications.',
  overviewAr: 'تقدم كراون للأنابيب البلاستيكية مجموعة كاملة من أنابيب وتوصيلات PVC بمواصفات Schedule 40 المصنعة وفقاً لمواصفات ASTM D 2466.',
  
  features: [
    'Conforms to ASTM D 2466 standard',
    'Schedule 40 wall thickness',
    'Socket-type solvent weld joints',
    'NSF/ANSI 61 certified',
    'Excellent chemical resistance',
    'Consistent dimensional accuracy',
    'Gray color for easy identification',
    'Available in inch sizes',
  ],
  featuresAr: [
    'مطابق لمعيار ASTM D 2466',
    'سماكة جدار Schedule 40',
    'وصلات لحام مذيب من نوع المقبس',
    'معتمد من NSF/ANSI 61',
    'مقاومة كيميائية ممتازة',
    'دقة أبعاد متسقة',
    'لون رمادي لسهولة التعرف',
    'متوفر بمقاسات البوصة',
  ],
  
  applications: [
    'Industrial process piping',
    'Chemical handling systems',
    'Laboratory installations',
    'Swimming pool plumbing',
    'Wastewater treatment',
    'Aquaculture systems',
    'Cooling tower makeup',
    'Manufacturing facilities',
  ],
  applicationsAr: [
    'أنابيب العمليات الصناعية',
    'أنظمة مناولة المواد الكيميائية',
    'تركيبات المختبرات',
    'سباكة حمامات السباحة',
    'معالجة مياه الصرف الصحي',
    'أنظمة الاستزراع المائي',
    'تعويض أبراج التبريد',
    'مرافق التصنيع',
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // TODO: Populate pipesTables from ASTM D 2466 catalogue
  // ───────────────────────────────────────────────────────────────────────────
  pipesTables: [
    {
      id: 'astm-d2466-pipes-sch40',
      title: 'PVC Pressure Pipes ASTM D 2466 - Schedule 40',
      columns: [
        { key: 'nominalSize', label: 'Nominal Size (in)', align: 'center' },
        { key: 'od', label: 'OD (in)', align: 'center' },
        { key: 'wallThickness', label: 'Wall (in)', align: 'center' },
        { key: 'id', label: 'ID (in)', align: 'center' },
        { key: 'pressureRating', label: 'Pressure (psi)', align: 'center' },
      ],
      rows: [
        // TODO: Add pipe specification rows from catalogue
      ],
    },
  ],
  
  // ───────────────────────────────────────────────────────────────────────────
  // ASTM D 2466 Fittings - extracted from PDF JSON
  // ───────────────────────────────────────────────────────────────────────────
  fittings: astmD2466Fittings,
  
  downloads: [
    { label: 'ASTM D 2466 Catalogue (PDF)', href: '/pdfs/UPVC%20PRESSURE%20FITTINGS%20ASTM%20D%202466%20SCH-40_compressed.pdf' },
  ],
  
  dosDonts: {
    dos: [
      'Use ASTM D 2564 PVC solvent cement',
      'Prime joints with purple primer per code',
      'Allow proper cure time per temperature',
      'Follow ASTM F 402 handling procedures',
      'Use Schedule 80 for threaded connections',
    ],
    donts: [
      'Do not use for compressed gases',
      'Do not thread Schedule 40 fittings',
      'Do not expose to direct flame or heat guns',
      'Do not use petroleum-based lubricants',
      'Do not subject to sudden pressure surges',
    ],
  },
};
