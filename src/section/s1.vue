<template>
  <article class="s1">
    <div class="bg">
      <video
        :src="
          isMobile
            ? 'https://h35.banner.tw/timeless/mobile.mp4'
            : 'https://h35.banner.tw/timeless/pc.mp4'
        "
        autoplay
        loop
        muted
        playsinline
      ></video>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.s1 {
  @apply w-full relative;
  height: size(1080);

  .bg {
    @apply w-full h-full absolute left-0 top-0;
    video {
      @apply object-cover w-full h-full;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    height: calc(100dvh - 67px);
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
