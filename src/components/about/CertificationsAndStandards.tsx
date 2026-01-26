'use client';

import { useState, useRef } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import { certifications, standards, type Certification, type Standard } from './about.types';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// CERTIFICATIONS & STANDARDS - Interactive Drawer Section
// Features: Pill chips, accordion/drawer details, standards table
// Palette: Blue / White / Black only
// ═══════════════════════════════════════════════════════════════════════════════

export default function CertificationsAndStandards() {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const selectedCert = certifications.find((c) => c.id === activeCert);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-gray-50"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-[10vw]">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Quality Assurance
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Certifications & Standards
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Internationally recognized certifications ensuring product quality, safety, and environmental compliance
          </p>
        </motion.div>

        {/* Certification Pills */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {certifications.map((cert, index) => (
            <CertificationPill
              key={cert.id}
              cert={cert}
              isActive={cert.id === activeCert}
              onClick={() => setActiveCert(cert.id === activeCert ? null : cert.id)}
              index={index}
              isInView={isInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>

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
          <StandardsTable standards={standards} />
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICATION PILL COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface CertificationPillProps {
  cert: Certification;
  isActive: boolean;
  onClick: () => void;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
}

function CertificationPill({
  cert,
  isActive,
  onClick,
  index,
  isInView,
  prefersReducedMotion,
}: CertificationPillProps) {
  return (
    <motion.button
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200',
        'border-2 font-medium text-sm',
        isActive
          ? 'bg-primary border-primary text-white shadow-md'
          : 'bg-white border-gray-200 text-gray-700 hover:border-primary/50 hover:shadow-sm'
      )}
    >
      <Icon
        name={cert.icon}
        size={16}
        className={isActive ? 'text-white' : 'text-primary'}
      />
      <span>{cert.code}</span>
      {isActive && (
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: 45 }}
          className="ml-1"
        >
          <Icon name="plus" size={14} />
        </motion.span>
      )}
    </motion.button>
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

function CertificationDetails({ cert, onClose, prefersReducedMotion }: CertificationDetailsProps) {
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
            Scope
          </span>
          <p className="text-gray-700">{cert.scope}</p>
        </div>

        {/* Issuing Body */}
        <div className="p-4 rounded-xl bg-gray-50">
          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium block mb-2">
            Issuing Body
          </span>
          <p className="text-gray-700">{cert.issuingBody}</p>
        </div>

        {/* Customer Benefit */}
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
          <span className="text-xs uppercase tracking-wider text-primary font-medium block mb-2">
            Customer Benefit
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
}

function StandardsTable({ standards }: StandardsTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">Standards Compliance</h3>
        <p className="text-sm text-gray-500">Product specifications across international standards</p>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Standard
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold hidden md:table-cell">
                Name
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Application
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-gray-500 font-semibold hidden lg:table-cell">
                Product Types
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
                <td className="px-6 py-4">
                  <span className="font-bold text-primary">{standard.code}</span>
                </td>
                <td className="px-6 py-4 text-gray-600 hidden md:table-cell">
                  {standard.name}
                </td>
                <td className="px-6 py-4 text-gray-700">{standard.application}</td>
                <td className="px-6 py-4 text-gray-500 text-sm hidden lg:table-cell">
                  {standard.productTypes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View Enhancement */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center md:hidden">
        <span className="text-sm text-gray-500">Scroll horizontally for more details</span>
      </div>
    </div>
  );
}
