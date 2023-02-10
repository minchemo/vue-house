<template>
    <div class="s10 relative">
        <div class="title">
            <div class="btns">
                <div class="item" v-bind:class="{ 'active': slideType == '25' }"
                    @click="slideType = '25'; splide.splide.go(0);">25坪</div>
                <div class="item" v-bind:class="{ 'active': slideType == '29' }"
                    @click="slideType = '29'; splide.splide.go(0);">29坪</div>
            </div>
            <div class="t1" data-aos="fade" data-aos-delay="0">
                <div v-if="slideType == '25'">
                    沉穩雅致 雍容綻放
                </div>
                <div v-else>
                    精品美式 經典詮釋
                </div>
            </div>
            <div class="t2 font-['Noto_sans_tc']" data-aos="fade" data-aos-delay="200">
                <div v-if="slideType == '25'">
                    <ul>
                        <li>
                            全案採新古典奢華設計，沉穩氣度洗鍊質感，開門即見豪門氣韻
                        </li>
                        <li>公私領域區分明，互不干擾的空間既保有隱私性，也增添層次意趣</li>
                        <li>公用空間開放式設計、客廳、餐廳、廚房動線一氣呵成，遼闊大氣</li>
                        <li>電視櫃、電器櫃及廚具、收納櫃於同一動線整合，收納俐落使用順暢</li>
                        <li>大面開窗採光，格局方正，梁柱外推無壓樑</li>
                        <li>主臥以精品飯店元素雕琢，規劃獨立衣帽間，盡顯優雅收納美學</li>
                    </ul>
                </div>
                <div v-else>
                    <ul>
                        <li>
                            全案採美式精品風格，微奢語彙時尚姿態，回家就像走進精品飯店
                        </li>
                        <li>客餐廳和廚房採全開放式設計，省去繁雜動線，展現大宅般的虛懷若谷</li>
                        <li>格局方正，走道無虛坪浪費，坪效完美發揮，空間感大幅升級</li>
                        <li>正三房皆大面開窗大採光無暗房，樑柱外推床頭無壓樑，通透不壓迫</li>
                        <li>主臥以多元層次理念規劃L型衣帽間，闡陽輕盈有深度的空間哲學</li>
                        <li>次臥巧妙融入美式生活語彙，可自由轉換為書房或客房，使用更彈性</li>
                    </ul>
                </div>
            </div>
            <div class="arrows splide__arrows">
                <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
                    <img loading="lazy" src="@/section/s10/prev.svg" alt="" srcset="">
                </button>
                <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
                    <img loading="lazy" src="@/section/s10/next.svg" alt="" srcset=""></button>
            </div>
        </div>
        <Splide ref="splide" :options="{
            rewind: true,
            autoWidth: true,
            arrows: false,
            pagination: false,
            type: 'fade',
            autoplay: true,
            interval: 4000,
        }" @splide:move="move" class="slide-box">
            <SplideSlide class="slide" v-for="img in imgs[slideType]['img']">
                <img loading="lazy" v-if="$isMobile()" class="decor" src="@/section/s10/decor.png" alt="" srcset="">
                <img loading="lazy" class="img" :src="img.img" alt="" srcset="">
            </SplideSlide>
        </Splide>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
    width: 100%;
    height: size(1080);
    display: flex;
    align-items: center;
    background-color: #000;
    justify-content: flex-start;

    &::after {
        content: '';
        width: size(1);
        height: 100%;
        background-color: #ACA883;
        position: absolute;
        left: size(65);
        top: 0;
        z-index: 1;
        pointer-events: none;
    }

    .btns {
        display: flex;
        font-weight: 700;
        font-size: size(40);
        line-height: 150%;
        letter-spacing: size(.05);
        color: #ACA883;
        gap: size(25);
        margin-bottom: size(57);

        .item {
            border: size(1) solid #ACA883;
            padding: size(5) size(15);

            &:hover {

                background-color: #ACA883;
                color: #000;
                cursor: pointer;
            }

            &.active {
                background-color: #ACA883;
                color: #000;
            }
        }
    }

    .title {
        color: #fff;
        z-index: 1;
        padding-left: size(200);

        .t1 {
            font-weight: 700;
            font-size: size(40);
            margin-bottom: size(10);
            letter-spacing: size(.05);
            color: #ACA883;

            &::after {
                content: '';
                width: size(40);
                height: size(2);
                background-color: #ACA883;
                position: absolute;
                top: -#{size(15)};
                left: 0;
            }
        }

        .t2 {
            font-weight: 400;
            font-size: size(17);
            line-height: 150%;
            letter-spacing: size(.05);
            margin-bottom: size(80);

            ul {
                padding-left: size(30);

                li {
                    white-space: nowrap;
                    list-style-type: disc;
                    margin: 11px 0px;
                }
            }

            &::before {
                content: '';
                width: size(40);
                height: size(2);
                background-color: #ACA883;
                position: absolute;
                bottom: -#{size(30)};
                left: 0;
            }
        }

        .arrows {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            z-index: 10;
            

            img {
                width: size(30);
                margin: 15px 0px;
            }
        }
    }

    .slide-box {
        position: absolute;
        right: 0;

        .slide {
            height: size(1080);

            .img {
                width: auto;
                height: 100%;
            }
        }
    }
}

