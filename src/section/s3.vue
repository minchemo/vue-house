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
        <div class="t1" v-if="!isMobile" data-aos="fade-up" data-aos-delay="0">未來新五泰輕軌<br />幸福生活圈</div>
        <div class="t1" v-else data-aos="fade-up" data-aos-delay="0">未來新五泰輕軌 幸福生活圈</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200">
          未來雙享五泰輕軌、新蘆線，串聯新北市蘆洲、五股、泰山
          三個行政區，暢連捷運路網雙 北自在移動；動靜皆宜的雙北
          精采生活，就是你的幸福圈！
        </div>
      </div>
    </div>
    <img
      class="en"
      src="@/section/s3/ENm.svg"
      alt=""
      srcset=""
      v-if="isMobile"
      data-aos="fade-up" data-aos-delay="0"
    />
    <img class="en" src="@/section/s3/EN.svg" alt="" srcset="" v-else data-aos="fade-up" data-aos-delay="0" />
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @apply w-full relative bg-[#0D5052] flex text-white;
  height: size(1080);
  padding-top: size(313);
  padding-left: size(139);

  .slide-box {
    @apply flex flex-row-reverse items-start;
    gap: size(137);
    .slide {
      width: size(1061);
      height: size(624);
      .slide-item {
        width: size(1061);
        height: size(624);
        background: #eee;
        background-size: cover;
        .caption {
          @apply absolute font-['Noto_Sanc_TC'];
          right: size(14);
          bottom: size(15);
          font-size: size(20);
          font-weight: 400;
          letter-spacing: size(2.6);
        }
      }
      .splide__pagination {
        @apply absolute right-0 w-full flex justify-end;
        padding: size(25) 0;
        li {
          line-height: 0;
          button {
            @apply rounded-full;
            width: size(10);
            height: size(10);
            background: #0d6b68;
            &.is-active {
              background: #138784;
            }
          }
        }
        gap: size(13);
      }
    }
    .t {
      width: size(508);
      .t1 {
        color: #e89213;
        font-size: size(51);
        font-weight: 700;
        line-height: 126.7%;
        letter-spacing: size(4.08);
        margin-bottom: size(112);
        padding-bottom: size(35);
        border-bottom: size(1) solid #fff;
      }
      .t2 {
        font-size: size(32);
        font-weight: 700;
        text-align: justify;
        line-height: 157.9%;
        letter-spacing: size(6.4);
      }
    }
  }

  .en {
    @apply absolute;
    height: size(146.34);
    top: size(23);
    left: size(4);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    height: sizem(667);
    padding-top: sizem(132);
    padding-left: 0;

    .slide-box {
      @apply flex flex-col;
      gap: sizem(24);
      .slide {
        width: sizem(375);
        height: sizem(281);
        .slide-item {
          width: sizem(375);
          height: sizem(281);
          .caption {
            right: sizem(11);
            bottom: sizem(6);
            font-size: sizem(12);
            letter-spacing: size(2.6);
          }
        }
        .splide__pagination {
          @apply hidden;
        }
      }
      .t {
        width: 100%;
        padding: 0 sizem(30);
        .t1 {
          font-size: sizem(20);
          line-height: 1;
          letter-spacing: sizem(1.6);
          margin-bottom: sizem(14);
          padding-bottom: sizem(14);
          border-bottom: sizem(1) solid #fff;
        }
        .t2 {
          font-size: sizem(13);
          line-height: 157.9%;
          letter-spacing: sizem(2.6);
        }
      }

      .arrows {
        @apply absolute z-20 w-full flex justify-between;
        top: sizem(280);
        padding: 0 sizem(5);

        .arrow {
          @apply cursor-pointer;
          width: sizem(12.8);
          height: sizem(22.86);
          &.prev {
            transform: scaleX(-1);
          }
        }
      }
    }

    .en {
      @apply absolute;
      height: sizem(63.94);
      top: sizem(36);
      left: 0;
    }
  }
}
</style>

<script setup>
import View from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const splide = ref()

const imgs = [
  {
    img: new URL("../section/s3/1.webp", import.meta.url).href,
    caption: "成蘆大橋",
  },
  {
    img: new URL("../section/s3/2.webp", import.meta.url).href,
    caption: "65快速道路",
  },
  {
    img: new URL("../section/s3/3.webp", import.meta.url).href,
    caption: "新北環快",
  },
]
</script>
