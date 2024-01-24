<template>
    <div class="s1bg">
        <div class="bg">
            <img src="@/section/s1/l1.svg" alt="l" class="l">
            <img src="@/section/s1/tree2.png" alt="tree" class="tree2">
            <img src="@/section/s1/l2.svg" alt="l" class="l">
            <img src="@/section/s1/tree1.png" alt="tree" class="tree1">
            <img src="@/section/s1/hill2.svg" alt="hill" class="hill2">
            <img src="@/section/s1/hill3.svg" alt="hill" class="hill3">
            <img src="@/section/s1/hill4.svg" alt="hill" class="hill4">
            <img src="@/section/s1/hill1.svg" alt="hill" class="hill1">
            <img src="@/section/s1/building.png" alt="building" class="building">
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
            bottom: size(110);
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



    .s1 {
        height: calc(100vh - 63px);
        min-height: sizem(604);
        max-height: sizem(812);
        font-size: sizem(14);


        .bg {
            .hill1 {
                width: sizem(442);
                bottom: sizem(40);
                left: auto;
                right: sizem(-168);
            }

            .hill2 {
                width: sizem(277);
                top:calc(60% + #{sizem(258 - 667 * .6)}); //size(348);
                right: sizem(-109);
            }

            .hill3 {
                width: sizem(219);
                bottom: sizem(188);
                left: sizem(-76);
            }

            .hill4 {
                width: sizem(226);
                bottom: sizem(2);
                left: sizem(-106);
            }

            .tree1 {
                width: sizem(79);
                bottom: sizem(20);
                left: sizem(3);
            }

            .tree2 {
                width: sizem(280);
                bottom: sizem(90);
                right: sizem(-76);
            }

            .l {
                width: sizem(1100);
                bottom: sizem(-60);
                left: sizem(-630);
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