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
      <Button> Get in touch </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
