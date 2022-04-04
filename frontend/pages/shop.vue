<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-3"></div>
    <div class="col-span-9">
      <div v-for="product in products.data">
        <CardsProductBanner :product="product" :key="product.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { data: products } = await useFetch(
  `${config.API_URL}/api/products?populate=*`
);

definePageMeta({
  layout: false,
  title: "Shop",
});
</script>
