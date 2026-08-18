/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#14130F',
          deep: '#0B0A08',
          light: '#1E1C16',
          muted: '#2A2721',
        },
        ivory: {
          DEFAULT: '#FAF7F2',
          light: '#FFFDF9',
          cream: '#F3EEE4',
          sand: '#EDE4D4',
        },
        stone: {
          DEFAULT: '#C9C2B2',
          light: '#E6E1D6',
          dark: '#7D7565',
        },
        gold: {
          DEFAULT: '#C6A566',
          light: '#E0C68C',
          dim: '#8C7548',
          rich: '#B59453',
        },
        moss: {
          DEFAULT: '#1B2E23',
          light: '#2B3A2E',
          deep: '#0E1C14',
          accent: '#3E5643',
        },
        line: 'rgba(243,238,228,0.12)',
        'line-dark': 'rgba(20,19,15,0.08)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Fraunces', 'serif'],
        display: ['Fraunces', '"Cormorant Garamond"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        label: ['"Space Grotesk"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(11, 10, 8, 0.25)',
        'gold-glow': '0 0 30px rgba(198, 165, 102, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}


