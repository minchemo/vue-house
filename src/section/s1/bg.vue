<template>
    <div class="s1bg">
        <div class="bg">
            <img src="@/section/s1/l1.svg" alt="l" class="l">
            <img src="@/section/s1/tree2.png" alt="tree" class="tree2">
            <img src="@/section/s1/l2.svg" alt="l" class="l">
            <template v-if="!isMobile">
                <img src="@/section/s1/tree1.png" alt="tree" class="tree1">
                <img src="@/section/s1/hill2.svg" alt="hill" class="hill2">
                <img src="@/section/s1/hill3.svg" alt="hill" class="hill3">
                <img src="@/section/s1/hill4.svg" alt="hill" class="hill4">
                <img src="@/section/s1/hill1.svg" alt="hill" class="hill1">
                <img src="@/section/s1/building.webp" alt="building" class="building">
            </template>
            <template v-else>
                <img src="@/section/s1/hill1_m.svg" alt="hill" class="hill1m">
                <img src="@/section/s1/hill2_m.svg" alt="hill" class="hill2m">
                <img src="@/section/s1/buildingm.webp" alt="building" class="building">
            </template>
            <img src="@/section/s1/slowliving.svg" alt="hill" class="slowliving">
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
    50% {
        opacity: 0;
    }
}

@keyframes an1 {
    to {
        transform: skewX(3deg)
    }
}

.s1bg {
    @apply absolute w-full h-screen overflow-hidden z-0;
    min-height: size(900);
    max-height: size(1080);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: size(35);
    background: #DEDBD4;
    letter-spacing: 0.09em;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        img {
            position: absolute;
        }

        .slowliving {
            width: size(691);
            left: size(828);
            bottom: size(293);
        }

        .building {
            width: size(906);
            left: size(49);
            bottom: -#{size(0)};
        }

        .hill1 {
            width: size(318);
            bottom: size(110);
            left: size(1004);
        }

        .hill2 {
            width: size(356);
            bottom: size(87);
            right: -#{size(139)}
        }

        .hill3 {
            width: size(311);
            bottom: size(147);
            left: size(-31);
        }

        .hill4 {
            width: size(259);
            bottom: size(56.87);
            left: size(700);
        }

        .tree1 {
            width: size(110);
            bottom: size(158);
            left: size(179.56);
            transform: skewX(-2deg);
            transform-origin: 50% 100%;
            animation: an1 5s ease-in-out alternate infinite;
        }

        .tree2 {
            width: size(333);
            bottom: size(95);
            right: size(61);
            transform: skewX(-3deg);
            transform-origin: 50% 100%;
            animation: an1 5s ease-in-out alternate infinite;
        }

        .l {
            width: 100%;
            bottom: size(-120);
            left: 0;
        }

    }
}


/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
    .s1bg {
        height: calc(100vh - 63px);
        min-height: sizem(604);
        max-height: sizem(812);
        font-size: sizem(14);

        .bg {
            .building {
                width: sizem(330);
                left: 0;
                bottom: 0;
            }

            .hill1m {
                @apply absolute;
                width: sizem(120);
                right: 0;
                bottom: sizem(20);
            }

            .hill2m {
                @apply absolute;
                width: sizem(141);
                right: sizem(77);
                bottom: sizem(77);
            }

            .tree2 {
                width: sizem(166);
                bottom: sizem(100);
                right: sizem(-40);
            }

            .l {
                width: sizem(800);
                bottom: sizem(0);
                left: sizem(-430);
            }
        }


    }


}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
    smoothScroll({
        scrollTo: document.querySelector(el)
    })
}
</script>