import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// ─────────────────────────────────────────────────────────────
// RTL Plugin - Enables rtl: and ltr: variants
// ─────────────────────────────────────────────────────────────
// Usage: Apply rtl: or ltr: prefix to any utility class
// Examples:
//   - rtl:mr-4 ltr:ml-4  (margin on logical start)
//   - rtl:text-right ltr:text-left
//   - rtl:flex-row-reverse (flip flex direction in RTL)
// ─────────────────────────────────────────────────────────────
const rtlPlugin = plugin(({ addVariant }) => {
  addVariant('rtl', '[dir="rtl"] &');
  addVariant('ltr', '[dir="ltr"] &');
});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Crown Plastic Pipes brand colors
        primary: {
          DEFAULT: '#0072BC',
          dark: '#005A96',
          light: '#E8F4FC',
          50: '#E8F4FC',
          100: '#D1E9F9',
          200: '#A3D3F3',
          300: '#75BDED',
          400: '#47A7E7',
          500: '#0072BC',
          600: '#005A96',
          700: '#004370',
          800: '#002B4A',
          900: '#001424',
        },
        secondary: {
          DEFAULT: '#4DA8DA',
          light: '#F0F8FF',
        },
        accent: {
          DEFAULT: '#F4A300',
          dark: '#D48E00',
          light: '#FFF3D6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [rtlPlugin],
};
export default config;
