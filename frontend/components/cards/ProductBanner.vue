<template>
  <div class="grid grid-cols-12 items-center bg-white p-6">
    <div class="relative col-span-6 xl:col-span-4 aspect-w-1 aspect-h-1">
      <div
        v-if="instantBuy"
        class="bg-brand-primary h-10 absolute z-10 top-0 left-0 flex items-center justify-end px-4"
      >
        <span class="uppercase text-white font-bold">Instant Buy</span>
      </div>
      <img class="object-center object-cover" :src="imageUrl" :alt="title" />
    </div>
    <div class="pl-6 col-span-6 xl:col-span-8">
      <Heading tag="h2" font-style="h3" color="text-black">{{ title }}</Heading>
      <p>{{ description }}</p>
      <data class="text-md font-bold my-4 block" :value="price">{{
        formattedPrice
      }}</data>
      <template v-if="instantBuy">
        <Button weight="medium" class="flex items-center">
          <IconsCart class="mr-2" />
          <span>Add to basket</span>
        </Button>
      </template>
      <template v-else>
        <Button>Contact</Button>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

interface ImageItem {
  id: number;
  attributes: {
    url: string;
    formats: {
      small?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      large?: {
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
    InstantBuy: boolean;
    Image: {
      data: ImageItem[];
    };
  };
}

const props = defineProps<{
  product: Product;
}>();

const getImageUrl = (imageData) => {
  return imageData.map(({ attributes }) => {
    if (attributes.format) {
      return {
        small: attributes.format?.small.url,
        medium: attributes.format?.medium.url,
        large: attributes.format?.large.url,
      };
    }

    return {
      default: attributes.url,
    };
  });
};

const config = useRuntimeConfig();
// TODO Rework to allow for multiple images and selecting what is ideal
const imageUrl = computed(() => {
  return `${config.API_URL}${
    getImageUrl(props.product.attributes.Image.data)[0].default
  }`;
});

const {
  Title: title,
  Description: description,
  Price: price,
  InstantBuy: instantBuy,
} = toRefs(props.product.attributes);

const formattedPrice = useCurrency(price.value);
</script>
