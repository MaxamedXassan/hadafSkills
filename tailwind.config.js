/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'rgb(22, 172, 74)',
          light: '#e9f8ee',
          dark: '#0a361d',
          hover: '#139640',
        },
      },
    },
  },
  plugins: [],
};
