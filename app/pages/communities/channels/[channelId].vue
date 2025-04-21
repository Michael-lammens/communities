<script setup lang="ts">
// root channels page, all channels pages will contain.

import { sampleJoinedChannels } from '~/data/sample_data';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const channelId = computed(() => route.params.channelId);

// Find the channel data by ID
const currentChannel = computed(() =>
    sampleJoinedChannels.find((channel) => channel._id === channelId.value)
);

// todo: every channel should have ability to navigate between: 'messages', 'listings', 'members' and 'support'
// the root page should also show more information on the channel,

</script>

<template>
    <div class="p-6 space-y-4">
        <div class="text-lg font-semibold">Channel ID: {{ channelId }}</div>

        <div v-if="currentChannel">
            <h2 class="text-2xl font-bold">{{ currentChannel.name }}</h2>
            <p class="text-sm text-gray-500">Last updated: {{ currentChannel.last_updated }}</p>
            <p class="text-sm">Created by: {{ currentChannel.creator }}</p>
        </div>

        <div v-else class="text-red-500">Channel not found.</div>
    </div>
</template>
