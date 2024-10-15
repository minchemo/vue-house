<template>
  <article class="s8" data-aos="bright" data-aos-duration="2000" data-aos-delay="500">
    <div class="swiper-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          pagination: false,
          interval: 4000,
          speed: 500,
          gap: 0,
          type: 'loop',
          autoWidth: true,
          focus: 'center',
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="(img, i) in imgs"
          :style="{ 'background-image': `url(${img})` }"
        >
          <div class="mask mask1"></div>
          <div class="mask mask2"></div>
        </SplideSlide>
      </Splide>
      <div class="arrows">
        <img loading="lazy" 
          class="arrow prev"
          @click="splide.go('>')"
          src="@/section/s8/prev.webp"
          alt=""
          srcset=""
        />
        <img loading="lazy" 
          class="arrow next"
          @click="splide.go('>')"
          src="@/section/s8/next.webp"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="t">峇里島豪華度假村 Soori Bali</div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  @apply relative w-full bg-black;
  @apply flex flex-col justify-center items-center;
  height: size(1010);
  gap: size(18);

  .swiper-box {
    @apply relative w-full;
    height: size(780);

    .slide-item {
      width: size(1655);
      height: size(780);
      @apply grayscale transition-all bg-cover;

      .mask1 {
        @apply absolute h-full opacity-90 transition-all duration-1000;
        width: size(300);
        right: 0;
        top: 0;
        background: linear-gradient(
          -90deg,
          #040000 0%,
          #040000 14%,
          rgba(4, 0, 0, 0) 100%
        );
        transform-origin: 0 0;
      }

      .mask2 {
        @apply absolute h-full opacity-90 transition-all duration-1000;
        width: size(300);
        left: 0;
        top: 0;
        background: linear-gradient(
          90deg,
          #040000 0%,
          #040000 14%,
          rgba(4, 0, 0, 0) 100%
        );
        transform-origin: 0 0;
      }

      &.is-active {
        @apply grayscale-0;
        .mask {
          @apply opacity-0;
        }
      }
    }

    .arrows {
      @apply absolute w-full pointer-events-none;
      @apply flex justify-between;
      padding: 0 size(173.93);
      bottom: size(20.43);

      img {
        @apply cursor-pointer hover:opacity-60;
        @apply mx-[unset] pointer-events-auto;
        width: size(151.54);
      }
    }
  }
  .t {
    @apply text-white w-full text-right;
    padding-right: size(134);
    font-size: size(25);
    font-weight: 400;
    line-height: 220%;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s8 {
    @apply relative w-full bg-black;
    @apply flex flex-col justify-center items-center;
    height: sizem(230);
    gap: 0;

    .swiper-box {
      @apply relative w-full;
      height: sizem(163);

      .slide-item {
        width: sizem(290);
        height: sizem(163);
        @apply grayscale transition-all bg-cover;

        .mask1 {
          @apply absolute h-full opacity-80 transition-all duration-1000;
          width: sizem(50);
          right: 0;
          top: 0;
          background: linear-gradient(
            -90deg,
            #040000 0%,
            #040000 14%,
            rgba(4, 0, 0, 0) 100%
          );
          transform-origin: 0 0;
        }

        .mask2 {
          @apply absolute h-full opacity-80 transition-all duration-1000;
          width: sizem(50);
          left: 0;
          top: 0;
          background: linear-gradient(
            90deg,
            #040000 0%,
            #040000 14%,
            rgba(4, 0, 0, 0) 100%
          );
          transform-origin: 0 0;
        }

        &.is-active {
          @apply grayscale-0;
          .mask {
            @apply opacity-0;
          }
        }
      }

      .arrows {
        @apply absolute w-full;
        @apply flex justify-between;
        padding: 0 sizem(10);
        bottom: sizem(5);

        img {
          @apply cursor-pointer hover:opacity-60;
          @apply mx-[unset];
          width: sizem(52.49);
        }
      }
    }
    .t {
      @apply text-white w-full text-right;
      padding-right: sizem(42.43);
      font-size: sizem(12);
      font-weight: 400;
      line-height: 220%;
    }
  }
}
</style>
<script setup>
import img1 from "@/section/s8/1.webp"
import img2 from "@/section/s8/2.webp"
import img3 from "@/section/s8/3.webp"
import img4 from "@/section/s8/4.webp"

import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const imgs = [img1, img2, img3, img4]

const splide = ref(null)
</script>
