<template>
    <div class="s3 relative">
        <div class="section1">
            <div class="text">
                <div class="t1" data-aos="flip-left" data-aos-delay="0">百年校園當鄰居 <br v-if="$isMobile()" />吃飽睡好上學沒煩惱</div>
                <div class="t2 font-['Noto_sans_tc']" data-aos="flip-left" data-aos-delay="200">
                    過一條馬路，就是成州國小，擁有13項特色教育，就近享受百年學風薰陶。在日進學·日和，沒有通學煩惱，早起不再手忙腳亂，天天都吃飽睡好。日進學的孩子一出家門就擁有萬坪水岸綠地任意翱翔，多座運動公園、市立圖書館的豐富資源，全方面拓展生活體驗，打下未來良好基礎。
                </div>
            </div>
            <Splide ref="splide" :options="{
                rewind: true,
                autoWidth: true,
                arrows: false,
                pagination: false,
                type: 'fade',
                autoplay: true,
                interval: 2000,
            }" @splide:move="move" class="slide-box z-10">
                <SplideSlide class="slide" v-for="img in imgs1" v-lazy:background-image="img.img">
                    <div class="caption font-['Noto_sans_tc']">{{ img.caption }}</div>
                </SplideSlide>
            </Splide>
        </div>
        <div class="section2">
            <div class="text">
                <div class="t1" data-aos="flip-left" data-aos-delay="0">洲子洋生活機能核心 <br v-if="$isMobile()" />便捷生活全掌握</div>
                <div class="t2 font-['Noto_sans_tc']" data-aos="flip-left" data-aos-delay="200">
                    日常無缺的成熟機能，沒有商業活動的喧鬧，校園醇厚學風首席，坐擁萬坪河堤綠景。「日進學·日和」，在洲子洋實現真正以人為本的「本質生活圈」1分鐘U-BIKE站，4分鐘成州市場、5分鐘全聯福利中心，家庭採買輕鬆愜意！3分鐘台64線，6分鐘捷運蘆洲站，隨時串連雙北繁華！
                </div>
            </div>
            <Cat />
            <img class="bookcase" src="@/section/s3/bookcase.png" alt="" srcset="">
            <img data-aos="zoom-in" class="tip" src="@/section/s3/chat.svg" alt="" srcset="">
            <Splide ref="splide" :options="{
                rewind: true,
                autoWidth: true,
                arrows: true,
                pagination: true,
                type: 'fade',
                autoplay: true,
                interval: 2000,
            }" @splide:move="move" class="slide-box z-10">
                <SplideSlide class="slide" v-for="img in imgs2" v-lazy:background-image="img.img">
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
            <div class="bubbles">
                <div class="bubble font-['noto_sans_tc']" :class="`bubble-${i}`" @click="splide.splide.go(i)"
                    v-bind:class="{ 'active': currentIdx == i }" v-for="bubble, i in bubbles" v-html="bubble.content">
                </div>
            </div>
            <img data-aos="zoom-in" class="book" src="@/section/s3/book.png" alt="" srcset="">
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
    width: 100%;
    height: size(2014);
    background-image: url('@/section/s3/bg.jpg');
    background-size: cover;

    .section1 {
        align-items: center;
        justify-content: flex-end;
        display: flex;
        gap: size(118);
        padding-top: size(134);
        height: size(830);

        .text {
            width: size(685);

            .t1 {
                font-weight: 600;
                font-size: size(42);
                margin-bottom: size(10);
            }

            .t2 {
                font-weight: 400;
                font-size: size(20);
                line-height: size(40);
            }
        }

        .slide-box {
            flex-basis: size(915);
            height: size(624);
            position: relative;

            .slide {
                width: size(915);
                height: size(624);
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

    .section2 {
        position: relative;
        height: size(1184);

        .bubbles {
            position: absolute;
            top: size(615.49);
            left: size(210);
            display: flex;
            align-items: center;
            gap: size(31.49);

            .bubble {
                width: size(163.51);
                height: size(163.51);
                border: size(3) solid #46B258;
                border-radius: 9999px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                font-size: size(32);
                line-height: size(48);
                text-align: center;
                cursor: pointer;
                transition: all .2s;
                color: #46B258;

                &.active {
                    background-color: #FFEF00;
                }

                &:hover {
                    background-color: #FFEF00;

                }
            }
        }


        .cat {
            position: absolute;
            width: size(626);
            left: size(1133);
            bottom: -#{size(86)};
            z-index: 5;
        }

        .bookcase {
            width: size(219.05);
            position: absolute;
            left: size(1540.68);
            top: size(520);
        }

        .tip {
            position: absolute;
            width: size(201);
            top: size(262);
            left: size(1060);
        }

        .book {
            width: size(867);
            position: absolute;
            left: size(566);
            top: -#{size(442)};
            z-index: 10;
            pointer-events: none;
        }

        .text {
            position: absolute;
            bottom: size(154);
            left: size(210);
            width: size(889);

            .t1 {
                font-weight: 600;
                font-size: size(42);
                margin-bottom: size(10);
            }

            .t2 {
                font-weight: 400;
                font-size: size(20);
                line-height: size(40);
            }
        }

        .slide-box {
            width: size(875);
            height: size(534);
            position: relative;
            margin-left: size(53);

            .splide__track {
                overflow: visible;
            }

            .slide {
                width: size(875);
                height: size(534);
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
                width: size(931);
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
                justify-content: flex-end;
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
        }
    }
}

@media screen and (max-width:768px) {
    .s3 {
        height: size-m(1462);
        background-image: url('@/section/s3/bg_m.jpg');
        overflow: hidden;

        .section1 {
            justify-content: flex-start;
            flex-direction: column;
            gap: size-m(50);
            padding-top: size-m(30);
            height: size-m(588);

            .text {
                width: 84%;

                .t1 {
                    font-size: size-m(25);
                    line-height: size-m(36);
                    margin-bottom: size-m(10);
                }

                .t2 {
                    font-size: size-m(14);
                    line-height: size-m(25);
                    text-align: justify;
                }
            }

            .slide-box {
                flex-basis: size-m(375);
                height: size-m(256);
                position: relative;

                .slide {
                    width: size-m(375);
                    height: size-m(256);

                    .caption {
                        font-size: size-m(13);
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

        .section2 {
            position: relative;
            height: size-m(874);

            .bubbles {
                position: relative;
                top: unset;
                left: unset;
                gap: size-m(7);
                width: size-m(420);
                margin-left: -#{size-m(22.5)};
                margin-top: size-m(35);
                overflow-x: scroll;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                padding: 0 size-m(180);

                .bubble {
                    width: size-m(79);
                    height: size-m(79);
                    border: size-m(3) solid #46B258;
                    font-size: size-m(14);
                    line-height: size-m(22);


                    &.active {
                        background-color: #FFEF00;
                    }

                    &:hover {
                        background-color: #FFEF00;

                    }
                }
            }

            .cat {
                position: absolute;
                width: size-m(240);
                left: size-m(70);
                bottom: -#{size-m(120)};
                z-index: 5;
                pointer-events: none;
            }

            .bookcase {
                width: size-m(114);
                left: size-m(220);
                top: unset;
                bottom: -#{size-m(60)};
                pointer-events: none;
            }

            .tip {
                width: size-m(106);
                top: size-m(620);
                left: size-m(32);
            }

            .book {
                width: size-m(272);
                left: size-m(133);
                top: -#{size-m(180)};
                z-index: 10;
                pointer-events: none;
            }

            .text {
                position: relative;
                bottom: unset;
                left: unset;
                width: 85%;
                margin: 0 auto;
                margin-top: size-m(75);
                margin-bottom: size-m(20);

                .t1 {
                    font-size: size-m(25);
                    line-height: size-m(36);
                    margin-bottom: size-m(10);
                }

                .t2 {
                    font-size: size-m(14);
                    line-height: size-m(25);
                    text-align: justify;
                }
            }

            .slide-box {
                width: 100%;
                height: size-m(228.86);
                position: relative;
                margin-left: 0;

                .splide__track {
                    overflow: visible;
                }

                .slide {
                    width: 100%;
                    height: size-m(228.86);
                    background-size: cover;

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
                    justify-content: center;
                    margin-top: size-m(10);

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

}
</style>

<script setup>
import { ref, inject, getCurrentInstance } from "vue"
import AOS from 'aos';
import Cat from "./cat.vue";

const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
    currentIdx.value = prevIdx
    AOS.refresh();


    document.querySelector('.bubbles').scroll({
        left: document.querySelector(`.bubble-${currentIdx.value}`).offsetLeft - window.screen.width / 2.21,
        behavior: 'smooth'
    })


}
const globals = getCurrentInstance().appContext.config.globalProperties;
const imgs1 = ref([
    {
        img: globals.$isMobile() ? new URL("../section/s3/s1-1_m.jpg", import.meta.url).href : new URL("../section/s3/s1-1.jpg", import.meta.url).href,
        caption: '成州國小'
    },
])
const imgs2 = ref([
    {
        img: globals.$isMobile() ? new URL("../section/s3/s2-1_m.jpg", import.meta.url).href : new URL("../section/s3/s2-1.jpg", import.meta.url).href,
        caption: 'U-BIKE'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s3/s2-2_m.jpg", import.meta.url).href : new URL("../section/s3/s2-2.jpg", import.meta.url).href,
        caption: '台64號快速道路'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s3/s2-3_m.jpg", import.meta.url).href : new URL("../section/s3/s2-3.jpg", import.meta.url).href,
        caption: '成洲市場'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s3/s2-4_m.jpg", import.meta.url).href : new URL("../section/s3/s2-4.jpg", import.meta.url).href,
        caption: '全聯福利中心'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s3/s2-5_m.jpg", import.meta.url).href : new URL("../section/s3/s2-5.jpg", import.meta.url).href,
        caption: '捷運蘆洲站'
    },
])
const bubbles = ref([{
    content: '1分鐘<br/>U-BIKE'
}, {
    content: '3分鐘<br/>台64線'
}, {
    content: '4分鐘<br/>成州市場'
}, {
    content: '5分鐘<br/>全聯'
}, {
    content: '6分鐘<br/>蘆洲站'
}])


</script>