'use client';

import { useState, useCallback } from 'react';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import { LocalBusinessDetailSchema } from '@/components/schemas/LocalBusinessSchema';
import dynamic from 'next/dynamic';
import emailjs from '@emailjs/browser';

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

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
interface CareerFormData {
    name: string;
    email: string;
    phone: string;
    position: string;
    message: string;
    resumeLink: string;
}

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────
export default function JoinUsClient() {
    const t = useT();
    const { language } = useLanguage();
    const isAr = language === 'ar';

    // ── Career form state ──
    const [careerForm, setCareerForm] = useState<CareerFormData>({
        name: '', email: '', phone: '', position: '', message: '', resumeLink: '',
    });

    // ── EmailJS submission state ──
    const [isSending, setIsSending] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // ── EmailJS submit handler ──
    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSending) return;

        setIsSending(true);
        setSubmitStatus('idle');

        const templateParams: Record<string, string> = {
            form_type: 'Job Application',
            name: careerForm.name,
            email: careerForm.email,
            phone: careerForm.phone,
            message: careerForm.message,
            ...(careerForm.position && { position: careerForm.position }),
            ...(careerForm.resumeLink && { linkedin_url: careerForm.resumeLink }),
        };

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('[JoinUs] EmailJS environment variables are missing. Check .env file.');
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 4000);
            setIsSending(false);
            return;
        }

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setSubmitStatus('success');
            setCareerForm({ name: '', email: '', phone: '', position: '', message: '', resumeLink: '' });
            setTimeout(() => setSubmitStatus('idle'), 4000);
        } catch (err) {
            console.error('[JoinUs] EmailJS send failed:', err);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSending(false);
        }
    }, [careerForm, isSending]);

    // ─────────────────────────────────────────────────────────────
    // Shared input classes
    // ─────────────────────────────────────────────────────────────
    const inputClass =
        'w-full bg-white border border-blue-200 text-slate-900 font-bold rounded-lg px-4 py-3 text-sm placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition-all';
    const labelClass = 'block text-sm font-bold text-slate-900 mb-1.5';

    // ─────────────────────────────────────────────────────────────
    // Render
    // ─────────────────────────────────────────────────────────────
    return (
        <>
            <LocalBusinessDetailSchema />

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
                                {t('join_us.hero.title')}
                                <span className="text-blue-600">{t('join_us.hero.title_highlight')}</span>
                            </h1>
                            <p className="mt-4 text-slate-900 font-bold text-base sm:text-lg max-w-2xl mx-auto">
                                {t('join_us.hero.subtitle')}
                            </p>
                        </div>

                        {/* ── Two-column layout ── */}
                        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                            {/* ── Left: Info Card ── */}
                            <div className="lg:col-span-2 space-y-6 order-2 lg:order-1 border-t border-slate-200/50 pt-8 lg:border-0 lg:pt-0">
                                {/* HQ Info */}
                                <div className="p-6 sm:p-8">
                                    <h2 className="text-lg font-bold text-slate-900 mb-6">{t('contact_hub.info.headquarters')}</h2>
                                    <div className="space-y-5">
                                        {/* Address */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <p className="text-slate-900 font-bold text-sm leading-relaxed">{t('contact_hub.info.address')}</p>
                                        </div>
                                        {/* Phone */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <a href="tel:+97165436781" className="text-slate-900 font-bold text-sm hover:text-blue-600 transition-colors">
                                                {t('contact_hub.info.phone')}
                                            </a>
                                        </div>
                                        {/* Email */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <a href="mailto:info@crownplasticuae.com" className="text-slate-900 font-bold text-sm hover:text-blue-600 transition-colors">
                                                info@crownplasticuae.com
                                            </a>
                                        </div>
                                        {/* Hours */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <p className="text-slate-900 font-bold text-sm">{t('contact_hub.info.hours')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Why Join Us section */}
                                <div className="p-6">
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">{t('join_us.why_join.title')}</h3>
                                    <ul className="space-y-3 text-sm text-slate-900 font-bold">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{t('join_us.why_join.item1')}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{t('join_us.why_join.item2')}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{t('join_us.why_join.item3')}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{t('join_us.why_join.item4')}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* ── Right: Career Application Form ── */}
                            <div className="lg:col-span-3 order-1 lg:order-2">
                                <div className="p-6 sm:p-8">
                                    <h2 className="text-xl font-bold text-slate-900 mb-6">{t('join_us.form.title')}</h2>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className={labelClass}>{t('contact_hub.form.name')}</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={careerForm.name}
                                                    onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })}
                                                    className={inputClass}
                                                    dir={isAr ? 'rtl' : 'ltr'}
                                                />
                                            </div>
                                            <div>
                                                <label className={labelClass}>{t('contact_hub.form.email')}</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={careerForm.email}
                                                    onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
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
                                                    value={careerForm.phone}
                                                    onChange={(e) => setCareerForm({ ...careerForm, phone: e.target.value })}
                                                    className={inputClass}
                                                />
                                            </div>
                                            <div>
                                                <label className={labelClass}>{t('contact_hub.form.position')}</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={careerForm.position}
                                                    onChange={(e) => setCareerForm({ ...careerForm, position: e.target.value })}
                                                    className={inputClass}
                                                    dir={isAr ? 'rtl' : 'ltr'}
                                                />
                                            </div>
                                        </div>

                                        {/* Resume / Portfolio link */}
                                        <div>
                                            <label className={labelClass}>{t('contact_hub.form.resume_link')}</label>
                                            <input
                                                type="url"
                                                value={careerForm.resumeLink}
                                                onChange={(e) => setCareerForm({ ...careerForm, resumeLink: e.target.value })}
                                                className={inputClass}
                                                placeholder="https://..."
                                                dir="ltr"
                                            />
                                        </div>

                                        <div>
                                            <label className={labelClass}>{t('contact_hub.form.message')}</label>
                                            <textarea
                                                rows={4}
                                                value={careerForm.message}
                                                onChange={(e) => setCareerForm({ ...careerForm, message: e.target.value })}
                                                className={inputClass + ' resize-none'}
                                                dir={isAr ? 'rtl' : 'ltr'}
                                            />
                                        </div>

                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            disabled={isSending}
                                            className={`w-full font-bold py-3 rounded-lg transition-all text-sm tracking-wide flex items-center justify-center gap-2 ${submitStatus === 'success'
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
                                                    {t('contact_hub.form.sending')}
                                                </>
                                            ) : submitStatus === 'success' ? (
                                                <>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {t('contact_hub.form.sent')}
                                                </>
                                            ) : submitStatus === 'error' ? (
                                                t('contact_hub.form.send_error')
                                            ) : (
                                                t('contact_hub.form.submit_career')
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
