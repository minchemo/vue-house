<template>
  <article class="s10">
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
    <div class="main" :key="currentSlideIndex">
      <div v-if="!$isMobile()">
        <div class="t1" data-aos="fade-up">{{ imgs[currentSlideIndex].t1 }}</div>
        <div class="divide"></div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200" v-html="imgs[currentSlideIndex].t2"></div>
        <div class="t3" data-aos="fade-up" data-aos-delay="400" v-html="imgs[currentSlideIndex].t3"></div>
      </div>
      <div v-else>
        <div class="flex items-center">
          <div class="t1" data-aos="fade-up" data-aos-delay="0" >{{ imgs[currentSlideIndex].t1 }}</div>
          <div class="divide"></div>
          <div class="t2" data-aos="fade-up" data-aos-delay="200" v-html="imgs[currentSlideIndex].t2"></div>
        </div>
        <div class="t3" data-aos="fade-up" data-aos-delay="400" v-html="imgs[currentSlideIndex].t3"></div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s10 {
  @apply relative overflow-hidden flex flex-col items-start justify-center text-white;
  width: 100%;
  height: size(1080);
  padding: size(16);
  background-size: cover;
  background-image: url('@/section/bg.jpg');

  .main {
    @apply grow flex items-center justify-center text-[#1E1B1B] w-full;
    >div {
      @apply flex items-center;
      .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(40);
      letter-spacing: 0.05em;
      color: #958275;
    }
    .divide{
      width: size(256);
      height: size(1);
      background-color: #C5A260;
      margin: 0 size(20);
    }
    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(30);
      letter-spacing: 0.05em;
      color: #958275;
      margin-right: size(182);
      span{
        font-size: size(50);
      }
    }
    .t3 {
      font-family: 'Noto Serif TC';
      font-style: normal;
      font-weight: 600;
      font-size: size(20);
      line-height: size(29);
      letter-spacing: 0.05em;
      color: #736357;
    }
    }
  }

  .slider {
    width: 100%;
    flex-basis: size(905);
    .slide-item {
      @apply bg-cover;
      width: size(1887.09);
      height: size(905);
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

  .s10 {
    height: sizem(667);
    background-image: url('@/section/bgm.jpg');
    padding: sizem(89) sizem(8);

    
  .main {
    margin-top: sizem(22);
    >div {
      @apply flex-col;
      .t1 {
      font-size: sizem(25);
    }
    .divide{
      width: sizem(110);
      height: sizem(1);
      margin: 0 sizem(13);
    }
    .t2 {
      font-size: sizem(18);
      letter-spacing: 0.05em;
      margin-right: 0;
      span{
        font-size: sizem(25);
      }
    }
    .t3 {
      font-size: sizem(14);
      line-height: 170%;
      width: sizem(310);
      margin-top: sizem(15);
    }
    }
  }

  .slider {
    width: 100%;
    flex-basis: sizem(435);
    .slide-item {
      @apply bg-cover;
      width: sizem(359);
      height: sizem(435);
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
  type: 'loop',
}

const imgs = [
  {
    img: getImg('s10/1'),
    t1: '質樸之森',
    t2: '約<span>28</span>坪',
    t3: '日系溫雅的表現中，人文與藝術的呈現，質樸而內斂的溫潤感受,巧而雅的氛圍。',
    caption: '本圖為實景拍攝圖'
  },
  {
    img: getImg('s10/2'),
    t1: '質樸之森',
    t2: '約<span>28</span>坪',
    t3: '日系溫雅的表現中，人文與藝術的呈現，質樸而內斂的溫潤感受,巧而雅的氛圍。',
    caption: '本圖為實景拍攝圖'
  },
  {
    img: getImg('s10/3'),
    t1: '靜謐之所',
    t2: '約<span>36</span>坪',
    t3: '深淺線條中，直與橫的交錯，深淺線條的跳躍，平行空間里，呈現義系生活的精<br class="hidden md:block"/>緻與簡約。',
    caption: '本圖為實景拍攝圖'
  },
  {
    img: getImg('s10/4'),
    t1: '靜謐之所',
    t2: '約<span>36</span>坪',
    t3: '深淺線條中，直與橫的交錯，深淺線條的跳躍，平行空間里，呈現義系生活的精<br class="hidden md:block"/>緻與簡約。',
    caption: '本圖為實景拍攝圖'
  },
  {
    img: getImg('s10/5'),
    t1: '琢麗之家',
    t2: '約<span>47</span>坪',
    t3: '沉穩的法式線條，勾勒生活的優雅，雅致的空，呈現三房的空表現，體現大坪數<br class="hidden md:block"/>里精品住宅的生活風采。',
    caption: '本圖為實景拍攝圖'
  },
  {
    img: getImg('s10/6'),
    t1: '質樸之森',
    t2: '約<span>28</span>坪',
    t3: '日系溫雅的表現中，人文與藝術的呈現，質樸而內斂的溫潤感受,巧而雅的氛圍。',
    caption: '本圖為實景拍攝圖'
  },
]

</script>
