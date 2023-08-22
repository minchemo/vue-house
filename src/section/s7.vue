<template>
  <article class="s7">
   <!-- <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-in">SMILE EUROPE</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in" data-aos-delay="200" v-html="img.title"></h3>
        <p data-aos="zoom-in" data-aos-delay="400" v-html="img.desc"></p>
      </div>
      <span class="caption" v-html="img.caption"></span>
        </SplideSlide>
      </Splide>
    </div>
    <img class="bg2" src="./s7/bg2.png" alt="" srcset="">
-->
<div class="txt">
  
  <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="200">
    <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >新化正核心｜純質大三房<br>
一層<span>2</span>戶｜戶戶平車</h2>
    <img src="./s7/changji_logo.svg" class="changji_logo" data-aos="zoom-in" data-aos-delay="200" alt="長磯建設">
    <img src="./s7/en.svg" class="en" data-aos="zoom-in" data-aos-delay="200" alt="en">
 </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  min-height: size(800);
  max-height: size(1080);
  height: 100vh;
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: column;
  .txt {
    @apply relative flex text-[#fff];
  z-index: 5;
    margin: 0 ;
  flex-direction: column;
  text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
  .logo{
    height: 7.55em;
    margin: .3em 0 5.1em;
  }
  .title{
    font-size: 3.5em;
    line-height: 1.2;
    font-weight: 700;color: #F3DEB9;
  text-align: center;
  span{font-size: 1.25em;display: inline-block;margin: 0 .1em 0 .1em;position: relative;top: .06em;}
  }
  .changji_logo{
    height: 2em;
    margin: 1.8em 0 5.7em;
  }
  .en{
    height: 4.1em;
  }
  }
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

  .s7 {
  @apply flex-col;
    padding: 0;
  min-height: sizem(0);
  max-height: sizem(1080);
  height: sizem(500);
  font-size:sizem(14);

  .txt {
  .logo{
    height: 5em;
    margin: .3em 0 3.5em;
  }
  .title{
    font-size: 1.9em;
  }
  .changji_logo{
    height: 1.2em;
    margin: 1.2em 0 4em;
  }
  .en{
    height: 2.3em;
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
