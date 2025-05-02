<template>
  <article class="s1">
  <!--   <img class="t1" src="@/section/s1/logo.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0" />
    <div class="t2" data-aos="fade-up" data-aos-delay="200">|成州生活圈 高質感精工2-3房|</div>
    <img class="t0" src="./s1/1.jpg" alt="" />
  -->
    <div class="bg3" data-aos="fade" data-aos-delay="0" >
      <img class="f2" src="./s1/f1.png" alt="" />
      <img class="f3" src="./s1/f1.png" alt="" />
</div>
    <div class="bg1" data-aos="fade-up" data-aos-delay="0" >
      <img class="f1" src="./s1/f2.png" alt="" />
      <img class="f4" src="./s1/f1.png" alt="" />
      <img class="b1" src="./s1/b1.png" alt="" />
      <img class="b2" src="./s1/b2.png" alt="" />
</div>
  <div class="txt">
    <img class="logo" src="./s1/logo.svg" alt="" data-aos="zoom-in" data-aos-delay="0" />
    <div class="t01" data-aos="zoom-in" data-aos-delay="200">住近繁華，住靜生活</div>
    <div class="t02" data-aos="zoom-in" data-aos-delay="400">成州生活圈 寧靜特區</div>
    <div class="t03" data-aos="zoom-in" data-aos-delay="600"><span class="l"><span>訂簽</span>95<span>萬起</span></span><span class="r">2-3房</span></div>
  </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

@keyframes an {
  to {
    transform: rotate(0);
  }
}
.s1 {
  @apply w-full h-screen relative flex flex-col items-center justify-center text-white;
  min-height: size(900);
  max-height: size(1080);/*
  background-image: url("@/section/s1/bg.webp");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;*/
  background-image: linear-gradient(180deg, #F4E937, #E89E28 15%,  #e27814 50%,#DE5B1B);
.t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .1;}

.bg3{position: fixed;top: 0;left: 0;width: 100%;height: 100%;
img{position: absolute;}
}
.bg1{position: absolute;top: 0;left: 0;width: 100%;height: 100%;
img{position: absolute;}
}
.f1{right: size(-100);top:size(100);width:size(360);
  animation: an 5s alternate infinite;
  transform: skewY(-2deg)rotate(-3deg);
  transform-origin: 100% 100%;
}
.f2{right: size(-250);bottom:size(-310);width:size(728);opacity: .2;
  animation: an 5s -2s alternate infinite;
  transform: skewX(-2deg)rotate(-3deg);
  transform-origin: 50% 100%;}
.f3{left: size(166);bottom:size(-755);width:size(977);opacity: .2;
  animation: an 5s -5s alternate infinite;
  transform: skewX(-2deg)rotate(-3deg);
  transform-origin: 50% 100%;}
.f4{left: size(-150);bottom:size(-275);width:size(390);transform: scaleX(-1)rotate(-17deg);
  filter: invert(0) sepia(100%) saturate(2000%) hue-rotate(340deg);
  animation: an2 5s -5s alternate infinite;
  transform-origin: 50% 100%;}
@keyframes an2 {
  to {
    transform: scaleX(-1)rotate(-20deg);
  }
}
.b1{left: size(160);top:size(424);width:size(250);}
.b2{right: size(560);top:size(766);width:size(119);}
.txt{text-align: center;font-size:size(40); font-weight: 700;text-align: center;
margin: 1em auto 0 auto;}
.logo{width:16.1em;
  filter:drop-shadow(0.1em 0.1em 0.2em #610f15b3);
}
  .t01 {font-size: 1.73em;
    color: #f4e827;   margin: .4em auto .1em;
  }
  .t02 {border: 1px solid #fff;margin: 0 auto;
  }
  .t03 { font-weight: 600;
    font-size: 2em;
    display: flex;line-height: 1.1;
    justify-content: center;
    align-items: center;
    .l{font-size: 1.5em;color: #f4e827; 
      span{display: inline-block;width: 1em;line-height: 1.2;font-size: .37em;color: #fff;margin: .2em; }
    }
    .r{border: 1px solid #fff;border-width:0 1px 0 1px;margin: 0 0 0 .5em ;padding: 0 .5em;line-height: 1.2;}
  }
}


/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size: sizem(14);
    gap: sizem(50);


    
.f1{right: sizem(-80);top:sizem(20);width:sizem(180);}
.f2{right: sizem(-80);bottom:sizem(-50);width:sizem(250);}
.f3{left: sizem(-20);bottom:sizem(-170);width:sizem(320);}
.f4{left: sizem(-50);bottom:sizem(0);width:sizem(150);transform: scaleX(-1)rotate(-20deg);
  filter: invert(0) sepia(100%) saturate(2000%) hue-rotate(340deg);
}
.b1{left: sizem(20);top:sizem(110);width:sizem(70);}
.b2{right: sizem(70);top:sizem(450);width:sizem(50);}
.txt{font-size:sizem(18);
  margin: 0em auto 0 auto;}
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
