'use client';

import { useState, useEffect, useMemo, Suspense, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { useT } from '@/i18n';
import { productCategories } from '@/config/products';
import { useLanguage } from '@/context/LanguageContext';
import { localizedValue } from '@/lib/i18n-utils';
import { LocalBusinessDetailSchema } from '@/components/schemas/LocalBusinessSchema';
import { ContactBreadcrumb } from '@/components/schemas/BreadcrumbSchema';
import dynamic from 'next/dynamic';

const PipeMatrixBackground = dynamic(
    () => import('@/components/three/PipeMatrixBackground'),
    {
        ssr: false,
        loading: () => (
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: -10,
                    background: '#ffffff',
                    pointerEvents: 'none',
                }}
            />
        ),
    }
);
import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
type TabKey = 'general' | 'quote';

interface GeneralFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

interface QuoteFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    category: string;
    subcategory: string;
    quantity: string;
    message: string;
}

// ─────────────────────────────────────────────────────────────
// Tab config
// ─────────────────────────────────────────────────────────────
const TAB_KEYS: TabKey[] = ['general', 'quote'];

const TAB_ICONS: Record<TabKey, JSX.Element> = {
    general: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    ),
    quote: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    ),
};

// ─────────────────────────────────────────────────────────────
// Inner component that uses useSearchParams (must be in Suspense)
// ─────────────────────────────────────────────────────────────
function ContactHubInner() {
    const t = useT();
    const { language } = useLanguage();
    const isAr = language === 'ar';
    const searchParams = useSearchParams();

    // ── Tab state ──
    const initialTab = (searchParams.get('tab') as TabKey) || 'general';
    const [activeTab, setActiveTab] = useState<TabKey>(
        TAB_KEYS.includes(initialTab) ? initialTab : 'general'
    );

    // ── Query param pre-fill ──
    const prefilledProduct = searchParams.get('product') || '';

    // ── General form ──
    const [generalForm, setGeneralForm] = useState<GeneralFormData>({
        name: '', email: '', phone: '', company: '', message: '',
    });

    // ── Quote form ──
    const [quoteForm, setQuoteForm] = useState<QuoteFormData>({
        name: '', email: '', phone: '', company: '',
        category: '', subcategory: '', quantity: '',
        message: '',
    });

    // ── EmailJS submission state ──
    const [isSending, setIsSending] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // ── Product hierarchy for quote dropdowns ──
    const categoryOptions = useMemo(() =>
        productCategories.map((c) => ({
            slug: c.slug,
            label: localizedValue(language, c.name, c.nameAr, c.nameFr),
        })),
        [language]
    );

    const subcategoryOptions = useMemo(() => {
        if (!quoteForm.category) return [];
        const cat = productCategories.find((c) => c.slug === quoteForm.category);
        if (!cat) return [];
        return cat.subProducts.map((sp) => ({
            slug: sp.slug,
            label: localizedValue(language, sp.name, sp.nameAr, sp.nameFr),
        }));
    }, [quoteForm.category, language]);

    // Auto-set category from ?product= query param
    useEffect(() => {
        if (prefilledProduct) {
            const matchedCat = productCategories.find((c) => c.slug === prefilledProduct);
            if (matchedCat) {
                setQuoteForm((prev) => ({ ...prev, category: matchedCat.slug }));
                setActiveTab('quote');
            }
        }
    }, [prefilledProduct]);

    // Reset subcategory when category changes
    useEffect(() => {
        setQuoteForm((prev) => ({ ...prev, subcategory: '' }));
    }, [quoteForm.category]);

    // ── Unified EmailJS submit handler ──
    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSending) return;

        setIsSending(true);
        setSubmitStatus('idle');

        // Build clean templateParams — only include keys relevant to each form type
        let templateParams: Record<string, string>;

        switch (activeTab) {
            case 'general':
                templateParams = {
                    form_type: 'General Inquiry',
                    name: generalForm.name,
                    email: generalForm.email,
                    phone: generalForm.phone,
                    message: generalForm.message,
                    ...(generalForm.company && { company: generalForm.company }),
                };
                break;
            case 'quote':
                templateParams = {
                    form_type: 'Quote Request',
                    name: quoteForm.name,
                    email: quoteForm.email,
                    phone: quoteForm.phone,
                    message: quoteForm.message,
                    ...(quoteForm.company && { company: quoteForm.company }),
                    ...(quoteForm.category && { category: quoteForm.category }),
                    ...(quoteForm.subcategory && { subcategory: quoteForm.subcategory }),
                    ...(quoteForm.quantity && { quantity: quoteForm.quantity }),
                };
                break;
        }

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('[ContactHub] EmailJS environment variables are missing. Check .env file.');
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 4000);
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey,
            );

            setSubmitStatus('success');

            // Reset the active form
            switch (activeTab) {
                case 'general':
                    setGeneralForm({ name: '', email: '', phone: '', company: '', message: '' });
                    break;
                case 'quote':
                    setQuoteForm({ name: '', email: '', phone: '', company: '', category: '', subcategory: '', quantity: '', message: '' });
                    break;
            }

            // Reset success status after 4 seconds
            setTimeout(() => setSubmitStatus('idle'), 4000);
        } catch (err) {
            console.error('[ContactHub] EmailJS send failed:', err);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSending(false);
        }
    }, [activeTab, generalForm, quoteForm, isSending]);

    // ── Submit button renderer ──
    const renderSubmitButton = (labelKey: string) => (
        <button
            type="submit"
            disabled={isSending}
            className={`w-full font-semibold py-3 rounded-lg transition-all text-sm tracking-wide flex items-center justify-center gap-2 ${submitStatus === 'success'
                ? 'bg-emerald-500 text-white cursor-default'
                : submitStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                } ${isSending ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
            {isSending ? (
                <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                </>
            ) : submitStatus === 'success' ? (
                <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Request Sent!
                </>
            ) : submitStatus === 'error' ? (
                'Failed to send. Please call us directly.'
            ) : (
                t(labelKey as Parameters<typeof t>[0])
            )}
        </button>
    );

    // ─────────────────────────────────────────────────────────────
    // Shared input classes
    // ─────────────────────────────────────────────────────────────
    const inputClass =
        'w-full bg-white border border-blue-200 text-slate-900 font-bold rounded-lg px-4 py-3 text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all';
    const labelClass = 'block text-sm font-bold text-slate-900 mb-1.5';
    const selectClass =
        'w-full bg-white border border-blue-200 text-slate-900 font-medium rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all appearance-none cursor-pointer';

    // ─────────────────────────────────────────────────────────────
    // Render
    // ─────────────────────────────────────────────────────────────
    return (
        <>
            <LocalBusinessDetailSchema />
            <ContactBreadcrumb />

            {/* ── Fixed Three.js Background ── */}
            <PipeMatrixBackground />

            {/* ── UNIFIED HERO + MAIN CONTENT ── */}
            <section className="relative z-10 pt-40 pb-10 sm:pt-48 sm:pb-14 lg:pt-52">
                <div className="container mx-auto px-4">
                    {/* Single unified glassmorphism container for hero + content */}
                    <div className="bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/50 shadow-xl rounded-3xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto">

                        {/* ── Hero Header ── */}
                        <div className="text-center mb-8 sm:mb-10">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                                {t('contact_hub.hero.title')}
                                <span className="text-blue-600">{t('contact_hub.hero.title_highlight')}</span>
                            </h1>
                            <p className="mt-4 text-slate-900 font-bold text-base sm:text-lg max-w-2xl mx-auto">
                                {t('contact_hub.hero.subtitle')}
                            </p>
                        </div>

                        {/* ── Tab Selectors ── */}
                        <div className="flex items-center justify-center mb-6 sm:mb-8">
                            <div className="inline-flex items-center gap-1 bg-slate-200/50 p-1.5 rounded-2xl">
                                {TAB_KEYS.map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`
                      group flex items-center gap-2.5 px-7 py-3 rounded-xl text-base transition-all duration-200
                      ${activeTab === key
                                                ? 'bg-blue-600 text-white shadow-md font-bold'
                                                : 'text-slate-900 font-bold hover:bg-white/50'
                                            }
                    `}
                                    >
                                        {TAB_ICONS[key]}
                                        <span className="text-xs sm:text-base">{t(`contact_hub.tabs.${key}`)}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ── Two-column layout ── */}
                        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

                            {/* ── Left: Headquarters Info Card (appears BELOW form on mobile) ── */}
                            <div className="lg:col-span-2 order-2 lg:order-1 border-t border-slate-200/50 pt-8 lg:border-0 lg:pt-0 flex flex-col justify-center">
                                <div className="p-6 sm:p-8">
                                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">{t('contact_hub.info.headquarters')}</h2>
                                    <div className="space-y-7">
                                        {/* Address */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <p className="text-slate-900 font-bold text-base sm:text-lg leading-relaxed">{t('contact_hub.info.address')}</p>
                                        </div>
                                        {/* Phone */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <a href="tel:+97165436781" className="text-slate-900 font-bold text-base sm:text-lg hover:text-blue-600 transition-colors">
                                                {t('contact_hub.info.phone')}
                                            </a>
                                        </div>
                                        {/* Email */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <a href="mailto:info@crownplasticuae.com" className="text-slate-900 font-bold text-base sm:text-lg hover:text-blue-600 transition-colors">
                                                {t('contact_hub.info.email')}
                                            </a>
                                        </div>
                                        {/* Hours */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-slate-900 font-bold text-base sm:text-lg">{t('contact_hub.info.hours_weekday')}</p>
                                                <p className="text-slate-900 font-bold text-base sm:text-lg">{t('contact_hub.info.hours_friday')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── Right: Form Area (appears FIRST on mobile) ── */}
                            <div className="lg:col-span-3 order-1 lg:order-2">
                                <div className="p-6 sm:p-8">

                                    {/* ═══ GENERAL TAB ═══ */}
                                    {activeTab === 'general' && (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.name')}</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={generalForm.name}
                                                        onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                                                        className={inputClass}
                                                        dir={isAr ? 'rtl' : 'ltr'}
                                                    />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.email')}</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={generalForm.email}
                                                        onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                                                        className={inputClass}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.phone')}</label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        value={generalForm.phone}
                                                        onChange={(e) => setGeneralForm({ ...generalForm, phone: e.target.value })}
                                                        className={inputClass}
                                                    />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.company')}</label>
                                                    <input
                                                        type="text"
                                                        value={generalForm.company}
                                                        onChange={(e) => setGeneralForm({ ...generalForm, company: e.target.value })}
                                                        className={inputClass}
                                                        dir={isAr ? 'rtl' : 'ltr'}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className={labelClass}>{t('contact_hub.form.message')}</label>
                                                <textarea
                                                    required
                                                    rows={5}
                                                    value={generalForm.message}
                                                    onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                                                    className={inputClass + ' resize-none'}
                                                    dir={isAr ? 'rtl' : 'ltr'}
                                                />
                                            </div>
                                            {renderSubmitButton('contact_hub.form.submit_general')}
                                        </form>
                                    )}

                                    {/* ═══ QUOTE TAB ═══ */}
                                    {activeTab === 'quote' && (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.name')}</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={quoteForm.name}
                                                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                                                        className={inputClass}
                                                        dir={isAr ? 'rtl' : 'ltr'}
                                                    />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.email')}</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={quoteForm.email}
                                                        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                                                        className={inputClass}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.phone')}</label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        value={quoteForm.phone}
                                                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                                                        className={inputClass}
                                                    />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.company')}</label>
                                                    <input
                                                        type="text"
                                                        value={quoteForm.company}
                                                        onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                                                        className={inputClass}
                                                        dir={isAr ? 'rtl' : 'ltr'}
                                                    />
                                                </div>
                                            </div>

                                            {/* Product Category dropdown */}
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.category')}</label>
                                                    <div className="relative">
                                                        <select
                                                            value={quoteForm.category}
                                                            onChange={(e) => setQuoteForm({ ...quoteForm, category: e.target.value })}
                                                            className={selectClass}
                                                        >
                                                            <option value="">{t('contact_hub.placeholders.select_category')}</option>
                                                            {categoryOptions.map((c) => (
                                                                <option key={c.slug} value={c.slug}>{c.label}</option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                                            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Subcategory dropdown */}
                                                <div>
                                                    <label className={labelClass}>{t('contact_hub.form.subcategory')}</label>
                                                    <div className="relative">
                                                        <select
                                                            value={quoteForm.subcategory}
                                                            onChange={(e) => setQuoteForm({ ...quoteForm, subcategory: e.target.value })}
                                                            className={selectClass}
                                                            disabled={subcategoryOptions.length === 0}
                                                        >
                                                            <option value="">{t('contact_hub.placeholders.select_subcategory')}</option>
                                                            {subcategoryOptions.map((sp) => (
                                                                <option key={sp.slug} value={sp.slug}>{sp.label}</option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                                            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {quoteForm.category && subcategoryOptions.length === 0 && (
                                                        <p className="text-xs text-slate-500 mt-1.5 italic">
                                                            Contact us for custom specification
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div>
                                                <label className={labelClass}>{t('contact_hub.form.quantity')}</label>
                                                <input
                                                    type="text"
                                                    value={quoteForm.quantity}
                                                    onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })}
                                                    className={inputClass}
                                                    dir={isAr ? 'rtl' : 'ltr'}
                                                />
                                            </div>

                                            <div>
                                                <label className={labelClass}>{t('contact_hub.form.message')}</label>
                                                <textarea
                                                    rows={4}
                                                    value={quoteForm.message}
                                                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                                                    className={inputClass + ' resize-none'}
                                                    dir={isAr ? 'rtl' : 'ltr'}
                                                />
                                            </div>
                                            {renderSubmitButton('contact_hub.form.submit_quote')}
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// ─────────────────────────────────────────────────────────────
// Exported component wrapped in Suspense for useSearchParams
// ─────────────────────────────────────────────────────────────
export default function ContactHubClient() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <ContactHubInner />
        </Suspense>
    );
}
