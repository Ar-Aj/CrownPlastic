'use client';

// BS EN 1452 Complete Guide - Client Component
// Comprehensive technical article with Article schema

import Link from 'next/link';
import { PageHeader, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/context/LanguageContext';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';
import { ClusterFAQSchema } from '@/components/schemas/FAQPageSchema';
import { technicalStandardsFAQs } from '@/config/faqs';

const baseUrl = 'https://crownplasticuae.com';
const pageUrl = `${baseUrl}/technical/bs-en-1452-complete-guide`;

// Related FAQs for this guide
const relatedFAQs = technicalStandardsFAQs.filter(faq => 
  ['ts-1', 'ts-2', 'ts-5', 'ts-6', 'ts-7', 'ts-10'].includes(faq.id)
);

export default function BSEN1452GuideClient() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { language } = useLanguage();

  return (
    <>
      {/* Schemas */}
      <TechnicalGuideSchema
        title="BS EN 1452 Standard: Complete Guide to UPVC Pressure Pipes"
        description="Comprehensive technical guide explaining BS EN 1452 standard for UPVC pressure pipes, including MRS 25 MPa requirements, pressure ratings, material specifications, and compliance requirements for water supply systems."
        url={pageUrl}
        datePublished="2024-01-15"
        dateModified={new Date().toISOString().split('T')[0]}
        keywords={['BS EN 1452', 'UPVC pressure pipes', 'MRS 25 MPa', 'PN pressure ratings', 'water supply standard', 'European pipe standard', 'potable water pipes', 'SDR ratio']}
        proficiencyLevel="Intermediate"
        relatedGuides={[
          { title: 'UPVC vs PVC vs PPR Comparison', url: `${baseUrl}/technical/upvc-vs-pvc-vs-ppr-comparison` },
          { title: 'GSO SASO Compliance Guide', url: `${baseUrl}/technical/gso-saso-compliance-guide` },
        ]}
      />
      <BreadcrumbSchema items={[
        { name: 'Technical Guides', url: `${baseUrl}/technical` },
        { name: 'Standards', url: `${baseUrl}/technical` },
        { name: 'BS EN 1452', url: pageUrl },
      ]} />
      <ClusterFAQSchema 
        faqs={relatedFAQs} 
        clusterName="BS EN 1452 Related Questions" 
        pageUrl={pageUrl} 
      />

      <PageHeader
        title="BS EN 1452 Standard: Complete Guide"
        subtitle="Everything you need to know about the European standard for UPVC pressure pipes"
        breadcrumbs={[
          { label: 'Technical Guides' },
          { label: 'BS EN 1452' },
        ]}
      />

      {/* Key Takeaways Box */}
      <section className="py-8 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="check" size={24} className="text-primary" />
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                BS EN 1452 is the European standard for UPVC pressure pipes for water supply
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Specifies MRS 25 MPa (Minimum Required Strength) for UPVC material
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Covers pressure ratings from PN10 to PN25 (10-25 bar working pressure)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Applies to diameters from 16mm to 630mm
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Crown Plastic Pipes products are BS EN 1452 and BSI Kitemark certified
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            
            <AnimateOnScroll animation="fade-up">
              <section id="what-is-bs-en-1452" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is BS EN 1452?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  BS EN 1452 is the British/European standard that specifies requirements for <strong>Unplasticized Polyvinyl Chloride (UPVC) piping systems</strong> used in water supply applications. Published by the British Standards Institution (BSI) and harmonized across Europe, this standard ensures consistent quality, safety, and performance for plastic pipes used in potable water distribution.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The standard is divided into five parts:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>BS EN 1452-1:</strong> General requirements</li>
                  <li><strong>BS EN 1452-2:</strong> Pipe specifications and dimensions</li>
                  <li><strong>BS EN 1452-3:</strong> Fitting specifications</li>
                  <li><strong>BS EN 1452-4:</strong> Valves and ancillary equipment</li>
                  <li><strong>BS EN 1452-5:</strong> Fitness for purpose of the system</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This standard is widely adopted in the <strong>UAE, GCC countries, UK, and Commonwealth nations</strong> for municipal water supply, residential plumbing, commercial buildings, and industrial applications.
                </p>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="mrs-25-mpa" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding MRS 25 MPa</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>MRS (Minimum Required Strength)</strong> is a critical classification that rates the long-term hydrostatic strength of thermoplastic pipe materials. For UPVC pipes under BS EN 1452, the standard MRS value is <strong>25 MPa (megapascals)</strong>.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What MRS 25 Means:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• The pipe material can withstand 25 MPa of hoop stress</li>
                    <li>• Performance verified over a 50-year extrapolated lifetime</li>
                    <li>• Based on hydrostatic pressure testing at 20°C reference temperature</li>
                    <li>• Provides built-in safety factor for long-term performance</li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The MRS value is determined through extensive laboratory testing where pipe samples are subjected to internal pressure at multiple temperatures (20°C, 40°C, 60°C) until failure. Results are plotted on a log-log scale and extrapolated to 50 years. The lower confidence limit (LCL) of this extrapolation determines the MRS classification.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>All Crown Plastic Pipes UPVC products</strong> are manufactured to MRS 25 specifications, verified through independent laboratory testing to ensure consistent quality and reliable 50+ year service life.
                </p>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="pressure-ratings" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pressure Ratings (PN10, PN16, PN20, PN25)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>PN (Pressure Nominale)</strong> indicates the maximum working pressure a pipe can safely handle at 20°C water temperature. BS EN 1452 defines pressure classes from PN6 to PN25.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">PN Rating</th>
                        <th className="px-4 py-3 text-left">Pressure (bar)</th>
                        <th className="px-4 py-3 text-left">Pressure (PSI)</th>
                        <th className="px-4 py-3 text-left">Typical Applications</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium">PN10</td>
                        <td className="px-4 py-3">10 bar</td>
                        <td className="px-4 py-3">145 PSI</td>
                        <td className="px-4 py-3">Low-pressure distribution, irrigation</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">PN16</td>
                        <td className="px-4 py-3">16 bar</td>
                        <td className="px-4 py-3">232 PSI</td>
                        <td className="px-4 py-3">Standard water supply, residential/commercial</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium">PN20</td>
                        <td className="px-4 py-3">20 bar</td>
                        <td className="px-4 py-3">290 PSI</td>
                        <td className="px-4 py-3">High-rise buildings, industrial</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium">PN25</td>
                        <td className="px-4 py-3">25 bar</td>
                        <td className="px-4 py-3">363 PSI</td>
                        <td className="px-4 py-3">High-pressure industrial, pumping stations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                  <p className="text-gray-700">
                    <strong>Important:</strong> Crown Plastic Pipes manufactures UPVC pipes in PN10 and PN16 ratings, which cover 95% of construction requirements in the UAE and GCC region.
                  </p>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="dimensions-sdr" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pipe Dimensions and SDR</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  BS EN 1452 specifies pipe dimensions using the <strong>SDR (Standard Dimension Ratio)</strong> system, which relates the outside diameter to wall thickness.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">SDR Formula:</h3>
                  <p className="text-2xl font-mono text-center my-4 text-primary">
                    SDR = Outside Diameter ÷ Wall Thickness
                  </p>
                  <p className="text-gray-700 text-center">
                    <strong>Lower SDR = Thicker wall = Higher pressure rating</strong>
                  </p>
                </div>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">SDR</th>
                        <th className="px-4 py-3 text-left">Pressure Class</th>
                        <th className="px-4 py-3 text-left">Wall Thickness (110mm pipe)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-white">
                        <td className="px-4 py-3">SDR 41</td>
                        <td className="px-4 py-3">PN6</td>
                        <td className="px-4 py-3">2.7mm</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3">SDR 26</td>
                        <td className="px-4 py-3">PN10</td>
                        <td className="px-4 py-3">4.2mm</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3">SDR 17</td>
                        <td className="px-4 py-3">PN16</td>
                        <td className="px-4 py-3">6.5mm</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3">SDR 13.6</td>
                        <td className="px-4 py-3">PN20</td>
                        <td className="px-4 py-3">8.1mm</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3">SDR 11</td>
                        <td className="px-4 py-3">PN25</td>
                        <td className="px-4 py-3">10.0mm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="material-requirements" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Material Requirements</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  BS EN 1452 specifies strict requirements for the PVC-U compound used in pipe manufacturing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Base polymer:</strong> Unplasticized polyvinyl chloride (PVC-U)</li>
                  <li><strong>Stabilizers:</strong> Calcium-zinc or organic tin compounds (lead-free)</li>
                  <li><strong>Impact modifiers:</strong> For improved toughness at low temperatures</li>
                  <li><strong>Processing aids:</strong> To ensure smooth internal surface</li>
                  <li><strong>UV stabilizers:</strong> For outdoor exposure resistance</li>
                  <li><strong>Color:</strong> Grey (RAL 7011) or as specified</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Crown Plastic Pipes</strong> uses 100% virgin PVC compound with lead-free calcium-zinc stabilizers, ensuring our products are safe for potable water applications and compliant with modern health standards.
                </p>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="testing-certification" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Testing & Certification Requirements</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  BS EN 1452 mandates comprehensive testing protocols to ensure consistent quality:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Physical Tests</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Dimensional verification</li>
                      <li>• Wall thickness measurement</li>
                      <li>• Ovality check</li>
                      <li>• Visual inspection</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Mechanical Tests</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Hydrostatic pressure test</li>
                      <li>• Impact resistance (falling weight)</li>
                      <li>• Tensile strength</li>
                      <li>• Vicat softening temperature</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Chemical Tests</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Reversion test (stress relief)</li>
                      <li>• Dichloromethane resistance</li>
                      <li>• Migration testing (potable water)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Long-term Tests</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Hydrostatic strength at 20°C</li>
                      <li>• Hydrostatic strength at 60°C</li>
                      <li>• 50-year extrapolation (MRS)</li>
                    </ul>
                  </div>
                </div>
              </section>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up">
              <section id="crown-compliance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Crown Plastic Pipes BS EN 1452 Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Crown Plastic Pipes Factory L.L.C. holds full <strong>BS EN 1452 certification</strong> for our UPVC pressure pipe range, verified by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>BSI Kitemark certification</strong> - Independent quality verification</li>
                  <li><strong>ISO 9001:2015</strong> - Quality management system</li>
                  <li><strong>ISO 14001:2015</strong> - Environmental management</li>
                  <li><strong>NSF/ANSI 61</strong> - Drinking water safety</li>
                  <li><strong>GSO certification</strong> - Gulf Standards compliance</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Our products are manufactured at our state-of-the-art facility in Sharjah Industrial Area, UAE, serving the entire GCC region with consistent quality and fast delivery.
                </p>
              </section>
            </AnimateOnScroll>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need BS EN 1452 Certified UPVC Pipes?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Crown Plastic Pipes supplies BS EN 1452 certified UPVC pressure pipes across UAE and GCC. Contact us for specifications and quotes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Request Quote
              <Icon name="arrow" size={20} />
            </Link>
            <Link
              href="/products/upvc-pressure"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
            >
              View UPVC Products
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Technical Guides</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/technical/upvc-vs-pvc-vs-ppr-comparison" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="compare" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">UPVC vs PVC vs PPR</h3>
              <p className="text-sm text-gray-600">Complete material comparison guide</p>
            </Link>
            <Link href="/technical/gso-saso-compliance-guide" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="certified" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">GSO SASO Compliance</h3>
              <p className="text-sm text-gray-600">Gulf standards certification guide</p>
            </Link>
            <Link href="/technical/upvc-installation-best-practices" className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="tools" size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Installation Best Practices</h3>
              <p className="text-sm text-gray-600">Step-by-step installation guide</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
