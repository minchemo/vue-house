<template>
    <div v-if="!isMobile" class="material">
        <div class="item" v-for="item,i in data" data-aos="fade-up" :data-aos-delay="50 * i">
            <div class="cover" :style="{ backgroundImage: `url(${item.img})` }">
                <div class="caption">情境示意</div>
            </div>
            <div class="title">
                <img :src="item.logo" class="logo" alt="" srcset="">
                <div class="t1">{{ item.t1 }}</div>
                <div class="t2">{{ item.t2 }}</div>
            </div>
        </div>

    </div>
    <div v-else class="material">
        <div class="arrows" v-if="isMobile">
            <img class="prev" @click="splide.splide.go('<')" src="@/section/arrow_dark.png" alt="" srcset="">
            <img class="next" @click="splide.splide.go('>')" src="@/section/arrow_dark.png" alt="" srcset="">
        </div>
        <Splide class="w-screen" ref="splide"  :options="{
            pagination: false,
            arrows: false,
            drag: true,
            autoplay: true,
            autoWidth: true,
            interval: 3000,
            gap: 50,
            focus: 'center',
            perPage: 1,
            type: 'loop',
        }">
            <SplideSlide class="item" v-for="item, i in data">
                <div class="cover" :style="{ backgroundImage: `url(${item.img})` }">
                    <div class="caption">情境示意</div>
                </div>
                <div class="title">
                    <img :src="item.logo" class="logo" alt="" srcset="">
                    <div class="t1">{{ item.t1 }}</div>
                    <div class="t2">{{ item.t2 }}</div>
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.material {
    @apply grid justify-center;
    grid-template-columns: repeat(3, size(455.46));
    row-gap: size(21);
    column-gap: size(21);
    margin-top: size(42);

    .item {
        @apply flex items-center justify-between;
        background-color: #fff;
        padding: size(15);
        width: size(455.46);
        aspect-ratio: 455.46/290.15;
        filter: drop-shadow(0 size(4) size(4) rgba(0, 0, 0, 0.25));
        gap: size(15);


        .cover {
            @apply relative aspect-square flex-shrink-0 bg-cover;
            width: size(259.53);

            .caption {
                @apply absolute;
                right: size(5);
                bottom: size(5);
                font-size: size(12);
                font-weight: 400;
                color: #fff;
            }
        }

        .title {
            // width: size(146);

            .logo {
                max-width: size(143);
                min-height: size(30);
            }

            .t1 {
                margin-top: size(5);
                color: black;
                font-size: size(20);
                font-weight: 700;
                white-space: nowrap;
            }

            .t2 {
                margin-top: size(20);
                font-size: size(18);
                font-weight: 400;
                line-height: size(24.53);
                text-align: justify;

            }
        }
    }
}


@media screen and (max-width: 767px) {

    .material {
        @apply block relative;
        margin-top: sizem(30);
        filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.25));

        .arrows {
            @apply absolute z-10 flex items-center justify-between left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2;
            width: 95%;

            .next {
                transform: rotate(180deg);
            }
        }

        .item {
            @apply flex-col justify-between;
            background-color: #fff;
            padding: sizem(20) 0;
            width: sizem(310);
            aspect-ratio: unset;
            height: auto;
            filter: unset;
            gap: sizem(10);


            .cover {
                @apply relative flex-shrink-0 bg-cover;
                aspect-ratio: 211.97/236.83;
                width: sizem(212);

                .caption {
                    @apply absolute;
                    right: sizem(5);
                    bottom: sizem(5);
                    font-size: sizem(12);
                    font-weight: 400;
                    color: #fff;
                }
            }

            .title {
                @apply flex flex-col items-center;
                padding: 0 sizem(50);

                .logo {
                    max-width: sizem(100);
                    min-height: unset;
                    max-height: sizem(65);
                    height: auto;
                    width: auto;
                }

                .t1 {
                    @apply hidden;
                }

                .t2 {
                    margin-top: sizem(15);
                    font-size: sizem(15);
                    font-weight: 400;
                    line-height: sizem(20.45);
                    text-align: left;
                }
            }
        }
    }
}
</style>

<script setup>
import s6_material from '@/section/s6_material.vue';

import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
const splide = ref(null);
const data = [
    {
        img: new URL("../section/s6/1.webp", import.meta.url).href,
        logo: isMobile ? new URL("../section/s6/l1m.png", import.meta.url).href : new URL("../section/s6/l1.png", import.meta.url).href,
        t1: "台灣精品衛浴",
        t2: "超省水奈米馬桶，以智能淨未來。"
    },
    {
        img: new URL("../section/s6/2.webp", import.meta.url).href,
        logo: isMobile ? new URL("../section/s6/l2m.png", import.meta.url).href : new URL("../section/s6/l2.png", import.meta.url).href,
        t1: "德國倍世淨水",
        t2: "199年淨水科技專家，全屋用水品質把關。"
    },
    {
        img: new URL("../section/s6/3.webp", import.meta.url).href,
        logo: isMobile ? new URL("../section/s6/l3m.png", import.meta.url).href : new URL("../section/s6/l3.png", import.meta.url).href,
        t1: "淨流換氣系統",
        t2: "新風淨化自動切換，隨時維持最佳空氣品質。"
    },
    {
        img: new URL("../section/s6/4.webp", import.meta.url).href,
        logo: isMobile ? new URL("../section/s6/l4m.png", import.meta.url).href : new URL("../section/s6/l4.png", import.meta.url).href,
        t1: "5+5mm膠合玻璃",
        t2: "氣密、水密、抗風壓、隔音，多項專利認證。"
    },
    {
        img: new URL("../section/s6/5.webp", import.meta.url).href,
        logo: isMobile ? new URL("../section/s6/l5m.png", import.meta.url).href : new URL("../section/s6/l5.png", import.meta.url).href,
        t1: "智慧節能洗碗機",
        t2: "德國百年家電精品，優適高效率的洗碗行程。"
    },
    {
        img: new URL("../section/s6/6.webp", import.meta.url).href,
        logo: isMobile ? new URL("../section/s6/l6m.png", import.meta.url).href : new URL("../section/s6/l6.png", import.meta.url).href,
        t1: "樂邁石晶降噪地板",
        t2: "歐美大廠台灣製造，零甲醛添加，健康貼近自然。"
    },
]
</script>