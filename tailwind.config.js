module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      // Primary
      "pale-blue": "hsl(225, 100%, 94%)",
      "bright-blue": "hsl(245, 75%, 52%)",

      // Neutral
      "very-pale-blue": "hsl(225, 100%, 98%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",

      white: "#ffffff",
    },
    fontWeight: {
      normal: "500",
      bold: "700",
      bolder: "900",
    },
    extend: {},
  },
  plugins: [],
};
