<template>
  <article class="s1 relative" id="s1">
   <!--  <img src="./s1/web.png" class="t0"><img src="./s1/mo.png" class="t0"> -->
    <img src="./s1/logom.svg" class="logo" data-aos="zoom-in" data-aos-delay="0" v-if="isMobile">
    <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0" v-else>
    <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/t2.png" class="t2" v-if="!isMobile">

    <img src="./s1/bgbottommo.svg" class="bgbottom" v-if="isMobile">
    <img src="./s1/bgbottom.svg" class="bgbottom" v-else>
    <img src="./s1/t3m.webp" class="t3" data-aos="flip-left" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t3.png" class="t3" data-aos="flip-left" data-aos-delay="400" v-else>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 10px;
  left: 0px;
  pointer-events: none;
  visibility: visible;
  z-index: 9;
  opacity: 0.3;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}
@keyframes an1 {
  to {
  transform: rotate(-7deg);
  }
}
.s1{
  position: relative;
  width: 100%;
    height: calc(100dvh - #{sizem(63)});
  background-color: #EFEA45;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  @media screen and (min-width: 768px) {
    //background-image: url("");
    //background-size: 100%;
    height: 100dvh;
    min-height: size(900);
    max-height: size(1080);
    padding: 0;
    font-size: size(56);
    margin-bottom:size(125);
  }
  .logo {
    width: size(1213);
    margin:0 auto;
    display: block;
  }

  .t1 {
    width: sizem(293);
    margin: sizem(24) auto sizem(225) auto;
    display: block;
  @media screen and (min-width: 768px) {
     width: size(880);
    margin: size(28) auto size(225) auto;
  }
  }
  .t2 {
    width: size(204);
    position: absolute;
    bottom: size(-85);
    left: size(1010);
  transform: rotate(15deg);
  transform-origin: 20% 80%;
  animation: an 2s ease-in-out alternate infinite;
  }
  .bgbottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  @media screen and (min-width: 768px) {
    bottom: size(-125);}
  }
  .t3 {
    position: absolute;
    width: sizem(285);
    bottom: sizem(-70);
    left: sizem(60);
    //opacity: 0.5;
  transform: rotate(-15deg);
  transform-origin: 50% 60%;
  animation: an1 2s ease-in-out alternate infinite;
  @media screen and (min-width: 768px) {
    width: size(420);
    bottom: size(-90);
    left: size(725);
  transform: rotate(5deg);
  transform-origin: 50% 70%;
  animation: an 2s ease-in-out alternate infinite;
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