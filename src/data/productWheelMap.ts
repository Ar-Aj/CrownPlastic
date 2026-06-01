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
  'upvc-drainage-pipes':         '/images/products/cover/upvc-drainage/pipes/upvcdrainagepipesbs5255.png',
  'upvc-drainage-fittings':      '/images/products/cover/upvc-drainage/fittings/BS EN 1329-12014.png',
  'pvc-high-pressure-pipes':     '/images/products/cover/pvc high pressure/CROWN PLASTIC PVC HIGH PRESSURE PIPE ISO 4422-21996.png',
  'pvc-high-pressure-fittings':  '/images/products/cover/pvc high pressure/fittings/DIN 8063.png',
  'pvc-sch-40-fittings':         '/images/products/cover/pvc high pressure/fittings/PVC SCH 40 Fittings.png',
  'pvc-duct-pipes':              '/images/products/cover/upvs duct/pipes/CROWN PLASTIC PVC DUCT PIPE NEMA TC 22003.png',
  'pvc-duct-fittings':           '/images/products/cover/upvs duct/fittings/duct-socketa.png',
  'pvc-conduit-pipes':           '/images/products/cover/conduits/pipes/CROWN PLASTIC PVC CONDUIT PIPE 1250N.png',
  'ppr-pipes':                   '/images/products/cover/ppr/pipes/CROWN PLASTIC PPR PIPE SDR11 PN10.png',
  'hdpe-pipes':                  '/images/products/cover/hdpe/pipes/CROWN PLASTIC HDPE PIPE PE63.png',
  'pex-pipes':                   '/images/products/cover/pex/pipes/pex.png',
  'fabrications-accessories':    '/images/products/cover/fabrication/grease-trap-type-a.png',
  'solvents':                    '/images/products/cover/solvent/Solventcover.png',
};

/**
 * Category acronyms for fallback display when images are missing
 */
export const CATEGORY_ACRONYMS: Record<string, string> = {
  'upvc-pressure': 'PVC PRESSURE',
  'upvc-drainage': 'UPVC DRAINAGE',
  'upvc-duct': 'UPVC DUCT',
  'pvc-conduit': 'CONDUIT',
  'ppr': 'PPR',
  'upvc-fabrications': 'FABRICATIONS',
  'polyethylene': 'HDPE',
};

/**
 * Get acronym from category ID
 */
export function getCategoryAcronym(categoryId: string): string {
  return CATEGORY_ACRONYMS[categoryId] || categoryId.slice(0, 3).toUpperCase();
}
