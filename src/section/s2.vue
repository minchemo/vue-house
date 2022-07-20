<template>
    <div class="s2 relative">
        <Fullview />
        <div class="caption font-['noto_sans_tc']">空拍鳥瞰經電腦合成示意圖</div>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
    width: 100%;
    height: size(1080);

    .caption {
        position: absolute;
        font-size: size(13);
        color: #fff;
        bottom: size(12.5);
        right: size(25);
        text-shadow: 0.1em 0.1em 0.2em black
    }
}

@media screen and (max-width:768px) {

    .s2 {
        height: size-m(667);

        .caption {
            font-size: size-m(13);
        }
    }

}
</style>

<script setup>
import Fullview from '../components/fullview.vue';
</script>