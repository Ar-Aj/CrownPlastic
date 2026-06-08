'use client';

import { useLanguage, Language } from '@/context/LanguageContext';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
interface LanguageToggleProps {
  /** Variant styling */
  variant?: 'header' | 'mobile';
  /** Additional CSS classes */
  className?: string;
}

// Language display names for aria-labels
const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  ar: 'Arabic',
  fr: 'French',
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
/**
 * Language toggle component for switching between English, Arabic, and French.
 * Rewritten without Framer Motion — uses pure CSS transitions for performance.
 * 
 * - `header` variant: Pill-shaped toggle switch for the navbar
 * - `mobile` variant: Larger touch-friendly buttons for mobile menu
 */
export default function LanguageToggle({ 
  variant = 'header',
  className = '' 
}: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'fr', label: 'Français' },
  ];

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span className="text-sm text-gray-500">Language:</span>
        <div className="relative flex rounded-full overflow-hidden bg-slate-100 p-1">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className="relative z-10 px-4 py-2 text-sm font-semibold transition-colors duration-200"
              aria-label={`Switch to ${LANGUAGE_NAMES[code]}`}
              aria-pressed={language === code}
            >
              {/* Active pill background — CSS transition */}
              {language === code && (
                <span
                  className="absolute inset-0 bg-primary rounded-full shadow-sm transition-all duration-300"
                />
              )}
              <span className={`relative z-10 ${
                language === code ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Header variant - Pill-shaped toggle switch
  return (
    <div className={`relative flex items-center rounded-full bg-white/15 p-1 ${className}`}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className="relative z-10 px-3 py-1.5 text-sm font-semibold transition-colors duration-200"
          aria-label={`Switch to ${LANGUAGE_NAMES[code]}`}
          aria-pressed={language === code}
        >
          {/* Active pill background — CSS transition */}
          {language === code && (
            <span
              className="absolute inset-0 bg-white rounded-full shadow-sm transition-all duration-300"
            />
          )}
          <span className={`relative z-10 ${
            language === code ? 'text-primary' : 'text-blue-100 hover:text-white'
          }`}>
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}

