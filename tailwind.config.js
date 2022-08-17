/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "vazir" : ["Vazirmatn", "serif"]
      },
      keyframes : {
        show : {
          "0%" : { opacity : "0", transform : "scaleX(0.1)" },
          "100%" : { opacity : "1", transform : "scaleX(1)" }
        }
      },
      animation : {
        show : "show .3s ease"
      }
    },
  },
  plugins: [],
}