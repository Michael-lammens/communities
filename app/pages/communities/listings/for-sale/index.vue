<template>

<div class="max-w-[1390px] mx-auto">

  <div class="flex justify-between items-center mb-4 px-4">
        <h1 class="text-2xl font-medium tracking-wide	">For Sale</h1>
        <div class="flex items-center gap-4">
          <!-- Search bar -->
          <div class="relative">
            <input
              type="text"
              placeholder="Search listings..."
              class="pl-10 pr-4 py-2 w-80 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <div class="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Add new product button -->
          <button class="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 text-surface-400">
            Create Listing
            <span class="font-bold">+</span>
          </button>
        </div>
      </div>

  <div class="px-4 py-4 bg-surface-0 rounded-lg">

            <!-- Main content area with sidebar -->

          <!-- Header section -->

            <div class="flex gap-6 ">
                <!-- Products grid -->
                <div class="flex-1">

     <div class="grid gap-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4 md:mb-8 lg:grid-cols-4">
         <NuxtLink :to="`/listings/view/${item.stock}`" v-for="item in sample_products.data" :key="item.stock" class="rounded-lg ring-1 ring-black/5 bg-transparent p-2 mt-2 space-y-1.5 overflow-hidden hover:ring-dialist_secondary/50 transition-all">
            <div class="h-64 w-full relative">
                 <img :src="item.image" class="relative w-full h-full object-cover rounded-lg aspect-square bg-gray-50/90"/>

                <button class="absolute top-2 right-2 rounded-full bg-gray-50/25 hover:bg-gray-200/30 group transition-all duration-200 text-gray-900 p-1">
                    <HeartIcon class="size-5 shrink-0 text-gray-50/75 transition-colors duration-200 group-hover:text-gray-200"/>
                </button>
            </div>
              <div>
                   <div class="flex justify-between gap-2">
                        <span class="inline-flex grow justify-center items-center rounded-lg bg-gray-50/90 border border-gray-100 px-2 py-1 font-light text-xs text-gray-600">2022</span>
                        <span class="inline-flex grow justify-center items-center rounded-lg bg-gray-50/90 border border-gray-100 px-2 py-1 font-light text-xs text-gray-600">Pre-owned</span>
                        <span class="inline-flex grow justify-center items-center rounded-lg bg-gray-50/90 border border-gray-100 px-2 py-1 font-light text-xs text-gray-600">Full Set</span>
                   </div>
                </div>
                <div class="">
                    <div class="flex flex-col">
                        <p class="text-gray-800 line-clamp-1 font-helvetica">Rolex Datejust</p>
                        <p class="font-light py-0 text-sm text-gray-600 line-clamp-1">Clean full set</p>
                    </div>
                </div>
            <div class="text-gray-800/90 line-clamp-1 font-helvetica leading-sm text-sm">
                C$29,2811.00
            </div>
        </NuxtLink>
</div>

                    <!-- Pagination -->
                    <div class="flex items-center justify-between mt-8">
                        <div class="text-sm text-gray-600">
                            Showing {{ (sample_products.paging.currentPage - 1) * sample_products.paging.perPage + 1 }}
                            to {{ Math.min(sample_products.paging.currentPage * sample_products.paging.perPage, sample_products.paging.totalResults) }}
                            of {{ sample_products.paging.totalResults }} results
                        </div>

                        <div class="flex items-center gap-2">
                            <button class="p-2 rounded-full border border-gray-300 flex items-center justify-center" :disabled="sample_products.paging.currentPage === 1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                v-for="page in pageNumbers"
                                :key="page"
                                :class="[
                  'w-8 h-8 rounded-full flex items-center justify-center text-sm',
                  sample_products.paging.currentPage === page
                    ? 'bg-gray-900 text-white'
                    : 'border border-gray-300'
                ]"
                            >
                                {{ page }}
                            </button>

                            <div class="w-8 h-8 flex items-center justify-center">...</div>

                            <button class="w-8 h-8 rounded-full flex items-center justify-center text-sm border border-gray-300">
                                {{ Math.ceil(sample_products.paging.totalResults / sample_products.paging.perPage) }}
                            </button>

                            <button class="p-2 rounded-full border border-gray-300 flex items-center justify-center" :disabled="!sample_products.paging.nextPage">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {HeartIcon} from "@heroicons/vue/24/outline";
