

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
import axios from 'axios';
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
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + "/projects").then(res => {
        console.log(res.data.results);
        this.store.projects = res.data.results.data;

      });
    }
  },
  mounted() {
    this.getAllProjects();
    console.log($store.projects);
  },
  components: { AppHeader, AppFooter, AppMain }
}

</script>

<style scoped></style>

ba