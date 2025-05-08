<script setup>
import { defineProps } from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

defineProps({ slides: Array })
</script>
<template>
    <vueper-slides lazy lazy-load-on-drag class="no-shadow" :infinite="false" :bullets="false">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :content="slide.content" class="carousel-slide" />
    </vueper-slides>
</template>

<style>
    .vueperslides__arrow {color: black;}
    .vueperslides__slide {
        height: auto !important;
        min-height: 500px;
    }
    .vueperslides__slide img {
        max-height: 80vh;
        width: auto;
        margin: 0 auto;
    }
</style>