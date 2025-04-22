<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const navs = ref([
    {
        icon: null,
        label: 'Summary',
        route: 'communities',
        exact: true,
    },
    {
        icon: 'pi pi-dollar',
        label: 'Listings',
        route: 'communities/listings',
        exact: false,
    },
    {
        icon: 'pi pi-users',
        label: 'Channels',
        route: 'communities/channels',
        exact: false,
    },
]);

const selectedNav = ref('');

watchEffect(() => {
    const currentPath = route.path.replace(/^\/+/, ''); // remove leading slash
    const match = navs.value.find(nav =>
        nav.exact ? currentPath === nav.route : currentPath.startsWith(nav.route)
    );
    selectedNav.value = match?.label || '';
});

const goTo = (item) => {
    selectedNav.value = item.label;
    router.push('/' + item.route);
};
</script>

<template>
    <div>
        <div class="bg-surface-0 dark:bg-surface-950">
            <div class="min-h-screen flex flex-col relative lg:static dark:bg-surface-950">



                <nav class="flex items-center bg-black text-surface-200/75 px-12 py-2">
                    <div class="flex items-center space-x-4">
                        <a href="#" class="text-sm font-light hover:text-gray-300">Marketplace</a>
                        <div class="h-4 border-l border-gray-600"></div>
                        <a href="#" class="text-sm font-light hover:text-gray-300 text-dialist_text">Communities</a>
                        <div class="h-4 border-l border-gray-600"></div>
                        <a href="#" class="text-sm font-light hover:text-gray-300">Inventory</a>
                    </div>
                    <div class="ml-auto flex items-center">
                        <div class="flex items-center text-sm font-light opacity-50">
                            <span>English</span>
                            <span class="ml-1">▼</span>
                        </div>
                    </div>
                </nav>


                <div class="relative flex items-center justify-between gap-6 border-b border-surface-200 py-2">

                        <div class="flex items-center gap-3 px-8">
                            <img src="/images/site-resources/resources-logos/dialist-logos/communities.png" class="h-16 "/>
                        </div>

                    <a v-styleclass="{
                        selector: '@next',
                        enterFromClass: 'hidden',
                        leaveToClass: 'hidden',
                        hideOnOutsideClick: true
                    }"
                        class="mr-8 cursor-pointer block lg:hidden text-surface-900 dark:text-surface-0"
                    >
                        <i class="pi pi-bars !text-xl !leading-none" />
                    </a>
                    <div
                        class="flex-1 lg:shadow-none shadow-md rounded-b-xl lg:rounded-none px-4 top-full right-0 w-full bg-surface-0 dark:bg-surface-950 absolute lg:static lg:flex hidden lg:flex-row flex-col items-center justify-between transition-all"
                    >
                        <div class="flex items-center gap-2 lg:flex-row flex-col">
                            <template v-for="(item, index) of navs" :key="index">
                                <div @click="goTo(item)" class="flex items-center cursor-pointer p-3 rounded-md text-surface-500 hover:text-surface-200 duration-150 transition-colors" :class="{ 'text-dialist': selectedNav === item.label }">
                                    <i :class="`${item.icon} !leading-none mr-3`" />
                                    <span class="font-light">{{ item.label }}</span>
                                </div>



                            </template>
                        </div>



                        <div class="flex items-center">

                            <div class="flex lg:flex-row flex-col gap-2 lg:items-center lg:mt-0 mt-4 w-full">
                                <div class="flex items-center lg:flex-row flex-col gap-2 border-y border-surface lg:border-0 py-4 lg:py-0 my-2 lg:my-0">

                                    <Button outlined severity="secondary" class="!rounded-lg lg:!justify-center !justify-start w-full lg:!w-9 lg:!h-9">
                                        <i class="pi pi-bell !text-xl !leading-none" />
                                        <span class="lg:hidden">Notifications</span>
                                    </Button>

                                    <Button outlined severity="secondary" class="!rounded-lg lg:!justify-center !justify-start w-full lg:!w-9 lg:!h-9">
                                        <i class="pi pi-cog !text-xl !leading-none" />
                                        <span class="lg:hidden">Settings</span>
                                    </Button>

                                </div>


                                <Divider layout="vertical" class="!hidden lg:!block !mx-1" />

                                <div class="flex items-center xl:pr-8">
                                    <Avatar
                                        image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png"
                                        class="mr-2 !w-10 xl:!w-9 !h-10 xl:!h-9"
                                        size="large"
                                        shape="circle"
                                    />
                                    <div class="text-surface-800 dark:text-surface-100 font-medium text-base">Jane Sanders</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-1 min-h-0 bg-surface-50">
                    <slot />
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
