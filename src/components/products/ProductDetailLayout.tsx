'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { ChevronRight, Download, CheckCircle2, XCircle } from 'lucide-react';
import { type ProductDetailConfig, type ProductVariant, PRODUCT_DETAIL_SECTIONS } from '@/types/productDetail';
import { PipesSection } from './PipesTable';
import { FittingsSection } from './FittingsGallery';
import { useLanguage } from '@/context/LanguageContext';
import { getCategoryBySlug } from '@/config/products';
import {
  PDSection,
  PDSectionHeader,
  PDStatBadge,
  PDCardGrid,
  PDIconFeatureCard,
  PDApplicationCard,
  PDEyebrow,
  PDHeroBadgeRow,
  pdColors,
  pdTypography,
  pdSpacing,
} from '@/components/productDetail';

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
    <div className="min-h-screen bg-white">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Two-column layout
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className={`${pdSpacing.container} py-8 md:py-12 lg:py-16`}>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left column - Content */}
            <div className="lg:col-span-3">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-4" aria-label="Breadcrumb">
                <Link href="/products" className="hover:text-[#0052CC] transition-colors">
                  Products
                </Link>
                <ChevronRight className="w-4 h-4" />
                {category && (
                  <>
                    <Link 
                      href={`/products/${product.categorySlug}`}
                      className="hover:text-[#0052CC] transition-colors"
                    >
                      {categoryName}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
                <span className="text-[#374151] font-medium truncate max-w-[200px] md:max-w-none">
                  {title}
                </span>
              </nav>

              {/* Eyebrow label */}
              <PDEyebrow>{categoryName}</PDEyebrow>

              {/* Title */}
              <h1 className={`${pdTypography.h1} text-[#111827] mb-4`}>
                {title}
              </h1>

              {/* Short description */}
              <p className={`${pdTypography.bodyLg} text-[#6B7280] max-w-2xl mb-6`}>
                {shortDesc}
              </p>

              {/* Badge row */}
              {heroBadges.length > 0 && (
                <PDHeroBadgeRow className="mb-6">
                  {heroBadges.map((badge) => (
                    <PDStatBadge key={badge}>{badge}</PDStatBadge>
                  ))}
                </PDHeroBadgeRow>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#0052CC] hover:bg-[#003d99] text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
                >
                  Request Quote
                  <ChevronRight className="w-4 h-4" />
                </Link>
                {product.downloads && product.downloads.length > 0 && (
                  <a
                    href={product.downloads[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#E5EEFF] hover:bg-[#d1e1ff] text-[#0052CC] px-5 py-2.5 rounded-lg font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Catalogue
                  </a>
                )}
              </div>
            </div>

            {/* Right column - Decorative card */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="relative bg-gradient-to-br from-[#0052CC] to-[#003366] rounded-2xl p-6 text-white overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="heroPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#heroPattern)" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                    Crown Plastic Pipes
                  </div>
                  <div className="text-2xl font-bold mb-4">
                    Premium Quality
                  </div>
                  <div className="space-y-2 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-white/60" />
                      <span>ISO 9001:2015 Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-white/60" />
                      <span>GCC Market Leader</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-white/60" />
                      <span>52+ Countries</span>
                    </div>
                  </div>
                  
                  {/* Pressure class badges if available */}
                  {heroBadges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/20">
                      {heroBadges.slice(0, 3).map((badge) => (
                        <span 
                          key={badge}
                          className="px-2 py-1 bg-white/10 rounded text-xs font-semibold"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          STICKY SCROLL NAVIGATION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className={pdSpacing.container}>
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
                        ? 'bg-[#0052CC] text-white shadow-sm'
                        : 'text-[#6B7280] hover:text-[#374151] hover:bg-gray-100'
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
          OVERVIEW SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      {overview && (
        <PDSection id="overview" background="white" size="md">
          <PDSectionHeader title="Overview" />
          <div className="prose prose-lg max-w-4xl">
            <p className={`${pdTypography.bodyLg} text-[#374151]`}>{overview}</p>
          </div>
        </PDSection>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          FEATURES SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      {uniqueFeatures.length > 0 && (
        <PDSection id="features" background="surface" size="md">
          <PDSectionHeader 
            title="Features" 
            subtitle="Technical advantages and key benefits of this product range"
          />
          <PDCardGrid columns={4} gap="md">
            {uniqueFeatures.map((feature, index) => (
              <PDIconFeatureCard key={index} title={feature} />
            ))}
          </PDCardGrid>
        </PDSection>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          APPLICATIONS SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      {uniqueApplications.length > 0 && (
        <PDSection id="applications" background="white" size="md">
          <PDSectionHeader 
            title="Applications" 
            subtitle="Ideal use cases and industries for this product"
          />
          <PDCardGrid columns={3} gap="md">
            {uniqueApplications.map((app, index) => (
              <PDApplicationCard key={index} title={app} />
            ))}
          </PDCardGrid>
        </PDSection>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          VARIANTS SECTION (for fabricated products with type configurations)
      ═══════════════════════════════════════════════════════════════════════════ */}
      {product.variants && product.variants.length > 0 && (
        <PDSection id="variants" background="surface" size="md">
          <PDSectionHeader 
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
                <div
                  key={variant.id}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_4px_16px_rgba(15,23,42,0.08)] transition-shadow"
                >
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{variantTitle}</h3>
                  <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">{variantDesc}</p>
                  {variantFeatures.length > 0 && (
                    <ul className="space-y-2">
                      {variantFeatures.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#374151]">
                          <CheckCircle2 className="w-4 h-4 text-[#0052CC] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </PDSection>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          PIPES TABLES SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <PipesSection tables={product.pipesTables} />

      {/* ═══════════════════════════════════════════════════════════════════════════
          FITTINGS GALLERY SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <FittingsSection fittings={product.fittings} />

      {/* ═══════════════════════════════════════════════════════════════════════════
          VIDEO SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      {product.videoUrl && (
        <PDSection id="video" background="white" size="md">
          <PDSectionHeader title="Product Video" align="center" />
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
              <iframe
                src={product.videoUrl}
                title={`${title} Product Video`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </PDSection>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          DO'S & DON'TS SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      {dosDonts && (dosDonts.dos.length > 0 || dosDonts.donts.length > 0) && (
        <PDSection id="dos-donts" background="surface" size="md">
          <PDSectionHeader title="Installation Guidelines" subtitle="Best practices for optimal performance and longevity" />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {/* Do's */}
            {dosDonts.dos.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#059669] mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                  Do&apos;s
                </h3>
                <ul className="space-y-3">
                  {dosDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-[#374151] text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Don'ts */}
            {dosDonts.donts.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#DC2626] mb-4">
                  <XCircle className="w-6 h-6" />
                  Don&apos;ts
                </h3>
                <ul className="space-y-3">
                  {dosDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                        ✗
                      </span>
                      <span className="text-[#374151] text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </PDSection>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          DOWNLOADS SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      {product.downloads && product.downloads.length > 0 && (
        <PDSection background="white" size="sm" className="border-t border-gray-100">
          <PDSectionHeader title="Downloads" />
          <div className="flex flex-wrap gap-3">
            {product.downloads.map((download, index) => (
              <a
                key={index}
                href={download.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F7F9FC] hover:bg-[#E5EEFF] text-[#374151] hover:text-[#0052CC] px-5 py-3 rounded-lg font-medium transition-all border border-gray-200 hover:border-[#0052CC]/20"
              >
                <Download className="w-5 h-5" />
                {download.label}
              </a>
            ))}
          </div>
        </PDSection>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-gradient-to-r from-[#0052CC] to-[#003366] text-white">
        <div className={`${pdSpacing.container} text-center`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need assistance with {title}?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Our technical team is here to help you select the right products for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-[#0052CC] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/20"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
