import { Metadata } from 'next';
import ProductDetailLayout from '@/components/products/ProductDetailLayout';
import { greaseTrapTypeB } from '@/config/productDetails/fabricationsData';

export const metadata: Metadata = {
  title: 'PVC/UPVC Grease Trap – Type B | Crown Plastic',
  description: 'Dual bucket grease trap featuring two removable PVC perforated buckets (260mm deep) with lifting handles for easier maintenance. Dubai Municipality approved.',
  keywords: [
    'grease trap type b',
    'PVC grease trap',
    'UPVC grease trap',
    'Dubai Municipality approved',
    'dual bucket grease trap',
    'fabricated grease trap',
    'Crown Plastic fabrications',
  ],
  openGraph: {
    title: 'PVC/UPVC Grease Trap – Type B | Crown Plastic',
    description: 'Dual bucket grease trap featuring two removable PVC perforated buckets with lifting handles.',
    type: 'website',
  },
};

export default function GreaseTrapTypeBPage() {
  return <ProductDetailLayout product={greaseTrapTypeB} />;
}
