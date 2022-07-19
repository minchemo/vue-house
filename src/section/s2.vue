<template>
    <div class="s2 relative">
        <Fullview />
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
    width: 100%;
    height: size(1080);
}

@media screen and (max-width:768px) {

    .s2 {
        height: size-m(667);
    }

}
</style>

<script setup>
import Fullview from '../components/fullview.vue';
</script>