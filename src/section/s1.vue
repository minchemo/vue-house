<template>
  <article class="s1">
 <!-- 
   <img src="./s1/mobile.jpg" class="t0" /> --> 
   <div class="img">
    <img src="./s1/bg.jpg" data-aos="fade-down" data-aos-delay="0" class="bg" />
    <img src="./s1/1.png" data-aos="fade-down" data-aos-delay="0" class="img1" />
    <img src="./s1/2.png" data-aos="zoom-out-right" data-aos-delay="200"  class="img2" />
    <img src="./s1/3.png" data-aos="zoom-in-left" data-aos-delay="400" class="img3" />
    <img src="./s1/line.svg" class="line" />
  </div>
    <div class="txt">
    <img src="./s1/logo.svg" class="logo" srcset="" /><br />
    <img src="./s1/title.svg" class="t1" />
<div class="t2">9米前院  獨墅一格<br v-if="$isMobile()" /><b v-else>｜</b><span>61-71坪</span>｜珍稀6席</div>
    <!--   <img v-if="!$isMobile()" class="t1" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/t1.png" alt=""
        srcset="">
      <img v-else class="t1" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/t1_m.png" alt="" srcset="">
      <img v-if="!$isMobile()" class="t2" data-aos="fade-up" data-aos-delay="200" src="@/section/s1/t2.png" alt=""
        srcset="">
      <img v-else class="t2" data-aos="fade-up" data-aos-delay="200" src="@/section/s1/t2_m.png" alt="" srcset="">
      <img v-if="!$isMobile()" class="t3" data-aos="fade-up" data-aos-delay="400" src="@/section/s1/t3.png" alt=""
        srcset="">
      <img v-else class="t3" data-aos="fade-up" data-aos-delay="400" src="@/section/s1/t3_m.png" alt="" srcset="">  -->  
    </div>
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;z-index: 5;}
.s1 {
  @apply relative w-full h-screen;// overflow-hidden;
  min-height: size(900);
  max-height: size(1080);
  .img{
    position: absolute;top: 0;left: 0;width:100%;height: 100%;
  .bg{position: absolute;top: 0;left: 0;width:100%;height: 100%;object-fit: cover;}
  .img1{position: absolute;top: 0;left: 0;width:size(159);}
  .img2{position: absolute;top: 0;left: 0;width:size(1321);}
  .img3{
    position: absolute;bottom: 0;right: 0;width:size(445);
    transform-origin: 100% 100%;
  }
  .line{position: absolute;top: size(-122);left:size(-37);width:size(760);}
}
  .txt{
    text-align: center;
    top:calc(50% + (374 - 540) * 100vw / 1920);
    position: relative;
font-size:size(30);
    .logo{
      width:size(552);
      margin: 0 0 1.6em;
    }
    .t1{
      width:size(482);
      margin: 0 0 1.6em;}
    .t2{
font-weight: 700;
letter-spacing: 0.1em;
color: #fff;
text-align: center;
span{color: #E89213;}
}
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height: 100vh;
    min-height: size-m(667);
    max-height: size-m(750);
    background-size: cover;
    gap: size-m(35);

    .img{
      transform: rotate(90deg) translate(0, -100%);
      transform-origin:0 0;
width:100vh;height: 100vw;
    min-width: size-m(667);
    max-width: size-m(750);
  .img1{width:size-m(57);}
  .img2{width:size-m(481);}
  .img3{width:size-m(162);}
  .line{position: absolute;top: size-m(-46);left:size-m(-24);width:size-m(274);}


   }
  .txt{
    top:calc(50% + (221 - 667 * .5) * 100vw / 375);
font-size:size-m(20);
    .logo{
      width:size-m(250);
      margin: 0 0 1.1em;
    }
    .t1{
      width:size-m(250);
      margin: 0 0 1.3em;}
    .t2{
      line-height:1.9;
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
