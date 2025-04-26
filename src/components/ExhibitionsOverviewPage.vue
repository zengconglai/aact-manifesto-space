<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavDropdown from '@/components/NavDropdown.vue'
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
            <div class="pt-3.5 hidden lg:flex lg:justify-start lg:items-center pb-6 lg:pb-3">
                <BreadCrumbs 
                    :main-page="false"
                    current-exhibition="Exhibitions"
                />
                <span class="ml-3 text-sm text-stone-500/80">
                    Exhibitions
                </span>
            </div>
        </div>

        <!-- Main Content -->
        <div class="overflow-scroll scroll-smooth">
            <!-- Banner Section -->
            <section id="page_banner" class="h-[calc(100vh-89px)] w-full bg-cover bg-top">
                <div class="bg-black/50 w-full h-[calc(100vh-89px)] flex flex-col items-start justify-center lg:pl-16 sm:pl-12 pl-6">
                    <p class="leading-[29px] sm:leading-[44px] lg:leading-[58px] text-ivory/90 font-medium text-2xl sm:text-4xl lg:text-5xl text-ivory text-center">
                        Our Exhibitions
                    </p>
                </div>
            </section>

            <!-- Exhibitions Grid Section -->
            <section class="px-6 sm:px-12 lg:px-16 py-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Exhibition cards will go here -->
                </div>
            </section>

            <FooterComponent class="text-stone-800/60 bg-ivory lg:border-t lg:border-stone-400/50" />
        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
</style> 