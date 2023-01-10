<template>
  <article class="s1">
    <img class="logo" data-aos="zoom-in" src="@/section/s1/logo.svg" alt="" srcset="">
    <img class="t1" src="@/section/s1/t1.svg" alt="" srcset="">
    <img v-if="!$isMobile()" class="bird" src="@/section/s1/bird.png" alt="" srcset="">
    <img v-else class="bird" src="@/section/s1/bird_m.png" alt="" srcset="">
    <img v-if="!$isMobile()" class="tree" src="@/section/s1/tree.png" alt="" srcset="">
    <img v-else class="tree" src="@/section/s1/tree_m.png" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative overflow-hidden w-full h-screen bg-[#2B4D39];
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

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
    animation: fly 10s ease-in-out infinite alternate-reverse;

    @keyframes fly {
      from {
        transform: skewX(-10deg) skewY(-3deg) translate(-4%, 8%) rotate(10deg);
      }
      to {
        transform: skewX(10deg) skewY(3deg) translate(4%, -8%) rotate(0deg);

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
