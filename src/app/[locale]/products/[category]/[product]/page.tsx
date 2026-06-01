import type { Metadata } from 'next';
import { getCategoryBySlug, getSubProductBySlugs, productCategories } from '@/config/products';
import ProductDetailClient from './ProductDetailClient';

import { hasProductDetail, getProductDetail } from '@/config/productDetails';

interface ProductPageProps {
  params: { locale: string; category: string; product: string };
}

// Pre-render all product detail pages at build time
export async function generateStaticParams() {
  return productCategories.flatMap((cat) =>
    cat.subProducts.map((sub) => ({
      category: cat.slug,
      product: sub.slug,
    }))
  );
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

  // Build the Base URLs
  const baseUrl = 'https://crownplasticuae.com';
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';
  const urlEn = `${baseUrl}/en/products/${params.category}/${params.product}`;
  const urlAr = `${baseUrl}/ar/products/${params.category}/${params.product}`;
  const urlCurrent = isAr ? urlAr : urlEn;

  // Default to basic generic metadata
  let titleEn = `${sub.name} | ${cat.name} | Crown Plastic Pipes UAE`;
  let titleAr = `${sub.nameAr || sub.name} | ${cat.nameAr || cat.name} | كراون بلاستيك الإمارات`;
  let descEn = sub.shortDescription;
  let ogImage = sub.image || cat.image || '/images/og-image.jpg';

  // Overwrite with Enhanced AEO/SEO Metadata if configured
  if (hasProductDetail(params.product)) {
    const detailConfig = getProductDetail(params.product);
    if (detailConfig) {
      // 1. Dynamic Title Construction (Targeting UAE / MEP / Infrastructure)
      // Pattern: [Product Name] | [Category Name] | Crown Plastic UAE
      titleEn = `${detailConfig.title} | ${cat.name} | Crown Plastic UAE`;
      titleAr = `${detailConfig.titleAr || detailConfig.title} | ${cat.nameAr || cat.name} | كراون بلاستيك الإمارات`;

      // Keep under 65 chars if possible
      if (titleEn.length > 65) titleEn = `${detailConfig.title} | Crown Plastic UAE`;
      if (titleAr.length > 65) titleAr = `${detailConfig.titleAr || detailConfig.title} | كراون بلاستيك`;

      // 2. Smart Dynamic Description Truncation
      const smartTruncate = (text: string, maxLen = 160) => {
        if (!text) return '';
        if (text.length <= maxLen) return text;
        const sub = text.substring(0, maxLen);
        const lastSentence = Math.max(sub.lastIndexOf('.'), sub.lastIndexOf('!'), sub.lastIndexOf('?'));
        if (lastSentence > 0) {
          return sub.substring(0, lastSentence + 1).trim();
        }
        const lastSpace = sub.lastIndexOf(' ');
        if (lastSpace > 0) {
          return sub.substring(0, lastSpace).trim() + '...';
        }
        return sub.substring(0, maxLen - 3).trim() + '...';
      };

      if (detailConfig.overview) {
        descEn = smartTruncate(detailConfig.overview);
      }

      if (detailConfig.image) ogImage = detailConfig.image;
    }
  }

  // Use Arabic metadata for Arabic pages (critical for GCC CTR)
  const title = isAr ? titleAr : titleEn;
  const description = isAr ? (descEn) : descEn; // TODO: add descAr when available
  const ogLocale = isAr ? 'ar_AE' : 'en_AE';
  const ogAltLocale = isAr ? ['en_AE'] : ['ar_AE'];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: urlCurrent,
      siteName: isAr ? 'كراون بلاستيك' : 'Crown Plastic Pipes',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: ogLocale,
      alternateLocale: ogAltLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
    },
    alternates: {
      canonical: urlCurrent,
      languages: {
        'en': urlEn,
        'ar': urlAr,
        'x-default': urlEn,
      }
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return <ProductDetailClient params={params} />;
}
