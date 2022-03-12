<template>
  <header class="fixed z-50 w-full py-2">
    <div
      class="max-w-page grid items-center w-full grid-cols-12 px-4 pt-2 pb-4 md:py-8 lg:py-12 mx-auto"
    >
      <div class="col-span-10 md:col-span-6">
        <nuxt-link to="/">
          <Logo class="text-xl md:text-2xl lg:text-3xl" />
        </nuxt-link>
      </div>

      <div class="hidden md:block col-span-6 justify-self-end pr-12">
        <SocialContact />
      </div>

      <button
        title="Menu"
        class="col-span-2 inline-flex justify-end p-1 ml-4"
        @click="mobileMenuOpen = true"
      >
        <svg
          class="w-6 h-6 md:hidden text-black m-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <hr class="border-2 border-brand-primary mb-4 lg:mb-8" />
    <div
      class="w-full max-w-page grid items-center grid-cols-12 px-4 md:pb-4 lg:pb-8 mx-auto"
    >
      <div class="col-span-6">
        <NavBar class="hidden md:block" />
      </div>
      <div class="flex items-center justify-end col-span-6">
        <CartInfo />
      </div>
    </div>
    <transition name="menu">
      <MobileMenu v-if="mobileMenuOpen" @close="mobileMenuOpen = false" />
    </transition>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

<style scoped>
header {
  background: rgba(255, 255, 255, 1);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
