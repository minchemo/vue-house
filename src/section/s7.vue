<template>
    <div class="s7 relative">
        <Splide ref="splide" :options="{
            rewind: false,
            arrows: false,
            pagination: $isMobile() ? true : false,
            type: $isMobile() ? 'loop' : 'slide',
            autoplay: $isMobile() ? false : false,
            interval: 2000,
            perPage: $isMobile() ? 1 : 4,
            // focus: 'center',
            padding: '10%',
            gap: $isMobile() ? 50 : 0,
            drag: $isMobile() ? true : false,
            updateOnMove: true,
        }" @splide:move="move" class="slide-box">
            <SplideSlide class="slide" v-for="img, i in imgs" @mouseover="selectImg = i"
                :class="{ 'active': selectImg == i }">
                <div class="avatar" v-lazy:background-image="img.img"></div>
                <div class="t1 font-['noto_sans_tc']">{{ img.t1 }}</div>
                <div class="name">
                    <div class="t2">{{ img.t2 }}</div>
                    <div class="t3 font-['noto_sans_tc']">{{ img.t3 }}</div>
                </div>
                <div class="t4">{{ img.t4 }}</div>
                <div class="t5 font-['noto_sans_tc']" v-html="img.t5"></div>
            </SplideSlide>
        </Splide>
        <lazy-component>
            <img loading="lazy" v-if="$isMobile()" class="lt_leaf pointer-events-none" src="@/section/s7/leaf.png" alt="" srcset="">
            <img loading="lazy" v-else class="lt_leaf pointer-events-none" src="@/section/s7/leaf_m.png" alt="" srcset="">
        </lazy-component>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
    width: 100%;
    height: size(1260);
    background-color: #000;

    .slide-box {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 50;

        .splide__list {
            justify-content: center;
        }

        .splide__track {
            padding: size(80);
        }

        .slide {
            width: size(400);
            height: size(886);
            margin: 0 size(20);
            background: #000000;
            border: size(1) solid #5F6142;
            border-radius: size(40);
            color: #FFFFFF;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            padding: size(100) size(20);
            filter: blur(4px);
            will-change: transform;

            .avatar {
                position: absolute;
                width: 100%;
                height: size(440);
                background-size: cover;
                top: 0;
                left: 0;
                border-radius: size(40) size(40) 0 0;
            }

            .t1 {
                font-weight: 700;
                font-size: size(20);
                line-height: 150%;
                letter-spacing: size(0.05);
                margin-bottom: size(4);
                z-index: 1;
                text-shadow: 0px size(4) size(10) rgba(0, 0, 0, 0.8);
            }

            .name {
                display: flex;
                align-items: flex-end;
                gap: size(12);
                margin-bottom: size(25);
                z-index: 2;
                text-shadow: 0px size(4) size(10) rgba(0, 0, 0, 0.8);

                .t2 {
                    font-weight: 700;
                    font-size: size(40);
                    line-height: 150%;
                }

                .t3 {
                    font-weight: 700;
                    font-size: size(20);
                    line-height: 200%;
                    letter-spacing: size(0.05);
                }

            }

            .t4 {
                font-weight: 700;
                font-size: size(30);
                line-height: size(43);
                margin-bottom: size(31);
                z-index: 1;
            }

            .t5 {
                font-weight: 400;
                font-size: size(16);
                line-height: 160%;
                letter-spacing: size(0.05);
                text-align: justify;
                z-index: 1;
            }

            &:before {
                content: '';
                width: size(22);
                height: size(22);
                left: 50%;
                top: -#{size(11)};
                transform: translateX(-50%);
                background: #ACA883;
                border-radius: 100%;
                position: absolute;
                z-index: 15;
                opacity: 0;
                transition: all .3s;
            }

            &.active {
                filter: blur(0px);
                box-shadow: 0px 0px size(10) rgba(255, 255, 255, 0.6);

                &:before {
                    opacity: 1;
                }
            }
        }
    }

    .lt_leaf {
        position: absolute;
        left: 0;
        top: 0;
        width: size(162);
        transform-origin: left top;
        animation: lt 2s alternate-reverse infinite ease-in-out;
        z-index: 1;

        @keyframes lt {
            from {
                transform: skewX(0);
            }

            to {
                transform: skewX(-5deg);
            }
        }
    }

    &::after {
        content: '';
        width: size(1);
        height: size(975);
        background-color: #ACA883;
        position: absolute;
        left: size(65);
        top: size(105);
        z-index: 0;
    }

    &::before {
        content: '';
        width: size(1);
        height: size(975);
        background-color: #ACA883;
        position: absolute;
        right: size(65);
        top: size(105);
        z-index: 0;
    }
}


