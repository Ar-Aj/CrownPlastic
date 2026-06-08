// ─────────────────────────────────────────────────────────────
// i18n Utilities for Static Route-Based Localization
// Used by LocaleLink, LanguageContext, layouts, and metadata
// ─────────────────────────────────────────────────────────────

export const locales = ['en', 'ar', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/**
 * Prefix a path with the given locale.
 * localePath('/products', 'ar') → '/ar/products'
 * localePath('/', 'en') → '/en'
 */
export function localePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Strip locale prefix from a pathname.
 * stripLocale('/ar/products') → '/products'
 * stripLocale('/en') → '/'
 */
export function stripLocale(pathname: string): string {
  for (const loc of locales) {
    if (pathname === `/${loc}`) return '/';
    if (pathname.startsWith(`/${loc}/`)) return pathname.slice(loc.length + 1);
  }
  return pathname;
}

/**
 * Extract locale from a pathname.
 * getLocaleFromPath('/ar/products') → 'ar'
 * getLocaleFromPath('/unknown') → 'en'
 */
export function getLocaleFromPath(pathname: string): Locale {
  for (const loc of locales) {
    if (pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)) return loc;
  }
  return defaultLocale;
}

// ─────────────────────────────────────────────────────────────
// Trilingual Product Data Helpers
// Centralized fallback: Fr → En, Ar → En, default En
// ─────────────────────────────────────────────────────────────

/**
 * Resolve a localized string field with English fallback.
 * Usage: localizedValue(language, product.title, product.titleAr, product.titleFr)
 */
export function localizedValue(
  language: string,
  en: string,
  ar?: string,
  fr?: string,
): string {
  if (language === 'fr') return fr || en;
  if (language === 'ar') return ar || en;
  return en;
}

/**
 * Resolve a localized string array field with English fallback.
 * Usage: localizedArray(language, product.features, product.featuresAr, product.featuresFr)
 */
export function localizedArray(
  language: string,
  en: string[],
  ar?: string[],
  fr?: string[],
): string[] {
  if (language === 'fr') return fr || en;
  if (language === 'ar') return ar || en;
  return en;
}
