<template>
    <div class="gmap">
        <iframe :src="info.googleSrc" frameborder="0"></iframe>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.gmap {
    width: 100%;
    height: size(500);
    margin-top: size(50);
    iframe {
        width: 100%;
        height: 100%;
    }
}
</style>

<script setup>
import info from "@/info"

</script>