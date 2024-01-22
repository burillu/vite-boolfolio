<template>
    <AppHero :pageTitle="'Projects'" />
    <div class="container">
        <!-- <ul>
            
        </ul> -->
        <div class="row">
            <div class="col-3" v-for="project in store.projects.data">
                <AppCard :project="project" :shortText="true" />
                <button class="btn btn-primary"><router-link
                        :to="{ name: 'projects-details', params: { slug: project.slug } }">See
                        Details</router-link></button>
            </div>
        </div>
        <button class="btn btn-primary" @click="nextPage">Next</button>
    </div>
</template>
<script>
import AppCard from '@/components/AppCard.vue';
import { store } from '../store';
import axios from 'axios';
import AppHero from '@/components/main/AppHero.vue';
export default {
    name: 'AppProjects',
    data() {
        return {
            store,
            currPage: null,
            srcNext: null
        };
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
            });
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
    components: { AppCard, AppHero }
}
</script>
<style></style>