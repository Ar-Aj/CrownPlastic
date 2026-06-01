import { Metadata } from 'next';
import ProductDetailLayout from '@/components/products/ProductDetailLayout';
import { greaseTrapTypeD } from '@/config/productDetails/fabricationsData';

export const metadata: Metadata = {
  title: 'PVC/UPVC Grease Trap – Type D | Crown Plastic',
  description: 'Compact grease trap design featuring a GRP sealed cover (670×670×15mm) secured by 24 wing nuts with smaller removable bucket. Dubai Municipality approved.',
  keywords: [
    'grease trap type d',
    'PVC grease trap',
    'UPVC grease trap',
    'Dubai Municipality approved',
    'compact grease trap',
    'wing nut grease trap',
    'fabricated grease trap',
    'Crown Plastic fabrications',
  ],
  openGraph: {
    title: 'PVC/UPVC Grease Trap – Type D | Crown Plastic',
    description: 'Compact grease trap design featuring a GRP sealed cover secured by 24 wing nuts.',
    type: 'website',
  },
};

export default function GreaseTrapTypeDPage() {
  return <ProductDetailLayout product={greaseTrapTypeD} />;
}
