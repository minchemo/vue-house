<template>
    <div class="s4 relative">
        <div class="title">
            <h2 class="t1">縱橫核心疆域 縱享繁華之最</h2>
            <p class="t2 font-['Noto_sans_tc']">
                自「長耀里」信步閑庭穿越富貴森林公園，黃金軸線文化三路近在眼前；回過頭，中山路商圈繁華燈火橫臥市心，運動中心舉步就到，明星雙語學區、美食採買、休閒活動盡在掌中，一種自然而然的崇高感由此而生。10
                分鐘悠然漫步，就能得到一切。
            </p>
        </div>
        <lazy-component>
            <img v-if="$isMobile()" class="time" src="@/section/s4/time_m.svg" alt="長耀里" srcset="">
        </lazy-component>
        <Splide ref="splide" :options="{
            rewind: true,
            autoWidth: true,
            arrows: true,
            pagination: false,
            type: 'fade',
            autoplay: true,
            interval: 4000,
        }" @splide:move="move" class="slide-box">
            <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
                <div class="caption font-['Noto_sans_tc']">{{ img.caption }}</div>
            </SplideSlide>

            <div class="arrows splide__arrows">
                <button class="splide__arrow splide__arrow--prev">
                    <img src="@/assets/prev.svg" alt="長耀里" srcset="">
                </button>
                <button class="splide__arrow splide__arrow--next">
                    <img src="@/assets/next.svg" alt="長耀里" srcset=""></button>
            </div>
        </Splide>

        <lazy-component>
            <img v-if="!$isMobile()" class="time" src="@/section/s4/time.svg" alt="長耀里" srcset="">
        </lazy-component>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
    width: 100%;
    height: size(1080);

    .title {
        color: #fff;
        position: absolute;
        z-index: 1;
        left: size(327);
        top: size(102);

        .t1 {
            font-weight: 700;
            font-size: size(40);
            margin-bottom: size(30);
            color: #F5EAD4;

            span {

                color: #F27C5A;
            }
        }

        .t2 {
            font-weight: 300;
            font-size: size(20);
            line-height: 150%;
            width: size(726);
            text-align: justify;
        }
    }

    .slide-box {
        .slide {
            width: size(1920);
            height: size(1080);
            background-size: cover;

            .caption {
                position: absolute;
                right: size(30);
                bottom: size(10);
                font-weight: 500;
                font-size: size(12);
                color: #fff;
            }
        }

        .arrows {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 97%;
            display: flex;
            justify-content: space-between;
            z-index: 10;

            img {
                width: size(17.75);
            }
        }
    }

    .time {
        position: absolute;
        z-index: 1;
        width: size(1314);
        left: 50%;
        bottom: size(43);
        transform: translateX(-50%);
    }
}

@media screen and (max-width:768px) {


    .s4 {
        height: size-m(968);
        background-color: #000;

        .title {
            position: relative;
            left: unset;
            top: unset;
            padding: size-m(30);

            .t1 {
                font-size: size-m(24.5);
                margin-bottom: size-m(14);
            }

            .t2 {
                font-size: size-m(12);
                line-height: 180%;
                width: size-m(315);
            }
        }

        .slide-box {
            position: absolute;
            width: 100%;
            height: size-m(438);
            bottom: 0;

            .slide {
                width: 100%;
                height: size-m(438);
                background-size: cover;

                .caption {
                    right: size-m(20);
                    bottom: size-m(10);
                    font-size: size-m(12);
                }
            }

            .arrows {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 97%;
                display: flex;
                justify-content: space-between;
                z-index: 10;

                img {
                    width: size-m(17.75);
                }
            }
        }

        .time {
            position: relative;
            width: size-m(315);
            left: 50%;
            bottom: unset;
            transform: translateX(-50%);
        }
    }

}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
import AOS from 'aos';
const globals = getCurrentInstance().appContext.config.globalProperties;

const splide = ref();
const currentIdx = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
    currentIdx.value = prevIdx
    AOS.refresh();
}

const imgs = ref([
    {
        img: globals.$isMobile() ? new URL("../section/s4/1_m.webp", import.meta.url).href : new URL("../section/s4/1.webp", import.meta.url).href,
        caption: '國道一號'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s4/2_m.webp", import.meta.url).href : new URL("../section/s4/2.webp", import.meta.url).href,
        caption: '新北影視城'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s4/3_m.webp", import.meta.url).href : new URL("../section/s4/3.webp", import.meta.url).href,
        caption: 'A9捷運站'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s4/4_m.webp", import.meta.url).href : new URL("../section/s4/4.webp", import.meta.url).href,
        caption: '文化三路&忠孝二路'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s4/5_m.webp", import.meta.url).href : new URL("../section/s4/5.webp", import.meta.url).href,
        caption: '三井OUTLET'
    },
])
</script>