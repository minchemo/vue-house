<template>
    <div class="rabbit">
        <img src="./s1/rabbit.gif" alt="rabbit" v-if="!$isMobile()">
        <img src="./s1/rabbit_m.gif" alt="rabbit" v-else>
        <img src="./s1/rabbit.png" alt="rabbit">
    </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";

.rabbit {

    img {
        width: 100%;
        vertical-align: bottom;
    }
}
</style>
<script setup>
</script>