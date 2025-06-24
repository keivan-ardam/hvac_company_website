<template>
  <header
    class="flex justify-between items-center p-1 fixed top-10 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-md w-[95vw] border rounded-xl"
  >
    <nav>
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

    <button
      class="mx-4 bg-blue-800 px-6 py-2 rounded-lg text-white text-transform: uppercase font-bold font-mono"
    >
      Schedule Now
    </button>
  </header>
</template>
<script lang="ts" setup>
interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

const menu: MenuItem[] = [
  {
    id: "services",
    label: "Our Services",
    children: [
      { id: "ac-repair", label: "Air Conditioning Repair CA" },
      { id: "heating-repair", label: "Heating Repair Services & Replacement" },
      { id: "heat-pump", label: "Heat Pump Repair & Replacement" },
      { id: "residential-hvac", label: "Residential HVAC Repair" },
      { id: "commercial-hvac", label: "Commercial HVAC Repair" },
      { id: "maintenance", label: "HVAC Maintenance" },
      { id: "financing", label: "Air Conditioning Financing & Warranty" },
    ],
  },
  { id: "shop", label: "Shop" },
  { id: "work", label: "Our Work" },
  { id: "about", label: "About Us" },
  { id: "blog", label: "Blog" },
  {
    id: "offers",
    label: "Offers",
    children: [
      { id: "ac-offer", label: "Air Conditioning Repair CA" },
      { id: "heat-offer", label: "Heating Repair Services & Replacement" },
      { id: "pump-offer", label: "Heat Pump Repair & Replacement" },
    ],
  },
  { id: "contact", label: "Contact Us" },
];
</script>
