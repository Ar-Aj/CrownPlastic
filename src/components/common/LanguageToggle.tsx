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

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
/**
 * Language toggle component for switching between English and Arabic.
 * 
 * - `header` variant: Compact pills for the top utility bar
 * - `mobile` variant: Larger touch-friendly buttons for mobile menu
 */
export default function LanguageToggle({ 
  variant = 'header',
  className = '' 
}: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span className="text-sm text-gray-500">Language:</span>
        <div className="flex rounded-lg overflow-hidden border border-gray-200">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                language === code
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              aria-label={`Switch to ${code === 'en' ? 'English' : 'Arabic'}`}
              aria-pressed={language === code}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Header variant (compact)
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            language === code
              ? 'bg-white/20 text-white'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
          aria-label={`Switch to ${code === 'en' ? 'English' : 'Arabic'}`}
          aria-pressed={language === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
