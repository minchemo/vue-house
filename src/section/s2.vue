<template>
    <div class="s2 relative bg-[#8EF0E2]">
        <div class="info absolute bg-white">
            <div class="flex justify-center md:justify-start items-end ">
                <lazy-component>
                    <img class="girl" src="@/section/s2/i.png" alt="" srcset="">
                </lazy-component>
                <p class="title">5分鐘社口特區<br>
                    水岸藝術園區</p>
            </div>
            <div class="content">近鄰「社口重劃區」星巴克、UNIQLO商圈，奔放2.6公頃，「水岸藝術園區」，5分鐘悠遊之距，「興世代」房價僅約5折價，繁華共榮、休閒同享，省下來的預算，給家人更餘裕的享受
            </div>
            <div class="absolute bar"></div>
        </div>

        <Splide
            :options="{ rewind: true, autoWidth: true, arrows: false, type: 'fade', autoplay: true, interval: 4000 }"
            class="slide-box absolute z-10">
            <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
                <div class="caption absolute">{{ img.caption }}</div>
            </SplideSlide>
        </Splide>


        <lazy-component>
            <img class="absolute newstart" src="@/section/s2/newstart.png" alt="" srcset="">
        </lazy-component>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
    width: 100%;
    height: size(854);
    border-radius: size(180);

    .info {
        width: size(910);
        height: size(674);
        border-radius: size(190);
        left: size(136);
        top: size(99);
        padding: size(127) size(154) 0 size(110);
        color: #555555;

        .girl {
            height: size(200);
            margin-right: size(20);
        }

        .title {
            font-weight: 500;
            font-size: size(55);
            line-height: size(65.45);
        }

        .content {
            margin-top: size(54);
            font-weight: 400;
            font-size: size(26);
            line-height: size(46.8);
        }

        .bar {
            bottom: 0;
            left: 50%;
            margin-left: -#{size(60)};
            width: size(120);
            height: size(10);
            border-radius: size(10) size(10) 0 0;
            background-color: #7C716D;
        }
    }


    .slide-box {
        width: size(790);
        height: size(548.69);
        top: size(57);
        left: size(999);

        .splide__track {
            z-index: 10;
        }

        .slide {
            width: size(790);
            height: size(548.69);
            background-size: cover;
            border-radius: size(150);

            .caption {
                background: rgba($color: #000000, $alpha: .5);
                font-size: size(15);
                line-height: size(24);
                color: #fff;
                border-radius: size(6) size(6) 0 0;
                padding: 0 size(8) 0 size(8);
                bottom: 0;
                left: size(150);
            }
        }

        &::after {
            content: '';
            width: size(863);
            height: size(503);
            background-image: url('@/section/s2/bubble.png');
            background-size: cover;
            background-position: center;
            position: absolute;
            bottom: -#{size(30)};
            left: -#{size(100)};
            z-index: 0;
        }

        .splide__pagination {
            position: absolute;
            right: -#{size(35)};
            bottom: size(120);
            flex-direction: column;

            li {
                height: size(20);
                margin-bottom: size(10);

                .splide__pagination__page {
                    width: size(20);
                    height: size(20);
                    border: size(4) solid #fff;
                    border-radius: 100%;

                    &.is-active {
                        border-color: #00CBD1;

                    }
                }
            }
        }
    }

    .newstart {
        width: size(709);
        left: size(1064);
        top: size(668);
    }
}

@media screen and (max-width:768px) {
    .s2 {
        width: size-m(375);
        height: size-m(600);
        border-radius: size-m(68);


        .info {
            width: size-m(326);
            height: size-m(555);
            border-radius: size-m(64);
            left: size-m(24);
            top: size-m(20);
            padding: size-m(290) size-m(18) size-m(55) size-m(18);
            color: #555555;

            .girl {
                height: size-m(74);
                margin-right: size-m(10);
            }

            .title {
                font-size: size-m(23);
                line-height: size-m(27.37);
            }

            .content {
                margin-top: size-m(20);
                font-weight: 400;
                font-size: size-m(15);
                line-height: size-m(24);
            }

            .bar {
                bottom: unset;
                top: 100%;
                left: 50%;
                margin-left: -#{size-m(30)};
                width: size-m(66);
                height: size-m(5);
                border-radius: 0px 0px 5px 5px;
                background-color: #7C716D;
            }
        }

        .slide-box {
            width: size-m(300);
            height: size-m(208);
            top: size-m(51);
            left: size-m(43);

            .slide {
                width: size-m(300);
                height: size-m(208);
                border-radius: size-m(50);

                .caption {
                    font-size: size-m(12);
                    line-height: size-m(20);
                    color: #fff;
                    border-radius: size-m(6) size-m(6) 0 0;
                    padding: 0 size-m(8) 0 size-m(8);
                    bottom: 0;
                    left: size-m(50);
                }
            }

            &::after {
                width: size-m(284);
                height: size-m(230);
                background-image: url('@/section/s2/bubble_m.png');
                bottom: -#{size-m(40)};
                left: -#{size-m(10)};
            }

            .splide__pagination {
                display: none;
            }
        }

        .newstart {
            display: none;
        }
    }
}
</style>

<script setup>
import { ref } from 'vue';

const imgs = ref([
    {
        img: new URL('../section/s2/1.jpg', import.meta.url).href,
        caption: '社口特區 (星巴克 UNIQLO)'
    },
    {
        img: new URL('../section/s2/2.jpg', import.meta.url).href,
        caption: '社口特區 (水岸藝術園區)'
    },
    {
        img: new URL('../section/s2/3.jpg', import.meta.url).href,
        caption: '社口特區 (水岸藝術園區)'
    },
]);
</script>