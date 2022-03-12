<template>
  <div class="flex items-center">
    <div class="flex items-center">
      <a :href="config.FB_URL" class="hover:text-brand-primary">
        <IconsFacebook class="mr-4 lg:mr-8" />
      </a>
      <a :href="config.INSTA_URL" class="hover:text-brand-primary">
        <IconsInstagram class="mr-4 lg:mr-8" />
      </a>
    </div>
    <div>
      <button
        class="bg-brand-primary hover:bg-brand-primary-600 focus:bg-brand-primary-600 active:bg-brand-primary-600 text-white uppercase font-bold tracking-wider py-2 px-6 rounded"
      >
        Get in touch
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
