<template>
  <NuxtLayout name="default">
    <div hidden id="snipcart" :data-api-key="config.SNIPCART_KEY" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
</script>

<style>
.snipcart-modal__container {
  z-index: 100;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Abril Fatface";
  color: #000;
}
</style>
