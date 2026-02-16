import type { Metadata } from 'next';
import { getCategoryBySlug, getSubProductBySlugs } from '@/config/products';
import ProductDetailClient from './ProductDetailClient';

interface ProductPageProps {
  params: { category: string; product: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);
  const sub = getSubProductBySlugs(params.category, params.product);

  if (!cat || !sub) {
    return {
      title: 'Product Details | Crown Plastic Pipes',
      description: 'Technical specifications and ordering information.',
    };
  }

  const title = `${sub.name} | ${cat.name} | Crown Plastic Pipes`;
  const description = sub.shortDescription;
  const url = `https://crownplasticuae.com/products/${params.category}/${params.product}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Crown Plastic Pipes',
      type: 'website',
    },
    alternates: { canonical: url },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return <ProductDetailClient params={params} />;
}
