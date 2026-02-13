<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/pc.png" class="t0">
    <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t1.png" class="t1" data-aos="zoom-in" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t1m.png" class="t1" data-aos="zoom-in" data-aos-delay="400" v-else>
    <!--   
    <img src="" class="t2">
    <img src="./s1/t2m.png" class="t2" v-if="isMobile">
    <img src="./s1/t2.png" class="t2" v-else>

    <img src="./s1/slogo.svg" class="slogo" data-aos="flip-up" data-aos-delay="0">
    <img src="./s1/t3m.png" class="t3" data-aos="flip-left" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t3.png" class="t3" data-aos="flip-left" data-aos-delay="400" v-else> 
    -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
  pointer-events: visible;
  visibility: hidden;
  z-index: 9;
  opacity: 0.2;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  // mobile
  height: 62vw;
  background: url("./s1/bg.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: sizem(32);
  line-height: 1.3;

  //pc
  @media screen and (min-width: 768px) {
    background-image: url("./s1/bg.png");
    //background-size: 100%;
    height: 58vw;
    padding: 0;
    font-size: size(56);
  }

  .logo {
    width: 25vw;
    /* pc*/
    margin: 15vw 0vw 0vw 0vw;
  }

  .slogo {
    position: absolute;
    width: 100vw;
    bottom: 0vw;
    left: 0vw;
    z-index: 10;
    visibility: hidden;
  }

  .t1 {
    /* pc
    width: 51vw;
    margin: 4vw 17vw 0vw 17vw;*/
    width: 12vw;
    margin: -26vw 17vw 0vw 15vw;
  }

  @keyframes an {
    to {
      transform: rotate(0);
    }
  }

  .t2 {
    // mobile
    width: 9vw;
    margin: 0 auto;
    margin-top: 4.5vw;
    margin-left: 54vw;
    z-index: 10;
    // animation
    transform: rotate(20deg);
    animation: an 2s ease-in-out alternate infinite;
    transform-origin: 50% 100%;
    visibility: hidden;
  }

  .t3 {
    // mobile
    width: 20vw;
    margin: 0vw auto 0vw;
    margin-top: -16vw;
    z-index: 11;
    visibility: hidden;
  }

  @media screen and (min-width: 768px) {
    .logo {
      width: 25vw;
      //mobile
      margin: 4vw 3vw 57.6px 0vw 0vw;

    }

    .slogo {
      position: absolute;
      width: 100vw;
      bottom: 4.5vw;
      left: 0vw;
      visibility: hidden;
      /*PC*/
    }

    .t1 {
      /*PC*/
      width: 12vw;
      margin: -26vw 17vw 0vw 15vw;
    }

    // pc 
    .t2 {
      width: 10vw;
      margin: 0 auto;
      margin-top: 2vw;
      margin-left: 53vw;
      z-index: 10;
      transform: rotate(20deg);
      animation: an 2s ease-in-out alternate infinite;
      transform-origin: 50% 100%;
      visibility: hidden;
    }

    .t3 {
      // pc
      width: 20vw;
      margin: 0 auto;
      margin-top: -16vw;
      z-index: 99;
      visibility: hidden;
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