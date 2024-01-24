<template>
    <div class="container">
        <h1 class="text-center">Contact Me</h1>
        <AppContactForm />
    </div>
</template>
<script>
import AppContactForm from '@/components/main/AppContactForm.vue';



export default {
    name: 'AppContact',
    data() {
        return {

        };
    },
    components: { AppContactForm }
}
</script>
<style></style>