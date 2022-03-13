<template>
  <nuxt-link :to="`/products/${product.id}`">
    <Heading tag="h2" font-style="h4" color="text-black">{{
      product.attributes.Title
    }}</Heading>
    <p>{{ product.attributes.Description }}</p>
  </nuxt-link>
</template>

<script lang="ts" setup>
interface Product {
  id: number;
  attributes: {
    Title: string;
    Description: string;
  };
}

defineProps<{
  product: Product;
}>();
</script>
