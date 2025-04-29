<template>
  <article class="s6">
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
        <div class="t1" data-aos="fade-up" data-aos-delay="0">百年成州學區<br v-if="!isMobile" /> 資優素養明日菁英</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200">
          成州國小學區近距離，文教學府一氣呵成，日日書香飄溢，天天快樂學習；為孩子奠定最好的學習起點，就是邁向勝利人生的指標！
        </div>
      </div>
    </div>
    <img class="en" src="@/section/s6/en.svg" alt="" srcset="" v-if="!isMobile" data-aos="fade-up" data-aos-delay="0"/>
    <img class="en" src="@/section/s6/enm.svg" alt="" srcset="" v-else data-aos="fade-up" data-aos-delay="0"/>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
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
        @apply justify-end;
    }
  }
    .t {
      width: size(546);
    }

  .en {
    @apply absolute;
    height: size(146.34);
    top: size(23);
    right: size(4);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s6 {
    height: sizem(667);
    padding-top: sizem(132);
    padding-left: 0;

    .slide-box {
      @apply flex-col;
      gap: sizem(24);
      .slide {
        width: sizem(375);
        height: sizem(281);
      }
      .t {
        width: 100%;
        padding: 0 sizem(30);
      }
    }

    .en {
      @apply absolute;
      height: sizem(58.5);
      top: sizem(36);
      right: 0;
      left: unset;
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
    img: new URL("../section/s6/1.webp", import.meta.url).href,
    caption: "成州國小",
  },
  {
    img: new URL("../section/s6/2.webp", import.meta.url).href,
    caption: "情境圖",
  },
  {
    img: new URL("../section/s6/3.webp", import.meta.url).href,
    caption: "五股圖書館",
  },
]
</script>
