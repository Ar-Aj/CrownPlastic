'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NavItem } from '@/config/routes';
import { brand } from '@/config/brand';
import { usePrefersReducedMotion } from '@/components/common/useAnimations';
import { LanguageToggle } from '@/components/common';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationPath } from '@/i18n/en';

interface MobileNavProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

// Map nav labels to translation paths (for main nav items)
const navLabelToPath: Record<string, TranslationPath> = {
  'Home': 'nav.home',
  'About': 'nav.about',
  'Products': 'nav.products',
  'Sustainability': 'nav.sustainability',
  'Innovation': 'nav.innovation',
  'Media & Blogs': 'nav.media_blogs',
  'Resources': 'nav.resources',
  'Contact': 'nav.contact',
};

export default function MobileNav({ items, isOpen, onClose }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { isRTL, language } = useLanguage();
  const t = useT();

  // Translate a label if it has a mapping, otherwise return as-is
  const translateLabel = (label: string): string => {
    const path = navLabelToPath[label];
    return path ? t(path) : label;
  };

  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      // Delay hiding to allow close animation
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop - z-[60] ensures it sits above header (z-50) and all page content */}
      <div
        className="fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300"
        style={{ 
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
      />

      {/* Mobile menu panel - z-[70] ensures it's the absolute top layer */}
      <div 
        className={`fixed top-0 h-full w-80 max-w-full bg-white z-[70] lg:hidden shadow-xl overflow-y-auto ${
          isRTL ? 'left-0' : 'right-0'
        }`}
        style={{
          transform: isOpen 
            ? 'translateX(0)' 
            : isRTL 
              ? 'translateX(-100%)' 
              : 'translateX(100%)',
          transition: prefersReducedMotion ? 'none' : 'transform 300ms ease-out',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="Crown Plastic Pipes Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-primary">Crown Plastic Pipes</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label={t('nav.close_menu')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation items */}
        <nav className="p-4">
          {items.map((item) => (
            <div key={item.href} className="border-b border-gray-100 last:border-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-primary transition-colors"
                  >
                    <span className="font-medium">{translateLabel(item.label)}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        expandedItems.includes(item.label) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedItems.includes(item.label) && (
                    <div className="pl-4 pb-2">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-2 text-sm text-primary font-medium"
                      >
                        {t('nav.view_all')} {translateLabel(item.label)}
                      </Link>
                      {item.children.map((child) => {
                        const childLabel = language === 'ar' ? (child.labelAr || child.label) : child.label;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                          >
                            {childLabel}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {translateLabel(item.label)}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="p-4 mt-4 border-t">
          <Link
            href="/contact-us"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg font-medium transition-colors rtl:flex-row-reverse"
          >
            {t('common.get_a_quote')}
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Language Toggle */}
        <div className="p-4 border-t">
          <LanguageToggle variant="mobile" />
        </div>

        {/* Contact info */}
        <div className="p-4 bg-gray-50 mt-auto">
          <p className="text-sm text-gray-500 mb-2">{t('common.contact_us')}</p>
          <a
            href={`tel:${brand.contact.phone}`}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary mb-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {brand.contact.phone}
          </a>
          <a
            href={`mailto:${brand.contact.email}`}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {brand.contact.email}
          </a>
        </div>
      </div>
    </>
  );
}
