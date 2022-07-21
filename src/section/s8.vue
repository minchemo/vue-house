<template>
    <div class="s8 relative">
        <div class="text">
            <div class="t1" data-aos="flip-left" data-aos-delay="0">{{ imgs[currentIdx].title }}</div>
            <div class="t2 font-['Noto_sans_tc']" data-aos="flip-left" data-aos-delay="200">
                汲取崗石材質色彩與紋理質感，營造簡約洗鍊的日系人文空間。大面落地窗迎接陽光與自然綠意，結合經典建築語彙與人文藝術涵養，打造出國際精品休閒飯店式的美學氛圍與質感時光
                。每一處空間質材的分割、比例、色調，都有最用心的思考。
            </div>
            <div class="btns">
                <div class="text-btn" @click="splide.splide.go(i)" v-bind:class="{ 'active': currentIdx == i }"
                    v-for="btn, i in imgs" v-html="btn.btn"></div>
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

.s8 {
    width: 100%;
    height: size(900);
    background-size: cover;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: flex-end;
    padding-left: size(83);
    gap: size(120);
    padding-bottom: size(100);

    .text {
        position: relative;

        .t1 {
            font-weight: 600;
            font-size: size(42);
            margin-bottom: size(60);
        }

        .t2 {
            font-weight: 400;
            font-size: size(20);
            line-height: size(40);
            width: size(476);
        }

        &::after {
            content: '';
            width: size(686);
            height: size(4);
            background-color: #B3CD66;
            position: absolute;
            top: size(70);
            left: 0
        }

        .btns {
            margin-top: size(173);
            display: flex;
            gap: size(57);

            .text-btn {
                font-weight: 700;
                font-size: size(24);
                border-bottom: size(3) solid #BEC9A4;
                color: #727171;
                cursor: pointer;

                span {
                    font-size: size(32);
                }

                &.active {
                    border-bottom: size(3) solid #46B258;
                    color: #251D1B;
                }

                &:hover {
                    border-bottom: size(3) solid #46B258;
                    color: #251D1B;
                }
            }
        }
    }

    .slide-box {
        flex-basis: size(1032);
        height: size(718);

        .splide__track {
            overflow: visible;
        }

        .slide {
            width: size(1032);
            height: size(718);
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
            width: size(1088.34);
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
            margin-top: size(25);

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

@media screen and (max-width:768px) {

    .s8 {
        width: 100%;
        height: size-m(712);
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding-left: 0;
        gap: size-m(40);
        padding-bottom: 0;
        padding-top: size-m(120);

        .text {
            width: 85%;
            position: relative;

            .t1 {
                font-weight: 700;
                font-size: size-m(25);
                line-height: size-m(36);
                text-align: left;
                margin-bottom: size-m(58);
            }

            .t2 {
                font-weight: 400;
                font-size: size-m(14);
                line-height: size-m(25);
                flex-basis: unset;
                text-align: justify;
                width: unset;
            }

            &::after {
                width: size-m(315);
                height: 1px;
                top: size-m(60);
                left: 0
            }

            .btns {
                position: absolute;
                margin-top: 0;
                display: flex;
                gap: size-m(32);
                top: -#{size-m(70)};

                .text-btn {
                    font-weight: 700;
                    font-size: size-m(16);
                    border-bottom: size-m(3) solid #BEC9A4;
                    color: #727171;
                    cursor: pointer;

                    span {
                        font-size: size-m(20);
                    }

                    &.active {
                        border-bottom: size-m(3) solid #46B258;
                        color: #251D1B;
                    }

                    &:hover {
                        border-bottom: size-m(3) solid #46B258;
                        color: #251D1B;
                    }
                }
            }
        }

        .slide-box {
            flex-basis: size-m(375);
            height: size-m(260.9);

            .splide__track {
                overflow: visible;
            }

            .slide {
                width: size-m(375);
                height: size-m(260.9);
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
        img: globals.$isMobile() ? new URL("../section/s8/tem.jpg", import.meta.url).href : new URL("../section/s8/tem.jpg", import.meta.url).href,
        caption: '圖說',
        title: '精緻2房  精品飯店美學',
        btn: '<span>23</span>坪/二房'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s8/tem.jpg", import.meta.url).href : new URL("../section/s8/tem.jpg", import.meta.url).href,
        caption: '圖說',
        title: '精緻3房  精品飯店美學',
        btn: '<span>33</span>坪/三房'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s8/tem.jpg", import.meta.url).href : new URL("../section/s8/tem.jpg", import.meta.url).href,
        caption: '圖說',
        title: '超值大3房  精品飯店美學',
        btn: '<span>33</span>坪/三房'
    },
])
</script>