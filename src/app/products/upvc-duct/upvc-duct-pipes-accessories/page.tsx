'use client';

import { notFound } from 'next/navigation';
import { ProductDetailLayout } from '@/components/products';
import { upvcDuctPipesAndAccessories } from '@/config/productDetails/ductData';

/**
 * UPVC Duct Pipes & Accessories Product Detail Page
 * 
 * Route: /products/upvc-duct/upvc-duct-pipes-accessories
 * 
 * Renders the combined duct pipes and accessories detail page using
 * the shared ProductDetailLayout component.
 */
export default function UpvcDuctPipesAccessoriesPage() {
  // The config is always available since this is a dedicated page
  const config = upvcDuctPipesAndAccessories;
  
  if (!config) {
    notFound();
  }
  
  return <ProductDetailLayout product={config} />;
}
