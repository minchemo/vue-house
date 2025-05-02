<template>
  <article class="s4">
    <div class="slide-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: isMobile?true:false,
          autoplay: true,
          pagination: isMobile?false:true,
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
        <div class="t1" data-aos="fade-up" data-aos-delay="0">成州商圈下樓到<br /> 便利機能俯拾皆是</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200">
          成州傳統市場、聯合超市、美聯社，等生鮮超市隨伺在身；五股最熱鬧的成泰路繁華生活圈，輕鬆滿足生活採買所需，優雅搞定生活大小事，便利不求人！
        </div>
      </div>
    </div>
    <img
      class="en"
      src="@/section/s5/en.svg"
      alt=""
      srcset=""
      v-if="!isMobile"
      data-aos="fade-up" data-aos-delay="0"
    />

    <img class="en" src="@/section/s5/enm.svg" alt="" srcset="" v-else data-aos="fade-up" data-aos-delay="0" />
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  @apply w-full relative flex text-white;
  height: size(1080);
  padding-top: size(323);
  padding-left: size(70);

  .slide-box {
    @apply flex items-start;
    gap: size(106);
    .slide {
      width: size(1061);
      height: size(624);
    }
    .splide__pagination {
        @apply justify-start;
    }
  }
    .t {
      width: size(546);
    }

  .en {
    @apply absolute;
    height: size(146.34);
    top: size(23);
    left: 0;right: 0;margin: auto;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s4 {
    height: sizem(667);
    padding-top: sizem(132);
    padding-left: 0;

    .slide-box {
      @apply flex-col;
      gap: sizem(24);
      .slide {
        width: sizem(375);
        height: sizem(281);
        .slide-item {
        }
        .splide__pagination {
          @apply hidden;
        }
      }
      .t {
        width: 100%;
        padding: 0 sizem(30);
      }
    }

    .en {
      @apply absolute;
      height: sizem(61);
      top: sizem(36);
      left: unset;
      right: 0;
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
    img: new URL("../section/s4/01.jpg", import.meta.url).href,
    caption: "天乙公園",
  },
  {
    img: new URL("../section/s4/02.jpg", import.meta.url).href,
    caption: "五股體健防災公園",
  },
  {
    img: new URL("../section/s4/03.jpg", import.meta.url).href,
    caption: "洲子洋公園",
  },
  {
    img: new URL("../section/s4/04.jpg", import.meta.url).href,
    caption: "大都會公園",
  },
]
</script>
