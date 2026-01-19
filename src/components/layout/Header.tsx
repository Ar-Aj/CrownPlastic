'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { brand } from '@/config/brand';
import { mainNavItems } from '@/config/routes';
import MainNav from '@/components/nav/MainNav';
import MobileNav from '@/components/nav/MobileNav';
import { LanguageToggle } from '@/components/common';
import { useT } from '@/i18n';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useT();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a href={`tel:${brand.contact.phone}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">{brand.contact.phone}</span>
            </a>
            <a href={`mailto:${brand.contact.email}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden md:inline">{brand.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <LanguageToggle variant="header" />
            <span className="text-xs hidden lg:inline">UAE</span>
            <div className="flex items-center gap-2">
              {/* Social icons */}
              <a href={brand.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
            {/* Join Us Button */}
            <Link
              href="/join-us"
              className="hidden sm:inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white px-3 py-1 rounded font-medium transition-colors text-xs"
            >
              Join Us!
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 xl:gap-3 shrink-0">
            <div className="relative w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20">
              <Image
                src="/images/logo.png"
                alt="Crown Plastic Pipes Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-primary leading-tight">
                Crown Plastic Pipes
              </h1>
              <p className="text-xs lg:text-xs xl:text-sm text-gray-500">Factory L.L.C.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <MainNav items={mainNavItems} />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={t('nav.open_menu')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        items={mainNavItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
