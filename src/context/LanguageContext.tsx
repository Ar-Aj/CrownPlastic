'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
export type Language = 'en' | 'ar';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────
const STORAGE_KEY = 'crown-language';
const SUPPORTED_LANGUAGES: Language[] = ['en', 'ar'];
const DEFAULT_LANGUAGE: Language = 'en';

// ─────────────────────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// ─────────────────────────────────────────────────────────────
// Helper: Get initial language (client-side only)
// ─────────────────────────────────────────────────────────────
function getInitialLanguage(searchParams: URLSearchParams | null): Language {
  // 1. Check URL query param
  if (searchParams) {
    const urlLang = searchParams.get('lang');
    if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang as Language)) {
      return urlLang as Language;
    }
  }

  // 2. Check localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.includes(stored as Language)) {
      return stored as Language;
    }
  }

  // 3. Fallback
  return DEFAULT_LANGUAGE;
}

// ─────────────────────────────────────────────────────────────
// Helper: Update document attributes
// ─────────────────────────────────────────────────────────────
function updateDocumentAttributes(lang: Language) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}

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
  const searchParams = useSearchParams();

  // Initialize state with provided initial or derive from URL/storage
  const [language, setLanguageState] = useState<Language>(
    initialLanguage ?? getInitialLanguage(searchParams)
  );

  // Derived state
  const isRTL = language === 'ar';

  // On mount, sync document attributes and check URL
  useEffect(() => {
    const derivedLang = getInitialLanguage(searchParams);
    setLanguageState(derivedLang);
    updateDocumentAttributes(derivedLang);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Set language handler
  const setLanguage = useCallback(
    (lang: Language) => {
      if (!SUPPORTED_LANGUAGES.includes(lang)) return;

      // Update state
      setLanguageState(lang);

      // Persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, lang);
      }

      // Update document attributes
      updateDocumentAttributes(lang);

      // Update URL query param (shallow navigation, no reload)
      const params = new URLSearchParams(searchParams?.toString() ?? '');
      params.set('lang', lang);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, searchParams, router]
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
