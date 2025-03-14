<template>
    <div class="container-lg d-flex justify-content-between align-items-center">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <div class="my-logo">
                            <img :src="src" alt="logo">
                        </div>
                    </a>
                    <div class="" id="navbarScroll">

                        <AppMenu :classTextColor="store.navBarHeader.classText" :src="store.navBarHeader.srcLogo"
                            :tabsArray="store.navBarHeader.tabs" />
                    </div>
                </div>
            </nav>
        </div>

    </div>
</template>

<script>
import AppMenu from '../AppMenu.vue';
import { store } from '@/store';


export default {
    name: 'AppNavBar',
    data() {
        return {

            store,
        }
    },
    components: { AppMenu },
    props: {
        src: String,
        classTextColor: String,
        tabsArray: Array,
        btn: Object
    }

}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;



.navbar-collapse.show {
    background-color: rgba($color: $my-dark-blue, $alpha: 0.9);
    backdrop-filter: blur(5px);
}
</style>