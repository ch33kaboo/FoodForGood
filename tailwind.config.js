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
      },
      animation: {
        blob: "blob 7s infinite",
        chkbo: "chkbo 6s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        chkbo: {
          "0%": {
            color: "rgb(34 197 94 / var(--tw-border-opacity))"
          },
          "25%": {
            color: "rgb(94 234 212 / var(--tw-bg-opacity))"
          },
          "50%": {
            color: "rgb(34 197 94 / var(--tw-bg-opacity))"
          },
          "75%": {
            color: "rgb(252 211 77 / var(--tw-bg-opacity))"
          },
          "100%": {
            color: "rgb(34 197 94 / var(--tw-border-opacity))"
          }
        }
      }
    },
  },
  plugins: [],
}
