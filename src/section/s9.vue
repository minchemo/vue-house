<template>
    <article class="s9">
        <div class="text z-[3]">
            <div class="selection" v-if="$isMobile()">
                <div class="item font-['Noto_sans_tc']" :class="{ active: currentSlide == i }" v-for="img, i in imgs"
                    @click="slideTo(i)">
                    {{ img.label }}
                </div>
            </div>
            <div class="title text-center" data-aos="fade-up" data-aos-delay="0"><span class="font-bold">公設大標</span><br>
                公設大標文字</div>
            <div class="desc font-['Noto_sans_tc']" data-aos="fade-up" data-aos-delay="0">
                內文假字內文假字內文假字，內文假字內文假字內文假字內文假字，內文假字內文假字內文假字內文假字。</div>
            <div class="selection" v-if="!$isMobile()">
                <div class="item font-['Noto_sans_tc']" :class="{ active: currentSlide == i }" v-for="img, i in imgs"
                    @click="slideTo(i)">
                    {{ img.label }}
                </div>
            </div>
        </div>
        <Slide ref="slider" class="z-[2]" :imgs="imgs" :w="1166" :h="820" :w_m="375" :h_m="263.72" :dot="true"
            :dot_size="11" :dot_color="'#fff'" :dot_bottom="-35" :dot_bottom_m="10" :align_m="'flex-start'"
            @slideIndex="slideChanged" />

        <img class="decor" src="@/section/s9/decor.png" alt="" srcset="">
    </article>
</template>
  
<style lang="scss">
@import '@/assets/style/function.scss';

.s9 {
    width: 100%;
    height: size(1080);
    background: url('@/section/s9/bg.jpg');
    background-size: cover;
    background-position: top;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    z-index: 2;
    gap: size(108);

    .text {
        position: relative;
        width: size(382);
        font-weight: 500;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .title {
            font-size: size(60);
            line-height: size(70);
            text-align: center;
        }

        .desc {
            border-top: size(2) solid #fff;
            margin-top: size(40);
            padding-top: size(35);
            font-weight: 400;
            font-size: size(20);
            line-height: size(35);
            text-align: justify;
            letter-spacing: 0.03em;
        }

        .selection {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: size(6);
            margin-top: size(58);

            .item {
                text-align: center;
                font-size: size(20);
                font-weight: 700;
                border: size(1.5) solid #C9A063;

                &.active {
                    background-color: #C9A063;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #C9A063;

                }
            }
        }
    }

    .decor {
        position: absolute;
        width: size(399);
        top: size(838);
        left: -#{size(164)};
        z-index: 10;
        animation: rotate 10s infinite linear;

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    }

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

    .s9 {
        width: 100%;
        height: size-m(575);
        background: #065B71;
        flex-direction: column-reverse;
        justify-content: flex-end;
        gap: size(108);

        .text {
            position: relative;
            padding: size-m(0) size-m(30);
            width: 100%;

            .title {
                margin-top: size-m(20);
                font-size: size-m(30);
                line-height: 1.5;
                letter-spacing: 0.07em;
            }

            .desc {
                border-top: size-m(1) solid #fff;
                margin-top: size-m(20);
                padding-top: size-m(20);
                line-height: 1.5;
                font-size: size-m(15);
                text-align: justify;
                font-weight: 300;
            }

            .selection {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: size-m(5);
                margin-top: size-m(0);

                .item {
                    padding: size-m(5) 0;
                    font-size: size-m(15);
                    border: size-m(1.5) solid #C9A063;

                    &.active {
                        background-color: #C9A063;
                    }

                    &:hover {
                        cursor: pointer;
                        background-color: #C9A063;

                    }
                }
            }
        }

        .decor {
            width: size-m(111);
            top: size-m(517);
            left: size-m(296);
        }

    }

}
</style>
  <script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Slide from '../components/slide.vue';

const currentSlide = ref(0);

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
const imgs = [
    {
        img: isMobile ? new URL("../section/s9/1_m.jpg", import.meta.url).href : new URL("../section/s9/1.jpg", import.meta.url).href,
        caption: '3D公設情境示意圖',
        label: '大廳'
    },
    {
        img: isMobile ? new URL("../section/s9/2_m.jpg", import.meta.url).href : new URL("../section/s9/2.jpg", import.meta.url).href,
        caption: '3D公設情境示意圖',
        label: '交誼廳'
    },
    {
        img: isMobile ? new URL("../section/s9/3_m.jpg", import.meta.url).href : new URL("../section/s9/3.jpg", import.meta.url).href,
        caption: '3D公設情境示意圖',
        label: '健身房'
    },
    {
        img: isMobile ? new URL("../section/s9/4_m.jpg", import.meta.url).href : new URL("../section/s9/4.jpg", import.meta.url).href,
        caption: '3D公設情境示意圖',
        label: '閱讀區'
    },
]

const slider = ref(null);

const slideTo = (idx) => {
    currentSlide.value = idx;
    slider.value.go(idx)
}

const slideChanged = (idx) => {
    currentSlide.value = idx;
}
</script>
  