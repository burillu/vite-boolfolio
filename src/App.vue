<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppHero :pageTitle="'Home'" />
    <section id="main-content" class="bg-white position-card pt-5">

      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </section>

  </main>
  <footer class="mt-4">
    <AppFooter />
  </footer>
</template>

<script>

import { store } from './store.js';

import AppHeader from './components/header/AppHeader.vue';
import AppFooter from './components/footer/AppFooter.vue';
import AppHero from './components/main/AppHero.vue';

//import AppMain from './pages/main/AppMain.vue';

export default {
  name: "App",
  projects: [],
  data() {
    return {
      store
    };
  },

  components: { AppHeader, AppFooter, AppHero }
}

</script>

<style lang="scss" scoped>
#main-content {
  position: relative;
  border-radius: 30px;
}

.position-card {
  position: relative;
  top: -30px;
  right: 0;
  left: 0;
}
</style>
