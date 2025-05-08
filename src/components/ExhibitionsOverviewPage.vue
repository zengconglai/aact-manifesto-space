<script setup>
// Imports moved here as per standard Vue SFC structure
import FooterComponent from '@/components/FooterComponent.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import interwovenWhisperImg from '@/assets/Interwoven-Overview/Whisper.jpg';
import bittenPeachCurationImg from '@/assets/TheBittenPeach-Overview/curation-topic1.webp';
import { ref, onMounted } from "vue"
// manifesto-logo-black.svg is already referenced in the template, no need to import if just used in src

const contentOpacity = ref(0);

onMounted(() => {
    // Add fade in effect
    setTimeout(() => {
        contentOpacity.value = 1;
    }, 300);
});
</script>

<template>
    <div class="min-h-screen bg-ivory max-h-full">
        <!-- Header Section -->
        <div class="sticky z-50 top-0 bg-ivory pt-4 sm:pt-6 lg:pt-4 px-6 sm:px-12 lg:px-16">
            <div class="flex justify-start lg:justify-center items-center lg:border-b lg:border-stone-400/50 pb-2 md:pb-4">
                <a href="/">
                    <img src="@/assets/manifesto-logo-black.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4" alt="Website Dark Logo" />
                </a>
                <div class="absolute right-0 sm:right-7 lg:right-10 text-stone-600/80 hover:text-stone-800/50 z-40">
                    <NavDropdown />
                </div>
            </div>
        </div>

        <!-- New Main Content Area -->
        <div class="page-container relative flex pt-10 pb-10 w-full">
            <aside class="ruler-sidebar fixed top-0 left-[15px] h-screen w-[20px] z-10"></aside>
            <aside class="ruler-sidebar fixed top-0 right-[15px] h-screen w-[20px] z-10"></aside>
            
            <main class="main-content-new flex-grow px-6 sm:px-12 lg:px-16 relative z-20 w-full pt-20 animate-fade-in" :style="{ opacity: contentOpacity, transition: 'opacity 300ms ease-out' }">
                <section class="exhibition-section-new mb-[70px]">
                    <article class="exhibition-item-new flex flex-col items-start gap-[15px] mb-[100px] ml-[15vw] relative group"> 
                        <router-link to="/exhibitions/interwoven-identities" class="w-full">
                            <div class="image-container-new w-[100vw] sm:w-[70vw] md:w-[70vw] lg:w-[50vw] relative">
                                <div class="may2025-line absolute top-1/2 transform -translate-y-1/2 h-px bg-stone-500" 
                                     style="left: calc(-20vw); width: calc(100% + 20vw + 90px); z-index: 1;"> 
                                </div>
                                <p class="date-text absolute top-1/2 transform -translate-y-[120%] text-base font-normal text-stone-700 px-2 z-20" 
                                   style="left: calc(-15vw);"> 
                                    May 2025
                                </p>
                                <img :src="interwovenWhisperImg" class="block max-w-full h-auto relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"> 
                            </div>
                            <div class="info-new pt-[20px] max-w-[70vw] cursor-pointer">
                                <p class="text-xl font-semibold italic transition-colors duration-300 group-hover:text-[#A21A08]">Interwoven Identities:</p>
                                <p class="text-xl italic transition-colors duration-300 group-hover:text-[#A21A08]">Intersectionality in Asian Mental Health</p>
                            </div>
                        </router-link>
                    </article>

                    <article class="exhibition-item-new flex flex-col items-end gap-[15px] mb-[50px] mr-[20vw] relative group" :style="{ opacity: contentOpacity, transition: 'opacity 300ms ease-out' }"> 
                        <router-link to="/exhibitions/the-bitten-peach" class="w-full flex flex-col items-end">
                            <div class="image-container-new w-[100vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] relative">
                                <div class="may2025-line absolute top-1/2 transform -translate-y-1/2 h-px bg-stone-500" 
                                     style="right: calc(-30vw); width: calc(100% + 30vw + 90px); z-index: 1;"> 
                                </div>
                                <p class="date-text absolute top-1/2 transform -translate-y-[120%] text-base font-normal text-stone-700 px-2 z-20" 
                                   style="right: calc(-20vw);"> 
                                    May 2023
                                </p>
                                <img :src="bittenPeachCurationImg" class="block max-w-full h-auto relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"> 
                            </div>
                            <div class="info-new pt-[20px] max-w-[70vw] text-right cursor-pointer">
                                <p class="text-xl font-semibold italic transition-colors duration-300 group-hover:text-[#A21A08]">The Bitten Peach</p>
                                <p class="text-xl italic transition-colors duration-300 group-hover:text-[#A21A08]">Decolonizing Queer Asians</p>
                            </div>
                        </router-link>
                    </article>
                </section>
            </main>
        </div>

        <!-- Footer Component (Kept from original) -->
        <FooterComponent class="text-stone-800/60 bg-ivory lg:border-t lg:border-stone-400/50 relative z-20" />
    </div>
</template>

<style scoped>
.bg-ivory { 
  background-color: #f0ede5; 
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 1.2s ease-out forwards;
}

.ruler-sidebar {
    background-image: repeating-linear-gradient(
        to bottom,
        #c0c0c0, 
        #c0c0c0 1px, 
        transparent 1px, 
        transparent 15px 
    );
}

.section-title-new::before {
    content: "";
    position: absolute;
    left: -35px; 
    top: 50%;
    transform: translateY(-50%);
    width: 15px; 
    height: 1px; 
    background-color: #555; 
}

/* No specific CSS needed for .may2025-line or .date-text if all styling is inline and using Tailwind */
/* The comments below are just for structural reference and don't apply styles */
/*
.page-container {}
.main-content-new {}
.exhibition-section-new {}
.exhibition-item-new {}
.image-container-new {}
.info-new {}
.detail-new {}
*/
</style>