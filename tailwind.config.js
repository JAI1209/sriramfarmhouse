/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: { DEFAULT: '#14130F', deep: '#0B0A08', light: '#1E1C16' },
        ivory: '#F3EEE4',
        stone: '#C9C2B2',
        gold: { DEFAULT: '#C6A566', light: '#E0C68C', dim: '#8C7548' },
        moss: '#2B3A2E',
        line: 'rgba(243,238,228,0.12)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        label: ['"Space Grotesk"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}

