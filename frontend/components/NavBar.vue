<template>
  <nav>
    <ul
      class="flex flex-col items-center justify-start gap-6 text-center md:flex-row"
    >
      <li
        class="text-base font-bold tracking-tighter transition-colors text-brand-grey-800 font-heading hover:text-brand-primary"
      >
        <nuxt-link to="/">Shop</nuxt-link>
      </li>
      <li
        class="text-base font-bold tracking-tighter transition-colors text-brand-grey-800 font-heading hover:text-brand-primary"
      >
        <nuxt-link to="/">About</nuxt-link>
      </li>
      <li
        class="text-base font-bold tracking-tighter transition-colors text-brand-grey-800 font-heading hover:text-brand-primary"
      >
        <nuxt-link to="/">FAQs</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-brand-primary;
}
</style>
