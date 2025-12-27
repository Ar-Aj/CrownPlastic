import { Metadata } from 'next';
import { PageHeader, ComingSoon } from '@/components/common';
import { isComingSoon } from '@/config/maintenance';

export const metadata: Metadata = {
  title: 'Innovation',
  description: 'Discover how Crown Plastic Pipes leads through continuous innovation and R&D in plastic piping solutions.',
};

// Route slug for Coming Soon check
const ROUTE_SLUG = 'innovation';

export default function InnovationPage() {
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
        title="Innovation"
        subtitle="Driving progress through continuous research, development, and technological advancement."
        breadcrumbs={[{ label: 'Innovation' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Innovation at Our Core
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Crown Plastic Pipes, innovation is the driving force behind our success. We continuously 
                invest in research and development to create products that meet evolving market demands 
                and exceed customer expectations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated R&D team works on developing new formulations, improving production processes, 
                and testing advanced materials to ensure our products remain at the forefront of the industry.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                <span className="text-8xl">🔬</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Innovation Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🧪', title: 'Material Science', desc: 'Advanced polymer formulations for enhanced performance' },
              { icon: '⚙️', title: 'Production Technology', desc: 'State-of-the-art extrusion and molding processes' },
              { icon: '🔗', title: 'Jointing Systems', desc: 'Improved connection methods for leak-free installations' },
              { icon: '📊', title: 'Quality Testing', desc: 'Advanced testing methods for product verification' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Lab */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">In-House R&D Laboratory</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Our fully-equipped laboratory enables comprehensive testing and development, 
              ensuring every product meets the highest quality and performance standards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Pressure Testing',
                'Impact Resistance',
                'Chemical Analysis',
                'Thermal Testing',
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
