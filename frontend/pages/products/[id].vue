<template>
  <div>
    <Container class="grid grid-cols-12 gap-2 pt-32 pb-24 md:gap-12">
      <div class="col-span-12 md:col-span-6 lg:col-span-5">
        <ProductImage :product="product.data" />
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-7">
        <Heading tag="h2" font-style="h1" color="text-black">{{
          product.data.attributes.Title
        }}</Heading>
        <p class="mb-6 text-xl text-brand-grey-600">
          {{ formattedPrice }}
        </p>
        <p class="pr-12 mb-6 text-brand-grey-400">
          {{ product.data.attributes.Description }}
        </p>

        <div class="flex items-center">
          <Button
            class="snipcart-add-item"
            :data-item-id="product.data.id"
            :data-item-price="product.data.attributes.Price"
            :data-item-description="product.data.attributes.Description"
            :data-item-name="product.data.attributes.Title"
            :data-item-image="imageUrl"
            >Add to basket</Button
          >
        </div>
      </div>
    </Container>
    <Container>
      <Heading tag="h3" font-style="h3" color="text-black"
        >Related products</Heading
      >
      <ProductReel :products="products.data" />
    </Container>
  </div>
</template>

<script setup>
import { getImageUrl } from "@/helpers/imageUrl";

const route = useRoute();
const config = useRuntimeConfig();

const { data: products } = await useFetch(
  `${config.API_URL}/api/products?populate=*`
);

const { data: product } = await useFetch(
  `${config.API_URL}/api/products/${route.params.id}?populate=*`
);

console.log(product.value);

const imageUrl = computed(() => {
  return `${config.API_URL}${
    getImageUrl(product.value.data.attributes.Image.data)[0].default
  }`;
});

const formattedPrice = useCurrency(product.value.data.attributes.Price);
</script>
