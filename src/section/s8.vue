<template>
    <div class="s8 relative">
        <div class="title">
            <div class="t1" data-aos="fade" data-aos-delay="0">長耀幸福社區 <br v-if="$isMobile()" />百坪豪宅也難得的眼界</div>
            <div class="t2 font-['Noto_sans_tc']" data-aos="fade" data-aos-delay="200">
                地段核心、明星學校、公園環繞、捷運交通…在「長耀里」都是標準配備。<br />
                建築如何訴說傳世價值？居所如何讓人一眼感動？從長耀的休閒會館和社區總體營造就能找到答案。<br /><br />
                從林口唯一室內籃球場、落羽松花園、配備國際賽道規格泳池等創舉，不僅體現同步國際的品味及視野，量身規劃的休閒場域，讓長耀建築成為林口最有價值的等待，也是獻給所有住戶最真摯體貼的情意。

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
                <div class="caption font-['Noto_sans_tc']">{{ img.caption }}</div>
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

.s8 {
    width: 100%;
    height: size(1080);
    background-color: #000;

    .title {
        color: #fff;
        position: absolute;
        z-index: 1;
        left: size(215);
        top: size(0);

        .t1 {
            font-weight: 700;
            font-size: size(40);
            margin-bottom: size(30);
            color: #ACA883;
        }

        .t2 {
            font-weight: 300;
            font-size: size(20);
            line-height: 150%;
            width: size(1004);
        }
    }

    .slide-box {
        position: absolute;
        top: size(279);

        .slide {
            width: size(1920);
            height: size(670);
            background-size: cover;

            .caption {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: size(10);
                font-weight: 500;
                font-size: size(12);
                color: #fff;
                text-shadow: 0px 0px size(3) rgba(0, 0, 0, 0.8);
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

    &::before {
        content: '';
        width: size(1);
        height: 100%;
        background-color: #ACA883;
        position: absolute;
        right: size(65);
        top: 0;
        z-index: 1;
        pointer-events: none;
    }
}

@media screen and (max-width:768px) {

    .s8 {
        height: size-m(667);

        .title {
            position: relative;
            z-index: 1;
            left: unset;
            top: unset;
            width: 100%;
            padding: size-m(30);

            .t1 {
                font-size: size-m(24.5);
                margin-bottom: size-m(17);
                color: #F5EAD4;
            }

            .t2 {
                font-size: size-m(12);
                line-height: 180%;
                width: 100%;
            }
        }

        .slide-box {
            position: absolute;
            top: unset;
            bottom: 0;

            .slide {
                width: size-m(375);
                height: size-m(310);
                background-size: cover;

                .caption {
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
        img: globals.$isMobile() ? new URL("../section/s8/1_m.jpg", import.meta.url).href : new URL("../section/s8/1.jpg", import.meta.url).href,
        caption: '長耀里迎賓大廳3D示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s8/2_m.jpg", import.meta.url).href : new URL("../section/s8/2.jpg", import.meta.url).href,
        caption: '長耀里迎賓大廳3D示意圖'
    },
])
</script>