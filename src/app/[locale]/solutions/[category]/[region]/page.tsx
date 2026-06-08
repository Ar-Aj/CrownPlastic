/**
 * Crown Plastic Pipes — Programmatic Zipper Page
 *
 * Route: /[locale]/solutions/[category]/[region]
 *
 * Placed under /solutions/ to avoid Next.js dynamic segment collision
 * with /products/[category]/[product]. This is the scalable Product × Location
 * zipper that generates high-intent pages for every category × region pair.
 *
 * Pure server component — no 'use client', no runtime hooks.
 * Generates 13 categories × 6 regions × 3 locales = 234 static HTML pages.
 *
 * Schema: Embeds Product + LocalBusiness JSON-LD with location-specific
 * areaServed mapped to the active region slug.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ALL_CATEGORY_IDS,
  ALL_REGION_SLUGS,
  CATEGORY_META,
  REGION_META,
  generateZipperContent,
  type CategoryId,
  type RegionSlug,
} from '@/data/zipperContent';
import { companyInfo } from '@/config/schemas';
import { generateComparativeTable } from '@/data/proprietary/comparativeTable';

// ─────────────────────────────────────────────────────────────────────────────
// Static params: 13 categories × 6 regions = 78 per locale
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  const params: { category: string; region: string }[] = [];

  for (const category of ALL_CATEGORY_IDS) {
    for (const region of ALL_REGION_SLUGS) {
      params.push({ category, region });
    }
  }

  return params;
}

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────

interface ZipperPageProps {
  params: { locale: string; category: string; region: string };
}

export async function generateMetadata({ params }: ZipperPageProps): Promise<Metadata> {
  const categoryId = params.category as CategoryId;
  const regionSlug = params.region as RegionSlug;
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';
  const isFr = locale === 'fr';

  if (!CATEGORY_META[categoryId] || !REGION_META[regionSlug]) {
    return {
      title: 'Pipes / Fittings Solutions | Crown Plastic Pipes',
      description: 'Browse our Pipes / Fittings solutions by product and location.',
    };
  }

  const content = generateZipperContent(categoryId, regionSlug);
  const baseUrl = 'https://crownplasticuae.com';
  const pathSegment = `solutions/${categoryId}/${regionSlug}`;

  // Absolute URLs with trailing slashes matching trailingSlash: true
  const urlEn = `${baseUrl}/en/${pathSegment}/`;
  const urlAr = `${baseUrl}/ar/${pathSegment}/`;
  const urlFr = `${baseUrl}/fr/${pathSegment}/`;
  const urlCurrent = `${baseUrl}/${locale}/${pathSegment}/`;

  return {
    title: { absolute: content.metaTitle },
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: urlCurrent,
      siteName: isAr ? 'كراون بلاستيك' : isFr ? 'Crown Plastic Pipes' : 'Crown Plastic Pipes',
      type: 'website',
      locale: isAr ? 'ar_AE' : isFr ? 'fr_FR' : 'en_AE',
      alternateLocale: isAr ? ['en_AE', 'fr_FR'] : isFr ? ['en_AE', 'ar_AE'] : ['ar_AE', 'fr_FR'],
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: content.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metaTitle,
      description: content.metaDescription,
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: urlCurrent,
      languages: {
        'en': urlEn,
        'ar': urlAr,
        'fr': urlFr,
        'x-default': urlEn,
      },
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Page (pure server component)
// ─────────────────────────────────────────────────────────────────────────────

export default function ZipperPage({ params }: ZipperPageProps) {
  const categoryId = params.category as CategoryId;
  const regionSlug = params.region as RegionSlug;
  const locale = params.locale || 'en';
  const isAr = locale === 'ar';
  const isFr = locale === 'fr';

  if (!CATEGORY_META[categoryId] || !REGION_META[regionSlug]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Page not found.</p>
      </div>
    );
  }

  const content = generateZipperContent(categoryId, regionSlug);
  const comparativeTable = generateComparativeTable(categoryId);
  const cat = CATEGORY_META[categoryId];
  const region = REGION_META[regionSlug];
  const baseUrl = 'https://crownplasticuae.com';
  const pagePath = `${locale}/solutions/${categoryId}/${regionSlug}`;

  // ── Trilingual resolver ──────────────────────────────────────────────
  const t3 = <T,>(en: T, ar: T, fr: T): T => isAr ? ar : isFr ? fr : en;

  // ── Pre-resolved trilingual content ──────────────────────────────────
  const activeH1 = t3(content.h1, content.h1Ar, content.h1Fr);
  const activeCatName = t3(cat.nameEn, cat.nameAr, cat.nameFr || cat.nameEn);
  const activeRegionName = t3(region.nameEn, region.nameAr, region.nameFr || region.nameEn);
  const activeAuthority = t3(region.authority, region.authorityAr, region.authorityFr || region.authority);
  const activeCompliance = t3(content.complianceParagraph, content.complianceParagraphAr, content.complianceParagraphFr);
  const activeEngineering = t3(content.engineeringParagraph, content.engineeringParagraphAr, content.engineeringParagraphFr);
  const activeDeployment = t3(content.deploymentParagraph, content.deploymentParagraphAr, content.deploymentParagraphFr);

  // ── JSON-LD: Product schema with location-specific areaServed ────────
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${baseUrl}/${pagePath}#product`,
    name: activeCatName,
    description: content.metaDescription,
    brand: {
      '@type': 'Brand',
      name: 'Crown Plastic Pipes',
    },
    manufacturer: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: companyInfo.url,
    },
    category: `Plumbing Pipes > ${cat.nameEn}`,
    material: 'PVC-U / PP-R / HDPE',
    additionalProperty: [
      ...(content.labTests.minimumBurstPressureMPa > 0
        ? [{ '@type': 'PropertyValue', name: 'Minimum Burst Pressure', value: `${content.labTests.minimumBurstPressureMPa} MPa`, unitCode: 'MPA' }]
        : []),
      { '@type': 'PropertyValue', name: 'Wall Thickness Tolerance', value: `±${content.labTests.wallThicknessToleranceVarianceMm} mm` },
      { '@type': 'PropertyValue', name: 'Vicat Softening Point', value: `${content.climateMetrics.groundTempVicatSofteningCelsius}°C` },
      { '@type': 'PropertyValue', name: 'Thermal Derating Factor (50°C)', value: `${content.climateMetrics.ambientPeakDeratingFactor}` },
      { '@type': 'PropertyValue', name: 'Expansion Coefficient', value: `${content.climateMetrics.expansionCoefficientMmPerMK} mm/m·K` },
      { '@type': 'PropertyValue', name: 'Primary Standard', value: cat.primaryStandard },
      ...(content.labTests.complianceCertificationId
        ? [{ '@type': 'PropertyValue', name: 'Compliance Certification', value: content.labTests.complianceCertificationId }]
        : []),
    ],
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/${pagePath}`,
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: companyInfo.name,
      },
      eligibleRegion: {
        '@type': region.countryCode === 'AE' ? 'City' : 'Country',
        name: region.nameEn,
      },
      areaServed: {
        '@type': region.countryCode === 'AE' ? 'City' : 'Country',
        name: region.nameEn,
      },
    },
  };

  // ── JSON-LD: LocalBusiness with region-specific areaServed ───────────
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/${pagePath}#localbusiness`,
    name: t3(
      `Crown Plastic Pipes - ${region.nameEn}`,
      `مصنع كراون لأنابيب البلاستيك - ${region.nameAr}`,
      `Crown Plastic Pipes - ${region.nameFr || region.nameEn}`,
    ),
    description: content.metaDescription,
    url: `${baseUrl}/${pagePath}`,
    telephone: companyInfo.telephone,
    email: companyInfo.email,
    image: companyInfo.image,
    logo: companyInfo.logo,
    priceRange: companyInfo.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.streetAddress,
      addressLocality: companyInfo.address.addressLocality,
      addressRegion: companyInfo.address.addressRegion,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: companyInfo.geo.latitude,
      longitude: companyInfo.geo.longitude,
    },
    areaServed: {
      '@type': region.countryCode === 'AE' ? 'City' : 'Country',
      name: region.nameEn,
    },
    sameAs: Object.values(companyInfo.social),
  };

  const dir = isAr ? 'rtl' : 'ltr';

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        id={`zipper-product-${categoryId}-${regionSlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        id={`zipper-localbiz-${categoryId}-${regionSlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main dir={dir} className="min-h-screen bg-white">
        {/* ═══════════════════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-[130px] pb-16 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(59,130,246,0.15),transparent_70%)]" />

          <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">
                {t3('Home', 'الرئيسية', 'Accueil')}
              </Link>
              <span>/</span>
              <Link href={`/${locale}/products`} className="hover:text-white transition-colors">
                {t3('Products', 'المنتجات', 'Produits')}
              </Link>
              <span>/</span>
              <Link href={`/${locale}/products/${categoryId}`} className="hover:text-white transition-colors">
                {activeCatName}
              </Link>
              <span>/</span>
              <span className="text-white font-medium">
                {activeRegionName}
              </span>
            </nav>

            {/* Single H1 — Product Category × Region */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
              {activeH1}
            </h1>

            {/* Authority badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-lg border border-white/20 text-sm font-medium mb-6">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {activeAuthority}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact-us`}
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
              >
                {t3('Request a Quote', 'اطلب عرض سعر', 'Demander un devis')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isAr ? 'M19 12H5M12 5l-7 7 7 7' : 'M5 12h14M12 5l7 7-7 7'} />
                </svg>
              </Link>
              <Link
                href={`/${locale}/products/${categoryId}`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                {t3('View All Products', 'عرض جميع المنتجات', 'Voir tous les produits')}
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CONTENT SECTION — 3-paragraph non-commodity structure
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-12 md:py-20">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* P1: Compliance */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </span>
                  {t3(`${activeAuthority} Compliance`, `اعتماد ${region.authorityAr}`, `Conformité ${activeAuthority}`)}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {activeCompliance}
                </p>
              </article>

              {/* P2: Engineering Proof */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </span>
                  {t3('Engineering & Lab Data', 'البيانات الهندسية والمختبرية', 'Données techniques et de laboratoire')}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  {activeEngineering}
                </p>

                {/* Comparative Data Table — Crown vs Industry */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 font-semibold text-slate-700 border-b border-slate-200">
                          {t3('Metric', 'المقياس', 'Mesure')}
                        </th>
                        <th className="text-left p-3 font-semibold text-blue-700 border-b border-slate-200 bg-blue-50/50">
                          {t3('Crown', 'كراون', 'Crown')}
                        </th>
                        <th className="text-left p-3 font-semibold text-slate-500 border-b border-slate-200">
                          {t3('Industry Min.', 'الحد الأدنى للصناعة', 'Min. industrie')}
                        </th>
                        <th className="text-left p-3 font-semibold text-green-700 border-b border-slate-200">
                          {t3('Crown Advantage', 'ميزة كراون', 'Avantage Crown')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparativeTable.rows.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-100">
                          <td className="p-3 text-slate-600 font-medium">
                            {t3(row.metric, row.metricAr, row.metric)}
                            {row.unit && <span className="text-slate-400 text-xs ml-1">({row.unit})</span>}
                          </td>
                          <td className="p-3 font-semibold text-blue-900 bg-blue-50/30">{row.crownValue}</td>
                          <td className="p-3 text-slate-500">{row.industryMin}</td>
                          <td className="p-3 text-green-700 text-xs font-medium">{t3(row.delta, row.deltaAr, row.delta)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              {/* P3: Deployment */}
              <article>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </span>
                  {t3(`${activeRegionName} Project Deployments`, `مشاريع التوريد في ${region.nameAr}`, `Projets livrés à ${activeRegionName}`)}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {activeDeployment}
                </p>

                {content.projectRefs.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {content.projectRefs.map((ref) => (
                      <div
                        key={ref.id}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
                      >
                        <h3 className="font-bold text-slate-900 text-sm mb-2">{ref.projectName}</h3>
                        <p className="text-slate-600 text-sm mb-3">{ref.applicationMetric}</p>
                        <div className="flex items-center gap-1 text-xs font-medium text-blue-600">
                          <span>{ref.tonnageSupplied} {t3('tonnes', 'طن', 'tonnes')}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-900 py-12 md:py-16">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t3(
                `Need ${cat.nameEn} in ${region.nameEn}?`,
                `هل تحتاج ${cat.nameAr} في ${region.nameAr}؟`,
                `Besoin de ${cat.nameFr || cat.nameEn} à ${region.nameFr || region.nameEn} ?`,
              )}
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              {t3(
                'Contact our technical team for project specifications and competitive bulk pricing.',
                'تواصل مع فريقنا الفني للحصول على مواصفات المشروع والأسعار التنافسية.',
                'Contactez notre équipe technique pour les spécifications projet et les tarifs compétitifs en volume.',
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/contact-us`}
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg"
              >
                {t3('Contact Us', 'تواصل معنا', 'Contactez-nous')}
              </Link>
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                {t3('All Products', 'جميع المنتجات', 'Tous les produits')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
