<template>
  <article class="s1">
    <img
      class="logo"
      src="@/section/s1/logo.png"
      alt=""
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <img class="t1" v-if="!isMobile" src="@/section/s1/t1.png" alt="" 
      data-aos="fade-up"
      data-aos-delay="200"/>
    <img class="t1" 
      data-aos="fade-up"
      data-aos-delay="200" v-else src="@/section/s1/t1m.png" alt="" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply w-full relative;
  @apply bg-cover bg-bottom bg-no-repeat;
  @apply flex flex-col items-center justify-end;
  color: #653f28;
  height: size(1080);
  max-height: 100dvh;
  background-image: url("@/section/s1/bg.jpg");
  padding-bottom: size(207);
  gap: size(136.45);

  .logo {
    width: size(559);
  }
  .t1 {
    width: size(883);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    @apply bg-top;
    height: calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(667);
    background-image: url("@/section/s1/bgm.jpg");
    padding-bottom: sizem(127.5);
    gap: sizem(167.6);

    .logo {
      width: sizem(260);
    }
    .t1 {
      width: sizem(306.69);
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
