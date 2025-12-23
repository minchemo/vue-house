<template>
  <article class="s1" id="s1">

     <img src="./s1/tl.jpg" class="tl" alt="tl">
     <img src="./s1/br.png" class="br" alt="br">
     <img src="./s1/leaf.png" class="leaf" alt="leaf">
     <img src="./s1/logo.svg" class="logo" alt="logo">
     <img src="./s1/t1.svg" class="t1" alt="t1">
<!--
    <img src="./s1/mo.jpg" class="t0">

    <img src="./s1/t11.png" class="t0" data-aos="flip-down" data-aos-delay="400">
    <img src="" class="t0" data-aos="flip-down" data-aos-delay="800" v-if="isMobile">
    <img src="./s1/t11.png" class="t1" data-aos="flip-down" data-aos-delay="400" v-else>

    <img src="./s1/t12m.svg" class="t1" data-aos="flip-down" data-aos-delay="800" v-if="isMobile">
    <img src="./s1/t12.svg" class="t1" data-aos="flip-down" data-aos-delay="400" v-else>

    <img src="" class="t2" data-aos="flip-down" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t1.png" class="t2" data-aos="flip-down" data-aos-delay="400" v-else>

    <img src="./s1/img.svg" class="img" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t2.png" class="t3" data-aos="fade-up" data-aos-delay="800">  -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@keyframes an {
 to {
     transform: skewX(0)
  }
}

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
    height: sizem(457);
    min-height: sizem(457);
    max-height: sizem(457);
    font-size: sizem(15);
    background: (#EFD3C5);

  }

  .t0{position: absolute;
    z-index: 20;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  pointer-events: none;

  }
  .logo{
    position: absolute;
    z-index: 2;
      width: sizem(205);
      left: sizem(74);
      top: sizem(128);

    @media screen and (min-width: 768px) {
    width: size(443);
    left: size(578);
    top: size(316);
    }
  }
  .t1{
    position: absolute;
    z-index: 2;
      width: sizem(219);
      left: sizem(15);
      top: sizem(246);

    @media screen and (min-width: 768px) {
    width: size(800);
    left: size(214);
    top: size(588);
    }
  }
  .tl{
    position: absolute;
    z-index: 2;
      width: sizem(191);
    left: 0;
    top: 0;
      transform-origin: 50% 0;
      transform: skewX(-5deg);
      animation: an 3s linear alternate infinite;

    @media screen and (min-width: 768px) {
    width: size(760);
    }
  }
  .br{
    position: absolute;
    z-index: 2;
      width: sizem(215);
    right: sizem(-90);
    bottom: 0;
   

    @media screen and (min-width: 768px) {
    width: size(800);
    right: 0;
    }
  }
  .leaf{
    position: absolute;
    z-index: 2;
      width: sizem(280);
      animation: an 3s linear alternate infinite;
      transform: rotate(5deg);
      transform-origin: 50% -10%;
    left: sizem(10);
    bottom: sizem(20);
   

    @media screen and (min-width: 768px) {
    width: size(1012);
    left: size(413);
    bottom: size(0);
    }
  }
/*
  .t0 {
    position: absolute;
    z-index: 20;
    left: -0.583333vw;
    //right: 0;
    margin: auto;
    width: size(817);
    //top: calc(50% - #{size(0)});
    top: -0.75vw;
    //top: calc(50% + #{size(600 - 1080 * .5)});

    @media screen and (max-width: 767px) {
      width: 64vw;
      top: 0vw;
      //top: calc(50% - #{sizem(40)});
    }
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
      width: 51vw;
      top: calc(50% + 4vw);
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
      right: -90vw;
      width: sizem(165);
      top: calc(50% - 25vw);
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
    z-index: 20;
    //left: calc(50% - #{size(250)});
    left: size(500);
    margin: auto;
    width: size(1400);
    top: calc(50% - 15vw);

    @media screen and (max-width: 767px) {
      left: 28vw;
      right: 0;
      width: sizem(270);
      top: calc(50% + 7vw);
    }
  }

  //人臉  

  @keyframes ann { 
    to {
      transform: translateX(0%);
    }
  }*/
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