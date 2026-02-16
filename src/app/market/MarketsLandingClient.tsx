'use client';

import Link from 'next/link';
import { allRegionalMarkets, saudiMarkets, uaeMarkets, gccMarkets } from '@/config/markets';
import { BreadcrumbSchema } from '@/components/schemas';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';

const baseUrl = 'https://crownplasticuae.com';

export default function MarketsLandingClient() {
    const t = useT();
    const { language } = useLanguage();
    const isAr = language === 'ar';

    const breadcrumbItems = [
        { name: t('markets.landing.breadcrumb_home'), url: baseUrl },
        { name: t('markets.landing.breadcrumb_markets'), url: `${baseUrl}/market` },
    ];

    const marketGroups = [
        { title: t('markets.landing.groups.saudi_arabia'), markets: saudiMarkets, flag: '🇸🇦' },
        { title: t('markets.landing.groups.uae'), markets: uaeMarkets, flag: '🇦🇪' },
        { title: t('markets.landing.groups.other_gcc'), markets: gccMarkets, flag: '🌍' },
    ];

    return (
        <>
            <BreadcrumbSchema items={breadcrumbItems} />

            <main className="min-h-screen bg-white">
                {/* Hero */}
                <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 pt-[160px]">
                    <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
                        <nav className="text-sm mb-6 text-blue-200">
                            <ol className="flex items-center gap-2">
                                <li><Link href="/" className="hover:text-white">{t('markets.landing.breadcrumb_home')}</Link></li>
                                <li>/</li>
                                <li className="text-white">{t('markets.landing.breadcrumb_markets')}</li>
                            </ol>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {t('markets.landing.hero_title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl">
                            {t('markets.landing.hero_subtitle')}
                        </p>
                    </div>
                </header>

                {/* Stats */}
                <section className="bg-gray-100 py-8">
                    <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-blue-900">{t('markets.landing.stats.countries_value')}</div>
                                <div className="text-gray-600 text-sm">{t('markets.landing.stats.countries_label')}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-900">{allRegionalMarkets.length}</div>
                                <div className="text-gray-600 text-sm">{t('markets.landing.stats.locations_label')}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-900">{t('markets.landing.stats.experience_value')}</div>
                                <div className="text-gray-600 text-sm">{t('markets.landing.stats.experience_label')}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-900">{t('markets.landing.stats.certified_value')}</div>
                                <div className="text-gray-600 text-sm">{t('markets.landing.stats.certified_label')}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Market Groups */}
                <section className="py-16">
                    <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none">
                        {marketGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="mb-16 last:mb-0">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="text-4xl">{group.flag}</span>
                                    {group.title}
                                </h2>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {group.markets.map((market, index) => (
                                        <Link
                                            key={index}
                                            href={`/market/${market.slug}`}
                                            className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition group"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">
                                                    {isAr ? (market.cityAr || market.countryAr) : (market.city || market.country)}
                                                </h3>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                                    {market.certifications[0]}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {isAr ? market.focusAr : market.focus}
                                            </p>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">{isAr ? market.deliveryTimeAr : market.deliveryTime}</span>
                                                <span className="text-blue-600 group-hover:underline">
                                                    {t('markets.landing.learn_more')}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-blue-900 text-white py-12">
                    <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:w-[90vw] 2xl:max-w-none text-center">
                        <h2 className="text-3xl font-bold mb-4">{t('markets.landing.cta_title')}</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            {t('markets.landing.cta_subtitle')}
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition"
                        >
                            {t('markets.landing.cta_button')}
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
