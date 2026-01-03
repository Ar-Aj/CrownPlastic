'use client';

import { useLanguage } from '@/context/LanguageContext';
import { en, TranslationPath } from './en';
import { ar } from './ar';

// ─────────────────────────────────────────────────────────────
// Dictionary mapping
// ─────────────────────────────────────────────────────────────
const dictionaries = { en, ar } as const;

// ─────────────────────────────────────────────────────────────
// Helper: Get nested value by dot-notation path
// ─────────────────────────────────────────────────────────────
function getByPath(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return path; // Return path as fallback
    }
    current = (current as Record<string, unknown>)[key];
  }

  return typeof current === 'string' ? current : path;
}

// ─────────────────────────────────────────────────────────────
// useT Hook - Returns a translation function (dot-notation)
// ─────────────────────────────────────────────────────────────
/**
 * Translation hook that returns a function to get translated strings.
 * Supports dot-notation paths for structured dictionaries.
 * 
 * Usage:
 * ```tsx
 * const t = useT();
 * return <span>{t('nav.products')}</span>;
 * return <span>{t('home.hero_title')}</span>;
 * ```
 */
export function useT() {
  const { language } = useLanguage();
  const dict = dictionaries[language];

  return (path: TranslationPath): string => {
    return getByPath(dict as Record<string, unknown>, path);
  };
}

// ─────────────────────────────────────────────────────────────
// Re-exports for convenience
// ─────────────────────────────────────────────────────────────
export { en } from './en';
export { ar } from './ar';
export type { TranslationPath } from './en';
