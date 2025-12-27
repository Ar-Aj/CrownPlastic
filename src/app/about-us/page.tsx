import { Metadata } from 'next';
import { PageHeader, Timeline, AwardsList, StatsStrip } from '@/components/common';
import { brand } from '@/config/brand';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Crown Plastic Pipes Factory L.L.C. - Leading manufacturer of plastic pipes in the UAE.',
};

const timelineItems = [
  {
    year: '1998',
    title: 'Company Founded',
    description: 'Crown Plastic Pipes Factory L.L.C. was established in Sharjah, UAE, with a vision to provide high-quality plastic piping solutions.',
  },
  {
    year: '2005',
    title: 'Expansion & ISO Certification',
    description: 'Expanded manufacturing capacity and achieved ISO 9001 certification for quality management systems.',
  },
  {
    year: '2010',
    title: 'Product Range Growth',
    description: 'Introduced PPR and HDPE pipe systems, expanding our product portfolio to serve diverse industries.',
  },
  {
    year: '2015',
    title: 'Export Markets',
    description: 'Began exporting to GCC countries and established distribution networks across the Middle East.',
  },
  {
    year: '2020',
    title: 'Technology Upgrade',
    description: 'Invested in state-of-the-art extrusion technology and automated quality control systems.',
  },
  {
    year: '2024',
    title: 'Continued Growth',
    description: 'Celebrating over 25 years of excellence with expanded facilities and new product innovations.',
  },
];

const certifications = [
  { title: 'ISO 9001:2015', organization: 'Quality Management', icon: '✓' },
  { title: 'ISO 14001:2015', organization: 'Environmental Management', icon: '🌿' },
  { title: 'GSO Certified', organization: 'Gulf Standards', icon: '🏅' },
  { title: 'SASO Approved', organization: 'Saudi Standards', icon: '📋' },
  { title: 'QCC Certified', organization: 'Qatar Civil Defense', icon: '🛡️' },
  { title: 'UAE Civil Defense', organization: 'Safety Approved', icon: '🚒' },
  { title: 'Kitemark', organization: 'BSI Standards', icon: '✅' },
  { title: 'NSF Certified', organization: 'Public Health', icon: '💧' },
];

const stats = [
  { value: brand.stats.yearsExperience, label: 'Years Experience' },
  { value: brand.stats.manufacturingUnits, label: 'Manufacturing Units' },
  { value: brand.stats.productsRange, label: 'Products Range' },
  { value: brand.stats.happyCustomers, label: 'Happy Customers' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Crown Plastic Pipes"
        subtitle="Building tomorrow's infrastructure with innovative plastic piping solutions since 1998."
        breadcrumbs={[{ label: 'About Us' }]}
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
                Crown Plastic Pipes Factory L.L.C. is one of the premier manufacturers of plastic pipes 
                and fittings in the United Arab Emirates. Established in 1998, we have grown to become 
                a trusted name in the construction and infrastructure industry.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our comprehensive range includes UPVC pressure and drainage systems, PPR hot and cold 
                water pipes, HDPE pipes, and electrical conduit systems. We serve diverse sectors 
                including construction, agriculture, telecommunications, and industrial applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our commitment to quality, innovation, and customer satisfaction, we continue to 
                expand our reach across the Middle East and beyond.
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
                To provide superior quality plastic piping solutions that meet international standards, 
                while ensuring customer satisfaction through innovative products, competitive pricing, 
                and exceptional service. We are committed to sustainable practices and continuous improvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading plastic pipe manufacturer in the region, recognized for excellence 
                in quality, innovation, and sustainability. We aim to expand our global footprint 
                while maintaining our core values of integrity, reliability, and customer focus.
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
