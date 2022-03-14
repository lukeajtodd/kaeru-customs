<template>
  <Container>
    <div class="grid grid-cols-12 my-12 md:my-24 gap-4">
      <div
        class="col-span-12 md:col-span-6 lg:col-span-3"
        v-for="product in products"
      >
        <CardsProduct :product="product" :key="product.id" />
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
defineProps<{
  products: any;
}>();
</script>
