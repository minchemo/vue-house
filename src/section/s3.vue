<template>
  <article class="s3">
    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        世界即眼下，七期最國際
      </div>
      <img class="t2" 
      data-aos="fade-up"
      data-aos-delay="200" src="@/section/s3/t2.png" alt="" />
    </div>
    <div class="swiper-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          rewind: true,
          arrows: false,
          autoplay: true,
          pagination: false,
          interval: 3000,
          pauseOnHover: false,
          pauseOnFocus: false,
          gap: 0,
          type: 'fade',
          autoWidth: true,
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
    </div>
    <div class="arrows" v-if="!isMobile">
      <img
        class="prev"
        @click="splide.go('<')"
        src="@/section/s3/arrow.png"
        alt=""
        srcset=""
      />
      <img
        class="next"
        @click="splide.go('>')"
        src="@/section/s3/arrow.png"
        alt=""
        srcset=""
      />
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @apply w-full relative text-white;
  height: size(1242);
  padding-top: size(140);
  .t {
    @apply pointer-events-none;
    @apply relative z-10;
    @apply flex flex-col items-center justify-center;
    gap: size(33);
    .t1 {
      font-size: size(48);
      font-weight: 700;
      letter-spacing: size(2.88);
    }
    .t2 {
      width: size(1169);
    }
  }
  .swiper-box {
    @apply w-full h-full absolute left-0 top-0;
    .slide-item {
      @apply relative bg-cover;
      width: size(1920);
      height: size(1242);
      .caption {
        @apply absolute;
        font-size: size(14);
        font-weight: 400;
        letter-spacing: size(0.84);
        right: size(30);
        bottom: size(10);
      }
    }
  }
  .arrows {
    @apply absolute w-full;
    @apply flex items-center justify-center pointer-events-none;
    gap: size(90);
    bottom: size(50);

    .prev {
      @apply -scale-x-100;
    }

    img {
      @apply cursor-pointer pointer-events-auto;
      width: size(36);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    @apply w-full relative text-white;
    height: sizem(558);
    padding-top: sizem(50);
    .t {
      @apply pointer-events-none;
      @apply relative z-10;
      @apply flex flex-col items-center justify-center;
      gap: sizem(17);
      .t1 {
        font-size: sizem(25);
        font-weight: 700;
        letter-spacing: sizem(1.5);
      }
      .t2 {
        width: sizem(315);
      }
    }
    .swiper-box {
      @apply w-full h-full absolute left-0 top-0;
      .slide-item {
        @apply relative;
        width: sizem(375);
        height: sizem(558);
        .caption {
          @apply absolute;
          font-size: sizem(14);
          font-weight: 400;
          letter-spacing: sizem(0.84);
          right: sizem(30);
          bottom: sizem(10);
        }
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

const splide = ref()

const imgs = [
  {
    img: globals.$isMobile()
      ? new URL("../section/s3/1m.jpg", import.meta.url).href
      : new URL("../section/s3/1.jpg", import.meta.url).href,
    caption: "情境示意圖",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s3/2m.jpg", import.meta.url).href
      : new URL("../section/s3/2.jpg", import.meta.url).href,
    caption: "情境示意圖",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s3/3m.jpg", import.meta.url).href
      : new URL("../section/s3/3.jpg", import.meta.url).href,
    caption: "情境示意圖",
  },
]
</script>
