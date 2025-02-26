<template>
    <div class="container">
        Footer
        <AppNavBar :classTextColor="store.navBarFooter.classText" :src="store.navBarFooter.srcLogo"
            :tabsArray="store.navBarFooter.tabs" />
    </div>
</template>
<script>
import AppNavBar from '../header/AppNavbar.vue';
import { store } from '../../store';

export default {
    name: 'AppFooter',
    components: { AppNavBar },
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
  background-color: $my-dark-blue;

  .nav-link {
    color: $color-my-terciary;
  }
}
</style>