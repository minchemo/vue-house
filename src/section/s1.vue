<template>
  <article class="s1" id="s1">
    <!--<a href="https://lin.ee/jX9Xyhz" target="_blank" v-if="!isMobile">
      <img src="./s1/lineicon.png" class="lineicon" data-aos="zoom-in" data-aos-delay="200" />
    </a>  -->

    <!-- 
    <img src="./s1/pc.png" class="t0">
    <img src="./s1/mo.png" class="t0">-->
    <div class="txt">
      <img src="./s1/bg3.png" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="2000" class="eggbg" alt="">
      <img src="./s1/logo.png" alt="logo" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" class="logo">
      <img src="./s1/txt.svg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" alt="txt" class="txt1">
    </div>
    <!-- 
    <div class="img">
      <img src="./s1/mark.png" alt="">
      <img src="./s1/img.png" alt="">
      <img src="" alt="">
    </div> 
    -->

    <div class="cloud">
      <img src="./s1/cloud.png" alt="oo1" class="oo1">
    </div>
    <div class="hill">
      <img src="./s1/hill-pc.png" alt="oo" v-if="!isMobile">
      <img src="./s1/hill-mo.svg" alt="oo" v-else>
    </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';



.s1 {
  @apply relative w-full h-screen;
  min-height: size(950);
  max-height: size(1080);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: size(40);
  color: #FFF;
  line-height: 1.3;
  font-weight: 700;

  background: url("./s1/bg.png");
  background-size: cover;

  .t0 {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: .3;
    z-index: 50;
  }

  /*  
  .lineicon {
    position: fixed;
    width: size(80);
    height: size(80);
    right: size(20);
    bottom: size(120);
    z-index: 99;
  }
   */
  .cloud img {
    top: 47vw;
  }

  img {
    position: absolute;
    position: relative;
    z-index: 2;
    margin-top: -14vw;
  }

  .txt {
    position: absolute;
    margin: auto;
    text-align: center;
  }

  .eggbg {
    position: absolute;
    display: block;
    top: 72%;
    width: 21%;
    left: 4%;
    //pc
  }

  .logo {
    position: relative;
    display: block;
    margin: auto;
    top: -9vw;
    left: 10vw;
    width: size(634);
    //pc
  }

  .txt1 {
    position: relative;
    display: block;
    margin: 0 auto auto auto;
    z-index: 3;
    width: size(706);
    //width: 113%;
    //left: 13%;
    // top: 1.7vw;

    top: -3vw;
    left: 9%;
  }

  .oo1 {
    position: absolute;
    /* 
    right: size(-100);
    top: calc(50% + #{size(970 - 1140 * .5)}); 
    */
    transform: translateX(20%);
    animation: an 9s ease-in-out infinite alternate-reverse;
    top: 10vw;
    left: 2vw;
    width: 120%;
    top: 35vw;

  }

  .hill {
    position: absolute;
    right: 0;
    bottom: 0px;
    width: 100%;

    img {
      width: 100%;
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
    max-height: sizem(821);
    font-size: sizem(14);
    background-position: center;
    background-size: 170% 100%;

    .logo {
      //mo
      position: relative;
      display: block;
      margin: auto;

      width: 62%;
      top: -27vw;
      left: 2%;
    }

    .txt1 {
      //mo
      position: relative;
      display: block;
      margin: 3% auto auto auto;
      z-index: 3;
      width: 62%;
      top: -25vw;
      left: 2%;
    }

    .eggbg {
      top: 79%;
      width: 46%;
      left: 27%;
    }

    .cloud img {
      display: none;
      position: relative;
      height: 20vw;
      top: -250px;
      right: 12vw;
      width: 121%;
    }

    .oo1 {
      top: 9vw;
      height: 16vw;
      left: -22vw;
    }

    .hill {
      bottom: 0px;
      left: 0vw;

      img {
        margin-bottom: -1px;
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