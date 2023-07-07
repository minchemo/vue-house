<template>
  <article class="s4">
    <div class="slider">
      <div class="arrows">
        <img loading="lazy"  class="prev" @click="splide.splide.go('<')" src="@/section/form/prev.png" alt="" srcset="">
        <img loading="lazy"  class="next" @click="splide.splide.go('>')" src="@/section/form/next.png" alt="" srcset="">
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
        </SplideSlide>
      </Splide>
    </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-out">VILLA LIFESTYLE</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-out">徜徉大墅人生<br />看見家的無限可能</h3>
        <p class="t2">近0%低公設比買下超高坪效電梯透天，單純52戶規劃，戶戶臨路並擁有私家庭院、四大主臥套房、室內車位，自在漫遊歐式大墅生活。</p>
      </div>
      <div class="caption">{{ imgs[currentSlideIndex].caption }}</div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  height: size(1080);
  padding: size(32) size(30) size(36);
  background-size: cover;
  background-image: url('@/section/bg.jpg');

  .main {
    @apply grow flex items-center justify-center text-[#1E1B1B];
    .caption {
      @apply absolute;
      left: size(580);
      bottom: size(36);
      font-family: 'Noto Sans TC';
      font-weight: 500;
      font-size: size(16);
      letter-spacing: 0.05em;
      padding-bottom: size(16);
      border-bottom: size(1) solid #000;
    }
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
      @apply bg-cover;
      width: size(1000);
      height: size(1012);
      
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
  @apply flex-col;
    height: sizem(605);
    padding: sizem(10) sizem(10) sizem(10);
    background-image: url('@/section/bgm.jpg');

  .main {
    .caption {
      @apply absolute;
      left: 0;
      bottom: sizem(322.37);
      font-family: 'Noto Sans TC';
      font-size: sizem(13);      
      padding: sizem(10);
      border-bottom: 0;
      z-index: 10;
      background-color: #111;
      color: #fff;
    }
  .txt {
    .t1 {
      font-size: sizem(25);
      &::before {
        width: sizem(64.35);
        height: sizem(26.8);
        right: 18%;
        bottom: -11%;
      }
      &::after {
        width: sizem(22.67);
        height: sizem(25.76);
        right: 9%;
        bottom: 50%;  
          }
    }
    .t2{
      width: sizem(310);
      font-size: sizem(14);
      margin-top: sizem(15);
      text-align:justify;
    }
  }
}

  .slider {
    flex-basis: sizem(359);
    height: auto;
    width: 100%;
    .slide-item {
      @apply bg-cover;
      width: 100%;
      height: sizem(359);
      
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
    img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "內湖 豁達達禮"
  },
  {
    img: globals.$isMobile() ? new URL("./s4/2_m.webp", import.meta.url).href : new URL("./s4/2.webp", import.meta.url).href,
    caption: "林口 長耀PARK"
  },
  {
    img: globals.$isMobile() ? new URL("./s4/3_m.webp", import.meta.url).href : new URL("./s4/3.webp", import.meta.url).href,
    caption: "林口 長耀初"
  },
  {
    img: globals.$isMobile() ? new URL("./s4/4_m.webp", import.meta.url).href : new URL("./s4/4.webp", import.meta.url).href,
    caption: "林口 長耀里"
  },
]
/*
const imgs = [
  {
    img: getImg('s4/1'),
    caption: "內湖 豁達達禮"
  },
  {
    img: getImg('s4/2'),
    caption: "林口 長耀PARK"
  },
  {
    img: getImg('s4/3'),
    caption: "林口 長耀初"
  },
  {
    img: getImg('s4/4'),
    caption: "林口 長耀里"
  },
]
*/
</script>
