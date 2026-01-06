'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeroSection, CardGrid, StatsStrip, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { productCategories } from '@/config/products';
import { useT } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const t = useT();
  const { language } = useLanguage();

  // Transform product categories for CardGrid with bilingual support
  const productCards = productCategories.map((cat) => ({
    title: language === 'ar' ? (cat.nameAr || cat.name) : cat.name,
    description: language === 'ar' ? (cat.shortDescriptionAr || cat.shortDescription) : cat.shortDescription,
    href: `/products/${cat.slug}`,
    icon: cat.icon,
    image: cat.image,
    alt: `${language === 'ar' ? (cat.nameAr || cat.name) : cat.name} product shot`,
  }));

  const stats = [
    { value: '30+', label: t('home.hero_stat_years'), iconName: 'calendar' as const },
    { value: '5,000+', label: t('home.hero_stat_products'), iconName: 'package' as const },
    { value: 'ISO 9001', label: t('home.iso_certified'), iconName: 'certified' as const },
    { value: '10,000+', label: t('home.hero_stat_customers'), iconName: 'users' as const },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        subtitle="Leading UAE manufacturer of UPVC, PPR, HDPE pipes & fittings for water supply, drainage, electrical ducting, irrigation, construction & infrastructure projects across GCC."
      />

      {/* Product Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.products_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.products_subtitle')}
            </p>
          </div>
          <CardGrid items={productCards} columns={3} />
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors rtl:flex-row-reverse"
            >
              {t('common.view_all_products')}
              <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip stats={stats} variant="primary" />

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-up">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                {t('home.about_badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('home.about_title')}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('home.about_text')}
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all rtl:flex-row-reverse"
              >
                {t('home.about_link')}
                <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="relative">
                <Image
                  src="/images/about/factory-hero.jpeg"
                  alt="Crown Plastic Pipes factory extrusion lines in UAE"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto rounded-2xl object-cover aspect-video"
                />
                {/* Floating card */}
                <div className="absolute -bottom-6 ltr:-left-6 rtl:-right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name="certified" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{t('home.iso_certified')}</p>
                      <p className="text-sm text-gray-500">{t('home.quality_mgmt')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('home.why_title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('home.why_subtitle')}
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { iconName: 'trophy' as const, title: t('home.why_quality'), description: t('home.why_quality_desc') },
              { iconName: 'innovation' as const, title: t('home.why_innovation'), description: t('home.why_innovation_desc') },
              { iconName: 'truck' as const, title: t('home.why_delivery'), description: t('home.why_delivery_desc') },
              { iconName: 'users' as const, title: t('home.why_support'), description: t('home.why_support_desc') },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                <div className="text-center p-6 rounded-xl bg-gray-50 card-hover hover:shadow-lg hover:bg-white transition-all duration-200 group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.iconName} size={32} className="text-primary group-hover:text-accent transition-colors duration-200" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.cta_title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('home.cta_subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors rtl:flex-row-reverse"
            >
              {t('common.get_a_quote')}
              <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
            >
              {t('common.download_catalogues')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
