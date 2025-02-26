<template>
    <div>
        <AppNavBar :classTextColor="store.navBarHeader.classText" :src="store.navBarHeader.srcLogo"
            :tabsArray="store.navBarHeader.tabs" :btn="store.navBarHeader.btn" />

    </div>
</template>

<script>
import { store } from '../../store';
import AppNavBar from './AppNavbar.vue';

export default {
    name: "AppHeader",
    components: { AppNavBar },
    data() {
        return {
            store,


        }
    }
}
</script>
<style lang="scss">
@use '../../assets/partials/variables' as *;
    header {
//   box-shadow: 1px 6px 15px 6px $my-dark-blue;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background-color:rgba($color: $my-dark-blue, $alpha: 0.7);
//   opacity: 50%;
    backdrop-filter: blur(5px);
  z-index: 100;
  .nav-link {
    color: $color-my-terciary;
  }
}
</style>