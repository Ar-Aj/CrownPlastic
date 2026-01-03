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
          { value: 'ISO 14001:2015', label: 'Certified', iconName: 'leaf' },
          { value: '100% Virgin', label: 'Recyclable Materials', iconName: 'recycle' },
          { value: 'Zero-Discharge', label: 'Manufacturing', iconName: 'water' },
          { value: '50+ Years', label: 'Service Life', iconName: 'heat' },
          { value: 'Gulf Climate', label: 'Tested', iconName: 'globe' },
          { value: 'OHSAS 18001:2007', label: 'Safety', iconName: 'factory' },
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
                title: 'ISO 14001:2015 Certified',
                description: 'Environmental Management System certified by QAOC. Continuous improvement in environmental performance.',
              },
              {
                iconName: 'recycle' as IconName,
                title: '100% Virgin Materials',
                description: 'uPVC, PPR, HDPE from 100% virgin materials. Fully recyclable at end-of-life. Zero recycled content contamination.',
              },
              {
                iconName: 'factory' as IconName,
                title: 'Zero-Discharge Manufacturing',
                description: 'Closed-loop water systems. Zero liquid discharge to environment. Waste heat recovery.',
              },
              {
                iconName: 'climate' as IconName,
                title: 'Gulf Climate Tested',
                description: 'Products tested for UAE extreme heat (50°C+), UV exposure, thermal cycling. 50+ year service life guaranteed.',
              },
              {
                iconName: 'electric' as IconName,
                title: 'Energy Efficient Production',
                description: 'European Battenfeld extruders. Energy monitoring per ISO 50001 standards. Reduced carbon footprint.',
              },
              {
                iconName: 'water' as IconName,
                title: 'Leak-Free Systems',
                description: 'BS EN 1452, DIN 8061 precision joints eliminate water loss. Supports GCC water conservation goals.',
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
