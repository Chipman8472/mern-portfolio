/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          bg: '#0b1020',
          bg2: '#0f1a3a',
          card: 'rgba(255,255,255,0.06)',
          stroke: 'rgba(255,255,255,0.12)',
          accent: '#7aa2ff',
          accent2: '#a78bfa'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(122,162,255,0.35)'
      }
    },
  },
  plugins: [],
}
