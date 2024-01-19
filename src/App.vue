

<template>
  <AppHeader />
  <main>

    <AppMain />





  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<script>

import { store } from './store.js';

import AppHeader from './components/header/AppHeader.vue';
import AppFooter from './components/footer/AppFooter.vue';
import AppMain from './components/main/AppMain.vue';

export default {
  name: "App",
  projects: [],
  data() {
    return {
      store
    };
  },

  components: { AppHeader, AppFooter, AppMain }
}

</script>

<style scoped></style>

ba