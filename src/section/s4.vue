<template>
  <article class="s4">
    <div class="main">
      <div class="txt">
        <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >創造台灣影響力<br>
就業大聚落</h2>
        <p data-aos="zoom-in" data-aos-delay="400">臨海產業鏈+中部科技走廊<br>
創造2022年2兆產值，近20萬就業人口</p>
    <img src="./s4/img.svg" class="en" data-aos="zoom-in" data-aos-delay="200">
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

.s4 {
  @apply relative flex items-center justify-center bg-[#BBDCF4];
  width: 100%;
  height: size(800);
  padding:0;
  font-size:size(20);
  gap:3em;
  flex-direction: row-reverse;

  .main {
    @apply relative flex text-[#fff];
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
  .txt {
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    color: #004EA2;
  .title{
    font-size: 2em;
    margin: 0 auto .2em;
    line-height: 1.4;
    font-weight: 900;
	  border: 4px solid transparent;
    border-image: linear-gradient(70deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);
	  border-image-slice: 1;
    width: 10em;
    padding: .1em 0;
    text-align: center;
    color: #42167B;

  }
  .en{
    height:  3.66em;
  }
  .subtitle{
    font-size: 2.28em;
    margin: .5em 0 .3em;
    font-weight: 700;
  }
  }
  .bottom{position: absolute;
    width: size(330);
    margin: 0 auto;bottom:-5.5em;right: 0;}
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
    .splide__pagination{
      left: calc(100% + 3em);
      justify-content: flex-start;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
  @apply flex-col;
    height: auto;
    padding:3em 0 7em;
  font-size:sizem(13);

    .main {
    padding: 0 sizem(32.5);
    text-align: center;
  .txt {
  .title{
    font-size: 1.9em;
    margin: 0 0 .6em;
  }
  .en{
    height:  2.6em;
  }
  .subtitle{
    font-size: 1.3em;
    margin: 2em 0 .3em;
  }
  }
  .bottom{position: absolute;
    width: sizem(160);
    margin: 0 auto;bottom:-25.5em;right: 0;left: 0;}
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
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "白本建築設計 業績"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    caption: "太研規劃設計 業績"
  },
  {
    img:new URL("./s4/3.jpg", import.meta.url).href ,
    caption: "偶得燈光設計 業績"
  },
]
</script>
