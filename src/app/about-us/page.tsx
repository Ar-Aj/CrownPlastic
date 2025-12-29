import { Metadata } from 'next';
import { PageHeader, Timeline, AwardsList, StatsStrip } from '@/components/common';
import { brand } from '@/config/brand';

export const metadata: Metadata = {
  title: 'About Us | Crown Plastic Pipes Factory L.L.C. | UPVC PPR HDPE Pipes UAE',
  description: 'Established 1995 in Sharjah, UAE. ISO 9001:2015 certified manufacturer of 5,000+ UPVC, PPR, HDPE pipes & fittings for water supply, drainage, electrical conduits, irrigation across GCC.',
};

const timelineItems = [
  {
    year: '1995',
    title: 'Founded in Sharjah, UAE',
    description: 'Crown Plastic Pipes Factory L.L.C. was established in Sharjah, UAE, with a vision to provide high-quality plastic piping solutions.',
  },
  {
    year: '2005',
    title: 'ISO 9001 Certification + Expansion',
    description: 'Expanded manufacturing capacity and achieved ISO 9001 certification for quality management systems.',
  },
  {
    year: '2010',
    title: 'PPR/HDPE Launch',
    description: 'Introduced PPR and HDPE pipe systems, expanding our product portfolio to serve diverse industries.',
  },
  {
    year: '2015',
    title: 'GCC Export Networks',
    description: 'Established distribution networks across GCC countries and expanded into Middle East markets.',
  },
  {
    year: '2020',
    title: 'Extrusion Tech Upgrade',
    description: 'Invested in state-of-the-art European extrusion technology and automated quality control systems.',
  },
  {
    year: '2025',
    title: '5,000+ Variants, 30+ Years Excellence',
    description: 'Celebrating over 30 years of excellence with 5,000+ product variants and expanded facilities.',
  },
];

const certifications = [
  { title: 'ISO 9001:2015', organization: 'Quality Management', icon: '✓' },
  { title: 'ISO 14001:2015', organization: 'Environmental', icon: '🌿' },
  { title: 'GSO Certified', organization: 'Gulf Standards', icon: '🏅' },
  { title: 'SASO Approved', organization: 'Saudi Standards', icon: '📋' },
  { title: 'QCC Certified', organization: 'Qatar Civil Defense', icon: '🛡️' },
  { title: 'UAE Civil Defense Approved', organization: '', icon: '🚒' },
  { title: 'Kitemark', organization: 'BSI Standards', icon: '✅' },
  { title: 'NSF Certified', organization: 'Public Health', icon: '💧' },
];

const stats = [
  { value: '30+', label: 'Years Since 1995' },
  { value: 'State-of-the-Art', label: 'Sharjah Facilities' },
  { value: '5,000+', label: 'Product Variants (UPVC/PPR/HDPE)' },
  { value: 'GCC + Sub-continent', label: 'Exports' },
  { value: '10,000+', label: 'Trusted Customers' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Crown Plastic Pipes Factory L.L.C."
        subtitle="Pioneering plastic piping solutions since 1995 – Sharjah's trusted manufacturer for GCC infrastructure."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Company Overview */}
      <section id="company-overview" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading the Way in Plastic Piping Solutions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Crown Plastic Pipes Factory L.L.C., established 1995 in Sharjah, UAE, leads UPVC, PPRC, 
                HDPE pipe manufacturing. ISO 9001:2015, 14001:2015, OHSAS 18001:2007 certified. Specializing 
                in pressure pipes, drainage systems, electrical conduits, telecom ducts using 100% virgin 
                uPVC with European extrusion technology. Gulf climate tested via in-house QC + international labs.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                <span className="text-8xl">🏭</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Deliver premium piping exceeding international standards (BS EN, DIN, ISO, ASTM) with 
                competitive pricing, rapid GCC delivery, and unmatched technical support. Committed to 
                sustainability, innovation, and total customer satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Become GCC's premier pipe manufacturer, expanding globally while upholding integrity, 
                reliability, and excellence in every pipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip stats={stats} variant="primary" />

      {/* Manufacturing */}
      <section id="manufacturing" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              State-of-the-Art Manufacturing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our modern facilities equipped with advanced technology ensure consistent quality and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Extrusion Lines',
                description: 'High-speed extrusion machines from leading European manufacturers for precise pipe production.',
                icon: '⚙️',
              },
              {
                title: 'Quality Testing Lab',
                description: 'In-house testing laboratory for comprehensive quality assurance and compliance verification.',
                icon: '🔬',
              },
              {
                title: 'Automated Systems',
                description: 'Computer-controlled production processes for consistent quality and minimal waste.',
                icon: '🤖',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl">
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section id="quality" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our products meet international standards and are certified by leading global organizations.
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones that mark our growth and commitment to excellence over the years.
            </p>
          </div>
          <Timeline items={timelineItems} />
        </div>
      </section>
    </>
  );
}
