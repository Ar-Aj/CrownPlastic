import { Metadata } from 'next';
import ProductDetailLayout from '@/components/products/ProductDetailLayout';
import { greaseTrapTypeA } from '@/config/productDetails/fabricationsData';

export const metadata: Metadata = {
  title: 'PVC/UPVC Grease Traps | Crown Plastic',
  description: 'Comprehensive range of PVC/UPVC grease traps for commercial and residential applications. Dubai Municipality approved solutions.',
  keywords: [
    'pvc grease trap',
    'upvc grease trap',
    'grease trap fabrication',
    'commercial grease trap',
    'residential grease trap',
    'Dubai Municipality approved',
    'Crown Plastic fabrications',
  ],
  openGraph: {
    title: 'PVC/UPVC Grease Traps | Crown Plastic',
    description: 'Comprehensive range of PVC/UPVC grease traps for commercial and residential applications.',
    type: 'website',
  },
};

export default function PVCUPVCGreaseTrapsPage() {
  // Using Type A as a representative for the general grease trap page
  return <ProductDetailLayout product={greaseTrapTypeA} />;
}