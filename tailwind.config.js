/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50:  '#FDFCFA',
          100: '#F7F4EF',
          200: '#EDE9E2',
          300: '#E0DBD2',
          400: '#C8C2B8',
        },
        ink: {
          DEFAULT: '#0D0D0C',
          secondary: '#3D3D3A',
          muted: '#8A8A85',
        },
        teal: {
          light:  '#E1F5EE',
          mid:    '#9FE1CB',
          DEFAULT:'#1D9E75',
          dark:   '#0F6E56',
        },
      },
      fontFamily: {
        sans:  ['Syne', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
      borderWidth: {
        '0.5': '0.5px',
      },
    },
  },
  plugins: [],
}