import Filters from "~/components/Filters.vue";









const sample_products = {
    data: [
        {
            name: "Nike Downshifter 12",
            price: 819000,
            currency: "Rp",
            stock: 975,
            sold: 768,
            description: "Here's to new beginnings between you and the pavement. We know comfort is key to a successful run, so we made sure your steps are cushioned and flexible for a soft ride. A strap and wraparound zip makes these shoes a gear-no-maintenance pick.",
            category: "Running",
            image: "/images/site-resources/resources-watches/big-data/audemars_families/RO-crop.png"
        },
        {
            name: "Compass Retrograde High",
            price: 668000,
            currency: "Rp",
            stock: 494,
            sold: 341,
            description: "Classic high-top design with modern comfort features.",
            category: "Basketball",
            image: "/images/site-resources/resources-watches/big-data/audemars_families/RO-crop.png"
        },
        {
            name: "Adidas Superstar XLG Green",
            price: 2000000,
            currency: "Rp",
            stock: 624,
            sold: 489,
            description: "The iconic shell toe gets an upgrade with green accents and XLG styling.",
            category: "Skateboard",
            image: "/images/site-resources/resources-watches/big-data/audemars_families/RO-crop.png"
        },
        {
            name: "Vans Old Skool Shoe",
            price: 1100000,
            currency: "Rp",
            stock: 488,
            sold: 217,
            description: "The classic side stripe skate shoe that never goes out of style.",
            category: "Skateboard",
            image: "/images/site-resources/resources-watches/big-data/audemars_families/RO-crop.png"
        },
        {
            name: "Nike Air Max 90",
            price: 1799000,
            currency: "Rp",
            stock: 428,
            sold: 237,
            description: "The iconic silhouette with visible Air cushioning for all-day comfort.",
            category: "Running",
            image: "/images/site-resources/resources-watches/big-data/audemars_families/RO-crop.png"
        },
        {
            name: "Nike Air Max Pulse",
            price: 2379000,
            currency: "Rp",
            stock: 318,
            sold: 205,
            description: "Inspired by London's music scene, featuring Cushlon foam and Air cushioning.",
            category: "Running",
            image: "/images/site-resources/resources-watches/big-data/audemars_families/RO-crop.png"
        },
        {
            name: "Nike Air Force 1 '07",
            price: 1729000,
            currency: "Rp",
            stock: 274,
            sold: 168,
            description: "The legendary basketball shoe turned street icon with crisp leather.",
            category: "Basketball",
            image: "/images/site-resources/resources-watches/big-data/audemars_families/RO-crop.png"
        },
        {
            name: "Nike Air Max 97",
            price: 2849000,
            currency: "Rp",
            stock: 354,
            sold: 211,
            description: "Full-length Nike Air cushioning in a design inspired by Japanese bullet trains.",
            category: "Running",
            image: "/images/site-resources/resources-watches/big-data/audemars_families/RO-crop.png"
        }
    ],
    paging: {
        currentPage: 1,
        nextPage: 2,
        perPage: 8,
        totalResults: 20,
    }
}

const categories = ["All products", "Most purchased", "Basketball", "Running", "Skateboard", "Football", "Fun Sneakers"]
const activeCategory = ref("All products")
const selectedProduct = ref(null)

// Pagination display numbers (1, 2, 3)
const pageNumbers = computed(() => {
    const current = sample_products.paging.currentPage
    const total = Math.ceil(sample_products.paging.totalResults / sample_products.paging.perPage)

    if (total <= 5) {
        return Array.from({ length: total }, (_, i) => i + 1)
    }

    if (current <= 3) {
        return [1, 2, 3]
    }

    if (current >= total - 2) {
        return [total - 2, total - 1, total]
    }

    return [current - 1, current, current + 1]
})

// Select a product to show in the sidebar
const selectProduct = (product) => {
    selectedProduct.value = product
}

// Format number with thousand separators
const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
</script>

<style>
.see-full-view {
    color: #666;
}
</style>