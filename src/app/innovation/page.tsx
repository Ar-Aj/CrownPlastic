'use client';

import Image from 'next/image';
import { PageHeader, ComingSoon, AnimateOnScroll } from '@/components/common';
import { isComingSoon } from '@/config/maintenance';
import Icon, { IconName } from '@/components/ui/Icon';
import { useT } from '@/i18n';


// Route slug for Coming Soon check
const ROUTE_SLUG = 'innovation';

export default function InnovationPage() {
  const t = useT();

  // Check if this page should show Coming Soon
  if (isComingSoon(ROUTE_SLUG)) {
    return (
      <ComingSoon
        title="Innovation"
        subtitle="Our innovation showcase is coming soon. Stay tuned for updates on our R&D initiatives."
      />
    );
  }

  return (
    <>
      <PageHeader
        title={t('innovation.title')}
        subtitle={t('innovation.subtitle')}
        breadcrumbs={[{ label: t('nav.innovation') }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('innovation.core_title')}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('innovation.core_text')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('innovation_extended.intro_text')} Explore our <a href="/products" className="text-primary hover:underline font-medium">{t('innovation_extended.explore_products')}</a> or learn <a href="/sustainability" className="text-primary hover:underline font-medium">{t('innovation_extended.sustainability_link')}</a>.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/innovation/lab-hero.jpg"
                    alt="Crown Plastic Pipes R&D laboratory and testing facility in UAE"
                    width={800}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {t('innovation.areas_title')}
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                iconName: 'flask' as IconName, 
                title: t('innovation_extended.area_material_title'), 
                desc: t('innovation_extended.area_material_desc') 
              },
              { 
                iconName: 'cog' as IconName, 
                title: t('innovation_extended.area_manufacturing_title'), 
                desc: t('innovation_extended.area_manufacturing_desc') 
              },
              { 
                iconName: 'cable' as IconName, 
                title: t('innovation_extended.area_jointing_title'), 
                desc: t('innovation_extended.area_jointing_desc') 
              },
              { 
                iconName: 'gauge' as IconName, 
                title: t('innovation_extended.area_testing_title'), 
                desc: t('innovation_extended.area_testing_desc') 
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center card-hover h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.iconName} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Products Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {t('innovation.products_title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('innovation.products_subtitle')}
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                iconName: 'water' as IconName,
                title: t('innovation_extended.prod_upvc_title'),
                desc: t('innovation_extended.prod_upvc_desc')
              },
              {
                iconName: 'heat' as IconName,
                title: t('innovation_extended.prod_ppr_title'),
                desc: t('innovation_extended.prod_ppr_desc')
              },
              {
                iconName: 'waves' as IconName,
                title: t('innovation_extended.prod_hdpe_title'),
                desc: t('innovation_extended.prod_hdpe_desc')
              },
              {
                iconName: 'cable' as IconName,
                title: t('innovation_extended.prod_telecom_title'),
                desc: t('innovation_extended.prod_telecom_desc')
              },
              {
                iconName: 'building' as IconName,
                title: t('innovation_extended.prod_drainage_title'),
                desc: t('innovation_extended.prod_drainage_desc')
              },
              {
                iconName: 'electric' as IconName,
                title: t('innovation_extended.prod_conduit_title'),
                desc: t('innovation_extended.prod_conduit_desc')
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 card-hover h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.iconName} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-10">
            <a 
              href="/products" 
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              {t('innovation.explore')}
            </a>
          </div>
        </div>
      </section>

      {/* R&D Lab */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">{t('innovation.lab_title')}</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              {t('innovation.lab_text')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                t('innovation_extended.lab_test_hydrostatic'),
                t('innovation_extended.lab_test_impact'),
                t('innovation_extended.lab_test_vicat'),
                t('innovation_extended.lab_test_uv'),
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
