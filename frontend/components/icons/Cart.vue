<template>
  <IconWrapper :width="width" :height="height">
    <path
      fill="currentColor"
      d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"
    ></path>
  </IconWrapper>
</template>

<script lang="ts" setup>
import IconWrapper from "./_IconWrapper.vue";

const { width, height } = withDefaults(
  defineProps<{
    width?: number;
    height?: number;
  }>(),
  {
    width: 24,
    height: 24,
  }
);
</script>
