const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          blue: colors.blue,
          purple: colors.purple,
        },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
