<template>
  <article class="s1">
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
    <img class="sun" src="@/section/s1/sun.png" alt="" srcset="">
    <img class="boat" src="@/section/s1/boat.png" alt="" srcset="">
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
  .sun {
    @apply absolute mix-blend-screen pointer-events-none;
    z-index: 3;
    width: size(1100);
    top: size(200);
    left: -#{size(200)};
    transform: scale(1.5)rotate(-45deg);
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
    transform: translateX(100%);
    animation: boatIn 2s forwards ease-in-out;

    @keyframes boatIn {
      to {
        transform: translateX(0%);
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
    min-height: size-m(667);
    max-height: size-m(750);
    background: url('@/section/s1/bg_m.jpg');
    background-size: cover;
    gap: size-m(35);
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

  .boat {
    top: unset;
    bottom: -#{size-m(70)};
    width: size-m(306);
    height: size-m(216);
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
