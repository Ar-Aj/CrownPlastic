import { Metadata } from 'next';
import { PageHeader } from '@/components/common';
import { brand } from '@/config/brand';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Crown Plastic Pipes Factory L.L.C. website.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Last updated: December 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              {brand.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to 
              protecting your personal data. This privacy policy explains how we collect, use, and 
              safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Contact information (name, email, phone number, company name)</li>
              <li>Inquiry details and messages submitted through our contact forms</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (pages visited, time spent on site)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our products and services</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal 
              data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to access, correct, or delete your personal data. To exercise these 
              rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: <a href={`mailto:${brand.contact.email}`} className="text-primary hover:underline">{brand.contact.email}</a>
            </p>
            <p className="text-gray-600">
              Address: {brand.contact.address}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
