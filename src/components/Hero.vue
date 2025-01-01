<script setup>
import heroBg from '../assets/images/hero/hero-gradient-bg.svg';
</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat h-screen w-full flex justify-center items-center" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="container text-white">
      <h1 class="text-7xl text-center font-bold leading-[82px]">Revolutionize Your Visuals with <br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#CE7CF5] to-[#5B20FF]">AI Generated Images</span></h1>

        <div class="mx-auto p-2 mt-10 flex items-center border-2 border-primaryBorder rounded-md bg-transparent w-full max-w-3xl">
      <input
        type="text"
        placeholder="Enter your prompt"
        class="flex-grow p-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
      <button
        class="px-8 py-2 bg-primaryColor hover:bg-primaryColorHover text-white rounded-md transition"
      >
        Generate
      </button>
    </div>
    </div>
  </div>
</template>

<style scoped></style>
