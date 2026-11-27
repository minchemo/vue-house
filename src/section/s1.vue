<template>
  <article class="s1 relative" id="s1">
    <!--   --> <picture>
      <source  srcset="./s1/mo.png" type="image/png" media="(max-width: 767px)">
      <img src="./s1/pc.png" class="t0"></picture>


      <img src="./s1/bg.png" class="bg">

      <img src="./s1/img.png" class="img">
    <img src="./s1/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="400">
    
    <div class="button" data-aos="zoom-in" data-aos-delay="600" @click="scrollTo('.order')">
      立即預約
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
  user-select: none;
  z-index: 9;
  opacity: .0;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}


.s1 {
  position: relative;
  height: sizem(430);
  //  height:sizem(667);
  /*  height:calc(100vh - 63px);
  min-height: sizem(604);
    max-height: sizem(750);
    */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: url("./s1/bg.png") 50% 50%;
  // background-size: 100% auto;
  // overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 100vh;
    //height: size(1160);
    min-height: size(900);
    max-height: size(1080);
    justify-content: space-between;
    padding: 0;
  }
  .bg{
    position: absolute;
    width: 172%;
    top: -31.8%;
    left: -36%;
  pointer-events: none;
  user-select: none;
  @media screen and (min-width: 768px) {
      top: calc(50% + #{size(-40 - 1929 * .5)});
    left: 0;
    width: 100%;

  }
  }
  .img {
    position: absolute;
    width: sizem(450);
      top: sizem(-10);
      left:  sizem(-30);
      transform: skewX(-8deg)translateX(-3%);
      transform-origin: 0 0;
      animation: an 6s linear infinite alternate;
  pointer-events: none;
  user-select: none;

    @media screen and (min-width: 768px) {
      width: size(1760);
      top: size(-10);
      left:  size(-10);
    }
  }
  .slogo {
    position: absolute;
    top: sizem(10);
    left: sizem(10);
    width: sizem(60);
  pointer-events: none;
  user-select: none;

    @media screen and (min-width: 768px) {
    top: size(28);
      left: size(25);
      width: size(150);
    }
  }
  .logo {
    position: absolute;
      top: sizem(87);
   // top: calc(50% + #{sizem(80 - 667 * .5)});
      left: 0;
      right: 0;
      margin: auto;
    width: sizem(210);
  pointer-events: none;
  user-select: none;

    @media screen and (min-width: 768px) {
      top: size(230);
      top: calc(50% + #{size(190 - 1070 * .5)});
      width: size(622);
    }
  }

  .t1 {
   position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: sizem(255);
    width: sizem(220);
  pointer-events: none;
  user-select: none;
    /* top: calc(50% + #{sizem(205 - 667 * .5)});
    left: sizem(32);
    width: sizem(312);*/

    @media screen and (min-width: 768px) {
      top: size(765);
      top: calc(50% + #{size(735 - 1070 * .5)});
      width: size(950);
    }
  }
  .button {
    position: absolute;
    top: sizem(336);
    left:0;right: 0;
    margin: auto;
    width: sizem(145);
    color: #133C36;
    font-size: sizem(15);
    text-align: center;
    letter-spacing: 0.2em;
    line-height: 2.5;
    border: 1px solid #133C36;
    transition: all .3s;
    cursor: pointer;
    user-select: none;


    @media screen and (min-width: 768px) {
      display: none;
    }
    &:hover{
      background: #133C36;
    border: 1px solid #133C36;
    color: #ffe893;
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