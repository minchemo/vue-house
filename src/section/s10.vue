<template>
  <article class="s10" data-aos="bright" data-aos-duration="2000" data-aos-delay="500">
    <img loading="lazy"  class="img1" src="@/section/s10/1.svg" alt="" srcset="" />
    <img loading="lazy"  class="img2" src="@/section/s10/2.svg" alt="" srcset="" />
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  @apply relative w-full bg-black bg-cover bg-fixed;
  @apply flex items-end justify-center;
  height: size(900);
  background-image: url("@/section/s10/bg.webp");
  padding-bottom: size(244.84);
  gap: size(141);
  img {
    @apply mx-[unset];
  }
  .img1 {
    width: size(630.62);
  }
  .img2 {
    width: size(653.62);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s10 {
    @apply relative w-full bg-black bg-cover bg-fixed;
    @apply flex flex-col items-center justify-center;
    height: sizem(540);
    background-image: url("@/section/s10/bgm.webp");
    padding-bottom: 0;
    gap: sizem(49);
    img {
      @apply mx-[unset];
    }
    .img1 {
      width: sizem(222);
    }
    .img2 {
      width: sizem(260);
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
