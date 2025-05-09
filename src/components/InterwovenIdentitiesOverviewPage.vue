<script setup>
import NavDropdown from '@/components/NavDropdown.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useScrollObserver } from '@/useScrollObserver.js'
import { ref, onMounted } from "vue"
import SmoothScroll from 'smooth-scroll'
/* eslint-disable no-unused-vars */
const navbar = ref(null);
const activeIndex = ref(-1);
const { startObserving } = useScrollObserver();
const contentOpacity = ref(0);

onMounted(() => {
    const aboutSection = document.getElementById("about");
    const sectionsSection = document.getElementById("sections");
    startObserving(aboutSection, 0, onIntersection);
    startObserving(sectionsSection, 1, onIntersection);

    const offset = 88;
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        easing: 'easeInOutCubic',
        offset: offset,
    });

    // Add fade in effect
    setTimeout(() => {
        contentOpacity.value = 1;
    }, 300);
});

function onIntersection(entry, index) {
    if (entry.isIntersecting) {
        activeIndex.value = index;
    }
}
</script>
<template>
    <main class="min-h-screen bg-ivory max-h-full">
        <div class="sticky z-30 top-0 bg-ivory h-26 lg:h-full mb-0 lg:border-b lg:border-stone-400/50">
            <div class="flex justify-start lg:justify-center items-center pt-4 sm:pt-6 lg:pt-4 px-6 sm:px-12 lg:px-0 pb-2 md:pb-4">
                <a href="/" class="logo-container relative group">
                    <img src="@/assets/manifesto-logo-black.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4 transition-all duration-300 group-hover:opacity-0" alt="Website Dark Logo" />
                    <img src="@/assets/manifesto-logo-red.svg" class="h-6 lg:h-8 opacity-0 lg:ml-4 transition-all duration-300 absolute top-0 left-0 group-hover:opacity-100" alt="Website Hover Logo" />
                </a>
                <div class="absolute right-0 sm:right-7 lg:right-10 text-stone-600/80 hover:text-stone-800/50 z-40">
                    <NavDropdown />
                </div>
            </div>
            <!-- navigation -->
            <div class="lg:hidden text-stone-500 text-sm flex justify-start items-center px-6 sm:px-12 lg:px-24">
                <a href="/">
                    Home
                </a>
                <span class="mx-3">/</span>
                <a href="/exhibitions">
                    Exhibitions
                </a>
                <span class="mx-3">/</span>
                <a href="/exhibitions/interwoven-identities">
                    Interwoven Identities
                </a>
            </div>
            <ul class="mx-6 sm:mx-12 lg:mx-24 lg:hidden t-0 border-b border-stone-600 flex space-x-3 overflow-x-auto max-w-screen text-sm">
                <li><a href="#about" class="nav-item inline-block whitespace-nowrap text-stone-600" :class="{'font-semibold text-stone-800': activeIndex == 0, 'text-stone-500': activeIndex != 0 }">About</a></li>
                <li><a href="#sections" class="nav-item inline-block whitespace-nowrap" :class="{ 'font-semibold text-stone-800': activeIndex == 1, 'text-stone-500': activeIndex != 1 }">Exhibitions Sections</a></li>
            </ul>
        </div>
        <!-- end of navigation -->
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-center items-start lg:h-[calc(100vh-64px)] mx-auto" 
             :style="{ opacity: contentOpacity, transition: 'opacity 300ms ease-out' }">
            <div id="about" class="lg:h-full col-span-1 px-6 sm:px-12 lg:px-16 flex flex-col lg:overflow-y-scroll pb-24 lg:pb-0">
                <h1 class="mt-2 sm:mt-4 md:mt-6 lg:mt-16 text-3xl lg:text-4xl font-medium text-left">Interwoven Identities:</h1>
                <h1 class="mt-1 text-3xl lg:text-4xl font-medium text-left">Intersectionality in Asian Mental Health</h1>
                <p class="text-base font-normal mt-3">May 2025</p>
                <p class="text-2xl mt-12 mb-6">
                    MANIFESTO SPACE is thrilled to present <span class="font-semibold italic">Interwoven Identities: Intersectionality in Asian Mental Health</span>, a group exhibition curated by Carol Chen, Shengyu Cai, and Emily Gong.
                </p>
                <div class="flex flex-col space-y-6 leading-6 text-left text-sm sm:text-base">
                    <p class="font-normal">
                        We are all shaped by the stories we carry.
                    </p>
                    <p class="font-normal">
                        Our identities are not defined by the clothes we wear, the way we speak, or the company we keep. Rather, they are interwoven whether consciously or unconsciously with memories, values, and experiences passed down through generations. These connections shape how we see ourselves and how we engage with the world around us.
                    </p>
                    <p class="font-normal">
                        For many in Asian diaspora communities, these inherited narratives profoundly influence our mental well-being. Cultural values, family expectations, and social norms can foster strength and resilience but can also impose silence and restriction. While our inner struggles may feel deeply personal, they are often shaped by broader, complex sociocultural forces.
                    </p>
                </div>
            </div>
            <div id="sections" class="col-span-1 flex flex-col justify-start min-w-screen h-[calc(100vh-88px)] lg:h-[calc(100vh-64px)] px-6 sm:px-12 lg:px-0 lg:overflow-y-hidden">
                <div class="h-1/4 lg:h-1/4 w-full bg-top lg:bg-center bg-cover group bg-url-1">
                    <a href="/exhibitions/interwoven-identities/roots-and-reconciliation">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 lg:backdrop-brightness-100 lg:group-hover:backdrop-brightness-50 transition-all ease-in ease-out duration-300">
                            <p class="text-ivory text-xl sm:text-2xl lg:text-3xl text-center font-extralight transition-all ease-in ease-out duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100 px-4 lg:px-8">Roots and Reconciliation</p>
                        </div>
                    </a>
                </div>
                <div class="h-1/4 lg:h-1/4 w-full bg-center bg-cover group bg-url-2">
                    <a href="/exhibitions/interwoven-identities/whispers-and-echoes">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 lg:backdrop-brightness-100 lg:group-hover:backdrop-brightness-50 transition-all ease-in ease-out duration-300">
                            <p class="text-ivory text-xl sm:text-2xl lg:text-3xl text-center font-extralight transition-all ease-in ease-out duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100 px-4 lg:px-8">Whispers and Echoes</p>
                        </div>
                    </a>
                </div>
                <div class="h-1/4 lg:h-1/4 w-full bg-top lg:bg-center bg-cover group bg-url-3">
                    <a href="/exhibitions/interwoven-identities/between-two-worlds">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 lg:backdrop-brightness-100 lg:group-hover:backdrop-brightness-50 transition-all ease-in ease-out duration-300">
                            <p class="text-ivory text-xl sm:text-2xl lg:text-3xl text-center font-extralight transition-all ease-in ease-out duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100 px-4 lg:px-8">Between Two Worlds</p>
                        </div>
                    </a>
                </div>
                <div class="h-1/4 lg:h-1/4 w-full bg-top lg:bg-center bg-cover group bg-url-4">
                    <a href="/exhibitions/interwoven-identities/resilience-in-community">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 lg:backdrop-brightness-100 lg:group-hover:backdrop-brightness-50 transition-all ease-in ease-out duration-300">
                            <p class="text-ivory text-xl sm:text-2xl lg:text-3xl text-center font-extralight transition-all ease-in ease-out duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100 px-4 lg:px-8">Resilience in Community</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <FooterComponent class="text-stone-800/60 bg-ivory lg:border-t lg:border-stone-400/50" />
    </main>
</template>
<style>
.bg-url-1 {
    background-image: url('../assets/Interwoven-Overview/Roots.jpg');
}

.bg-url-2 {
    background-image: url('../assets/Interwoven-Overview/Whisper.jpg');
}

.bg-url-3 {
    background-image: url('../assets/Interwoven-Overview/Between.jpg');
}

.bg-url-4 {
    background-image: url('../assets/Interwoven-Overview/Resilience.jpg');
}
</style>