/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#E59BE9",
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626C7F",
        "light-bluish": "#ABC1E1",
        "light-greyish": "#F4F6FA",
        white: "#FFFFFF",
        green: "#26D782",
        red: "#EE5454",
      },
    },
  },
  plugins: [],
};
