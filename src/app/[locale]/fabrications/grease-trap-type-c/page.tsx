import { Metadata } from 'next';
import ProductDetailLayout from '@/components/products/ProductDetailLayout';
import { greaseTrapTypeC } from '@/config/productDetails/fabricationsData';

export const metadata: Metadata = {
  title: 'PVC/UPVC Grease Trap – Type C | Crown Plastic',
  description: 'Large grease trap design (1980mm overall length) featuring an internal baffle wall for enhanced grease separation. Dubai Municipality approved.',
  keywords: [
    'grease trap type c',
    'PVC grease trap',
    'UPVC grease trap',
    'Dubai Municipality approved',
    'baffle grease trap',
    'large grease trap',
    'fabricated grease trap',
    'Crown Plastic fabrications',
  ],
  openGraph: {
    title: 'PVC/UPVC Grease Trap – Type C | Crown Plastic',
    description: 'Large grease trap design (1980mm) featuring an internal baffle wall for enhanced grease separation.',
    type: 'website',
  },
};

export default function GreaseTrapTypeCPage() {
  return <ProductDetailLayout product={greaseTrapTypeC} />;
}
