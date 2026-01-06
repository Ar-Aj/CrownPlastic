'use client';

// UPVC Installation Best Practices Client Component
// Phase 2 AEO - Featured Snippet Optimization
// 1200+ word comprehensive installation guide with HowTo schema

import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';
import { HowToSchema } from '@/components/schemas/HowToSchema';
import { ClusterFAQSchema } from '@/components/schemas/FAQPageSchema';
import { installationMaintenanceFAQs } from '@/config/faqs';

const breadcrumbItems = [
  { name: 'Home', url: 'https://crownplasticuae.com' },
  { name: 'Technical Guides', url: 'https://crownplasticuae.com/technical' },
  { name: 'Installation', url: 'https://crownplasticuae.com/technical/installation' },
  { name: 'UPVC Installation Best Practices', url: 'https://crownplasticuae.com/technical/upvc-installation-best-practices' },
];

// Installation steps for HowTo schema
const installationSteps = [
  {
    name: 'Gather Tools and Materials',
    text: 'Collect all required tools: pipe cutter or hacksaw, deburring tool, solvent cement, primer, measuring tape, marker, clean rags, and safety equipment (gloves, goggles). Ensure you have the correct pipe sizes and fittings.',
  },
  {
    name: 'Measure and Cut Pipes',
    text: 'Measure the required pipe length accurately. Mark the cutting point with a marker. Cut the pipe squarely using a pipe cutter or fine-toothed hacksaw. Ensure the cut is perpendicular to the pipe axis for proper joint fit.',
  },
  {
    name: 'Deburr and Clean Pipe Ends',
    text: 'Remove all burrs and rough edges from the cut end using a deburring tool or file. Clean both the pipe end and fitting socket with a clean, dry cloth. Remove any dirt, dust, or moisture. This step is critical for joint integrity.',
  },
  {
    name: 'Dry Fit and Mark Insertion Depth',
    text: 'Insert the pipe into the fitting socket without cement to check fit. Mark the insertion depth on the pipe using a marker. The insertion depth should be 1/2 to 2/3 of the socket depth depending on pipe diameter.',
  },
  {
    name: 'Apply Primer (If Required)',
    text: 'For larger diameter pipes (above 50mm), apply primer to soften the pipe surface. Apply primer to both the pipe end and inside the fitting socket using the applicator. Allow to dry for 10-15 seconds.',
  },
  {
    name: 'Apply Solvent Cement',
    text: 'Apply a thin, even layer of solvent cement to the pipe end first, then to the inside of the fitting socket. Work quickly as cement begins setting within 20-30 seconds. Use the correct cement for the pipe size.',
  },
  {
    name: 'Join Pipe and Fitting',
    text: 'Immediately insert the pipe into the fitting with a slight twisting motion (1/4 turn). Push until the pipe reaches the marked insertion depth. Hold firmly for 30 seconds to prevent push-out as the cement expands.',
  },
  {
    name: 'Wipe Excess Cement',
    text: 'Remove any excess cement from around the joint with a clean rag. A proper joint will show a small, even bead of cement around the connection. Uneven beads indicate improper cement application.',
  },
  {
    name: 'Allow Proper Curing Time',
    text: 'Do not move or stress the joint during initial curing. Wait minimum 15-20 minutes before handling. Allow 24 hours before pressure testing. Curing time may increase in cold or humid conditions.',
  },
  {
    name: 'Perform Pressure Test',
    text: 'After 24-hour cure, fill the system with water and check for leaks visually. Apply test pressure (1.5x operating pressure) and maintain for minimum 2 hours. Inspect all joints for any signs of leakage.',
  },
];

// Get installation-related FAQs for schema
const installationFAQs = installationMaintenanceFAQs.slice(0, 6);

