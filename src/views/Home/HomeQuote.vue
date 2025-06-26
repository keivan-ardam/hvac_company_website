<template>
  <section class="px-4 lg:px-0 bg-custom-blue lg:bg-white">
    <!-- Overlay -->

    <div
      class="w-full lg:max-w-md mx-auto p-6 bg-white rounded-lg shadow-md lg:absolute top-[85vh] right-10 z-10 -translate-y-16 lg:translate-y-0"
    >
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        Request a Free Quote
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1"
            >Name</label
          >
          <input
            v-model="formData.name"
            type="text"
            id="name"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            for="phone"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Phone Number</label
          >
          <input
            v-model="formData.phone"
            type="tel"
            id="phone"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            for="address"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Address</label
          >
          <input
            v-model="formData.address"
            type="text"
            id="address"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            for="service"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Select Service ?</label
          >
          <select
            v-model="formData.service"
            id="service"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled selected>Select a service</option>
            <option value="HVAC">HVAC</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            for="message"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Message</label
          >
          <textarea
            v-model="formData.message"
            id="message"
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              v-model="formData.consent"
              id="consent"
              type="checkbox"
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="consent" class="font-medium text-gray-700">
              By checking this box, I consent to receive marketing and
              promotional texts, calls, and emails from or on behalf of Aric.
              Air and its affiliates using an automated system or auto dialer
              for any purpose, including HVAC, plumbing, and electrical products
              and services. Consent is not a condition of purchase, and I can
              opt-out at any time. Opt-out at any by testing STOF. Text HELP for
              Help. Meg frequency varies, Meg & Data rates may apply. Frivacy
              Policy.
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          GET A QUOTE
        </button>
      </form>

      <div class="mt-8 pt-6 border-t border-gray-200">
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          Contact Information
        </h3>
        <div class="space-y-2">
          <p class="flex items-center text-gray-600">
            <svg
              class="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            Hotline:
            <a href="tel:16615501364" class="ml-1 text-blue-600 hover:underline"
              >1-661-550-1364</a
            >
          </p>
          <p class="flex items-center text-gray-600">
            <svg
              class="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Email:
            <a
              href="mailto:office@aorticairav.com"
              class="ml-1 text-blue-600 hover:underline"
              >office@aorticairav.com</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface FormData {
  name: string;
  phone: string;
  address: string;
  service: string;
  message: string;
  consent: boolean;
}

export default defineComponent({
  name: "QuoteForm",
  setup() {
    const formData = reactive<FormData>({
      name: "",
      phone: "",
      address: "",
      service: "",
      message: "",
      consent: false,
    });

    const handleSubmit = () => {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      alert("Thank you for your request! We will contact you soon.");

      // Reset form after submission
      formData.name = "";
      formData.phone = "";
      formData.address = "";
      formData.service = "";
      formData.message = "";
      formData.consent = false;
    };

    return {
      formData,
      handleSubmit,
    };
  },
});
</script>
