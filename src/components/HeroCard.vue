<script setup>
defineProps({
    title: String,
    img: String,
});
</script>

<template>
    <div class="inline-block border border-primaryBorder rounded-xl">
        <div class="p-2 flex justify-center items-center">
            <img :src="img" :alt="title" />
        </div>
        <div class="bg-[#f7f6f710] py-2 px-3 text-center">
            <div class="font-medium text-sm">{{ title }}</div>
        </div>
    </div>
</template>

<style scoped></style>
