<template>
  <article class="s1" id="s1">
   <!-- <img src="./s1/mo.jpg" class="t0">
    <img src="./s1/mo.jpg" class="t0">  -->
    <div class="ball">
      <img src="./s1/ball1.webp" class="ball1">
      <img src="./s1/ball1.webp" class="ball2">
      <img src="./s1/ball1.webp" class="ball3">
      <img src="./s1/ball2.webp" class="ball4">
      <img src="./s1/ball2.webp" class="ball5">
      <img src="./s1/ball2.webp" class="ball6" v-if="isMobile">
    </div>

      <img src="./s1/t1m.svg" class="t1" data-aos="zoom-in" data-aos-delay="0" v-if="isMobile">
      <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="0" v-else>
      <img src="./s1/t2.svg" class="t2" data-aos="zoom-in" data-aos-delay="400">

   <!--  <img src="./s1/s1bg.jpg" class="bg" v-else> 
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
  height:sizem(750);
  background: url("./s1/bgm.webp");
  background-size: cover;
  @media screen and (min-width: 768px) {
    height:100vh;
    max-height:size(1080);
    min-height:size(900);
    background-image: url("./s1/bg.webp");
  }
  //background: #E60012;
// padding-bottom: size(140);V
 // &::after{content: "";position: absolute;bottom: 0;height: 1px;width: size(1552);left: 0;right: 0;margin: auto;background: #0006;}

  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
 .bg{width: 100%;}
.t1{width:sizem(200);margin: sizem(-110) 0 sizem(19) 0;position: relative;z-index: 99;
}
.t2{width:sizem(260);
}
@media screen and (min-width: 768px) {
.t1{width:size(676);margin: size(20) 0 size(50) 0;}
.t2{width:size(676);}
}
.ball{position: absolute;width: 100%;height: 100%;left: 0;top:0;z-index: 2;
img{position: absolute;}
.ball1{width:sizem(243);top: -14%;left: -13%;
  transform: translateY(20%);
animation: an 10s alternate infinite;
}
.ball2{width:sizem(195);top: 78%;left: -22%;
  transform: translateY(40%);
animation: an 8s -4s linear alternate infinite;}
.ball3{width:sizem(61);top: 13%;left: 71%;
  transform: translateY(20%);
animation: an 6s -2s linear alternate infinite;}
.ball4{width:sizem(147);top: 73%;left: 78%;
  transform: translateY(30%);
animation: an 7s -5s linear alternate infinite;}
.ball5{width:sizem(24);top: 82%;left: 29%;
  transform: translateY(50%);
animation: an 5s -1s linear alternate infinite;}
.ball6{width:sizem(154);top: 137%;left: 77%;
  transform: translateY(20%);
animation: an 9s -6s linear alternate infinite;}
@media screen and (min-width: 768px) {
.ball1{width:size(515);top: -30%;left: 7%;}
.ball2{width:size(354);top: 80%;left: 11%;}
.ball3{width:size(740);top: 68%;left: 77%;}
.ball4{width:size(170);top: 16%;left: 75%;}
.ball5{width:size(103);top: 128%;left: 9%;}

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