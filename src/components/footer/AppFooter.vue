<template>

    <div class="container-lg d-flex justify-content-between align-items-center py-5">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <router-link class="navbar-brand" active-class="" aria-current="" :to="{ name: 'home' }">
                        <img :src="store.navBarFooter.srcLogo" alt="logo-footer">
                    </router-link>
                    <div class="" id="">

                        <AppMenu :isColumn="true" :classTextColor="store.navBarHeader.classText"
                            :src="store.navBarFooter.srcLogo" :tabsArray="store.navBarHeader.tabs" />
                    </div>
                </div>
            </nav>
        </div>


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
<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;
</style>