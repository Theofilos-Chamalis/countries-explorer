/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2020px",
      },
      colors: {
        transparent: "transparent",
        "dm-dark-blue": "hsl(209, 23%, 22%)",
        "dm-very-dark-blue": "hsl(207, 26%, 17%)",
        "lm-very-dark-blue": "hsl(200, 15%, 8%)",
        "lm-dark-gray": "hsl(0, 0%, 52%)",
        "lm-very-light-gray": "hsl(0, 0%, 98%)",
        "dmlm-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "nunito-light": ["NunitoLight", "sans-serif"],
        "nunito-regular": ["NunitoRegular", "sans-serif"],
        "nunito-bold": ["NunitoBold", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
