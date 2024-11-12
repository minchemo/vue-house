<template>
  <article class="s5 anchor6">
    <div class="swiper-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          autoWidth: false,
          arrows: false,
          autoplay: true,
          pagination: false,
          interval: 4000,
          gap: 0,
          type: 'loop',
          perPage: 1,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
          :style="{ 'background-image': `url(${i.img})` }"
        >
          <div class="caption">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
      <div class="arrows">
        <img
          src="@/section/arrow.png"
          class="arrow prev"
          @click="splide.go('<')"
          alt=""
          srcset=""
        />
        <img
          src="@/section/arrow.png"
          class="arrow next"
          @click="splide.go('>')"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="t">
      <div
        class="t1"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        >200公頃綠浪綿延 <br v-if="isMobile" />健康環抱
      </div>
      <div class="t2"
        data-aos="fade-up"
        data-aos-delay="200">
        以高雄科大73公頃樹海為起點，95公頃的高雄都會公園、高雄花卉農園中心、青埔棒球場、創新公園等綠帶環扣，獨步大高雄，連起都市中難能可貴的芬多長廊。
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s5 {
  @apply relative w-full;
  height: size(900);

  .swiper-box {
    @apply relative h-full w-full;
    .slide {
      .slide-item {
        @apply bg-cover;
        width: size(1229);
        height: size(900);
        .caption {
          @apply text-white;
          @apply absolute;
          right: size(20);
          bottom: size(12);
          font-family: "Noto Sans TC";
          font-size: size(15);
          font-weight: 700;
        }
      }
    }
    .arrows {
      @apply absolute w-full;
      @apply left-1/2 -translate-x-1/2;
      @apply top-1/2 -translate-y-1/2;
      @apply flex items-center justify-between;
      padding: 0 size(15);
      img {
        @apply cursor-pointer;
        width: size(28);
      }
      .next {
        @apply -scale-x-100;
      }
    }
  }
  .t {
    @apply absolute w-full h-full;
    @apply top-0 left-0;
    @apply text-white;
    @apply bg-cover;
    @apply pointer-events-none select-none;
    background-image: url("@/section/s5/mask.png");
    padding-top: size(78);
    padding-left: size(153);
    .t1 {
      font-size: size(54);
      font-weight: 600;
      margin-bottom: size(15);
    }
    .t2 {
      font-family: "Noto Sans TC";
      font-size: size(16);
      font-weight: 400;
      line-height: 151.41%;
      width: size(470);
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s5 {
    @apply relative w-full;
    height: auto;

    .swiper-box {
      @apply relative h-full w-full;
      .slide {
        .slide-item {
          @apply bg-no-repeat bg-bottom;
          background-size: sizem(615) auto;
          width: sizem(375);
          height: sizem(582);
          .caption {
            @apply text-white;
            @apply absolute;
            right: sizem(10);
            bottom: sizem(6);
            font-family: "Noto Sans TC";
            font-size: sizem(12);
            font-weight: 700;
          }
        }
      }
      .arrows {
        @apply absolute w-full z-10;
        @apply left-1/2 -translate-x-1/2;
        @apply top-1/2 -translate-y-1/2;
        @apply flex items-center justify-between;
        padding: 0 sizem(8);
        padding-top: sizem(300);
        img {
          @apply cursor-pointer;
          width: sizem(15);
        }
        .next {
          @apply -scale-x-100;
        }
      }
    }
    .t {
      @apply absolute w-full h-full;
      @apply top-0 left-0;
      @apply text-white;
      @apply bg-cover;
      @apply pointer-events-none select-none;
      background-image: url("@/section/s5/maskm.png");
      padding-top: sizem(60);
      padding-left: sizem(30);
      .t1 {
        font-size: sizem(25);
        font-weight: 600;
        margin-bottom: sizem(10);
      }
      .t2 {
        font-family: "Noto Sans TC";
        font-size: sizem(14);
        font-weight: 400;
        line-height: 151.41%;
        width: sizem(310);
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
const splide = ref()
const imgs = [
  {
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "都會公園",
  },
  {
    img: new URL("../section/s5/2.jpg", import.meta.url).href,
    caption: "都會公園",
  },
  {
    img: new URL("../section/s5/3.jpg", import.meta.url).href,
    caption: "都會公園",
  },
]
</script>
