<template>
  <footer class="py-12 md:py-18 lg:py-24 text-white bg-brand-primary-800">
    <Container class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-6">
        <Logo class="text-lg md:text-xl lg:text-2xl text-white" />
        <p class="py-4 md:w-4/5">For all your clothing customisation needs.</p>
      </div>
      <!-- <div class="col-span-12 lg:col-span-3 flex items-center">
        <ul>
          <li class="list-none">
            <nuxt-link
              class="hover:underline active:underline focus:underline"
              to="/"
              >Home</nuxt-link
            >
          </li>
          <li class="list-none">
            <nuxt-link
              class="hover:underline active:underline focus:underline"
              to="/"
              >About</nuxt-link
            >
          </li>
          <li class="list-none">
            <nuxt-link
              class="hover:underline active:underline focus:underline"
              to="/shop"
              >Shop</nuxt-link
            >
          </li>
          <li class="list-none">
            <nuxt-link
              class="hover:underline active:underline focus:underline"
              to="/contact"
              >Contact</nuxt-link
            >
          </li>
        </ul>
      </div> -->
      <div
        class="col-span-12 md:col-span-12 lg:col-span-6 flex justify-end mt-12 lg:mt-0"
      >
        <SocialContact />
      </div>
    </Container>
  </footer>
</template>
