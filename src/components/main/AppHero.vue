<template>
    <div class="hero my-bg-terciary pt-4 ">
        <h1 class="text-center mb-4">{{ pageTitle }} - Michele Ebau</h1>
        <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad temporibus voluptatibus incidunt
            dolore, iusto fuga rerum adipisci in neque, minus assumenda dolor, non nobis.
        </p>
    </div>
</template>
<script>
export default {
    name: 'AppHero',
    props: {
        pageTitle: String
    },
    data() {
        return {
            message: 'tu sorella',

        }
    }
}
</script>
<style></style>