import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '474px' },
      // => @media (max-width: 474px) { ... }
    },

    extend: {
      colors: {
        border: 'hsl(237, 13%, 74%)',
        input: 'hsl(240, 14%, 91%)',
        ring: '#0D133B',
        background: '#F3F4F5',
        foreground: '#0D133B',

        primary: {
          DEFAULT: '#0D133B',
          foreground: '#ffffff',
        },

        secondary: {
          DEFAULT: '#23C586',
          foreground: '#ffffff',
        },

        destructive: {
          DEFAULT: '#EC0B62',
          foreground: '#ffffff',
        },

        muted: {
          DEFAULT: '#67688B',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#F2CE14',
          foreground: '#0D133B',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0D133B',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0D133B',
        },

        white: '#ffffff',
        black: '#111111',

        surface: {
          100: '#f9f9fd',
          200: '#F3F4F5',
          300: '#B3B4C5',
          400: '#67688B',
        },

        warning: {
          100: '#FEFAE7',
          200: '#FBF1B3',
          300: '#F7E166',
          400: '#F2CE14',
        },

        success: {
          100: '#d3f3e7',
          200: '#a7e8cf',
          300: '#7bdcb6',
          400: '#4fd19e',
          500: '#23c586',
          600: '#1c9e6b',
          700: '#157650',
          800: '#0e4f36',
          900: '#07271b',
        },
        danger: {
          100: '#fbcee0',
          200: '#f79dc0',
          300: '#f46da1',
          400: '#f03c81',
          500: '#ec0b62',
          600: '#bd094e',
          700: '#8e073b',
          800: '#5e0427',
          900: '#2f0214',
        },
        info: {
          100: '#ccf2ff',
          200: '#99e5ff',
          300: '#66d9ff',
          400: '#33ccff',
          500: '#00bfff',
          600: '#0099cc',
          700: '#007399',
          800: '#004c66',
          900: '#002633',
        },
      },
      fontFamily: {
        sans: ['Berlin Sans FB', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
