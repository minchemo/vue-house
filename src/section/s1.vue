<template>
  <article class="s1" id="s1">

    <img src="" class="t1" data-aos="flip-down" data-aos-delay="400">
    <img src="./s1/t1.png" class="img" data-aos="flip-down" data-aos-delay="800" v-if="isMobile">
    <img src="./s1/t12.svg" class="t1" data-aos="flip-down" data-aos-delay="400" v-else>

    <img src="./s1/bg.png" class="t2" data-aos="flip-down" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t1.png" class="t2" data-aos="flip-down" data-aos-delay="400" v-else>

    <img src="./s1/img.svg" class="img" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t2.png" class="t3" data-aos="fade-up" data-aos-delay="800">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

/*
@keyframes op {
  50% {
     opacity: 0;
  }
}
 .bgh{position: absolute;width: 100%;height:100%;top:0;left: 0;object-fit: cover;
}
 .gif{position: absolute;width:100%;height:70%;bottom:0;left: 0;
mix-blend-mode: overlay;opacity: .8;
}
*/
.s1 {
  @apply relative w-full h-screen;
  min-height: size(1080);
  max-height: size(1080);
  font-size: size(36);
  background: #EFD3C5;
  //padding: size(20);

  @media screen and (max-width: 767px) {
    height: calc(100vh);
    min-height: sizem(50);
    max-height: sizem(667);
    font-size: sizem(15);
    background: (#EFD3C5);

  }

  .t0 {
    position: absolute;
    width: 100%;
    top: 0vw;
    left: 0;
    pointer-events: none;
    opacity: .0;
    height: 100%;
  }

  .t1 {
    position: absolute;
    z-index: 20;
    left: size(200);
    //right: 0;
    margin: auto;
    width: size(817);
    //top: calc(50% - #{size(0)});
    top: size(600);
    //top: calc(50% + #{size(600 - 1080 * .5)});

    @media screen and (max-width: 767px) {
      width: sizem(483);
      top: calc(50% + #{sizem(600 - 604 * .5)});
      //top: calc(50% - #{sizem(40)});
    }
  }

  //副標

  .img {
    position: absolute;
    z-index: 30;
    left: -350px;
    right: 0;
    margin: auto;
    width: size(560);
    //top: calc(50% - #{size(500)});
    top: size(300);
    //影子
    //filter: drop-shadow(size(10) size(12) size(10) #000C);

    @media screen and (max-width: 767px) {
      right: sizem(-30);
      width: sizem(165);
      top: calc(50% - #{sizem(280)});
      filter: drop-shadow(sizem(5) sizem(6) sizem(5) #000C);
    }
  }

  //主標

  .t2 {
    position: absolute;
    z-index: 5;
    left: calc(50% - #{size(950)});
    margin: auto;
    width: size(745);
    top: calc(50% - #{size(550)});

    @media screen and (max-width: 767px) {
      left: 0;
      right: 0;
      width: sizem(270);
      top: calc(50% - #{sizem(400)});
    }
  }

  //葉子

  .t3 {
    position: absolute;
    z-index: 7;
    //left: calc(50% - #{size(250)});
    left: size(500);
    margin: auto;
    width: size(1400);
    //top: calc(50% - #{size(200)});
    top: size(250);

    @media screen and (max-width: 767px) {
      left: 0;
      right: 0;
      width: sizem(270);
      top: calc(50% - #{sizem(100)});
    }
  }

  //人臉  

  @keyframes ann {
    to {
      transform: translateX(0%);
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