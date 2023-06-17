<template>
    <div class="s5 relative">
        <div class="title">
            <div class="t1">不做<span>平凡</span> 只做<span>地標</span></div>
            <div class="t2">在林口的天際線上，沒有人比長耀更具企圖心。</div>
            <div class="t3 font-['noto_sans_tc']">
                長耀建設只願取精華中的精華，蓋地標中的地標，自富人聚居的扶輪公園、繁華的三井商圈、國際影視特區到富貴森林公園，一出手，必在精華區段樹立經典鉅作。<br /><br />

                「長耀Park」以29層凌空視野，打開林口天際全新景觀；「長耀初」用27層傲人身段，再現市心擎天建築美學；<br>「長耀里」26層雲頂地標的姿態立足富貴公園裡。一次又一次的新高度，圓滿所有層峰視野的期望。<br />
                仰之彌高，才是地標，而長耀建設，不做平凡，只做地標。 </div>
        </div>
        <div class="works">
            <Splide ref="splide" :options="{
                rewind: true,
                arrows: false,
                pagination: $isMobile() ? true : false,
                type: $isMobile() ? 'loop' : 'slide',
                autoWidth: true,
                autoplay: $isMobile() ? true : false,
                interval: 4000,
                // perPage: $isMobile() ? 6 : timelines.length,
                focus: 'center',
                gap: 0,
                start: $isMobile() ? 2 : 20,
                drag: $isMobile() ? true : false,
                snap: $isMobile() ? true : false
            }" @splide:moved="moved" class="slide-box">
                <SplideSlide class="slide" @mouseover="selectImg = i" @mouseleave="selectImg = ''"
                    v-for="img, i in imgs" v-lazy:background-image="img.img">
                    <div class="caption font-['noto_serif_jp']">{{ img.content }}</div>
                </SplideSlide>
            </Splide>
        </div>

        <div class="timelines">
            <Splide ref="splide" :options="{
                rewind: true,
                arrows: false,
                pagination: false,
                type: $isMobile() ? 'loop' : 'slide',
                autoWidth: true,
                autoplay: false,
                interval: 4000,
                perPage: $isMobile() ? 6 : timelines.length,
                padding: $isMobile() ? 0 : 0,
                focus: 'center',
                gap: 0,
                start: $isMobile() ? 0 : 20,
                drag: $isMobile() ? 'free' : false,
                snap: $isMobile() ? true : false
            }" @splide:move="move" class="slide-box">
                <SplideSlide class="slide" v-bind:class="{ 'selected': selectImg == timeline.targetImg }"
                    v-for="timeline, i in timelines">
                    <div class="box">
                        <div class="year font-['noto_serif_tc']" v-html="timeline.year"></div>
                        <div class="dot"></div>
                        <div class="txt">
                            <div class="name font-['noto_serif_jp']">{{ timeline.name }}</div>
                        </div>
                    </div>
                    <div class="content font-['noto_sans_tc']">
                        <div v-for="content, i in timeline.content">
                            {{ content }}
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>

        <lazy-component>
            <img class="rb_leaf pointer-events-none" src="@/section/s5/rb_leaf.webp" alt="" srcset="">
            <img v-if="$isMobile()" class="rt_leaf pointer-events-none" src="@/section/s5/rt_leaf_m.webp" alt=""
                srcset="">
            <img v-else class="rt_leaf pointer-events-none" src="@/section/s5/rt_leaf.webp" alt="" srcset="">
            <img v-if="$isMobile()" class="lt_leaf pointer-events-none" src="@/section/s5/lt_leaf_m.webp" alt=""
                srcset="">
            <img v-else class="lt_leaf pointer-events-none" src="@/section/s5/lt_leaf.webp" alt="" srcset="">
        </lazy-component>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
    width: 100%;
    height: size(1230);
    background-color: #3a574c;

    .title {
        position: absolute;
        top: size(115);
        left: size(218);
        z-index: 5;

        .t1 {
            font-weight: 700;
            font-size: size(40);
            line-height: 150%;
            color: #fff;

            span {
                &:nth-child(1) {
                    color: #74a894;
                }

                &:nth-child(2) {
                    color: #ff8667;
                }
            }
        }

        .t2 {
            font-weight: 700;
            font-size: size(24);
            line-height: size(34);
            margin-bottom: size(45);
            color: #fff;
        }

        .t3 {
            font-weight: 400;
            font-size: size(20);
            line-height: 150%;
            letter-spacing: size(.05);
            width: size(1035);
            color: #fff;

        }
    }

    .works {
        width: 100%;
        position: absolute;
        top: size(320);
        left: 0;
        z-index: 50;

        .slide-box {
            .splide__list {
                justify-content: center;
            }

            .splide__track {
                padding: size(150);
            }

            .slide {
                width: size(341);
                height: size(371);
                background-size: cover;
                margin: 0 size(20);
                transition: all .5s;

                .caption {
                    width: 100%;
                    position: absolute;
                    top: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: size(24);
                    background-color: #fff;
                    opacity: 0;

                    &::after {
                        content: '';
                        height: size(1);
                        width: size(41.5);
                        right: 15%;
                        background-color: #000;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                    &::before {
                        content: '';
                        height: size(1);
                        width: size(41.5);
                        left: 15%;
                        background-color: #000;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }

                &:hover {
                    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.6));

                    .caption {
                        opacity: 1;
                    }
                }
            }
        }
    }

    .timelines {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: size(224);
        background-color: #BF9959;
        display: flex;
        align-items: center;
        justify-content: center;


        .slide-box {
            position: relative;
            width: 100%;
            z-index: 2;

            .splide__list {
                justify-content: center;
            }

            .slide {
                width: auto;
                height: size(224);
                color: #fff;
                display: flex;
                padding: 0 size(11);
                margin: 0 size(5);
                padding-top: size(25);

                .box {
                    display: flex;
                    flex-direction: column;
                    width: auto;
                    height: 100%;
                    gap: size(15);

                    .year {
                        font-size: size(14);
                        font-family: 'Noto Serif TC';
                        writing-mode: vertical-rl;
                        height: size(35);
                    }

                    .dot {
                        width: size(7) !important;
                        height: size(7) !important;
                        border-radius: 100%;
                        margin: 0 auto;
                        background-color: #000;
                        z-index: 1;
                    }

                    .txt {
                        display: flex;
                        align-items: flex-start;
                        flex-direction: row;

                        .name {
                            font-size: size(14);
                            writing-mode: vertical-rl;
                            font-weight: 500;
                            letter-spacing: size(1);
                            text-transform: uppercase;
                        }
                    }

                }

                .content {
                    writing-mode: vertical-rl;
                    padding-top: size(72);
                    font-size: size(13);
                    font-weight: 300;
                }

                &::after {
                    content: '';
                    width: 130%;
                    height: size(1);
                    position: absolute;
                    left: 0;
                    top: size(78);
                    background-color: #fff;
                    z-index: 0;
                }

                &.selected {
                    background-color: #B48A45;

                    .box {
                        .dot {
                            background-color: #fff;
                        }
                    }
                }
            }
        }

        &::after {
            content: '';
            width: 130%;
            height: size(1);
            position: absolute;
            left: 0;
            top: size(78);
            background-color: #fff;
            z-index: 0;
        }
    }


    .rb_leaf {
        position: absolute;
        right: 0;
        bottom: size(224);
        width: size(843);
        /*
        transform-origin: right bottom;
        animation: rb 2s alternate-reverse infinite ease-in-out;

        @keyframes rb {
            from {
                transform: skewX(0);
            }

            to {
                transform: skewX(-5deg);
            }
        }*/
    }

    .rt_leaf {
        position: absolute;
        right: 0;
        top: 0;
        width: size(398);
        /*
        transform-origin: right top;
        animation: rt 2s alternate-reverse infinite ease-in-out;

        @keyframes rt {
            from {
                transform: skewX(0);
            }

            to {
                transform: skewX(5deg);
            }
        }*/
    }

    .lt_leaf {
        position: absolute;
        left: 0;
        top: 0;
        width: size(378);
        /*
        transform-origin: left top;
        animation: lt 2s alternate-reverse infinite ease-in-out;

        @keyframes lt {
            from {
                transform: skewX(0);
            }

            to {
                transform: skewX(-5deg);
            }
        }
        */
    }
}


