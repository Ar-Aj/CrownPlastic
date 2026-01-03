'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NavItem } from '@/config/routes';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationPath } from '@/i18n/en';

interface MainNavProps {
  items: NavItem[];
}

// Map nav labels to translation paths (for main nav items)
const navLabelToPath: Record<string, TranslationPath> = {
  'About': 'nav.about',
  'Products': 'nav.products',
  'Sustainability': 'nav.sustainability',
  'Innovation': 'nav.innovation',
  'Investor Relations': 'nav.investor_relations',
  'News & Media': 'nav.news_media',
  'Resources': 'nav.resources',
  'Contact': 'nav.contact',
};

export default function MainNav({ items }: MainNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { isRTL } = useLanguage();
  const t = useT();

  // Translate a label if it has a mapping, otherwise return as-is
  const translateLabel = (label: string): string => {
    const path = navLabelToPath[label];
    return path ? t(path) : label;
  };

  return (
    <nav className="flex items-center gap-1">
      {items.map((item) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => item.children && setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href={item.href}
            className={`px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-1 ${
              openDropdown === item.label ? 'text-primary bg-gray-50' : ''
            }`}
          >
            {translateLabel(item.label)}
            {item.children && (
              <svg
                className={`w-4 h-4 transition-transform ${
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

          {/* Dropdown menu */}
          {item.children && openDropdown === item.label && (
            <div className={`absolute top-full mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 ${
              isRTL ? 'right-0' : 'left-0'
            }`}>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium">{child.label}</span>
                  {child.description && (
                    <span className="block text-xs text-gray-500 mt-0.5">
                      {child.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
