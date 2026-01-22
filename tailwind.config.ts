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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-xy': 'gradient-xy 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right bottom',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgba(0, 114, 188, 0.5), 0 0 20px rgba(0, 114, 188, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 114, 188, 0.8), 0 0 40px rgba(0, 114, 188, 0.5)' },
        },
      },
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
