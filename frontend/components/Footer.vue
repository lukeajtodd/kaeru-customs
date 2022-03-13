<template>
  <footer class="py-12 md:py-24 text-white bg-brand-primary-800">
    <Container class="grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-6">
        <Logo class="text-lg md:text-xl lg:text-2xl" />
        <p class="py-4 md:w-4/5">For all your clothing customisation needs.</p>
      </div>
      <div class="col-span-12 md:col-span-3">
        <Heading tag="h4" font-style="h4" color="text-white">Menu</Heading>
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
      </div>
      <div class="col-span-12 md:col-span-3">
        <Heading tag="h4" font-style="h4" color="text-white">Contact</Heading>
        <p>The Wick Factory,</p>
        <p>Flame Lane,</p>
        <p>Waxiton,</p>
        <p>BN1 5TB</p>
        <p>United Kingdom</p>
      </div>
    </Container>
  </footer>
</template>
