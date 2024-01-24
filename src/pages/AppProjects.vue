<template>
    <AppHero :pageTitle="'Projects'" />
    <div class="container">
        <select @change="getAllProjects()" v-model="selectedType" name="type">
            <option value="">All</option>
            <option v-for="item in typesList" :value="item.id">
                {{ item.name }}
            </option>
        </select>


        <div class="row">
            <div class="col-3" v-for="project in store.projects.data">


                <AppCard :project="project" :shortText="true" />

                <router-link class="btn btn-primary" :to="{ name: 'projects-details', params: { slug: project.slug } }">
                    See Details
                </router-link>

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
            srcNext: null,
            typesList: null,
            selectedType: null

        };
    },
    methods: {
        nextPage() {
            if (this.currPage == store.projects.last_page) {
                this.srcNext = store.projects.first_page_url;
            }
            axios.get(this.srcNext).then(res => {
                //console.log(this.srcNext);
                this.store.projects = res.data.results;
                console.log(store.projects);
                this.currPage = res.data.results.current_page;
                this.srcNext = res.data.results.next_page_url;
            });
        },
        getAllProjects() {
            const params = {};

            if (this.selectedType) {
                params.params = { type: this.selectedType }

            }

            axios.get(store.apiUrl + "/projects", params).then(res => {
                console.log(res.data.results)
                if (res.data.results.data) {
                    this.store.projects = res.data.results;
                    this.currPage = res.data.results.current_page;
                    this.srcNext = res.data.results.next_page_url;
                } else {
                    this.store.projects.data = res.data.results;
                    // this.currPage = res.data.results.current_page;
                    // this.srcNext = res.data.results.next_page_url;
                }


            });
        },
        getTypesList() {
            axios.get(store.apiUrl + '/types').then(res => {
                //console.log(res.data.results);
                this.typesList = res.data.results;
            });
            //return types
        },
        filterByType() {
            //axios.get(store.apiUrl+)
            //console.log(store.projects);


            const resultFilter = store.projects.data.filter(el => {
                //console.log(el);

                el.type == this.selectedType
            })
            //console.log(resultFilter)
            return resultFilter
        }
    },
    //computed: {
    // filterByType() {
    //     //axios.get(store.apiUrl+)
    //     console.log(store.projects);


    //     const resultFilter = store.projects.data.filter(el => {
    //         //console.log(el);

    //         el.type == this.selectedType
    //     })
    //     console.log(resultFilter)
    //     return resultFilter
    // }
    //},
    mounted() {
        this.getAllProjects();
        this.getTypesList();
        //console.log(store.projects);
    },
    components: { AppCard, AppHero }
}
</script>
<style></style>