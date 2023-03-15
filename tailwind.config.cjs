/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Overpass, sans-serif",
      },
      fontSize: {
        "heading-large": "28px",
        "heading-medium": "15px",
        "rating-medium": "16px",
        "rating-large": "24px",
        "body-medium": "15px",
        "body-large": "24px",
      },
      colors: {
        primary: "#FC7614",
        "gradient-1": {
          from: "#232A34",
          to: "#181E27",
        },
        blue: {
          dark: "#262E38",
          "very-dark": "#131518",
        },
        grey: {
          medium: "#7C8798",
          light: "#969FAD",
        },
      },
    },
  },
  plugins: [],
};
