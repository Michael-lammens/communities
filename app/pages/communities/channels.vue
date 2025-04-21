<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {sampleJoinedChannels} from "~/data/sample_data";
const router = useRouter();



const route = useRoute();

// Toggle sidebar on mobile
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
};

const channelNavs = ref([
    {
        icon: null,
        label: 'Channels',
        route: 'communities/channels',
        exact: true,
    },
    {
        icon: 'pi pi-home !text-xl !leading-none',
        label: 'Dashboard',
        route: 'communities/channels',
        exact: false,
    },
    {
        icon: 'pi pi-users !text-xl !leading-none',
        label: 'Channels',
        route: 'seller/channels',
        exact: false,
    },
]);

const isCommunityRoute = computed(() => !!route.params.channelId);

const goToChannel = (channelId: string) => {
    router.push(`/seller/channels/${channelId}`);
};

</script>
<template>
    <div class="flex flex-1">
        <aside class="w-80 shrink-0 border-r border-surface-200 dark:border-surface-800">
            <div class="border-b border-gray-200 px-6 py-4">
                <h4 class="text-xl font-semibold text-surface-950 dark:text-surface-0">Channels</h4>
            </div>

            <div class="w-full mx-auto p-6 bg-surface-0 dark:bg-surface-950">
                <div class="border border-surface divide-x divide-[var(--p-content-border-color)] rounded-xl flex items-center w-full overflow-hidden">
                    <div class="flex-1 p-3 flex items-center gap-2">
                        <i class="pi pi-search text-surface-400" />
                        <input
                            class="flex-1 bg-transparent w-full outline-none placeholder:text-surface-400 text-surface-950 dark:text-surface-0"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <div class="mt-8">
                    <div class="text-sm font-semibold uppercase text-surface-400 dark:text-surface-500 tracking-wide mb-4">Joined Channels</div>
                    <div class="flex flex-col gap-3">
                        <div
                            v-for="(item, index) of sampleJoinedChannels"
                            :key="index"
                            @click="goToChannel(item._id)"
                            class="cursor-pointer p-3 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-xl transition flex gap-4 items-center"
                        >
                            <img
                                class="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                :src="item.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}`"
                                :alt="item.name"
                            />
                            <div class="flex-1 min-w-0">
                                <div class="flex justify-between items-center gap-2">
                                    <h5 class="font-medium text-surface-900 dark:text-surface-0 truncate">{{ item.name }}</h5>
                                    <Tag v-if="item.creator === 'private'" severity="secondary" value="Private" />
                                    <Tag v-if="item.creator === 'dialist'" severity="success" value="Dialist" />
                                </div>
                                <p class="text-xs text-surface-400 dark:text-surface-500 mt-1 truncate">Updated: {{ item.last_updated }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        <main class="flex-1 p-6 overflow-y-auto">
            <NuxtPage />
        </main>
    </div>
</template>


<style scoped>

</style>