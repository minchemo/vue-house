<template>
    <div class="s7 relative">
        <div class="text">
            <div class="t1" data-aos="flip-left" data-aos-delay="0">精品飯店美學<br>
                崗石藝術迎賓門廳</div>
            <div class="line"></div>
            <div class="t2 font-['Noto_sans_tc']" data-aos="flip-left" data-aos-delay="200">
                汲取崗石材質色彩與紋理質感，營造簡約洗鍊的日系人文空間。大面落地窗迎接陽光與自然綠意，結合經典建築語彙與人文藝術涵養，打造出國際精品休閒飯店式的美學氛圍與質感時光
                。每一處空間質材的分割、比例、色調，都有最用心的思考。
            </div>
        </div>
        <Splide ref="splide" :options="{
            rewind: true,
            autoWidth: true,
            arrows: false,
            pagination: true,
            type: 'fade',
            autoplay: true,
            interval: 4000,
        }" @splide:move="move" class="slide-box z-10">
            <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
                <div class="caption font-['Noto_sans_tc']">{{ img.caption }}</div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
    width: 100%;
    height: size(900);

    .text {
        position: absolute;
        z-index: 50;
        width: size(465);
        height: 100%;
        top: 0;
        left: size(146);
        background: rgba(0, 0, 0, 0.61);
        background-blend-mode: darken;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: #fff;
        gap: size(27);
        padding: size(64);
        pointer-events: none;

        .t1 {
            font-weight: 600;
            font-size: size(42);
        }

        .line {
            width: 100%;
            height: size(3);
            background-color: #B3CD66;
        }

        .t2 {
            font-weight: 400;
            font-size: size(20);
            line-height: size(40);
            text-align: justify;
        }
    }

    .slide-box {
        position: absolute;
        left: 0;
        top: 0;
        width: size(1920);
        height: size(900);

        .splide__track {
            overflow: visible;
        }

        .slide {
            width: size(1920);
            height: size(900);
            background-size: cover;

            .caption {
                position: absolute;
                font-size: size(13);
                color: #fff;
                bottom: size(12.5);
                right: size(25);
                text-shadow: 0.1em 0.1em 0.2em black
            }
        }

        .arrows {
            position: absolute;
            width: size(949.34);
            display: flex;
            justify-content: space-between;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 5;

            img {
                width: size(55)
            }
        }

        .splide__pagination {
            position: absolute;
            bottom: size(20);
            left: 50%;
            transform: translateX(-50%);
            gap: size(21);
            justify-content: flex-end;

            li {
                button {

                    width: size(20);
                    height: size(20);
                    background-color: #fff;
                    border-radius: 999px;

                    &.is-active {
                        background-color: #838383;
                    }
                }
            }
        }
    }
}

@media screen and (max-width:768px) {

    .s7 {
        width: 100%;
        height: size-m(712);

        .text {
            width: 100%;
            height: size-m(299);
            top: 0;
            left: 0;
            gap: size-m(20);
            padding: size-m(30);
            backdrop-filter: blur(5px);

            .t1 {
                font-size: size-m(25);
                line-height: size-m(36);
                margin-bottom: size-m(0);
            }

            .line {
                min-height: size-m(2);
            }

            .t2 {
                font-size: size-m(14);
                line-height: size-m(25);
            }
        }

        .slide-box {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: size-m(712);

            .splide__track {
                overflow: visible;
            }

            .slide {
                width: 100%;
                height: size-m(712);
                background-size: contain;
                background-position: bottom;

                .caption {
                    font-size: size-m(13);
                }
            }

            .splide__pagination {
                position: absolute;
                bottom: size-m(10);
                padding-left: size-m(10);
                gap: size-m(12);
                justify-content: flex-start;
                width: 100%;

                li {
                    button {
                        width: size-m(12);
                        height: size-m(12);
                    }
                }
            }
        }
    }

}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
import AOS from 'aos';
const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
    currentIdx.value = prevIdx
    AOS.refresh();
}
const globals = getCurrentInstance().appContext.config.globalProperties;
const imgs = ref([
    {
        img: globals.$isMobile() ? new URL("../section/s7/1_m.jpg", import.meta.url).href : new URL("../section/s7/1.jpg", import.meta.url).href,
        caption: '閱覽室3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/2_m.jpg", import.meta.url).href : new URL("../section/s7/2.jpg", import.meta.url).href,
        caption: '迎賓大廳及宅配室3D示意圖'
    },
])
</script>