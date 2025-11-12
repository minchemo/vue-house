<template>
  <article class="s1" id="s1">
   <!--   -->
    <img src="./s1/pc.jpg" class="t0" v-if="!isMobile" />
    <img src="./s1/mo.jpg" class="t0" v-else />


    <img src="./s1/smilecity.svg" alt="smilecity" class="smilecity" />
    <img src="./s1/logo.svg" class="logo" />
    <img src="./s1/t1.svg" class="t1" />
    
   <!-- <div class="ball">
      <div class="ball1"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball2"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball3"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball4"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball5" v-if="!isMobile"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball6" v-if="!isMobile"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball7" v-if="!isMobile"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball8"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball9"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball10" v-if="!isMobile"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball11" v-if="!isMobile"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball12" v-if="!isMobile"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball13" v-if="!isMobile"><img src="./s1/ball.webp" alt="img"></div>
      <div class="ball14" v-if="!isMobile"><img src="./s1/ball.webp" alt="img"></div>
      
    </div>
    <h1 class="t1" data-aos="zoom-in" data-aos-delay="0">台中水湳經貿✕超巨蛋特區</h1>
    <img src="./s1/t2.svg" class="t2" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/t3.svg" class="t3" data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/t4.svg" class="t4" data-aos="zoom-in" data-aos-delay="600">
    <div class="t5">情境示意</div>

     <img src="./s1/s1bg.jpg" class="bg" v-else> 
    <div class="txt">
      <h2 class="t1" data-aos="zoom-in" data-aos-delay="0">在這裡<br>發現布魯克林</h2>
      <div class="t2" data-aos="zoom-in" data-aos-delay="200">紐約曼哈頓，為布魯克林而美麗<br>
台灣的布魯克林，驚喜發現在八里<br>
同步匯集智慧、綠意、人文城市於一身</div>
<div class="t3" data-aos="zoom-in" data-aos-delay="400">國際心跳 矚目之光<span>蓄勢待發</span></div>
<img src="./s1/en.svg" class="en" data-aos="zoom-in" data-aos-delay="600"> 
    </div>
  -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s1 {
  @apply relative; 
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  height:sizem(660);
  background: center;
  // background-image: url("./s1/bgm.jpg");
  background-size: cover;
    font-size: sizem(16);
  @media screen and (min-width: 768px) {
    height:100vh;
    max-height:size(1130);
    min-height:size(1130);
   // background-image: url("./s1/bg.jpg");
    font-size: size(50);
  }
  //background: #E60012;
// padding-bottom: size(140);V
 // &::after{content: "";position: absolute;bottom: 0;height: 1px;width: size(1552);left: 0;right: 0;margin: auto;background: #0006;}

  .t0{
    position: absolute;width: 100%;top:0vw;left: 0;
    pointer-events: none;z-index: 10;opacity: .3;
  }
 .bg{width: 100%;}
  .smilecity{
    position: absolute;left: size(106);top: size(153);width: size(188);
  }
  .logo{
    width: size(805);margin: size(25)
  }
  .t1{
    width: size(1070);
  }
 .t01{
    font-weight: 500;font-size: 1.55em;
    position: absolute;left: 0;right: 0;text-align: center;
    top: sizem(92);z-index: 3;
    @media screen and (min-width: 768px) {
      font-size: 1.15em;
      top: calc(50% + #{size(150 - 1100 * .5)});
    }
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
/*
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s1 {
    font-size:sizem(14);
    .txt{
    top: sizem(85);
    .en{width: 18em;}
  }
}
}
*/
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>