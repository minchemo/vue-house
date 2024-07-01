<template>
  <article class="s4">
 <!--     --><img src="./s4/mo.jpg" class="t0" alt="">
    <div class="view">
      <fullview />
    </div>
    <img
      src="@/section/s1/bg_b.webp"
      v-if="!isMobile"
      class="bg-b"
      alt=""
      srcset=""
    />
    <img src="@/section/s1/bg_bm.webp" v-else class="bg-b" alt="" srcset="" />
    <div class="t"  data-aos="fade-up" data-aos-delay="0">
      <p>講究的是敦南 ，謙遜的是四維</p>
      <p>The Aesthetics of Silence</p>
    </div>
    <div class="line" data-aos="growLine" data-aos-dalay="1000" data-aos-duration="2000" v-if="!isMobile"></div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s4 {
  @apply w-full relative text-[#36677F] z-20;
  height: size(1025);

  .t0{position: absolute;top: 0;left: 0;width: 100%;z-index: 30;opacity: .4}

  .line {
    @apply absolute w-[1px] bg-white z-20;
    left: size(180);
    bottom: -#{size(190)};
    height: size(333);
  }

  .view {
    @apply relative w-full;
    height: size(945);
  }

  .bg-b {
    @apply absolute z-10;
    @apply w-full left-0 bottom-0 pointer-events-none;
  }

  .t {
    @apply absolute z-20;
    left: size(215);
    bottom: size(0);
    p {
      &:nth-child(1) {
        font-size: size(52);
        font-weight: 700;
      }
      &:nth-child(2) {
        font-size: size(19);
        font-weight: 700;
        letter-spacing: size(1.71);
        text-transform: uppercase;
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s4 {
    height: sizem(681);

    .view {
      @apply relative w-full;
      height: sizem(628);
    }

    .bg-b {
      @apply absolute z-10;
      @apply w-full left-0 bottom-0 pointer-events-none;
    }

    .t {
      @apply absolute z-20 flex flex-col items-center w-full;
      bottom: sizem(12);
      left: 0;
      gap: sizem(2);
      p {
        &:nth-child(1) {
          font-size: sizem(16);
        }
        &:nth-child(2) {
          font-size: sizem(10);
          letter-spacing: sizem(0.9);
        }
      }
    }
  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
