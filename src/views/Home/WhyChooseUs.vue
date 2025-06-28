<template>
  <div class="max-w-[85vw] mx-auto px-4 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12">
      <!-- Why Choose Us Section -->
      <section class="w-full">
        <h2
          class="text-3xl font-semibold font-jost mb-6 pb-2 border-b-2 border-gray-200"
        >
          Why Choose Us?
        </h2>
        <div class="">
          <p class="text-gray-700 leading-relaxed">
            At NVLV Heating and Cooling LLC, we pride ourselves on delivering
            exceptional quality and service to our clients. Our highly skilled
            <span class="font-semibold font-jost">HVAC contractors</span>
            are committed to ensuring that your heating and cooling needs are
            met with the utmost care and attention to detail.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4">
            We believe that our clients deserve nothing less than the best, and
            that's why we use only the highest quality products and cutting-edge
            technology to keep your home or business comfortable all year round.
            With our extensive experience and industry-leading expertise, you
            can trust us to provide the reliable and efficient service you need.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4 font-medium">
            Choose our company for all your
            <span class="font-jost">HVAC installation services</span> and
            experience the difference we can make for you.
          </p>
        </div>
      </section>
      <!-- What to Expect Section -->
      <section class="w-full">
        <h2
          class="text-3xl font-semibold font-jost mb-6 pb-2 border-b-2 border-gray-200"
        >
          What to Expect?
        </h2>
        <div class="">
          <p class="text-gray-700 leading-relaxed">
            As a
            <span class="font-semibold font-jost">top HVAC company</span>, we
            strive to provide our customers with top-quality residential and
            commercial HVAC services. Including
            <span class="font-medium"
              >HVAC installation, HVAC repair, and HVAC replacement
              services</span
            >, our team of experienced technicians is dedicated to ensuring that
            your <span class="font-medium">best HVAC system for home</span> is
            running efficiently and effectively.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4">
            We use only the latest technology and industry-leading techniques to
            diagnose and repair any issues with your air conditioning system.
            Our commitment to customer satisfaction means that we will work with
            you every step of the way to ensure that your needs are met.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4 font-medium">
            With our
            <span class="font-jost">HVAC installation company</span>, you can
            expect prompt and reliable air conditioning service that will keep
            you cool and comfortable, no matter the weather outside.
          </p>
        </div>
      </section>
      <!-- Our Mission Section -->
      <section class="lg:col-span-2">
        <h2
          class="text-3xl font-semibold font-jost mb-6 pb-2 border-b-2 border-gray-200"
        >
          Our Mission
        </h2>
        <div class="lg:flex lg:flex-nowrap lg:flex-row-reverse gap-8">
          <div class="w-full h-full">
            <img
              src="@/assets/placeholder.jpg"
              alt="NVLV Heating and Cooling LLC"
              class="w-full h-64 object-cover"
            />
          </div>
          <div>
            <p class="text-gray-700 leading-relaxed">
              Our mission at NVLV Heating and Cooling LLC is to provide superior
              air conditioning and heating services to our customers with a
              commitment to quality, innovation, and sustainability. As a team,
              we strive to create comfortable and energy-efficient indoor
              environments for homes and businesses.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
              We are dedicated to staying ahead of the curve in our industry,
              utilizing cutting-edge technology and methods to exceed our
              client's expectations. Our highly-trained
              <span class="font-medium">local HVAC contractors</span> work
              tirelessly to ensure that every job is completed with the utmost
              attention to detail and integrity.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4 font-medium">
              We are proud to be a trusted partner in our community, delivering
              exceptional service with a focus on customer satisfaction.
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- Header Section with Image -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NvlvHeatingContent",
  methods: {
    contactUs(): void {
      // Implement contact logic here
      console.log("Contact button clicked");
      // You might want to route to a contact page or open a modal
    },
  },
});
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
