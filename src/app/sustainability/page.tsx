import { Metadata } from 'next';
import { PageHeader } from '@/components/common';

export const metadata: Metadata = {
  title: 'Sustainability',
  description: 'Learn about Crown Plastic Pipes commitment to sustainable manufacturing and environmental responsibility.',
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        title="Sustainability"
        subtitle="Our commitment to environmental responsibility and sustainable manufacturing practices."
        breadcrumbs={[{ label: 'Sustainability' }]}
      />

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
                icon: '♻️',
                title: 'Recyclable Materials',
                description: 'Our PVC and PE pipes are 100% recyclable at end of life, reducing landfill waste and supporting circular economy principles.',
              },
              {
                icon: '💧',
                title: 'Water Conservation',
                description: 'Our leak-free piping systems help conserve water resources by eliminating distribution losses and ensuring efficient water delivery.',
              },
              {
                icon: '⚡',
                title: 'Energy Efficiency',
                description: 'We continuously invest in energy-efficient manufacturing equipment and processes to reduce our carbon footprint.',
              },
              {
                icon: '🌱',
                title: 'Reduced Emissions',
                description: 'Our products have a lower carbon footprint compared to traditional materials like metal and concrete pipes.',
              },
              {
                icon: '🏭',
                title: 'Clean Production',
                description: 'Zero-discharge manufacturing processes and proper waste management systems ensure minimal environmental impact.',
              },
              {
                icon: '📋',
                title: 'ISO 14001 Certified',
                description: 'Our Environmental Management System is certified to ISO 14001, demonstrating our commitment to environmental responsibility.',
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
            The durability of our products means fewer replacements, less waste, and reduced 
            environmental impact over the product lifecycle.
          </p>
        </div>
      </section>
    </>
  );
}
