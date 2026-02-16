'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useT, type TranslationPath } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';

type TFn = (key: TranslationPath) => string;

// ═══════════════════════════════════════════════════════════════════════════════
// DOCUMENT DATA — mapped to i18n keys
// ═══════════════════════════════════════════════════════════════════════════════

interface TechDocument {
    key: string;        // i18n key suffix under resources.documents.*
    standard?: string;  // e.g. 'BS EN 1452'
}

interface Category {
    id: string;
    titleKey: TranslationPath;
    descKey: TranslationPath;
    icon: React.ReactNode;
    documents: TechDocument[];
}

const CATEGORIES: Category[] = [
    {
        id: 'certifications',
        titleKey: 'resources.categories.certifications.title',
        descKey: 'resources.categories.certifications.description',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        documents: [
            { key: 'iso_9001', standard: 'ISO 9001:2015' },
            { key: 'iso_14001', standard: 'ISO 14001:2015' },
            { key: 'iso_45001', standard: 'ISO 45001:2018' },
        ],
    },
    {
        id: 'pressure',
        titleKey: 'resources.categories.pressure.title',
        descKey: 'resources.categories.pressure.description',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        documents: [
            { key: 'pressure_pipes', standard: 'BS EN 1452 / ASTM D1785' },
            { key: 'pressure_fittings_astm', standard: 'ASTM D 2466 SCH-40' },
            { key: 'pressure_fittings_bs', standard: 'BS EN 1452:23 / BS 4346 PN 15' },
            { key: 'pressure_fittings_din', standard: 'DIN 8063' },
        ],
    },
    {
        id: 'drainage',
        titleKey: 'resources.categories.drainage.title',
        descKey: 'resources.categories.drainage.description',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        ),
        documents: [
            { key: 'drainage_pipes', standard: 'BS EN 1329 / BS EN 1401' },
            { key: 'drainage_fittings_1329', standard: 'BS EN 1329-1:2014' },
            { key: 'drainage_fittings_1401', standard: 'BS EN 1401' },
        ],
    },
    {
        id: 'specialty',
        titleKey: 'resources.categories.specialty.title',
        descKey: 'resources.categories.specialty.description',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        ),
        documents: [
            { key: 'ppr_pipes', standard: 'DIN 8077/78' },
            { key: 'hdpe_systems', standard: 'ISO 4427' },
            { key: 'conduit', standard: 'BS 4607' },
            { key: 'duct', standard: 'BS EN 61386' },
            { key: 'fabrications' },
        ],
    },
    {
        id: 'tech_specs',
        titleKey: 'resources.categories.tech_specs.title',
        descKey: 'resources.categories.tech_specs.description',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        documents: [
            { key: 'tech_specs', standard: 'ASTM / BS EN / DIN' },
            { key: 'standards', standard: 'Compliance Index' },
        ],
    },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ACCORDION ITEM
// ═══════════════════════════════════════════════════════════════════════════════

function AccordionSection({
    category,
    isOpen,
    onToggle,
    t,
}: {
    category: Category;
    isOpen: boolean;
    onToggle: () => void;
    t: TFn;
}) {
    return (
        <div className="border border-white/[0.06] rounded-2xl overflow-hidden transition-colors duration-300 hover:border-white/[0.12]">
            {/* Header */}
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-4 px-6 py-5 text-left transition-all duration-300 group"
            >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    {category.icon}
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-[15px] tracking-tight">
                        {t(category.titleKey)}
                    </h3>
                    <p className="text-slate-500 text-xs mt-0.5 truncate">
                        {t(category.descKey)}
                    </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:block text-[11px] font-medium text-slate-600 tracking-widest uppercase">
                        {category.documents.length} docs
                    </span>
                    <svg
                        className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Content */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-5 pt-1">
                    <div className="grid gap-2">
                        {category.documents.map((doc) => (
                            <div
                                key={doc.key}
                                className="group/card flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-[1px]"
                            >
                                {/* File icon */}
                                <div className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-200 tracking-tight group-hover/card:text-white transition-colors truncate">
                                        {t(`resources.documents.${doc.key}` as TranslationPath)}
                                    </p>
                                    {doc.standard && (
                                        <p className="text-[11px] text-slate-600 mt-0.5 font-mono tracking-wide">
                                            {doc.standard}
                                        </p>
                                    )}
                                </div>

                                {/* Action */}
                                <button className="shrink-0 text-[11px] font-semibold tracking-wider uppercase text-blue-400/70 hover:text-blue-400 transition-colors px-3 py-1.5 rounded-lg border border-transparent hover:border-blue-500/20 hover:bg-blue-500/5">
                                    {t('resources.actions.view')}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN CLIENT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function ResourcesClient() {
    const t = useT();
    const { language } = useLanguage();
    const isAr = language === 'ar';
    const [openSections, setOpenSections] = useState<Set<string>>(new Set(['certifications']));

    const toggleSection = (id: string) => {
        setOpenSections((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    return (
        <div className={`min-h-screen bg-slate-950 ${isAr ? 'rtl' : 'ltr'}`}>
            {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden">
                {/* Background layers */}
                <div className="absolute inset-0">
                    {/* Base gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
                    {/* Blue radial glow — intended for hyper-real pipe render overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/[0.07] blur-[120px]" />
                    {/* Grid overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
                    {/* Label */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-px w-8 bg-blue-500/60" />
                        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400/80">
                            {t('resources.hero.label')}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white max-w-3xl">
                        {t('resources.hero.title')}
                        <span className="text-blue-400">{t('resources.hero.title_highlight')}</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
                        {t('resources.hero.subtitle')}
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors"
                        >
                            {t('resources.hero.request_access')}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isAr ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
                            </svg>
                        </Link>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-14 flex flex-wrap gap-8 md:gap-14">
                        {[
                            { value: '17', label: 'Documents' },
                            { value: '5', label: 'Categories' },
                            { value: '3', label: 'ISO Certificates' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-slate-500 mt-0.5 tracking-wide uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════
          DOCUMENTS SECTION — Accordion Layout
      ═══════════════════════════════════════════════════════════════════════ */}
            <section className="relative pb-24 md:pb-32">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Section header */}
                    <div className="mb-10">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-10" />
                    </div>

                    {/* Accordion stack */}
                    <div className="space-y-3">
                        {CATEGORIES.map((category) => (
                            <AccordionSection
                                key={category.id}
                                category={category}
                                isOpen={openSections.has(category.id)}
                                onToggle={() => toggleSection(category.id)}
                                t={t}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER CTA
      ═══════════════════════════════════════════════════════════════════════ */}
            <section className="border-t border-white/[0.04]">
                <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
                    <p className="text-slate-500 text-sm mb-4">Crown Plastic Pipes Factory L.L.C.</p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors"
                    >
                        {t('resources.hero.request_access')}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isAr ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
}
