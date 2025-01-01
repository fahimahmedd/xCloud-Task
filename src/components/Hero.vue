<script setup>
import heroBg from '../assets/images/hero/hero-gradient-bg.svg';
import heroBottomBg from '../assets/images/hero/hero-bottom-gradiyent.svg';
import cardImg1 from '../assets/images/hero/hero-card-1.svg';
import cardImg2 from '../assets/images/hero/hero-card-2.svg';
import cardImg3 from '../assets/images/hero/hero-card-3.svg';

import HeroCard from './HeroCard.vue';
</script>

<template>
    <div class="bg-cover bg-center bg-no-repeat pt-[200px] w-full flex justify-center items-center"
        :style="{ backgroundImage: `url(${heroBg})` }">
        <div class="container text-white">
            <h1 class="text-7xl text-center font-bold leading-[82px]">Revolutionize Your Visuals with <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#CE7CF5] to-[#5B20FF]">AI Generated
                    Images</span>
            </h1>

            <div
                class="mx-auto p-2 mt-10 flex items-center border-2 border-primaryBorder rounded-md bg-transparent w-full max-w-3xl">
                <input type="text" placeholder="Enter your prompt"
                    class=" flex-grow p-2 bg-transparent outline-none text-white placeholder-gray-400" />
                <button class="px-8 py-2 bg-primaryColor hover:bg-primaryColorHover text-white rounded-md transition">
                    Generate
                </button>
            </div>
        </div>
    </div>

    <div class="container mx-auto flex justify-center mt-16 pb-20">
        <div class="flex gap-5 items-center">
            <div class="flex gap-5 flex-col">
                <HeroCard title="Image Blending" :img="cardImg1" />
                <HeroCard title="2D Game Asset" :img="cardImg2" />
            </div>
            <div class="flex gap-5 flex-col">
                <HeroCard title="Imagination" :img="cardImg3" />
                <HeroCard title="Image Blending" :img="cardImg1" />
                <HeroCard title="AI Canvas" :img="cardImg2" />
            </div>
            <div class="flex gap-5 flex-col">
                <HeroCard title="Image Blending" :img="cardImg1" />
                <HeroCard title="AI Canvas" :img="cardImg2" />
                <HeroCard title="Image Blending" :img="cardImg3" />
            </div>
            <div class="flex gap-5 flex-col">
                <HeroCard title="Image Blending" :img="cardImg2" />
                <HeroCard title="2D Game Asset" :img="cardImg3" />
                <HeroCard title="Image Blending" :img="cardImg1" />
            </div>
            <div class="flex gap-5 flex-col">
                <HeroCard title="Image Blending" :img="cardImg1" />
                <HeroCard title="2D Game Asset" :img="cardImg3" />
            </div>
        </div>
    </div>

    <div class="bg-cover bg-center bg-no-repeat py-[80px] flex justify-center items-center"
        :style="{ backgroundImage: `url(${heroBottomBg})` }"></div>


</template>

<style scoped></style>
