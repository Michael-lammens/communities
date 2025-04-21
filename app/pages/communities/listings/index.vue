<template>
        <div class="max-w-[1390px] mx-auto px-4 py-8">




            <!-- Header section -->
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-semibold">Products</h1>
                <div class="flex items-center gap-4">



                </div>
            </div>
            <!-- Main content area with sidebar -->

            <div class="flex gap-6">
                <!-- Products grid -->
                <div class="flex-1">
                    <div class="grid grid-cols-4 gap-4">
                        <div
                            v-for="product in sample_products.data"
                            :key="product.name"
                            class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 cursor-pointer"
                            :class="{ 'ring-2 ring-blue-500': selectedProduct && selectedProduct.name === product.name }"
                            @click="selectProduct(product)"
                        >
                            <div class="p-4">
                                <div class="h-36 bg-gray-100 rounded flex items-center justify-center mb-3">
                                    <img :src="product.image" :alt="product.name" class="h-full object-contain w-80" />
                                </div>
                                <h3 class="font-medium text-sm">{{ product.name }}</h3>
                                <p class="text-sm mt-1">{{ product.currency }}{{ formatNumber(product.price) }}</p>

                                <div class="flex justify-between mt-3 text-xs text-gray-600">
                                    <div>
                                        <span class="block">Stock</span>
                                        <span class="font-medium">{{ product.stock }}</span>
                                    </div>
                                    <div>
                                        <span class="block">Sold</span>
                                        <span class="font-medium">{{ product.sold }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

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