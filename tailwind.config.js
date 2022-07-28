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
        103: '1.03'
      }
    },
  },
  plugins: [],
}
