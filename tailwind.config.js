const { Oxygen, Bebas_Neue } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mywhite: "#eeeeee",
        myblack: "#222831",
        myblack2: "#393e46",
        myteal: "#00ADB5",
      },
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
      },
      screens: {
        phone: { max: "479px" },
        tablet: { min: "480px", max: "768px" },
        // => @media (min-width: 640px) { ... }

        laptop: { min: "767px", max: "1024px" },
        // => @media (min-width: 1024px) { ... }

        desktop: { min: "1025px" },
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

/*
 'xs': {'min': '320px', 'max': '479px'},
        'sm': {'min': '480px', 'max': '639px'},
        'md': {'min': '640px', 'max': '767px'},
        'lg': {'min': '768px', 'max': '1023px'},
        'xl': {'min': '1024px', 'max': '1279px'},
 */
