'use client';

import { useRef, useMemo } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { innovationPillars, type InnovationPillar } from './about.types';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { useT, TranslationPath } from '@/i18n';

// ═══════════════════════════════════════════════════════════════════════════════
// INNOVATION LAB SECTION - R&D Card Wall
// Features: Interactive card grid, hover effects, specs display
// Palette: Blue / White / Black only
// ═══════════════════════════════════════════════════════════════════════════════

// Map pillar IDs to dictionary keys (kebab-case to snake_case)
const PILLAR_ID_TO_KEY: Record<string, string> = {
  'virgin-material': 'virgin_material',
  'inhouse-qc': 'inhouse_qc',
  'gulf-climate': 'gulf_climate',
  'independent-lab': 'independent_lab',
  'chemical-resistance': 'chemical_resistance',
  'european-tech': 'european_tech',
};

export default function InnovationLabSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const t = useT();


  // Translate pillar titles/descriptions/specs
  const translatedPillars = useMemo(() =>
    innovationPillars.map((p) => {
      const key = PILLAR_ID_TO_KEY[p.id];
      if (!key) return p;
      const pillarPath = `about.innovation.pillars.${key}`;
      return {
        ...p,
        title: t(`${pillarPath}.title` as TranslationPath),
        description: t(`${pillarPath}.description` as TranslationPath),
        specs: p.specs?.map((spec, i) => {
          // Specs in dictionary use specific property keys
          const specKeys = getSpecKeys(key, i);
          return {
            property: t(`${pillarPath}.specs.${specKeys.prop}` as TranslationPath),
            value: t(`${pillarPath}.specs.${specKeys.val}` as TranslationPath),
          };
        }),
      };
    }),
    [t]);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-white"
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
            {t('about.innovation.badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('about.innovation.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.innovation.description')}
          </p>
        </motion.div>

        {/* Innovation Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translatedPillars.map((pillar, index) => (
            <InnovationCard
              key={pillar.id}
              pillar={pillar}
              index={index}
              isInView={isInView}
              prefersReducedMotion={prefersReducedMotion}
              specsLabel={t('about.innovation.specs_label')}
            />
          ))}
        </div>

        {/* Lab Feature Strip */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100"
        >
          <div className="grid md:grid-cols-4 gap-6">
            <LabFeature
              icon="microscope"
              title={t('about.innovation.lab_features.inhouse_lab.title')}
              description={t('about.innovation.lab_features.inhouse_lab.description')}
            />
            <LabFeature
              icon="certified"
              title={t('about.innovation.lab_features.iso_17025.title')}
              description={t('about.innovation.lab_features.iso_17025.description')}
            />
            <LabFeature
              icon="cog"
              title={t('about.innovation.lab_features.battenfeld.title')}
              description={t('about.innovation.lab_features.battenfeld.description')}
            />
            <LabFeature
              icon="climate"
              title={t('about.innovation.lab_features.climate_chamber.title')}
              description={t('about.innovation.lab_features.climate_chamber.description')}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper: return dictionary spec property/value keys for each pillar
function getSpecKeys(pillarKey: string, specIndex: number): { prop: string; val: string } {
  const specKeyMap: Record<string, { prop: string; val: string }[]> = {
    virgin_material: [
      { prop: 'purity', val: 'purity_val' },
      { prop: 'contamination', val: 'contamination_val' },
    ],
    inhouse_qc: [
      { prop: 'testing', val: 'testing_val' },
      { prop: 'params', val: 'params_val' },
    ],
    gulf_climate: [
      { prop: 'vicat', val: 'vicat_val' },
      { prop: 'service', val: 'service_val' },
    ],
    independent_lab: [
      { prop: 'accreditation', val: 'accreditation_val' },
      { prop: 'standards', val: 'standards_val' },
    ],
    chemical_resistance: [
      { prop: 'acid', val: 'acid_val' },
      { prop: 'alkali', val: 'alkali_val' },
    ],
    european_tech: [
      { prop: 'equipment', val: 'equipment_val' },
      { prop: 'tolerance', val: 'tolerance_val' },
    ],
  };
  return specKeyMap[pillarKey]?.[specIndex] ?? { prop: `spec${specIndex}`, val: `spec${specIndex}_val` };
}

// ─────────────────────────────────────────────────────────────────────────────
// INNOVATION CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface InnovationCardProps {
  pillar: InnovationPillar;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
  specsLabel: string;
}

function InnovationCard({ pillar, index, isInView, prefersReducedMotion, specsLabel }: InnovationCardProps) {
  // Calculate stagger delay
  const row = Math.floor(index / 3);
  const col = index % 3;
  const delay = 0.2 + (row * 0.15) + (col * 0.1);

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
            y: -6,
            rotateX: 2,
            rotateY: -2,
            transition: { duration: 0.2 },
          }
      }
      className={cn(
        'group relative p-6 rounded-2xl transition-all duration-300',
        'bg-white border border-gray-100',
        'hover:shadow-xl hover:border-primary/30',
        'transform-gpu perspective-1000'
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon name={pillar.icon} size={28} className="text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
        {pillar.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {pillar.description}
      </p>

      {/* Specs Block (Code-like display) */}
      {pillar.specs && pillar.specs.length > 0 && (
        <div className="bg-gray-900 rounded-xl p-4 mt-4 font-mono text-xs overflow-hidden">
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <span className="w-3 h-3 rounded-full bg-gray-700" />
            <span className="w-3 h-3 rounded-full bg-gray-700" />
            <span className="w-3 h-3 rounded-full bg-gray-700" />
            <span className="ml-2">{specsLabel}</span>
          </div>
          {pillar.specs.map((spec, i) => (
            <div key={i} className="flex justify-between gap-4 py-1">
              <span className="text-gray-400">{spec.property}</span>
              <span className="text-primary font-semibold">{spec.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Hover Accent */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LAB FEATURE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface LabFeatureProps {
  icon: 'microscope' | 'certified' | 'cog' | 'climate';
  title: string;
  description: string;
}

function LabFeature({ icon, title, description }: LabFeatureProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
        <Icon name={icon} size={24} className="text-primary" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
