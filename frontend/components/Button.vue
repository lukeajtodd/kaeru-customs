<template>
  <button v-bind="$attrs" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  theme: {
    type: String,
    required: false,
    default: "primary",
    validator: (value: string) => ["primary", "secondary"].includes(value),
  },
  weight: {
    type: String,
    required: false,
    default: "bold",
    validator: (value: string) =>
      ["bold", "light", "medium", "regular"].includes(value),
  },
});

const classes = computed(() => {
  const themeClasses = {
    primary:
      "bg-brand-primary hover:bg-brand-primary-600 focus:bg-brand-primary-600 active:bg-brand-primary-600 text-white uppercase tracking-widest py-3 px-6 rounded",
    secondary:
      "bg-brand-secondary hover:bg-brand-secondary-600 focus:bg-brand-secondary-600 active:bg-brand-secondary-600 text-white uppercase tracking-widest py-2 px-6 rounded",
  };

  return themeClasses[props.theme] + ` font-${props.weight}`;
});
</script>
