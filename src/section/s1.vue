<template>
  <article class="s1">
    <img class="i0" src="./s1/pc.jpg" alt="">
    <img class="logo" data-aos="zoom-in" data-aos-duration="800" src="@/section/s1/logo.svg" alt="" srcset="">
    <img class="t1" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800" src="@/section/s1/t1.svg" alt="" srcset="">
    <img v-if="!$isMobile()" class="bird" src="@/section/s1/bird.png" alt="" srcset="">
    <img v-else class="bird" src="@/section/s1/bird_m.png" alt="" srcset="">
    <img v-if="!$isMobile()" class="tree" src="@/section/s1/tree.png" alt="" srcset="">
    <img v-else class="tree" src="@/section/s1/tree_m.png" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative overflow-hidden w-full h-screen bg-[#CFD9D0];
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .i0{position: absolute;top: 0;left: 0;width: 100%;
  opacity: .5;
  }

  .logo {
    width: size(563.58);
    margin-bottom: size(91.92)
  }
  .t1 {
    width: size(421.95);
    margin-bottom: size(134.82)
  }
  .bird {
    @apply absolute;
    width: size(505.45);
    left: size(813.36);
    bottom: size(191.55);
    animation: fly 5s linear infinite alternate-reverse;  
    transform: rotate(0);

    @keyframes fly {
      to {
        transform:translateY(-20%)scale(1.2)rotate(-10deg);

      }
    }
  }
  .tree {
    width: size(1013.92);
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: sizem(604);
    max-height: sizem(604);

  .logo {
    width: sizem(207.78);
    margin-bottom: sizem(37.08)
  }
  .t1 {
    width: sizem(155.56);
    margin-bottom: sizem(97.23)
  }
  .bird {
    @apply absolute;
    width: sizem(320.22);
    left: sizem(31.28);
    bottom: sizem(122.5);
  }
  .tree {
    width: 100%;
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
