/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '640px'}
      },
      backgroundImage: theme => ({
        'body-pattern': 'url(../img/pattern.png);'
      }),
      colors: {
        'blue-light': '#37bcf9',
        'blue-dark': '#0370b9'
      },
      animation: {
        'spin-low': 'spin 2s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear'
      },
      keyframes: {
        fromBellow: {
          '0%': { transform: 'translateY(0%)'},
          '50%': { transform: 'translateY(200%)'},
          '100%': { transform: 'translateY(0%)'}
        },
        fromRight: {
          '0%': { transform: 'translateX(200%)'},
          '100%': { transform: 'translateX(0%)'}
        }
      }
    },
  },
  plugins: [],
}

