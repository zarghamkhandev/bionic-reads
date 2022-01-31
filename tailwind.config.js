module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       
      colors: {
        our: {
          100: "#F6F3FB",
          200: "#EEEAFA",
          300: "#E2DCF9",
          400: "#CCC0F1",
          500: "#a994e8",
          600: "#886adb",
          700: "#704ecd",
          800: "#5b38b0",
          700: "#503590",
          800: "#442c76",
        },
      },

      backgroundimage: {
        purpledurple: 'linear-gradient(to right bottom, #836bd4, #8972d7, #8f78da, #947fdd, #9a86e0)',
      } 
    },


    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
