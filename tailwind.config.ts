import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#145454',
          foreground: '#FFFFFF',
          50:  '#E6F3F3',
          100: '#B8DEDE',
          200: '#8AC9C9',
          300: '#5CB4B4',
          400: '#2E9F9F',
          500: '#145454',
          600: '#104444',
          700: '#0C3434',
          800: '#082424',
          900: '#041414',
          950: '#020A0A',
        },
        teal: {
          deep:  '#0D4A4A',
          block: '#145454',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E8D59A',
          muted:   '#D4B96E',
          dark:    '#A88228',
        },
        cream: {
          DEFAULT: '#F8F4EC',
          100: '#F3EDE2',
          200: '#E8DFD0',
        },
        'site-text':       '#2D3748',
        'site-text-muted': '#4A5568',
        'site-text-light': '#718096',

        /* shadcn/ui CSS-variable tokens */
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      fontFamily: {
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        arabic:  ['Amiri', 'serif'],
      },
      borderRadius: {
        lg:  'var(--radius)',
        md:  'calc(var(--radius) - 2px)',
        sm:  'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'gold':       '0 4px 20px rgba(201,168,76,0.22)',
        'card':       '0 4px 24px rgba(13,74,74,0.08), 0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px rgba(13,74,74,0.14)',
        'primary':    '0 4px 20px rgba(20,84,84,0.28)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
        'pulse-ring': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.5)' },
          '50%':     { boxShadow: '0 0 0 10px rgba(201,168,76,0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'pulse-ring':     'pulse-ring 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [animate],
};

export default config;
