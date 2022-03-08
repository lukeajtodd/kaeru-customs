<template>
  <div class="relative font-body">
    <Header />
    <div class="pt-48 lg:pt-64">
      <slot />
    </div>
  </div>
</template>

<style scoped>
body {
  -webkit-font-smoothing: antialiased;
}
</style>
