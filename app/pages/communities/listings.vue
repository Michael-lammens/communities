<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
    { route: '/communities/listings', label: "Featured", icon: null },
    { route: '/communities/listings/for-sale', label: 'For Sale', icon: 'pi pi-dollar' },
    { route: '/communities/listings/auction', label: 'Auction', icon: 'pi pi-clock' },
]);
</script>
<template>
    <div class="flex flex-1">

        <main class="flex-1 overflow-y-auto">
                <Tabs value="/communities/listings">
                    <TabList>
                                    <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
                                        <NuxtLink v-if="tab.route" v-slot=slotProps :to="tab.route" custom>
                                            <a v-ripple :href="slotProps.href" @click="slotProps.navigate" class="flex items-center cursor-pointer p-3 rounded-md text-surface-400 hover:text-surface-200 duration-150 transition-colors" :class="{ 'text-dialist': slotProps.isActive }">
                                                <i v-if="tab.icon" :class="`${tab.icon} !leading-none mr-3`" />
                                                <span class="font-light">{{ tab.label }}</span>
                                            </a>


                                        </NuxtLink>
                                    </Tab>

                    </TabList>
                </Tabs>

            <NuxtPage />
        </main>
    </div>
</template>


<style scoped>

</style>