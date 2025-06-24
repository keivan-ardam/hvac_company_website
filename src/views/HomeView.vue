<template>
  <section
    class="relative w-full h-[110vh] bg-cover bg-center flex items-center px-8 sm:px-16 md:px-24 text-white"
    :style="`background-image: url(${bgImage})`"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-0"
    ></div>

    <!-- Content -->
    <div class="relative z-10 max-w-2xl">
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
        HVAC Installation Company
      </h1>
      <h1 class="text-2xl sm:text-3xl font-extrabold mb-4 drop-shadow-lg">
        NVLV Heating & Cooling llc
      </h1>
      <p class="text-lg sm:text-xl font-medium drop-shadow-md">
        Our mission at Arctic Air is to provide superior air conditioning and
        heating services to our customers with a commitment to quality,
        innovation, and sustainability. As local HVAC Company Lancaster CA, we
        strive to create comfortable and energy-efficient indoor environments
        for homes and businesses across the region. We are dedicated to staying
        ahead of the curve in our industry, utilizing cutting-edge technology
        and methods to exceed our client’s expectations.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Import image from assets
import bgImage from "../assets/Banner.jpg";
</script>
