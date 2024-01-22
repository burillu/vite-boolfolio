<template>
    <div class="card">
        <div class="card-body">
            <img :src="store.imgUrl + project.image" :alt="project.title">
            <h3 class="mb-3">{{ project.title }}</h3>
            <div v-if="shortText">
                <pre class="mb-3">{{ project.body.substr(0, 50) + '...' }}</pre>

            </div>
            <div v-else>
                <pre class="mb-3">{{ project.body }}</pre>
            </div>

            <a v-for="technology in project.technologies" :to="{ name: 'projects' }">
                <span class="badge rounded-pill" :class="'my-badge-' + technology.slug">{{ technology.name }}</span>
            </a>


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