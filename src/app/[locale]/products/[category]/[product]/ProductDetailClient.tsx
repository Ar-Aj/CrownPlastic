'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { notFound } from 'next/navigation';
import Link from '@/components/common/LocaleLink';
import Image from 'next/image';
import { ArrowRight, Download, ChevronRight, CheckCircle2 } from 'lucide-react';
import { AnimateOnScroll } from '@/components/common';
import { getCategoryBySlug, getSubProductBySlugs } from '@/config/products';
import { getDocsByProduct } from '@/config/docs';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/i18n';
import { ProductDetailBreadcrumb } from '@/components/schemas/BreadcrumbSchema';
import { ProductDetailSchema, EnhancedProductSchema } from '@/components/schemas/ProductSchema';
import { upvcPressurePipeSpecs, type ProductSpecification } from '@/config/schemas';
import { hasProductDetail, getProductDetail } from '@/config/productDetails';
import { ProductDetailLayout } from '@/components/products';
import { trackProductView, trackButtonClick } from '@/lib/analytics';

// Design System imports
import {
  ProductBackgroundPattern,
  ProductSection,
  ProductSectionHeader,
  ProductCardSurface,
  ProductHeroBadge,
  ProductBadgeRow,
  ProductSpecsTable,
  SectionDivider,
  PipeBorderWrapper,
} from '@/components/products/design-system';

interface ProductPageProps {
  params: { category: string; product: string };
}

