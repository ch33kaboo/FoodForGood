/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script'],
        overpass: ['Overpass']
      },
      scale: {
        102: '1.02'
      }
    },
  },
  plugins: [],
}
