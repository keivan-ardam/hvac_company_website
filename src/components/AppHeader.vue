<template>
  <!-- Mobile Schedule Button -->
  <div class="w-full p-2 lg:hidden">
    <button
      class="w-full bg-blue-800 px-1 py-2 rounded-sm text-white uppercase font-bold font-mono"
    >
      Schedule Now
    </button>
  </div>

  <!-- Header -->
  <header
    class="w-full lg:w-[85vw] flex flex-col lg:flex-row justify-between lg:items-center p-1 sticky top-0 lg:fixed lg:top-10 lg:left-1/2 transform lg:-translate-x-1/2 z-50 bg-white lg:shadow-md lg:border lg:rounded-lg"
  >
    <!-- Mobile Hamburger Button -->
    <div class="flex justify-between items-center px-4 py-2 lg:hidden">
      <span class="text-lg font-bold">MENU</span>
      <button @click="isMobileMenuOpen = !isMobileMenuOpen">
        <i
          :class="['fas', isMobileMenuOpen ? 'fa-times' : 'fa-bars']"
          class="text-xl text-gray-700"
        ></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="dropdown">
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden flex flex-col space-y-2 px-4 pb-4 transition-all duration-300 ease-in-out"
      >
        <ul>
          <li
            v-for="item in menu"
            :key="item.id"
            class="text-gray-800 font-semibold text-base py-2 border-b"
          >
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleItem(item.id)"
            >
              <span>{{ item.label }}</span>
              <span v-if="item.children">
                <i
                  class="fas"
                  :class="{
                    'fa-chevron-down': openItemId !== item.id,
                    'fa-chevron-up': openItemId === item.id,
                  }"
                ></i>
              </span>
            </div>

            <!-- Animated Dropdown -->
            <transition name="dropdown">
              <ul
                v-show="item.children && openItemId === item.id"
                class="pl-4 pt-2 text-sm text-gray-600 overflow-hidden"
              >
                <li v-for="child in item.children" :key="child.id" class="py-1">
                  {{ child.label }}
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </transition>

    <!-- Desktop Menu -->
    <nav class="hidden lg:block">
      <ul
        class="flex space-x-6 text-gray-800 font-semibold text-base px-4 py-6"
      >
        <li v-for="item in menu" :key="item.id" class="relative group">
          <div class="flex flex-col">
            <!-- Trigger -->
            <div
              class="flex items-center gap-1.5 hover:text-cold cursor-pointer"
            >
              {{ item.label }}
              <i
                v-if="item.children"
                class="fas fa-caret-down transition-transform duration-300"
              ></i>
            </div>

            <!-- Dropdown -->
            <div
              v-if="item.children"
              class="absolute top-full left-0 p-2 bg-slate-800 rounded-md shadow-lg z-50 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out delay-150"
            >
              <ul>
                <li
                  v-for="child in item.children"
                  :key="child.id"
                  class="px-4 py-3 text-sm text-gray-100 hover:bg-cold hover:text-white cursor-pointer whitespace-nowrap"
                >
                  {{ child.label }}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <div
      class="hidden lg:block relative scale-125 -m-4 z-10 p-2 bg-white rounded-md shadow-md"
    >
      <img
        :src="Logo"
        alt="Description"
        class="w-32 h-20 object-contain rounded-xl"
      />
    </div>

    <!-- Desktop Button -->
    <button
      class="hidden lg:block mx-4 bg-blue-800 px-6 py-2 rounded-lg text-white uppercase font-bold font-mono"
    >
      Schedule Now
    </button>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Logo from "@/assets/Logo.jpg";

interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

const isMobileMenuOpen = ref(true); // assuming mobile menu is open for testing
const openItemId = ref<string | null>(null);

const toggleItem = (id: string) => {
  openItemId.value = openItemId.value === id ? null : id;
};

const menu: MenuItem[] = [
  {
    id: "services",
    label: "Our Services",
    children: [
      { id: "ac-repair", label: "Air Conditioning Repair CA" },
      { id: "heating-repair", label: "Heating Repair Services & Replacement" },
      { id: "heat-pump", label: "Heat Pump Repair & Replacement" },
    ],
  },
  { id: "shop", label: "Shop" },
  { id: "work", label: "Our Work" },
  {
    id: "offers",
    label: "Offers",
    children: [
      { id: "ac-offer", label: "Air Conditioning Repair CA" },
      { id: "heat-offer", label: "Heating Repair Services & Replacement" },
    ],
  },
  { id: "contact", label: "Contact Us" },
];
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}
.dropdown-enter-to,
.dropdown-leave-from {
  max-height: 500px; /* adjust as needed */
  opacity: 1;
}
</style>
