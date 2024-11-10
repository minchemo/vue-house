<template>
  <article class="s4 anchor5">
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
          gap: 10,
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
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        青埔軌道經濟圈<br />
        家樂福繁華上演
      </div>
      <div class="t2">
        暢遊捷運青埔站生活半徑，圈起楠梓車站的熟成繁華，散步土庫家樂福，為生活豐盛保持彈性，周邊傳統市場、連鎖餐廳、便利商店、一應俱全！
      </div>
    </div>
    <img
      class="line"
      v-if="!isMobile"
      src="@/section/s4/line.png"
      alt=""
      srcset=""
    />
    <img class="line" v-else src="@/section/s4/linem.png" alt="" srcset="" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s4 {
  @apply relative w-full;
  @apply flex;
  height: size(900);
  gap: size(50);

  .swiper-box {
    @apply relative h-full;
    width: size(1229);
    .slide {
      .slide-item {
        @apply bg-cover;
        width: size(1229);
        height: size(900);
        .caption {
          @apply text-white;
          @apply absolute;
          left: size(20);
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
    @apply text-black;
    padding-top: size(251);
    .t1 {
      font-size: size(54);
      font-weight: 600;
      margin-bottom: size(43);
    }
    .t2 {
      font-family: "Noto Sans TC";
      font-size: size(16);
      font-weight: 400;
      line-height: 151.41%;
      width: size(470);
    }
  }
  .line {
    @apply absolute right-0 bottom-0;
    @apply pointer-events-none select-none;
    width: size(1200);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s4 {
    @apply flex-col-reverse justify-end;
    height: auto;
    gap: sizem(40);

    .swiper-box {
      @apply relative h-auto;
      width: 100vw;
      .slide {
        .slide-item {
          @apply bg-cover;
          width: sizem(375);
          height: sizem(274.61);
          .caption {
            @apply text-white;
            @apply absolute;
            left: unset;
            right: sizem(10);
            bottom: sizem(6);
            font-size: sizem(12);
            font-weight: 700;
          }
        }
      }
      .arrows {
        @apply absolute w-full;
        @apply left-1/2 -translate-x-1/2;
        @apply top-1/2 -translate-y-1/2;
        @apply flex items-center justify-between;
        padding: 0 sizem(8);
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
      @apply text-black;
      padding-top: sizem(60);
      padding-left: sizem(20);
      .t1 {
        font-size: sizem(25);
        font-weight: 600;
        margin-bottom: sizem(10);
      }
      .t2 {
        font-size: sizem(14);
        font-weight: 400;
        line-height: 151.41%;
        width: sizem(310);
      }
    }
    .line {
      @apply absolute right-0 top-0;
      @apply pointer-events-none select-none;
      bottom: unset;
      width: 100%;
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
    img: new URL("../section/s4/1.jpg", import.meta.url).href,
    caption: "家樂福-新楠店",
  },
  {
    img: new URL("../section/s4/2.jpg", import.meta.url).href,
    caption: "7-11高第一門市",
  },
  {
    img: new URL("../section/s4/3.jpg", import.meta.url).href,
    caption: "7-11高第一門市",
  },
]
</script>
