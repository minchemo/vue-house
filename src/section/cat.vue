<template>
    <div class="cat">
        <img class="body" src="@/section/s3/cat2.png">
        <img class="mouth" src="@/section/s3/cat1.gif">
    </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";

.cat {
    width: 100%;

    .body {
        width: 100%;
    }

    .mouth {
        position: absolute;
        top: 13%;
        left: 26%;
        width: 50%;
        z-index: 1;
    }
}
</style>
<script setup>
</script>