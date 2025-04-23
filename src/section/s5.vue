<template>
  <article class="s5">

    <div class="slider">
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :key="img">
          <div class="caption font-['Noto_Serif_TC',serif]">{{ img.caption }}</div>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
  @apply relative text-white;
  width: 100%;
  .slider {
    width: 100%; height:auto;
    aspect-ratio: 1920/1280;
    position: relative;
    .caption {
      position: absolute;
      font-size: size(28);
      right: .5em;
      bottom: .5em;
      font-weight: 700;
      color: #fff;
    }
    .splide__pagination{position: absolute;}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
  .slider {
    .caption {
      font-size: sizem(12);
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: globals.$isMobile()? true : false,
  pagination: globals.$isMobile()? false : true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s5/1.jpg", import.meta.url).href ,
    caption: "頂誠建築團隊歷年業績實景拍攝"
  },
  {
    img: new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "頂誠建築團隊歷年業績實景拍攝"
  },
  {
    img: new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "頂誠建築團隊歷年業績實景拍攝"
  },
  {
    img: new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "頂誠建築團隊歷年業績實景拍攝"
  },
  {
    img: new URL("./s5/5.jpg", import.meta.url).href ,
    caption: "頂誠建築團隊歷年業績實景拍攝"
  },
  {
    img: new URL("./s5/6.jpg", import.meta.url).href ,
    caption: "頂誠建築團隊歷年業績實景拍攝"
  },
]
</script>
