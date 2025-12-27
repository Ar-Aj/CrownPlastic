import { Metadata } from 'next';
import { PageHeader, ContactForm, ComingSoon } from '@/components/common';
import { brand } from '@/config/brand';
import { isComingSoon } from '@/config/maintenance';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Crown Plastic Pipes for inquiries, quotes, and technical support.',
};

// Route slug for Coming Soon check
const ROUTE_SLUG = 'contact-us';

export default function ContactPage() {
  // Check if this page should show Coming Soon
  if (isComingSoon(ROUTE_SLUG)) {
    return (
      <ComingSoon
        title="Contact Us"
        subtitle="Our contact form is coming soon. In the meantime, reach us at info@crownplasticpipes.ae"
      />
    );
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, quotes, and technical support."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">{brand.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${brand.contact.phone}`} className="text-gray-600 hover:text-primary transition-colors">
                      {brand.contact.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Toll Free: {brand.contact.tollFree}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${brand.contact.email}`} className="text-gray-600 hover:text-primary transition-colors">
                      {brand.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Friday - Saturday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-48 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-gray-400">Map Location</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="careers" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Department Contacts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { dept: 'Sales & Enquiries', email: 'sales@crownplasticpipes.ae', icon: '📞' },
              { dept: 'Technical Support', email: 'technical@crownplasticpipes.ae', icon: '🔧' },
              { dept: 'Careers', email: 'careers@crownplasticpipes.ae', icon: '💼' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.dept}</h3>
                <a href={`mailto:${item.email}`} className="text-primary hover:underline">
                  {item.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
