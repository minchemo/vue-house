<template>
    <div class="s2 relative">
        <div class="title">
            <div class="t1">先到公園再到家 <br v-if="$isMobile()" />住進<span>富貴森林公園裡</span>
            </div>
            <div class="t2 font-['Noto_sans_tc']" v-if="!$isMobile()">
                把家種植在一座公園森藏不露，是生活的優渥，更是視野的闊綽。<br />
                研究顯示：想要健康長壽，25%靠基因，75%靠環境。<br />
                「長耀里」用一座富貴公園當健康的靠山，不是公園第一排，<br />
                而是直接住進公園裡，將文化三路鬧中取靜的優渥、玉帶環腰的富裕風水、億級國際建設輕擁入懷。<br />
                紐約中央公園、倫敦海德公園…國際豪宅都在公園畔，全球永不貶值的強勢貨幣，<br />
                比起富可敵國，真正的富人更想綠可敵國。
            </div>
            <div class="t2 font-['Noto_sans_tc']" v-else>
                把家種植在一座公園森藏不露，是生活的優渥，更是視野的闊綽。<br />
                研究顯示：想要健康長壽，25%靠基因，75%靠環境。<br />
                「長耀里」用一座富貴公園當健康的靠山，不是公園第一排，而是直接住進公園裡，將文化三路鬧中取靜的優渥、玉帶環腰的富裕風水、億級國際建設輕擁入懷。<br />
                紐約中央公園、倫敦海德公園…國際豪宅都在公園畔，全球永不貶值的強勢貨幣，比起富可敵國，真正的富人更想綠可敵國。
            </div>
        </div>
        <Splide ref="splide" :options="{
            rewind: true,
            autoWidth: true,
            arrows: true,
            pagination: false,
            type: 'fade',
            autoplay: true,
            interval: 4000,
        }" @splide:move="move" class="slide-box">
            <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
                <div v-if="img.isVideo"></div>
                <div v-else class="caption font-['Noto_sans_tc']">{{ img.caption }}</div>
            </SplideSlide>

            <div class="arrows splide__arrows">
                <button class="splide__arrow splide__arrow--prev">
                    <img src="@/assets/prev.svg" alt="" srcset="">
                </button>
                <button class="splide__arrow splide__arrow--next">
                    <img src="@/assets/next.svg" alt="" srcset=""></button>
            </div>
        </Splide>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
    width: 100%;
    height: size(1080);

    .title {
        color: #fff;
        position: absolute;
        z-index: 1;
        left: size(383);
        top: size(66);

        .t1 {
            font-weight: 700;
            font-size: size(40);
            margin-bottom: size(10);

            span {

                color: #F27C5A;
            }
        }

        .t2 {
            font-weight: 300;
            font-size: size(20);
            line-height: 150%;
        }
    }

    .slide-box {
        .slide {
            width: size(1920);
            height: size(1080);
            background-size: cover;

            .caption {
                position: absolute;
                right: size(30);
                bottom: size(10);
                font-weight: 500;
                font-size: size(12);
                color: #fff;
            }
        }

        .arrows {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 97%;
            display: flex;
            justify-content: space-between;
            z-index: 10;

            img {
                width: size(17.75);
            }
        }
    }
}

@media screen and (max-width:768px) {


    .s2 {
        width: 100%;
        height: size-m(667);
        background-color: #000;

        .title {
            color: #fff;
            position: relative;
            z-index: 1;
            left: 0;
            top: 0;
            padding: size-m(30);

            .t1 {
                font-size: size-m(24.5);
                margin-bottom: size-m(15);
            }

            .t2 {
                font-size: size-m(12);
                line-height: 180%;
            }
        }

        .slide-box {
            position: absolute;
            width: 100%;
            height: size-m(315);
            bottom: 0;

            .slide {
                width: 100%;
                height: size-m(315);

                .caption {
                    right: size-m(30);
                    bottom: size-m(10);
                    font-size: size-m(12);
                }
            }

            .arrows {
                img {
                    width: size-m(17.75);
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
const currentIdx = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
    currentIdx.value = prevIdx
    AOS.refresh();
}

const imgs = ref([
    {
        img: globals.$isMobile() ? new URL("../section/s2/1_m.jpg", import.meta.url).href : new URL("../section/s2/1.jpg", import.meta.url).href,
        caption: '富貴森林公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s2/2_m.jpg", import.meta.url).href : new URL("../section/s2/2.jpg", import.meta.url).href,
        caption: '富貴森林公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s2/3_m.jpg", import.meta.url).href : new URL("../section/s2/3.jpg", import.meta.url).href,
        caption: '富貴森林公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s2/4_m.jpg", import.meta.url).href : new URL("../section/s2/4.jpg", import.meta.url).href,
        caption: '富貴森林公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s2/5_m.jpg", import.meta.url).href : new URL("../section/s2/5.jpg", import.meta.url).href,
        caption: '富貴森林公園'
    },
])
</script>