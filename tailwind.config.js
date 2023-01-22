/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: 'rgba(0, 0, 0, 0.562)',
        secondaryBg: 'rgba(20, 20, 20, 0.514)',
        primary: '#0083c99a',
      },
    },
  },
  plugins: [],
}