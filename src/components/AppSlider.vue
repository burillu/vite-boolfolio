<template>
    <div>
        <TransitionGroup tag="div" :name="transitionName" class="slider-container row flex-nowrap overflow-hidden">
            <div class="row mb-4 " :key="transitionKey">
                <slot></slot>
            </div>
        </TransitionGroup>
    </div>
</template>
<script>
import { store } from "../store";
export default {
    name: 'AppSlider',
    props: {
        vueComponent: Object,
        transitionKey: Number ? Number : 0,
        arrayData: Array,
        transitionName: String
    },
    data() {
        return {
            store,
        }
    }
}
</script>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform .8s ease-in-out;
}

.slide-enter-from {
    transform: translateX(0);
}

.slide-enter-to {
    transform: translateX(-100%);
}

.slide-leave-from {
    transform: translateX(0);
}

.slide-leave-to {
    transform: translateX(-100%);
}

.slideback-enter-active,
.slideback-leave-active {
    transition: transform .8s ease-in-out;
}

.slideback-enter-from {
    transform: translateX(-200%);
}

.slideback-enter-to {
    transform: translateX(-100%);
}

.slideback-leave-from {
    transform: translateX(0);
}

.slideback-leave-to {
    transform: translateX(100%);
}
</style>