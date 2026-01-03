'use client';

import Link from 'next/link';
import { PageHeader, ComingSoon, AnimateOnScroll } from '@/components/common';
import { isComingSoon } from '@/config/maintenance';
import Icon, { IconName } from '@/components/ui/Icon';
import { useT } from '@/i18n';


// Route slug for Coming Soon check
const ROUTE_SLUG = 'resources';

export default function ResourcesPage() {
  const t = useT();

  // Check if this page should show Coming Soon
  if (isComingSoon(ROUTE_SLUG)) {
    return (
      <ComingSoon
        title="Resources"
        subtitle="Our resource library is coming soon. Product catalogues and technical documents will be available for download."
      />
    );
  }

  const resources = [
    {
      category: t('resources.cat_catalogues'),
      iconName: 'package' as IconName,
      items: [
        { name: t('resources.res_master_catalogue'), desc: t('resources.res_master_catalogue_desc'), size: 'PDF, 18 MB' },
        { name: t('resources.res_upvc_pressure_cat'), desc: t('resources.res_upvc_pressure_cat_desc'), size: 'PDF, 5 MB' },
        { name: t('resources.res_ppr_cat'), desc: t('resources.res_ppr_cat_desc'), size: 'PDF, 4 MB' },
        { name: t('resources.res_hdpe_cat'), desc: t('resources.res_hdpe_cat_desc'), size: 'PDF, 4.5 MB' },
      ],
    },
    {
      category: t('resources.cat_submittals'),
      iconName: 'gauge' as IconName,
      items: [
        { name: t('resources.res_upvc_tech_specs'), desc: t('resources.res_upvc_tech_specs_desc'), size: 'PDF, 3 MB' },
        { name: t('resources.res_ppr_dimensions'), desc: t('resources.res_ppr_dimensions_desc'), size: 'PDF, 2 MB' },
        { name: t('resources.res_hdpe_tech_specs'), desc: t('resources.res_hdpe_tech_specs_desc'), size: 'PDF, 2.5 MB' },
        { name: t('resources.res_conduit_crush'), desc: t('resources.res_conduit_crush_desc'), size: 'PDF, 1.5 MB' },
      ],
    },
    {
      category: t('resources.cat_installation'),
      iconName: 'wrench' as IconName,
      items: [
        { name: t('resources.res_solvent_jointing'), desc: t('resources.res_solvent_jointing_desc'), size: 'PDF, 3 MB' },
        { name: t('resources.res_ppr_fusion'), desc: t('resources.res_ppr_fusion_desc'), size: 'PDF, 2.5 MB' },
        { name: t('resources.res_hdpe_electrofusion'), desc: t('resources.res_hdpe_electrofusion_desc'), size: 'PDF, 2 MB' },
        { name: t('resources.res_drainage_install'), desc: t('resources.res_drainage_install_desc'), size: 'PDF, 2 MB' },
      ],
    },
    {
      category: t('resources.cat_certifications'),
      iconName: 'trophy' as IconName,
      items: [
        { name: t('resources.res_iso9001'), desc: t('resources.res_iso9001_desc'), size: 'PDF, 600 KB' },
        { name: t('resources.res_iso14001'), desc: t('resources.res_iso14001_desc'), size: 'PDF, 600 KB' },
        { name: t('resources.res_ohsas'), desc: t('resources.res_ohsas_desc'), size: 'PDF, 600 KB' },
        { name: t('resources.res_gso_approvals'), desc: t('resources.res_gso_approvals_desc'), size: 'PDF, 2 MB' },
      ],
    },
    {
      category: t('resources.cat_chemical'),
      iconName: 'flask' as IconName,
      items: [
        { name: t('resources.res_pvc_chemical'), desc: t('resources.res_pvc_chemical_desc'), size: 'PDF, 1.5 MB' },
        { name: t('resources.res_ppr_temp_pressure'), desc: t('resources.res_ppr_temp_pressure_desc'), size: 'PDF, 1 MB' },
        { name: t('resources.res_hdpe_chemical'), desc: t('resources.res_hdpe_chemical_desc'), size: 'PDF, 1.2 MB' },
      ],
    },
    {
      category: t('resources.cat_cad'),
      iconName: 'document' as IconName,
      items: [
        { name: t('resources.res_upvc_cad'), desc: t('resources.res_upvc_cad_desc'), size: 'DWG, 8 MB' },
        { name: t('resources.res_drainage_cad'), desc: t('resources.res_drainage_cad_desc'), size: 'DWG, 6 MB' },
        { name: t('resources.res_duct_cad'), desc: t('resources.res_duct_cad_desc'), size: 'DWG, 4 MB' },
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title={t('resources.title')}
        subtitle={t('resources.subtitle')}
        breadcrumbs={[{ label: t('nav.resources') }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((section, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full card-hover">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={section.iconName} size={32} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">{section.category}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j}>
                        <a
                          href="#"
                          className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                        >
                          <Icon name="download" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium group-hover:text-primary transition-colors text-sm">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{item.size}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('resources.cta_title')}</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            {t('resources.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('common.request_quote')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              {t('common.view_all_products')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
