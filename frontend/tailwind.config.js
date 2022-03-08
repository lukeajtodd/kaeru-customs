module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  mode: "jit",
  theme: {
    fontSize: {
      // Augmented Fourth Scale
      "3xl": "5.653rem",
      "2xl": "3.998rem",
      xl: "2.827rem",
      lg: "1.999rem",
      md: "1.414rem",
      base: "1rem",
      sm: "0.707rem",
    },
    extend: {
      colors: {
        "brand-primary": {
          DEFAULT: "#259314",
        },
        "brand-secondary": {
          DEFAULT: "#C4C4C4",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
