<template>
  <article class="s5">
    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-in-right">FOUR SEASON GARDEN</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in-right" data-aos-delay="200">私家花園會館<br />尊榮級度假享受</h3>
        <p data-aos="zoom-in-right" data-aos-delay="400">在微笑歐洲，別墅也能享有收發信件、垃圾收取等飯店式物業管理。社區環抱私家公園及VIP休閒會館，隨時與親友歡樂相聚，在家即可自在體驗度假VILLA享受。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  height: size(800);
  padding:0;
  font-size:size(18);
  gap:3em;
  margin-bottom:8em;

  .main {
    @apply flex text-[#555];
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
  .txt {
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
  .title{
    font-size: 2.5em;
    color: #A3191F;
    margin: 0 0 .2em;
    line-height: 1.4;
  }
  .subtitle{
    font-size: 1.2em;
    margin: 0 0 .6em;
  }
  }
}

  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
  @apply flex-col;
    height: sizem(500);
    padding: 0;
  font-size:sizem(14);

  .main {
    padding: 0 sizem(32.5);
  .txt {
  .title{
    font-size: 1.8em;
  }
  .subtitle{
    font-size: 1.07em;
  }
  }
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
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "現場實景"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "現場實景"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "現場實景"
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "現場實景"
  },
  {
    img:new URL("./s5/5.jpg", import.meta.url).href ,
    caption: "現場實景"
  },
  {
    img:new URL("./s5/6.jpg", import.meta.url).href ,
    caption: "現場實景"
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
