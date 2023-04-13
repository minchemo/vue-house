<template>
  <article class="s1">
    
    <!--   --><img class="t0" src="./s1/mobile.jpg" alt="" srcset="">
    <div class="light">
      <div class="light1"><img src="./s1/light1.jpg" alt="" srcset=""></div>
      <div class="light1"><img src="./s1/light1.jpg" alt="" srcset=""></div>
    </div>
    <div class="txtall">
      <div class="t1"><span data-aos="fade-right">尋找</span></div>
      <img class="logo" loading="lazy" src="./s1/logo.svg" alt="" srcset="">
      <!-- <img class="logo" data-aos="zoom-in" data-aos-duration="800" src="./s1/logo.svg" alt="" srcset=""> -->
      <div class="txt">
        <div class="t2"><img data-aos="fade-up" data-aos-delay="300" src="./s1/t2.svg" alt="" srcset=""></div>
        <div class="t3"><span data-aos="fade-up" data-aos-delay="600">打造高大極地理想國</span></div>
        <div class="t4" data-aos="fade" data-aos-delay="900"><span data-aos="fade-up" data-aos-delay="1000">高雄之極．茂德聚極</span></div>
        <div class="t5"><span data-aos="fade-up" data-aos-delay="1200">台灣十大建商 前進高雄代表作</span></div>
        <div class="t6"><img data-aos="fade-up" data-aos-delay="1500" src="./s1/t6.svg" alt="" srcset=""></div>     
      </div>
    </div>
      
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 
{
  @apply relative w-full h-screen;
  // @apply relative overflow-hidden w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // background: url("./s1/1.jpg");
  // background-size: cover;
  background: url("./s1/bg.jpg") center;
  background-size: cover;
  .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .0;z-index: 2;}
  .light{position: absolute;bottom: 0;right:size(-210);width:auto;display: flex;
  .light1{position: relative;width:size(410);display: block;
    margin:0 -20%;
    img{width:100%;mix-blend-mode: color-dodge;filter: blur(4px);
     transform: skewX(5deg);
     transform-origin: 100% 100%;
     animation: an 5s ease-in-out infinite alternate;  }
    &::after{content:"";position: absolute;width: 100%;height:size(150);left: 0;bottom: 0;
    background: radial-gradient(50% 50% at 50% 50%, #fffe 3%, #fff4 40%, #fff0 100%);opacity: 0.6;}
  &:first-child{
    img{
     animation-direction:alternate-reverse;}
  }
  }
}
@keyframes an {
  to {
     transform: skewX(-5deg);
  }
}
  .txtall{
    position: relative;
    width:auto;
    font-size:size(42);
    color: #fff;;
    text-align: center;
    display: flex;
    gap:.5em;
    line-height: 1.6;
    font-weight: 500;
    align-items:center;
    margin:auto;
    padding: 0 0 2.5em;z-index: 2;
    span{position: relative;display: block;}
  }
  .t1 {
    width:1em;
    font-size:size(320);line-height: 1;
    margin: -0.15em 0 0 0;overflow: hidden;
  }
  .logo {
    width: size(428);
  }
  .txt {
    width: size(700);margin: -0.1em -1.5em 0 0;
    display: flex;
    flex-direction:column;
    .t2,.t6{width: size(615);overflow: hidden;margin: auto auto .3em auto;
  img{width:100%;}
  
  }
    .t3{font-size:1.67em;font-weight: 300;width: 110%;transform: scaleX(.97);margin: auto -5%;overflow: hidden;}
    .t4{margin:1em auto;letter-spacing: 0.7em;color: #CEAA6D;text-indent: .7em;line-height: 2.7;position: relative;overflow: hidden;
width: 100%;
    &::after,&::before{content: "";position: absolute;left: calc(50% - (4em / 2));
    display: block;width: 4em;height: 1px;background: #FFF;margin: auto;}
    &::after{bottom:0;
    }
    &::before{top:0;

    }
  }
    .t5{font-size: 1.17em;letter-spacing: -0.03em;transform: scaleX(.98);text-indent:-.06em;line-height: 2;overflow: hidden;}

  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height: sizem(907);
    min-height: sizem(0);
    max-height: sizem(907);
  background-image: url("./s1/bgm.jpg");
  // background-size: sizem(450) auto;
  &::after{content: "";display: block;position: absolute;width: 100%;height:18vw;background: #000E29;left: 0;bottom: 0;transform:skewY(10deg);transform-origin: 0 0;}
  .light{right:sizem(-140);bottom:sizem(65);
  .light1{width:sizem(180);
    &::after{height:sizem(75);}
  }
}
  .txtall{
    font-size:sizem(15);
    flex-direction:column;
    padding: 0 0 11em;

    .t1 {
    width:auto;
    font-size:sizem(32);line-height: 1;
    margin: auto;
    position: absolute;left: 0;top: 4.5em;
  }
  .logo {
    width: sizem(254);
    margin: auto auto 2.3em auto;}
  .txt{
    width: sizem(250);width:auto;margin:auto;
    .t2,.t6{
    width: sizem(212);}
  }

  }



  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
