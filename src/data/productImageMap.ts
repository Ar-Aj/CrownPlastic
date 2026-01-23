/**
 * Product Category Image Mapping
 * 
 * Maps PRODUCT_MAP category IDs to their corresponding image paths.
 * Images should be placed in: public/images/productmapping/
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 * CUSTOMIZATION:
 * • To add a new category: add its ID and image path below
 * • To change an image: update the path for the corresponding ID
 * • Category IDs must match those in src/data/productMap.ts
 * 
 * IMAGE LOCATION:
 * Drop production images in: /public/images/productmapping/
 * Naming convention: {category-id}.jpg (e.g., upvc-pressure.jpg)
 * ═══════════════════════════════════════════════════════════════════════════════
 */

export const PRODUCT_IMAGE_MAP: Record<string, string> = {
  'upvc-pressure': '/images/productmapping/upvc-pressure.jpg',
  'upvc-drainage': '/images/productmapping/upvc-drainage.jpg',
  'upvc-duct': '/images/productmapping/upvc-duct.jpg',
  'pvc-conduit': '/images/productmapping/pvc-conduit.jpg',
  'ppr': '/images/productmapping/ppr.jpg',
  'polyethylene': '/images/productmapping/hdpe.jpg',  // Note: category ID is 'polyethylene', image is 'hdpe.jpg'
};

/**
 * Fallback gradient colors for categories (used when image is missing)
 * Each category gets a distinct gradient for visual differentiation
 */
export const CATEGORY_FALLBACK_COLORS: Record<string, { from: string; to: string }> = {
  'upvc-pressure': { from: '#0072BC', to: '#005a94' },   // Blue - water
  'upvc-drainage': { from: '#6366f1', to: '#4f46e5' },   // Indigo - drainage
  'upvc-duct': { from: '#f59e0b', to: '#d97706' },       // Amber - electrical
  'pvc-conduit': { from: '#ef4444', to: '#dc2626' },     // Red - conduit
  'ppr': { from: '#10b981', to: '#059669' },             // Emerald - hot/cold
  'polyethylene': { from: '#06b6d4', to: '#0891b2' },    // Cyan - PE/HDPE
};

/**
 * Get initials from category name for fallback display
 * @param name - Full category name
 * @returns 2-3 character abbreviation
 */
export function getCategoryInitials(name: string): string {
  // Common abbreviations
  const abbrevMap: Record<string, string> = {
    'UPVC Pressure Pipes & Fittings': 'UPP',
    'UPVC Drainage Pipes & Fittings': 'UPD',
    'UPVC Duct Pipes & Accessories': 'UDT',
    'PVC Conduit Pipes': 'PVC',
    'PPR Pipes': 'PPR',
    'HDPE Pipe Systems': 'PE',
  };
  
  if (abbrevMap[name]) return abbrevMap[name];
  
  // Fallback: take first letters of significant words
  return name
    .split(' ')
    .filter(w => w.length > 2 && !['and', '&', 'the'].includes(w.toLowerCase()))
    .slice(0, 3)
    .map(w => w[0].toUpperCase())
    .join('');
}
