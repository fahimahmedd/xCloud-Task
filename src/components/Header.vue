<script setup>
import { ref } from 'vue';

// Navigation list
const navList = ref([
  { title: 'About Us' },
  { title: 'Integration' },
  { title: 'Pricing' },
  { title: 'Blog' },
  { title: 'Contact Us' }
]);
</script>

<template>
  <header class="absolute top-0 left-0 w-full header bg-transparent py-4">
    <div class="container mx-auto flex justify-between items-center px-4 md:px-8">
      <a href="#">
        <img src="../assets/images/logo/logo.svg" alt="Logo" class="h-8">
      </a>

      <ul class="flex items-center gap-6">
        <li
          v-for="(item, index) in navList"
          :key="index"
          class="text-textColor hover:text-white transition"
        >
          <a href="#">{{ item.title }}</a>
        </li>
      </ul>

      <div class="flex gap-4">
        <button
          class="px-4 py-2 bg-transparent text-white border-2 border-primaryBorder rounded-md hover:bg-primaryColor transition"
        >
          Join Community
        </button>
        <button
          class="px-4 py-2 bg-[#ffffff33] border-2 border-primaryBorder text-white rounded-md hover:bg-primaryColor transition"
        >
          Launch App
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
