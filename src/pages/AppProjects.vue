<template>
    <div class="container">
        <ul>
            <li v-for="project in store.projects.data"> {{ project.title }}
                <button class="btn btn-primary"><router-link
                        :to="{ name: 'projects-details', params: { slug: project.slug } }">See
                        Details</router-link></button>
            </li>
        </ul>
        <button class="btn btn-primary" @click="nextPage">Next</button>
    </div>
</template>
<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AppProjects',
    data() {
        return {
            store,
            currPage: null,
            srcNext: null
        }
    },
    methods: {
        nextPage() {
            if (this.currPage == store.projects.last_page) {
                this.srcNext = store.projects.first_page_url;
            }
            axios.get(this.srcNext).then(res => {

                console.log(this.srcNext);
                this.store.projects = res.data.results;
                console.log(store.projects);
                this.currPage = res.data.results.current_page;
                this.srcNext = res.data.results.next_page_url;

            })
        },

        getAllProjects() {
            axios.get(store.apiUrl + "/projects").then(res => {

                this.store.projects = res.data.results;
                this.currPage = res.data.results.current_page;
                this.srcNext = res.data.results.next_page_url;

                console.log(store.projects);

            });
        },
        getProjectDetails() {

        }
    },
    mounted() {
        this.getAllProjects();
        //console.log(store.projects);
    },
}
</script>
<style></style>