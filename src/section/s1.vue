<template>
  <article class="s1">
    <div class="seawave">
     <img  src="@/section/s1/gif4.gif" alt="" srcset=""> 
    </div>
    <div class="title">
      <img class="t1" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/logo.svg" alt=""
        srcset="">
      <img v-if="!$isMobile()" class="t2" data-aos="fade-up" data-aos-delay="200" src="@/section/s1/t2.png" alt=""
        srcset="">
      <img v-else class="t2" data-aos="fade-up" data-aos-delay="200" src="@/section/s1/t2_m.svg" alt="" srcset="">
      <div class="t3 font-['noto_sans_tc']" data-aos="fade-up" data-aos-delay="300">海洋新國門｜站前四鐵特區｜首開世界豪門</div>

      <img v-if="!$isMobile()" class="t4" data-aos="fade-up" data-aos-delay="400" src="@/section/s1/t4.svg" alt="" srcset="">
      <img v-else class="t4" data-aos="fade-up" data-aos-delay="400" src="@/section/s1/t4_m.svg" alt="" srcset="">
    </div>
    <img class="sun" src="@/section/s1/sun.png" alt="" srcset="">
    <div class="boatin" data-aos="fade-left" data-aos-delay="500">
    <img class="boat" src="@/section/s1/boat.png" alt="" srcset="">
    </div>
    <img class="light" v-if="$isMobile()" src="@/section/s1/light.png" alt="">
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen overflow-hidden;
  min-height: size(900);
  max-height: size(1080);
  background: url('@/section/s1/bg.png');
  background-size: cover;

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
    top: size(70);
    gap: size(26);
    .t1 {
      width: size(300);
    }
    .t2 {
      width: size(984);
    }
    .t3 {
      color: #fff;
      font-size: size(35);
      font: 400;
    }
    .t4 {
      width: size(594);
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
      width: 85%;
      left: size-m(28);
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
      width: size-m(209);
    }
    .t2 {
      width: size-m(209);
      margin-top: size-m(20);
      margin-bottom: size-m(15);
    }
    .t3 {
      font-size: size-m(11);
      margin-bottom: size-m(15);
    }
    .t4{
      width: size-m(209);
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
