<template>
  <article class="s2">
    <div class="fullview">
      <Fullview />
    </div>
    <div class="t">
      <div
        class="t1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        坐擁台南北區繁華風情<br />
        自住置產頂級限量優選
      </div>
      <div class="t2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400">
        時代劇變興盛不變，市中心獨有量能已然純熟，地段增值絕不僅此；核心資產優勢報酬穩健泰然，無懼通膨無畏變動，入主真・珍選掌握時歲脈動。
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply relative w-full;
  @apply flex flex-col items-center justify-end;
  @apply bg-bottom bg-cover;
  height: size(1090);
  background-image: url("@/section/s2/bg.webp");
  padding-bottom: size(70);

  .fullview {
    @apply absolute w-full top-0;
    height: size(700);
  }

  .t {
    @apply text-white text-center;
    .t1 {
      font-size: size(50);
      font-weight: 700;
      line-height: 150%;
      margin-bottom: size(35);
    }
    .t2 {
      width: size(740);
      font-family: "Noto Sans TC";
      font-size: size(20);
      font-weight: 500;
      line-height: 190%;
      letter-spacing: size(2);
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    height: sizem(560);
    background-image: url("@/section/s2/bgm.webp");
    padding-bottom: sizem(62);

    .fullview {
      @apply absolute w-full top-0;
      height: sizem(260);
    }

    .t {
      .t1 {
        font-size: sizem(29);
        margin-bottom: sizem(27);
      }
      .t2 {
        width: sizem(310);
        font-size: sizem(13);
        letter-spacing: auto;
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance } from "vue"
import Fullview from "@/components/fullview.vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
