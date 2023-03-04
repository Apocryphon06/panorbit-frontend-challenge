/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ptSansRegular: ['PTSans Regular'],
        ptSansBold: ['PTSans Bold'],
      },
      colors: {
        purple: '#5e3bc8',
        inkBlue: '#3A58C8',
        primaryBlue: '#2C65C8',
        lightGray:'#f6f6f6',
      },
    },
  },
  plugins: [],
}