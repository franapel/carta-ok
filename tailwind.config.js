const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 2s ease-in-out',
        grow: 'growDown .3s ease-in-out forwards'
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        growDown: {
          '0%' : {
            transform: 'scaleY(0)',
          },
          '80%' : {
            transform: 'scaleY(1.1)',
          },
          '100%' : {
            transform: 'scaleY(1)',
          }
        }
      }),
    },
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  variants: {
    extend: {},
  },
  plugins: [],
}
