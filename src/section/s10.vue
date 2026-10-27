<template>
  <article class="s10 relative" id="s10">
    <picture>
      <source srcset="./s1/1m.png" media="(max-width: 768px)">
      <img src="./s1/1.png" class="bg">
    </picture>
    <div class="light"></div>
    <picture>
      <source srcset="./s1/metrom.svg" media="(max-width: 768px)">
      <img src="./s1/metro.svg" class="metro">
    </picture>
     <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
     <div class="txt">
     <div class="t1">
     <h3>黃金級智慧建築+耐震雙標章</h3>
<h4>約30秒上環東｜雙捷運700米</h4>
     </div>
     <div class="t2">
<h3>南港展覽館站約700米</h3>
<h4>開車約30秒上環東大道</h4>
     </div>
      
     </div>
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

.s10 {
  font-size: sizem(11);
  height: 100svh; // 手機工具列跳動问题的正解，數值固定不受工具列影響
  min-height: sizem(604);
  max-height: sizem(604);
  background-image: radial-gradient(71.95% 40.59% at 50% 50%, #0068B7 0%, #000035 100%);
    background-size:cover;

  @media screen and (min-width: 768px) {
    font-size: size(27);
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);
   
  }

  .bg {
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0px;
    left: 0;
    pointer-events: none;
    object-fit: cover;
    // z-index: 9;
  @media screen and (min-width: 768px) {
    width:  size(650);
    height: auto;
    top: 0px;
      top: calc(50% + #{size(0 - 1080 * .50)});
    left: 0;
  }
  }
  .light{
    position: absolute;
    top:auto;
    bottom: 0;
    left: sizem(38);
    font-size: sizem(283);
    width: 1em;height: 1em;
  background: radial-gradient(28.7% 28.7% at 50% 50%, #D2D3D3 0%, #616060 39%, #1B1C1C 69%, #040000 100%);
background-blend-mode: color-dodge;
mix-blend-mode: color-dodge;
animation:op 3s infinite alternate;
opacity: 1;
  @media screen and (min-width: 768px) {
    bottom: auto;
    top: size(224);
      top: calc(50% + #{size(224 - 1080 * .50)});
    left: size(144);
    font-size: size(580);
  }
}

@keyframes op {
  to {
    opacity: .5;
  }
}
  .logo {
    position: absolute;
    // top: sizem(76);
    top: calc(55% + #{sizem(188 - 604 * .55)});

    right: sizem(56);
    width: sizem(265);
    margin: 0;
    z-index: 5;

    @media screen and (min-width: 768px) {
      top: size(275);
      top: calc(50% + #{size(275 - 1080 * .50)});
      right: size(365);
      width: size(760);

    }
  }
  .txt {
    position: absolute;
    // top: sizem(76);
    top: calc(55% + #{sizem(310 - 604 * .55)});

    right: sizem(46);
    width: sizem(280);
    margin: 0;
    font-size: sizem(18);
    line-height: 1.4;
    z-index: 5;

    @media screen and (min-width: 768px) {
      top: size(610);
      top: calc(50% + #{size(610 - 1080 * .50)});
      right: size(265);
      width: size(960);
    font-size: size(63);

    }
    h3{font-size: 1.13em;}
    .t1,
    .t2{position: absolute;top: 0;left: 0;width: 100%;}
.t1,
.t2 {
  animation: zoomFade 10s ease-in-out infinite;
  animation-fill-mode: both;
}

.t1 {
  animation-delay: 0s;
}

.t2 {
  animation-delay: 5s;
}

@keyframes zoomFade {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  7% {
    opacity: 1;
    transform: scale(1);
  }

  47% {
    opacity: 1;
    transform: scale(1);
  }

  52% {
    opacity: 0;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}
  }
.metro{
  position: absolute;
  top: 0;
  left: 0;width: sizem(132);
    z-index: 5;
  @media screen and (min-width: 768px) {
    
  top: size(0);
  left: auto;
  right: 0;width: size(270);
  }

}

}
</style>
<script setup>
import info from "@/info"
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
const canPlayWebP = document.createElement('canvas')
  .toDataURL('image/webp')
  .startsWith('data:image/webp')

</script>