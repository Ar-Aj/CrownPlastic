'use client';

import { PageHeader, AnimateOnScroll, StatsStrip } from '@/components/common';
import Icon, { IconName } from '@/components/ui/Icon';
import { useT } from '@/i18n';


export default function SustainabilityPage() {
  const t = useT();

  return (
    <>
      <PageHeader
        title={t('sustainability.title')}
        subtitle={t('sustainability.subtitle')}
        breadcrumbs={[{ label: t('nav.sustainability') }]}
      />

      {/* Stats Strip */}
      <StatsStrip
        stats={[
          { value: 'ISO 14001:2015', label: t('sustainability_extended.stat_certified'), iconName: 'leaf' },
          { value: '100% Virgin', label: t('sustainability_extended.stat_recyclable'), iconName: 'recycle' },
          { value: 'Zero-Discharge', label: t('sustainability_extended.stat_manufacturing'), iconName: 'water' },
          { value: '50+ Years', label: t('sustainability_extended.stat_service_life'), iconName: 'heat' },
          { value: 'Gulf Climate', label: t('sustainability_extended.stat_tested'), iconName: 'globe' },
          { value: 'OHSAS 18001:2007', label: t('sustainability_extended.stat_safety'), iconName: 'factory' },
        ]}
        variant="primary"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="globe" size={40} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('sustainability.future_title')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t('sustainability.future_text')}
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  {t('sustainability.commitment')}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {t('sustainability.pillars_title')}
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                iconName: 'document' as IconName,
                title: t('sustainability_extended.pillar_iso_title'),
                description: t('sustainability_extended.pillar_iso_desc'),
              },
              {
                iconName: 'recycle' as IconName,
                title: t('sustainability_extended.pillar_virgin_title'),
                description: t('sustainability_extended.pillar_virgin_desc'),
              },
              {
                iconName: 'factory' as IconName,
                title: t('sustainability_extended.pillar_zero_title'),
                description: t('sustainability_extended.pillar_zero_desc'),
              },
              {
                iconName: 'climate' as IconName,
                title: t('sustainability_extended.pillar_climate_title'),
                description: t('sustainability_extended.pillar_climate_desc'),
              },
              {
                iconName: 'electric' as IconName,
                title: t('sustainability_extended.pillar_energy_title'),
                description: t('sustainability_extended.pillar_energy_desc'),
              },
              {
                iconName: 'water' as IconName,
                title: t('sustainability_extended.pillar_leak_title'),
                description: t('sustainability_extended.pillar_leak_desc'),
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-sm card-hover h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.iconName} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Long Service Life */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('sustainability.service_title')}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('sustainability.service_text')}
          </p>
        </div>
      </section>
    </>
  );
}
