<template>
    <section id="home-content" class="bg-white position-card">
        <div class="container py-5">

            <div class="row flex-md-row-reverse">
                <div class="col-12 col-md-5 d-flex flex-column justify-content-center lh-lg">
                        <h2>Full-Stack Web Developer  </h2>
                        <p> In qualità di Full-Stack Developer, mi trovo spesso al crocevia tra creatività e tecnologia. <br>
                        La mia esperienza mi ha insegnato a padroneggiare ogni fase del processo di sviluppo, dal frontend all'infrastruttura backend, garantendo una sinergia impeccabile tra design e funzionalità.</p>
                    </div>
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-6">
                            <img src="https://png.pngtree.com/png-vector/20190811/ourmid/pngtree-vector-server-icon-png-image_1683167.jpg"
                                alt="img-server">

                        </div>
                        <div class="col-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/3621/3621616.png" alt="img coding">
                        </div>
                    </div>

                    

                </div>

            </div>
        </div>
    </section>
</template>
<script>
import { store } from '../../store';
import axios from 'axios';
export default {
    name: 'AppMain',
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

                // console.log(this.srcNext);
                this.store.projects = res.data.results;
                // console.log(store.projects);
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
        }
    },
    mounted() {
        //this.getAllProjects();
        //console.log(store.projects);
    },
}
</script>
<style lang="scss">
#home-content{
    position: relative;
    border-radius: 30px;
}

.svg-divider{
    transform: rotateX(110deg);    
    height: 200px;
    position:absolute;
    top:-130px;
    right: 0;
    left: 0;
}
.position-card{
    position:relative;
    top:-30px;
    right: 0;
    left: 0;
}
</style>