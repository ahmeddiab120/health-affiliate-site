
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './products/*.html',
    './disclaimer.html',
    './privacy.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#0f3d2e',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'Segoe UI', 'Tahoma', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: 0.4, boxShadow: '0 0 20px rgba(34,197,94,0.3)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(34,197,94,0.6)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
