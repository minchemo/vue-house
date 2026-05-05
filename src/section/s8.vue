<template>
  <article class="s8">
    <div class="main">
      <div class="txt">
        <h4 class="title" data-aos="fade-up" data-aos-delay="200">質感生活，從細節開始</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">精選國內外指標品牌，打造安心、<br v-if="isMobile">舒適、耐用的質感家。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index">
          <img :src="img.img" :alt="img.caption">
          <span class="caption" v-if="img.caption" v-html="img.caption"></span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s8 {
  @apply relative flex items-center justify-center ;
  width: 100%;
  height: auto;
  padding: 0em 0 3.5em 0;
  font-size: sizem(16);
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column;
  background:#ECECEC url("./s8/bottommo.svg") no-repeat 0 100%;
  background-size: 100% auto;
  color:#1F1F1F;
  @media screen and (min-width: 768px) {
  background-image: url("./s8/bottom.svg");
  background-color: #ECECEC;
  font-size: size(20);
  padding: 0em 0 13em 0;
  gap: 1.5em;
  }
   .txt  { 
      text-align: center;
      width:sizem(310); 
  @media screen and (min-width: 768px) {
      text-align: center;
      width:size(1500); 

  }
    }
  .spot {
    position: absolute;
    top: sizem(120);
    right: sizem(-50);
    width: sizem(188);
    transform: rotate(-90deg);
    transform-origin: 100% 100%;
    pointer-events: none;
    z-index: 2;

    @media screen and (min-width: 768px) {
      top: size(290);
      right: size(-50);
      ;
      transform: rotate(0deg);
      width: size(600);
    }
  }

 

  .main {
    @apply flex;
    margin: 0;
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;
  }

  .txt {
    // margin: auto auto 3vw auto;
    padding: 0;

    .subtitle {
      font-weight: 400;
    }
  }

  // size(110)

  .slider {
    margin: 0 0 0 0;
    width: size(1500);
    height: size(560);
@media screen and (max-width: 767px) {
    height: sizem(255);
    width: 100%;

}
.slide-item {
      img{margin: 0 auto;
        display: block;
      width: 100%;
      height: 100%;
    
@media screen and (min-width: 768px) {

      width: auto;
}
    }
      .caption{
        display: block;
        font-size: sizem(15);
padding: 0.1em .5em 0.1em 2em;
        background: linear-gradient(90deg, #0eae7000, #0eae70cc 2em);
        color: #fff;bottom: auto;top: 0;right: 0;
@media screen and (min-width: 768px) {
        font-size: size(30);
        right: calc(50% - #{size(840 * .5)});


}

      }
}


    .splide__pagination {
      justify-content: center;
      bottom: -3em;
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
    img: isMobile.value ? new URL("./s8/1m.png", import.meta.url).href : new URL("./s8/1.webp", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s8/2.webp", import.meta.url).href,
    caption: "FAULTLESS 四合一電子鎖 示意圖"
  },
  {
    img: new URL("./s8/3.webp", import.meta.url).href,
    caption: "大同氣密窗 示意圖"
  },
  {
    img: new URL("./s8/4.webp", import.meta.url).href,
    caption: "白馬磁磚 示意圖"
  },
  {
    img: new URL("./s8/5.webp", import.meta.url).href,
    caption: "櫻花廚具 示意圖"
  },
  {
    img: new URL("./s8/6.webp", import.meta.url).href,
    caption: "TOTO全套衛浴 示意圖"
  },
  {
    img: new URL("./s8/7.webp", import.meta.url).href,
    caption: "智能櫃 示意圖"
  },
  {
    img: new URL("./s8/8.webp", import.meta.url).href,
    caption: "歐特斯熱泵熱水器 示意圖"
  },

]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>
