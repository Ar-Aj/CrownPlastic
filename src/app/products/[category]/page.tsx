'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PageHeader, CardGrid, AnimateOnScroll, PdfViewer } from '@/components/common';
import { getCategoryBySlug } from '@/config/products';
import { getDocsByCategory } from '@/config/docs';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/i18n';

interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const { language } = useLanguage();
  const t = useT();
  const cat = getCategoryBySlug(category);
  
  if (!cat) {
    notFound();
  }

  const productCards = cat.subProducts.map((product) => ({
    title: language === 'ar' ? (product.nameAr || product.name) : product.name,
    description: language === 'ar' ? (product.shortDescriptionAr || product.shortDescription) : product.shortDescription,
    href: `/products/${cat.slug}/${product.slug}`,
    tags: product.standards,
  }));

  // Get technical documents for this category
  const categoryDocuments = getDocsByCategory(cat.slug);

  const catName = language === 'ar' ? (cat.nameAr || cat.name) : cat.name;
  const catDesc = language === 'ar' ? (cat.shortDescriptionAr || cat.shortDescription) : cat.shortDescription;

  return (
    <>
      <PageHeader
        title={catName}
        subtitle={catDesc}
        breadcrumbs={[
          { label: t('common.breadcrumb_products'), href: '/products' },
          { label: catName },
        ]}
      />

      {/* Hero Product Image Section */}
      {cat.image && (
        <section className="relative bg-gray-900">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <Image
              src={cat.image}
              alt={`${catName} - Crown Plastic Pipes product range`}
              width={1400}
              height={700}
              sizes="100vw"
              quality={85}
              className="w-full h-full object-cover opacity-80"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="container mx-auto px-4 pb-8 md:pb-12">
                <div className="flex items-center gap-4">
                  <span className="text-5xl md:text-6xl">{cat.icon}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {catName}
                    </h2>
                    <p className="text-white/80 max-w-xl hidden md:block">
                      {catDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('products_extended.products_in_category')} {catName}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('products_extended.explore_range')}
              </p>
            </div>
          </AnimateOnScroll>
          <CardGrid items={productCards} columns={3} />
        </div>
      </section>

      {/* Technical Documents Section */}
      {categoryDocuments.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('products_extended.tech_documents')}
                </h2>
                <p className="text-gray-600">
                  {t('products_extended.tech_documents_desc')}
                </p>
              </div>
            </AnimateOnScroll>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {categoryDocuments.map((doc, index) => (
                <AnimateOnScroll key={doc.src} animation="fade-up" delay={index * 80}>
                  <PdfViewer
                    src={doc.src}
                    title={doc.title}
                    description={doc.description}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="text-center p-6 card-hover h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="certified" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('products_extended.quality_certified')}</h3>
                <p className="text-sm text-gray-600">{t('products_extended.quality_certified_desc')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center p-6 card-hover h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="building" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('products_extended.built_to_last')}</h3>
                <p className="text-sm text-gray-600">{t('products_extended.built_to_last_desc')}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="text-center p-6 card-hover h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="truck" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('products_extended.fast_delivery')}</h3>
                <p className="text-sm text-gray-600">{t('products_extended.fast_delivery_desc')}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('products_extended.need_assistance')}</h2>
          <p className="text-white/90 mb-6">{t('products_extended.assistance_desc')}</p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('common.contact_us')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
