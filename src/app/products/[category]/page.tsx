import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/config/products';
import CategoryClient from './CategoryClient';

interface CategoryPageProps {
  params: { category: string };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);

  if (!cat) {
    return {
      title: 'Product Category | Crown Plastic Pipes',
      description: 'Browse our product range.',
    };
  }

  const title = `${cat.name} | Crown Plastic Pipes`;
  const description = cat.shortDescription;
  const url = `https://crownplasticuae.com/products/${params.category}`;

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

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryClient params={params} />;
}
