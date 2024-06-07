<template>
  <article class="s8">
    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-in-right">BUILDING IN TAICHUNG</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in-right" data-aos-delay="200" >站上台中發展浪頭<br />
贏接港灣大錢潮</h3>
        <p data-aos="zoom-in-right" data-aos-delay="400" >政府領銜啟動「台中港2.0」計劃，定位雙港特區--商港+空港國際級港埠規格，離岸風電產業、捷運藍線建設，帶動破兆產業鏈，人潮錢潮無限可期。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :key="img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
  @apply relative flex items-center justify-center text-white;
  width: 100%;
  height: size(900);
  padding:0 0 3em;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  background: #008DD5;

  .main {
    @apply flex text-[#fff];
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
    //color: #A3191F;
    margin: 0 0 .2em;
    line-height: 1.4;
  }
  .caption{
      @apply absolute;
      right:1em;
      bottom: 1em;
      font-weight: 500;
      font-size: size(15);
      color: #FFF;
      text-shadow: 0px size(2) size(2) rgba(0, 0, 0, 0.8);}
      
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

  .s8 {
  @apply flex-col;
    height: auto;
    padding: 3em 0 5em;
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
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "機場情境示意圖"
  },
  {
    img:new URL("./s8/2.jpg", import.meta.url).href ,
    caption: "台中港"
  },
  {
    img:new URL("./s8/3.jpg", import.meta.url).href ,
    caption: "商港情境示意圖"
  },
  {
    img:new URL("./s8/4.jpg", import.meta.url).href ,
    caption: "離岸風電產業情境示意圖"
  },
  {
    img:new URL("./s8/5.jpg", import.meta.url).href ,
    caption: "捷運藍線情境示意圖"
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
