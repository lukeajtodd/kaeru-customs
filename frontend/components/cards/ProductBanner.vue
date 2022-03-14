<template>
  <div class="grid grid-cols-12 items-center bg-white p-6">
    <ProductImage :product="product" :imageUrl="imageUrl" />
    <div class="pl-6 col-span-6 xl:col-span-8">
      <Heading tag="h2" font-style="h3" color="text-black">{{ title }}</Heading>
      <p>{{ description }}</p>
      <data class="text-md font-bold my-4 block" :value="price">{{
        formattedPrice
      }}</data>
      <template v-if="instantBuy">
        <Button
          class="flex items-center snipcart-add-item"
          :data-item-id="product.id"
          :data-item-price="product.attributes.Price"
          :data-item-description="product.attributes.Description"
          :data-item-name="product.attributes.Title"
          :data-item-image="imageUrl"
          weight="medium"
        >
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
import { getImageUrl } from "@/helpers/imageUrl";
import type { Product } from "@/types/Product";

const props = defineProps<{
  product: Product;
}>();

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
