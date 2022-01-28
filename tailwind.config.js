module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#5151F4",
          dark: "#00002F",
          light: "#CDCDF1",
          medium: "#11117F",
        },
        black: "#232323",
      },
      fontFamily: {
        "bely-display": ["Bely-Display-Regular", "sans-serif"],
        "space-mono": ["Space Mono", "monospace"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
