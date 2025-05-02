<template>
  <article class="s1">
    <img class="t1" src="@/section/s1/logo.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0" />
    <div class="t2" data-aos="fade-up" data-aos-delay="200">|成州生活圈 高質感精工2-3房|</div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply w-full h-screen relative flex flex-col items-center justify-center text-white;
  min-height: size(900);
  max-height: size(1080);
  background-image: url("@/section/s1/bg.webp");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  gap: size(135.86);

  .t1 {
    width: size(623.47);
  }
  .t2 {
    font-size: size(51);
    font-weight: 700;
    letter-spacing: size(5.6);
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
    background-size: 100%;
    background-image: url("@/section/s1/bgm.png");
    background-size: cover;
    background-position: center;
    background-attachment: unset;
    gap: sizem(50);

    .t1 {
      width: sizem(265);
    }
    .t2 {
      font-size: sizem(21);
      font-weight: 700;
      letter-spacing: sizem(2.31);
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
