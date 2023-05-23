/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        bold: ['bold', 'sans-serif'],
        boldoblique: ['boldoblique', 'sans-serif'],
        book: ['book', 'sans-serif'],
        bookoblique: ['bookoblique', 'sans-serif'],
        light: ['light', 'sans-serif'],
        lightoblique: ['lightoblique', 'sans-serif'],
        medium: ['medium', 'sans-serif'],
        mediumoblique: ['mediumoblique', 'sans-serif'],
        semibold: ['semibold', 'sans-serif'],
        semiboldoblique: ['semiboldoblique', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

