<template>
  <article class="s7">
    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        三所校園就近成長 <br v-if="isMobile" />孩子贏在起跑點
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="0">
        碧華國小、碧華國中、新北高中，<br />
        朗朗書聲伴隨鐘響，沐浴書香文風、薰染人文氣質。<br />
        三座校園一路陪伴，讓您的孩子贏在人生起跑點。
      </div>
    </div>
    <div class="swiper-box">
      <Splide
        :options="sConfig"
        ref="splide"
        class="slide"
        @splide:move="onMove"
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
          @click="splide.go('<')"
          class="prev"
          src="@/section/arrow.png"
          alt="r"
          srcset=""
        />
        <img
          @click="splide.go('>')"
          class="next"
          src="@/section/arrow.png"
          alt="r"
          srcset=""
        />
      </div>
    </div>
    <div class="cap">情境示意圖</div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  @apply w-full relative bg-cover text-white;
  height: size(1080);
  background-image: url("@/section/s7/bg.jpg");
  padding-left: size(213);
  padding-top: size(71);

  .t {
    @apply flex items-start;
    gap: size(50);
    .t1 {
      @apply relative;
      font-size: size(40);
      font-weight: 700;
      letter-spacing: size(8);

      &::after {
        @apply absolute left-0 w-full;
        bottom: -#{size(25)};
        content: "";
        height: 2px;
        background: #fcee21;
      }
    }
    .t2 {
      font-size: size(20);
      font-weight: 400;
      line-height: 150%; /* 30px */
      letter-spacing: size(4);
    }
  }

  .swiper-box {
    @apply relative z-10;
    margin-top: size(62);
    width: size(1450);
    .slide-item {
      @apply bg-cover;
      width: size(707);
      height: size(472);
      margin-right: size(23);
      .caption {
        @apply absolute bottom-0 w-full text-white text-right;
        @apply flex items-end justify-end;
        padding: size(10);
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        height: size(68);
        font-size: size(12);
        font-weight: 400;
        letter-spacing: size(2.4);
      }
    }
      .arrows {
        @apply absolute w-full flex items-center justify-between top-1/2 -translate-y-1/2;
        padding: 0 size(20) 0 size(10);
        img {
          width: size(20);
        }
        .prev {
        }

        .next {
          @apply -scale-x-100;
        }
      }
  }

  .cap {
    @apply absolute z-10;
    @apply text-white;
    right: size(8);
    bottom: size(8);

    text-shadow: 0.5px 0.5px 2px #000;
    font-size: size(12);
    font-weight: 400;
    letter-spacing: size(2.4);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s7 {
    @apply w-full relative bg-cover text-white;
    height: sizem(728);
    background-image: url("@/section/s7/bgm.jpg");
    padding-left: 0;
    padding-top: sizem(60);

    .t {
      @apply flex flex-col items-start;
      gap: sizem(13.5);
      padding: 0 sizem(32.5);
      .t1 {
        @apply relative;
        font-size: sizem(25);
        font-weight: 700;
        letter-spacing: sizem(5);

        &::after {
          bottom: -#{sizem(140)};
          content: "";
          width: sizem(310);
          height: 2px;
          background: #fcee21;
        }
      }
      .t2 {
        font-size: sizem(14);
        letter-spacing: sizem(2.8);
      }
    }

    .swiper-box {
      @apply relative z-10;
      margin-top: sizem(50);
      width: sizem(375);
      .slide-item {
        @apply bg-cover;
        width: sizem(332.5);
        height: sizem(222);
        margin-right: sizem(16.47);
        .caption {
          @apply absolute bottom-0 w-full text-white text-right;
          @apply flex items-end justify-end;
          padding: sizem(10);
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          height: sizem(68);
          font-size: sizem(11);
          font-weight: 400;
          letter-spacing: sizem(2.2);
        }
      }
      .arrows {
        @apply absolute w-full;
        @apply flex items-center justify-between;
        @apply top-1/2 -translate-y-1/2;
        @apply pointer-events-none;
        padding: 0 sizem(10);
        img {
          @apply pointer-events-auto;
          width: sizem(12.8);
        }
        .prev {
        }

        .next {
          @apply -scale-x-100;
        }
      }
    }

    .cap {
      @apply absolute z-10;
      @apply text-white;
      right: sizem(8);
      bottom: sizem(8);

      font-size: sizem(11);
      font-weight: 400;
      letter-spacing: sizem(2.2);
    }
  }
}
</style>

<script setup>
import {
  computed,
  getCurrentInstance,
  ref,
  inject,
  onMounted,
  nextTick,
} from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const sConfig = {
  autoWidth: true,
  arrows: false,
  autoplay: true,
  pagination: false,
  gap: 0,
  type: "loop",
}


const imgs = [
  {
    img: new URL("../section/s7/1.jpg", import.meta.url).href,
    caption: "新北高中",
  },
  {
    img: new URL("../section/s7/2.jpg", import.meta.url).href,
    caption: "碧華國小",
  },
  {
    img: new URL("../section/s7/3.jpg", import.meta.url).href,
    caption: "碧華國小",
  },
  {
    img: new URL("../section/s7/4.jpg", import.meta.url).href,
    caption: "碧華國中",
  },
]
</script>
