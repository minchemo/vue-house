<template>
  <article class="s7">
    <div class="main">
      <div class="txt">
        <div class="t1 decor" data-aos="fade-up">大地奇緣，<br />
          塑造天際新軸線</div>
        <div class="t2">迎來林口新未來的時刻，原始的紅土大地也將不復見，於是長耀讓建築保有一點大地之母最初的輪廓，搭配層層錯落的陽台，高低雙層的光影設計，為林口帶來更多時代的動感之姿。</div>
      </div>
    </div>

    <div class="slider">
      <div class="arrows">
        <img class="prev" @click="splide.splide.go('<')" src="@/section/prev.png" alt="" srcset="">
        <img class="next" @click="splide.splide.go('>')" src="@/section/next.png" alt="" srcset="">
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
          <div class="caption">{{ img.caption }}</div>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  height: size(1080);
  padding: size(32) size(30) size(36);
  background-size: cover;
  background-image: url('@/section/s7/bg.jpg');

  .main {
    @apply grow flex items-center justify-center text-white;
  .txt {
    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(61);
      letter-spacing: 0.05em;
      &::before {
        width: size(161);
        height: size(67.04);
        right: 5%;
        bottom: -11%;
      }
      &::after {
        width: size(56.72);
        height: size(64.45);
        right: -9%;
        bottom: 50%;
      }
    }
    .t2{
      font-family: 'Noto Serif TC';
      font-weight: 600;
      width: size(509);
      font-size: size(20);
      line-height: 170%;
      letter-spacing: 0.05em;
      margin-top: size(34);
    }
  }
}

  .slider {
    flex-basis: size(1000);
    height: 100%;
    .slide-item {
      @apply bg-cover relative;
      width: size(1000);
      height: size(1012);
      
      .caption {
        @apply absolute;
        right: size(10);
        bottom: size(10);
        font-family: 'Noto Sans TC';
        font-weight: 500;
        font-size: size(12);
        color: #fff;
      }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
    @apply flex-col;
  height: sizem(640);
  padding: sizem(10);
  background-image: url('@/section/s7/bgm.jpg');

  .main {
  .txt {
    .t1 {
      font-size: sizem(25);
      &::before {
        width: sizem(138);
        height: sizem(57.74);
        right: -7%;
        bottom: 2%;
      }
      &::after {
        width: sizem(48);
        height: sizem(54.54);
        right: 41%;
        bottom: 60%;
      }
    }
    .t2{
      width: sizem(310);
      font-size: sizem(14);
      margin-top: sizem(16);
    }
  }
}

  .slider {
    flex-basis: sizem(359.26);
    height: auto;
      width: sizem(355);
    .slide-item {
      @apply bg-cover relative;
      width: sizem(355);
      height: sizem(359.26);
      
      .caption {
        right: sizem(10);
        bottom: unset;
        top: sizem(10);
        font-size: sizem(12);
      }
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
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img: globals.$isMobile() ? new URL("./s7/1_m.jpg", import.meta.url).href : new URL("./s7/1.jpg", import.meta.url).href,
    caption: "本圖為3D模擬示意圖"
  },
  {
    img: globals.$isMobile() ? new URL("./s7/2_m.jpg", import.meta.url).href : new URL("./s7/2.jpg", import.meta.url).href,
    caption: "本圖為3D模擬示意圖"
  },
]
/*
const imgs = [
  {
    img: getImg('s7/1'),
    caption: "本圖為3D模擬示意圖"
  },
  {
    img: getImg('s7/2'),
    caption: "本圖為3D模擬示意圖"
  },
]
*/
</script>
