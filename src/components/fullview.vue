<template>
    <div class="viewbox" ref="viewbox">
        <img ref="viewImg" src="@/section/s2/1.jpg" alt="" srcset="">
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.viewbox {
    position: relative;
    width: 100%;
    height: 100%;
    background: #eee;

    img {
        width: 100%;
        height: 100%;
    }

}

@media screen and (max-width: 767px) {
    .viewbox {
        height: size-m(667);
        overflow-y: hidden;
        overflow-x: scroll;

        img {
            width: auto;
            height: 100%;
        }
    }
}
</style>
<script setup>
import BScroll from '@better-scroll/core'
import { onMounted, ref } from 'vue';

const viewbox = ref()
const viewImg = ref()
const offsetRatio = 2.85; //調整此值設定X軸位置偏移參數


onMounted(() => {
    viewImg.value.addEventListener('load', () => {

        let scroll = new BScroll(viewbox.value, {
            probeType: 2,
            scrollX: true,
            scrollY: true,
            disableTouch: false,
            disableMouse: false,
            bindToWrapper: true,
            eventPassthrough: "vertical",
            bounce: false,
        })

        scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500);
        setTimeout(() => {
            scroll.on("scroll", () => {
                // $(this.$refs.viewHand).fadeOut();
            });
        }, 1000);
    })


})


</script>