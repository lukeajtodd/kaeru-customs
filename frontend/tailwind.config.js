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
      maxWidth: {
        page: "91.25rem",
      },
      colors: {
        "brand-primary": {
          DEFAULT: "#259314",
          50: "#E3FBE0",
          100: "#CBF7C5",
          200: "#94EE86",
          300: "#60E74B",
          400: "#34CE1C",
          500: "#259314",
          600: "#1D7510",
          700: "#175A0C",
          800: "#0F3A08",
          900: "#081F04",
        },
        "brand-secondary": {
          DEFAULT: "#C4C4C4",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
