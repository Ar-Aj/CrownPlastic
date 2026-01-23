/**
 * Product Wheel Image Mapping
 * 
 * Maps PRODUCT_MAP category IDs to their corresponding wheel image paths.
 * Images should be placed in: public/images/productmapping/
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 * IMAGE REQUIREMENTS:
 * • MUST be 1:1 aspect ratio (square) for proper display in hub and nodes
 * • Recommended size: 200x200px or 400x400px
 * • Format: JPG or PNG
 * • The image fills a circular container with object-fit: cover
 * 
 * CUSTOMIZATION:
 * • To add a new category: add its ID and image path below
 * • To change an image: update the path for the corresponding ID
 * • Category IDs must match those in src/data/productMap.ts
 * 
 * IMAGE LOCATION:
 * Drop wheel images in: /public/images/productmapping/
 * Naming convention: {category-id}-wheel.jpg (e.g., upvc-pressure-wheel.jpg)
 * ═══════════════════════════════════════════════════════════════════════════════
 */

export const PRODUCT_WHEEL_IMAGE_MAP: Record<string, string> = {
  'upvc-pressure': '/images/productmapping/upvc-pressure-wheel.jpg',
  'upvc-drainage': '/images/productmapping/upvc-drainage-wheel.jpg',
  'upvc-duct': '/images/productmapping/upvc-duct-wheel.jpg',
  'pvc-conduit': '/images/productmapping/pvc-conduit-wheel.jpg',
  'ppr': '/images/productmapping/ppr-wheel.jpg',
  'polyethylene': '/images/productmapping/hdpe-wheel.jpg', // Note: category ID is 'polyethylene', image is 'hdpe'
};

/**
 * Category acronyms for fallback display when images are missing
 */
export const CATEGORY_ACRONYMS: Record<string, string> = {
  'upvc-pressure': 'UPP',
  'upvc-drainage': 'UPD',
  'upvc-duct': 'UDT',
  'pvc-conduit': 'PVC',
  'ppr': 'PPR',
  'polyethylene': 'PE',
};

/**
 * Get acronym from category ID
 */
export function getCategoryAcronym(categoryId: string): string {
  return CATEGORY_ACRONYMS[categoryId] || categoryId.slice(0, 3).toUpperCase();
}
