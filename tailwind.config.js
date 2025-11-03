/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color1: "#042f75", //更換主色
                color2: "#042f75", //更換副色
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        darkTheme: "light",
    },
}