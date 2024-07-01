<template>
  <article class="s11">
    <div class="slide-box">
      <div class="arrows" v-if="isMobile">
        <img
          src="@/section/arrow.png"
          class="arrow prev"
          alt=""
          srcset=""
          @click="splide.go('<')"
        />
        <img
          src="@/section/arrow.png"
          class="arrow next"
          alt=""
          srcset=""
          @click="splide.go('>')"
        />
      </div>
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          pagination: true,
          interval: 4000,
          gap: 10,
          type: 'loop',
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
      <div class="t">
        <div class="t1">
          <img src="@/section/resource/s3title.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0" />
          <p data-aos="fade-up" data-aos-delay="200">假字文案假字文案待提供</p>
        </div>
        <div class="divi"></div>
        <div class="desc" data-aos="fade-up" data-aos-delay="400">
          假字文案待提供假字文案待提供假字文案待提供假字文案待提供假字文案待提供假字文案待提供假字文案待提供假字文案待提供假字文案待提供假字文案待提供假字文案待提供
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  @apply w-full relative;
  @apply flex items-center justify-center;
  height: size(1080);
  background: url("@/section/s3/bg.jpg");
  background-size: cover;

  .slide-box {
    @apply flex flex-row-reverse items-center relative z-10;
    gap: size(109);
    .slide {
      @apply relative;
      width: size(997);
      height: size(605);
      .slide-item {
        @apply relative;
        width: size(997);
        height: size(605);
        background-size: cover;
        transform-style: preserve-3d;
        .caption {
          @apply absolute text-white;
          left: size(14);
          bottom: size(10);
          font-size: size(20);
          font-weight: 400;
          letter-spacing: size(2.6);
        }
      }
      .splide__pagination {
        @apply absolute right-0 w-full flex justify-center;
        padding: size(27) 0;
        li {
          line-height: 0;
          button {
            @apply rounded-full bg-transparent;
            width: size(17.3);
            height: size(17.3);
            border: 1px solid #727171;
            &.is-active {
              background: #727171;
            }
          }
        }
        gap: size(13);
      }
      &::after {
        @apply w-full h-full absolute top-0 left-0 pointer-events-none;
        content: "";
        background: url("@/section/resource/stroke.svg");
      }
    }
    .t {
      @apply flex flex-col text-black;
      gap: size(15);
      width: size(673);
      .t1 {
        @apply flex flex-col items-start;
        gap: size(10);
        margin-bottom: size(15);
        img {
          width: size(364.95);
        }
        p {
          font-size: size(32);
          font-weight: 500;
          letter-spacing: size(1.92);
        }
      }
      .divi {
        @apply bg-black;
        height: 1px;
      }
      .desc {
        font-size: size(24);
        font-weight: 500;
        line-height: size(39);
        letter-spacing: size(0.72);
      }
    }
  }

  .style {
    @apply w-full absolute;
    top: size(400);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s11 {
    @apply w-full relative z-20;
    @apply flex justify-center items-start;
    height: sizem(622);
    background: url("@/section/s11/bgm.jpg");
    background-size: cover;
    padding-top: sizem(56);

    .slide-box {
      @apply flex-col-reverse items-center justify-end;
      gap: sizem(50);
      .slide {
        width: sizem(330);
        height: sizem(200);
        .slide-item {
          width: sizem(330);
          height: sizem(200);
          .caption {
            @apply absolute text-white;
            left: sizem(8);
            bottom: sizem(6);
            font-size: sizem(12);
            letter-spacing: sizem(0.72);
          }
        }
        .splide__pagination {
          @apply hidden;
        }
        &::after {
          @apply w-full h-full absolute top-0 left-0 pointer-events-none;
          content: "";
          background: url("@/section/resource/stroke.svg");
        }
      }
      .t {
        @apply flex flex-col text-black;
        gap: sizem(24);
        width: sizem(310);
        .t1 {
          gap: sizem(10);
          margin-bottom: sizem(5);
          img {
            width: sizem(139.91);
          }
          p {
            font-size: sizem(14);
            letter-spacing: sizem(0.42);
          }
        }
        .desc {
          font-size: sizem(14);
          line-height: 170%;
          letter-spacing: sizem(0.42);
        }
      }
      .arrows {
        @apply absolute flex justify-between;
        width: 98vw;
        bottom: sizem(90);
        .prev {
          @apply -scale-x-100;
        }
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const splide = ref()

const imgs = [
  {
    img: new URL("../section/s3/1.jpg", import.meta.url).href,
    caption: "圖說待提供",
  },
  {
    img: new URL("../section/s3/1.jpg", import.meta.url).href,
    caption: "圖說待提供",
  },
  {
    img: new URL("../section/s3/1.jpg", import.meta.url).href,
    caption: "圖說待提供",
  },
  {
    img: new URL("../section/s3/1.jpg", import.meta.url).href,
    caption: "圖說待提供",
  },
]
</script>
