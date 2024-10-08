<template>
  <article class="s7">
    <div class="img">
      <img src="./s7/0.jpg">
      <span class="caption">示意圖</span>
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">市區小宅價格 住進雙車位透天美墅</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">用市區小宅的價格，入主開闊透天格局。標配雙車位，家人停車再也不煩惱，大空間好規劃，出遊設備輕鬆收納，戶戶套房讓每個家人都有私空間，讓生活可好好舒展，親情更凝聚。下班後就好好休息吧，生活的愜意將成為你人生的動力。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide v-for="(img, index) in imgs" :key="index">
          <img :src="img.img" :alt="img.caption">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
        <template #pagination="{ items }">
          <ul class="splide__pagination">
            <li v-for="(item, index) in items" :key="index">
              <button class="splide__pagination__page" @click="goToSlide(index)" v-html="imgs[index].caption">
              </button>
            </li>
          </ul>
        </template>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:10em 0 10em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;
    .img{position: relative;
      margin:0 auto -6em auto;
      img{width: 100%;}
      .caption{bottom: 7em;right: 6em;}
    }
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto auto 2em;
  width: size(1500);
}

  .slider {
    margin: 0;
    flex-basis: size(800);
      height: size(800);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
      
    }

    .splide__pagination{
      justify-content:center;
      bottom: -2em;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
  margin-bottom:0em;
gap:0em;

flex-direction:column-reverse;

    .main {
    padding: 0 sizem(30);
    width: 100%;
}
.txt {margin: 2em auto 6.5em;
  width: 100%;
}
  .slider {
    height: auto;
    width: 100%;

    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(5);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(250);
      
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

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
    img:new URL("./s7/1.jpg", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/2.jpg", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/3.jpg", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/4.jpg", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/5.jpg", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/6.jpg", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/7.jpg", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/8.jpg", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
  {
    img:new URL("./s7/9.jpg", import.meta.url).href ,
    caption: "外觀實景經電腦修飾"
  },
]


const goToSlide = (index) => {
  splide.value.go(index);
};
</script>

