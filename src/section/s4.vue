<template>
  <article class="s4">
    <div class="main">
      <div class="txt">
        <div class="t1 decor" data-aos="fade-up">一年一樹，城森林</div>
        <div class="t2">建築為秧，城市為畝。在長耀一畝田的哲學裡，滿懷對大地的謙卑與感謝，於是內湖到林口，我們用心建築城市少數坐擁綠意的精華沃土，期盼藉由自然風土滋養每一個人，同時成為一個有根的人。</div>
      </div>
      <div class="caption">{{ imgs[currentSlideIndex].caption }}</div>
    </div>

    <div class="slider">
      <div class="arrows">
        <img class="prev" @click="splide.splide.go('<')" src="@/section/prev.png" alt="" srcset="">
        <img class="next" @click="splide.splide.go('>')" src="@/section/next.png" alt="" srcset="">
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
        </SplideSlide>
      </Splide>
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

</script>
