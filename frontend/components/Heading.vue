<template>
  <component :is="tag" v-bind="$attrs" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  tag: String,
  fontStyle: {
    type: String,
    required: false,
    default: "h1",
    validator: (value: string) => ["h1", "h2", "h3", "h4"].includes(value),
  },
  color: {
    type: String,
    required: false,
    default: "text-brand-primary",
  },
});

const classes = computed(() => {
  const styleClasses = {
    h1: "pb-8 text-3xl font-bold tracking-wider font-heading leading-none",
    h2: "pb-6 text-2xl font-bold tracking-wider font-heading leading-none",
    h3: "pb-6 text-xl font-bold leading-none font-heading",
    h4: "pb-4 text-lg font-bold tracking-wider font-heading leading-none",
  };
  return ` ${styleClasses[props.fontStyle]} ${props.color}`;
});
</script>
