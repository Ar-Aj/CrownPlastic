'use client';

import { useState, useEffect, useMemo } from 'react';
import { en } from '@/i18n/en';
import { ar } from '@/i18n/ar';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT CATEGORY PAGE - Enhanced with Crown Design System
// ═══════════════════════════════════════════════════════════════════════════════

import { notFound } from 'next/navigation';
import Link from '@/components/common/LocaleLink';
import Image from 'next/image';
import { ArrowRight, Shield, Building2, Truck, ChevronDown, MessageSquare } from 'lucide-react';
import { AnimateOnScroll, PdfViewer } from '@/components/common';
import { getCategoryBySlug } from '@/config/products';
import { getDocsByCategory } from '@/config/docs';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/i18n';
import { ProductCategoryBreadcrumb } from '@/components/schemas/BreadcrumbSchema';
import { ProductListSchema } from '@/components/schemas/ProductSchema';
import { upvcPressurePipeSpecs } from '@/config/schemas';
import { trackProductView, trackButtonClick } from '@/lib/analytics';

// Design System imports
import {
  ProductBackgroundPattern,
  ProductSection,
  ProductSectionHeader,
  ProductCardSurface,
  ProductHeroBadge,
  ProductBadgeRow,
  SectionDivider,
  RadialGlowOverlay,
} from '@/components/products/design-system';

interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryClient({ params }: CategoryPageProps) {
  const { category } = params;
  const { language } = useLanguage();
  const t = useT();
  const cat = getCategoryBySlug(category);

  // ── GA4: track category page view ─────────────────────────────────────────
  const catNameForTracking = cat ? (language === 'ar' ? (cat.nameAr || cat.name) : cat.name) : category;
  useEffect(() => {
    trackProductView(category, catNameForTracking);
  }, [category, catNameForTracking]);

  if (!cat) {
    notFound();
  }

  const catName = language === 'ar' ? (cat.nameAr || cat.name) : cat.name;
  const catDesc = language === 'ar' ? (cat.shortDescriptionAr || cat.shortDescription) : cat.shortDescription;

  // ─── Per-category commercial SEO overrides (H1 + hero subtext + FAQs) ─────
  const categoryOverride = useMemo(() => {
    const translations = language === 'ar' ? ar : en;
    const overrides = (translations.products.seo.category_overrides as unknown) as
      Record<string, { meta_title: string; h1: string; hero_subtext: string; faqs?: { q: string; a: string }[] }> | undefined;
    return overrides?.[category];
  }, [language, category]);

  const heroH1 = categoryOverride?.h1 ?? catName;
  const heroSubtext = categoryOverride?.hero_subtext ?? catDesc;

  // ─── AEO FAQs for this category ───────────────────────────────────
  const categoryFaqs = categoryOverride?.faqs;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Get technical documents for this category
  const categoryDocuments = getDocsByCategory(cat.slug);

  // Get relevant product specs for this category (for Schema)
  const categoryProductSpecs = category === 'upvc-pressure' ? upvcPressurePipeSpecs : [];

  // Extract standards from category description for badges
  const standardBadges = catDesc?.match(/[A-Z]+\s*[\d]+(?:[-:]\d+)?/g)?.slice(0, 4) || [];

  return (
    <ProductBackgroundPattern pattern="dot" glow="subtle" patternOpacity={0.4}>
      {/* Product Category Breadcrumb Schema */}
      <ProductCategoryBreadcrumb categoryName={catName} categorySlug={category} />

      {/* Product List Schema for AI Answer Engines */}
      {categoryProductSpecs.length > 0 && (
        <ProductListSchema
          products={categoryProductSpecs}
          categoryName={catName}
          categoryUrl={`https://crownplasticuae.com/products/${category}`}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION - Category Header with Image
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-[130px]">
        {/* Hero image background — dynamically sourced from first sub-product's pedestal shot */}
        {(() => {
          const heroImage = cat.subProducts[0]?.image || cat.image;
          return heroImage ? (
            <div className="absolute inset-0">
              <Image
                src={heroImage}
                alt={`${catName} - Crown Plastic Pipes product range`}
                fill
                sizes="100vw"
                quality={85}
                className="object-cover"
                priority
              />
              {/* Gradient overlays for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-slate-900/40" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-800" />
          );
        })()}

        {/* Radial glow accent */}
        <RadialGlowOverlay intensity="normal" position="center" />

        {/* Hero content */}
        <div className="relative z-10 py-16 md:py-24 lg:py-32">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">{t('products.category.breadcrumb_home')}</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white transition-colors">{t('products.category.breadcrumb_products')}</Link>
              <span>/</span>
              <span className="text-white font-medium">{catName}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text content */}
              <div>
                {/* Title — uses per-category commercial H1 override, falls back to catName */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {heroH1}
                </h1>

                {/* Hero subtext — commercial intent description for Googlebot */}
                <p className="text-lg text-white/80 mb-6 max-w-xl leading-relaxed">
                  {heroSubtext}
                </p>

                {/* Standard badges */}
                {standardBadges.length > 0 && (
                  <ProductBadgeRow gap="sm" className="mb-8">
                    {standardBadges.map((badge, idx) => (
                      <ProductHeroBadge key={idx} variant="glass" size="sm">
                        {badge}
                      </ProductHeroBadge>
                    ))}
                  </ProductBadgeRow>
                )}

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
                    onClick={() => trackButtonClick('Request a Quote', 'category_hero')}
                  >
                    {t('products.category.request_quote')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {t('products.category.download_catalogue')}
                  </Link>
                </div>
              </div>

              {/* Right: Stats cards (optional enhancement) */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <ProductCardSurface variant="glass" padding="md" className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-1">{cat.subProducts.length}</div>
                  <div className="text-sm text-slate-500">{t('products.category.stat_product_families')}</div>
                </ProductCardSurface>
                <ProductCardSurface variant="glass" padding="md" className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-1">ISO</div>
                  <div className="text-sm text-slate-500">{t('products.category.stat_certified')}</div>
                </ProductCardSurface>
                <ProductCardSurface variant="glass" padding="md" className="text-center col-span-2">
                  <div className="text-3xl font-bold text-slate-800 mb-1">30+</div>
                  <div className="text-sm text-slate-500">{t('products.category.stat_years')}</div>
                </ProductCardSurface>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PRODUCTS GRID SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <ProductSection background="white" size="lg" showPattern patternType="fine">
        <ProductSectionHeader
          title={`${t('products.category.products_in_category')} ${catName}`}
          subtitle={t('products.category.explore_range')}
          align="center"
        />

        {/* Product cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cat.subProducts.map((product, index) => {
            const prodName = language === 'ar' ? (product.nameAr || product.name) : product.name;
            const prodDesc = language === 'ar' ? (product.shortDescriptionAr || product.shortDescription) : product.shortDescription;

            return (
              <AnimateOnScroll key={product.slug} animation="fade-up" delay={index * 80}>
                <Link href={`/products/${cat.slug}/${product.slug}`} className="block h-full group">
                  <ProductCardSurface variant="default" hoverable padding="none" className="h-full">
                    {/* Product image — 16:9 aspect-video with fallback */}
                    <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-gray-100">
                      {product.image ? (
                        <>
                          <Image
                            src={product.image}
                            alt={prodName}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 motion-reduce:group-hover:scale-100 transition-transform duration-500 motion-reduce:transition-none"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-5xl opacity-40">{cat.icon}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Standards tags */}
                      {product.standards && product.standards.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {product.standards.slice(0, 2).map((std) => (
                            <span
                              key={std}
                              className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded"
                            >
                              {std}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {prodName}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {prodDesc}
                      </p>

                      {/* View details link */}
                      <div className="flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all motion-reduce:transition-none">
                        <span>{t('products.category.view_details')}</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0 transition-transform motion-reduce:transition-none" />
                      </div>
                    </div>
                  </ProductCardSurface>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </ProductSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          TECHNICAL DOCUMENTS SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      {categoryDocuments.length > 0 && (
        <>
          <SectionDivider variant="light" />
          <ProductSection background="soft" size="md">
            <ProductSectionHeader
              title={t('products.category.tech_documents')}
              subtitle={t('products.category.tech_documents_desc')}
              align="center"
            />

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {categoryDocuments.map((doc, index) => (
                <AnimateOnScroll key={doc.src} animation="fade-up" delay={index * 80}>
                  <PdfViewer
                    src={doc.src}
                    title={language === 'ar' && doc.titleAr ? doc.titleAr : doc.title}
                    description={language === 'ar' && doc.descriptionAr ? doc.descriptionAr : doc.description}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </ProductSection>
        </>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          FEATURES / WHY CHOOSE SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <SectionDivider variant="blue" />
      <ProductSection background="soft-blue" size="md" showGlow>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <ProductCardSurface variant="default" hoverable className="text-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t('products.category.quality_certified')}</h3>
              <p className="text-sm text-slate-600">{t('products.category.quality_certified_desc')}</p>
            </ProductCardSurface>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <ProductCardSurface variant="default" hoverable className="text-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t('products.category.built_to_last')}</h3>
              <p className="text-sm text-slate-600">{t('products.category.built_to_last_desc')}</p>
            </ProductCardSurface>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <ProductCardSurface variant="default" hoverable className="text-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t('products.category.fast_delivery')}</h3>
              <p className="text-sm text-slate-600">{t('products.category.fast_delivery_desc')}</p>
            </ProductCardSurface>
          </AnimateOnScroll>
        </div>
      </ProductSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          CATEGORY FAQ SECTION (AEO)
      ═══════════════════════════════════════════════════════════════════════ */}
      {categoryFaqs && categoryFaqs.length > 0 && (
        <>
          {/* FAQPage JSON-LD Schema for Google */}
          <script
            id={`category-faq-schema-${category}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                '@id': `https://crownplasticuae.com/${language}/products/${category}#faqpage`,
                mainEntity: categoryFaqs.map((faq, idx) => ({
                  '@type': 'Question',
                  '@id': `https://crownplasticuae.com/${language}/products/${category}#faq-${idx}`,
                  name: faq.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a,
                  },
                })),
              }),
            }}
          />

          <SectionDivider variant="light" />
          <ProductSection background="white" size="md">
            <ProductSectionHeader
              title={language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              subtitle={language === 'ar' ? 'إجابات على الأسئلة الشائعة حول هذه الفئة من المنتجات' : 'Expert answers to common questions about this product category'}
              align="center"
            />

            <div className="max-w-3xl mx-auto space-y-4">
              {categoryFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen ? 'border-primary/30 shadow-lg shadow-primary/5' : 'border-slate-200 shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-primary'
                        }`}>
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 pr-8">{faq.q}</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-6 pt-0 pl-20">
                        <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ProductSection>
        </>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <ProductSection background="dark-slate" size="md">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('products.category.need_assistance')}
          </h2>
          <p className="text-slate-300 mb-8">
            {t('products.category.assistance_desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              {t('common.contact_us')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
            >
              {t('products.category.view_all_products')}
            </Link>
          </div>
        </div>
      </ProductSection>
    </ProductBackgroundPattern>
  );
}
