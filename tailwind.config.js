/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          ...defaultTheme.colors.gray,
          main: '#fafafa',
        },
      },
    },
  },
  plugins: [],
}
