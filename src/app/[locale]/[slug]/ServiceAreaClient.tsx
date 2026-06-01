'use client';

// Service Area — Text-First Mega-Authority SEO Template
// NO images. NO tables. Pure dense keyword-rich content blocks.

import { useState } from 'react';
import Link from '@/components/common/LocaleLink';
import { AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { ShieldCheck, MapPin, Factory, Workflow, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LocalBusinessSchema } from '@/components/schemas/LocalBusinessSchema';
import { ServiceAreaBreadcrumb } from '@/components/schemas/BreadcrumbSchema';
import { type ServiceArea, companyInfo } from '@/config/schemas';
import { type RegionData } from '@/data/regions';

interface ServiceAreaClientProps {
    area: ServiceArea;
    region: RegionData;
}

export default function ServiceAreaClient({ area, region }: ServiceAreaClientProps) {
    const { language } = useLanguage();
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const cityName = language === 'ar' ? area.cityAr : area.city;
    const baseUrl = 'https://crownplasticuae.com';

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${baseUrl}/${area.slug}#faqpage`,
        mainEntity: region.faqs.map(faq => ({
            '@type': 'Question',
            '@id': `${baseUrl}/${area.slug}#${faq.id}`,
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer, url: `${baseUrl}/${area.slug}#${faq.id}` },
        })),
    };

    return (
        <>
            <LocalBusinessSchema serviceArea={area} />
            <ServiceAreaBreadcrumb cityName={area.city} slug={area.slug} />
            <script id={`faq-schema-${area.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ═══ HERO — TEXT ONLY, NO IMAGE ═══ */}
            <header className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-primary/90 text-white pt-[150px] md:pt-[180px] pb-24 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/3" />

                <div className="relative w-full max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm mb-8 text-white/50" aria-label="Breadcrumb">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li className="flex items-center gap-2"><ChevronDown className="w-4 h-4 -rotate-90 text-white/30" /><span>{language === 'ar' ? 'مناطق الخدمة' : 'Service Areas'}</span></li>
                            <li className="flex items-center gap-2"><ChevronDown className="w-4 h-4 -rotate-90 text-white/30" /><span className="text-white font-medium">{cityName}</span></li>
                        </ol>
                    </nav>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-bold uppercase tracking-widest mb-8">
                        <ShieldCheck className="w-4 h-4 text-accent" />
                        <span className="text-white/90">{language === 'ar' ? region.localAuthorityAr : region.localAuthority}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-8 max-w-5xl leading-[1.08]">
                        {language === 'ar' ? region.heroTitleAr : region.heroTitle}
                    </h1>

                    <p className="text-lg md:text-xl text-white/65 max-w-3xl leading-relaxed mb-12">
                        {language === 'ar' ? region.heroSubtitleAr : region.heroSubtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact-us?tab=quote" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25">
                            {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                            <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                        <a href={`tel:${companyInfo.telephone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/10">
                            <Icon name="phone" size={20} />
                            {companyInfo.telephone}
                        </a>
                    </div>
                </div>
            </header>

            {/* ═══ TRUST TICKER ═══ */}
            <div className="bg-gray-950 border-y border-white/5 py-4 overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10" />
                <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
                    {[...region.complianceSpecs, ...region.complianceSpecs, ...region.complianceSpecs].map((spec, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/50 font-semibold tracking-wider uppercase text-xs">
                            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                            {spec}
                        </div>
                    ))}
                </div>
            </div>

            {/* ═══ WHY US HIGHLIGHTS ═══ */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="w-full max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {region.highlights.map((h, i) => (
                            <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                        <Icon name={h.icon} size={32} className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{language === 'ar' ? h.titleAr : h.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{language === 'ar' ? h.descriptionAr : h.description}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ REGIONAL CHALLENGES — FULL-WIDTH TEXT ═══ */}
            <section className="py-24 bg-gray-50 border-b border-gray-200">
                <div className="w-full max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fade-up">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                <Factory className="w-4 h-4" />
                                {language === 'ar' ? 'تحديات البنية التحتية' : 'Infrastructure Landscape'}
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                                {language === 'ar' ? `تحديات الأنابيب في ${cityName}` : `The ${area.city} Infrastructure Challenge`}
                            </h2>
                            <div className="prose prose-lg prose-gray max-w-none">
                                <p className="text-gray-600 text-lg md:text-xl leading-[1.85] whitespace-pre-line">
                                    {language === 'ar' ? region.regionalChallengesAr : region.regionalChallenges}
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* ═══ INDUSTRIAL ZONES — SEO PINS ═══ */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="w-full max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fade-up">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                {language === 'ar' ? `نغطي المناطق الصناعية الرئيسية` : `Delivering to ${area.city}'s Industrial Hubs`}
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                {language === 'ar' ? 'توريد يومي لأهم المناطق والمجمعات اللوجستية' : 'Daily supply routes to the region\'s most critical manufacturing and logistics corridors.'}
                            </p>
                        </div>
                    </AnimateOnScroll>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {region.industrialZones.map((zone, i) => (
                            <AnimateOnScroll key={i} animation="fade-up" delay={i * 60}>
                                <div className="flex items-center gap-4 bg-gray-50 hover:bg-white p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group">
                                    <div className="bg-blue-50 p-2.5 rounded-lg group-hover:bg-primary/10 transition-colors shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-bold text-gray-900">{zone}</span>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SPECIALIZED SOLUTIONS — THE MAIN EVENT ═══ */}
            <section className="py-24 bg-gray-50 border-b border-gray-200">
                <div className="w-full max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fade-up">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight text-center">
                                {language === 'ar'
                                    ? `حلول الأنابيب والتوصيلات المتخصصة لـ ${cityName}`
                                    : `Specialized Pipes & Fittings Solutions for ${area.city}`}
                            </h2>
                            <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto">
                                {language === 'ar'
                                    ? 'حلول مخصصة لكل فئة من منتجاتنا، مصممة للتحديات الفريدة لهذه المنطقة.'
                                    : 'Purpose-built solutions across every product category, engineered for this region\'s unique demands.'}
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {region.specializedSolutions.map((solution, i) => (
                            <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                                <article className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-primary/10 p-3 rounded-xl shrink-0 mt-1 hidden md:flex">
                                            <Workflow className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                                                {solution.title}
                                            </h3>
                                            <p className="text-gray-600 text-base md:text-lg leading-[1.85]">
                                                {solution.content}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FAQ ACCORDION ═══ */}
            <section className="py-24 bg-white">
                <div className="w-full max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateOnScroll animation="fade-up">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-14">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                    {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                                </h2>
                                <p className="text-gray-500 text-lg">
                                    {language === 'ar'
                                        ? `أسئلة شائعة حول حلول الأنابيب والتوصيلات في ${cityName}`
                                        : `Common questions about our pipes and fittings solutions in ${area.city}`}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-200">
                                {region.faqs.map((faq, index) => (
                                    <div key={faq.id}>
                                        <button
                                            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                            className="w-full flex items-center justify-between py-6 px-8 text-left hover:bg-gray-50 transition-colors group"
                                            aria-expanded={openFAQ === index}
                                            id={faq.id}
                                        >
                                            <span className="text-base md:text-lg font-bold text-gray-900 group-hover:text-primary transition-colors pr-6">{faq.question}</span>
                                            <ChevronDown className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300 ${openFAQ === index ? 'rotate-180 text-primary' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <p className="px-8 pb-6 text-gray-600 leading-relaxed text-base md:text-lg">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-primary/80 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="relative max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                        {language === 'ar' ? `جاهز لتأمين حلول الأنابيب في ${cityName}؟` : `Ready for ${area.city} Pipes & Fittings Solutions?`}
                    </h2>
                    <p className="text-xl text-white/70 mb-12">
                        {language === 'ar' ? 'تواصل مع فريقنا للحصول على عروض أسعار تنافسية وتوصيل سريع.' : 'Contact our team for competitive pricing and rapid delivery to your project site.'}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        <Link href="/contact-us?tab=quote" className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-xl">
                            {language === 'ar' ? 'طلب عرض سعر' : 'Get Your Quote'}
                        </Link>
                        <a href={`tel:${companyInfo.telephone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/10 transition-all">
                            <Icon name="phone" size={22} />
                            {companyInfo.telephone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
