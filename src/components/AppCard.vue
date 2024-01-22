<template>
    <div class="card">
        <div class="card-body">
            <img :src="store.imgUrl + project.image" :alt="project.title">
            <h3>Title: {{ project.title }}</h3>

            <div v-if="shortText">

                <pre class="mb-3">{{ project.body.substr(0, 10) + '...' }}</pre>

            </div>
            <div v-else>
                <div class="mb-3">
                    <h5>Type: {{ project.type.name }}</h5>
                </div>
                <pre class="mb-3">{{ project.body }}</pre>
            </div>

            <router-link v-for="technology in project.technologies" :to="{ name: 'projects' }">
                <span class="badge rounded-pill" :class="'my-badge-' + technology.slug">{{ technology.name }}</span>
            </router-link>



        </div>

    </div>
</template>
<script>
import { store } from '../store';
export default {

    name: 'AppCard',
    props: {
        project: Object,
        shortText: Boolean

    },
    data() {
        return {
            store,
        }
    }
}
</script>
<style></style>