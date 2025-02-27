<template>
    <div class="container">
        Footer
        <AppMenu :classTextColor="store.navBarFooter.classText" :src="store.navBarFooter.srcLogo"
            :tabsArray="store.navBarFooter.tabs" />
    </div>
</template>
<script>
import { store } from '../../store';
import AppMenu from '../AppMenu.vue';

export default {
    name: 'AppFooter',
    components: { AppMenu },
    data() {
        return {
            store
        }
    }
}
</script>
<style lang="scss">
@use '../../assets/partials/variables' as *;

footer {
    height: 20vh;
    background-color: $my-terciary-light;

    .nav-link {
        color: $my-blue-badge;
    }
}
</style>