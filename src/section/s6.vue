<template>
    <div class="s6 relative">
        <div class="text">
            <div class="t1" data-aos="flip-left" data-aos-delay="0">洲子洋絕版千坪基地<br />
                前校園後水岸雙首排</div>
            <div class="t2 font-['Noto_sans_tc']" data-aos="flip-left" data-aos-delay="200">
                洲子洋領頭建商茂德建設，特選「日進學」首發日系建築外觀，外觀採黃金比例分割，公設由職人操刀，嚴選日系精品建材，貼心為客戶圓夢成家。
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

.s6 {
    width: 100%;
    height: size(900);
    background-image: url('@/section/s6/bg.jpg');
    background-size: cover;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    padding-left: size(83);
    gap: size(137);

    .text {
        margin-top: -#{size(250)};

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
            justify-content: flex-end;
            margin-top: size(25);
            margin-right: size(355);

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
            border-right: size(3) solid #9CBA52;
            border-top: size(3) solid #9CBA52;
            position: absolute;
            right: -#{size(35)};
            top: -#{size(35)};
        }

        &::after {
            content: '';
            width: size(539);
            height: 1px;
            border-bottom: size(3) solid #9CBA52;
            position: absolute;
            left: -#{size(83)};
            bottom: -#{size(35)};
        }
    }
}

@media screen and (max-width:768px) {

    .s6 {
        width: 100%;
        height: size-m(565);
        background-image: unset;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        padding-left: 0;
        gap: size-m(35);

        .text {
            width: 85%;
            margin-top: size-m(30);

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
            flex-basis: size-m(270);
            height: size-m(254.97);
            margin-bottom: size-m(35);

            .splide__track {
                overflow: visible;
            }

            .slide {
                width: size-m(375);
                height: size-m(254.97);

                .caption {
                    right: unset;
                    left: size-m(5);
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
                justify-content: flex-start;
                margin-top: size-m(10);
                margin-left: size-m(30);

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
                left: 0;
                top: -#{size-m(15)};
            }

            &::after {
                content: '';
                width: size-m(196);
                height: 1px;
                border-bottom: size-m(3) solid #9CBA52;
                position: absolute;
                right: 0;
                left: unset;
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
        img: globals.$isMobile() ? new URL("../section/s6/1_m.jpg", import.meta.url).href : new URL("../section/s6/1.jpg", import.meta.url).href,
        caption: '建築外觀3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s6/2_m.jpg", import.meta.url).href : new URL("../section/s6/2.jpg", import.meta.url).href,
        caption: ''
    },
])
</script>