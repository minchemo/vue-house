<template>
  <article class="s1 relative" id="s1">
    <!-- 
    <picture>
      <source srcset="./s1/mo.png" media="(max-width: 768px)">
      <img src="./s1/pc.png" class="t0">
    </picture> -->
      <img src="./s1/bg.jpg" alt="bg" class="bg">
    <div class="shine-row rt">
      <div class="shine-dot dot-iri">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-y">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-b">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-b">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-l">
      </div>
      <div class="shine-dot dot-y">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-l">
      </div>
      <div class="shine-dot dot-iri">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot">
      </div>
      <div class="shine-dot dot-b">
        <div class="shine-inner"></div>
      </div>
    </div>
    <div class="shine-row br">
      <div class="shine-dot dot-b">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-iri">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-y">
        <div class="shine-inner"></div>
      </div>
    </div>
    <img src="./s1/logo.webp" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="200">
    <div class="visual">
      <div class="building">
        <img src="./s1/building.webp">
      </div>

      <div class="light1">
        <img src="./s1/light1.webp">
      </div>

      <div class="light2">
        <img src="./s1/light2.webp">
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top:0px;
  left: 0;
  pointer-events: none;
  z-index: 9;
  opacity: .0;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  font-size: sizem(11);
  height: 100svh; // 手機工具列跳動问题的正解，數值固定不受工具列影響
  min-height: sizem(604);
  max-height: sizem(604);
   /* background: url("./s1/bg.jpg");
    background-size:cover;
    */

  @media screen and (min-width: 768px) {
    font-size: size(27);
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);
  }

.bg{
  
  position: absolute;
  width: 100%;
  height: 100%;
  top:0px;
  left: 0;
  pointer-events: none;
  object-fit: cover;
 // z-index: 9;
}
  .logo {
    position: absolute;
   // top: sizem(76);
    top: calc(55% + #{sizem(145 - 604 * .55)});

    right: sizem(46);
    width: sizem(280);
    margin: 0;

    @media screen and (min-width: 768px) {
      top: size(360);
      // top: calc(50% + #{size(323 - 1080 * .50)});
      right: size(365);
      width: size(725);

    }
  }

  .t1 {
    position: absolute;
    top: sizem(260);
    top: calc(50% + #{sizem(260 - 604 * .50)});
    right: 0;
    left: 0;
    margin: auto;
    width: sizem(244);

    @media screen and (min-width: 768px) {
      top: size(610);
      top: calc(55% + #{size(610 - 1080 * .55)});
      margin: 0;
      right: size(234);
      left: auto;
      width: size(710);

    }
  }

  .visual {
    position: absolute;
    bottom: 0;
    left: sizem(5);
    overflow: hidden;
    height: sizem(480);
    pointer-events: none;
    user-select: none;


    @media screen and (min-width: 768px) {
      height: size(957);
      left: size(105);

    }
  }

  .building {
    position: relative;
    height: 100%;
    margin: 0;
    bottom: -26%;

    img {
      height: 100%
    }

    @media screen and (min-width: 768px) {
      bottom: -23%;
    }
  }

  .light2,
  .light1 {
    position: absolute;
    width: 100%;
    mix-blend-mode: screen;
    pointer-events: none;
    user-select: none;
      top:30%;
      left: 0;
      height: 100%;

    @media screen and (min-width: 768px) {
      top:30%;
      left: 0;
      height: 100%;

    }
  }

  .light2 img {
    position: absolute;
      width: 10%;
      top:25%;
      left: 85%;

  }

  .light1 img {
    position: absolute;
      width: 88%;
      top:0%;
      left: 5%;

  }
  .shine-row.rt {
    top: -.5em;
    left: -.5em;
    gap: 0em;
    flex-direction: row;
    flex-wrap:wrap;justify-content: flex-start;
    width: 3em;z-index: 3;
  }
  .shine-row.br {
    bottom: -.5em;
    right:  -.5em;
    gap: .1em;
    flex-direction: row;
    flex-wrap:wrap-reverse;
  align-items: flex-end;justify-content: flex-end;
    width: 3em;z-index: 3;
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