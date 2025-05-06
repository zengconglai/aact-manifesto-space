<script setup>
import NavDropdown from '@/components/NavDropdown.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref, onMounted } from 'vue'
const titleLineOpacity = ref(0);
const buttonOpacity = ref(0);
import bgImg from '@/assets/Interwoven-Overview/Home.jpg'
import { useRouter, onBeforeRouteLeave } from 'vue-router'

const router = useRouter()

function navigateWithFadeOut(url) {
  const body = document.querySelector("body");
  body.classList.add("fade-out");

  setTimeout(() => {
    router.push(url);
  }, 200); 
}

onBeforeRouteLeave(() => {
  const body = document.querySelector("body");
  body.classList.remove("fade-out");
})

onMounted(() => {
  // Show first line immediately (with its own transition)
  setTimeout(() => {
    titleLineOpacity.value = 1;
  }, 800); // Small delay for browser to settle
  
  
  // Show button shortly after second line
  setTimeout(() => {
    buttonOpacity.value = 1;
  }, 1600);
})

</script>
<style>
.fade-out {
  animation: fadeOut 0.2s ease-out forwards;
}


@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

</style>
<template>
    <main class="min-h-screen max-h-full overflow-hidden relative bg-cover bg-center bg-fixed lg:bg-right-top" :style="`background-image: url(${bgImg});`">
        <div class="h-[calc(100vh+132px)] w-screen m-0 bg-black/20 flex flex-col justify-between">
            <div class="flex justify-start lg:justify-center items-center pt-4 sm:pt-6 lg:pt-4 px-6 sm:px-12 lg:px-0 pb-2 md:pb-4">
                <a href="/">
                    <img src="@/assets/manifesto-logo-white.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4" alt="Website Logo" />
                </a>
                <div class="absolute right-0 sm:right-7 lg:right-10 text-ivory z-40">
                    <NavDropdown />
                </div>
            </div>
            <div class="self-start flex items-center justify-center text-ivory max-w-screen">
                <span class="sr-only">Current Curation</span>
                <div class="pl-6 md:pl-12 lg:pl-24">
                    <p class="text-3xl md:text-6xl lg:text-7xl font-medium tracking-wide" :style="{ opacity: titleLineOpacity, transition: 'opacity 800ms ease-in-out' }">INTERWOVEN IDENTITIES:</p>
                    
                    <p class="text-xl md:text-2xl lg:text-3xl font-light tracking-wide" :style="{ opacity: titleLineOpacity, transition: 'opacity 800ms ease-in-out' }">
                        INTERSECTIONALITY IN ASIAN MENTAL HEALTH
                    </p>
                    <button @click="navigateWithFadeOut('/exhibitions/interwoven-identities')" type="button" :style="{ opacity: buttonOpacity, transition: 'opacity 700ms ease-in' }" class="z-20 mt-6 md:mt-9 lg:mt-12 border border-ivory/60 px-6 py-2 md:py-4 text-black/60 hover:border/ivory hover:text-ivory bg-ivory/50 md:text-base text-small">Explore Now</button>
                </div>
            </div>
            <FooterComponent class="text-ivory/70 mb-7" />
        </div>
    </main>
</template>