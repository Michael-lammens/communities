<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const items = ref([
    { route: '/communities/listings', label: 'Featured', icon: null },
    { route: '/communities/listings/for-sale', label: 'For Sale', icon: 'pi pi-dollar' },
    { route: '/communities/listings/auction', label: 'Auction', icon: 'pi pi-clock' },
    { route: '/communities/listings/wtb', label: 'WTB', icon: 'pi pi-eye' }
]);

const isActive = (tabRoute: string) => route.path === tabRoute;
</script>

<template>
  <div class="flex flex-1">
    <main class="flex-1 overflow-y-auto">
      <div class="flex w-full items-center space-x-4 px-4 md:px-12 lg:px-20  border-b border-gray-200 dark:border-surface-700 bg-surface-0 shadow-sm rounded-b-lg">
        <NuxtLink
          v-for="tab in items"
          :key="tab.route"
          :to="tab.route"
          class="relative px-3 py-2 text-sm font-thin text-surface-400 dark:text-gray-300 transition-colors duration-300"
        >
          <div class="flex items-center gap-2" :class="isActive(tab.route) ? 'text-dialist_secondary' : ''">
            <i v-if="tab.icon" :class="`${tab.icon} !leading-none`" />
            <span>{{ tab.label }}</span>
          </div>
        </NuxtLink>
      </div>

      <div class="p-4">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>
