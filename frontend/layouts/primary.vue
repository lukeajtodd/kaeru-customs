<template>
  <div class="relative font-body">
    <Header />
    <div class="pt-48 md:pt-64 lg:pt-96">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

useMeta({
  title: computed(
    () => `Kaeru Customs${route.meta.title ? ` - ${route.meta.title}` : ""}`
  ),
  description:
    route.meta.description ||
    "Custom shoes, boots, clothing and more. All from Kaeru Customs.",
});
</script>

<style scoped>
body {
  -webkit-font-smoothing: antialiased;
}
</style>
