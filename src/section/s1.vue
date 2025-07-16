<template>
  <article class="s1" id="s1">
   <!-- 
    <img src="./s1/pc.jpg" class="t0">
    <img src="./s1/mo.jpg" class="t0">  -->
    <div class="ball">
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
    <!--
    <h2 class="t2" data-aos="zoom-in" data-aos-delay="200">免千萬成家入場券</h2> -->
    <img src="./s1/t2.svg" class="t2" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/t3.svg" class="t3" data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/t4.svg" class="t4" data-aos="zoom-in" data-aos-delay="600">
    <div class="t5">情境示意</div>

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
  height:sizem(660);
  background: center;
  background-image: url("./s1/bgm.jpg");
  background-size: cover;
    font-size: sizem(16);
  @media screen and (min-width: 768px) {
    height:100vh;
    max-height:size(1100);
    min-height:size(900);
    background-image: url("./s1/bg.jpg");
    font-size: size(50);
  }
  //background: #E60012;
// padding-bottom: size(140);V
 // &::after{content: "";position: absolute;bottom: 0;height: 1px;width: size(1552);left: 0;right: 0;margin: auto;background: #0006;}

  .t0{
    position: absolute;width: 100%;top:0vw;left: 0;
    pointer-events: none;z-index: 10;opacity: .6;
  }
 .bg{width: 100%;}
 .t1{
    font-weight: 500;font-size: 1.55em;
    position: absolute;left: 0;right: 0;text-align: center;
    top: sizem(92);z-index: 3;
    @media screen and (min-width: 768px) {
      font-size: 1.15em;
      top: calc(50% + #{size(150 - 1100 * .5)});
    }
  }
  .t2{
    position: absolute;left: 0;right: 0;margin: 0 auto;top: sizem(135);z-index: 3;filter:drop-shadow(0px 0px 3px #ed8622);
      width: sizem(300);
    @media screen and (min-width: 768px) {
      top: calc(50% + #{size(250 - 1100 * .5)});
      width: size(900);
    }
  }
  /*
 .t2{
    font-weight: 900;font-size: 2.35em;
    position: absolute;left: 0;right: 0;text-align: center;
    top: sizem(125);z-index: 3;
    background: linear-gradient(78deg, #fff2b2 5%, #fff693 23.23%, #FFF 34.8%, #fff2a5 60.82%, #FFF 78.17%, #ffe78e 97.45%);
    background-clip: text; 
    color: transparent;
    @media screen and (min-width: 768px) {
      font-size: 2.25em;
      top: calc(50% + #{size(215 - 1100 * .5)});
    }
  } */
  .t3{
    height: 1.5em;filter:drop-shadow(0px 0px 3px #ed8622);
    margin: 0 auto;
    position: absolute;left: 0;right: 0;text-align: center;
    top:sizem(465);z-index: 3;
    @media screen and (min-width: 768px) {
      height: 1.43em;
      top: calc(80% + #{size(903 - 1100 * .8)});
    }
  }
  .t4{
    height: .92em;filter:drop-shadow(0px 0px 3px #ed8622);
    margin: 0 auto;
    position: absolute;left: 0;right: 0;text-align: center;
    top:sizem(500);z-index: 3;
    @media screen and (min-width: 768px) {
      height: .81em;
      top: calc(80% + #{size(1006 - 1100 * .8)});
    }
  }
  .t5{
    position: absolute;
    left: 0.5em;
    bottom: 6.5em;
    z-index: 6;
    font-size: sizem(12);
    color: #fff;
    @media screen and (min-width: 768px) {
    bottom: .5em;
       font-size: size(15);
      }

  }

 /*
.t1{width:sizem(200);margin: sizem(-110) 0 sizem(19) 0;position: relative;z-index: 99;
}
.t2{width:sizem(260);
}
@media screen and (min-width: 768px) {
.t1{width:size(676);margin: size(20) 0 size(50) 0;}
.t2{width:size(676);}
}
*/
.ball{position: absolute;width: 100%;height: 100%;left: 0;top:0;z-index: 2;
  filter: blur(0px);

> div{position: absolute;}
img{width: 100%;}
.ball1{width:sizem(73);top: -6%;left: 10%;
  transform: translateY(20%);
  animation: an 10s alternate infinite;
  img{transform: rotate(90deg);filter: blur(2px);}
}
.ball2{width:sizem(62);top: 50.5%;left: -5%;
  transform: translateY(40%);height:sizem(62);
  animation: an 8s -4s linear alternate infinite;
  img{filter: blur(2px);}
}
.ball3{
  width:sizem(134);top: 1%;left: 75%;
  transform: translateY(20%);
  animation: an 6s -2s linear alternate infinite;
  img{transform: rotate(180deg);filter: blur(4px);}
}
.ball4{width:sizem(101);top: 67%;left: 78%;
  transform: translateY(30%);
 animation: an 7s -5s linear alternate infinite;
  img{transform: rotate(-90deg);filter: blur(4px);}
}
.ball8{width:sizem(30);top: 48.5%;left: 75%;
  transform: translateY(-20%);
  animation: an 9s -6s linear alternate infinite;
  img{transform: rotate(-115deg);filter: blur(1px);}
}
.ball9{width:sizem(30);top: 54%;left: 75%;
  transform: translateY(20%);
 animation: an 9s -6s linear alternate infinite;
  img{transform: rotate(-145deg);filter: blur(1px);opacity:  .5;}
}/*  */
@media screen and (min-width: 768px) {
.ball1{width:size(190);top: 10%;left:-7%;}
.ball2{width:size(65);top: 16%;left: 12.8%;height:size(65);}
.ball3{width:size(109);top: 43%;left: 2%;}
.ball4{width:size(109);top: 85%;left: 2%;opacity:  .5;}
.ball5{width:size(47);top: 37%;left: 18%;
  transform: translateY(60%);
 animation: an 9s -3s linear alternate infinite;
  img{transform: rotate(45deg);filter: blur(2px);}}
.ball6{width:size(192);top: 50%;left: 17.8%;
  transform: translateY(40%);
 animation: an 9s -6s linear alternate infinite;
  img{transform: rotate(0deg);filter: blur(2px);}}
.ball7{width:size(192);top: 75%;left: 17.8%;opacity:  .5;
  transform: translateY(40%);
 animation: an 9s -6s linear alternate-reverse infinite;
  img{transform: rotate(90deg);filter: blur(2px);}}
.ball8{
  width:size(71);
  top: calc(70% + #{size(690 - 1100*.7)});
  left: 60%;}
.ball9{
  width:size(71);
  top: calc(70% + #{size(785 - 1100*.7)});
  left: 60%;}
.ball10{width:size(120);top: 17%;left: 82.5%;
  transform: translateY(40%);
 animation: an 9s -6s linear alternate infinite;
  img{transform: rotate(180deg);filter: blur(2px);}}
.ball11{width:size(47);top: 41%;left: 78%;
  transform: translateY(40%);
 animation: an 8s -5s linear alternate infinite;
  img{transform: rotate(-90deg);filter: blur(3px);}}
.ball12{width:size(63);top: 43.5%;left: 96%;
  transform: translateY(40%);
 animation: an 7s -1s linear alternate infinite;
  img{transform: rotate(180deg);filter: blur(1px);}}
.ball13{width:size(99);top: 63%;left: 86.5%;
  transform: translateY(40%);
 animation: an 7s -1s linear alternate infinite;
  img{transform: rotate(-115deg);filter: blur(3px);}}
.ball14{width:size(341);top: 85%;left: 73%;
  transform: translateY(20%);
 animation: an 9s -3s linear alternate infinite;
  img{transform: rotate(-115deg);filter: blur(5px);}}

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