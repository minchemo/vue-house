<template>
  <article class="s2">
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :key="img">
      <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-in">SMILE EUROPE</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in" data-aos-delay="200" v-html="img.title"></h3>
        <p data-aos="zoom-in" data-aos-delay="400" v-html="img.desc"></p>
      </div>
      <span class="caption" v-html="img.caption"></span>
        </SplideSlide>
      </Splide>
    </div>
    <img class="bg2" src="./s2/bg2.png" alt="" srcset="">

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex items-center justify-center text-white bg-[#F27200];
  width: 100%;
  height: auto;
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: column;
   .bg2{position: absolute;bottom:0;left: 0;width: 100%;pointer-events: none;}
  .slider {
    margin: 0 0 size(150);
    width: 100%;
    flex-basis: 100%;
    //  height: size(00);
    .slide-item {
      @apply bg-cover;
    flex-basis: 100%;
      height: size(1180);
      background-position: 50% 100%;
  &::before,
  &::after{
    content: "";
    background: linear-gradient(to top, #F27200 0%,#F2720000 100%);
    position: absolute;
    bottom: 0;left: 0;width: 100%;height:30%;z-index: 4;display: block;
  }
  &::before{top: 0;
    background: linear-gradient(to bottom, #F27200 0%,#F2720099 50%,#F2720000 100%);height:50%;}
      
    }
    
  .txt {
    @apply absolute flex text-[#fff];
  z-index: 5;
    margin: 0;top: 0;left: 0;right: 0;
  flex-direction: column;
  text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
  .title{
    font-size: 2.5em;
    margin: 0 0 .2em;
    line-height: 1.4;
  }
  .subtitle{
    font-size: 1.2em;
    margin: 1em 0 .6em;
  }
  }
    .caption {z-index: 5;}
  .arrows{
    .prev,
    .next{width: 2.3%;}
  }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
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
    margin: 0 0 sizem(30);

    .caption {
    font-size:sizem(12); 
    right:sizem(5);
    bottom:sizem(5); 
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(550);
      
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
    img:new URL("./s2/1.jpg", import.meta.url).href ,
    title:"邂逅歐式別墅心生活",
    desc:"有天有地、有大樹有鳥語，夢享人生現在開始",
    caption: "情境示意圖",
  },
  {
    img:new URL("./s2/2.jpg", import.meta.url).href ,
    title:"恣意徜徉私家花園",
    desc:"聽風和樹低語、閱讀四季表情，微笑領略新幸福",
    caption: "情境示意圖",
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
