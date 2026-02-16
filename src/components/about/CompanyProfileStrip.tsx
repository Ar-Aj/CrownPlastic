'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import CrownButton from '@/components/ui/crown/CrownButton';
import Icon from '@/components/ui/Icon';
import { useT } from '@/i18n';

// ═══════════════════════════════════════════════════════════════════════════════
// COMPANY PROFILE STRIP - Closing Section with CTAs
// Features: Summary paragraph, dual CTAs, clean design
// Palette: Blue / White / Black only
// ═══════════════════════════════════════════════════════════════════════════════

export default function CompanyProfileStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const t = useT();

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-14 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-1 bg-white/10 text-white/90 text-sm font-medium rounded-full mb-4 border border-white/20">
              {t('about.profile.badge')}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('about.profile.title')}
            </h2>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-10"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              {t('about.profile.text_1')}
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              {t('about.profile.text_2')}
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            <HighlightStat value="30+" label={t('about.profile.highlights.experience')} />
            <HighlightStat value="5,000+" label={t('about.profile.highlights.variants')} />
            <HighlightStat value="10,000+" label={t('about.profile.highlights.customers')} />
            <HighlightStat value="6+" label={t('about.profile.highlights.markets')} />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <CrownButton
              href="/resources"
              variant="primary"
              size="lg"
              className="group"
            >
              <Icon name="download" size={20} />
              <span>{t('about.profile.cta.download')}</span>
            </CrownButton>
            <CrownButton
              href="/contact-us"
              variant="secondary"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900"
            >
              <Icon name="phone" size={20} />
              <span>{t('about.profile.cta.contact')}</span>
            </CrownButton>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Icon name="location" size={16} className="text-primary" />
                <span>{t('about.profile.contact_info.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="phone" size={16} className="text-primary" />
                <a href="tel:+97165436781" className="hover:text-white transition-colors">
                  +971 6 543 6781
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="email" size={16} className="text-primary" />
                <a href="mailto:info@crownplasticuae.com" className="hover:text-white transition-colors">
                  info@crownplasticuae.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HIGHLIGHT STAT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface HighlightStatProps {
  value: string;
  label: string;
}

function HighlightStat({ value, label }: HighlightStatProps) {
  return (
    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
      <span className="block text-2xl md:text-3xl font-bold text-primary mb-1">{value}</span>
      <span className="text-sm text-white/60">{label}</span>
    </div>
  );
}
