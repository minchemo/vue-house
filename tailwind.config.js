/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        color1: '#FFEC2E', //更換主色
        color2: '#00CBD1' //更換副色
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
}
