<template>
  <article class="s3 anchor7">
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
      <div class="t2" data-aos="fade-up" data-aos-delay="200">
        米其林餐廳星羅棋布，這裡的住民都是天生的美食家
新光三越、大遠百、老虎城旗艦百貨商圈、時尚藝文
捷運、轉運站、國道1號、台74線、台灣大道⋯
食衣住行一切精華匯集於此，定義中台灣最精華國際位階
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s3 {
  @apply relative w-full;
  @apply flex;
  height: size(690);
 //gap: size(50);

  .swiper-box {
    @apply relative h-full;
    width: size(995);
    .slide {
      .slide-item {
        @apply bg-cover;
        width: size(995);
        height: size(690);
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
    @apply text-black flex flex-1 flex-col items-start justify-center;
    //padding-top: size(251);
    background: linear-gradient(90deg, #FFF 4%, #CDDBD9 58%, #CBDAD8 60%, #79B3BA 100%);
    padding: 0 0 0 size(137);
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
  .s3 {
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
    img: new URL("../section/s3/01.webp", import.meta.url).href,
    caption: "秋紅谷公園實景",
  },
  {
    img: new URL("../section/s3/02.webp", import.meta.url).href,
    caption: "秋紅谷公園實景",
  },
]
</script>
