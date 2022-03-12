<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--ri"
    :width="width"
    :height="height"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <slot />
  </svg>
</template>

<script lang="ts" setup>
const { width, height } = withDefaults(
  defineProps<{
    width: number;
    height: number;
  }>(),
  {
    width: 24,
    height: 24,
  }
);
</script>
