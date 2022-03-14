<template>
  <div class="relative col-span-6 xl:col-span-4 aspect-w-1 aspect-h-1">
    <div
      v-if="instantBuy"
      class="bg-brand-primary h-10 absolute z-10 top-0 left-0 flex items-center justify-end px-4"
    >
      <span class="uppercase text-white font-bold">Instant Buy</span>
    </div>
    <img class="object-center object-cover" :src="imageSrc" :alt="title" />
  </div>
</template>

<script lang="ts" setup>
import { getImageUrl } from "@/helpers/imageUrl";
import type { Product } from "@/types/Product";

const props = defineProps<{
  product: Product;
  imageUrl?: string;
}>();

const { InstantBuy: instantBuy, Title: title } = props.product.attributes;

const config = useRuntimeConfig();
const imageSrc = computed(
  () =>
    props.imageUrl ||
    `${config.API_URL}${
      getImageUrl(props.product.attributes.Image.data)[0].default
    }`
);
</script>
