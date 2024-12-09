<template>
  <article class="s1">
    <div class="content">
      <img class="t1" src="@/section/s1/t1.svg" alt="" data-aos="fade-up" data-aos-delay="0"/>
      <img class="logo" src="@/section/s1/logo.svg" alt="" data-aos="fade-up" data-aos-delay="100"/>
    </div>
    <img class="style" src="@/section/s1/style.webp" alt="" data-aos="fade-left" data-aos-delay="500"/>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full max-h-screen;
  @apply flex flex-col items-center justify-center;
  background-image: url("@/section/s1/bg.webp");
  padding-bottom: size(160);
  height: size(1080);

  .content {
    @apply relative z-10;
    @apply flex flex-col items-center justify-center;
    gap: size(42);

    .logo {
      width: size(269);
    }

    .t1 {
      width: size(400);
    }
  }

  .style{
    position: absolute;
    width: size(516);
    right:0;
    bottom: size(100);

}


}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    @apply relative w-full max-h-screen;
    @apply flex flex-col items-center justify-start;
    background-image: url("@/section/s1/bgm.webp");
    padding-bottom: 0;
    padding-top: sizem(129);
    height: sizem(667);

    .content {
      @apply relative z-10;
      @apply flex flex-col items-center justify-center;
      gap: sizem(31);

      .logo {
        width: sizem(270);
      }

      .t1 {
        font-size: sizem(15);
      }
    }


  }
}
</style>

<script setup>
import { computed, getCurrentInstance } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
