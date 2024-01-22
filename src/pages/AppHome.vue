<template>
    <AppHero :pageTitle="'Home'" />
</template>
<script>
import AppHero from '@/components/main/AppHero.vue';

export default {
    name: 'AppHome',
    data() {
        return {
            message: 'tu sorella'
        };
    },
    components: { AppHero }
}
</script>
<style></style>