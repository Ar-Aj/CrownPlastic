'use client';

import Image from 'next/image';
import { PageHeader, Timeline, AwardsList, StatsStrip, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { useT } from '@/i18n';

export default function AboutPage() {
  const t = useT();

  // Timeline items with translations
  const timelineItems = [
    {
      year: '1995',
      title: t('about_extended.timeline_1995_title'),
      description: t('about_extended.timeline_1995_desc'),
    },
    {
      year: '2005',
      title: t('about_extended.timeline_2005_title'),
      description: t('about_extended.timeline_2005_desc'),
    },
    {
      year: '2010',
      title: t('about_extended.timeline_2010_title'),
      description: t('about_extended.timeline_2010_desc'),
    },
    {
      year: '2015',
      title: t('about_extended.timeline_2015_title'),
      description: t('about_extended.timeline_2015_desc'),
    },
    {
      year: '2020',
      title: t('about_extended.timeline_2020_title'),
      description: t('about_extended.timeline_2020_desc'),
    },
    {
      year: '2025',
      title: t('about_extended.timeline_2025_title'),
      description: t('about_extended.timeline_2025_desc'),
    },
  ];

  // Certifications with translations (keeping certification codes in English)
  const certifications = [
    { title: t('about_extended.cert_iso9001'), organization: t('about_extended.cert_iso9001_org'), iconName: 'certified' as const },
    { title: t('about_extended.cert_iso14001'), organization: t('about_extended.cert_iso14001_org'), iconName: 'eco' as const },
    { title: t('about_extended.cert_gso'), organization: t('about_extended.cert_gso_org'), iconName: 'award' as const },
    { title: t('about_extended.cert_saso'), organization: t('about_extended.cert_saso_org'), iconName: 'document' as const },
    { title: t('about_extended.cert_qcc'), organization: t('about_extended.cert_qcc_org'), iconName: 'shield' as const },
    { title: t('about_extended.cert_uae_civil'), organization: '', iconName: 'shield' as const },
    { title: t('about_extended.cert_kitemark'), organization: t('about_extended.cert_kitemark_org'), iconName: 'check' as const },
    { title: t('about_extended.cert_nsf'), organization: t('about_extended.cert_nsf_org'), iconName: 'water' as const },
  ];

  // Stats with translations
  const stats = [
    { value: t('about_extended.stat_years_value'), label: t('about_extended.stat_years_label'), iconName: 'calendar' as const },
    { value: t('about_extended.stat_facilities_value'), label: t('about_extended.stat_facilities_label'), iconName: 'factory' as const },
    { value: t('about_extended.stat_products_value'), label: t('about_extended.stat_products_label'), iconName: 'package' as const },
    { value: t('about_extended.stat_exports_value'), label: t('about_extended.stat_exports_label'), iconName: 'globe' as const },
    { value: t('about_extended.stat_customers_value'), label: t('about_extended.stat_customers_label'), iconName: 'users' as const },
  ];

  // Manufacturing features with translations
  const manufacturingFeatures = [
    {
      title: t('about_extended.mfg_extrusion_title'),
      description: t('about_extended.mfg_extrusion_desc'),
      iconName: 'cog' as const,
    },
    {
      title: t('about_extended.mfg_lab_title'),
      description: t('about_extended.mfg_lab_desc'),
      iconName: 'microscope' as const,
    },
    {
      title: t('about_extended.mfg_auto_title'),
      description: t('about_extended.mfg_auto_desc'),
      iconName: 'automation' as const,
    },
  ];

  return (
    <>
      <PageHeader
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        breadcrumbs={[{ label: t('nav.about') }]}
      />

      {/* Company Overview */}
      <section id="company-overview" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.overview_title')}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.overview_text')}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="relative">
                <Image
                  src="/images/about/factory-hero.jpeg"
                  alt="Crown Plastic Pipes factory extrusion lines in UAE"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto rounded-2xl object-cover"
                  priority={false}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-up">
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="target" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission_title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.mission_text')}
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="vision" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision_title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.vision_text')}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip stats={stats} variant="primary" />

      {/* Manufacturing */}
      <section id="manufacturing" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.manufacturing_title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('about.manufacturing_subtitle')}
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {manufacturingFeatures.map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                <div className="text-center p-8 bg-gray-50 rounded-2xl card-hover hover:shadow-lg transition-all duration-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.iconName} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section id="quality" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.quality_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.quality_subtitle')}
            </p>
          </div>
          <AwardsList awards={certifications} title="" />
        </div>
      </section>

      {/* Timeline / Journey */}
      <section id="timeline" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.journey_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.journey_subtitle')}
            </p>
          </div>
          <Timeline items={timelineItems} />
        </div>
      </section>
    </>
  );
}
