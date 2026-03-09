<template>
  <article class="s1" id="s1">

    <a href="https://lin.ee/jX9Xyhz" target="_blank" v-if="!isMobile">
      <img src="./s1/lineicon.png" class="lineicon" data-aos="zoom-in" data-aos-delay="200" />
    </a>
    <!-- 
    <img src="./s1/pc.png" class="t0">
    <img src="./s1/mo.png" class="t0">-->
    <div class="txt">
      <img src="./s1/bg3.png" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="2000" class="eggbg" alt="蛋黃">
      <img src="./s1/logo.png" alt="logo" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" class="logo">
      <img src="./s1/txt.png" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" alt="txt" class="txt1">
    </div>
    <!--  -->
    <div class="img">
      <img src="./s1/mark.png" alt="">
      <img src="./s1/img.png" alt="">
      <img src="" alt="">
    </div>


    <img src="./s1/oo.png" alt="oo" class="oo1">
    <div class="hill"><img src="./s1/hill.png" alt="oo">
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

  .lineicon {
    position: fixed;
    width: size(80);
    height: size(80);
    right: size(20);
    bottom: size(120);
    z-index: 99;
  }

  .img {
    position: absolute;
    //top: size(190);
    //left: size(1343);
    //height: size(992); 
    z-index: 2;

    img {
      position: relative;
      top: 23vw;
      left: 29vw;

      width: 300%;
      top: 23vw;
      left: 26vw;


      &:first-child {
        position: absolute;
        //top: 19.5%; 
        //left: -5%; 

        width: 100%;
        top: 21vw;
        left: 26vw;
      }

      &:last-child {
        position: absolute;
        top: 680%;
        width: 46%;
        left: 100%;
      }

      &:nth-child(2) {
        width: 130%;
        top: 23vw;
        left: -25vw;
      }
    }


  }

  .txt {
    position: absolute;

    left: 154px;
    right: 0;
    margin: auto;
    top: 6.177083vw;
    top: size(115.2);
    /* 
    top: calc(50% + #{size(157 - 1140 * .5)});
    top: calc(50% + #{size(970 - 1140 * .5)}); 
        right: size(-100);
        */
    text-align: center;
    width: size(726);



    .eggbg {
      position: absolute;
      top: -19%;
      display: block;
      width: 90%;
      left: -80%;
    }

    .logo {
      position: relative;
      display: block;
      margin: auto;
      z-index: 3;
      width: 80%;

      top: 2.2vw;
      left: 14.5vw;

    }

    .txt1 {
      position: relative;
      display: block;
      margin: 4% auto auto auto;
      z-index: 3;
      width: 80%;
      left: 37%;
      top: 1.7vw;
    }
  }

  .txt1 {
    position: relative;
    display: block;
    margin: 4% auto auto auto;
    z-index: 3;
    width: 97%;
    left: 37%;
    top: 5.7vw;
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
    top: 30vw;

  }

  .hill {
    position: absolute;
    left: 0px;
    bottom: 0px;
    //height: size(50);
    //right: size(-100);
    //bottom: calc(50% + #{size(0 - 1080 * .5)}); 

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

    .img {
      position: absolute;
      top: sizem(135);
      top: calc(35% + #{sizem(135 - 604 * .35)});
      left: sizem(232);
      min-height: sizem(430);
      //height: 60%;

      img {
        &:first-child {
          width: 66%;
          top: 22vw;
          left: 29vw;
        }

        &:last-child {
          top: 82%;
          width: 61%;
          left: -34%;
        }
      }
    }

    .txt {
      top: sizem(246);
      left: 0;
      right: 0;
      margin: auto;
      top: calc(50% + #{sizem(246 - 604 * .5)});
      width: sizem(224);

      .eggbg {

        top: 114%;
        width: 57%;
        left: -31.5%;
      }

    }

    .oo1 {
      top: 9vw;
      height: 16vw;
      left: -22vw;
      //top: sizem(140);
      //height: sizem(20);
      //left: sizem(-20);
      //top: calc(50% + #{sizem(140 - 604 * .5)});
    }

    .hill {
      bottom: 38px;
      height: sizem(20);
      right: sizem(-65);
      //top: sizem(490);
      //top: calc(50% + #{sizem(490 - 604 * .5)});
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