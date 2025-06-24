<template>
  <div class="relative">
    <AppHeader />
    <!-- Main Content -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "./components/AppHeader.vue";
</script>
