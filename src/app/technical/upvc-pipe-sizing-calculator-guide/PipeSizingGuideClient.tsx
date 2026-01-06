'use client';

// UPVC Pipe Sizing Calculator Guide Client Component
// Phase 2 AEO - Featured Snippet Optimization
// 1000+ word comprehensive pipe sizing guide with formulas and tables

import { useState } from 'react';
import { TechnicalGuideSchema } from '@/components/schemas/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schemas/BreadcrumbSchema';
import { ClusterFAQSchema } from '@/components/schemas/FAQPageSchema';
import { installationMaintenanceFAQs } from '@/config/faqs';

const breadcrumbItems = [
  { name: 'Home', url: 'https://crownplasticuae.com' },
  { name: 'Technical Guides', url: 'https://crownplasticuae.com/technical' },
  { name: 'Engineering', url: 'https://crownplasticuae.com/technical/engineering' },
  { name: 'Pipe Sizing Guide', url: 'https://crownplasticuae.com/technical/upvc-pipe-sizing-calculator-guide' },
];

// Get sizing-related FAQs
const sizingFAQs = installationMaintenanceFAQs.filter(
  faq => faq.question.toLowerCase().includes('size') || 
         faq.question.toLowerCase().includes('diameter')
);

// Pipe sizing data table
const pipeSizingTable = [
  { diameter: 20, wallPN10: 1.5, wallPN16: 1.9, flowCapacity: 0.5, maxVelocity: 1.6 },
  { diameter: 25, wallPN10: 1.5, wallPN16: 1.9, flowCapacity: 0.8, maxVelocity: 1.6 },
  { diameter: 32, wallPN10: 1.6, wallPN16: 2.0, flowCapacity: 1.3, maxVelocity: 1.6 },
  { diameter: 40, wallPN10: 1.9, wallPN16: 2.4, flowCapacity: 2.0, maxVelocity: 1.6 },
  { diameter: 50, wallPN10: 2.4, wallPN16: 3.0, flowCapacity: 3.2, maxVelocity: 1.6 },
  { diameter: 63, wallPN10: 3.0, wallPN16: 3.8, flowCapacity: 5.0, maxVelocity: 1.6 },
  { diameter: 75, wallPN10: 3.6, wallPN16: 4.5, flowCapacity: 7.0, maxVelocity: 1.6 },
  { diameter: 90, wallPN10: 4.3, wallPN16: 5.4, flowCapacity: 10.0, maxVelocity: 1.6 },
  { diameter: 110, wallPN10: 5.3, wallPN16: 6.6, flowCapacity: 15.0, maxVelocity: 1.6 },
  { diameter: 125, wallPN10: 6.0, wallPN16: 7.4, flowCapacity: 19.5, maxVelocity: 1.6 },
  { diameter: 140, wallPN10: 6.7, wallPN16: 8.3, flowCapacity: 24.5, maxVelocity: 1.6 },
  { diameter: 160, wallPN10: 7.7, wallPN16: 9.5, flowCapacity: 32.0, maxVelocity: 1.6 },
  { diameter: 200, wallPN10: 9.6, wallPN16: 11.9, flowCapacity: 50.0, maxVelocity: 1.6 },
  { diameter: 250, wallPN10: 11.9, wallPN16: 14.8, flowCapacity: 78.0, maxVelocity: 1.6 },
  { diameter: 315, wallPN10: 15.0, wallPN16: 18.7, flowCapacity: 124.0, maxVelocity: 1.6 },
  { diameter: 400, wallPN10: 19.1, wallPN16: 23.7, flowCapacity: 200.0, maxVelocity: 1.6 },
];

