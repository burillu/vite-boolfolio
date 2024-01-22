<template>
    <div class="container">
        <div v-if="project">
            <div class="card">
                <div class="card-body">
                    <img :src="store.imgUrl + project.image" :alt="project.title">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.body }}</p>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import axios from "axios";
import { store } from "../store";
export default {
    name: 'ProjectDetail',
    data() {
        return {
            message: 'Ciccio Bello',
            store,
            project: null,
            technologies: null
        }
    },
    methods: {
        getProjectDetails() {
            //console.log(this.$route.params.slug);
            //console.log(this.store.apiUrl);
            axios.get(this.store.apiUrl + '/projects/' + this.$route.params.slug).then(resp => {
                this.project = resp.data.results;
                this.technologies = resp.data.technologies;
            })
        }
    },
    mounted() {
        this.getProjectDetails();
    }
}
</script>
<style></style>