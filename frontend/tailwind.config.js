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
          50: "#FAFAFA",
          100: "#F2F2F2",
          200: "#E8E8E8",
          300: "#DBDBDB",
          400: "#D1D1D1",
          500: "#C4C4C4",
          600: "#9E9E9E",
          700: "#757575",
          800: "#4F4F4F",
          900: "#262626",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
