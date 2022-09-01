<template>
    <article class="s10">
        <div class="text z-[3]">
            <div class="selection" v-if="$isMobile()">
                <div class="item font-['Noto_sans_tc']" :class="{ active: currentSlide == i }" v-for="img, i in imgs"
                    @click="slideTo(i)">
                    {{ img.label }}
                </div>
            </div>
            <div class="title" data-aos="fade-up" data-aos-delay="0"><span class="font-bold">府城星規格</span><br>
                成家勝利組</div>
            <div class="desc font-['Noto_sans_tc']" data-aos="fade-up" data-aos-delay="0">
                品味卓然典雅格局，區域內不容錯過的珍稀房型，2-4房滿足多元家庭型態，在空間使用需求的最適尺度。
            </div>
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

        <img class="decor" v-if="!$isMobile()" src="@/section/s10/decor.png" alt="" srcset="">
    </article>
</template>
  
<style lang="scss">
@import '@/assets/style/function.scss';

.s10 {
    width: 100%;
    height: size(1080);
    background: url('@/section/s10/bg.jpg');
    background-size: cover;
    background-position: top;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    z-index: 1;
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
            margin-left: -#{size(90)};
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
            grid-template-columns: repeat(1, 1fr);
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
        width: size(519);
        top: size(768);
        right: -#{size(150)};
        z-index: 0;
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

    .s10 {
        width: 100%;
        height: size-m(616);
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
                grid-template-columns: repeat(1, 1fr);
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
            width: size-m(167);
            top: unset;
            right: unset;
            left: -#{size-m(27)};
            bottom: -#{size-m(134)};
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
        img: isMobile ? new URL("../section/s10/1_m.jpg", import.meta.url).href : new URL("../section/s10/1.jpg", import.meta.url).href,
        caption: '',
        label: '內極珍稀/ 50坪內/4房3衛雙主臥'
    },
    {
        img: isMobile ? new URL("../section/s10/2_m.jpg", import.meta.url).href : new URL("../section/s10/2.jpg", import.meta.url).href,
        caption: '',
        label: '台南人最愛/27坪/2房2衛浴'
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
  