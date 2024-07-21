<template>
  <article class="s3">
    <div class="t" data-aos="fade-up" data-aos-delay="0">
      <div class="t1">徐匯中學站 雙線捷運宅</div>
      <div class="t2">
        徐匯中學捷運站450公尺，<br />
        蘆洲線、環狀線(施工中)雙捷運樞紐金鑽，<br />
        環狀線三站讀秒直驅北市士林區，<br />
        蘆洲線三站瞬間抵達北市大同區。
      </div>
    </div>
    <div class="swiper-box">
      <Splide :options="sConfig" ref="splide" class="slide">
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
      <div class="arrows" v-if="isMobile">
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
    <div class="mrt" v-if="!isMobile">
      <div class="caption">徐匯中學站</div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @apply w-full relative bg-cover;
  height: size(820);
  background-image: url("@/section/s3/bg.jpg");
  padding: 0 size(185);
  padding-top: size(75);
  .mrt {
    @apply absolute right-0 top-0 w-full h-full;
    background-image: url("@/section/s3/mrt.png");
    background-size: cover;
    .caption {
      @apply absolute text-white;
      right: size(15);
      bottom: size(7);
      font-size: size(12);
      font-weight: 400;
      letter-spacing: size(2.4);
    }
  }
  .t {
    @apply relative z-[1] text-black;
    .t1 {
      font-size: size(40);
      font-weight: 700;
      letter-spacing: size(8);
    }
    .t2 {
      @apply relative;
      font-size: size(20);
      font-weight: 400;
      line-height: 150%;
      letter-spacing: size(4);
      margin-top: size(20);

      &::after {
        @apply absolute left-0;
        bottom: -#{size(45)};
        content: "";
        width: size(377);
        height: 2px;
        background: #fcee21;
      }
    }
  }
  .swiper-box {
    @apply relative;
    margin-top: size(167);
    @apply relative z-10;
    .slide-item {
      width: size(524);
      height: size(314);
      margin-right: size(48);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    height: sizem(667);
    background-image: url("@/section/s3/bgm.jpg");
    padding: 0;
    padding-top: sizem(60);

    .t {
      padding: 0 sizem(32.5);
      .t1 {
        @apply whitespace-nowrap;
        font-size: sizem(25);
        letter-spacing: sizem(5);
      }
      .t2 {
        @apply relative;
        font-size: sizem(14);
        font-weight: 400;
        line-height: 150%;
        letter-spacing: sizem(1.4);
        margin-top: sizem(14);

        &::after {
          bottom: -#{sizem(29)};
          width: sizem(310);
        }
      }
    }
    .swiper-box {
      @apply relative;
      margin-top: sizem(63);
      @apply relative z-10;
      .slide-item {
        width: sizem(300);
        height: sizem(180);
        margin-right: sizem(10);
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
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
import fullview from "@/components/fullview.vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const sConfig = {
  autoWidth: true,
  arrows: false,
  autoplay: globals.$isMobile() ? true : false,
  pagination: false,
  drag: globals.$isMobile() ? true : false,
  interval: 4000,
  gap: 0,
  type: globals.$isMobile() ? "loop" : "",
}

const imgs = [
  {
    img: new URL("../section/s3/1.jpg", import.meta.url).href,
    caption: "",
  },
  {
    img: new URL("../section/s3/2.jpg", import.meta.url).href,
    caption: "",
  },
]
</script>
