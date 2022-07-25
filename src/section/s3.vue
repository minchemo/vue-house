<template>
    <div class="s3 relative">
        <div class="number font-['noto_sans_tc']">{{ currentIdx + 1 }}</div>
        <Splide ref="splide" :options="{
            rewind: true,
            arrows: false,
            pagination: false,
            type: 'loop',
            autoWidth: true,
            autoplay: true,
            interval: 4000,
            perPage: 9,
            padding: '5%',
            focus: 'center',
            gap: 0,
            isNavigation: true,
            wheel: true
        }" @splide:move="move" class="slide-box">
            <SplideSlide class="slide" v-for="img, i in imgs">
                <div class="icon">
                    <img :src="img.img" alt="" srcset="">
                </div>
            </SplideSlide>
        </Splide>
        <div class="info flex flex-col items-center justify-center">
            <div class="t1">富貴人生 <span>十全十美</span></div>
            <div class="t2" v-html="imgs[currentIdx].content"></div>
        </div>
        <img class="rb_leaf" src="@/section/s3/rb_leaf.png" alt="" srcset="">
        <img class="lb_leaf" src="@/section/s3/lb_leaf.png" alt="" srcset="">
        <img class="rt_leaf" src="@/section/s3/rt_leaf.png" alt="" srcset="">
        <img class="lt_leaf" src="@/section/s3/lt_leaf.png" alt="" srcset="">
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
    width: 100%;
    height: size(1080);
    background-color: #E5DBC2;

    .slide-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .slide {
            width: size(200);
            height: size(240);
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                width: size(150);
                height: size(150);
                border-radius: 999px;
                border: 1px solid #000;
                display: flex;
                align-items: center;
                transition: all .3s;
                justify-items: center;

                img {
                    width: 50%;
                    max-height: 50%;
                }
            }

            &.is-active {
                .icon {
                    width: size(180);
                    height: size(180);
                    background: #F9EED8;
                    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.1);
                    border-color: #F9EED8;
                }
            }

            &:hover {
                .icon {
                    background: #F9EED8;
                    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.1);
                    border-color: #F9EED8;
                    cursor: pointer;
                }

            }

        }
    }

    .number {
        font-weight: 700;
        font-size: size(400);
        color: #F5EAD4;
        position: absolute;
        top: size(30);
        line-height: size(400);
        left: 50%;
        transform: translateX(-50%);
    }

    .info {
        position: absolute;
        top: size(686);
        left: 50%;
        transform: translateX(-50%);

        .t1 {
            position: relative;
            font-weight: 700;
            font-size: size(40);
            margin-bottom: size(10);

            span {
                color: #B64F31;
            }

            &::after {
                content: '';
                height: size(1);
                width: size(75);
                right: 108%;
                background-color: #000;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }

            &::before {
                content: '';
                height: size(1);
                width: size(75);
                left: 108%;
                background-color: #000;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        .t2 {
            text-align: center;
            font-weight: 700;
            font-size: size(24);
            line-height: size(34);
        }
    }

    .rb_leaf {
        position: absolute;
        right: 0;
        bottom: 0;
        width: size(917);
        transform-origin: right bottom;
        animation: rb 2s alternate-reverse infinite ease-in-out;

        @keyframes rb {
            from {
                transform: skewX(0);
            }

            to {
                transform: skewX(-5deg);
            }
        }
    }

    .lb_leaf {
        position: absolute;
        left: 0;
        bottom: 0;
        width: size(476);
        transform-origin: left bottom;
        animation: lb 2s alternate-reverse infinite ease-in-out;

        @keyframes lb {
            from {
                transform: skewX(0);
            }

            to {
                transform: skewX(5deg);
            }
        }
    }

    .rt_leaf {
        position: absolute;
        right: 0;
        top: 0;
        width: size(331);
        transform-origin: right top;
        animation: rt 2s alternate-reverse infinite ease-in-out;

        @keyframes rt {
            from {
                transform: skewX(0);
            }

            to {
                transform: skewX(5deg);
            }
        }
    }

    .lt_leaf {
        position: absolute;
        left: 0;
        top: 0;
        width: size(373);
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
    }
}


@media screen and (max-width:768px) {
    .s3 {
        height: size-m(1462);
    }

}
</style>

<script setup>
import { ref, inject, getCurrentInstance } from "vue"
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
        img: new URL("../section/s3/2.svg", import.meta.url).href,
        content: '2000 坪富貴公園綠海環繞，<br/>歲時寧謐涵氧青春不老'
    },
    {
        img: new URL("../section/s3/3.svg", import.meta.url).href,
        content: '永久棟距，風光巨幕，<br/>無疆視野，王者眼界誰能比'
    },
    {
        img: new URL("../section/s3/4.svg", import.meta.url).href,
        content: '五星森合隱逸會所，<br/>節氣滋養禪意洗滌，尊榮獨享'
    },
    {
        img: new URL("../section/s3/5.svg", import.meta.url).href,
        content: '擁三井時尚核心，<br/>3 大百貨 2 大影城同步國際潮流'
    },
    {
        img: new URL("../section/s3/6.svg", import.meta.url).href,
        content: '東森+三立國際媒體園區旁，<br/>迎接台灣坎城大未來'
    },
    {
        img: new URL("../section/s3/7.svg", import.meta.url).href,
        content: 'A9 捷運核心樞紐，<br/>機捷國道雙交流，城際自由跨界'
    },
    {
        img: new URL("../section/s3/8.svg", import.meta.url).href,
        content: '國際學區 AAIA、康橋、<br/>馬禮遜美國學校更勝天母'
    },
    {
        img: new URL("../section/s3/9.svg", import.meta.url).href,
        content: '全齡健康照護長庚醫療園區，<br/>遠程監護、全時御守'
    },
    {
        img: new URL("../section/s3/10.svg", import.meta.url).href,
        content: '長耀深耕林口，<br/>以種樹哲學深掘土地價值專鑄精工'
    },
    {
        img: new URL("../section/s3/1.svg", import.meta.url).href,
        content: '26 層森林之王，<br/>以地標姿態傲立富貴公園裡唯一席'
    },
])


</script>