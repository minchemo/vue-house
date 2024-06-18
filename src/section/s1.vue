<template>
  <article class="s1">
    <img class="logo" src="@/section/resource/logo.svg" />
    <img class="style1" src="@/section/resource/style1.svg" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply w-full h-screen relative flex flex-col items-center justify-center text-white z-20;
  min-height: size(900);
  max-height: size(1080);
  background-image: url("@/section/s1/bg.webp");
  background-size: cover;
  background-position: bottom;
  padding-bottom: size(150);
  .logo {
    width: size(760);
  }

  .style1 {
    @apply absolute;
    width: 100%;
    bottom: -#{size(180)};
    left: 0;
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
    background-image: url("@/section/s1/bgm.webp");
    padding-bottom: sizem(120);
    .logo {
      width: sizem(270);
    }

    .style1 {
      width: 150vw;
      bottom: -#{sizem(0)};
      left: -#{sizem(60)};
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
