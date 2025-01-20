/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "25": "rgba(255, 255, 255, 0.03);",
        "50": "#06071B",
        "100": "#000",
      },
      white: {
        "50": "rgba(255, 255, 255, 0.64);",
        "100": "#fff",
        "200": "#6D98FF",
      },
      blue: {
        "50": "#20BFF7",
        "100": "#4776E6",
      },
      red: {
        "50": "#FF4880",
        "100": "#D93C3C",
      },
      yellow: {
        "100": "#FEAE37",
      },
      purple: {
        "100": "#8E54E9",
      },
      feature: {
        "50": "#4776E6",
        "100": "#8E54E9",
        "200": "#FF4880",
        "300": "#F7931A",
      }
    },
    fontFamily: {
      'inter': ["'Inter', sans-serif"],
      'bricolage': ["'Bricolage Grotesque', serif"],
    }
  },
  plugins: [],
}
