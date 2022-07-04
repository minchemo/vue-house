<template>
    <div class="s2 relative ">
        <img src="@/section/s2/play.svg" alt="" srcset="">
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
    width: 100%;
    height: size(1080);
    background-image: url('@/section/s2/bg.jpg');
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: size(96);
    }
}

@media screen and (max-width:768px) {
    .s2 {
        img {
            width: size-m(50);
        }
    }
}
</style>

<script setup>
</script>