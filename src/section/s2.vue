<template>
  <article class="s2">
    <img
      class="en"
      src="@/section/s2/enm.png"
      alt=""
      srcset=""
      v-if="isMobile"
      data-aos="fade-up" data-aos-delay="0"
    />
    <img class="en" src="@/section/s2/en.png" alt="" srcset="" v-else  data-aos="fade-up" data-aos-delay="0"/>
    <div class="viewbox"  data-aos="fade-up" data-aos-delay="400">
      <View />
    </div>
    <div class="t1"  data-aos="fade-up" data-aos-delay="100">1高雙橋3快 南來北往一路暢快</div>
    <img class="t2" v-if="!isMobile" src="@/section/s2/t.png" alt="" srcset=""  data-aos="fade-up" data-aos-delay="200" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply w-full relative bg-[#108FF6] flex flex-col items-center justify-start text-white;
  height: size(1202);
  padding-top: size(221);

  .en {
    @apply absolute z-10;
    width: size(1837.36);
    top: size(21.5);
    left: size(7.5);
  }

  .viewbox {
    @apply absolute w-full h-full left-0 top-0;
  }
  .t1 {
    @apply absolute z-10;
    font-size: size(51);
    font-weight: 700;
    letter-spacing: size(4);
    right: size(75);
    top: size(45);
  }
  .t2 {
    @apply absolute z-10;
    width: size(590);
    left: size(73);
    top: size(236);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    height: sizem(667);
    padding-top: sizem(100);

    .en {
      @apply absolute z-[101];
      width: sizem(345);
      top: sizem(9.5);
      left: 0;
    }

    .viewbox {
      @apply absolute w-full h-full left-0 top-0;
    }
    .t1 {
      @apply relative z-[101];
      font-size: sizem(20);
      font-weight: 700;
      letter-spacing: sizem(1.6);
      right: unset;
      top: unset;
    }
  }
}
</style>

<script setup>
import View from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
