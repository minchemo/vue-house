<template>
  <article class="s1 relative" id="s1">
    <picture>
      <source
        srcset="./s1/bgm.jpg"
        media="(max-width: 768px)"
      >

      <img
        src="./s1/bg.jpg"
        alt=""
        class="bg"
      >
    </picture>
      <img
        src="./s1/logo2.svg"
        alt=""
        class="logo"
        data-aos="zoom-in"
        data-aos-delay="0"
      >
      <img
        src="./s1/t1.svg"
        alt=""
        class="t1"
        data-aos="zoom-in"
        data-aos-delay="200"
      ><div class="c">3D透視模擬合成示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10;
  opacity: 1;


}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  width: 100%;
  padding: 0;
  font-size: sizem(12);
  margin-bottom: 0px;
     height: sizem(470);

  
    @media screen and (min-width: 768px) {
     height: size(1080);
  font-size: size(15);
    }
    .c{position: absolute;bottom: 0.5em;right: 1em;color: #fff;
      text-shadow: 0 0.2em .2em #000;}
.bg{width: 100%; object-fit: cover;height: 100%;}
  .logo {
    position: absolute;
    top:sizem(60);
    left: 0;
    right:0 ;margin: auto;
    width: sizem(130);
    filter:drop-shadow(0px 0px 5px rgba(0,0,0,.5));
    @media screen and (min-width: 768px) {
     width: size(450);
    top:size(160);
     margin: 0;right: size(250);
     left: auto;
    }
  }

  .t1 {
    position: absolute;
    top:sizem(150);
    left: 0;
    right:0 ;margin: auto;
    width: sizem(250);
    filter:drop-shadow(0px 0px 10px #1775bc);
    @media screen and (min-width: 768px) {
     width: size(750);
    top:size(150);
     margin: 0;left: size(300);
     right: auto;
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