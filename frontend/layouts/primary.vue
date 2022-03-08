<template>
  <div class="relative font-body">
    <Header />
    <div class="pt-48 md:pt-64 lg:pt-96">
      <slot />
    </div>
  </div>
</template>

<style scoped>
body {
  -webkit-font-smoothing: antialiased;
}
</style>
