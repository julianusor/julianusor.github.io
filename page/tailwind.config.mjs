/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm paper → espresso scale. Keeps the same `ink-*` API so no
        // markup has to change, but moves away from the cold blue-grey
        // "terminal" feel toward something that feels like home.
        ink: {
          50: '#FBF8F3',
          100: '#F4EDE2',
          200: '#E7D9C4',
          300: '#D3BE9E',
          400: '#B89E77',
          500: '#98805D',
          600: '#72614A',
          700: '#4B4034',
          800: '#2E2820',
          900: '#201B15',
          950: '#161310',
        },
        accent: {
          DEFAULT: '#B4532A',
          soft: '#D98E5F',
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
