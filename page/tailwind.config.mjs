/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F6F7F9',
          100: '#ECEEF1',
          200: '#DCE0E5',
          300: '#B9BFC8',
          400: '#8A929D',
          500: '#616973',
          600: '#454B54',
          700: '#2C3037',
          800: '#1B1E22',
          900: '#111316',
          950: '#08090A',
        },
        accent: {
          DEFAULT: '#1652F0',
          soft: '#4C7DFF',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [typography],
}