export default function PipeSizingGuideClient() {
  const [flowRate, setFlowRate] = useState<string>('');
  const [calculatedDiameter, setCalculatedDiameter] = useState<number | null>(null);

  // Simple pipe sizing calculator
  const calculatePipeSize = () => {
    const flow = parseFloat(flowRate);
    if (isNaN(flow) || flow <= 0) {
      setCalculatedDiameter(null);
      return;
    }

    // Using velocity = 1.5 m/s as design velocity
    // Q = v * A => A = Q / v => πr² = Q / v => d = 2 * sqrt(Q / (v * π))
    const velocity = 1.5; // m/s design velocity
    const flowM3s = flow / 3600; // Convert m³/h to m³/s
    const area = flowM3s / velocity;
    const diameter = 2 * Math.sqrt(area / Math.PI) * 1000; // Convert to mm

    // Find next standard size
    const standardSizes = [20, 25, 32, 40, 50, 63, 75, 90, 110, 125, 140, 160, 200, 250, 315, 400];
    const nextSize = standardSizes.find(size => size >= diameter) || 400;
    
    setCalculatedDiameter(nextSize);
  };

  return (
    <>
      {/* Schema Markup */}
      <TechnicalGuideSchema
        title="UPVC Pipe Sizing Guide: Formulas, Calculator & Reference Tables"
        description="Complete guide to sizing UPVC pipes for water supply systems. Covers flow rate calculations, velocity requirements, pressure drop analysis, and provides sizing reference tables."
        datePublished="2024-02-01T00:00:00Z"
        dateModified={new Date().toISOString()}
        url="https://crownplasticuae.com/technical/upvc-pipe-sizing-calculator-guide"
        keywords={[
          'pipe sizing',
          'flow rate calculation',
          'UPVC pipe diameter',
          'water pipe sizing',
          'pressure drop',
          'pipe sizing formula',
        ]}
        proficiencyLevel="Intermediate"
        dependencies={['Basic hydraulics knowledge']}
        relatedGuides={[
          {
            title: 'BS EN 1452 Complete Guide',
            url: 'https://crownplasticuae.com/technical/bs-en-1452-complete-guide',
          },
          {
            title: 'UPVC Installation Best Practices',
            url: 'https://crownplasticuae.com/technical/upvc-installation-best-practices',
          },
        ]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ClusterFAQSchema
        faqs={sizingFAQs.slice(0, 5)}
        clusterName="Pipe Sizing FAQs"
        pageUrl="https://crownplasticuae.com/technical/upvc-pipe-sizing-calculator-guide"
      />

      {/* Main Article Content */}
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb Navigation */}
            <nav className="text-sm mb-6 text-purple-200">
              <ol className="flex flex-wrap items-center gap-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li>/</li>
                <li><a href="/technical" className="hover:text-white">Technical Guides</a></li>
                <li>/</li>
                <li className="text-white">Pipe Sizing Guide</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              UPVC Pipe Sizing Guide & Calculator
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Learn how to correctly size UPVC pipes for water supply systems. 
              Includes formulas, reference tables, and a quick sizing calculator.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-purple-700/50 px-3 py-1 rounded-full">
                Updated February 2024
              </span>
              <span className="bg-purple-700/50 px-3 py-1 rounded-full">
                12 min read
              </span>
              <span className="bg-purple-700/50 px-3 py-1 rounded-full">
                Engineering Guide
              </span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Correct pipe sizing is critical for efficient and economical water supply systems. 
              An <strong>undersized pipe</strong> causes excessive pressure drop, noise, and wear, 
              while an <strong>oversized pipe</strong> wastes material and increases costs. This guide 
              provides the formulas, methods, and reference tables needed to size UPVC pipes correctly 
              for any water supply application.
            </p>
          </section>

          {/* Quick Calculator */}
          <section className="bg-purple-50 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-purple-900 mb-4">Quick Pipe Size Calculator</h2>
            <p className="text-gray-600 mb-4">
              Enter your required flow rate to get a recommended pipe diameter based on design velocity of 1.5 m/s.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Flow Rate (m³/hour)
                </label>
                <input
                  type="number"
                  value={flowRate}
                  onChange={(e) => setFlowRate(e.target.value)}
                  placeholder="e.g., 10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={calculatePipeSize}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-medium"
              >
                Calculate
              </button>
            </div>

            {calculatedDiameter && (
              <div className="mt-4 bg-white p-4 rounded-lg border-2 border-purple-200">
                <p className="text-lg">
                  <strong>Recommended Pipe Size:</strong>{' '}
                  <span className="text-2xl font-bold text-purple-600">{calculatedDiameter}mm</span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Based on design velocity of 1.5 m/s. Verify with pressure drop calculations.
                </p>
              </div>
            )}
          </section>

          {/* Table of Contents */}
          <nav className="bg-gray-50 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">In This Guide</h2>
            <ol className="grid md:grid-cols-2 gap-2 text-purple-600">
              <li><a href="#key-concepts" className="hover:underline">1. Key Sizing Concepts</a></li>
              <li><a href="#sizing-formula" className="hover:underline">2. Pipe Sizing Formula</a></li>
              <li><a href="#velocity-guidelines" className="hover:underline">3. Velocity Guidelines</a></li>
              <li><a href="#reference-tables" className="hover:underline">4. Reference Tables</a></li>
              <li><a href="#pressure-drop" className="hover:underline">5. Pressure Drop</a></li>
              <li><a href="#examples" className="hover:underline">6. Sizing Examples</a></li>
            </ol>
          </nav>

          {/* Key Concepts */}
          <section id="key-concepts" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Key Pipe Sizing Concepts
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Pipe sizing involves balancing three primary factors:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-purple-800 mb-2">Flow Rate (Q)</h3>
                  <p className="text-sm text-gray-600">
                    The volume of water passing through the pipe per unit time. Measured in 
                    m³/hour or liters/second.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-purple-800 mb-2">Velocity (v)</h3>
                  <p className="text-sm text-gray-600">
                    The speed of water flow through the pipe. Too high causes noise and wear; 
                    too low allows sediment buildup.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-purple-800 mb-2">Pressure Drop (ΔP)</h3>
                  <p className="text-sm text-gray-600">
                    The loss of pressure as water flows through the pipe. Must stay within 
                    acceptable limits for system operation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sizing Formula */}
          <section id="sizing-formula" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Pipe Sizing Formula
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The fundamental relationship between flow rate, velocity, and pipe diameter is:
              </p>
              
              <div className="bg-gray-900 text-white p-6 rounded-lg my-6 text-center">
                <p className="text-2xl font-mono mb-2">Q = v × A</p>
                <p className="text-lg font-mono mb-4">Q = v × (π × d² / 4)</p>
                <p className="text-sm text-gray-300">
                  Where: Q = Flow rate (m³/s), v = Velocity (m/s), d = Internal diameter (m)
                </p>
              </div>

              <p>Rearranging to solve for diameter:</p>
              
              <div className="bg-gray-900 text-white p-6 rounded-lg my-6 text-center">
                <p className="text-2xl font-mono mb-2">d = √(4Q / πv)</p>
                <p className="text-sm text-gray-300">
                  This gives the minimum internal diameter for the required flow at desired velocity.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Practical Formula (Common Units):</h3>
              <p>For flow rate in m³/hour and diameter in mm:</p>
              
              <div className="bg-purple-100 p-6 rounded-lg my-6 text-center">
                <p className="text-xl font-mono text-purple-900">
                  d(mm) = 18.8 × √(Q(m³/h) / v(m/s))
                </p>
              </div>
            </div>
          </section>

          {/* Velocity Guidelines */}
          <section id="velocity-guidelines" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Recommended Velocity Guidelines
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left">Application</th>
                    <th className="px-4 py-3 text-center">Min Velocity</th>
                    <th className="px-4 py-3 text-center">Recommended</th>
                    <th className="px-4 py-3 text-center">Max Velocity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Municipal Distribution</td>
                    <td className="px-4 py-3 text-center">0.6 m/s</td>
                    <td className="px-4 py-3 text-center bg-purple-50 font-semibold">1.0-1.5 m/s</td>
                    <td className="px-4 py-3 text-center">2.0 m/s</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Building Supply Main</td>
                    <td className="px-4 py-3 text-center">0.6 m/s</td>
                    <td className="px-4 py-3 text-center bg-purple-50 font-semibold">1.5-2.0 m/s</td>
                    <td className="px-4 py-3 text-center">2.5 m/s</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Branch Lines (Residential)</td>
                    <td className="px-4 py-3 text-center">0.5 m/s</td>
                    <td className="px-4 py-3 text-center bg-purple-50 font-semibold">1.0-1.5 m/s</td>
                    <td className="px-4 py-3 text-center">2.4 m/s</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Irrigation Systems</td>
                    <td className="px-4 py-3 text-center">0.5 m/s</td>
                    <td className="px-4 py-3 text-center bg-purple-50 font-semibold">1.5-2.0 m/s</td>
                    <td className="px-4 py-3 text-center">3.0 m/s</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Fire Protection</td>
                    <td className="px-4 py-3 text-center">-</td>
                    <td className="px-4 py-3 text-center bg-purple-50 font-semibold">As per code</td>
                    <td className="px-4 py-3 text-center">3.0-4.5 m/s</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="font-semibold text-yellow-800">Why Velocity Matters:</p>
              <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                <li>• <strong>Below 0.5 m/s:</strong> Sediment settles, water quality degrades</li>
                <li>• <strong>0.6-2.0 m/s:</strong> Optimal range for most applications</li>
                <li>• <strong>Above 2.5 m/s:</strong> Noise increases, pipe wear accelerates</li>
                <li>• <strong>Above 3.0 m/s:</strong> Risk of water hammer, joint stress</li>
              </ul>
            </div>
          </section>

          {/* Reference Tables */}
          <section id="reference-tables" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              UPVC Pipe Sizing Reference Tables
            </h2>
            <p className="text-gray-600 mb-4">
              Flow capacity based on design velocity of 1.6 m/s (typical for distribution systems).
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-3 py-3 text-left">Nominal Diameter (mm)</th>
                    <th className="px-3 py-3 text-center">Wall PN10 (mm)</th>
                    <th className="px-3 py-3 text-center">Wall PN16 (mm)</th>
                    <th className="px-3 py-3 text-center">Flow @ 1.6m/s (m³/h)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pipeSizingTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 font-medium">{row.diameter}</td>
                      <td className="px-3 py-2 text-center">{row.wallPN10}</td>
                      <td className="px-3 py-2 text-center">{row.wallPN16}</td>
                      <td className="px-3 py-2 text-center font-semibold text-purple-600">
                        {row.flowCapacity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pressure Drop */}
          <section id="pressure-drop" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Pressure Drop Considerations
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                After selecting a diameter based on velocity, verify that pressure drop is 
                acceptable. The <strong>Hazen-Williams formula</strong> is commonly used for 
                water systems:
              </p>
              
              <div className="bg-gray-900 text-white p-6 rounded-lg my-6 text-center">
                <p className="text-xl font-mono mb-2">h = 10.67 × L × Q^1.852 / (C^1.852 × d^4.87)</p>
                <p className="text-sm text-gray-300">
                  Where: h = Head loss (m), L = Length (m), Q = Flow (m³/s), C = Roughness (150 for UPVC), d = Diameter (m)
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Acceptable Pressure Drop:</h3>
              <ul>
                <li><strong>Distribution mains:</strong> 1-3 m per 1000m of pipe</li>
                <li><strong>Building risers:</strong> 2-4 m per 1000m</li>
                <li><strong>Branch lines:</strong> Up to 5 m per 1000m</li>
              </ul>
            </div>
          </section>

          {/* Examples */}
          <section id="examples" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Pipe Sizing Examples
            </h2>
            
            <div className="space-y-6">
              {/* Example 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Example 1: Residential Building Main</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Given:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Peak demand: 8 m³/hour</li>
                      <li>• Design velocity: 1.5 m/s</li>
                      <li>• Pressure class: PN16</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Solution:</strong></p>
                    <p className="text-sm">d = 18.8 × √(8/1.5) = 43.4mm</p>
                    <p className="text-sm mt-2 font-semibold text-purple-600">
                      Select: 50mm PN16 UPVC Pipe
                    </p>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Example 2: Irrigation Lateral</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Given:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Flow requirement: 25 m³/hour</li>
                      <li>• Design velocity: 2.0 m/s</li>
                      <li>• Pressure class: PN10</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Solution:</strong></p>
                    <p className="text-sm">d = 18.8 × √(25/2.0) = 66.4mm</p>
                    <p className="text-sm mt-2 font-semibold text-purple-600">
                      Select: 75mm PN10 UPVC Pipe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Summary
            </h2>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Proper pipe sizing ensures efficient water delivery while minimizing costs. 
                Key steps for sizing UPVC pipes:
              </p>
              <ol className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">1.</span>
                  Determine peak flow rate requirement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">2.</span>
                  Select appropriate design velocity (typically 1.0-2.0 m/s)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">3.</span>
                  Calculate minimum diameter using formula
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">4.</span>
                  Select next standard pipe size
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">5.</span>
                  Verify pressure drop is acceptable
                </li>
              </ol>
            </div>
          </section>

          {/* Related Links */}
          <section className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Technical Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/technical/bs-en-1452-complete-guide" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-purple-600">BS EN 1452 Complete Guide</h3>
                <p className="text-sm text-gray-600">UPVC pipe standards and specifications</p>
              </a>
              <a href="/technical/upvc-installation-best-practices" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-purple-600">Installation Best Practices</h3>
                <p className="text-sm text-gray-600">How to install UPVC pipes correctly</p>
              </a>
              <a href="/products/upvc-pipes" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-purple-600">UPVC Products</h3>
                <p className="text-sm text-gray-600">Browse our range of UPVC pipes</p>
              </a>
              <a href="/support/faqs" 
                 className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-purple-600">Technical FAQs</h3>
                <p className="text-sm text-gray-600">Answers to common questions</p>
              </a>
            </div>
          </section>
        </div>

        {/* Author Box */}
        <footer className="bg-gray-100 py-8 mt-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                CP
              </div>
              <div>
                <p className="font-semibold text-gray-900">Crown Plastic Pipes Technical Team</p>
                <p className="text-gray-600 text-sm">
                  Industry experts with 35+ years of experience in hydraulic engineering 
                  and plastic piping systems.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
