import { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader, Timeline, AwardsList, StatsStrip, AnimateOnScroll } from '@/components/common';
import Icon from '@/components/ui/Icon';

const baseUrl = 'https://crownplasticuae.com';

export const metadata: Metadata = {
  title: 'About Crown Plastic Pipes | UPVC PPR HDPE Manufacturer Sharjah UAE Since 1995',
  description: 'Crown Plastic Pipes Factory L.L.C. - Established 1995 in Sharjah, UAE. ISO 9001:2015 certified manufacturer of 5,000+ UPVC, PPR, HDPE pipes & fittings for water supply, drainage, electrical conduits, irrigation across Dubai, UAE & GCC.',
  keywords: [
    'Crown Plastic Pipes history',
    'pipe manufacturer Sharjah',
    'UPVC factory UAE',
    'PPR manufacturer Dubai',
    'HDPE pipes GCC',
    'ISO certified pipe factory',
    'plastic pipes since 1995',
  ],
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Crown Plastic Pipes | Sharjah UAE Since 1995',
    description: 'ISO 9001:2015 certified manufacturer of 5,000+ UPVC, PPR, HDPE pipes & fittings. Serving Dubai, Sharjah, UAE & GCC since 1995.',
    url: `${baseUrl}/about-us`,
    images: ['/images/og-about.jpg'],
  },
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
  { title: 'ISO 9001:2015', organization: 'Quality Management', iconName: 'certified' as const },
  { title: 'ISO 14001:2015', organization: 'Environmental', iconName: 'eco' as const },
  { title: 'GSO Certified', organization: 'Gulf Standards', iconName: 'award' as const },
  { title: 'SASO Approved', organization: 'Saudi Standards', iconName: 'document' as const },
  { title: 'QCC Certified', organization: 'Qatar Civil Defense', iconName: 'shield' as const },
  { title: 'UAE Civil Defense Approved', organization: '', iconName: 'shield' as const },
  { title: 'Kitemark', organization: 'BSI Standards', iconName: 'check' as const },
  { title: 'NSF Certified', organization: 'Public Health', iconName: 'water' as const },
];

const stats = [
  { value: '30+', label: 'Years Since 1995', iconName: 'calendar' as const },
  { value: 'State-of-the-Art', label: 'Sharjah Facilities', iconName: 'factory' as const },
  { value: '5,000+', label: 'Product Variants (UPVC/PPR/HDPE)', iconName: 'package' as const },
  { value: 'GCC + Sub-continent', label: 'Exports', iconName: 'globe' as const },
  { value: '10,000+', label: 'Trusted Customers', iconName: 'users' as const },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Crown Plastic Pipes Factory L.L.C."
        subtitle="Pioneering plastic piping solutions since 1995 – Sharjah's trusted manufacturer for GCC infrastructure."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Company Overview */}
      <section id="company-overview" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading the Way in Plastic Piping Solutions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Crown Plastic Pipes Factory L.L.C., established 1995 in Sharjah, UAE, leads UPVC, PPRC, 
                HDPE pipe manufacturing. ISO 9001:2015, 14001:2015, OHSAS 18001:2007 certified. Specializing 
                in pressure pipes, drainage systems, electrical conduits, telecom ducts using 100% virgin 
                uPVC with European extrusion technology. Gulf climate tested via in-house QC + international labs.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="relative">
                <Image
                  src="/images/about/factory-hero.jpg"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliver premium piping exceeding international standards (BS EN, DIN, ISO, ASTM) with 
                  competitive pricing, rapid GCC delivery, and unmatched technical support. Committed to 
                  sustainability, innovation, and total customer satisfaction.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm card-hover hover:shadow-lg transition-all duration-200">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="vision" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Become GCC&apos;s premier pipe manufacturer, expanding globally while upholding integrity, 
                  reliability, and excellence in every pipe.
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
                State-of-the-Art Manufacturing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our modern facilities equipped with advanced technology ensure consistent quality and efficiency.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Extrusion Lines',
                description: 'High-speed extrusion machines from leading European manufacturers for precise pipe production.',
                iconName: 'cog' as const,
              },
              {
                title: 'Quality Testing Lab',
                description: 'In-house testing laboratory for comprehensive quality assurance and compliance verification.',
                iconName: 'microscope' as const,
              },
              {
                title: 'Automated Systems',
                description: 'Computer-controlled production processes for consistent quality and minimal waste.',
                iconName: 'automation' as const,
              },
            ].map((item, index) => (
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
