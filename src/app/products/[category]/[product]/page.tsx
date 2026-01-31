'use client';

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT DETAIL PAGE - Enhanced with Crown Design System
// ═══════════════════════════════════════════════════════════════════════════════

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, ChevronRight, CheckCircle2 } from 'lucide-react';
import { AnimateOnScroll, PdfViewer } from '@/components/common';
import { getCategoryBySlug, getSubProductBySlugs } from '@/config/products';
import { getDocsByProduct } from '@/config/docs';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/i18n';
import { ProductDetailBreadcrumb } from '@/components/schemas/BreadcrumbSchema';
import { ProductDetailSchema } from '@/components/schemas/ProductSchema';
import { upvcPressurePipeSpecs, type ProductSpecification } from '@/config/schemas';
import { hasProductDetail, getProductDetail } from '@/config/productDetails';
import { ProductDetailLayout } from '@/components/products';

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

export default function ProductPage({ params }: ProductPageProps) {
  const { category, product: productSlug } = params;
  const { language } = useLanguage();
  const t = useT();
  const category_data = getCategoryBySlug(category);
  const product = getSubProductBySlugs(category, productSlug);
  
  if (!category_data || !product) {
    notFound();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // Check if this product has an enhanced detail page configuration
  // If so, render the new ProductDetailLayout instead of the basic layout
  // ═══════════════════════════════════════════════════════════════════════════
  if (hasProductDetail(productSlug)) {
    const detailConfig = getProductDetail(productSlug);
    if (detailConfig) {
      return <ProductDetailLayout product={detailConfig} />;
    }
  }

  // Get technical documents for this specific product
  const productDocuments = getDocsByProduct(category, productSlug);

  const catName = language === 'ar' ? (category_data.nameAr || category_data.name) : category_data.name;
  const prodName = language === 'ar' ? (product.nameAr || product.name) : product.name;
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
    { label: t('products_extended.table_material'), value: t('products_extended.table_material_value') },
    { label: t('products_extended.table_standards'), value: product.standards.join(', '), highlight: true },
    { label: t('products_extended.table_color'), value: t('products_extended.table_color_value') },
    { label: t('products_extended.table_size_range'), value: t('products_extended.contact_for_specs') },
    { label: t('products_extended.table_pressure_rating'), value: t('products_extended.contact_for_specs') },
  ];

  return (
    <ProductBackgroundPattern pattern="fine" glow="subtle" patternOpacity={0.3}>
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
      <ProductSection background="soft-blue" size="lg" showGlow>
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
              <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
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
                {t('products_extended.standards_certifications')}
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
                  {t('products_extended.key_features')}
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
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/20"
              >
                {t('products_extended.request_quote')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <Download className="w-5 h-5" />
                {t('products_extended.download_specs')}
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
          title={t('products_extended.tech_specifications')}
          eyebrow="Technical Data"
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
            <ProductSectionHeader 
              title={t('products_extended.tech_documents')}
              subtitle={`${t('products_extended.tech_docs_for')} ${prodName}`}
              align="center"
            />
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {productDocuments.map((doc, index) => (
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
          RELATED PRODUCTS
      ═══════════════════════════════════════════════════════════════════════ */}
      {category_data.subProducts.filter((p) => p.slug !== product.slug).length > 0 && (
        <>
          <SectionDivider variant="light" />
          <ProductSection background="white" size="md">
            <ProductSectionHeader 
              title={`${t('products_extended.other_products_in')} ${catName}`}
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
                            {t('products_extended.view_details')}
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
            Need assistance with {prodName}?
          </h2>
          <p className="text-slate-300 mb-8">
            Our technical team is here to help you select the right products for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </ProductSection>
    </ProductBackgroundPattern>
  );
}