@media screen and (max-width:768px) {
    .s5 {
        height: size-m(1047);

        .title {
            top: size-m(83);
            left: 0;
            width: 100%;
            padding: size-m(30);

            .t1 {
                font-size: size-m(24.5);
                color: #fff;
            }

            .t2 {
                font-size: size-m(14);
                line-height: size-m(20);
                margin-bottom: size-m(23);
            }

            .t3 {
                font-size: size-m(12);
                line-height: 180%;
                letter-spacing: size-m(.01);
                width: 100%;
            }
        }

        .works {
            top: size-m(388);

            .slide-box {
                .splide__list {
                    justify-content: unset;
                }

                .splide__track {
                    padding: size-m(50);
                    margin-top: -#{size-m(45)};
                }

                .slide {
                    width: size-m(375);
                    height: size-m(381);
                    margin: 0;
                    background-size: size-m(314);
                    background-repeat: no-repeat;
                    background-position: center;

                    .caption {
                        font-size: size-m(20);
                        width: size-m(314);
                        left: 50%;
                        transform: translateX(-50%);
                        top: unset;
                        bottom: 0;
                        transition: all .5s;
                        opacity: 1;

                        &::after {
                            width: size-m(41.5);
                            right: 20%;
                        }

                        &::before {
                            width: size-m(41.5);
                            left: 20%;
                        }
                    }

                    &:hover {
                        filter: drop-shadow(0px size-m(4) size-m(30) rgba(0, 0, 0, 0.6));


                        .caption {
                            opacity: 1;
                        }
                    }

                    &.is-active {
                        filter: drop-shadow(0px size-m(4) size-m(30) rgba(0, 0, 0, 0.6));
                    }
                }

                .splide__pagination {
                    gap: size-m(7);
                    position: absolute;
                    bottom: size-m(20);
                    width: 100%;

                    button {
                        width: 8px;
                        height: 8px;
                        border: 1px solid #fff;
                        border-radius: 100%;

                        &.is-active {
                            background-color: #fff;
                        }
                    }
                }
            }
        }

        .timelines {
            height: size-m(224);

            .slide-box {
                position: relative;

                .slide {
                    position: relative;
                    height: size-m(224);
                    padding: 0 size-m(11);
                    margin: 0 size-m(5);
                    padding-top: size-m(35);

                    .box {
                        gap: size-m(15);

                        .year {
                            font-size: size-m(14);
                            height: size-m(30);
                        }

                        .dot {
                            width: size-m(7) !important;
                            height: size-m(7) !important;
                        }

                        .txt {
                            .name {
                                font-size: size-m(14);
                                letter-spacing: size-m(1);
                            }
                        }

                    }

                    .content {
                        padding-top: size-m(67);
                        font-size: size-m(13);
                    }

                    &::after {
                        top: size-m(83);
                        height: 1px;
                    }

                    &.selected {
                        background-color: #B48A45;

                        .box {
                            .dot {
                                background-color: #fff;
                            }
                        }
                    }

                }

            }

            &::after {
                top: size-m(83);
                height: 1px;
            }
        }


        .rb_leaf {
            bottom: size-m(224);
            width: size-m(532);

        }

        .rt_leaf {
            width: size-m(94);
        }

        .lt_leaf {
            width: size-m(148);
        }
    }
}
</style>

