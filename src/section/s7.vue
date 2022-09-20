<template>
    <div class="s7 relative">
        <div class="text">
            <div class="t1" data-aos="flip-left" data-aos-delay="0">日式庭院<br>
                16項全齡公設</div>
            <div class="t12" data-aos="flip-left" data-aos-delay="0">蔦屋書店進駐選書<br>和風書香 日進月步</div>    
            <div class="line"></div>
            <div class="t2 font-['Noto_sans_tc']" data-aos="flip-left" data-aos-delay="200">
                日進學不只享有第一排學區書香，更堅持打造日式生活風格，特別聘請有日本最美書店之稱的蔦屋書店進駐選書，打造專屬的日系精品閱讀空間，讓孩子回家也能沉浸在優質書香，學習成長日進月步！十六項全齡公設，滿足獨自休閒、親友歡聚、的各種需求，為每一位家庭成員量身打造動靜皆宜的生活饗宴。
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
        .t12{
            font-weight: 400;
            font-size: size(25);
        }

        .line {
            width: 100%;
            height: size(3);
            background-color: #B3CD66;
        }

        .t2 {
            font-weight: 400;
            font-size: size(18);
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
            height: size-m(400);
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

            .t12 {
                font-size: size-m(18);
                line-height: size-m(25);
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
                gap: size-m(8);
                justify-content: flex-start;
                width: 100%;

                li {
                    button {
                        width: size-m(8);
                        height: size-m(8);
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
        caption: '挑高7米5迎賓大廳3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/2_m.jpg", import.meta.url).href : new URL("../section/s7/2.jpg", import.meta.url).href,
        caption: '蔦屋選書閱讀區3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/3_m.jpg", import.meta.url).href : new URL("../section/s7/3.jpg", import.meta.url).href,
        caption: '健身房3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/4_m.jpg", import.meta.url).href : new URL("../section/s7/4.jpg", import.meta.url).href,
        caption: '高爾夫模擬室3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/5_m.jpg", import.meta.url).href : new URL("../section/s7/5.jpg", import.meta.url).href,
        caption: '瑜珈教室3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/6_m.jpg", import.meta.url).href : new URL("../section/s7/6.jpg", import.meta.url).href,
        caption: '兒童遊戲室3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/7_m.jpg", import.meta.url).href : new URL("../section/s7/7.jpg", import.meta.url).href,
        caption: '開放家教區3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/8_m.jpg", import.meta.url).href : new URL("../section/s7/8.jpg", import.meta.url).href,
        caption: '媽媽教室3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/9_m.jpg", import.meta.url).href : new URL("../section/s7/9.jpg", import.meta.url).href,
        caption: '宴會廳3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/10_m.jpg", import.meta.url).href : new URL("../section/s7/10.jpg", import.meta.url).href,
        caption: '娛樂室3D示意圖'
    },
])
</script>