@media screen and (max-width:768px) {

    .s10 {
        width: 100%;
        height: size-m(950);
        display: flex;
        align-items: center;
        background-color: #000;
        justify-content: flex-start;
        flex-direction: column;

        &::after {
            content: '';
            display: none;
        }

        .btns {
            font-size: size-m(25);
            gap: size-m(32);
            margin-bottom: size-m(52);
            justify-content: center;
            margin-top: size-m(47);

            .item {
                border: size-m(1) solid #ACA883;
                padding: size-m(3) size-m(15);

                &:hover {

                    background-color: #ACA883;
                    color: #000;
                    cursor: pointer;
                }

                &.active {
                    background-color: #ACA883;
                    color: #000;
                }
            }
        }

        .title {
            padding-left: 0;
            width: 100%;

            .t1 {
                font-weight: 700;
                font-size: size-m(24.5);
                margin-bottom: 0;
                color: #F5EAD4;
                padding-left: size-m(30);

                &::after {
                    content: '';
                    width: size-m(40);
                    height: size-m(1);
                    background-color: #ACA883;
                    position: absolute;
                    top: -#{size-m(20)};
                    left: size-m(30);
                }

                &::before {
                    content: '';
                    width: size-m(40);
                    height: size-m(1);
                    background-color: #ACA883;
                    position: absolute;
                    bottom: -#{size-m(270)};
                    left: size-m(30);
                }
            }

            .t2 {
            font-weight: 400;
            width: 90%;
            font-size: size-m(12);
            line-height: 150%;
            letter-spacing: size-m(.05);
            margin-bottom: size-m(80);
            margin-left: size-m(15);

            ul {
                padding-left: size-m(30);

                li {
                    white-space: normal;
                    list-style-type: disc;
                    margin: 5px 0px;

                }
            }
            &::before {
                display: none;
            }
        }

            .arrows {
                flex-direction: row;
                gap: size-m(20);
                z-index: 10;
                padding-left: size-m(30);
                margin-top: size-m(40);

                img {
                    transform: rotate(-90deg);
                    width: size-m(20);
                }
            }
        }

        .slide-box {
            position: absolute;
            right: 0;
            bottom: 0;

            .slide {
                height: auto;
                width: size-m(375);

                .img {
                    position: relative;
                    width: 100%;
                    height: auto;

                }

                .decor {
                    width: size-m(101);
                    position: relative;
                    float: right;
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
const currentIdx = ref(0);
const slideType = ref('25');

const move = (newIdx, prevIdx, destIdx) => {
    currentIdx.value = prevIdx
    AOS.refresh();
}

const imgs = ref(
    {
        '29': {
            'img': [
                {
                    img: globals.$isMobile() ? new URL("../section/s10/29_1_m.jpg", import.meta.url).href : new URL("../section/s10/29_1.png", import.meta.url).href,
                },
                {
                    img: new URL("../section/s10/29_2.jpg", import.meta.url).href,
                },
                {
                    img: new URL("../section/s10/29_3.jpg", import.meta.url).href,
                },
                {
                    img: new URL("../section/s10/29_4.jpg", import.meta.url).href,
                },
            ]
        },
        '25': {
            'img': [
                {
                    img: globals.$isMobile() ? new URL("../section/s10/25_0_m.jpg", import.meta.url).href : new URL("../section/s10/25_0.png", import.meta.url).href,
                },
                {
                    img: new URL("../section/s10/25_1.jpg", import.meta.url).href,
                },
                {
                    img: new URL("../section/s10/25_2.jpg", import.meta.url).href,
                },]
        }
    },
)

</script>