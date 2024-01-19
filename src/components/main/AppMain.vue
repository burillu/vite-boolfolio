<template>
    <div class="container">
        <ul>
            <li v-for="project in store.projects"> {{ project.title }}</li>
        </ul>
    </div>
</template>
<script>
import { store } from '../../store'
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    }
}
</script>
<style></style>