import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["tailwindcss/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  meta: {
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        href: "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@300;400;500;600;700&display=swap",
        rel: "stylesheet",
      },
      { rel: "preconnect", href: "https://app.snipcart.com" },
      { rel: "preconnect", href: "https://cdn.snipcart.com" },
      {
        rel: "stylesheet",
        href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css",
      },
    ],
    script: [
      {
        src: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js",
        async: true,
      },
    ],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    FB_URL: process.env.FB_URL,
    INSTA_URL: process.env.INSTA_URL,
  },
});
