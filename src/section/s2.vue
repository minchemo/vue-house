s2<template>
  <article class="s2 relative" id="s2">
    <picture>
      <source media="(max-width: 768px)" srcset="./s2/bgm.svg" />
      <img src="./s2/bg.svg" alt="" class="bg" />
    </picture>
<div class="l"></div>
    <img src="./s2/logo.svg" alt="" class="logo" data-aos="zoom-in" />
    <img src="./s2/t1.svg" alt="" class="t1" data-aos="zoom-in" data-aos-delay="200" />
<!--   <picture>
      <source media="(max-width: 768px)" srcset="./s2/2m.jpg" />
      <img src="./s1/2.jpg" alt="" class="t0" />
    </picture> 
    
  <div class="hero-light-fx" aria-hidden="true">
    <span class="orb o1"></span>
    <span class="orb o2"></span>
    <span class="orb o3"></span>
    <span class="orb o4"></span>
  </div>
      <img src="./s2/t1.svg" alt="" class="t1"  data-aos="fade-up" data-aos-delay="0" />
<div class="t2"  data-aos="fade-up" data-aos-delay="200">住的是城心，佇的是自己<br><br>
美好的城市機能相間<br>
號召專屬的生活節奏回歸<br><br>
昌益在這裡，開啟鬆弛時光的邀約
      <div class="thread"></div></div>


      <button @click="scrollTo('#order')" class="scroll-down"></button>

      -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';



.s2 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: sizem(10);
  background: #EB6120;
  height: sizem(604);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(1070);
    max-height: size(1070);

  }
  @keyframes an {
  to {
    transform: translateX(0%);
  }
}
  .l{ position: absolute;top: sizem(130);left: 0;z-index: 2;mix-blend-mode: color-dodge;
    width:sizem(211);
    height:sizem(211);
    transform: translateX(77%);
    background:radial-gradient(50% 50% at 50% 50%, #003D7A 19%, #003060 30%, #001B36 52%, #000C18 71%, #000306 88%, #000 100%);
  animation: an 4s ease-in-out alternate infinite;
  @media screen and (min-width: 768px) {
    top: size(130);left: size(460);
    width:size(530);
    height:size(530);
   transform: translateX(82%);
  }
  
  }
  .bg {
    position: absolute;top: 0;left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  
  }
  .logo{ position: relative;
    width: sizem(244);
    z-index: 2;
    margin: sizem(0) auto sizem(60);
  @media screen and (min-width: 768px) {
    width: size(610);
    margin: size(100) auto size(100);
  }
  }
  .t1{position: relative;
    width: sizem(296);
    z-index: 2;
    filter: drop-shadow(size(2.8) size(2.8) size(3.8) rgba(20, 40, 102, 0.75));
  @media screen and (min-width: 768px) {
    width: size(980); 
    filter: drop-shadow(size(2.5) size(2.5) size(2) rgba(20, 40, 102, .8));
    
    margin: 0 auto;
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