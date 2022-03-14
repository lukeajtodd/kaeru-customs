<template>
  <NuxtLayout name="primary">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3"></div>
      <div class="col-span-9">
        <div v-for="product in products.data">
          <CardsProductBanner :product="product" :key="product.id" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: products } = await useFetch(
  `${config.API_URL}/api/products?populate=*`
);
console.log(products.value.data);
definePageMeta({
  layout: false,
  title: "Shop",
});
</script>
