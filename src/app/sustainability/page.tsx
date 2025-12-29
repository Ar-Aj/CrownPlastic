import { Metadata } from 'next';
import { PageHeader } from '@/components/common';

export const metadata: Metadata = {
  title: 'Sustainable Pipes UAE | ISO 14001:2015 Crown Plastic Sharjah | Green Building',
  description: 'ISO 14001:2015 certified UPVC/PPR/HDPE. 100% virgin materials. Zero-discharge Sharjah factory. Gulf climate tested 50+yr pipes.',
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        title="Sustainability"
        subtitle="ISO 14001:2015 certified since 1995. 100% virgin materials. Zero-discharge manufacturing for GCC green building projects."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sustainability' }]}
      />

      {/* Stats Strip */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div>
              <p className="text-3xl mb-1">🌿</p>
              <p className="text-sm font-semibold text-accent">ISO 14001:2015</p>
              <p className="text-xs text-white/80">Certified</p>
            </div>
            <div>
              <p className="text-3xl mb-1">♻️</p>
              <p className="text-sm font-semibold text-accent">100% Virgin</p>
              <p className="text-xs text-white/80">Recyclable Materials</p>
            </div>
            <div>
              <p className="text-3xl mb-1">💧</p>
              <p className="text-sm font-semibold text-accent">Zero-Discharge</p>
              <p className="text-xs text-white/80">Manufacturing</p>
            </div>
            <div>
              <p className="text-3xl mb-1">🔥</p>
              <p className="text-sm font-semibold text-accent">50+ Years</p>
              <p className="text-xs text-white/80">Service Life</p>
            </div>
            <div>
              <p className="text-3xl mb-1">🌍</p>
              <p className="text-sm font-semibold text-accent">Gulf Climate</p>
              <p className="text-xs text-white/80">Tested</p>
            </div>
            <div>
              <p className="text-3xl mb-1">🏭</p>
              <p className="text-sm font-semibold text-accent">OHSAS 18001:2007</p>
              <p className="text-xs text-white/80">Safety</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🌍</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Building a Sustainable Future
              </h2>
              <p className="text-lg text-gray-600">
                At Crown Plastic Pipes, sustainability is not just a goal – it&apos;s embedded in everything we do.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                We are committed to minimizing our environmental footprint while delivering high-quality 
                products that contribute to sustainable infrastructure development. Our approach encompasses 
                responsible manufacturing, efficient resource utilization, and continuous improvement in 
                environmental performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Sustainability Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📋',
                title: 'ISO 14001:2015 Certified',
                description: 'Environmental Management System certified by QAOC. Continuous improvement in environmental performance.',
              },
              {
                icon: '♻️',
                title: '100% Virgin Materials',
                description: 'uPVC, PPR, HDPE from 100% virgin materials. Fully recyclable at end-of-life. Zero recycled content contamination.',
              },
              {
                icon: '🏭',
                title: 'Zero-Discharge Manufacturing',
                description: 'Closed-loop water systems. Zero liquid discharge to environment. Waste heat recovery.',
              },
              {
                icon: '🔥',
                title: 'Gulf Climate Tested',
                description: 'Products tested for UAE extreme heat (50°C+), UV exposure, thermal cycling. 50+ year service life guaranteed.',
              },
              {
                icon: '⚡',
                title: 'Energy Efficient Production',
                description: 'European Battenfeld extruders. Energy monitoring per ISO 50001 standards. Reduced carbon footprint.',
              },
              {
                icon: '💧',
                title: 'Leak-Free Systems',
                description: 'BS EN 1452, DIN 8061 precision joints eliminate water loss. Supports GCC water conservation goals.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Service Life */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">50+ Years Service Life</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            50+ years durability = 80% less replacements vs metal pipes. Reduced lifecycle emissions 
            and environmental impact over the product lifecycle.
          </p>
        </div>
      </section>
    </>
  );
}
