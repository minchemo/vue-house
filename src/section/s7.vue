<template>
  <article class="s7">
    <div class="t">
      <div
        class="t1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <span>5</span>
        大房
      </div>
      <div
        class="t2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <div class="t3">間間獨享寧靜美好</div>
        <div class="t4">
          每位家庭成員皆可擁有獨立空間，舒適私密不受打擾，實現兼具和諧與隱私的理想住宅環境。
        </div>
      </div>
    </div>
    <div class="splide-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          autoWidth: false,
          arrows: false,
          autoplay: false,
          pagination: true,
          gap: isMobile ? 0 : 20,
          type: 'loop',
          perPage: 1,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="(img, i) in imgs"
          :style="{ 'background-image': `url(${img.img})` }"
        >
          <div class="caption">
            {{ img.caption }}
          </div>
        </SplideSlide>
      </Splide>
      <div class="arrows" v-if="isMobile">
        <img
          @click="splide.go('<')"
          src="@/section/arrow.png"
          class="arrow prev"
          alt=""
          srcset=""
        />
        <img
          @click="splide.go('>')"
          src="@/section/arrow.png"
          class="arrow next"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s7 {
  @apply relative w-full;
  @apply flex flex-col items-center justify-center;
  @apply bg-bottom bg-cover;
  height: size(1090);

  .t {
    @apply absolute z-10;
    @apply text-white;
    @apply flex flex-col items-start;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3));
    left: size(159);
    top: size(191);
    font-family: "Noto Sans TC";
    gap: size(40);
    .t1 {
      font-size: size(60);
      font-weight: 500;
      line-height: 1;
      margin-right: size(779);
      span {
        font-family: Inter;
        font-size: size(168);
        font-weight: 600;
      }
    }
    .t2 {
      .t3 {
        font-size: size(27);
        font-weight: 500;
        letter-spacing: size(2.7);
      }
      .t4 {
        font-size: size(17);
        font-weight: 500;
        line-height: 180%;
        letter-spacing: size(1.7);
        width: size(400);
        margin-top: size(20);
      }
    }
  }

  .splide-box {
    @apply absolute left-0 top-0;
    @apply w-full;
    .splide {
      @apply w-full;
      height: size(1090);
      .slide-item {
        @apply relative w-full bg-cover;
        height: size(1090);
        .caption {
          @apply absolute text-white;
          font-family: "Noto Sans TC";
          font-size: size(14);
          font-weight: 700;
          line-height: 170%;
          right: size(30);
          bottom: size(20);
          filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
        }
      }
    }
    .arrows {
      @apply absolute top-1/2 -translate-y-1/2;
      @apply left-1/2 -translate-x-1/2;
      @apply w-full pointer-events-none;
      @apply flex items-center justify-between;
      padding: 0 sizem(16);

      img {
        @apply pointer-events-auto;
        width: sizem(13);

        &.prev {
          transform: rotate(180deg);
        }
      }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s7 {
    @apply relative w-full;
    @apply flex flex-col items-center justify-start;
    height: sizem(595);
    padding-top: sizem(45);

    .t {
      @apply relative z-10;
      @apply text-white;
      @apply flex flex-col justify-center items-center;
      @apply text-center;
      filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.5));
      left: auto;
      top: auto;
      font-family: "Noto Sans TC";
      .t1 {
        font-size: sizem(22);
        font-weight: 500;
        line-height: 1;
        margin-right: 0;
        span {
          font-size: sizem(62);
        }
      }
      .t2 {
        margin-top: sizem(10);
        .t3 {
          font-size: sizem(17);
          letter-spacing: auto;
          letter-spacing: sizem(1);
        }
        .t4 {
          font-size: sizem(13);
          font-weight: 500;
          line-height: 180%;
          letter-spacing: auto;
          width: sizem(300);
          margin-top: sizem(13);
        }
      }
    }

    .splide-box {
      @apply absolute left-0 top-0;
      @apply w-full;
      .splide {
        @apply w-full;
        height: sizem(595);
        .slide-item {
          @apply relative w-full;
          height: sizem(595);
          background-position: 50% 0;
          .caption {
            @apply absolute text-white;
            font-family: "Noto Sans TC";
            font-size: sizem(12);
            font-weight: 700;
            line-height: 170%;
            right: sizem(10);
            bottom: sizem(10);
            filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
          }
        }
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
const imgs = ref([
  {
    img: globals.$isMobile()
      ? new URL("../section/s7/1m.jpg", import.meta.url).href
      : new URL("../section/s7/1.jpg", import.meta.url).href,
    caption: "藏筑2  3d情境示意圖",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s7/2m.jpg", import.meta.url).href
      : new URL("../section/s7/2.jpg", import.meta.url).href,
    caption: "藏筑2  3d情境示意圖",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s7/3m.jpg", import.meta.url).href
      : new URL("../section/s7/3.jpg", import.meta.url).href,
    caption: "藏筑2  3d情境示意圖",
  },
])
</script>
