'use client';

// Quality & ISO Certifications Compliance Guide Client Component
// Phase 2 AEO - Featured Snippet Optimization
// 1000+ word comprehensive guide on international quality standards

import Link from '@/components/common/LocaleLink';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';
import { ClusterFAQSchema } from '@/components/schemas/FAQPageSchema';
import { technicalStandardsFAQs } from '@/config/faqs';

const breadcrumbItems = [
    { name: 'Home', url: 'https://crownplasticuae.com' },
    { name: 'Technical Guides', url: 'https://crownplasticuae.com/technical' },
    { name: 'Standards', url: 'https://crownplasticuae.com/technical/standards' },
    { name: 'Quality & ISO Certifications', url: 'https://crownplasticuae.com/technical/certifications-compliance-guide' },
];

// Get standards-related FAQs for schema
const standardsFAQs = technicalStandardsFAQs.filter(
    faq => faq.question.toLowerCase().includes('iso') ||
        faq.question.toLowerCase().includes('certification') ||
        faq.question.toLowerCase().includes('standard')
);

export default function CertificationsGuideClient() {
    return (
        <>
            {/* Schema Markup */}
            <TechnicalGuideSchema
                title="Quality & ISO Certifications Compliance Guide for Plastic Pipes"
                description="Comprehensive guide to ISO 9001:2015, BS EN 1452, ASTM D1785, and DIN 8062 certification requirements for plastic pipes. Covers international quality standards, testing requirements, and compliance frameworks."
                datePublished="2024-01-30T00:00:00Z"
                dateModified={new Date().toISOString()}
                url="https://crownplasticuae.com/technical/certifications-compliance-guide"
                keywords={[
                    'ISO 9001:2015',
                    'BS EN 1452',
                    'ASTM D1785',
                    'DIN 8062',
                    'pipe quality standards',
                    'international pipe compliance',
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
                clusterName="Quality & ISO Standards FAQs"
                pageUrl="https://crownplasticuae.com/technical/certifications-compliance-guide"
            />

            {/* Main Article Content */}
            <article className="min-h-screen bg-white">
                {/* Hero Section */}
                <header className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white pt-[150px] md:pt-[180px] pb-16">
                    <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Breadcrumb Navigation */}
                        <nav className="text-sm mb-6 text-amber-200">
                            <ol className="flex flex-wrap items-center gap-2">
                                <li><Link href="/" className="hover:text-white">Home</Link></li>
                                <li>/</li>
                                <li><Link href="/technical" className="hover:text-white">Technical Guides</Link></li>
                                <li>/</li>
                                <li className="text-white">Quality & ISO Certifications</li>
                            </ol>
                        </nav>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Quality & ISO Certifications Guide for Plastic Pipes
                        </h1>
                        <p className="text-xl text-amber-100 mb-6">
                            Essential guide to understanding international quality standards including ISO 9001:2015,
                            BS EN 1452, ASTM D1785, and DIN 8062 for pipe manufacturing and compliance.
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm mt-8">
                            <span className="bg-amber-700/70 border border-amber-500/30 px-3 py-1 rounded-full">
                                Updated January 2024
                            </span>
                            <span className="bg-amber-700/70 border border-amber-500/30 px-3 py-1 rounded-full">
                                10 min read
                            </span>
                            <span className="bg-amber-700/70 border border-amber-500/30 px-3 py-1 rounded-full">
                                Expert Guide
                            </span>
                        </div>
                    </div>
                </header>

                {/* Article Body */}
                <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Introduction */}
                    <section className="prose prose-lg max-w-none mb-12">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            For manufacturers and suppliers of plastic pipes, compliance with internationally
                            recognized quality standards is essential for market access and customer trust.
                            This guide explains the key standards — <strong>ISO 9001:2015</strong>, <strong>BS EN 1452</strong>,
                            <strong> ASTM D1785</strong>, and <strong>DIN 8062</strong> — their certification requirements,
                            and how Crown Plastic Pipes maintains full compliance with international regulations.
                        </p>
                    </section>

                    {/* Table of Contents */}
                    <nav className="bg-gray-50 rounded-lg p-6 mb-12">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">In This Guide</h2>
                        <ol className="grid md:grid-cols-2 gap-2 text-amber-600">
                            <li><a href="#iso-standards" className="hover:underline">1. ISO Quality Standards</a></li>
                            <li><a href="#bs-en-standards" className="hover:underline">2. BS EN Standards</a></li>
                            <li><a href="#astm-din-standards" className="hover:underline">3. ASTM & DIN Standards</a></li>
                            <li><a href="#certification-process" className="hover:underline">4. Certification Process</a></li>
                            <li><a href="#testing-requirements" className="hover:underline">5. Testing Requirements</a></li>
                            <li><a href="#crown-compliance" className="hover:underline">6. Crown&apos;s Certifications</a></li>
                        </ol>
                    </nav>

                    {/* ISO Standards */}
                    <section id="iso-standards" className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            ISO Quality Management Standards
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p>
                                The <strong>International Organization for Standardization (ISO)</strong> sets the
                                global benchmark for quality management systems. For pipe manufacturers, the three
                                most critical ISO certifications are:
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                                <p className="font-semibold text-amber-800">Key Point:</p>
                                <p className="text-amber-700">
                                    ISO 9001:2015 certification demonstrates that a manufacturer&apos;s quality management
                                    system consistently delivers products that meet customer and regulatory requirements.
                                    It is the most widely recognized quality standard worldwide.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold mt-6 mb-3">ISO Certifications for Pipe Manufacturing:</h3>
                            <ul>
                                <li><strong>ISO 9001:2015</strong> — Quality management system covering design, manufacturing, and delivery</li>
                                <li><strong>ISO 14001:2015</strong> — Environmental management system for sustainable manufacturing</li>
                                <li><strong>ISO 45001:2018</strong> — Occupational health and safety management</li>
                                <li><strong>ISO 4427</strong> — HDPE pipes for water supply</li>
                            </ul>
                        </div>
                    </section>

                    {/* BS EN Standards */}
                    <section id="bs-en-standards" className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            BS EN Standards for Water Supply Pipes
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p>
                                <strong>British Standards / European Norms (BS EN)</strong> are widely adopted across
                                the GCC region. These standards originate from CEN (European Committee for Standardization)
                                and are adopted by BSI (British Standards Institution).
                            </p>

                            <div className="space-y-6 mt-6">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">BS EN 1452 - UPVC Pressure Pipes for Water Supply</h3>
                                    <p className="text-gray-700 mb-4">
                                        The primary European standard for UPVC pressure pipes used in water supply systems.
                                        Covers pipe dimensions, material specifications, and performance requirements.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <h4 className="font-semibold text-blue-800">Requirements Include:</h4>
                                            <ul className="text-gray-600 mt-2 space-y-1">
                                                <li>• Pressure class specifications (PN 6-25)</li>
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

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">BS EN 805 - Water Supply Requirements</h3>
                                    <p className="text-gray-700 mb-4">
                                        Covers requirements for water supply systems outside buildings. This standard
                                        defines performance requirements for pipes, fittings, and their installation
                                        in potable water distribution networks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ASTM & DIN Standards */}
                    <section id="astm-din-standards" className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            ASTM & DIN Manufacturing Standards
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-green-900 mb-3">ASTM D1785 - PVC Plastic Pipe Schedule</h3>
                                <p className="text-gray-700 mb-4">
                                    The American Society for Testing and Materials standard for PVC plastic pipe
                                    (Schedules 40, 80, and 120). This standard covers pipe dimensions, material
                                    specifications, and testing requirements.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <h4 className="font-semibold text-green-800">Key Requirements:</h4>
                                        <ul className="text-gray-600 mt-2 space-y-1">
                                            <li>• Schedule-based wall thickness</li>
                                            <li>• Burst pressure ratings</li>
                                            <li>• Material compound specifications</li>
                                            <li>• Dimensional tolerances</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800">Applications:</h4>
                                        <ul className="text-gray-600 mt-2 space-y-1">
                                            <li>• Pressure water distribution</li>
                                            <li>• Industrial piping systems</li>
                                            <li>• Chemical transport</li>
                                            <li>• Conduit applications</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-green-900 mb-3">DIN 8062 - UPVC Pipe Dimensions</h3>
                                <p className="text-gray-700 mb-4">
                                    German Institute for Standardization (DIN) standard for UPVC pipe dimensions
                                    and tolerances. Widely adopted across Europe and the Middle East for metric
                                    pipe sizing.
                                </p>
                            </div>

                            {/* Additional Standards Table */}
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
                                                <td className="px-3 py-2 font-medium">ISO 1452</td>
                                                <td className="px-3 py-2">PVC-U pipes for water supply</td>
                                                <td className="px-3 py-2">UPVC pressure pipes</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-3 py-2 font-medium">ISO 15874</td>
                                                <td className="px-3 py-2">PP pipes for hot/cold water</td>
                                                <td className="px-3 py-2">PPR plumbing systems</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-3 py-2 font-medium">ISO 4427</td>
                                                <td className="px-3 py-2">PE pipes for water supply</td>
                                                <td className="px-3 py-2">HDPE systems</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-3 py-2 font-medium">BS EN 1401</td>
                                                <td className="px-3 py-2">PVC-U pipes for drainage</td>
                                                <td className="px-3 py-2">Underground drainage</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="px-3 py-2 font-medium">DIN 8077/8078</td>
                                                <td className="px-3 py-2">PP-R pipes and fittings</td>
                                                <td className="px-3 py-2">Hot & cold water systems</td>
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
                            International Certification Process
                        </h2>

                        <div className="space-y-6">
                            {/* Step by step */}
                            <div className="relative">
                                {[
                                    {
                                        step: 1,
                                        title: 'Product Testing',
                                        description: 'Submit pipe samples to an accredited testing laboratory for evaluation against applicable international standards (BS EN, ASTM, DIN, ISO).',
                                    },
                                    {
                                        step: 2,
                                        title: 'Factory Audit',
                                        description: 'Undergo factory inspection by a recognized certification body to verify quality management systems meet ISO 9001:2015 requirements.',
                                    },
                                    {
                                        step: 3,
                                        title: 'Documentation Review',
                                        description: 'Submit technical documentation, test reports, quality certificates, and product specifications for review.',
                                    },
                                    {
                                        step: 4,
                                        title: 'Quality System Assessment',
                                        description: 'Comprehensive assessment of the manufacturer\'s quality management system, including process controls and traceability.',
                                    },
                                    {
                                        step: 5,
                                        title: 'Certificate Issuance',
                                        description: 'Receive ISO conformity certificates and product standard certifications valid for 1-3 years depending on certification type.',
                                    },
                                    {
                                        step: 6,
                                        title: 'Surveillance Audits',
                                        description: 'Undergo periodic surveillance audits to maintain certification validity and ensure continuous improvement.',
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
                                All tests must be performed by laboratories accredited to ISO/IEC 17025.
                                Crown Plastic Pipes uses internationally accredited laboratories for all
                                certification testing.
                            </p>
                        </div>
                    </section>

                    {/* Crown Compliance */}
                    <section id="crown-compliance" className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Crown Plastic Pipes Quality Certifications
                        </h2>

                        <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white rounded-lg p-8 mb-6">
                            <h3 className="text-xl font-bold mb-4">Our Certifications</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-amber-200 mb-2">Quality Management:</h4>
                                    <ul className="space-y-1 text-amber-100">
                                        <li>✓ ISO 9001:2015 — Quality Management</li>
                                        <li>✓ ISO 14001:2015 — Environmental Management</li>
                                        <li>✓ ISO 45001:2018 — Health & Safety</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-amber-200 mb-2">Manufacturing Standards:</h4>
                                    <ul className="space-y-1 text-amber-100">
                                        <li>✓ BS EN 1452 — UPVC Pressure Pipes</li>
                                        <li>✓ DIN 8062 — Pipe Dimensions</li>
                                        <li>✓ ASTM D1785 — PVC Pipe Schedule</li>
                                        <li>✓ BS EN 805 — Water Supply</li>
                                        <li>✓ ISO 1452 — International PVC-U Standard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p>
                                Crown Plastic Pipes maintains full compliance with internationally recognized
                                quality standards for our UPVC, PPR, and HDPE pipe products. Our manufacturing
                                facility in the UAE is certified to ISO 9001:2015 and undergoes regular audits
                                by international certification bodies.
                            </p>
                            <p>
                                Our in-house quality control laboratory and use of 100% virgin raw materials
                                ensures every product meets the stringent requirements of BS EN, DIN, ASTM, and
                                ISO standards. With over 30 years of manufacturing excellence, Crown Plastic
                                Pipes is a trusted partner for infrastructure projects across the GCC region.
                            </p>
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Benefits of Choosing ISO-Certified Pipes
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                {
                                    title: 'Global Market Access',
                                    description: 'ISO-certified products are recognized worldwide, enabling export to any market.',
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
                                    description: 'Qualify for government and large private sector tenders requiring ISO certification.',
                                },
                                {
                                    title: 'Customer Confidence',
                                    description: 'Build trust with customers through internationally recognized quality marks.',
                                },
                                {
                                    title: 'Risk Reduction',
                                    description: 'Minimize product liability and recall risks through standards compliance.',
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
                                International quality certifications are not just regulatory requirements — they
                                are a mark of manufacturing excellence and commitment to customer safety. For
                                any plastic pipe product, meeting ISO, BS EN, ASTM, and DIN standards is essential
                                for market success and long-term reliability.
                            </p>
                            <p>
                                Crown Plastic Pipes is certified to ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018,
                                with products manufactured to BS EN 1452, DIN 8062, and ASTM D1785 standards. Our
                                technical team is available to assist customers with compliance documentation
                                and certification requirements for their projects.
                            </p>
                        </div>
                    </section>

                    {/* Related Links */}
                    <aside className="border-t pt-8" aria-label="Related technical guides">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Technical Guides</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/technical/bs-en-1452-complete-guide"
                                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <h3 className="font-semibold text-amber-600">BS EN 1452 Complete Guide</h3>
                                <p className="text-sm text-gray-600">European UPVC pipe standard details</p>
                            </Link>
                            <Link href="/technical/upvc-vs-pvc-vs-ppr-comparison"
                                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <h3 className="font-semibold text-amber-600">Pipe Material Comparison</h3>
                                <p className="text-sm text-gray-600">UPVC vs PVC vs PPR detailed comparison</p>
                            </Link>
                            <Link href="/products/upvc-pipes"
                                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <h3 className="font-semibold text-amber-600">UPVC Products</h3>
                                <p className="text-sm text-gray-600">Browse our certified UPVC pipe range</p>
                            </Link>
                            <Link href="/contact-us"
                                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <h3 className="font-semibold text-amber-600">Request Certificates</h3>
                                <p className="text-sm text-gray-600">Contact us for certification documents</p>
                            </Link>
                        </div>
                    </aside>
                </div>

                {/* Author Box */}
                <footer className="bg-gray-100 py-8 mt-12">
                    <div className="w-full max-w-[90%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                CP
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Crown Plastic Pipes Technical Team</p>
                                <p className="text-gray-600 text-sm">
                                    Industry experts with 30+ years of experience. ISO 9001:2015 certified.
                                    Products manufactured to BS EN, DIN, and ASTM international standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </article>
        </>
    );
}
