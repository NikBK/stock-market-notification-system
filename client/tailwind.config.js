/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        reduceTime: 'reduceTime 5s linear forwards 2s',
        slideDown: 'slideDown 7s linear'
      },
      keyframes: {
        reduceTime: {
          '100%': { width: '0%' }
        },
        slideDown: {
          '20%': { top: '20%' },
          '100%': { top: '20%' }
        }
      }
    },
  },
  plugins: [],
}

