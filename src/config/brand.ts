// Brand configuration for Crown Plastic Pipes Factory L.L.C.
export const brand = {
  name: 'Crown Plastic Pipes Factory L.L.C.',
  shortName: 'Crown Plastic Pipes',
  tagline: 'Excellence in Every Pipe',
  description: 'Leading manufacturer of high-quality plastic pipes and fittings in the UAE',
  
  // Colors inspired by the crown logo
  colors: {
    primary: '#0072BC',       // Royal blue
    primaryDark: '#005A96',   // Darker blue for hover states
    primaryLight: '#E8F4FC',  // Light blue for backgrounds
    secondary: '#4DA8DA',     // Lighter blue tint
    secondaryLight: '#F0F8FF', // Very light blue for sections
    accent: '#F4A300',        // Warm gold/orange for CTAs
    accentDark: '#D48E00',    // Darker accent for hover
    white: '#FFFFFF',
    black: '#1A1A1A',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    }
  },
  
  // Typography
  fonts: {
    headings: '"Inter", "Segoe UI", system-ui, sans-serif',
    body: '"Inter", "Segoe UI", system-ui, sans-serif',
  },
  
  // Logo
  logoSrc: '/images/logo.png',
  logoAlt: 'Crown Plastic Pipes Logo',
  
  // Contact info (placeholder)
  contact: {
    phone: '+971 6 534 1234',
    tollFree: '800-CROWN',
    email: 'info@crownplasticpipes.ae',
    address: 'Industrial Area, Sharjah, UAE',
    mapLink: 'https://maps.google.com',
  },
  
  // Social media (placeholder)
  social: {
    linkedin: 'https://linkedin.com/company/crown-plastic-pipes',
    facebook: 'https://facebook.com/crownplasticpipes',
    twitter: 'https://twitter.com/crownpipes',
    youtube: 'https://youtube.com/@crownplasticpipes',
    instagram: 'https://instagram.com/crownplasticpipes',
  },
  
  // Company stats (placeholder)
  stats: {
    yearsExperience: '25+',
    manufacturingUnits: '3',
    productsRange: '500+',
    countriesExport: '20+',
    happyCustomers: '10,000+',
  }
} as const;

export type Brand = typeof brand;
