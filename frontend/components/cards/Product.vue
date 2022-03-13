<template>
  <nuxt-link
    :to="`/products/${product.id}`"
    class="block bg-white shadow-xl hover:shadow-2xl transition-shadow duration-200 ease-in-out p-6 rounded"
  >
    <Heading tag="h2" font-style="h4" color="text-black">{{ title }}</Heading>
    <p>{{ description }}</p>
    <div class="flex justify-between items-center gap-4 mt-4">
      <data class="font-bold" :value="price">{{ formattedPrice }}</data>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
interface Product {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Price: number;
  };
}

const props = defineProps<{
  product: Product;
}>();

// const config = useRuntimeConfig();
// const imageUrl = computed(() => {
//   return `${config.API_URL}${props.product.attributes.Image.data.attributes.formats.medium.url}`;
// });

const {
  Title: title,
  Description: description,
  Price: price,
} = props.product.attributes;

const formattedPrice = useCurrency(price);
</script>
