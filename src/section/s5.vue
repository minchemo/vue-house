<template>
    <div class="s5 relative">
        <div class="text">
            <img class="leaf leaf1" data-aos-duration="1000" data-aos="leafIn" src="@/section/s5/leaf01.png" alt="">
            <img class="leaf leaf2" data-aos-duration="1000" data-aos="leafIn" src="@/section/s5/leaf02.png" alt="">
            <div class="t1" data-aos="flip-left" data-aos-delay="0">水岸活氧 大都會公園<br />
                下樓就是家庭運動場</div>
            <div class="t2 font-['Noto_sans_tc']" data-aos="flip-left" data-aos-delay="200">
                「日進學·日和」立地條件極佳，緊鄰五股國民運動中心及千坪公園，旁有新北大都會公園424頃的遼闊綠地，超過百座各式球場及全齡設施。近擁觀音山風景區，多條完善登山步道，飽覽首都街景。週末休閒育樂、親子踏青，下樓隨時出發。
            </div>
        </div>
        <Splide ref="splide" :options="{
            rewind: true,
            autoWidth: true,
            arrows: true,
            pagination: true,
            type: 'fade',
            autoplay: true,
            interval: 4000,
        }" @splide:move="move" class="slide-box z-10">
            <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
                <div class="caption font-['Noto_sans_tc']">{{ img.caption }}</div>
            </SplideSlide>

            <div class="arrows splide__arrows">
                <button class="splide__arrow splide__arrow--prev">
                    <img src="@/assets/prev.png" alt="" srcset="">
                </button>
                <button class="splide__arrow splide__arrow--next">
                    <img src="@/assets/next.png" alt="" srcset=""></button>
            </div>
        </Splide>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
    width: 100%;
    height: size(900);
    background-image: url('@/section/s5/bg.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: size(81);
    gap: size(137);

    .leaf {
        position: absolute;
        pointer-events: none;

        &.leaf1 {
            width: size(100);
            top: size(150);
            left: size(464);
        }

        &.leaf2 {
            width: size(113);
            top: size(337);
            left: size(618);
        }
    }

    .text {
        .t1 {
            font-weight: 600;
            font-size: size(42);
            margin-bottom: size(20);
        }

        .t2 {
            font-weight: 400;
            font-size: size(20);
            line-height: size(40);
            width: size(588);
        }
    }

    .slide-box {
        flex-basis: size(901);
        height: size(615);

        .splide__track {
            overflow: visible;
        }

        .slide {
            width: size(901);
            height: size(615);
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
            gap: size(21);
            justify-content: flex-start;
            margin-top: size(20);

            li {
                button {

                    width: size(20);
                    height: size(20);
                    background-color: #BEC9A4;
                    border-radius: 999px;

                    &.is-active {
                        background-color: #46B258;
                    }
                }
            }
        }

        &::before {
            content: '';
            width: size(415);
            height: size(445);
            border-left: size(3) solid #9CBA52;
            border-top: size(3) solid #9CBA52;
            position: absolute;
            left: -#{size(35)};
            top: -#{size(35)};
        }

        &::after {
            content: '';
            width: size(500);
            height: 1px;
            border-bottom: size(3) solid #9CBA52;
            position: absolute;
            right: 0;
            bottom: -#{size(35)};
        }
    }
}

@media screen and (max-width:768px) {

    .s5 {
        width: 100%;
        height: size-m(667);
        background-image: url('@/section/s5/bg_m.jpg');
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        padding-right: 0;
        gap: size-m(35);

        .leaf {

            &.leaf1 {
                width: size-m(51.6);
                top: size-m(56);
                left: size-m(132);
            }
            &.leaf2 {
                width: size-m(60);
                top: size-m(129);
                left: size-m(282.9);
            }
        }

        .text {
            width: 85%;
            margin-top: size-m(120);

            .t1 {
                font-size: size-m(25);
                line-height: size-m(36);
                margin-bottom: size-m(10);
            }

            .t2 {
                font-size: size-m(14);
                line-height: size-m(25);
                text-align: justify;
                width: unset;
            }
        }

        .slide-box {
            flex-basis: size-m(290);
            height: size-m(255.97);
            margin-bottom: size-m(35);

            .splide__track {
                overflow: visible;
            }

            .slide {
                width: size-m(375);
                height: size-m(255.97);

                .caption {
                    font-size: size-m(13);
                }
            }

            .arrows {
                width: size-m(352);

                img {
                    width: size-m(30.24)
                }
            }

            .splide__pagination {
                gap: size-m(12);
                justify-content: flex-end;
                margin-top: size-m(10);
                margin-right: size-m(30);

                li {
                    button {
                        width: size-m(12);
                        height: size-m(12);
                    }
                }
            }

            &::before {
                content: '';
                width: size-m(196);
                height: 0;
                border-left: 0;
                border-top: size-m(3) solid #9CBA52;
                position: absolute;
                left: unset;
                right: 0;
                top: -#{size-m(15)};
            }

            &::after {
                content: '';
                width: size-m(196);
                height: 1px;
                border-bottom: size-m(3) solid #9CBA52;
                position: absolute;
                right: unset;
                left: 0;
                bottom: 0;
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
        img: globals.$isMobile() ? new URL("../section/s5/1_m.jpg", import.meta.url).href : new URL("../section/s5/1.jpg", import.meta.url).href,
        caption: '大台北都會公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s5/2_m.jpg", import.meta.url).href : new URL("../section/s5/2.jpg", import.meta.url).href,
        caption: '大台北都會公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s5/3_m.jpg", import.meta.url).href : new URL("../section/s5/3.jpg", import.meta.url).href,
        caption: '五股運動中心旁公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s5/4_m.jpg", import.meta.url).href : new URL("../section/s5/4.jpg", import.meta.url).href,
        caption: '五股運動中心旁公園'
    },
])
</script>