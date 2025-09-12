/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color1: "#52777D", //更換主色
                color2: "#52777D", //更換副色
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        darkTheme: "light",
    },
}