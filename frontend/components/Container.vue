<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="container max-w-page px-4 mx-auto"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    tag?: string;
  }>(),
  {
    tag: "div",
  }
);
</script>
