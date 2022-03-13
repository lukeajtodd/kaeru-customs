<template>
  <div class="grid grid-cols-12 items-center bg-white p-6">
    <img class="col-span-4" :src="imageUrl" :alt="title" />
    <div class="pl-6 col-span-8">
      <Heading tag="h2" font-style="h3" color="text-black">{{ title }}</Heading>
      <p>{{ description }}</p>
      <data class="text-md font-bold my-4 block" :value="price">{{
        formattedPrice
      }}</data>
      <Button weight="medium">Add to basket</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ImageItem {
  id: number;
  attributes: {
    formats: {
      small: {
        url: string;
      };
    };
  };
}

interface Product {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Price: number;
    Image: {
      data: ImageItem[];
    };
  };
}

const props = defineProps<{
  product: Product;
}>();

const config = useRuntimeConfig();
const imageUrl = computed(() => {
  return `${config.API_URL}${props.product.attributes.Image.data[0].attributes.formats.small.url}`;
});

const {
  Title: title,
  Description: description,
  Price: price,
} = props.product.attributes;

const formattedPrice = useCurrency(price);
</script>