export default function InstallationGuideClient() {
  return (
    <>
      {/* Schema Markup */}
      <TechnicalGuideSchema
        title="UPVC Pipe Installation Best Practices: Professional Step-by-Step Guide"
        description="Comprehensive guide to installing UPVC pipes correctly. Covers preparation, solvent cement application, joint assembly, curing times, and pressure testing procedures."
        datePublished="2024-01-25T00:00:00Z"
        dateModified={new Date().toISOString()}
        url="https://crownplasticuae.com/technical/upvc-installation-best-practices"
        keywords={[
          'UPVC installation',
          'pipe installation guide',
          'solvent cement',
          'pressure pipe joints',
          'plumbing best practices',
        ]}
        proficiencyLevel="Intermediate"
        dependencies={['Solvent cement', 'Pipe cutter', 'Safety equipment']}
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
      <HowToSchema
        name="How to Install UPVC Pressure Pipes Correctly"
        description="Professional step-by-step guide to installing UPVC pressure pipes using solvent cement joints. Includes preparation, assembly, curing, and testing procedures."
        url="https://crownplasticuae.com/technical/upvc-installation-best-practices"
        steps={installationSteps}
        totalTime="PT2H"
        tools={[
          { name: 'Pipe cutter or fine-toothed hacksaw', required: true },
          { name: 'Deburring tool or half-round file', required: true },
          { name: 'Clean, lint-free rags', required: true },
          { name: 'Measuring tape', required: true },
          { name: 'Permanent marker', required: true },
          { name: 'Pressure test equipment', required: true },
        ]}
        supplies={[
          { name: 'UPVC solvent cement (appropriate grade)' },
          { name: 'Primer (for pipes above 50mm)' },
          { name: 'UPVC pipes and fittings' },
          { name: 'Safety gloves' },
          { name: 'Safety goggles' },
        ]}
      />
      <ClusterFAQSchema
        faqs={installationFAQs}
        clusterName="UPVC Installation FAQs"
        pageUrl="https://crownplasticuae.com/technical/upvc-installation-best-practices"
      />

      {/* Main Article Content */}
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb Navigation */}
            <nav className="text-sm mb-6 text-green-200">
              <ol className="flex flex-wrap items-center gap-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li>/</li>
                <li><a href="/technical" className="hover:text-white">Technical Guides</a></li>
                <li>/</li>
                <li className="text-white">UPVC Installation</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              UPVC Pipe Installation Best Practices
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Professional step-by-step guide to installing UPVC pressure pipes correctly. 
              Learn proper techniques for lasting, leak-free joints.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-green-700/50 px-3 py-1 rounded-full">
                Updated January 2024
              </span>
              <span className="bg-green-700/50 px-3 py-1 rounded-full">
                15 min read
              </span>
              <span className="bg-green-700/50 px-3 py-1 rounded-full">
                Intermediate Level
              </span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Proper installation is the foundation of a reliable UPVC piping system. Even 
              premium-quality pipes can fail prematurely if installed incorrectly. This guide 
              covers <strong>professional installation techniques</strong> for UPVC pressure 
              pipes using solvent cement joints, the most common joining method for systems 
              operating at pressures up to PN25 (25 bar).
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="font-semibold text-yellow-800">Important Safety Notice:</p>
              <p className="text-yellow-700">
                Solvent cement contains volatile organic compounds (VOCs). Always work in 
                well-ventilated areas, wear appropriate PPE (gloves, goggles), and keep away 
                from ignition sources. Follow all local safety regulations.
              </p>
            </div>
          </section>

          {/* Quick Reference Card */}
          <section className="bg-gray-50 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Reference</h2>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow">
                <p className="text-3xl font-bold text-green-600">2 hrs</p>
                <p className="text-sm text-gray-600">Total Install Time</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-3xl font-bold text-green-600">24 hrs</p>
                <p className="text-sm text-gray-600">Cure Before Testing</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-3xl font-bold text-green-600">30 sec</p>
                <p className="text-sm text-gray-600">Joint Hold Time</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-3xl font-bold text-green-600">1.5x</p>
                <p className="text-sm text-gray-600">Test Pressure Ratio</p>
              </div>
            </div>
          </section>

          {/* Tools and Materials */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Required Tools and Materials
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tools */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🔧 Tools Required</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Pipe cutter or fine-toothed hacksaw
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Deburring tool or half-round file
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Clean, lint-free rags
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Measuring tape (metric)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Permanent marker
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Pressure test pump and gauge
                  </li>
                </ul>
              </div>

              {/* Materials */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">📦 Materials Required</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    UPVC solvent cement (correct grade)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Primer (for pipes 50mm+)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    UPVC pipes (BS EN 1452)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    UPVC fittings (matching standard)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Safety gloves (chemical resistant)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Safety goggles
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step-by-Step Installation */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Step-by-Step Installation Guide
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                  <h3 className="text-xl font-bold text-gray-900">Gather Tools and Materials</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Before starting, collect all required tools and materials. Verify that you have 
                  the correct pipe sizes and fittings for your project. Check that solvent cement 
                  is within its expiration date and stored properly (not frozen or separated).
                </p>
                <div className="bg-gray-50 p-4 rounded text-sm">
                  <strong>Pro Tip:</strong> Use solvent cement specifically formulated for UPVC 
                  pressure pipes. Standard PVC cement may not provide adequate bond strength.
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                  <h3 className="text-xl font-bold text-gray-900">Measure and Cut Pipes</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Measure the required pipe length accurately, accounting for insertion depth 
                  into fittings. Mark the cutting point clearly with a permanent marker. Cut 
                  the pipe squarely using a pipe cutter (preferred) or fine-toothed hacksaw.
                </p>
                <div className="bg-red-50 p-4 rounded text-sm border-l-4 border-red-400">
                  <strong>Critical:</strong> The cut must be perpendicular to the pipe axis. 
                  Angled cuts reduce joint contact area and can cause leaks under pressure.
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                  <h3 className="text-xl font-bold text-gray-900">Deburr and Clean Pipe Ends</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Remove all burrs and rough edges from the cut end using a deburring tool, 
                  half-round file, or sharp knife. Create a slight chamfer (15°) on the outside 
                  edge to facilitate entry and spread cement evenly.
                </p>
                <p className="text-gray-700">
                  Clean both the pipe end (outer surface) and fitting socket (inner surface) 
                  with a clean, dry, lint-free cloth. Remove all dirt, dust, moisture, and 
                  grease. Contamination is the #1 cause of joint failures.
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                  <h3 className="text-xl font-bold text-gray-900">Dry Fit and Mark Insertion Depth</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Insert the pipe into the fitting socket <strong>without cement</strong> to 
                  verify proper fit. The pipe should enter smoothly with slight interference. 
                  Mark the insertion depth on the pipe using a permanent marker.
                </p>
                
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-3 py-2 text-left">Pipe Diameter</th>
                        <th className="border px-3 py-2 text-left">Recommended Insertion Depth</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-3 py-2">20-32mm</td><td className="border px-3 py-2">15-20mm (½ socket depth)</td></tr>
                      <tr><td className="border px-3 py-2">40-63mm</td><td className="border px-3 py-2">25-35mm (½ socket depth)</td></tr>
                      <tr><td className="border px-3 py-2">75-110mm</td><td className="border px-3 py-2">40-55mm (⅔ socket depth)</td></tr>
                      <tr><td className="border px-3 py-2">125-160mm</td><td className="border px-3 py-2">60-80mm (⅔ socket depth)</td></tr>
                      <tr><td className="border px-3 py-2">200mm+</td><td className="border px-3 py-2">Per manufacturer specification</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span>
                  <h3 className="text-xl font-bold text-gray-900">Apply Primer (For Larger Pipes)</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  For pipes 50mm diameter and larger, primer is recommended to soften the pipe 
                  surface and improve cement penetration. Apply primer to both the pipe end 
                  (outer surface) and fitting socket (inner surface) using the applicator.
                </p>
                <p className="text-gray-700">
                  Allow primer to dry for 10-15 seconds until tacky but not fully dry. Work 
                  quickly—primer has a short working window before it loses effectiveness.
                </p>
              </div>

              {/* Step 6 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">6</span>
                  <h3 className="text-xl font-bold text-gray-900">Apply Solvent Cement</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Apply a <strong>thin, even layer</strong> of solvent cement to the pipe end 
                  first, covering the full insertion depth area. Then apply cement to the 
                  inside of the fitting socket. Work quickly—cement begins setting within 
                  20-30 seconds of application.
                </p>
                <div className="bg-yellow-50 p-4 rounded text-sm border-l-4 border-yellow-400">
                  <strong>Warning:</strong> Do not apply excessive cement. Thick cement layers 
                  take longer to cure and may create voids. A thin, even coating provides the 
                  strongest bond.
                </div>
              </div>

              {/* Step 7 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">7</span>
                  <h3 className="text-xl font-bold text-gray-900">Join Pipe and Fitting</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Immediately insert the pipe into the fitting with a <strong>slight 
                  twisting motion (1/4 turn)</strong>. This helps spread cement evenly and 
                  eliminates air pockets. Push firmly until the pipe reaches the marked 
                  insertion depth.
                </p>
                <p className="text-gray-700">
                  <strong>Hold the joint firmly for 30 seconds</strong> to prevent push-out. 
                  As solvent cement reacts with the pipe material, it creates gas pressure 
                  that can push the pipe out if not held.
                </p>
              </div>

              {/* Step 8 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">8</span>
                  <h3 className="text-xl font-bold text-gray-900">Wipe Excess Cement</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Immediately wipe away any excess cement from around the joint using a clean 
                  rag. A properly made joint will show a small, even bead of cement around 
                  the entire circumference.
                </p>
                <div className="bg-gray-50 p-4 rounded text-sm">
                  <strong>Quality Check:</strong> Uneven or missing cement bead indicates 
                  insufficient or uneven cement application. Such joints may fail under 
                  pressure and should be cut out and remade.
                </div>
              </div>

              {/* Step 9 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">9</span>
                  <h3 className="text-xl font-bold text-gray-900">Allow Proper Curing Time</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Do not move, stress, or disturb the joint during initial curing. Minimum 
                  handling time is 15-20 minutes. <strong>Allow 24 hours before pressure 
                  testing</strong> or putting the system into service.
                </p>
                
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-3 py-2 text-left">Temperature</th>
                        <th className="border px-3 py-2 text-left">Minimum Cure Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-3 py-2">Above 15°C (60°F)</td><td className="border px-3 py-2">24 hours</td></tr>
                      <tr><td className="border px-3 py-2">5-15°C (40-60°F)</td><td className="border px-3 py-2">48 hours</td></tr>
                      <tr><td className="border px-3 py-2">Below 5°C (40°F)</td><td className="border px-3 py-2">72 hours (not recommended)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 10 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">10</span>
                  <h3 className="text-xl font-bold text-gray-900">Perform Pressure Test</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  After the full curing period, fill the system slowly with water, allowing 
                  air to escape through high points. Visually inspect all joints for any 
                  signs of leakage before pressurizing.
                </p>
                <p className="text-gray-700">
                  Apply test pressure equal to <strong>1.5 times the operating pressure</strong> 
                  and maintain for minimum 2 hours. Inspect all joints carefully. Any pressure 
                  drop indicates a leak that must be located and repaired.
                </p>
              </div>
            </div>
          </section>

          {/* Common Installation Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Common Installation Mistakes to Avoid
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  mistake: 'Insufficient cleaning',
                  consequence: 'Dirt prevents cement bond, causing leaks',
                  solution: 'Clean thoroughly with lint-free cloth',
                },
                {
                  mistake: 'Angled pipe cuts',
                  consequence: 'Reduced contact area, uneven stress',
                  solution: 'Use pipe cutter or cut guide',
                },
                {
                  mistake: 'Too much cement',
                  consequence: 'Slow curing, internal obstruction',
                  solution: 'Apply thin, even layer only',
                },
                {
                  mistake: 'Not holding joint',
                  consequence: 'Pipe pushes out during gas formation',
                  solution: 'Hold firmly for 30 seconds minimum',
                },
                {
                  mistake: 'Moving joint too soon',
                  consequence: 'Weakened bond, micro-cracks',
                  solution: 'Wait 15-20 min before handling',
                },
                {
                  mistake: 'Testing too early',
                  consequence: 'Joint failure under pressure',
                  solution: 'Wait full 24 hours before testing',
                },
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-1">❌ {item.mistake}</h4>
                  <p className="text-sm text-red-700 mb-2">{item.consequence}</p>
                  <p className="text-sm text-green-700">✓ {item.solution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Troubleshooting Joint Failures
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                If a joint fails during pressure testing, it must be cut out and remade. 
                Do not attempt to patch or re-cement existing joints—the solvent cement 
                cannot properly bond to already-reacted surfaces.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Diagnosing Failure Causes:</h3>
              <ul>
                <li><strong>Joint pulled apart:</strong> Insufficient insertion depth or push-out during curing</li>
                <li><strong>Leak at joint edge:</strong> Incomplete cement coverage or contamination</li>
                <li><strong>Cracked fitting:</strong> Excessive cement or forced insertion</li>
                <li><strong>Wet joint interior:</strong> Testing before full cure</li>
              </ul>
              <p>
                When remaking a failed joint, cut back at least 50mm beyond the original 
                joint to ensure you&apos;re working with undamaged, unreacted material.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Summary
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Successful UPVC pipe installation requires attention to detail at every step. 
                The key factors for reliable, leak-free joints are:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <strong>Cleanliness:</strong> All surfaces must be clean and dry
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <strong>Square cuts:</strong> Perpendicular cuts for full contact
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">3.</span>
                  <strong>Correct cement:</strong> Thin, even application to both surfaces
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">4.</span>
                  <strong>Proper assembly:</strong> Quick insertion with twist, hold 30 sec
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">5.</span>
                  <strong>Full curing:</strong> Wait 24 hours before pressure testing
                </li>
              </ul>
            </div>
          </section>

          {/* Related Links */}
          <section className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Technical Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/technical/bs-en-1452-complete-guide" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-blue-600">BS EN 1452 Complete Guide</h3>
                <p className="text-sm text-gray-600">Understanding the UPVC pipe standard</p>
              </a>
              <a href="/technical/upvc-vs-pvc-vs-ppr-comparison" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-blue-600">UPVC vs PVC vs PPR Comparison</h3>
                <p className="text-sm text-gray-600">Choose the right pipe material</p>
              </a>
              <a href="/products/upvc-pipes" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-blue-600">UPVC Pipes Products</h3>
                <p className="text-sm text-gray-600">Browse our BS EN 1452 compliant pipes</p>
              </a>
              <a href="/support/faqs" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-blue-600">Installation FAQs</h3>
                <p className="text-sm text-gray-600">Common installation questions answered</p>
              </a>
            </div>
          </section>
        </div>

        {/* Author Box */}
        <footer className="bg-gray-100 py-8 mt-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                CP
              </div>
              <div>
                <p className="font-semibold text-gray-900">Crown Plastic Pipes Technical Team</p>
                <p className="text-gray-600 text-sm">
                  Industry experts with 35+ years of experience in plastic piping systems. 
                  Certified trainers for solvent cement installation techniques.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
