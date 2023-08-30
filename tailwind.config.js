/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
          'updown': 'updown 3s linear infinite',
      },
      colors: {
        primaryBg: 'rgba(0, 0, 0, 0.562)',
        secondaryBg: 'rgba(20, 20, 20, 0.514)',
        primary: '#0055d0',
        secondary: '#1c82ad',
      },
      fontFamily: {
        'body': ['Quicksand', 'sans-serif'],
        'title': ['Alegreya Sans SC', 'sans-serif'],
      },
      keyframes: {
        updown: {
          '0%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(10px)',
          },
          '100%': {
            transform: 'translateY(-10px)',
          }
        }
      },
      screens: {
        'xs': '420px',
      },
    },
  },
  plugins: [],
}