<template>
  <article class="s1 relative" id="s1">
    <!-- <img src="./s1/mo.png" class="t0"> -->
    <img src="./s1/en.svg" alt="luxurious" class="en">
    <div class="logo">
      <img src="./s1/diamond.webp" alt="" class="p1">
      <img src="./s1/logo.svg" alt="logo" class="p2">
      <img src="./s1/l.webp" alt="logo" class="p3">
      <img src="./s1/l.webp" alt="logo" class="p4">
      <img src="./s1/l.webp" alt="logo" class="p5">
    </div>
    <img src="./s1/t1.svg" alt="" class="t1" v-if="!isMobile">
    <img src="./s1/t1m.svg" alt="" class="t1" v-else>
    <img src="./s1/coming.svg" alt="" class="coming">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: 9;
  opacity: .3;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  height: calc(100dvh - #{sizem(63)});
    min-height: sizem(604);
    max-height: sizem(750);
  background: linear-gradient(180deg, #04004D 47.12%, #03317D 65.69%, #0189D3 96.53%, #0189D3 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 100dvh;
    // height: size(1070);
    min-height: size(900);
    max-height: size(1080);
    justify-content: space-between;
    padding: 0;
  }


  .en {
    position: absolute;
    top:sizem(154);left:0;right: 0;
    top:calc(55% + #{sizem(154 - 750 * .55)});
    margin: 0 auto 0;
    width: sizem(248);
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: size(1270);
    top:size(81);
    top:calc(20% + #{size(81 - 1080 * .2)});
      margin:0 auto;
    }
  }
@keyframes shimmer {
  0%, 100% { opacity: 0.5; transform: rotate(0deg) scale(1); }
  50%       { opacity: 1;   transform: rotate(180deg) scale(1.08); }
}

@keyframes shimmer-slow {
  0%, 100% { opacity: 0.4; transform: rotate(0deg) scale(1); }
  50%       { opacity: 0.85; transform: rotate(180deg) scale(1.05); }
}
  .logo {
    position: absolute;
    top: sizem(220);left:0;right: 0;
    top:calc(55% + #{sizem(220 - 750 * .55)});
    margin: 0 auto 0;
    width: sizem(180);
    .p1{width: 100%;}
    .p2{position: absolute;
    top: 31%;
    left: 38%;
    width: 24.1%;
    }
.p3 {
  position: absolute;
  top: 7%;
  left: 49%;
  width: 15%;
  mix-blend-mode: screen;
  transform-origin: center center;
  animation: shimmer 3.2s ease-in-out infinite;
}

.p4 {
  position: absolute;
  top: 52%;
  left: 66%;
  width: 15%;
  mix-blend-mode: screen;
  transform-origin: center center;
  animation: shimmer 4s ease-in-out infinite 1.1s;
}
.p5 {
  position: absolute;
  top: 4%;
  left: 0%;
  width: 50%;
  mix-blend-mode: screen;
  transform-origin: center center;
  animation: shimmer-slow 5.5s ease-in-out infinite 0.6s;
}
    @media screen and (min-width: 768px) {
      width: size(340);top: size(325);
    top:calc(50% + #{size(325 - 1080 * .5)});
    }
  }

  .t1 {
    position: absolute;
    top:sizem(453);left:0;right: 0;
    top:calc(60% + #{sizem(453 - 750 * .6)});
    margin: 0 auto;
    width: sizem(142);
    @media screen and (min-width: 768px) {
      width: size(1265);
    top:size(490);
      margin:0 auto;
    top:calc(50% + #{size(490 - 1080 * .5)});
    }
  }
  .coming {
    position: absolute;
    top:sizem(588);left:0;right: 0;
    top:calc(60% + #{sizem(588 - 750 * .6)});
    margin: 0 auto;
    width: sizem(175);
    @media screen and (min-width: 768px) {
      width: size(401);
    top:size(870);
    top:calc(70% + #{size(870 - 1080 * .7)});
      margin:0 auto;
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