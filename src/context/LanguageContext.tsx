'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { type Locale, defaultLocale, locales, localePath, stripLocale } from '@/lib/i18n-utils';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
export type Language = Locale;

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

// ─────────────────────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// ─────────────────────────────────────────────────────────────
// Provider Component
// ─────────────────────────────────────────────────────────────
interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Language is derived from the URL [locale] segment, passed by the layout.
  // Falls back to defaultLocale for SSR hydration safety.
  const [language] = useState<Language>(initialLanguage ?? defaultLocale);

  // Derived state
  const isRTL = language === 'ar';

  // Set language handler: navigates to the equivalent page in the new locale
  const setLanguage = useCallback(
    (lang: Language) => {
      if (!locales.includes(lang)) return;
      if (lang === language) return;

      // Strip current locale prefix and rebuild with new locale
      const barePath = stripLocale(pathname);
      const newPath = localePath(barePath, lang);
      router.push(newPath);
    },
    [pathname, language, router]
  );

  const value: LanguageContextValue = {
    language,
    setLanguage,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────────────────────
export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
