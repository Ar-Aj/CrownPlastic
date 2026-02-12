'use client';

import { motion } from 'framer-motion';
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
  ];

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span className="text-sm text-gray-500">Language:</span>
        <div className="relative flex rounded-full overflow-hidden bg-slate-100 p-1">
          {/* Sliding pill indicator */}
          <motion.div
            className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full shadow-sm"
            initial={false}
            animate={{ x: language === 'en' ? 0 : 'calc(100% + 8px)' }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLanguage(code)}
              className={`relative z-10 px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                language === code
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-900'
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

  // Header variant - Pill-shaped toggle switch
  return (
    <div className={`relative flex items-center rounded-full bg-white/15 p-1 ${className}`}>
      {/* Sliding white pill indicator */}
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm"
        initial={false}
        animate={{ x: language === 'en' ? 0 : 'calc(100% + 8px)' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`relative z-10 px-4 py-1.5 text-sm font-semibold transition-colors duration-200 ${
            language === code
              ? 'text-primary'
              : 'text-blue-100 hover:text-white'
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
