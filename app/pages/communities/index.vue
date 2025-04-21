<script setup lang="ts">

const { $repositories } = useNuxtApp()
const { data } = await useAsyncData(() => $repositories.channels.get())

</script>

<template>
<div>
    Seller Page Home
    <div v-if="data">
        {{data}}
    </div>
</div>
</template>

<style scoped>

</style>