<template>
  <article class="s1">
    <div class="content">
      <img class="logo" src="@/section/s1/logo.svg" alt="" />
      <div class="t1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">橋科核心．連線台積｜6.8米併排雙車墅</div>
    </div>
    <div class="bg"></div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full max-h-screen;
  @apply flex flex-col items-center justify-center;
  padding-bottom: size(160);
  height: size(1080);
  background: var(
    --0,
    linear-gradient(
      0deg,
      #714e39 0%,
      #654631 36%,
      #4a331e 60%,
      #36250f 84%,
      #2f200a 100%
    )
  );

  .content {
    @apply relative z-10;
    @apply flex flex-col items-center justify-center;
    gap: size(42);

    .logo {
      width: size(469.2);
    }

    .t1 {
      @apply text-white;
      font-size: size(45);
      font-weight: 600;
    }
  }

  .bg {
    @apply absolute w-full h-full top-0 left-0 bg-cover bg-bottom;
    @apply pointer-events-none;
    background-image: url("@/section/s1/bg.png");
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

    .bg {
      @apply bg-contain bg-no-repeat bg-bottom;
      background-image: url("@/section/s1/bgm.png");
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
