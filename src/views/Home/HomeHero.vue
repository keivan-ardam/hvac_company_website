<template>
  <section
    class="relative w-full h-[110vh] bg-cover bg-center flex items-center justify-center lg:justify-start px-8 sm:px-16 md:px-28 text-white"
    :style="`background-image: url(${bgImage})`"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-0"
    ></div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-xl mt-10 flex flex-col items-center lg:items-start justify-center lg:justify-left"
    >
      <h1 class="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">
        HVAC Installation Company
      </h1>
      <h1 class="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg">
        NVLV Heating & Cooling llc
      </h1>
      <p class="text-lg sm:text-xl font-medium drop-shadow-md mt-8">
        Our mission at NVLV Heating & Cooling is to provide superior air
        conditioning and heating services to our customers with a commitment to
        quality, innovation, and sustainability. As local HVAC Company Lancaster
        CA, we strive to create comfortable and energy-efficient indoor
        environments for homes and businesses across the region. We are
        dedicated to staying ahead of the curve in our industry, utilizing
        cutting-edge technology and methods to exceed our client’s expectations.
      </p>

      <button
        class="bg-blue-800 px-6 py-2 rounded-lg text-white text-transform: uppercase font-bold font-mono mt-10"
      >
        Schedule Now
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
// Import image from assets
import bgImage from "@/assets/Banner.jpg";
</script>
