<template>
  <article class="s3">
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
          <p data-aos="fade-up" data-aos-delay="200">雙城同頻商圈共榮</p>
        </div>
        <div class="divi"></div>
        <div class="desc" data-aos="fade-up" data-aos-delay="400">
          重陽橋一橋之隔，5分鐘速達北市，對望士林科技園區，盡收雙城脈動，繁榮漲幅同頻共振，再享24小時家樂福旗艦店、五華商圈、集賢商圈、徐匯廣場極致富足生活機能。
        </div>
      </div>
    </div>
    <img class="style" src="@/section/resource/style21.svg" alt="" srcset="" />
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @apply w-full relative;
  @apply flex justify-center;
  height: size(1080);
  padding-top: size(200);
  background-image:linear-gradient(180deg, #fff0 40%,#fff 100%);

  .slide-box {
    @apply flex flex-row-reverse items-start relative z-10;
    gap: size(72);
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
        @apply flex items-end justify-between;
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
        line-height: 1.6;
        letter-spacing: 0.03em;text-align: justify;
      }
    }
  }

  .style {
    position: absolute;z-index: 2;
    top: size(400);width: 100%;height: size(900);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    @apply w-full relative z-20;
    @apply flex justify-center;
    height: sizem(538);
  //  background: url("@/section/s3/bgm.jpg");
  //  background-size: cover;
    padding-top: sizem(56);

    .slide-box {
      @apply flex-col-reverse items-center justify-end;
      gap: sizem(24);
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
        gap: sizem(29);
        width: sizem(310);
        .t1 {
          @apply flex items-end justify-between;
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
        bottom: sizem(150);
        .prev {
          @apply -scale-x-100;
        }
      }
    }

    .style {
      @apply absolute;
      top: sizem(420);
      width: 150vw;
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
    caption: "重陽大橋",
  },
  {
    img: new URL("../section/s3/2.jpg", import.meta.url).href,
    caption: "北士科環境",
  },
  {
    img: new URL("../section/s3/3.jpg", import.meta.url).href,
    caption: "士林夜市",
  },
  {
    img: new URL("../section/s3/4.jpg", import.meta.url).href,
    caption: "五華街麥當勞商圈",
  },
  {
    img: new URL("../section/s3/5.jpg", import.meta.url).href,
    caption: "家樂福蘆洲店",
  },
]
</script>
