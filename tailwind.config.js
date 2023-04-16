const { Oxygen, Bebas_Neue } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
        phone: { min: "360px", max: "479px" },
        tablet: { min: "480px", max: "768px" },
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
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
