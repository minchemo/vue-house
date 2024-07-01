<template>
  <article class="s5">
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
          autoplay: isMobile ? true : false,
          drag: isMobile ? true : false,
          pagination: false,
          easing: isMobile ? 'linear' : null,
          direction: isMobile ? 'ltr' : 'ltr',
          speed: isMobile ? 3000 : 2000, // 調整跑馬燈速度請改前面值，speed/interval須一致
          interval: isMobile ? 3000 : 4000,  // 調整跑馬燈速度請改前面值，speed/interval須一致
          gap: 10,
          type: 'loop',
          snap: false,
          perPage: isMobile ? 1 : 3,
          perMove: 1,
          autoWidth: isMobile ? true : null,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
          :style="{ 'background-image': `url(${i.img})` }"
        >
          <div class="caption" :class="{ rt: i.rt }">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
      <div class="t">
        <div class="t1">
          <img src="@/section/resource/s5title.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0"/>
          <p data-aos="fade-up" data-aos-delay="200">坐擁</p>
        </div>
        <div class="divi"></div>
        <div class="desc" data-aos="fade-up" data-aos-delay="400">
          蘆洲北側重劃區(包含銀河灣計畫)涵蓋五泰輕軌路線，區內規劃產業專區、醫療用地、
          果菜市場、觀光休閒區塊等，並預留蘆社大橋路廊，連接至北市社子島，現有都市計畫將公園、學校預定地設於【鼎藏豐碩】步行
          分鐘可達位置，未來勢將共伴共榮。
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  @apply w-full relative;
  @apply flex justify-center items-start;
  height: size(1080);
  background: url("@/section/s5/bg.jpg");
  background-size: cover;
  padding-top: size(162);

  .slide-box {
    @apply flex flex-col-reverse relative z-10;
    gap: size(44);
    .slide {
      @apply relative;
      width: size(1732);
      height: size(335);
      .slide-item {
        @apply relative;
        width: size(560);
        height: size(335);
        background-size: cover;
        transform-style: preserve-3d;
        .caption {
          @apply absolute text-white;
          left: size(14);
          bottom: size(10);
          font-size: size(20);
          font-weight: 400;
          letter-spacing: size(2.6);
          &.rt {
            bottom: unset;
            top: size(14);
          }
        }
      }
    }
    .t {
      @apply flex flex-col text-black;
      gap: size(15);
      width: size(687);
      .t1 {
        @apply flex flex-col items-end relative;
        gap: size(24);
        margin-bottom: size(15);
        img {
          width: size(650.9);
        }
        p {
          @apply absolute;
          font-size: size(32);
          font-weight: 500;
          letter-spacing: size(1.92);
          left: 60%;
          top: 10%;
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
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s5 {
    @apply w-full relative z-[18];
    @apply flex justify-center;
    height: sizem(720);
    background: url("@/section/s5/bgm.jpg");
    background-size: cover;
    padding-top: sizem(153.54);

    .slide-box {
      @apply flex-col-reverse items-start justify-end;
      gap: sizem(25);
      .slide {
        width: 100vw;
        height: sizem(176.92);
        .slide-item {
          width: sizem(295.75);
          height: sizem(176.92);
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
          @apply hidden;
        }
      }
      .t {
        @apply flex flex-col text-black;
        gap: sizem(24);
        width: sizem(255);
        margin-left: sizem(32.5);
        .t1 {
          @apply flex items-start justify-between;
          margin-bottom: sizem(5);
          img {
            width: sizem(254.75);
          }
          p {
            @apply absolute;
            font-size: sizem(14);
            font-weight: 500;
            letter-spacing: sizem(0.42);
            left: 60%;
            top: 10%;
          }
        }
        .desc {
          font-size: sizem(14);
          line-height: 170%;
          letter-spacing: sizem(0.42);
        }
      }
      .arrows {
        @apply hidden;
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
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "港灣發展情境示意圖",
  },
  {
    img: new URL("../section/s5/2.jpg", import.meta.url).href,
    caption: "產業專區情境示意圖",
  },
  {
    img: new URL("../section/s5/3.jpg", import.meta.url).href,
    caption: "觀光休閒情境示意圖",
    rt: true,
  },
]
</script>
