'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { ChevronRight, Download, CheckCircle2, XCircle } from 'lucide-react';
import { type ProductDetailConfig, PRODUCT_DETAIL_SECTIONS } from '@/types/productDetail';
import { PipesSection } from './PipesTable';
import { FittingsSection } from './FittingsGallery';
import { useLanguage } from '@/context/LanguageContext';
import { getCategoryBySlug } from '@/config/products';

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
  RadialGlowOverlay,
  PipeBorderWrapper,
} from '@/components/products/design-system';

interface ProductDetailLayoutProps {
  product: ProductDetailConfig;
}

/**
 * Reusable product detail layout component.
 * Renders all sections conditionally based on available data.
 * Uses the new product detail design system for consistent, premium styling.
 */
export default function ProductDetailLayout({ product }: ProductDetailLayoutProps) {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');
  const category = getCategoryBySlug(product.categorySlug);

  // Get localized content
  const title = language === 'ar' ? (product.titleAr || product.title) : product.title;
  const shortDesc = language === 'ar' 
    ? (product.shortDescriptionAr || product.shortDescription) 
    : product.shortDescription;
  const overview = language === 'ar' ? (product.overviewAr || product.overview) : product.overview;
  const features = language === 'ar' ? (product.featuresAr || product.features) : product.features;
  const applications = language === 'ar' 
    ? (product.applicationsAr || product.applications) 
    : product.applications;
  const dosDonts = language === 'ar' ? (product.dosDontsAr || product.dosDonts) : product.dosDonts;
  const categoryName = category 
    ? (language === 'ar' ? (category.nameAr || category.name) : category.name) 
    : '';

  // Deduplicate features and applications
  const uniqueFeatures = useMemo(() => {
    if (!features) return [];
    return Array.from(new Set(features));
  }, [features]);

  const uniqueApplications = useMemo(() => {
    if (!applications) return [];
    return Array.from(new Set(applications));
  }, [applications]);

  // Determine which sections to show
  const visibleSections = useMemo(() => {
    return PRODUCT_DETAIL_SECTIONS.filter((section) => {
      switch (section.id) {
        case 'overview': return !!overview;
        case 'features': return uniqueFeatures.length > 0;
        case 'applications': return uniqueApplications.length > 0;
        case 'variants': return product.variants && product.variants.length > 0;
        case 'pipes': return product.pipesTables && product.pipesTables.length > 0;
        case 'fittings': return product.fittings && product.fittings.length > 0;
        case 'video': return !!product.videoUrl;
        case 'dos-donts': return dosDonts && (dosDonts.dos.length > 0 || dosDonts.donts.length > 0);
        default: return false;
      }
    });
  }, [overview, uniqueFeatures, uniqueApplications, product.variants, product.pipesTables, product.fittings, product.videoUrl, dosDonts]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of visibleSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  // Extract standards/badges from title or features for hero badges
  const heroBadges = useMemo(() => {
    const badges: string[] = [];
    
    // Extract from title - e.g., "DIN 8063", "BS EN 1452", "PN 10"
    const standardPatterns = [
      /DIN\s*\d+/gi,
      /BS\s*EN\s*\d+/gi,
      /ASTM\s*[A-Z]?\s*\d+/gi,
      /PN\s*\d+/gi,
      /SDR\s*[\d.]+/gi,
      /ISO\s*\d+/gi,
    ];
    
    for (const pattern of standardPatterns) {
      const matches = title.match(pattern);
      if (matches) {
        badges.push(...matches.map(m => m.toUpperCase().replace(/\s+/g, ' ')));
      }
    }
    
    return Array.from(new Set(badges)).slice(0, 4); // Max 4 badges
  }, [title]);

  return (
    <ProductBackgroundPattern pattern="fine" glow="subtle" patternOpacity={0.35} baseColor="blue" vignette>
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Mid blue band with light cards
      ═══════════════════════════════════════════════════════════════════════════ */}
      <ProductSection background="soft-blue" size="lg" showGlow showPattern patternType="fine">
        {/* Section-level technical art: glow + diagonal band + hero nodes */}
        <div className="pointer-events-none absolute inset-0">
          <RadialGlowOverlay intensity="normal" position="center" />
          <div className="absolute -top-24 -right-20 w-80 h-80 bg-gradient-to-bl from-primary/12 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_0_6px_rgba(0,114,188,0.25)]" />
          <div className="absolute top-12 right-32 w-1.5 h-1.5 rounded-full bg-primary/40 shadow-[0_0_0_4px_rgba(0,114,188,0.2)]" />
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start relative">
          {/* Left column - Content card */}
          <div className="lg:col-span-3">
            <ProductCardSurface variant="elevated" padding="lg" className="bg-white/95 backdrop-blur-sm">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
                <Link href="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
                <ChevronRight className="w-4 h-4" />
                {category && (
                  <>
                    <Link 
                      href={`/products/${product.categorySlug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {categoryName}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
                <span className="text-slate-700 font-medium truncate max-w-[200px] md:max-w-none">
                  {title}
                </span>
              </nav>

              {/* Category/Eyebrow */}
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full mb-3">
                {categoryName}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {title}
              </h1>

              {/* Short description */}
              <p className="text-lg text-slate-600 max-w-2xl mb-6 leading-relaxed">
                {shortDesc}
              </p>

              {/* Badge row - Standards/Badges */}
              {heroBadges.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Standards & Certifications
                  </h3>
                  <ProductBadgeRow gap="sm">
                    {heroBadges.map((badge) => (
                      <ProductHeroBadge key={badge} variant="glass" size="md">
                        {badge}
                      </ProductHeroBadge>
                    ))}
                  </ProductBadgeRow>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/20"
                >
                  Request Quote
                  <ChevronRight className="w-4 h-4" />
                </Link>
                {product.downloads && product.downloads.length > 0 && (
                  <a
                    href={product.downloads[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download Catalogue
                  </a>
                )}
              </div>
            </ProductCardSurface>
          </div>

          {/* Right column - Product visual with PipeBorderWrapper */}
          <div className="lg:col-span-2 hidden lg:block">
            <PipeBorderWrapper thickness={3} radius="xl" glow>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="heroPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="#0072BC" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#heroPattern)" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-primary/60 text-xs font-semibold uppercase tracking-wider mb-2">
                    Crown Plastic Pipes
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-4">
                    Premium Quality
                  </div>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>ISO 9001:2015 Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>GCC Market Leader</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>52+ Countries</span>
                    </div>
                  </div>
                  
                  {/* Pressure class badges if available */}
                  {heroBadges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200">
                      {heroBadges.slice(0, 3).map((badge) => (
                        <ProductHeroBadge key={badge} variant="solid" size="sm">
                          {badge}
                        </ProductHeroBadge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </PipeBorderWrapper>
          </div>
        </div>
      </ProductSection>

      {/* ═══════════════════════════════════════════════════════════════════════════
          STICKY SCROLL NAVIGATION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-1 min-w-max py-3">
              {visibleSections.map((section) => {
                const label = language === 'ar' ? (section.labelAr || section.label) : section.label;
                const isActive = activeSection === section.id;
                
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-slate-600 hover:text-primary hover:bg-slate-100'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════════════
          OVERVIEW SECTION - Light section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {overview && (
        <ProductSection id="overview" background="white" size="md">
          <ProductSectionHeader 
            title="Overview" 
            subtitle="Product introduction and key characteristics"
          />
          <ProductCardSurface variant="elevated" padding="lg">
            <div className="prose prose-lg max-w-4xl">
              <p className="text-lg text-slate-600 leading-relaxed">{overview}</p>
            </div>
          </ProductCardSurface>
        </ProductSection>
      )}

      <SectionDivider variant="light" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          FEATURES SECTION - Mid blue section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {uniqueFeatures.length > 0 && (
        <ProductSection id="features" background="soft-blue" size="md" showPattern patternType="fine" showGlow>
          <div className="pointer-events-none absolute inset-0">
            <RadialGlowOverlay intensity="subtle" position="top" />
            <div className="absolute bottom-8 right-16 w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_0_4px_rgba(0,114,188,0.2)]" />
          </div>
          <ProductSectionHeader 
            title="Features" 
            subtitle="Technical advantages and key benefits of this product range"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {uniqueFeatures.map((feature, index) => (
              <ProductCardSurface key={index} variant="elevated" padding="md" hoverable>
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-slate-200 via-primary/30 to-slate-200" />
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </div>
              </ProductCardSurface>
            ))}
          </div>
        </ProductSection>
      )}

      <SectionDivider variant="blue" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          APPLICATIONS SECTION - Light section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {uniqueApplications.length > 0 && (
        <ProductSection id="applications" background="white" size="md" showGlow>
          <ProductSectionHeader 
            title="Applications" 
            subtitle="Ideal use cases and industries for this product"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {uniqueApplications.map((app, index) => (
              <ProductCardSurface key={index} variant="accent" padding="md" hoverable accent="blue">
                <span className="text-sm font-semibold text-slate-800">{app}</span>
              </ProductCardSurface>
            ))}
          </div>
        </ProductSection>
      )}

      <SectionDivider variant="light" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          VARIANTS SECTION - Mid blue section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {product.variants && product.variants.length > 0 && (
        <ProductSection id="variants" background="soft-blue" size="md" showPattern patternType="dot" showGlow>
          <div className="pointer-events-none absolute inset-0">
            <RadialGlowOverlay intensity="subtle" position="center" />
            <div className="absolute top-10 left-16 w-1.5 h-1.5 rounded-full bg-primary/45 shadow-[0_0_0_4px_rgba(0,114,188,0.18)]" />
          </div>
          <ProductSectionHeader 
            title={language === 'ar' 
              ? (product.variantsSectionTitleAr || product.variantsSectionTitle || 'التكوينات') 
              : (product.variantsSectionTitle || 'Product Configurations')} 
            subtitle="Available design types and configurations"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {product.variants.map((variant) => {
              const variantTitle = language === 'ar' ? (variant.titleAr || variant.title) : variant.title;
              const variantDesc = language === 'ar' ? (variant.descriptionAr || variant.description) : variant.description;
              const variantFeatures = language === 'ar' ? (variant.featuresAr || variant.features) : variant.features;
              
              return (
                <ProductCardSurface key={variant.id} variant="elevated" padding="lg" hoverable>
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-slate-200 via-primary/30 to-slate-200" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{variantTitle}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{variantDesc}</p>
                  {variantFeatures.length > 0 && (
                    <ul className="space-y-2">
                      {variantFeatures.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </ProductCardSurface>
              );
            })}
          </div>
        </ProductSection>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          PIPES TABLES SECTION - Light section
      ═══════════════════════════════════════════════════════════════════════════ */}
      <PipesSection tables={product.pipesTables} />

      <SectionDivider variant="medium" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          FITTINGS GALLERY SECTION - Mid blue section
      ═══════════════════════════════════════════════════════════════════════════ */}
      <FittingsSection fittings={product.fittings} />

      <SectionDivider variant="light" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          VIDEO SECTION - Light section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {product.videoUrl && (
        <ProductSection id="video" background="white" size="md">
          <ProductSectionHeader title="Product Video" align="center" />
          <div className="max-w-4xl mx-auto">
            <ProductCardSurface variant="elevated" padding="none" className="overflow-hidden">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl">
                <iframe
                  src={product.videoUrl}
                  title={`${title} Product Video`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </ProductCardSurface>
          </div>
        </ProductSection>
      )}

      <SectionDivider variant="blue" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          DO'S & DON'TS SECTION - Mid blue section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {dosDonts && (dosDonts.dos.length > 0 || dosDonts.donts.length > 0) && (
        <ProductSection id="dos-donts" background="soft-blue" size="md" showPattern patternType="cross" showGlow>
          <div className="pointer-events-none absolute inset-0">
            <RadialGlowOverlay intensity="subtle" position="bottom" />
            <div className="absolute top-12 right-20 w-1.5 h-1.5 rounded-full bg-primary/45 shadow-[0_0_0_4px_rgba(0,114,188,0.18)]" />
          </div>
          <ProductSectionHeader title="Installation Guidelines" subtitle="Best practices for optimal performance and longevity" />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {/* Do's */}
            {dosDonts.dos.length > 0 && (
              <ProductCardSurface variant="elevated" padding="lg">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-400/60 to-emerald-100" />
                <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-600 mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                  Do&apos;s
                </h3>
                <ul className="space-y-3">
                  {dosDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-slate-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </ProductCardSurface>
            )}

            {/* Don'ts */}
            {dosDonts.donts.length > 0 && (
              <ProductCardSurface variant="elevated" padding="lg">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-red-100 via-red-400/60 to-red-100" />
                <h3 className="flex items-center gap-2 text-lg font-bold text-red-600 mb-4">
                  <XCircle className="w-6 h-6" />
                  Don&apos;ts
                </h3>
                <ul className="space-y-3">
                  {dosDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                        ✗
                      </span>
                      <span className="text-slate-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </ProductCardSurface>
            )}
          </div>
        </ProductSection>
      )}

      <SectionDivider variant="light" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          DOWNLOADS SECTION - Light section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {product.downloads && product.downloads.length > 0 && (
        <ProductSection background="white" size="md">
          <ProductSectionHeader title="Downloads" />
          <div className="flex flex-wrap gap-3">
            {product.downloads.map((download, index) => (
              <a
                key={index}
                href={download.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-50 hover:bg-primary/5 text-slate-700 hover:text-primary px-5 py-3 rounded-lg font-medium transition-all border border-slate-200 hover:border-primary/30"
              >
                <Download className="w-5 h-5" />
                {download.label}
              </a>
            ))}
          </div>
        </ProductSection>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION - Unchanged, dark gradient band
      ═══════════════════════════════════════════════════════════════════════════ */}
      {/* CTA is rendered directly without ProductSection wrapper to preserve exact styling */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need assistance with {title}?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our technical team is here to help you select the right products for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors border border-white/20"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </div>
    </ProductBackgroundPattern>
  );
}
