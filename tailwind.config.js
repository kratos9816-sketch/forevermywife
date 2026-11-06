/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          night: '#040B08',
          deep: '#081711',
          velvet: '#0E241B',
          pine: '#143327',
          moss: '#1B4232',
          card: 'rgba(11, 28, 20, 0.75)',
        },
        cream: {
          milk: '#FFFDF9',
          light: '#FBF7EE',
          ivory: '#F4ECE1',
          warm: '#EBE0CF',
          soft: '#DFD2BD',
          parchment: '#F7F1E6',
        },
        sage: {
          mist: '#C4D6CD',
          soft: '#9EB8AB',
          eucalyptus: '#7A9A8B',
          deep: '#577969',
          dark: '#3D5B4D',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatRev 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'spin-very-slow': 'spin 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'cream-glow': '0 0 25px rgba(244, 236, 225, 0.35)',
        'cream-glow-lg': '0 0 50px rgba(244, 236, 225, 0.45)',
        'sage-glow': '0 0 30px rgba(158, 184, 171, 0.3)',
        'forest-deep': '0 20px 50px rgba(4, 11, 8, 0.85)',
      }
    },
  },
  plugins: [],
}
