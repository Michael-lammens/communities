<script setup lang="ts">
import AppSidebar from "~/components/AppSidebar.vue";
</script>

<template>
<div>
    <UiSidebarProvider
        :style="{
      '--sidebar-width': '350px',
    }"
    >
    <AppSidebar/>


        <UiSidebarInset>
            <header class="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
                <UiSidebarTrigger class="-ml-1" />
                <UiSeparator orientation="vertical" class="mr-2 h-4" />
                <UiBreadcrumb>
                    <UiBreadcrumbList>
                        <UiBreadcrumbItem class="hidden md:block">
                            <UiBreadcrumbLink href="#">
                                All Inboxes
                            </UiBreadcrumbLink>
                        </UiBreadcrumbItem>
                        <UiBreadcrumbSeparator class="hidden md:block" />
                        <UiBreadcrumbItem>
                            <UiBreadcrumbPage>Inbox</UiBreadcrumbPage>
                        </UiBreadcrumbItem>
                    </UiBreadcrumbList>
                </UiBreadcrumb>
            </header>
            <div class="flex flex-1 flex-col gap-4 p-4">
                <div
                    v-for="index in 24"
                    :key="index"
                    class="aspect-video h-12 w-full rounded-lg bg-muted/50"
                />
            </div>
        </UiSidebarInset>



    </UiSidebarProvider>
</div>
</template>

<style scoped>

</style>