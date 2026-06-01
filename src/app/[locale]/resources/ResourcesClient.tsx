'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from '@/components/common/LocaleLink';
import { useLanguage } from '@/context/LanguageContext';
import { resources, CATEGORY_META, type ResourceItem, type ResourceCategory } from '@/data/resources';

// ═══════════════════════════════════════════════════════════════════════════════
// INLINE PDF VIEWER MODAL
// ═══════════════════════════════════════════════════════════════════════════════

function PdfViewerModal({
    src,
    title,
    onClose,
}: {
    src: string;
    title: string;
    onClose: () => void;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const pdfUrl = `${src}#toolbar=1&navpanes=0&view=Fit`;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (typeof document === 'undefined') return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex flex-col bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-viewer-title"
        >
            {/* Header bar */}
            <div
                className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white flex-shrink-0 shadow-sm"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex-1 min-w-0 pr-4">
                    <h3 id="pdf-viewer-title" className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-1">
                        {title}
                    </h3>
                </div>
                <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-shrink-0 transition-colors"
                    aria-label="Close document viewer"
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* PDF Container */}
            <div
                className="flex-1 bg-gray-100 relative min-h-0"
                onClick={(e) => e.stopPropagation()}
            >
                {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
                        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
                        <p className="text-gray-600 text-sm font-medium">Loading document…</p>
                    </div>
                )}
                <iframe
                    src={pdfUrl}
                    className="w-full h-full border-0"
                    title={title}
                    onLoad={() => setIsLoading(false)}
                    allow="fullscreen"
                />
            </div>
        </div>,
        document.body
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// RESOURCE CARD
// ═══════════════════════════════════════════════════════════════════════════════

function ResourceCard({
    resource,
    isAr,
    onPreview,
}: {
    resource: ResourceItem;
    isAr: boolean;
    onPreview: (resource: ResourceItem) => void;
}) {
    return (
        <button
            onClick={() => onPreview(resource)}
            className="group w-full text-left bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
        >
            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col">
                {/* File type icon + category badge */}
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 3.5L18.5 8H14V3.5zM6 20V4h7v5h5v11H6z" />
                            <text x="7" y="17" fontSize="6" fontWeight="bold" fill="currentColor">PDF</text>
                        </svg>
                    </div>
                    {resource.standard && (
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-primary/70 bg-primary/5 px-2.5 py-1 rounded-full whitespace-nowrap">
                            {resource.standard}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 text-[15px] leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {isAr ? resource.titleAr : resource.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                    {isAr ? resource.descriptionAr : resource.description}
                </p>

                {/* File size + view hint */}
                <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-gray-400 font-mono">{resource.size}</p>
                    <span className="text-xs text-primary font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View PDF
                    </span>
                </div>
            </div>
        </button>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function ResourcesClient() {
    const { language } = useLanguage();
    const isAr = language === 'ar';
    const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'All'>('All');
    const [previewResource, setPreviewResource] = useState<ResourceItem | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handlePreview = useCallback((resource: ResourceItem) => {
        setPreviewResource(resource);
    }, []);

    const handleClosePreview = useCallback(() => {
        setPreviewResource(null);
    }, []);

    // Filter resources
    const filteredResources = resources.filter((r) => {
        const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
            r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (r.standard?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
        return matchesCategory && matchesSearch;
    });

    // Category counts
    const categoryCounts: Record<string, number> = { All: resources.length };
    for (const r of resources) {
        categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
    }

    return (
        <div className={`min-h-screen bg-gray-50 lg:pt-28 ${isAr ? 'rtl' : 'ltr'}`}>
            {/* ═══════════════════════════════════════════════════════════════════
                HERO SECTION — Clean, minimal, light
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
                    {/* Label */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-primary" />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
                            Crown Technical Library
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 max-w-3xl">
                        Technical Resources{' '}
                        <span className="text-primary">& Downloads</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
                        {isAr
                            ? 'استعرض مكتبتنا الشاملة من الكتالوجات التقنية وشهادات ISO والمواصفات الفنية ومعايير التركيب لحلول الأنابيب / التجهيزات البلاستيكية المتميزة: UPVC و PVC و PP-R و PEX و HDPE'
                            : 'Access our complete library of product catalogues, ISO certifications, technical specifications, and installation standards for UPVC, PVC, PP-R, PEX & HDPE Pipes / Fittings system'
                        }
                    </p>

                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
                        {[
                            { value: '17', label: 'Documents' },
                            { value: '4', label: 'Categories' },
                            { value: '3', label: 'ISO Certificates' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-xs text-gray-400 mt-0.5 tracking-wider uppercase font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                FILTER BAR
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Top row: Tab navigation */}
                    <div className="flex items-end gap-0 overflow-x-auto scrollbar-hide -mb-px">
                        <button
                            onClick={() => setActiveCategory('All')}
                            className={`relative inline-flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${activeCategory === 'All'
                                    ? 'border-primary text-primary font-bold'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            All
                            <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-semibold ${activeCategory === 'All' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'
                                }`}>
                                {categoryCounts.All}
                            </span>
                        </button>
                        {CATEGORY_META.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`relative inline-flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${activeCategory === cat.id
                                        ? 'border-primary text-primary font-bold'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <span className="text-sm">{cat.icon}</span>
                                {cat.id}
                                <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-semibold ${activeCategory === cat.id ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'
                                    }`}>
                                    {categoryCounts[cat.id] || 0}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Search row */}
                    <div className="py-3">
                        <div className="relative w-full md:w-72">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search documents…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                DOCUMENT GRID
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-10 md:py-14">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Results count */}
                    <p className="text-sm text-gray-400 mb-6 font-medium">
                        Showing {filteredResources.length} of {resources.length} documents
                    </p>

                    {filteredResources.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredResources.map((resource) => (
                                <ResourceCard
                                    key={resource.id}
                                    resource={resource}
                                    isAr={isAr}
                                    onPreview={handlePreview}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-gray-500 font-medium">No documents found</p>
                            <p className="text-sm text-gray-400 mt-1">Try adjusting your search or filter</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                FOOTER CTA
            ═══════════════════════════════════════════════════════════════════ */}
            <section className="border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-14 md:py-16 text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        Need a specific document?
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                        Our technical team can provide custom specifications, project-specific submittals, and detailed engineering data.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-colors shadow-lg shadow-primary/20"
                    >
                        Contact Technical Support
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isAr ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
                PDF VIEWER MODAL
            ═══════════════════════════════════════════════════════════════════ */}
            {previewResource && (
                <PdfViewerModal
                    src={previewResource.path}
                    title={isAr ? previewResource.titleAr : previewResource.title}
                    onClose={handleClosePreview}
                />
            )}
        </div>
    );
}
