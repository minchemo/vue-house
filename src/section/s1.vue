<template>
  <article class="s1">
    <img
      class="logo"
      src="@/section/s1/logoan.svg"
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <div class="t1" data-aos="fade-up" data-aos-delay="200">
      ｜2房23坪 3房36坪 即將完工｜
    </div>
    <div class="t2" data-aos="fade-up" data-aos-delay="400">
      接待會館｜新北市三重區仁安街108號<br />
      禮賓專線｜02-8282-8088
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply w-full relative;
  @apply bg-cover bg-center bg-no-repeat;
  @apply flex flex-col items-center justify-end;
  color: #653f28;
  height: size(1260);
  max-height: 100vh;
  background-image: url("@/section/s1/bg.jpg");
  padding-bottom: size(137);

  .logo {
    width: size(622);
  }
  .t1 {
    margin-top: size(44.3);
    font-size: size(30);
    font-weight: 400;
    letter-spacing: size(6);
  }
  .t2 {
    margin-top: size(134);
    font-size: size(22);
    font-weight: 400;
    line-height: 220%;
    letter-spacing: size(4.4);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(604);
    padding-bottom: sizem(103);
    background-image: url("@/section/s1/bgm.jpg");

    .logo {
      width: sizem(243);
    }
    .t1 {
      margin-top: sizem(17);
      font-size: sizem(15);
      letter-spacing: sizem(3);
    }
    .t2 {
      margin-top: sizem(68.4);
      font-size: sizem(13);
      font-weight: 400;
      line-height: 220%;
      letter-spacing: sizem(2.6);
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
