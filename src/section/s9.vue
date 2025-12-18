<template>
    <article class="s9">
        <div class="main">
            <img src="./s9/s92_finger.svg" class="en" data-aos="zoom-in" data-aos-delay="500">
        </div>
        <div class="bg">
            <img src="./s9/s91_map.png" class="bg1" v-if="!isMobile">
            <img src="./s9/bgm.webp" class="bg1" v-else>
        </div>


    </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s9 {
    @apply relative overflow-hidden flex justify-center text-[#FFF];
    min-height: size(1080);
    max-height: size(1080);
    background: #12A19F;
    width: 100%;
    height: auto;
    //padding:7em 0 7em 0;
    font-size: size(32);
    gap: 4.4em;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: flex-end;

    .bg {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: absolute;

        .bg1 {
            width: 100%;
            height: 100%;
        }
    }


    .main {
        margin: auto 0;
        position: relative;
        padding-right: size(30);
        padding-bottom: size(50);

        .en {
            width: size(680);
            z-index: 99;
            position: relative;
            right: 420px;
            top: size(-350)
        }
    }

    .timg {
        @apply flex;
        flex-direction: column;
        width: size(735);
        height: auto;
        margin: .5em 0;
        text-align: center;
        justify-content: space-between;

        .t2 {
            width: size(735);
        }

        .t3 {
            width: size(588);
            margin: auto auto 0;
        }
    }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

    .s9 {
        height: calc(100vh - 33px);
        min-height: sizem(604);
        max-height: sizem(700);
        padding: 1em 0;
        font-size: sizem(14);
        margin-bottom: 0em;
        gap: 0;
        flex-direction: row;
        align-items: stretch;
        flex-wrap: wrap;
        align-content: flex-end;
        justify-content: flex-end;


        .bg {
            overflow: hidden;
            width: 100%;
            position: absolute;
            height: auto;
            top: sizem(30);

            .bg1 {
                width: 100%;
            }
        }

        .main {
            width: auto;
            padding-right: sizem(30);
            padding-bottom: sizem(10);
            text-align: right;

            .txt {
                line-height: 2.3;
            }

            .map-mask {}

            .en {
                width: sizem(300);
            }
        }

    }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const getImg = (path) => {
    if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
    return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
    currentSlideIndex.value = prevIdx
}

const options = {
    rewind: false,
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 4000,
    gap: 0,
    type: 'loop'
}

const imgs = [
    /*{
      img:new URL("./s4/0.jpg", import.meta.url).href ,
      caption: "中華西路接軌九份子重劃區、86快速道路"
    },*/
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>
