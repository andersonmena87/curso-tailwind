/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'body-pattern': 'url(../img/pattern.png);'
      }),
      colors: {
        'blue-light': '#37bcf9',
        'blue-dark': '#0370b9'
      }
    },
  },
  plugins: [],
}