@media screen and (max-width:768px) {
    .s7 {
        height: size-m(667);

        .slide-box {

            .splide__list {
                justify-content: unset;
            }

            .splide__track {
                padding: size-m(20) 0;
            }

            .slide {
                position: relative;
                width: size-m(375);
                height: size-m(560);
                margin: 0;
                border-radius: size-m(40);
                padding: size-m(35) size-m(16);
                filter: blur(4px);

                .avatar {
                    height: size-m(235);
                    border-radius: size-m(40) size-m(40) 0 0;
                }

                .t1 {
                    font-size: size-m(16);
                    letter-spacing: size-m(0.05);
                    margin-bottom: size(0);
                }

                .name {
                    gap: size-m(12);
                    margin-bottom: size-m(5);

                    .t2 {
                        font-size: size-m(25);
                    }

                    .t3 {
                        font-size: size-m(16);
                        line-height: 180%;
                        letter-spacing: size-m(0.05);
                    }

                }

                .t4 {
                    font-size: size-m(18);
                    line-height: size-m(26);
                    margin-bottom: size-m(11);
                }

                .t5 {
                    font-size: size-m(12);
                    line-height: 180%;
                    letter-spacing: size-m(0.02);
                }

                &:before {
                    width: size-m(18);
                    height: size-m(18);
                    top: -#{size-m(9)};
                }

                &.is-active {
                    filter: blur(0px);
                    box-shadow: 0px 0px size(10) rgba(255, 255, 255, 0.6);

                    &:before {
                        opacity: 1;
                    }
                }

            }

            .splide__pagination {
                gap: size-m(7);
                position: absolute;
                bottom: -#{size-m(10)};
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


        .lt_leaf {
            width: size-m(103);
        }

        &::after {
            display: none;
        }

        &::before {
            display: none;
        }
    }


}
</style>

<script setup>
import { ref, inject, getCurrentInstance } from "vue"
import AOS from 'aos';
const globals = getCurrentInstance().appContext.config.globalProperties;

const splide = ref();
const currentIdx = ref(0)
const selectImg = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
    // currentIdx.value = prevIdx
    // selectImg.value = prevIdx
}

const imgs = ref([
    {
        img: globals.$isMobile() ? new URL("../section/s7/1_m.jpg", import.meta.url).href : new URL("../section/s7/1.jpg", import.meta.url).href,
        t1: '建築巨擎',
        t2: '簡俊卿',
        t3: '北市豪宅御用建築師',
        t4: '貴氣挺拔，王者風範',
        t5: globals.$isMobile() ? '建築師決定了建築的視野、品味及高度。國家建築金質首獎金石首獎常勝大將、信義豪宅「松德長虹」、天母豪宅「華固天鑄」簡俊卿引領豪宅級建築團隊，精鑄 26 層富貴雲頂地標「長耀里」王者風範。<br/><br/>經典業績：<br/>松德長虹、華固天鑄、冠德中研、宏盛新世界' : '建築師決定了建築的視野、品味及高度。國家建築金質首獎金石首獎常勝大將、信義豪宅「松德長虹」、天母豪宅「華固天鑄」簡俊卿引領豪宅級建築團隊，精鑄 26 層富貴雲頂地標「長耀里」王者風範。<br/><br/><br/>經典業績：<br/>松德長虹、華固天鑄、冠德中研<br>宏盛新世界、台北之星',
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/2_m.jpg", import.meta.url).href : new URL("../section/s7/2.jpg", import.meta.url).href,
        t1: '空間藝術',
        t2: '李志成',
        t3: '元佑公設空間設計師',
        t4: '雍容氣韻，隱逸會所',
        t5: globals.$isMobile() ? '生活的美術館，輕奢調帶點東方味，推開門，一座大師手筆藝廊門廳貴重迎賓，來自「富富話合」、「映東騰」等名宅空間設計師李志成，走遍世界星級飯店，帶您以閱讀世界的眼界，享受與國際同步的空間訂製美學。<br/><br/>經典業績：<br/>映東騰、富富話合、國泰禾、實德璞園的家' : '生活的美術館，輕奢調帶點東方味，推開門，一座大師手筆藝廊門廳貴重迎賓，來自「富富話合」、「映東騰」等名宅空間設計師李志成，走遍世界星級飯店，帶您以閱讀世界的眼界，享受與國際同步的空間訂製美學。<br/><br/><br/>經典業績：<br/>映東騰、富富話合、國泰禾<br>實德璞園的家',
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/3_m.jpg", import.meta.url).href : new URL("../section/s7/3.jpg", import.meta.url).href,
        t1: '營造權威',
        t2: '森城營造',
        t3: '52年甲級營造團隊 ',
        t4: '安全來自 0.1 的堅持',
        t5: globals.$isMobile() ? '營造是建築骨幹，精微細節寸寸計較，容不下 0.1 公分的誤差。榮獲國家建築金質獎的森城營造以 52 年信譽背書、ISO 國際專業認證，堅持為住戶打造最安穩、安全、安心的居住品質，成就長住久安的期待。<br/><br/>經典業績：<br/>天母紘琚、遠雄九五、元利畫世紀、華固松疆' : '營造是建築骨幹，精微細節寸寸計較，容不下 0.1 公分的誤差。榮獲國家建築金質獎的森城營造以 52 年信譽背書、ISO 國際專業認證，堅持為住戶打造最安穩、安全、安心的居住品質，成就長住久安的期待。<br/><br/><br/>經典業績：<br/>吉美一品花園、森城大院、基泰信義大樓<br>鉑金苑',
    },
    {
        img: globals.$isMobile() ? new URL("../section/s7/4_m.jpg", import.meta.url).href : new URL("../section/s7/4.jpg", import.meta.url).href,
        t1: '結構至上',
        t2: '陳村林',
        t3: '30年資歷結構技師',
        t4: '穩紮根基，鋼骨地標',
        t5: globals.$isMobile() ? '超過 30 年建築資歷、上千件國內外建築實績，逾數百棟及超高層 SRC 及鋼骨結構規劃的結構技師陳村林，讓盡收林口峰景的地標站得更高、看得更遠，以最穩健的姿態承載您對家的夢想。<br/><br/><br/>經典業績：<br/>吉美一品花園、森城大院、基泰信義大樓、鉑金苑' : '超過 30 年建築資歷、上千件國內外建築實績，逾數百棟及超高層 SRC 及鋼骨結構規劃的結構技師陳村林，讓盡收林口峰景的地標站得更高、看得更遠，以最穩健的姿態承載您對家的夢想。<br/><br/><br/><br/>經典業績：<br/>天母紘琚、遠雄九五、元利畫世紀<br>華固松疆、台北之星',
    },
])


</script>