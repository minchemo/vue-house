<template>
  <article class="s8">
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
    <div class="main">
      <div :key="currentSlideIndex">
        <div class="t2" data-aos="fade-up" v-html="imgs[currentSlideIndex].t1"></div>
        <div class="t3" data-aos="fade-up" data-aos-delay="200" v-html="imgs[currentSlideIndex].t2"></div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
  @apply relative overflow-hidden flex flex-col items-start justify-center text-white;
  width: 100%;
  height: size(1080);
  padding: size(20);
  background:#fff;

  .arrows{
    display: none !important;
  }

  .main {
    @apply absolute flex items-center justify-center text-[#1E1B1B];
    right: size(82);
    bottom: size(106);
    >div {
      @apply flex items-center;
      gap: size(92);
    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(46);
      letter-spacing: 0.04em;
      line-height: 120%;
      color: #fff;
    }
    .t3 {
      font-family: 'Noto Serif TC';
      font-style: normal;
      font-weight: 600;
      font-size: size(16);
      line-height: size(27);
      letter-spacing: 0.05em;
      color: #fff;
      width: size(506);
    }
    }
  }

  .slider {
    width: 100%;
    flex-basis: 100%;
    .slide-item {
      @apply bg-cover;
      width: size(1880);
      height: size(1040);
      
      .caption {
        @apply absolute;
        right: size(10);
        bottom: size(10);
        font-family: 'Noto Sans TC';
        font-weight: 400;
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

  .s8 {
    @apply flex-col-reverse justify-end;
    height: sizem(609);
    padding: sizem(10);
    background-image: url('@/section/bgm.webp');

  .main {
    @apply relative flex items-center justify-center text-[#1E1B1B];
    right: 0;
    top: 0;
    bottom: unset;
    background-color: #1D1D1D;
    width: 100%;
    height: sizem(255);
    > div {
      @apply flex-col items-start;
      gap: sizem(9.5);
    .t2 {
      font-size: sizem(25);
      line-height: sizem(36);
    }
    .t3 {
      font-size: sizem(14);
      line-height: 170%;
      width: sizem(310);
    }
    }
  }

  .slider {
    width: 100%;
    flex-basis: sizem(329);
    .slide-item {
      @apply bg-cover;
      width: 100%;
      height: sizem(329);
      
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
  if (!globals.$isMobile()) return new URL(`./${path}.webp`, import.meta.url).href;
  return new URL(`./${path}_m.webp`, import.meta.url).href
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
  type: 'loop',
}

const imgs = [
  {
    img: getImg('s8/1'),
    t1: '庭院，茄苳，<br>歡迎回家',
    t2: '風，穿過了落羽松與光臘樹梢；楓香與台灣木的葉在地上交相覆合。長耀以「原鄉」為題，特別植棵帶有家鄉之感的「茄樹」作為門面，期盼北漂異鄉打拼的遊子在此成家之時，能想起自己最根本的家。',
    caption: '本圖為3D模擬示意圖'
  },
]

</script>
