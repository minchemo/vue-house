<template>
    <article class="s11">
        <div class="text z-[3]" data-aos="fade-up" data-aos-delay="0">
            <div class="title text-center"><span class="font-bold">幸福推手</span><br>
                構築夢想家園</div>
            <div class="desc font-['Noto_sans_tc']">
                「佳鋐建設」堅守營建專業，掌握土地趨勢，貼心規劃優質住宅，預約城市未來價值，為愛家的人們打造夢想家園、做最好的建築。<br>

                相信，家的美好由此恆生。</div>
        </div>

        <Splide ref="splide" :options="{
            rewind: false,
            arrows: false,
            pagination: false,
            fixedWidth: isMobile ? size_m(255) : size(390.84),
            perPage: 3,
            perMove: 1,
            autoplay: true,
            interval: 4000,
            type: 'loop',
            gap: isMobile ? size_m(10) : size(18)
        }" @splide:mounted="setSize" @splide:moved="moved" class="slide-box">
            <SplideSlide class="slide" v-for="img in imgs" :style="{ backgroundImage: `url(${img.img})` }">
                <div class="caption font-['Noto_sans_tc']">{{ img.caption }}</div>
            </SplideSlide>
        </Splide>

        <div v-if="!$isMobile()" @click="splide.splide.go('>')" class="cursor-pointer">
            <img src="@/section/s11/prev.svg" alt="" srcset="">
        </div>

        <div class="arrows" v-if="$isMobile()">
            <img @click="splide.splide.go('<')" src="@/section/s11/prev_m.svg" alt="" srcset="">
            <img @click="splide.splide.go('>')" src="@/section/s11/next.svg" alt="" srcset="">
        </div>

        <img class="decor" v-if="$isMobile()" src="@/section/s10/decor.png" alt="" srcset="">
    </article>
</template>
  
<style lang="scss">
@import '@/assets/style/function.scss';

.s11 {
    width: 100%;
    height: size(1080);
    background: url('@/section/s11/bg.jpg');
    background-size: cover;
    background-position: top;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 0;
    z-index: 0;
    gap: size(65);

    .text {
        position: relative;
        width: size(382);
        font-weight: 500;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .title {
            font-size: size(60);
            line-height: size(70);
            text-align: center;
        }

        .desc {
            border-top: size(2) solid #fff;
            margin-top: size(40);
            padding-top: size(35);
            font-weight: 400;
            font-size: size(20);
            line-height: size(35);
            text-align: justify;
            letter-spacing: 0.03em;
        }
    }

    .slide-box {
        width: size(1208.4);

        .slide {
            width: size(390.84);
            height: size(600);
            background-size: cover;
        }
    }

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

    .s11 {
        width: 100%;
        height: size-m(619);
        background: url('@/section/s11/bg_m.jpg');
        background-size: cover;
        background-position: top;
        position: relative;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 0;
        z-index: 3;
        gap: size(65);

        .text {
            width: 100%;
            padding: size-m(0) size-m(30);

            .title {
                margin-top: size-m(20);
                font-size: size-m(30);
                line-height: 1.5;
                letter-spacing: 0.07em;
            }

            .desc {
                border-top: size-m(1) solid #fff;
                margin-top: size-m(20);
                padding-top: size-m(20);
                line-height: 1.5;
                font-size: size-m(15);
                text-align: justify;
                font-weight: 300;
            }
        }

        .slide-box {
            position: relative;
            z-index: 11;
            width: size-m(255);

            .slide {
                width: size-m(255);
                height: size-m(289.1);
            }
        }


        .arrows {
            position: absolute;
            top: size-m(160);
            width: 100%;
            z-index: 5;
            display: flex;
            justify-content: space-between;
            padding: 0 size-m(20);

            img {
                width: size-m(20);
                margin: unset;
            }
        }


        .decor {
            position: absolute;
            width: size-m(167);
            top: -#{size-m(33)};
            left: -#{size-m(27)};
            z-index: 0;
            animation: rotate 10s infinite linear;

            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
        }
    }

}
</style>
  <script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import { size, size_m } from '@/utils/size'

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const splide = ref(null);

const imgs = [
    {
        img: isMobile ? new URL("../section/s11/1_m.jpg", import.meta.url).href : new URL("../section/s11/1.jpg", import.meta.url).href,
        caption: '3D公設情境示意圖',
        label: '大廳'
    },
    {
        img: isMobile ? new URL("../section/s11/2_m.jpg", import.meta.url).href : new URL("../section/s11/2.jpg", import.meta.url).href,
        caption: '3D公設情境示意圖',
        label: '交誼廳'
    },
    {
        img: isMobile ? new URL("../section/s11/3_m.jpg", import.meta.url).href : new URL("../section/s11/3.jpg", import.meta.url).href,
        caption: '3D公設情境示意圖',
        label: '健身房'
    },
    {
        img: isMobile ? new URL("../section/s11/4_m.jpg", import.meta.url).href : new URL("../section/s11/4.jpg", import.meta.url).href,
        caption: '3D公設情境示意圖',
        label: '閱讀區'
    },
    {
        img: isMobile ? new URL("../section/s11/5_m.jpg", import.meta.url).href : new URL("../section/s11/5.jpg", import.meta.url).href,
        caption: '3D公設情境示意圖',
        label: '閱讀區'
    },
]



</script>
  