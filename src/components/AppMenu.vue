<template>
    <ul :class="isColumn ? 'flex-column' : 'flex-row'"
        class="ms-auto navbar-nav justify-space-between gap-2 gab-md-2 gap-lg-0 mb-2 mb-lg-0">
        <li class="nav-item" v-for="item in tabsArray">
            <router-link class="nav-link" active-class="active" :class="classTextColor" aria-current="page"
                :to="{ name: item.href }">{{
                    item.title }}</router-link>
        </li>
        <li v-if="btn" class="nav-item">
            <button class="my-btn my-btn-light" :class="btn.classBg">
                {{ btn.title }}
            </button>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'AppMenu',
    props: {
        classTextColor: String,
        tabsArray: Array,
        btn: Object ? Object : null,
        isColumn: Boolean ? Boolean : false,
    }

}
</script>
<style lang="scss">
@use '../assets/partials/variables' as *;

.navbar-nav .nav-link.active {
    color: $color-my-contrast;
}
</style>