'use client';

// GSO SASO Compliance Guide Client Component
// Phase 2 AEO - Featured Snippet Optimization
// 1000+ word comprehensive guide on Gulf standards

import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';
import { ClusterFAQSchema } from '@/components/schemas/FAQPageSchema';
import { technicalStandardsFAQs } from '@/config/faqs';

const breadcrumbItems = [
  { name: 'Home', url: 'https://crownplasticuae.com' },
  { name: 'Technical Guides', url: 'https://crownplasticuae.com/technical' },
  { name: 'Standards', url: 'https://crownplasticuae.com/technical/standards' },
  { name: 'GSO SASO Compliance', url: 'https://crownplasticuae.com/technical/gso-saso-compliance-guide' },
];

// Get standards-related FAQs for schema
const standardsFAQs = technicalStandardsFAQs.filter(
  faq => faq.question.toLowerCase().includes('gso') || 
         faq.question.toLowerCase().includes('saso') ||
         faq.question.toLowerCase().includes('certification')
);

export default function GSOSASOGuideClient() {
  return (
    <>
      {/* Schema Markup */}
      <TechnicalGuideSchema
        title="GSO and SASO Compliance Guide for Plastic Pipes"
        description="Comprehensive guide to GSO EN 805 and SASO TR-BM-5 certification requirements for plastic pipes in Gulf Cooperation Council countries. Covers certification process, testing requirements, and compliance standards."
        datePublished="2024-01-30T00:00:00Z"
        dateModified={new Date().toISOString()}
        url="https://crownplasticuae.com/technical/gso-saso-compliance-guide"
        keywords={[
          'GSO EN 805',
          'SASO TR-BM-5',
          'Gulf pipe standards',
          'SASO certification',
          'GCC compliance',
          'plastic pipe regulations',
        ]}
        proficiencyLevel="Expert"
        dependencies={['BS EN 1452 certification', 'Quality management system']}
        relatedGuides={[
          {
            title: 'BS EN 1452 Complete Guide',
            url: 'https://crownplasticuae.com/technical/bs-en-1452-complete-guide',
          },
          {
            title: 'UPVC vs PVC vs PPR Comparison',
            url: 'https://crownplasticuae.com/technical/upvc-vs-pvc-vs-ppr-comparison',
          },
        ]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ClusterFAQSchema
        faqs={standardsFAQs.slice(0, 5)}
        clusterName="GSO SASO Standards FAQs"
        pageUrl="https://crownplasticuae.com/technical/gso-saso-compliance-guide"
      />

      {/* Main Article Content */}
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb Navigation */}
            <nav className="text-sm mb-6 text-amber-200">
              <ol className="flex flex-wrap items-center gap-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li>/</li>
                <li><a href="/technical" className="hover:text-white">Technical Guides</a></li>
                <li>/</li>
                <li className="text-white">GSO SASO Compliance</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              GSO and SASO Compliance Guide for Plastic Pipes
            </h1>
            <p className="text-xl text-amber-100 mb-6">
              Essential guide to understanding and meeting Gulf Standards Organization (GSO) and 
              Saudi Standards, Metrology and Quality Organization (SASO) requirements for pipe products.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-amber-700/50 px-3 py-1 rounded-full">
                Updated January 2024
              </span>
              <span className="bg-amber-700/50 px-3 py-1 rounded-full">
                10 min read
              </span>
              <span className="bg-amber-700/50 px-3 py-1 rounded-full">
                Expert Guide
              </span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              For manufacturers and suppliers of plastic pipes targeting the Gulf Cooperation Council 
              (GCC) market, compliance with <strong>GSO</strong> (Gulf Standards Organization) and 
              <strong>SASO</strong> (Saudi Standards, Metrology and Quality Organization) standards is 
              mandatory. This guide explains the key standards, certification requirements, and how 
              Crown Plastic Pipes maintains full compliance with all GCC regulations.
            </p>
          </section>

          {/* Table of Contents */}
          <nav className="bg-gray-50 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">In This Guide</h2>
            <ol className="grid md:grid-cols-2 gap-2 text-amber-600">
              <li><a href="#what-is-gso" className="hover:underline">1. What is GSO?</a></li>
              <li><a href="#what-is-saso" className="hover:underline">2. What is SASO?</a></li>
              <li><a href="#key-standards" className="hover:underline">3. Key Standards for Pipes</a></li>
              <li><a href="#certification-process" className="hover:underline">4. Certification Process</a></li>
              <li><a href="#testing-requirements" className="hover:underline">5. Testing Requirements</a></li>
              <li><a href="#crown-compliance" className="hover:underline">6. Crown&apos;s Compliance</a></li>
            </ol>
          </nav>

          {/* What is GSO */}
          <section id="what-is-gso" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What is GSO (Gulf Standards Organization)?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The <strong>Gulf Standards Organization (GSO)</strong>, established in 2001, is the 
                regional standardization organization for the Gulf Cooperation Council countries: 
                <strong>Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Yemen</strong>. GSO develops 
                and harmonizes technical standards across member states to facilitate trade and ensure 
                product quality and safety.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                <p className="font-semibold text-amber-800">Key Point:</p>
                <p className="text-amber-700">
                  GSO standards are derived from international standards (ISO, EN) but adapted for 
                  regional requirements. Products compliant with GSO can be sold across all GCC countries 
                  without additional certification.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">GSO&apos;s Role in Pipe Standards:</h3>
              <ul>
                <li>Harmonizing pipe specifications across GCC countries</li>
                <li>Adopting international standards (e.g., EN 805 for water supply)</li>
                <li>Setting regional requirements for material safety</li>
                <li>Coordinating conformity assessment procedures</li>
              </ul>
            </div>
          </section>

          {/* What is SASO */}
          <section id="what-is-saso" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What is SASO (Saudi Standards Organization)?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                <strong>SASO</strong> (Saudi Standards, Metrology and Quality Organization) is 
                Saudi Arabia&apos;s national standards body. While Saudi Arabia participates in GSO, 
                SASO also maintains its own certification system that manufacturers must comply with 
                to access the Saudi market—the largest economy in the GCC.
              </p>
              
              <p>
                The <strong>SABER platform</strong> is Saudi Arabia&apos;s online system for product 
                registration and certification. All regulated products, including plastic pipes, 
                must be registered on SABER before import or sale in Saudi Arabia.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">SASO Certification Types:</h3>
              <ul>
                <li><strong>Product Certification (PC):</strong> One-time certification for specific shipments</li>
                <li><strong>Type Certification:</strong> Certification valid for a product type/model for one year</li>
                <li><strong>SASO Quality Mark:</strong> Highest level certification for consistent quality</li>
              </ul>
            </div>
          </section>

          {/* Key Standards */}
          <section id="key-standards" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Key Standards for Plastic Pipes in GCC
            </h2>
            
            <div className="space-y-6">
              {/* GSO EN 805 */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">GSO EN 805 - Water Supply Requirements</h3>
                <p className="text-gray-700 mb-4">
                  Based on European standard EN 805, this is the primary GSO standard for drinking 
                  water supply systems. It covers requirements for pipes, fittings, and their 
                  installation in potable water distribution networks.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-blue-800">Requirements Include:</h4>
                    <ul className="text-gray-600 mt-2 space-y-1">
                      <li>• Pressure class specifications</li>
                      <li>• Material safety for potable water</li>
                      <li>• Dimensional tolerances</li>
                      <li>• Marking and documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Applies To:</h4>
                    <ul className="text-gray-600 mt-2 space-y-1">
                      <li>• Municipal water supply</li>
                      <li>• Building water distribution</li>
                      <li>• Industrial water systems</li>
                      <li>• Irrigation networks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SASO TR-BM-5 */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-3">SASO TR-BM-5 - Building Materials Technical Regulation</h3>
                <p className="text-gray-700 mb-4">
                  Saudi Arabia&apos;s technical regulation for building materials, including plastic pipes. 
                  This regulation is mandatory for all pipe products imported to or manufactured in 
                  Saudi Arabia.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-green-800">Key Requirements:</h4>
                    <ul className="text-gray-600 mt-2 space-y-1">
                      <li>• Compliance with referenced standards</li>
                      <li>• Third-party testing certification</li>
                      <li>• Arabic labeling requirements</li>
                      <li>• SABER registration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Referenced Standards:</h4>
                    <ul className="text-gray-600 mt-2 space-y-1">
                      <li>• GSO ISO 1452 (UPVC pipes)</li>
                      <li>• GSO ISO 15874 (PPR pipes)</li>
                      <li>• GSO ISO 4427 (HDPE pipes)</li>
                      <li>• EN 805 (Water supply)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Standards */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Additional Applicable Standards</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-3 py-2 text-left">Standard</th>
                        <th className="px-3 py-2 text-left">Description</th>
                        <th className="px-3 py-2 text-left">Application</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-3 py-2 font-medium">GSO ISO 1452</td>
                        <td className="px-3 py-2">PVC-U pipes for water supply</td>
                        <td className="px-3 py-2">UPVC pressure pipes</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 font-medium">GSO ISO 15874</td>
                        <td className="px-3 py-2">PP pipes for hot/cold water</td>
                        <td className="px-3 py-2">PPR plumbing systems</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 font-medium">GSO ISO 4427</td>
                        <td className="px-3 py-2">PE pipes for water supply</td>
                        <td className="px-3 py-2">HDPE systems</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-3 py-2 font-medium">SASO 443</td>
                        <td className="px-3 py-2">uPVC pipes (Saudi standard)</td>
                        <td className="px-3 py-2">Saudi market specific</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Certification Process */}
          <section id="certification-process" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              GSO/SASO Certification Process
            </h2>
            
            <div className="space-y-6">
              {/* Step by step */}
              <div className="relative">
                {[
                  {
                    step: 1,
                    title: 'Product Testing',
                    description: 'Submit pipe samples to an accredited testing laboratory for evaluation against applicable GSO/SASO standards.',
                  },
                  {
                    step: 2,
                    title: 'Factory Audit',
                    description: 'Undergo factory inspection by a recognized certification body to verify quality management systems.',
                  },
                  {
                    step: 3,
                    title: 'Documentation Review',
                    description: 'Submit technical documentation, test reports, quality certificates, and product specifications.',
                  },
                  {
                    step: 4,
                    title: 'SABER Registration',
                    description: 'Register products on the SABER platform and obtain Product Certificate of Conformity (PCoC).',
                  },
                  {
                    step: 5,
                    title: 'Certificate Issuance',
                    description: 'Receive GSO conformity certificate valid for 1-3 years depending on certification type.',
                  },
                  {
                    step: 6,
                    title: 'Surveillance Audits',
                    description: 'Undergo periodic surveillance audits to maintain certification validity.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 pb-8 relative">
                    {index < 5 && (
                      <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-amber-200"></div>
                    )}
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold z-10">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testing Requirements */}
          <section id="testing-requirements" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Testing Requirements for Pipe Certification
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Physical Tests</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    Dimensional verification (wall thickness, diameter)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    Hydrostatic pressure test
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    Impact resistance test
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    Tensile strength test
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    Vicat softening temperature
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Chemical Tests</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    Material composition analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    Lead and heavy metal content
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    Migration testing (for potable water)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    UV stability (for outdoor pipes)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">●</span>
                    Chemical resistance testing
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="font-semibold text-yellow-800">Testing Laboratory Requirements:</p>
              <p className="text-yellow-700">
                All tests must be performed by laboratories accredited to ISO/IEC 17025 and 
                recognized by GSO or SASO. Crown Plastic Pipes uses internationally accredited 
                laboratories for all certification testing.
              </p>
            </div>
          </section>

          {/* Crown Compliance */}
          <section id="crown-compliance" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Crown Plastic Pipes GSO/SASO Compliance
            </h2>
            
            <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white rounded-lg p-8 mb-6">
              <h3 className="text-xl font-bold mb-4">Our Certifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-200 mb-2">Standards Compliance:</h4>
                  <ul className="space-y-1 text-amber-100">
                    <li>✓ GSO EN 805 - Water Supply</li>
                    <li>✓ GSO ISO 1452 - UPVC Pipes</li>
                    <li>✓ SASO TR-BM-5 - Building Materials</li>
                    <li>✓ BS EN 1452 - European Standard</li>
                    <li>✓ DIN 8062 - German Standard</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-200 mb-2">Quality Certifications:</h4>
                  <ul className="space-y-1 text-amber-100">
                    <li>✓ SASO Quality Mark</li>
                    <li>✓ Emirates Quality Mark (EQM)</li>
                    <li>✓ ISO 9001:2015 Quality Management</li>
                    <li>✓ ISO 14001 Environmental Management</li>
                    <li>✓ CE Marking (European Conformity)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Crown Plastic Pipes maintains full compliance with all applicable GSO and SASO 
                standards for our UPVC and PPR pipe products. Our manufacturing facility in the 
                UAE is certified to ISO 9001:2015 and undergoes regular audits by international 
                certification bodies.
              </p>
              <p>
                All Crown pipes are registered on the SABER platform, ensuring smooth import 
                clearance for our customers in Saudi Arabia. Our products carry the SASO Quality 
                Mark, the highest level of Saudi certification indicating consistent quality 
                and compliance.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Benefits of Choosing GSO/SASO Certified Pipes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Market Access',
                  description: 'Sell products across all GCC countries without additional certification.',
                },
                {
                  title: 'Quality Assurance',
                  description: 'Third-party verified compliance with international quality standards.',
                },
                {
                  title: 'Regulatory Compliance',
                  description: 'Meet all legal requirements for construction and infrastructure projects.',
                },
                {
                  title: 'Tender Eligibility',
                  description: 'Qualify for government and large private sector tenders requiring certification.',
                },
                {
                  title: 'Customer Confidence',
                  description: 'Build trust with customers through recognized quality marks.',
                },
                {
                  title: 'Risk Reduction',
                  description: 'Minimize product liability and recall risks through compliance.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Conclusion
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                GSO and SASO compliance is not just a regulatory requirement—it&apos;s a mark of 
                quality and commitment to customer safety. For any plastic pipe product targeting 
                the GCC market, understanding and meeting these standards is essential for 
                market success.
              </p>
              <p>
                Crown Plastic Pipes is fully certified to all applicable GSO and SASO standards, 
                with products registered on SABER and carrying the SASO Quality Mark. Our 
                technical team is available to assist customers with compliance documentation 
                and certification requirements for their projects.
              </p>
            </div>
          </section>

          {/* Related Links */}
          <section className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Technical Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/technical/bs-en-1452-complete-guide" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-amber-600">BS EN 1452 Complete Guide</h3>
                <p className="text-sm text-gray-600">European UPVC pipe standard details</p>
              </a>
              <a href="/technical/upvc-vs-pvc-vs-ppr-comparison" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-amber-600">Pipe Material Comparison</h3>
                <p className="text-sm text-gray-600">UPVC vs PVC vs PPR detailed comparison</p>
              </a>
              <a href="/products/upvc-pipes" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-amber-600">UPVC Products</h3>
                <p className="text-sm text-gray-600">Browse our certified UPVC pipe range</p>
              </a>
              <a href="/contact-us" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-amber-600">Request Certificates</h3>
                <p className="text-sm text-gray-600">Contact us for certification documents</p>
              </a>
            </div>
          </section>
        </div>

        {/* Author Box */}
        <footer className="bg-gray-100 py-8 mt-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                CP
              </div>
              <div>
                <p className="font-semibold text-gray-900">Crown Plastic Pipes Technical Team</p>
                <p className="text-gray-600 text-sm">
                  Industry experts with 35+ years of experience. Certified to GSO, SASO, 
                  BS EN, and DIN standards. SASO Quality Mark holders.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
