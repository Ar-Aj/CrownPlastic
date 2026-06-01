'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { type ComponentProps, forwardRef } from 'react';
import { type Locale, localePath, defaultLocale } from '@/lib/i18n-utils';

/**
 * Locale-aware Link component.
 * Automatically prefixes internal paths with the current locale.
 * External URLs, anchors, tel:, mailto:, and already-prefixed paths pass through unchanged.
 */
const LocaleLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof Link>>(
  function LocaleLink({ href, ...props }, ref) {
    const params = useParams();
    const locale = (params?.locale as Locale) || defaultLocale;

    let localizedHref = href;

    if (typeof href === 'string') {
      // Only prefix absolute internal paths that don't already have a locale prefix
      const isInternal = href.startsWith('/');
      const hasLocalePrefix = /^\/(?:en|ar)(?:\/|$)/.test(href);
      const isSpecialProtocol = href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http');

      if (isInternal && !hasLocalePrefix && !isSpecialProtocol) {
        localizedHref = localePath(href, locale);
      }
    }

    return <Link ref={ref} {...props} href={localizedHref} />;
  }
);

export default LocaleLink;
