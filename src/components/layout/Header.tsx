'use client';

import Link from '@/components/common/LocaleLink';
import Image from 'next/image';
import { useState } from 'react';
import { brand } from '@/config/brand';
import { mainNavItems } from '@/config/routes';
import MainNav from '@/components/nav/MainNav';
import MobileNav from '@/components/nav/MobileNav';
import { LanguageToggle } from '@/components/common';
import { useScrollDirection, usePrefersReducedMotion } from '@/components/common/useAnimations';
import { useT } from '@/i18n';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection(10);
  const prefersReducedMotion = usePrefersReducedMotion();
  const t = useT();

  // Determine navbar visibility state
  // On mobile (< lg breakpoint): always visible
  // On desktop/tablet: hide when scrolling down, show when scrolling up or at top
  // CRITICAL: Keep navbar visible when mobile menu is open to prevent disorientation
  const isHidden = isMobileMenuOpen ? false : scrollDirection === 'down';

  return (
    <>
      <header
        className={
          `fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ease-in-out ${isHidden
            ? prefersReducedMotion
              ? 'opacity-80' // Reduced motion: slight opacity fade only
              : '-translate-y-full' // Full slide up to hide completely
            : 'translate-y-0'
          } ${
          // Translucent background when visible and not at very top
          scrollDirection !== null
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white shadow-sm'
          }`
        }
      >
        {/* Top utility bar */}
        <div className="bg-primary text-white text-sm">
          <div className="max-w-[1920px] w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <a href={`tel:${brand.contact.phone}`} className="flex items-center gap-1 hover:text-accent transition-colors" aria-label="Call Us">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline" dir="ltr">{brand.contact.phone}</span>
              </a>
              <a href={`mailto:${brand.contact.email}`} className="flex items-center gap-1 hover:text-accent transition-colors" aria-label="Email Us">
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
                {/* Instagram */}
                <a href="https://www.instagram.com/crownplasticuae" target="_blank" rel="noopener noreferrer" aria-label="Crown Plastic on Instagram" className="hover:text-accent transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@crownplasticuae" target="_blank" rel="noopener noreferrer" aria-label="Crown Plastic on TikTok" className="hover:text-accent transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                  </svg>
                </a>
              </div>
              {/* Join Us Button */}
              <Link
                href="/join-us"
                className="hidden sm:inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white px-3 py-1 rounded font-medium transition-colors text-xs"
              >
                {t('nav.join_us')}
                <svg className="w-3 h-3 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-[1920px] w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 xl:gap-3 shrink-0">
              <div className="relative w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20">
                <Image
                  src="/images/logo.png"
                  alt="Crown Plastic Pipes Logo"
                  fill
                  className="object-contain"
                  sizes="80px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold tracking-tight uppercase text-primary">
                  CROWN PLASTIC PIPES / FITTINGS
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation - aligned right on desktop */}
            <nav className="hidden lg:flex items-center">
              <MainNav items={mainNavItems} />
            </nav>

            {/* Mobile Menu Toggle - hidden on desktop to avoid flex interference */}
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
      </header>

      {/* Mobile Navigation - MUST be outside header to break stacking context */}
      <MobileNav
        items={mainNavItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