<script setup>
import { ref, inject, getCurrentInstance, onMounted } from "vue"
import AOS from 'aos';
const globals = getCurrentInstance().appContext.config.globalProperties;

const splide = ref();
const currentIdx = ref(0)
const selectImg = ref('0')

const moved = (newIdx, prevIdx, destIdx) => {
    currentIdx.value = prevIdx
    selectImg.value = prevIdx
    AOS.refresh();

    const slideIdx = timelines.value.findIndex(item => item.targetImg == selectImg.value)

    if (slideIdx != -1) {
        splide.value.splide.go(slideIdx)
    }
}
const move = (newIdx, prevIdx, destIdx) => {
    currentIdx.value = prevIdx
    AOS.refresh();
}

const timelines = ref([
    {
        targetImg: '99',
        year: '2002',
        name: '明湖青庭',
        content: []
    },
    {
        targetImg: '99',
        year: '2003',
        name: '寬庭',
        content: []
    },
    {
        targetImg: '99',
        year: '2004',
        name: '長耀哲里',
        content: []
    },
    {
        targetImg: '99',
        year: '2005',
        name: '長耀Glory',
        content: []
    },
    {
        targetImg: '99',
        year: '2006',
        name: '長耀緻上',
        content: []
    },
    {
        targetImg: '99',
        year: '2007',
        name: '長耀V-house',
        content: []
    },
    {
        targetImg: '99',
        year: '2008',
        name: '湖砌',
        content: []
    },
    {
        targetImg: '99',
        year: '2009',
        name: '合砌',
        content: []
    },
    {
        targetImg: '99',
        year: '2010',
        name: 'MORE123',
        content: []
    },
    {
        targetImg: '99',
        year: '2011',
        name: '涵玉',
        content: []
    },
    {
        targetImg: '99',
        year: '2012',
        name: '巷上',
        content: []
    },
    {
        targetImg: '99',
        year: '2013',
        name: 'THE ONE',
        content: []
    },
    {
        targetImg: '99',
        year: '2014',
        name: '豁達達仁',
        content: []
    },
    {
        targetImg: '99',
        year: '2015',
        name: '豁達達謙',
        content: []
    },
    {
        targetImg: '99',
        year: '2016',
        name: '長耀里仁',
        content: []
    },
    {
        targetImg: '99',
        year: '2017',
        name: '長耀朗朗',
        content: []
    },
    {
        targetImg: '0',
        year: '2018',
        name: '長耀挹品',
        content: []
    },
    {
        targetImg: '2',
        year: '2019',
        name: '長耀PARK',
        content: []
    },
    {
        targetImg: '3',
        year: '2020',
        name: '長耀双丰双卉',
        content: []
    },
    {
        targetImg: '1',
        year: '2021',
        name: '長耀初',
        content: []
    },
    {
        targetImg: '99',
        year: '2022',
        name: '長耀里',
        content: []
    },
    {
        targetImg: '99',
        year: '2023',
        name: '長耀加',
        content: []
    },
    {
        targetImg: '99',
        year: '未來',
        name: '林口',
        content: ['建林段案', '新林國小案', '中山大道案', '長耀PARKII']
    },
    {
        targetImg: '99',
        year: '',
        name: '北投',
        content: ['北投捷運站案', '奇岩捷運站案']
    },
    {
        targetImg: '99',
        year: '',
        name: '內湖',
        content: ['葫洲捷運站案']
    },
    {
        targetImg: '99',
        year: '',
        name: '大直',
        content: ['大直美麗華案']
    },
    {
        targetImg: '99',
        year: '',
        name: '士林',
        content: ['士林官邸案']
    },
    {
        targetImg: '99',
        year: '',
        name: '淡水',
        content: ['海景住宅案']
    },
])

const imgs = ref([
    {
        img: new URL("../section/s5/1.webp", import.meta.url).href,
        content: '長耀挹品'
    },
    {
        img: new URL("../section/s5/2.webp", import.meta.url).href,
        content: '長耀初'
    },
    {
        img: new URL("../section/s5/3.webp", import.meta.url).href,
        content: '長耀PARK'
    },
    {
        img: new URL("../section/s5/4.webp", import.meta.url).href,
        content: '双丰双卉'
    },
])

onMounted(() => {
    const slideIdx = timelines.value.findIndex(item => item.targetImg == selectImg.value)

    if (slideIdx != -1) {
        splide.value.splide.go(slideIdx)
    }
})


</script>