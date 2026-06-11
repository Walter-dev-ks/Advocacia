import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#070B14',
          light: '#111827',
        },
        secondary: '#CBD5E1',
        accent: {
          DEFAULT: '#C99A55',
          hover: '#A97836',
        },
        background: '#080D18',
        foreground: '#F8FAFC',
        muted: '#334155',
        surface: '#111827',
        'surface-strong': '#1F2937',
      },
      fontFamily: {
        serif: ['var(--font-eb-garamond)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
