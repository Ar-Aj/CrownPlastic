'use client';

import { useState, useRef, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import { certifications, standards, type Certification, type Standard } from './about.types';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { useT, TranslationPath } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';

// Dynamic import — Three.js requires browser APIs (no SSR)
const CertPipeline3D = dynamic(() => import('./CertPipeline3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] mb-8 flex items-center justify-center bg-slate-900/5 rounded-2xl animate-pulse">
      <p className="text-primary font-bold">Loading Interactive Pipeline...</p>
    </div>
  ),
});

// ═══════════════════════════════════════════════════════════════════════════════
// CERTIFICATIONS & STANDARDS - Interactive Drawer Section
// Features: Pill chips, accordion/drawer details, standards table
// Palette: Blue / White / Black only
// ═══════════════════════════════════════════════════════════════════════════════

// Map standard codes to dictionary keys
const STANDARD_CODE_TO_KEY: Record<string, string> = {
  'NSF Certified': 'nsf_certified',
  'ISO 9001:2015': 'iso_9001_2015',
  'ISO 14001:2015': 'iso_14001_2015',
  'ISO 45001:2018': 'iso_45001_2018',
  'OHSAS 18001:2007': 'ohsas_18001_2007',
  'BS EN 1452-2:2009': 'bs_en_1452_2_2009',
  'DIN 8061: 2009': 'din_8061_2009',
  'DIN 8062: 2009': 'din_8062_2009',
  'SASO 14': 'saso_14',
  'SASO 15': 'saso_15',
  'ISO 4422-2': 'iso_4422_2',
  'ASTM D 1785': 'astm_d_1785',
  'ASTM D 2241': 'astm_d_2241',
  'ASTM D 2467': 'astm_d_2467',
  'ASTM D 2466': 'astm_d_2466',
  'ASTM D 2464': 'astm_d_2464',
  'BS 3505: 1986': 'bs_3505_1986',
  'BS 3506: 1969': 'bs_3506_1969',
  'BS 4346: 1982': 'bs_4346_1982',
  'DIN 8063: 2009': 'din_8063_2009',
  'BS EN 1329-1:2014': 'bs_en_1329_1_2014',
  'BS EN 1401-1:2009': 'bs_en_1401_1_2009',
  'BS EN 61386-1:2008': 'bs_en_61386_1_2008',
  'BS 4607-1:1984+A2:2010': 'bs_4607_1_1984',
};

export default function CertificationsAndStandards() {
  const [activeCert, setActiveCert] = useState<string | null>(certifications[0]?.id || null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const t = useT();
  const { language } = useLanguage();

  // Translate certification names/scope/body/benefit
  const translatedCerts = useMemo(() =>
    certifications.map((c) => ({
      ...c,
      code: c.code === 'NSF Certified' ? (language === 'fr' ? 'Certifié NSF' : language === 'ar' ? 'معتمد من NSF' : c.code) : c.code,
      name: t(`about.certifications.items.${c.id}.name` as TranslationPath),
      scope: t(`about.certifications.items.${c.id}.scope` as TranslationPath),
      issuingBody: t(`about.certifications.items.${c.id}.issuing_body` as TranslationPath),
      benefit: t(`about.certifications.items.${c.id}.benefit` as TranslationPath),
    })),
    [t, language]);


  // Translate standard descriptions
  const translatedStandards = useMemo(() =>
    standards.map((s) => {
      const key = STANDARD_CODE_TO_KEY[s.code];
      if (!key) return s;
      return {
        ...s,
        code: s.code === 'NSF Certified' ? (language === 'fr' ? 'Certifié NSF' : language === 'ar' ? 'معتمد من NSF' : s.code) : s.code,
        description: t(`about.certifications.standards_table.items.${key}.description` as TranslationPath),
      };
    }),
    [t, language]);

  useEffect(() => {
    if (!isAutoPlaying || !isInView || translatedCerts.length === 0) return;

    const intervalId = setInterval(() => {
      setActiveCert((current) => {
        const currentIndex = translatedCerts.findIndex((c) => c.id === current);
        if (currentIndex < translatedCerts.length - 1) {
          return translatedCerts[currentIndex + 1].id;
        } else {
          setIsAutoPlaying(false);
          return current;
        }
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isAutoPlaying, isInView, translatedCerts]);

  const selectedCert = translatedCerts.find((c) => c.id === activeCert);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-gray-50"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {t('about.certifications.badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('about.certifications.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.certifications.description')}
          </p>
        </motion.div>

        {/* 3D Interactive Pipeline — eagerly pre-rendered via next/dynamic on client load */}
        <CertPipeline3D
          certs={translatedCerts}
          activeCert={activeCert}
          onCertClick={(id) => {
            setIsAutoPlaying(false);
            setActiveCert(id);
          }}
        />

        {/* Expandable Details Drawer */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-12"
            >
              <CertificationDetails
                cert={selectedCert}
                onClose={() => setActiveCert(null)}
                prefersReducedMotion={prefersReducedMotion}
                t={t}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Standards Comparison Table */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <StandardsTable standards={translatedStandards} t={t} />
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICATION DETAILS DRAWER
// ─────────────────────────────────────────────────────────────────────────────

interface CertificationDetailsProps {
  cert: Certification;
  onClose: () => void;
  prefersReducedMotion: boolean | null;
}

function CertificationDetails({ cert, onClose, prefersReducedMotion, t }: CertificationDetailsProps & { t: ReturnType<typeof useT> }) {
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon name={cert.icon} size={28} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{cert.code}</h3>
            <p className="text-gray-500">{cert.name}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Close details"
        >
          <Icon name="plus" size={20} className="rotate-45 text-gray-400" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Scope */}
        <div className="p-4 rounded-xl bg-gray-50">
          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium block mb-2">
            {t('about.certifications.drawer_labels.scope')}
          </span>
          <p className="text-gray-700">{cert.scope}</p>
        </div>

        {/* Issuing Body */}
        <div className="p-4 rounded-xl bg-gray-50">
          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium block mb-2">
            {t('about.certifications.drawer_labels.issuing_body')}
          </span>
          <p className="text-gray-700">{cert.issuingBody}</p>
        </div>

        {/* Customer Benefit */}
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
          <span className="text-xs uppercase tracking-wider text-primary font-medium block mb-2">
            {t('about.certifications.drawer_labels.benefit')}
          </span>
          <p className="text-gray-700">{cert.benefit}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STANDARDS COMPARISON TABLE
// ─────────────────────────────────────────────────────────────────────────────

interface StandardsTableProps {
  standards: Standard[];
  t: ReturnType<typeof useT>;
}

function StandardsTable({ standards, t }: StandardsTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">{t('about.certifications.standards_table.title')}</h3>
        <p className="text-sm text-gray-500">{t('about.certifications.standards_table.subtitle')}</p>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold w-48 min-w-[180px]">
                {t('about.certifications.standards_table.headers.standard')}
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold">
                {t('about.certifications.standards_table.headers.description')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {standards.map((standard, index) => (
              <tr
                key={standard.code}
                className={cn(
                  'transition-colors duration-200 hover:bg-gray-50',
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                )}
              >
                <td className="px-6 py-4 align-top">
                  <span className="font-bold text-primary whitespace-nowrap">{standard.code}</span>
                </td>
                <td className="px-6 py-4 text-gray-700">{standard.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View Enhancement */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center md:hidden">
        <span className="text-sm text-gray-500">{t('about.certifications.standards_table.scroll_hint')}</span>
      </div>
    </div>
  );
}