export default function ProductDetailClient({ params }: ProductPageProps) {
  const { category, product: productSlug } = params;
  const { language } = useLanguage();
  const t = useT();
  const category_data = getCategoryBySlug(category);
  const product = getSubProductBySlugs(category, productSlug);

  const [previewResource, setPreviewResource] = useState<{ src: string; title: string } | null>(null);

  const handleClosePreview = useCallback(() => {
    setPreviewResource(null);
  }, []);

  // ── GA4: track product detail view (must be above all early returns) ───────
  const prodNameForTracking = product
    ? (language === 'ar' ? (product.nameAr || product.name) : product.name)
    : productSlug;
  useEffect(() => {
    trackProductView(category, prodNameForTracking);
  }, [category, prodNameForTracking]);

  if (!category_data || !product) {
    notFound();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Check if this product has an enhanced detail page configuration
  // If so, render the new ProductDetailLayout instead of the basic layout
  // ═══════════════════════════════════════════════════════════════════════════
  const catName = language === 'ar' ? (category_data.nameAr || category_data.name) : category_data.name;
  const prodName = language === 'ar' ? (product.nameAr || product.name) : product.name;

  if (hasProductDetail(productSlug)) {
    const detailConfig = getProductDetail(productSlug);
    if (detailConfig) {
      console.log('Fabrication Data:', detailConfig.renderImage, detailConfig.diagramImage);
      return (
        <>
          <ProductDetailBreadcrumb
            categoryName={catName}
            categorySlug={category}
            productName={prodName}
            productSlug={productSlug}
          />
          <EnhancedProductSchema 
            product={detailConfig} 
            categoryName={catName} 
            categorySlug={category} 
          />
          <ProductDetailLayout product={detailConfig} />
        </>
      );
    }
  }

  // Get technical documents for this specific product (fallback logic)
  const productDocuments = getDocsByProduct(category, productSlug);
  const prodDesc = language === 'ar' ? (product.shortDescriptionAr || product.shortDescription) : product.shortDescription;
  const prodFeatures = language === 'ar' ? (product.featuresAr || product.features || []) : (product.features || []);

  // Image fallback logic: product.image → category_data.image → null (show icon)
  const productImage = product.image || category_data.image;

  // Find matching product spec for schema (if available)
  const productSpec: ProductSpecification | undefined = upvcPressurePipeSpecs.find(
    (spec) => spec.sku.toLowerCase().includes(productSlug.replace(/-/g, ''))
  ) || (category === 'upvc-pressure' ? {
    sku: `UPVC-${productSlug.toUpperCase()}`,
    name: prodName,
    nameAr: product.nameAr || prodName,
    diameter: '20mm - 400mm',
    pressureRating: 'PN10, PN16',
    material: 'Unplasticized Polyvinyl Chloride (UPVC)',
    standards: product.standards,
    temperatureRange: '-10°C to +40°C',
    color: 'Grey',
    length: '3m, 5m, 6m',
    application: ['Potable water supply', 'Irrigation', 'Industrial water transport'],
    availability: 'InStock' as const,
  } : undefined);

  // Build specs for table
  const specsData = [
    { label: t('products.detail.table_material'), value: t('products.detail.table_material_value') },
    { label: t('products.detail.table_standards'), value: product.standards.join(', '), highlight: true },
    { label: t('products.detail.table_color'), value: t('products.detail.table_color_value') },
    { label: t('products.detail.table_size_range'), value: t('products.detail.contact_for_specs') },
    { label: t('products.detail.table_pressure_rating'), value: t('products.detail.contact_for_specs') },
  ];

  return (
    <ProductBackgroundPattern pattern="fine" glow="subtle" patternOpacity={0.3} className="pt-24 md:pt-28 lg:pt-32">
      {/* Product Detail Breadcrumb Schema */}
      <ProductDetailBreadcrumb
        categoryName={catName}
        categorySlug={category}
        productName={prodName}
        productSlug={productSlug}
      />

      {/* Product Detail Schema for AI Answer Engines */}
      {productSpec && (
        <ProductDetailSchema
          product={productSpec}
          categoryName={catName}
          categorySlug={category}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <ProductSection background="soft-blue" size="lg" showGlow firstSection>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Product Image */}
          <div className="relative">
            {/* Radial glow behind image */}
            <div className="absolute -inset-8 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-2xl" />

            <PipeBorderWrapper thickness={3} radius="xl" glow>
              <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
                {productImage ? (
                  <Image
                    src={productImage}
                    alt={`${prodName} - ${catName} from Crown Plastic Pipes`}
                    width={600}
                    height={600}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    className="w-full h-full object-contain p-4"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-9xl">{category_data.icon}</span>
                  </div>
                )}

                {/* Category badge overlay */}
                <div className="absolute top-4 left-4">
                  <ProductHeroBadge variant="glass" size="sm">
                    {catName}
                  </ProductHeroBadge>
                </div>
              </div>
            </PipeBorderWrapper>
          </div>

          {/* Right: Product Details */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/products" className="hover:text-primary transition-colors">{t('products.detail.breadcrumb_products')}</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/products/${category}`} className="hover:text-primary transition-colors">{catName}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-700 font-medium truncate max-w-[150px]">{prodName}</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              {prodName}
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {prodDesc}
            </p>

            {/* Standards badges */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                {t('products.detail.standards_certifications')}
              </h3>
              <ProductBadgeRow gap="sm">
                {product.standards.map((standard) => (
                  <ProductHeroBadge key={standard} variant="solid" size="md">
                    {standard}
                  </ProductHeroBadge>
                ))}
              </ProductBadgeRow>
            </div>

            {/* Features */}
            {prodFeatures && prodFeatures.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                  {t('products.detail.key_features')}
                </h3>
                <ul className="space-y-2">
                  {prodFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/contact-us?tab=quote&product=${productSlug}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/20"
                onClick={() => trackButtonClick('Request a Quote', 'product_detail_hero')}
              >
                {t('products.detail.request_quote')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <Download className="w-5 h-5" />
                {t('products.detail.download_specs')}
              </Link>
            </div>
          </div>
        </div>
      </ProductSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          TECHNICAL SPECIFICATIONS
      ═══════════════════════════════════════════════════════════════════════ */}
      <SectionDivider variant="light" />
      <ProductSection background="white" size="md" showPattern patternType="cross">
        <ProductSectionHeader
          title={t('products.detail.tech_specifications')}
          eyebrow={t('products.detail.tech_data_eyebrow')}
        />

        <div className="max-w-3xl">
          <ProductSpecsTable specs={specsData} twoColumn />
        </div>
      </ProductSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          PRODUCT DOCUMENTS
      ═══════════════════════════════════════════════════════════════════════ */}
      {productDocuments.length > 0 && (
        <>
          <SectionDivider variant="blue" />
          <ProductSection background="soft" size="md">
            <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <ProductSectionHeader
                  title={t('products.detail.tech_documents')}
                  subtitle={`${t('products.detail.tech_docs_for')} ${prodName}.`}
                  align="center"
                />
              </div>

              <div className="flex flex-col items-center gap-4 w-full max-w-3xl mx-auto">
                {productDocuments.map((doc, index) => (
                  <AnimateOnScroll key={doc.src} animation="fade-up" delay={index * 80} className="w-full">
                    <button
                      onClick={() => setPreviewResource({ src: doc.src, title: language === 'ar' && doc.titleAr ? doc.titleAr : doc.title })}
                      className="group w-full flex text-left p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-start gap-3 w-full">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Download className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">
                            {language === 'ar' && doc.titleAr ? doc.titleAr : doc.title}
                          </h4>
                          {(language === 'ar' && doc.descriptionAr ? doc.descriptionAr : doc.description) && (
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {language === 'ar' && doc.descriptionAr ? doc.descriptionAr : doc.description}
                            </p>
                          )}
                          <p className="text-xs text-primary mt-2 flex items-center gap-1">
                            {t('products.detail.view_tech_doc')}
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </button>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </ProductSection>
        </>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          RELATED PRODUCTS
      ═══════════════════════════════════════════════════════════════════════ */}
      {category_data.subProducts.filter((p) => p.slug !== product.slug).length > 0 && (
        <>
          <SectionDivider variant="light" />
          <ProductSection background="white" size="md">
            <ProductSectionHeader
              title={`${t('products.detail.other_products_in')} ${catName}`}
            />

            <div className="grid md:grid-cols-3 gap-6">
              {category_data.subProducts
                .filter((p) => p.slug !== product.slug)
                .slice(0, 3)
                .map((p, index) => {
                  const relProdName = language === 'ar' ? (p.nameAr || p.name) : p.name;
                  const relProdDesc = language === 'ar' ? (p.shortDescriptionAr || p.shortDescription) : p.shortDescription;

                  return (
                    <AnimateOnScroll key={p.slug} animation="fade-up" delay={index * 80}>
                      <Link href={`/products/${category_data.slug}/${p.slug}`} className="block h-full group">
                        <ProductCardSurface variant="default" hoverable className="h-full">
                          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                            {relProdName}
                          </h3>
                          <p className="text-sm text-slate-600 mb-4 line-clamp-2">{relProdDesc}</p>
                          <span className="inline-flex items-center text-sm font-semibold text-primary">
                            {t('products.detail.view_details')}
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0 transition-transform motion-reduce:transition-none" />
                          </span>
                        </ProductCardSurface>
                      </Link>
                    </AnimateOnScroll>
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
            {t('products.detail.need_assistance_with')} {prodName}?
          </h2>
          <p className="text-slate-300 mb-8">
            {t('products.detail.cta_subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              {t('products.detail.contact_us')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
            >
              {t('products.detail.view_all_resources')}
            </Link>
          </div>
        </div>
      </ProductSection>

      {/* 1:1 Copied PDF Viewer Modal Overlay */}
      {previewResource && (
        <PdfViewerModal
          src={previewResource.src}
          title={previewResource.title}
          onClose={handleClosePreview}
        />
      )}
    </ProductBackgroundPattern>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// INLINE PDF VIEWER MODAL (1:1 Copy from Resources)
// ═══════════════════════════════════════════════════════════════════════════════

function PdfViewerModal({
    src,
    title,
    onClose,
}: {
    src: string;
    title: string;
    onClose: () => void;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const pdfUrl = `${src}#toolbar=1&navpanes=0&view=Fit`;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (typeof document === 'undefined') return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex flex-col bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-viewer-title"
        >
            {/* Header bar */}
            <div
                className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white flex-shrink-0 shadow-sm"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex-1 min-w-0 pr-4">
                    <h3 id="pdf-viewer-title" className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-1">
                        {title}
                    </h3>
                </div>
                <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-shrink-0 transition-colors"
                    aria-label="Close document viewer"
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* PDF Container */}
            <div
                className="flex-1 bg-gray-100 relative min-h-0"
                onClick={(e) => e.stopPropagation()}
            >
                {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
                        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
                        <p className="text-gray-600 text-sm font-medium">Loading document…</p>
                    </div>
                )}
                <iframe
                    src={pdfUrl}
                    className="w-full h-full border-0"
                    title={title}
                    onLoad={() => setIsLoading(false)}
                    allow="fullscreen"
                />
            </div>
        </div>,
        document.body
    );
}
