import { Metadata } from 'next';
import { PageHeader, ContactForm, ComingSoon } from '@/components/common';
import { brand } from '@/config/brand';
import { isComingSoon } from '@/config/maintenance';

export const metadata: Metadata = {
  title: 'Contact Crown Plastic Pipes Sharjah | UPVC PPR HDPE UAE | +971 6 543 6781',
  description: 'Sharjah Industrial Area No. 6. ISO 9001:2015 certified UPVC/PPR/HDPE pipes. Tel: +971 6 543 6781 | Fax: +971 6 543 6798 | info@crownplasticuae.com',
};

// Route slug for Coming Soon check
const ROUTE_SLUG = 'contact-us';

export default function ContactPage() {
  // Check if this page should show Coming Soon
  if (isComingSoon(ROUTE_SLUG)) {
    return (
      <ComingSoon
        title="Contact Us"
        subtitle="Our contact form is coming soon. In the meantime, reach us at info@crownplasticuae.com"
      />
    );
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Sharjah's trusted pipe manufacturer since 1995. 5,000+ products for GCC projects."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
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
                    <h3 className="font-semibold text-gray-900 mb-1">Factory Address</h3>
                    <p className="text-gray-900 font-medium">Crown Plastic Pipes Factory L.L.C.</p>
                    <p className="text-gray-600">{brand.contact.address}</p>
                    <p className="text-gray-600">{brand.contact.poBox}</p>
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
                    <a href={`tel:${brand.contact.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-primary transition-colors block">
                      {brand.contact.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Fax: {brand.contact.fax}</p>
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
                    <a href={`mailto:${brand.contact.email}`} className="text-gray-600 hover:text-primary transition-colors block">
                      {brand.contact.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Website: {brand.contact.website}</p>
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
                    <p className="text-gray-600">Sunday-Thursday: 8:00 AM - 6:00 PM GST</p>
                    <p className="text-gray-600">Friday-Saturday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map with WhatsApp */}
              <div className="mt-8 space-y-4">
                <a
                  href={brand.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-48 bg-gray-100 rounded-xl overflow-hidden hover:opacity-90 transition-opacity relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 flex flex-col items-center justify-center">
                    <svg className="w-12 h-12 text-primary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-primary font-medium">View on Google Maps</span>
                    <span className="text-xs text-gray-600 mt-1">Get Directions</span>
                  </div>
                </a>
                
                <a
                  href={`https://wa.me/${brand.contact.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </a>
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
              { dept: 'Sales & Enquiries', email: 'sales@crownplasticuae.com', icon: '📞' },
              { dept: 'Technical Support', email: 'technical@crownplasticuae.com', icon: '🔧' },
              { dept: 'Careers', email: 'careers@crownplasticuae.com', icon: '💼' },
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
