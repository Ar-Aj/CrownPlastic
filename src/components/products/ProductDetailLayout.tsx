'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from '@/components/common/LocaleLink';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ChevronRight, Download, CheckCircle2, XCircle } from 'lucide-react';
import { type ProductDetailConfig, PRODUCT_DETAIL_SECTIONS } from '@/types/productDetail';
import { ProductFAQSchema } from '@/components/schemas/ProductFAQSchema';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/i18n';
import { getCategoryBySlug } from '@/config/products';
import { localizedValue, localizedArray } from '@/lib/i18n-utils';
import { createPortal } from 'react-dom';

// ── Dynamic Imports (below-fold components — reduce initial JS payload) ──────
// Each has a loading skeleton to reserve DOM height and prevent CLS.
const DynamicSkeleton = () => <div className="min-h-[200px] bg-gray-50 animate-pulse rounded-lg" />;
const YouTubeFacade = dynamic(() => import('@/components/common/YouTubeFacade'), { ssr: false, loading: DynamicSkeleton });
const PipesSection = dynamic(() => import('./PipesTable').then(m => ({ default: m.PipesSection })), { loading: DynamicSkeleton });
const FittingsSection = dynamic(() => import('./FittingsGallery').then(m => ({ default: m.FittingsSection })), { loading: DynamicSkeleton });
const ProductFAQAccordion = dynamic(() => import('./ProductFAQAccordion').then(m => ({ default: m.ProductFAQAccordion })), { loading: DynamicSkeleton });
const DualImagePresentation = dynamic(() => import('./DualImagePresentation'), { loading: DynamicSkeleton });

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
  const t = useT();
  const [activeSection, setActiveSection] = useState('overview');
  const [viewerPdf, setViewerPdf] = useState<{ src: string; title: string; description?: string } | null>(null);
  const category = getCategoryBySlug(product.categorySlug);

  // Get localized content (trilingual: fr → en, ar → en, default en)
  const title = localizedValue(language, product.title, product.titleAr, product.titleFr);
  const shortDesc = localizedValue(language, product.shortDescription, product.shortDescriptionAr, product.shortDescriptionFr);
  const overview = localizedValue(language, product.overview, product.overviewAr, product.overviewFr);
  const features = localizedArray(language, product.features, product.featuresAr, product.featuresFr);
  const applications = localizedArray(language, product.applications, product.applicationsAr, product.applicationsFr);
  const dosDonts = language === 'fr' ? (product.dosDontsFr || product.dosDonts) : language === 'ar' ? (product.dosDontsAr || product.dosDonts) : product.dosDonts;
  const techProps = language === 'fr' ? (product.technicalPropertiesFr || product.technicalProperties) : language === 'ar' ? (product.technicalPropertiesAr || product.technicalProperties) : product.technicalProperties;
  const sysAdvs = language === 'fr' ? (product.systemAdvantagesFr || product.systemAdvantages) : language === 'ar' ? (product.systemAdvantagesAr || product.systemAdvantages) : product.systemAdvantages;
  const categoryName = category
    ? localizedValue(language, category.name, category.nameAr, category.nameFr)
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
        case 'technical-properties': return techProps && techProps.length > 0;
        case 'system-advantages': return sysAdvs && sysAdvs.length > 0;
        case 'applications': return uniqueApplications.length > 0;
        case 'variants': return product.variants && product.variants.length > 0;
        case 'pipes': return (product.pipesTables && product.pipesTables.length > 0) || (product.accessoriesGallery && product.accessoriesGallery.length > 0);
        case 'fittings': return product.fittings && product.fittings.length > 0;
        case 'video': return !!product.videoUrl;
        case 'dos-donts': return dosDonts && (dosDonts.dos.length > 0 || dosDonts.donts.length > 0);
        case 'frequently-asked-questions': return (uniqueFeatures.length > 0) || (dosDonts && (dosDonts.dos.length > 0 || dosDonts.donts.length > 0));
        default: return false;
      }
    });
  }, [overview, uniqueFeatures, uniqueApplications, product.variants, product.pipesTables, product.fittings, product.videoUrl, dosDonts, techProps, sysAdvs, product.accessoriesGallery]);

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

  // Track active section on scroll using IntersectionObserver (no forced reflow)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    visibleSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          rootMargin: '-80px 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
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
    <>
    <article itemScope itemType="https://schema.org/Product">
      <ProductBackgroundPattern pattern="fine" glow="subtle" patternOpacity={0.35} baseColor="blue" vignette className="pt-24 md:pt-28 lg:pt-32">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Mid blue band with light cards
      ═══════════════════════════════════════════════════════════════════════════ */}
      <ProductSection background="soft-blue" size="lg" showGlow showPattern patternType="fine" firstSection>
        {/* Section-level technical art: glow + diagonal band + hero nodes */}
        <div className="pointer-events-none absolute inset-0">
          <RadialGlowOverlay intensity="normal" position="center" />
          <div className="absolute -top-24 -right-20 w-80 h-80 bg-gradient-to-bl from-primary/12 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_0_6px_rgba(0,114,188,0.25)]" />
          <div className="absolute top-12 right-32 w-1.5 h-1.5 rounded-full bg-primary/40 shadow-[0_0_0_4px_rgba(0,114,188,0.2)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start relative">
          {/* Left column - Content card */}
          <div className="lg:col-span-3">
            <ProductCardSurface variant="elevated" padding="lg" className="bg-white/95 backdrop-blur-sm">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
                <Link href="/products" className="hover:text-primary transition-colors">
                  {t('products.detail_layout.breadcrumb_products')}
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
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight">
                {title}
              </h1>

              {/* Commercial Intent Subtitle */}
              <h2 className="text-lg font-medium text-primary mb-4">
                {language === 'ar' ? 'المصنع والمورد الرائد في الإمارات' : language === 'fr' ? 'Fabricant & Fournisseur Premium aux EAU' : 'Premium Manufacturer & Supplier in the UAE'}
              </h2>

              {/* Short description */}
              <p className="text-lg text-slate-600 max-w-2xl mb-6 leading-relaxed">
                {shortDesc}
              </p>

              {/* Badge row - Standards/Badges */}
              {heroBadges.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    {t('products.detail_layout.standards_certifications')}
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
                  href={`/contact-us?tab=quote&product=${product.slug}`}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/20"
                >
                  {t('products.detail_layout.request_quote')}
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
                    {t('products.detail_layout.download_catalogue')}
                  </a>
                )}
              </div>
            </ProductCardSurface>
          </div>

          {/* Right column - Product visual with PipeBorderWrapper */}
          <div className="lg:col-span-2">
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
                    {t('products.detail_layout.crown_plastic_pipes')}
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-4">
                    {t('products.detail_layout.premium_quality')}
                  </div>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>{t('products.detail_layout.iso_certified')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>{t('products.detail_layout.gcc_market_leader')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>{t('products.detail_layout.countries')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>{t('products.detail_layout.uv_weather_resistant')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>{t('products.detail_layout.high_impact_strength')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>{t('products.detail_layout.corrosion_free')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      <span>{t('products.detail_layout.low_maintenance')}</span>
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
                const rawLabel = localizedValue(language, section.label, section.labelAr, section.labelFr);
                
                // Force 'Visual Breakdown' instead of 'Pipes' for fabrications category
                const isFabrications = product.categorySlug === 'fabrications' || product.categorySlug === 'fabrications-accessories';
                const hasAccessoriesGallery = product.accessoriesGallery && product.accessoriesGallery.length > 0;
                
                let label = (section.id === 'pipes' && isFabrications)
                  ? (hasAccessoriesGallery ? 'Accessories' : 'Visual Breakdown')
                  : rawLabel;
                
                // Override fittings tab label dynamically if configured
                if (section.id === 'fittings' && product.fittingsTabLabelKey) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  label = t(product.fittingsTabLabelKey as any);
                }
                
                const isActive = activeSection === section.id;

                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${isActive
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
            title={t('products.detail_layout.overview_title')}
            subtitle={t('products.detail_layout.overview_subtitle')}
          />
          <ProductCardSurface variant="elevated" padding="lg">
            <div className="prose prose-lg">
              <p className="text-[1.15rem] text-slate-600 leading-relaxed">{overview}</p>
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
            title={t('products.detail_layout.features_title')}
            subtitle={t('products.detail_layout.features_subtitle')}
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-0 p-0 list-none">
            {uniqueFeatures.map((feature, index) => (
              <li key={index}>
                <ProductCardSurface variant="elevated" padding="md" hoverable className="h-full">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-slate-200 via-primary/30 to-slate-200" />
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                </ProductCardSurface>
              </li>
            ))}
          </ul>
        </ProductSection>
      )}

      <SectionDivider variant="blue" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          TECHNICAL PROPERTIES SECTION - Descriptive List (dl/dt/dd)
      ═══════════════════════════════════════════════════════════════════════════ */}
      {techProps && techProps.length > 0 && (
        <ProductSection id="technical-properties" background="white" size="md">
          <ProductSectionHeader
            title={language === 'ar' ? 'الخصائص الفنية' : language === 'fr' ? 'Propriétés Techniques' : 'Technical Properties'}
            subtitle={language === 'ar' ? 'المواصفات الفنية التفصيلية' : language === 'fr' ? 'Spécifications techniques détaillées' : 'Detailed technical specifications'}
          />
          <ProductCardSurface variant="elevated" padding="none">
            <div className="overflow-x-auto rounded-xl">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {language === 'ar' ? 'الخاصية' : language === 'fr' ? 'Propriété' : 'Property'}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left pl-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {language === 'ar' ? 'القيمة' : language === 'fr' ? 'Valeur' : 'Value'}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {techProps.map((prop, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        {prop.property}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-mono">
                        {prop.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ProductCardSurface>
        </ProductSection>
      )}

      {techProps && techProps.length > 0 && <SectionDivider variant="light" className="my-2" />}

      {/* ═══════════════════════════════════════════════════════════════════════════
          SYSTEM ADVANTAGES SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      {sysAdvs && sysAdvs.length > 0 && (
        <ProductSection id="system-advantages" background="soft-blue" size="md" showGlow>
          <ProductSectionHeader
            title={language === 'ar' ? 'مزايا النظام' : language === 'fr' ? 'Avantages du Système' : 'System Advantages'}
            subtitle={language === 'ar' ? 'الفوائد الرئيسية لاستخدام هذا النظام' : language === 'fr' ? 'Principaux avantages de ce système' : 'Key benefits of using this system'}
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-0 p-0 list-none">
            {sysAdvs.map((adv, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                <span className="text-[15px] leading-relaxed text-slate-700">{adv}</span>
              </li>
            ))}
          </ul>
        </ProductSection>
      )}

      {sysAdvs && sysAdvs.length > 0 && <SectionDivider variant="light" className="my-2" />}

      {/* ═══════════════════════════════════════════════════════════════════════════
          APPLICATIONS SECTION - Light section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {uniqueApplications.length > 0 && (
        <ProductSection id="applications" background="white" size="md" showGlow>
          <ProductSectionHeader
            title={t('products.detail_layout.applications_title')}
            subtitle={t('products.detail_layout.applications_subtitle')}
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-0 p-0 list-none">
            {uniqueApplications.map((app, index) => (
              <li key={index}>
                <ProductCardSurface variant="accent" padding="md" hoverable accent="blue" className="h-full">
                  <span className="text-sm font-semibold text-slate-800">{app}</span>
                </ProductCardSurface>
              </li>
            ))}
          </ul>
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
              : language === 'fr'
                ? (product.variantsSectionTitleFr || product.variantsSectionTitle || 'Configurations')
                : (product.variantsSectionTitle || t('products.detail_layout.configurations_default'))}
            subtitle={t('products.detail_layout.configurations_subtitle')}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {product.variants.map((variant) => {
              const variantTitle = localizedValue(language, variant.title, variant.titleAr, variant.titleFr);
              const variantDesc = localizedValue(language, variant.description, variant.descriptionAr, variant.descriptionFr);
              const variantFeatures = localizedArray(language, variant.features, variant.featuresAr, variant.featuresFr);

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
      {/* Fabrications: accessories gallery grid or dual-image visual breakdown */}
      {product.accessoriesGallery && product.accessoriesGallery.length > 0 ? (
        <ProductSection id="pipes" background="white" size="md">
          <ProductSectionHeader
            title="Accessories"
            subtitle="Complete range of fabricated piping accessories and components"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.accessoriesGallery.map((item) => {
              const encodedPath = `/images/fittings/fabrications and accessories/${encodeURIComponent(item.imageSrc)}`;
              return (
                <div
                  key={item.name}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:border-primary/30 transition-all duration-200"
                >
                  <div className="relative aspect-[4/3] bg-slate-50 p-4">
                    <Image
                      src={encodedPath}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="text-center font-semibold text-sm text-slate-800 p-3 bg-slate-50 border-t border-slate-100">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </ProductSection>
      ) : product.categorySlug === 'fabrications' || product.categorySlug === 'fabrications-accessories' ? (
        <div id="pipes">
          <DualImagePresentation
            renderImage={product.renderImage ?? ''}
            diagramImage={product.diagramImage ?? ''}
            title={title}
          />
        </div>
      ) : (
        <PipesSection tables={product.pipesTables} />
      )}

      <SectionDivider variant="medium" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          FITTINGS GALLERY SECTION - Mid blue section
      ═══════════════════════════════════════════════════════════════════════════ */}
      <FittingsSection fittings={product.fittings} colorLabel={product.colorLabel} />

      <SectionDivider variant="light" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          VIDEO SECTION - Light section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {product.videoUrl && (
        <ProductSection id="video" background="white" size="md">
          <ProductSectionHeader title={t('products.detail_layout.video_title')} align="center" />
          <div className="max-w-4xl mx-auto">
            <ProductCardSurface variant="elevated" padding="none" className="overflow-hidden">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl">
                <YouTubeFacade
                  videoId=""
                  embedUrl={product.videoUrl}
                  title={`${title} Product Video`}
                  iframeParams="autoplay=1&rel=0&modestbranding=1"
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
          <ProductSectionHeader title={t('products.detail_layout.installation_title')} subtitle={t('products.detail_layout.installation_subtitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Do's */}
            {dosDonts.dos.length > 0 && (
              <ProductCardSurface variant="elevated" padding="lg">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-400/60 to-emerald-100" />
                <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-600 mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                  {t('products.detail_layout.dos_heading')}
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
                  {t('products.detail_layout.donts_heading')}
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

      {/* ═══════════════════════════════════════════════════════════════════════════
          AEO FAQ SECTION (Phase 3.2) - Dynamic Schema & UI
      ═══════════════════════════════════════════════════════════════════════════ */}
      <ProductFAQSchema product={product} />
      <ProductFAQAccordion product={product} />

      <SectionDivider variant="light" className="my-2" />

      {/* ═══════════════════════════════════════════════════════════════════════════
          DOWNLOADS SECTION - Light section
      ═══════════════════════════════════════════════════════════════════════════ */}
      {product.downloads && product.downloads.length > 0 && (
        <ProductSection background="white" size="md">
          <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <ProductSectionHeader
                title={t('products.detail_layout.downloads_title')}
                subtitle={`${t('products.detail_layout.downloads_subtitle')} ${title}.`}
                align="center"
              />
            </div>
            <div className="flex flex-col items-center gap-4 w-full max-w-3xl mx-auto">
              {product.downloads.map((download, index) => (
                <button
                  key={index}
                  onClick={() => setViewerPdf({ src: download.href, title: download.label })}
                  className="group w-full flex items-center gap-4 bg-white hover:shadow-lg hover:border-primary/30 px-6 py-5 rounded-xl font-medium transition-all border border-slate-200 text-left cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors mb-0.5">
                      {download.label}
                    </h4>
                    <p className="text-xs text-primary flex items-center gap-1">
                      {t('products.detail_layout.downloads_view_document')}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </button>
              ))}
            </div>
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
            {t('products.detail_layout.need_assistance_with')} {title}?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('products.detail_layout.cta_subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              {t('products.detail_layout.contact_us')}
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors border border-white/20"
            >
              {t('products.detail_layout.view_all_resources')}
            </Link>
          </div>
        </div>
      </div>
    </ProductBackgroundPattern>

    </article>

      {/* 1:1 Copied PDF Viewer Modal Overlay */}
      {viewerPdf && (
        <PdfViewerModal
          src={viewerPdf.src}
          title={viewerPdf.title}
          onClose={() => setViewerPdf(null)}
        />
      )}
    </>
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
