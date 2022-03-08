<template>
  <nav>
    <ul
      class="flex flex-col items-center justify-start gap-6 text-center md:flex-row"
    >
      <li
        class="text-base font-regular transition-colors text-black font-heading hover:text-brand-primary"
      >
        <nuxt-link to="/shop">Shop</nuxt-link>
      </li>
      <li
        class="text-base font-regular transition-colors text-black font-heading hover:text-brand-primary"
      >
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li
        class="text-base font-regular transition-colors text-black font-heading hover:text-brand-primary"
      >
        <nuxt-link to="/faqs">FAQs</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-brand-primary font-bold;
}
</style>
