<script setup>

</script>

<template>
    <div class="container mx-auto py-20">
        <div class="text-center">
            <h2 class="text-[56px] text-center font-bold leading-[82px]">A Journey Into Creative <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#CE7CF5] to-[#5B20FF]">Imaginary Brilliance</span> </h2>
            <p class="text-textColor mt-2 max-w-2xl mx-auto">Textivy AI is a popular platform to transform your text into powerful visuals using modern AI technology that catches the eye.</p>
        </div>
        <div class="grid grid-cols-3 gap-6 mt-12">
           <div v-for=" (item , index) in [1,2,3] " :key="index" class="border border-primaryBorder p-4 rounded-xl bg-[#1E1F23]">
              <img src="../assets/images/creative-card-1.svg" alt="">
              <h5 class="text-lg font-bold py-2">Image Text</h5>
              <p class="text-textColor text-sm">Transforming text into vibrant visual representations is as easy as pie with the modern AI technology of Textivy AI.</p>
           </div>
        </div>
    </div>
</template>

<style scoped>

</style>