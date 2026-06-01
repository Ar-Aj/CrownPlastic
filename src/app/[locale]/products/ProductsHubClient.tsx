'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// ROOT PRODUCTS PAGE - Crown Premium B2B Design System
// ═══════════════════════════════════════════════════════════════════════════════

import Link from '@/components/common/LocaleLink';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '@/components/common';
import { productCategories } from '@/config/products';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/i18n';
import { ProductsBreadcrumb } from '@/components/schemas/BreadcrumbSchema';
import { ProductListSchema } from '@/components/schemas/ProductSchema';
import { CategoryCardCarousel } from '@/components/products/CategoryCardCarousel';

// Design System imports
import {
  ProductBackgroundPattern,
  ProductSection,
  ProductSectionHeader,
  ProductCardSurface,
  ProductHeroBadge,
  ProductBadgeRow,
  RadialGlowOverlay,
  SectionDivider,
} from '@/components/products/design-system';

export default function ProductsHubClient() {
  const { language } = useLanguage();
  const t = useT();

  // Prepare schema data to match ProductSpecification interface
  const schemaProducts = productCategories.map(cat => ({
    sku: cat.slug,
    name: cat.name,
    nameAr: cat.nameAr || cat.name,
    diameter: 'Various',
    pressureRating: 'PN6 - PN25',
    material: 'UPVC/PVC/PP-R/PEX/HDPE',
    standards: ['ISO 9001', 'DIN', 'BS EN'],
    temperatureRange: '0°C - 95°C',
    color: 'Various',
    length: 'Various',
    application: ['Infrastructure', 'Construction', 'Plumbing'],
    availability: 'InStock' as const,
    // Extra fields for logic if needed, but ignored by strict type if strictly typed
    image: cat.image,
    url: `https://crownplasticuae.com/products/${cat.slug}`
  }));

  return (
    <ProductBackgroundPattern pattern="fine" glow="subtle" patternOpacity={0.4}>
      {/* SEO Schemas */}
      <ProductsBreadcrumb />
      <ProductListSchema
        products={schemaProducts}
        categoryName="Crown Plastic Pipes Product Range"
        categoryUrl="https://crownplasticuae.com/products"
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: CINEMATIC MOSAIC HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[600px] lg:h-[700px] flex items-center overflow-hidden bg-[#001424]">

        {/* A) Single Hero Cover Image — first sub-product's premium pedestal shot */}
        {(() => {
          const heroImage = productCategories[0]?.subProducts[0]?.image;
          return heroImage ? (
            <div className="absolute inset-0">
              <Image
                src={heroImage}
                alt="Crown Plastic Pipes premium product range"
                fill
                sizes="100vw"
                quality={85}
                className="object-cover"
                priority
              />
            </div>
          ) : null;
        })()}

        {/* B) Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-slate-900/40" />

        {/* C) Radial Glow for Depth */}
        <RadialGlowOverlay intensity="strong" position="center" />

        {/* D) Hero Content */}
        <div className="relative z-10 w-full pt-24 lg:pt-32">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Column: Text & Badges */}
              <div>
                <AnimateOnScroll animation="fade-up" delay={0}>
                  <ProductBadgeRow gap="sm" className="mb-6">
                    <ProductHeroBadge variant="glass" size="sm">{t('products.hub.badge_iso')}</ProductHeroBadge>
                    <ProductHeroBadge variant="glass" size="sm">{t('products.hub.badge_lifespan')}</ProductHeroBadge>
                    <ProductHeroBadge variant="glass" size="sm">{t('products.hub.badge_gcc')}</ProductHeroBadge>
                  </ProductBadgeRow>

                  <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    {t('products.hub.hero_title_line1')} <br className="hidden md:block" />
                    <span className="text-primary-light">{t('products.hub.hero_title_line2')}</span>
                  </h1>

                  <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
                    {t('products.hub.hero_subtitle')}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/resources"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                    >
                      {t('products.hub.request_catalogue')}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Right Column: Floating Stats Cards (Desktop Only) */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <AnimateOnScroll animation="fade-left" delay={200}>
                  <div className="bg-[#001424]/60 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 h-full flex flex-col justify-center">
                    <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">13</div>
                    <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">{t('products.hub.stat_families')}</div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-left" delay={300}>
                  <div className="bg-[#001424]/60 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 h-full flex flex-col justify-center">
                    <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">5,000+</div>
                    <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">{t('products.hub.stat_variants')}</div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-left" delay={400} className="col-span-2">
                  <div className="bg-[#001424]/60 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 h-full flex items-center justify-between">
                    <div>
                      <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">24/7</div>
                      <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">{t('products.hub.stat_production')}</div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <span className="text-3xl grayscale brightness-200">🏭</span>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: CORE FAMILIES GRID
      ═══════════════════════════════════════════════════════════════════════ */}
      <ProductSection background="white" size="lg" showPattern patternType="dot">
        <ProductSectionHeader
          title={t('products.hub.section_title')}
          subtitle={t('products.hub.section_subtitle')}
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productCategories.map((cat, index) => {
            const catName = language === 'ar' ? (cat.nameAr || cat.name) : cat.name;
            const catDesc = language === 'ar' ? (cat.shortDescriptionAr || cat.shortDescription) : cat.shortDescription;

            return (
              <AnimateOnScroll key={cat.slug} animation="fade-up" delay={index * 100}>
                <Link href={`/products/${cat.slug}`} className="block h-full group">
                  <ProductCardSurface variant="default" hoverable padding="none" className="h-full flex flex-col">

                    {/* Dynamic Carousel cycling through sub-category cover images */}
                    <div className="relative h-64 overflow-hidden rounded-t-2xl bg-slate-100">
                      {(() => {
                        // Build ordered image list from sub-products that have images,
                        // then fall back to the category's own image if needed.
                        const subImages = (cat.subProducts ?? [])
                          .map((sp) => sp.image)
                          .filter((img): img is string => !!img);

                        const carouselImages = subImages.length > 0
                          ? subImages
                          : cat.image ? [cat.image] : [];

                        return (
                          <CategoryCardCarousel
                            images={carouselImages}
                            alt={catName}
                            icon={cat.icon}
                          />
                        );
                      })()}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                        {catName}
                      </h3>

                      <p className="text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                        {catDesc}
                      </p>

                      <div className="flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all">
                        {t('products.hub.view_range')}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
          SECTION 3: CTA & SUPPORT
      ═══════════════════════════════════════════════════════════════════════ */}
      <SectionDivider variant="blue" />
      <ProductSection background="dark-slate" size="md">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('products.hub.cta_title')}
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            {t('products.hub.cta_subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              {t('products.hub.download_catalogues')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              {t('products.hub.contact_engineers')}
            </Link>
          </div>
        </div>
      </ProductSection>

    </ProductBackgroundPattern>
  );
}
