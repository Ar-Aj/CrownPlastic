'use client';

import Link from '@/components/common/LocaleLink';
import { useState, useRef, useCallback } from 'react';
import { NavItem } from '@/config/routes';
import { productCategories } from '@/config/products';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import { localizedValue } from '@/lib/i18n-utils';
import type { TranslationPath } from '@/i18n/en';

interface MainNavProps {
  items: NavItem[];
}

const navLabelToPath: Record<string, TranslationPath> = {
  'Home': 'nav.home',
  'About': 'nav.about',
  'Products': 'nav.products',
  'Sustainability': 'nav.sustainability',
  'Innovation': 'nav.innovation',
  'Media & Blogs': 'nav.media_blogs',
  'Resources': 'nav.resources',
  'Contact': 'nav.contact',
  'All Markets': 'nav.markets.all',
  'Saudi Arabia': 'nav.markets.saudi_arabia',
  'Riyadh': 'nav.markets.riyadh',
  'Jeddah': 'nav.markets.jeddah',
  'Dubai': 'nav.markets.dubai',
  'Abu Dhabi': 'nav.markets.abu_dhabi',
  'Sharjah': 'nav.markets.sharjah',
  'Ajman': 'nav.markets.ajman',
  'Umm Al Quwain': 'nav.markets.umm_al_quwain',
  'Ras Al Khaimah': 'nav.markets.ras_al_khaimah',
  'Fujairah': 'nav.markets.fujairah',
  'Kuwait City': 'nav.markets.kuwait_city',
  'Doha': 'nav.markets.doha',
  'Manama': 'nav.markets.manama',
  'Muscat': 'nav.markets.muscat',
};

export default function MainNav({ items }: MainNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { isRTL, language } = useLanguage();
  const t = useT();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Translate a label if it has a mapping, otherwise return as-is
  const translateLabel = (label: string): string => {
    const path = navLabelToPath[label];
    return path ? t(path) : label;
  };

  // Handle mouse enter with immediate open
  const handleMouseEnter = useCallback((label: string, hasChildren: boolean) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (hasChildren) {
      setOpenDropdown(label);
    }
  }, []);

  // Handle mouse leave with delay
  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  }, []);

  // Check if this item is the "Products" mega-menu
  const isProductsMegaMenu = (label: string) => label === 'Products';

  return (
    <nav className="flex items-center gap-0.5 xl:gap-2 2xl:gap-3">
      {items.map((item) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label, !!item.children)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className={`px-2 xl:px-3 2xl:px-4 py-2 text-[13px] xl:text-sm 2xl:text-base font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-0.5 xl:gap-1 2xl:gap-1 whitespace-nowrap ${openDropdown === item.label ? 'text-primary bg-gray-50' : ''
              }`}
          >
            {translateLabel(item.label)}
            {item.children && (
              <svg
                className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>

          {/* ══════════════════════════════════════════════════════════════
              PRODUCTS MEGA-MENU — CSS Columns masonry layout
              Full-width, all sub-products visible, premium typography
          ══════════════════════════════════════════════════════════════ */}
          {isProductsMegaMenu(item.label) && openDropdown === item.label && (
            <div
              className={`absolute top-full pt-3 z-[100] w-[95vw] rtl:w-[98vw] lg:w-[900px] rtl:lg:w-[1100px] xl:w-[1100px] rtl:xl:w-[1450px] max-w-[1200px] rtl:max-w-max ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2`}
            >
              {/* Invisible bridge to prevent hover gap */}
              <div className="absolute top-0 left-0 right-0 h-3" />

              <div className="w-full bg-white rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-200/60 py-6 px-8 animate-in fade-in slide-in-from-top-2 duration-150">
                {/* Header row */}
                <div className="flex items-center justify-center w-full mb-5 pb-4 border-b border-gray-100">
                  <h3 className="text-[14px] font-bold text-gray-800 uppercase tracking-[0.08em] flex items-center gap-2 text-center">
                    <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                    {t('nav.products_mega_heading')}
                  </h3>
                </div>

                {/* ── Masonry layout via CSS columns ── */}
                <div className="columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-x-8 [column-fill:balance]">
                  {productCategories.map((cat) => {
                    const catName = localizedValue(language, cat.name, cat.nameAr && cat.nameAr !== 'TBD' ? cat.nameAr : undefined, cat.nameFr);
                    return (
                      <div
                        key={cat.slug}
                        className="break-inside-avoid mb-5"
                      >
                        {/* Category header */}
                        <Link
                          href={`/products/${cat.slug}`}
                          className="group flex items-center gap-2 mb-2"
                        >
                          <span className="text-[15px] font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                            {catName}
                          </span>
                        </Link>

                        {/* ALL sub-products — no slice, no truncation */}
                        <ul className="space-y-[3px] border-l-2 border-gray-100 ml-[7px] pl-3">
                          {cat.subProducts.map((sub) => {
                            const subName = language === 'fr'
                              ? (sub.shortLabelFr || sub.nameFr || sub.shortLabel || sub.name)
                              : language === 'ar'
                                ? (sub.nameAr && sub.nameAr !== 'TBD' ? sub.nameAr : (sub.shortLabel || sub.name))
                                : (sub.shortLabel || sub.name);
                            return (
                              <li key={sub.slug}>
                                  <Link
                                    href={`/products/${cat.slug}/${sub.slug}`}
                                    className="block text-[14.5px] leading-relaxed text-slate-600 hover:text-blue-600 transition-colors py-[2px] break-words hyphens-auto"
                                    title={sub.name}
                                  >
                                  {subName}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom CTA Array row */}
                <div className="mt-8 pt-5 border-t border-gray-100 flex justify-center">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-50 hover:bg-primary text-slate-700 hover:text-white rounded-lg text-sm font-semibold transition-all shadow-sm border border-slate-200 hover:border-primary group"
                  >
                    {t('nav.view_all')} {t('nav.products')}
                    <svg className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              DEFAULT DROPDOWN — for all other nav items with children
          ══════════════════════════════════════════════════════════════ */}
          {!isProductsMegaMenu(item.label) && item.children && openDropdown === item.label && (
            <div
              className={`absolute top-full pt-1 z-50 ${isRTL ? 'right-0' : 'left-0'
                }`}
            >
              {/* Invisible bridge to prevent hover gap */}
              <div className="absolute -top-1 left-0 right-0 h-2" />
              <div className="w-64 xl:w-72 2xl:w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {item.children.map((child) => {
                  const childPath = navLabelToPath[child.label];
                  const childLabel = childPath ? t(childPath) : localizedValue(language, child.label, child.labelAr, child.labelFr);
                  const childDesc = localizedValue(language, child.description || '', child.descriptionAr, child.descriptionFr);
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      <span className="font-medium">{childLabel}</span>
                      {childDesc && (
                        <span className="block text-xs text-gray-500 mt-0.5">
                          {childDesc}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
