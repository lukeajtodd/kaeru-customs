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
    <path
      :fill="fill"
      d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"
    ></path>
  </svg>
</template>

<script lang="ts" setup>
const { width, height, fill } = withDefaults(
  defineProps<{
    width: number;
    height: number;
    fill: string;
  }>(),
  {
    width: 24,
    height: 24,
    fill: "currentColor",
  }
);
</script>
