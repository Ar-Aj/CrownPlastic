'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT CATEGORY PAGE - Enhanced with Crown Design System
// ═══════════════════════════════════════════════════════════════════════════════

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Building2, Truck } from 'lucide-react';
import { AnimateOnScroll, PdfViewer } from '@/components/common';
import { getCategoryBySlug } from '@/config/products';
import { getDocsByCategory } from '@/config/docs';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/i18n';
import { ProductCategoryBreadcrumb } from '@/components/schemas/BreadcrumbSchema';
import { ProductListSchema } from '@/components/schemas/ProductSchema';
import { upvcPressurePipeSpecs } from '@/config/schemas';

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

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const { language } = useLanguage();
  const t = useT();
  const cat = getCategoryBySlug(category);
  
  if (!cat) {
    notFound();
  }

  const catName = language === 'ar' ? (cat.nameAr || cat.name) : cat.name;
  const catDesc = language === 'ar' ? (cat.shortDescriptionAr || cat.shortDescription) : cat.shortDescription;

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
      <section className="relative overflow-hidden">
        {/* Hero image background */}
        {cat.image && (
          <div className="absolute inset-0">
            <Image
              src={cat.image}
              alt={`${catName} - Crown Plastic Pipes product range`}
              fill
              sizes="100vw"
              quality={85}
              className="object-cover"
              priority
            />
            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
          </div>
        )}
        
        {/* Fallback gradient if no image */}
        {!cat.image && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-800" />
        )}
        
        {/* Radial glow accent */}
        <RadialGlowOverlay intensity="normal" position="center" />
        
        {/* Hero content */}
        <div className="relative z-10 py-16 md:py-24 lg:py-32">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white font-medium">{catName}</span>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text content */}
              <div>
                {/* Category icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <span className="text-4xl">{cat.icon}</span>
                </div>
                
                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {catName}
                </h1>
                
                {/* Description */}
                <p className="text-lg text-white/80 mb-6 max-w-xl leading-relaxed">
                  {catDesc}
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
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    Download Catalogue
                  </Link>
                </div>
              </div>
              
              {/* Right: Stats cards (optional enhancement) */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <ProductCardSurface variant="glass" padding="md" className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-1">{cat.subProducts.length}</div>
                  <div className="text-sm text-slate-500">Product Families</div>
                </ProductCardSurface>
                <ProductCardSurface variant="glass" padding="md" className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-1">ISO</div>
                  <div className="text-sm text-slate-500">9001:2015 Certified</div>
                </ProductCardSurface>
                <ProductCardSurface variant="glass" padding="md" className="text-center col-span-2">
                  <div className="text-3xl font-bold text-slate-800 mb-1">30+</div>
                  <div className="text-sm text-slate-500">Years Manufacturing Excellence</div>
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
          title={`${t('products_extended.products_in_category')} ${catName}`}
          subtitle={t('products_extended.explore_range')}
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
                    {/* Product image */}
                    {product.image && (
                      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-slate-100">
                        <Image
                          src={product.image}
                          alt={prodName}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 motion-reduce:group-hover:scale-100 transition-transform duration-500 motion-reduce:transition-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    )}
                    
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
                        <span>View Details</span>
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
              title={t('products_extended.tech_documents')}
              subtitle={t('products_extended.tech_documents_desc')}
              align="center"
            />
            
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
              <h3 className="font-bold text-slate-900 mb-2">{t('products_extended.quality_certified')}</h3>
              <p className="text-sm text-slate-600">{t('products_extended.quality_certified_desc')}</p>
            </ProductCardSurface>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={100}>
            <ProductCardSurface variant="default" hoverable className="text-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t('products_extended.built_to_last')}</h3>
              <p className="text-sm text-slate-600">{t('products_extended.built_to_last_desc')}</p>
            </ProductCardSurface>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={200}>
            <ProductCardSurface variant="default" hoverable className="text-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t('products_extended.fast_delivery')}</h3>
              <p className="text-sm text-slate-600">{t('products_extended.fast_delivery_desc')}</p>
            </ProductCardSurface>
          </AnimateOnScroll>
        </div>
      </ProductSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <ProductSection background="dark-slate" size="md">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('products_extended.need_assistance')}
          </h2>
          <p className="text-slate-300 mb-8">
            {t('products_extended.assistance_desc')}
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
              View All Products
            </Link>
          </div>
        </div>
      </ProductSection>
    </ProductBackgroundPattern>
  );
}
