<template>
  <article class="s1">
    <img src="./s1/pc.jpg" class="t0" />
    <img src="./s1/1.png" data-aos="fade-down" data-aos-delay="0" class="img1" />
    <img src="./s1/2.png" data-aos="fade" data-aos-delay="200"  class="img2" />
    <img src="./s1/3.png" data-aos="fade" data-aos-delay="400" class="img3" />
    <img src="./s1/line.svg" class="line" />



    <div class="seawave">
     <img  src="@/section/s1/gif4.gif" alt="" srcset=""> 
    </div>
    <div class="title">
      <img v-if="!$isMobile()" class="t1" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/t1.png" alt=""
        srcset="">
      <img v-else class="t1" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/t1_m.png" alt="" srcset="">
      <img v-if="!$isMobile()" class="t2" data-aos="fade-up" data-aos-delay="200" src="@/section/s1/t2.png" alt=""
        srcset="">
      <img v-else class="t2" data-aos="fade-up" data-aos-delay="200" src="@/section/s1/t2_m.png" alt="" srcset="">
      <img v-if="!$isMobile()" class="t3" data-aos="fade-up" data-aos-delay="400" src="@/section/s1/t3.png" alt=""
        srcset="">
      <img v-else class="t3" data-aos="fade-up" data-aos-delay="400" src="@/section/s1/t3_m.png" alt="" srcset="">
    </div>
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5}
.s1 {
  @apply relative w-full h-screen overflow-hidden;
  min-height: size(900);
  max-height: size(1080);
  background: url('@/section/s1/bg.png');
  background-size: cover;
  .img1{position: absolute;top: 0;left: 0;width:size(159);}
  .img2{position: absolute;top: 0;left: 0;width:size(1321);transform: scale(1.2);}
  .img3{position: absolute;bottom: 0;right: 0;width:size(445);transform: scale(.5);transform-origin: 100% 100%;}
  .line{position: absolute;top: size(-122);left:size(-37);width:size(760);}

  .seawave {
   @apply relative w-full h-screen overflow-hidden;
   width: size(1500);
   height: 12vh;
   bottom: 0;
   position: absolute;
    img{
      width: 100%;
      mix-blend-mode: overlay;
      opacity: .3;
    }
  }
  

  .sun {
    @apply absolute mix-blend-screen pointer-events-none;
    z-index: 3;
    width: size(800);
    top: size(370);
    left: -#{size(100)};
    transform: scale(1.2)rotate(-30deg);
    transform-origin: 35% 45%;
    animation: rotate 6s alternate infinite linear;

    @keyframes rotate {
      to{
        transform: skewX(0deg);
      }
    }
  }

  .boat {
    @apply absolute right-0 pointer-events-none;
    top: size(574);
    width: size(1083);
    height: size(764);
    z-index: 2;
    animation: boatwave 2s infinite alternate ease-in-out;
    transform: translateY(3%);


    @keyframes boatwave {
      to {
        transform: translateY(0%);
      }
    }
  }


  .title {
    @apply left-1/2 -translate-x-[50%] absolute flex flex-col items-center justify-center;
    z-index: 5;
    top: size(112);
    gap: size(36);
    .t1 {
      width: size(984);
    }
    .t2 {
      width: size(984);
    }
    .t3 {
      width: size(694);
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
    background: url('@/section/s1/bg_m.jpg');
    background-size: cover;
    gap: size-m(35);

    .seawave {
      width: size-m(375);
      height: 5vh;

    }

    .light {
      @apply  mix-blend-screen pointer-events-none absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      animation: light .5s alternate-reverse infinite;
      @keyframes light {
        from {
          opacity: 50%;
        }
        to {
          opacity: 100%;
        }
      }
    }
  .sun {
    z-index: 3;
    width: size-m(200);
    top: unset;
    bottom: -#{size-m(0)};
    left: -#{size-m(100)};
    transform: scale(1.5)rotate(-45deg);
    transform-origin: 35% 45%;
    animation: rotate 6s alternate infinite linear;

    @keyframes rotate {
      to{
        transform: skewX(0deg);
      }
    }
  }

  .boatin{
    height: 100vh;
    min-height: size-m(667);
    max-height: size-m(750);
    position: relative;
    z-index: 99;


    .boat {
    top: unset;
    bottom: -#{size-m(70)};
    width: size-m(306);
    height: size-m(216);
  }

  }




  .title {
    top: size-m(80);
    gap: 0;
    .t1 {
      width: size-m(158);
    }
    .t2 {
      width: size-m(239);
      margin-top: size-m(50);
      margin-bottom: size-m(23);
    }
    .t3 {
      width: size-m(139);
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
