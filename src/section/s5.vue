<template>
  <article class="s5">
    <div class="main">
      <div class="txt">
        <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >眼界升級 對位國際</h2>
    <img src="./s5/en.svg" class="en" data-aos="zoom-in" data-aos-delay="200">
    <h4 class="subtitle" data-aos="zoom-in" data-aos-delay="400">大師聯手 深植美學</h4>
        <p data-aos="zoom-in" data-aos-delay="400">科技未來全到位!南科門戶—北外環，連結市區與南部科學園區，基地位於雙匝道口間，分鐘輕達海安路匝道口直上北外環，科技新貴通勤負擔。</p>
      </div>
    <img src="./s2/bottom.svg" class="bottom" data-aos="zoom-in" data-aos-delay="600">
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
  @apply relative flex items-center justify-center text-white;
  width: 100%;
  height: size(800);
  padding:0;
  font-size:size(18);
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
  .title{
    font-size: 3.5em;
    margin: 0 0 .4em;
    line-height: 1.4;
    font-weight: 700;color: #F3DEB9;
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
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
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
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "港區運動公園"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "台中港"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "三井outlet情境示意圖"
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "沙鹿火車站"
  },
  {
    img:new URL("./s5/5.jpg", import.meta.url).href ,
    caption: "全聯超市情境示意圖"
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
