<template>
    <div class="s6 relative">
        <div class="title">
            <div class="t1" data-aos="fade" data-aos-delay="0">長耀建築 <span>永恆價值</span><br />
                林口黃金軸線上的凌雲壯志</div>
            <div class="t2" data-aos="fade" data-aos-delay="200">
                豪宅的定義不在價格，而在於追求的價值。
            </div>
            <div class="t3 font-['Noto_sans_tc']" data-aos="fade" data-aos-delay="400">
                在林口，只有長耀真正懂得土地與建築的價值，延請台北市豪宅團隊擘劃，名師大匠精心琢磨，因地制宜，攬景入境，完美發揮森林第一排價值，26
                層雄壯身姿，擎起富貴公園新古典頂級地標不凡氣勢，一席大師鉅作，尊貴不必言表，風華傳世珍藏。
            </div>
        </div>
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
                    <img src="@/assets/prev.svg" alt="" srcset="">
                </button>
                <button class="splide__arrow splide__arrow--next">
                    <img src="@/assets/next.svg" alt="" srcset=""></button>
            </div>
        </Splide>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
    width: 100%;
    height: size(1080);

    .title {
        color: #fff;
        position: absolute;
        z-index: 1;
        left: size(80);
        top: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .t1 {
            font-weight: 700;
            font-size: size(40);
            margin-bottom: size(40);
            color: #fff;

            span {
                color: #F5EAD4;
            }

            text-shadow: 0px size(4) size(4) rgba(0, 0, 0, 0.25);
        }

        .t2 {
            font-weight: 700;
            font-size: size(24);
            line-height: size(34);
            margin-bottom: size(30);
        }

        .t3 {
            font-weight: 300;
            font-size: size(20);
            line-height: 150%;
            letter-spacing: size(.05);
            width: size(416);
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
                left: 50%;
                bottom: size(10);
                transform: translateX(-50%);
                font-weight: 500;
                font-size: size(12);
                color: #fff;
            }
        }

        .arrows {
            position: absolute;
            top: 95%;
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

    .s6 {
        height: size-m(933);

        .title {
            pointer-events: none;
            left: 0;
            top: 0;
            height: size-m(300);
            width: 100%;
            padding: size-m(33);
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);

            .t1 {
                font-size: size-m(24.5);
                margin-bottom: size-m(11);
            }

            .t2 {
                font-size: size-m(14);
                line-height: size-m(20);
                margin-bottom: size-m(13);
            }

            .t3 {
                font-size: size-m(12);
                line-height: 180%;
                letter-spacing: size-m(.02);
                width: 100%;
            }
        }

        .slide-box {
            .slide {
                width: 100%;
                height: size-m(933);
                background-size: 100% auto;
                background-position: bottom;

                .caption {
                    bottom: size-m(10);
                    font-size: size-m(12);
                }
            }

            .arrows {
                top: 70%;

                img {
                    width: size-m(17.75);
                }
            }
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
        img: globals.$isMobile() ? new URL("../section/s6/1_m.jpg", import.meta.url).href : new URL("../section/s6/1.jpg", import.meta.url).href,
        caption: '3D建築外觀示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s6/2_m.jpg", import.meta.url).href : new URL("../section/s6/2.jpg", import.meta.url).href,
        caption: '3D建築外觀示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s6/3_m.jpg", import.meta.url).href : new URL("../section/s6/3.jpg", import.meta.url).href,
        caption: '3D建築外觀示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s6/6_m.jpg", import.meta.url).href : new URL("../section/s6/6.jpg", import.meta.url).href,
        caption: '3D建築外觀示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s6/4_m.jpg", import.meta.url).href : new URL("../section/s6/4.jpg", import.meta.url).href,
        caption: '3D建築一樓外觀示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s6/5_m.jpg", import.meta.url).href : new URL("../section/s6/5.jpg", import.meta.url).href,
        caption: '3D建築外觀夜景示意圖'
    },
    
])
</script>