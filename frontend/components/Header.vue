<template>
  <header class="w-full pt-2 pb-4 md:pb-0">
    <Container
      class="grid items-center w-full grid-cols-12 gap-4 pt-2 pb-4 md:py-8 lg:py-12"
    >
      <div class="col-span-10 md:col-span-6">
        <nuxt-link to="/">
          <Logo class="text-xl md:text-2xl lg:text-3xl" />
        </nuxt-link>
      </div>

      <div class="hidden md:block col-span-6 justify-self-end">
        <SocialContact />
      </div>

      <button
        title="Menu"
        class="col-span-2 inline-flex justify-end ml-4"
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
    </Container>
    <hr class="border-2 border-brand-primary mb-4 lg:mb-8" />
    <Container class="grid items-center grid-cols-12 md:pb-4 lg:pb-8">
      <div class="col-span-6">
        <NavBar class="hidden md:block" />
      </div>
      <div class="flex items-center justify-end col-span-6">
        <CartInfo />
      </div>
    </Container>
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
