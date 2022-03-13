<template>
  <NuxtLayout name="primary">
    <div class="aspect-w-9 aspect-h-4 lg:aspect-w-16">
      <video
        class="object-center object-cover w-full h-full"
        id="background-video"
        autoplay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <Container>
      <div class="grid grid-cols-12 my-12 md:my-24 gap-4">
        <div
          class="col-span-12 md:col-span-6 lg:col-span-3"
          v-for="product in products.data"
        >
          <CardsProduct :product="product" :key="product.id" />
        </div>
      </div>
    </Container>
  </NuxtLayout>
</template>

<!-- <template>
  <NuxtLayout name="primary">
    <section
      class="relative mb-20 border-b-4 md:mb-10 header border-brand-beige"
    >
      <div class="relative z-20 h-full header-content">
        <div class="absolute flex flex-col justify-center p-8 mx-auto hero-box">
          <div class="relative px-6 py-8 bg-white rounded-lg drop-shadow-2xl">
            <Heading tag="h3" font-style="h3">Smelly candles</Heading>
            <Heading tag="h2" font-style="h2">Only the sickest wicks</Heading>
            <p class="pb-4 pr-4 text-brand-gray font-body">
              If you’re like us and can’t get enough of burning things in your
              own home, pick a sick wick and
              <span class="font-bold"
                >feed your burning habbit safely with added benifit of smelling
                delicious.</span
              >
            </p>
            <Btn class="absolute md:-right-3 md:-bottom-3">Shop Now</Btn>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-28">
      <Container>
        <div class="w-full mx-auto mb-12 text-center md:w-2/3 lg:w-1/3">
          <Heading tag="h2" font-style="h3">Our Candles</Heading>
          <Heading tag="h3" font-style="h2" class="mb-2"
            >Show me the sick wicks</Heading
          >
          <p>
            All our candles our hand made and 100% verified to satisfy any
            pyromaniac’s itch to burn things in a safe way.
          </p>
        </div>
        <div class="flex justify-center mt-10">
          <Btn theme="secondary">View all the sick wicks</Btn>
        </div>
      </Container>
    </section>
  </NuxtLayout>
</template> -->

<script setup>
const { data: products } = await useFetch("http://localhost:1337/api/products");
definePageMeta({
  layout: false,
  title: "Home",
});
</script>

<style scoped>
.header {
  height: 600px;
}

@screen md {
  .hero-box {
    left: 10%;
    top: 175px;
    width: 485px;
  }
}
@screen md {
  .header {
    height: 700px;
  }
}

@screen md {
  .home-head-image {
    top: -110px;
    height: 770px;
    width: 100%;
  }
}

.hero-box {
  bottom: -50px;
  left: 0px;
  width: 100%;
}

@screen md {
  .hero-box {
    left: 10%;
    top: 100px;
    width: 485px;
  }
}
</style>
