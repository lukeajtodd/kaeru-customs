<template>
  <div>
    <div class="aspect-w-9 aspect-h-4 lg:aspect-w-16">
      <video
        class="object-center object-cover w-full h-full"
        id="background-video"
        autoplay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <ProductReel :products="products.data" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: products } = await useFetch(`${config.API_URL}/api/products`);
definePageMeta({
  layout: false,
  title: "Home",
});
</script>
