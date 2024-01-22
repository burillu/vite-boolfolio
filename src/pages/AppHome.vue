<template>
    <AppHero :pageTitle="Home" />
    <div class="container">
        <h1 class="text-center">Home - Michele Ebau</h1>
    </div>
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