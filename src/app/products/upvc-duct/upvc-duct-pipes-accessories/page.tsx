import { Metadata } from 'next';
import { ProductDetailLayout } from '@/components/products';
import { upvcDuctPipesAndAccessories } from '@/config/productDetails/ductData';

export const metadata: Metadata = {
  title: 'UPVC Duct Pipes & Accessories | Crown Plastic',
  description: 'Premium UPVC duct pipes and accessories for electrical and telecommunications cable protection. Manufactured to international standards including NEMA, DIN, and BS specifications.',
  keywords: [
    'upvc duct pipes',
    'duct accessories',
    'electrical cable protection',
    'telecommunications ducting',
    'nema compliant duct',
    'duct fittings',
    'underground duct installation',
    'cable protection systems',
    'Crown Plastic duct',
  ],
  openGraph: {
    title: 'UPVC Duct Pipes & Accessories | Crown Plastic',
    description: 'Premium UPVC duct pipes and accessories for electrical and telecommunications cable protection.',
    type: 'website',
  },
};

export default function UPVCDuctPipesAndAccessoriesPage() {
  return <ProductDetailLayout product={upvcDuctPipesAndAccessories} />;
}