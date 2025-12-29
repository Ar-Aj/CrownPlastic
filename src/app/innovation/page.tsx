import { Metadata } from 'next';
import { PageHeader, ComingSoon } from '@/components/common';
import { isComingSoon } from '@/config/maintenance';

export const metadata: Metadata = {
  title: 'Innovation | Crown Plastic Pipes Factory | Advanced UPVC PPR HDPE Solutions',
  description: 'In-house R&D, European extrusion technology, patented fittings and Gulf climate tested UPVC, PPR, HDPE piping systems from Crown Plastic Pipes Factory, Sharjah.',
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
        subtitle="In-house R&D, European Battenfeld extrusion lines, and Gulf climate testing labs driving advanced UPVC, PPR, HDPE pipe innovation for GCC infrastructure projects."
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
                At Crown Plastic Pipes Factory L.L.C., innovation starts on the factory floor. Our in-house 
                R&D team, European Battenfeld extrusion lines, and Gulf-climate testing laboratories continuously 
                improve UPVC pressure, drainage, duct, PVC conduit, PPR, and HDPE systems for real project 
                conditions in the UAE and GCC.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From 100% virgin material formulations to precision jointing systems, every innovation is 
                tested to BS EN, DIN, ISO, and ASTM standards—ensuring 50+ year service life under extreme 
                Gulf temperatures. Explore our <a href="/products" className="text-primary hover:underline font-medium">full product range</a> or learn <a href="/sustainability" className="text-primary hover:underline font-medium">how we design for sustainability</a>.
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
              { 
                icon: '🧪', 
                title: 'Material & Design Innovation', 
                desc: '100% virgin uPVC, PPR, HDPE engineered to BS EN 1452, DIN 8061/62, ISO 4427, ASTM D2241. Optimized wall thickness, SDR, and PN classes for 50+ year durability and full recyclability.' 
              },
              { 
                icon: '⚙️', 
                title: 'European Manufacturing Technology', 
                desc: 'Battenfeld extrusion lines with computer-controlled processes, online dimensional checks, zero-discharge production, and in-house lab verification. Energy-efficient ISO 50001 compliant operations.' 
              },
              { 
                icon: '🔗', 
                title: 'Jointing & System Innovation', 
                desc: 'Leak-proof systems: solvent cemented (BS 4346, ASTM D2466/D2467), ring-seal drainage (BS EN 1329/1401), fusion welded HDPE (ISO 4427, DIN 8074). Engineered pipes + fittings + accessories.' 
              },
              { 
                icon: '📊', 
                title: 'Gulf Climate Testing & QAQC', 
                desc: 'In-house testing: impact, tensile, Vicat, hydrostatic, chemical resistance per ISO/BS/DIN. UV, high temp (50°C+), pressure, long-term creep validation. Third-party approvals for Presidential Court projects.' 
              },
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

      {/* Innovative Products Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Innovative Product Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From municipal water networks to high-rise buildings and telecom infrastructure, our R&D-driven 
            product innovations deliver proven performance across the GCC.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '💧',
                title: 'High-Pressure UPVC Systems',
                desc: 'Pressure pipes up to 400 mm diameter, PN 6-16 bar, SDR 13.6-41 for municipal water distribution networks. ISO 4422, BS EN 1452, DIN 8061/62 compliant.'
              },
              {
                icon: '🔥',
                title: 'PPR Hot Water Systems',
                desc: 'PN 20 (SDR 6) and PN 16 (SDR 7.4) systems for high-rise hot/cold water. DIN 8077/78 certified, 95°C continuous operation, 50+ year service life.'
              },
              {
                icon: '🌾',
                title: 'HDPE PE100 Irrigation',
                desc: 'PE100, PE80, PE63 pipelines for water distribution and drip irrigation. ISO 4427, DIN 8074 standards. Long coil lengths reduce joints and installation time.'
              },
              {
                icon: '📡',
                title: 'Telecom Duct Systems',
                desc: 'Etisalat & DU approved duct pipes with special D54/D56/D57 series. NEMA TC-2, BS 3505/3506, DIN 8062 compliant. Fabricated accessories for smooth cable installation.'
              },
              {
                icon: '🏗️',
                title: 'Drainage & Soil Systems',
                desc: 'Above/underground drainage pipes per BS EN 1329/1401, BS 4660. Ring-seal joints, non-standard sizes, complete fittings range for building and infrastructure projects.'
              },
              {
                icon: '⚡',
                title: 'Electrical Conduit Solutions',
                desc: 'Heavy (1250N), Medium (750N), Light (320N) duty conduits. Schedule 40/80 systems. BS EN 50086, IEC 61386 compliant for electrical and cable protection.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a 
              href="/products" 
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Explore Full Product Range
            </a>
          </div>
        </div>
      </section>

      {/* R&D Lab */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">In-House R&D Laboratory</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Our fully-equipped testing facility validates every batch against international standards. 
              Certified under ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), and OHSAS 18001:2007 
              (Safety), our innovation is structured, traceable, and project-approved across the GCC.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Hydrostatic Pressure',
                'Impact & Tensile',
                'Vicat Softening',
                'UV & Thermal Cycling',
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
