import { Metadata } from 'next';
import ProductDetailLayout from '@/components/products/ProductDetailLayout';
import { greaseTrapTypeA } from '@/config/productDetails/fabricationsData';

export const metadata: Metadata = {
  title: 'PVC/UPVC Grease Trap – Type A | Crown Plastic',
  description: 'Single bucket grease trap featuring a removable PVC perforated bucket (450mm deep) with GRP sealed cover and brass wing nut/bolt securing. Dubai Municipality approved.',
  keywords: [
    'grease trap type a',
    'PVC grease trap',
    'UPVC grease trap',
    'Dubai Municipality approved',
    'single bucket grease trap',
    'fabricated grease trap',
    'Crown Plastic fabrications',
  ],
  openGraph: {
    title: 'PVC/UPVC Grease Trap – Type A | Crown Plastic',
    description: 'Single bucket grease trap featuring a removable PVC perforated bucket (450mm deep) with GRP sealed cover.',
    type: 'website',
  },
};

export default function GreaseTrapTypeAPage() {
  return <ProductDetailLayout product={greaseTrapTypeA} />;
}
