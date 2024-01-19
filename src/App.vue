

<template>
  <main>
    <div class="container">
      <span>{{ store.message }}</span>

      <ul>
        <li v-for="project in this.projects"> {{ project.title }}</li>
      </ul>
    </div>

  </main>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';

export default {
  name: "App",
  projects: [],
  data() {
    return {
      store
    }
  },
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + "/projects").then(res => {
        console.log(res.data.results);
        this.projects = res.data.results.data;
        console.log(this.projects);

      })
    }
  },
  mounted() {
    this.getAllProjects()
  }
}

</script>

<style scoped></style>

ba