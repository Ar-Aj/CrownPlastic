'use client';

import Link from '@/components/common/LocaleLink';
import Image from 'next/image';
import { brand } from '@/config/brand';
import { footerColumns } from '@/config/routes';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import { localizedValue } from '@/lib/i18n-utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useT();
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-[1920px] w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 xl:gap-12">
          {/* Company info */}
          <div className="lg:col-span-1 xl:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 xl:w-16 xl:h-16">
                <Image
                  src="/images/logo.png"
                  alt="Crown Plastic Pipes Logo"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="text-lg xl:text-xl font-bold tracking-tight uppercase text-white leading-tight">
                  CROWN PLASTIC PIPES / FITTINGS
                </h3>
              </div>
            </Link>
            <p className="text-gray-400 text-sm xl:text-base mb-6 leading-relaxed max-w-xs">
              {localizedValue(language, brand.tagline, brand.taglineAr, brand.taglineFr)}
            </p>
            <div className="space-y-3 text-sm xl:text-base text-gray-400">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {brand.contact.address}
              </p>
              <a href={`tel:${brand.contact.phone}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span dir="ltr">{brand.contact.phone}</span>
              </a>
              <a href={`mailto:${brand.contact.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {brand.contact.email}
              </a>
            </div>
          </div>

          {/* Footer columns */}
          {footerColumns.map((column) => {
            if (column.title === 'Service Areas') return null; // Remove Service Areas from viewing
            const colTitle = localizedValue(language, column.title, column.titleAr, column.titleFr);
            return (
              <div key={column.title} className={column.title === 'Products' ? 'lg:col-span-2 lg:mx-auto max-w-sm w-full' : ''}>
                <h4 className={`font-bold text-base xl:text-xl text-white mb-4 xl:mb-6 ${column.title === 'Products' ? 'text-center w-full' : ''}`}>
                  {colTitle}
                </h4>
                <ul className={column.title === 'Products' ? "grid grid-cols-2 gap-x-4 gap-y-2.5 xl:gap-y-3" : "space-y-2.5 xl:space-y-3"}>
                  {column.links.map((link) => {
                    const linkLabel = localizedValue(language, link.label, link.labelAr, link.labelFr);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-primary transition-colors text-sm xl:text-base block py-0.5"
                        >
                          {linkLabel}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 mt-12 xl:mt-16 pt-8 border-t border-gray-800">
          <span className="text-gray-400 text-sm xl:text-base font-medium">{t('footer.follow_us')}</span>
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/crownplasticuae"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Crown Plastic on Instagram"
              className="w-9 h-9 xl:w-10 xl:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-gray-300 hover:text-white"
            >
              <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@crownplasticuae"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Crown Plastic on TikTok"
              className="w-9 h-9 xl:w-10 xl:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-gray-300 hover:text-white"
            >
              <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-950 py-4 lg:py-6">
        <div className="max-w-[1920px] w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} {brand.name}. {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">{t('footer.privacy_policy')}</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">{t('footer.sitemap')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
