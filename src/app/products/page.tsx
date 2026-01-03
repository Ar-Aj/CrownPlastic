'use client';

import Link from 'next/link';
import { PageHeader, CardGrid, StatsStrip, AnimateOnScroll, PdfViewer } from '@/components/common';
import { productCategories } from '@/config/products';
import { topLevelDocs } from '@/config/docs';
import Icon, { IconName } from '@/components/ui/Icon';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductsPage() {
  const t = useT();
  const { language } = useLanguage();

  const productCards = productCategories.map((cat) => ({
    title: language === 'ar' ? (cat.nameAr || cat.name) : cat.name,
    description: language === 'ar' ? (cat.shortDescriptionAr || cat.shortDescription) : cat.shortDescription,
    href: `/products/${cat.slug}`,
    icon: cat.icon,
    image: cat.image,
    alt: `${language === 'ar' ? (cat.nameAr || cat.name) : cat.name} product shot`,
  }));

  return (
    <>
      <PageHeader
        title={t('products.title')}
        subtitle={t('products.subtitle')}
        breadcrumbs={[{ label: t('nav.products') }]}
      />

      {/* Stats Strip */}
      <StatsStrip
        stats={[
          { value: '5,000+', label: t('products_extended.stat_variants'), iconName: 'package' },
          { value: 'UPVC PPRC HDPE', label: t('products_extended.stat_pipes'), iconName: 'water' },
          { value: 'GCC Standards', label: t('products_extended.stat_compliant'), iconName: 'certified' },
          { value: 'DIN 8061/62', label: 'BS EN 1452', iconName: 'document' },
          { value: '20mm - 400mm', label: t('products_extended.stat_diameters'), iconName: 'gauge' },
        ]}
        variant="primary"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('products.categories_title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('products.categories_subtitle')}
              </p>
            </div>
          </AnimateOnScroll>
          <CardGrid items={productCards} columns={3} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('products.why_title')}
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { iconName: 'certified' as IconName, title: t('products.why_iso'), desc: t('products.why_iso_desc') },
              { iconName: 'building' as IconName, title: t('products.why_life'), desc: t('products.why_life_desc') },
              { iconName: 'leaf' as IconName, title: t('products.why_virgin'), desc: t('products.why_virgin_desc') },
              { iconName: 'climate' as IconName, title: t('products.why_climate'), desc: t('products.why_climate_desc') },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm card-hover h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.iconName} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Documentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('products.tech_docs_title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('products.tech_docs_subtitle')}
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topLevelDocs.map((doc, index) => (
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

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('products.cta_title')}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {t('products.cta_subtitle')}
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors rtl:flex-row-reverse"
          >
            {t('products.download_catalogue')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
