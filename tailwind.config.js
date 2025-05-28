/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#66bfbf',
        secondary: '#2e8687',
        dark: '#0F172B',
      },
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'simplifica': ['Simplifica', 'sans-serif'],
        'open-sans-condensed': ['"Open Sans Condensed"', 'sans-serif'],
        'amatic': ['Amatic SC', 'cursive'],
      },
    },
  },
  plugins: [],
} 