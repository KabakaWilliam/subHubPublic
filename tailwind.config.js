module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-xy": "gradient-xy 20s ease-in-out infinite",
        "gradient-xy-fast": "gradient-xy 25s ease-in-out infinite",
        "gradient-xy-faster": "gradient-xy 30s ease-in-out infinite",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "700% 700%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "700% 700%",
            "background-position": "right center",
          },
        },
      },
      fontFamily: {
        sans: ["sofia-pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
