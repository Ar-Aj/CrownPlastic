'use client';

import Link from 'next/link';
import { useState, useRef, useCallback } from 'react';
import { NavItem } from '@/config/routes';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationPath } from '@/i18n/en';

interface MainNavProps {
  items: NavItem[];
}

// Map nav labels to translation paths (for main nav items)
const navLabelToPath: Record<string, TranslationPath> = {
  'Home': 'nav.home',
  'About': 'nav.about',
  'Products': 'nav.products',
  'Sustainability': 'nav.sustainability',
  'Innovation': 'nav.innovation',
  'News & Media': 'nav.news_media',
  'Resources': 'nav.resources',
  'Contact': 'nav.contact',
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
    // Clear any pending close timeout
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
    // Add 150ms delay before closing to allow moving to dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  return (
    <nav className="flex items-center gap-0.5 xl:gap-1">
      {items.map((item) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label, !!item.children)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className={`px-2 xl:px-3 py-2 text-[13px] xl:text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-0.5 whitespace-nowrap ${
              openDropdown === item.label ? 'text-primary bg-gray-50' : ''
            }`}
          >
            {translateLabel(item.label)}
            {item.children && (
              <svg
                className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${
                  openDropdown === item.label ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>

          {/* Dropdown menu - no gap, connects to parent */}
          {item.children && openDropdown === item.label && (
            <div 
              className={`absolute top-full pt-1 z-50 ${
                isRTL ? 'right-0' : 'left-0'
              }`}
            >
              {/* Invisible bridge to prevent hover gap */}
              <div className="absolute -top-1 left-0 right-0 h-2" />
              <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {item.children.map((child) => {
                  const childLabel = language === 'ar' ? (child.labelAr || child.label) : child.label;
                  const childDesc = language === 'ar' ? (child.descriptionAr || child.description) : child.description;
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
