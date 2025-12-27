'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NavItem } from '@/config/routes';

interface MainNavProps {
  items: NavItem[];
}

export default function MainNav({ items }: MainNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
            {item.label}
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
            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
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
