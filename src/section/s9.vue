<template>
  <article class="s9">
    <img class="bg1" src="./s9/bg1.png" alt="" srcset="">
    <img class="bg2" src="./s9/bg2.png" alt="" srcset="">
    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-in-right">HAPPINESS LIHPAO</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in-right" data-aos-delay="200" >麗寶集團40年<br />安心購屋學</h3>
        <p data-aos="zoom-in-right" data-aos-delay="400" >麗寶集團逾40年企業版圖，橫跨連鎖飯店、主題樂園、商場百貨、不動產、生技產業等。永續經營信賴品質，買的放心、住的安心。</p>
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

.s9 {
  @apply relative flex items-center justify-center text-white;
  width: 100%;
  height: size(800);
  padding:0;
  font-size:size(18);
  gap:3em;
  background: #F27200;
  .bg1{
    position: absolute;pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(-80%);}
  .bg2{
    position: absolute;pointer-events: none;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(82%);}

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

  .s9 {
  @apply flex-col;
    height: sizem(605);
    padding: 0;
  font-size:sizem(14);
  .bg1{position: absolute;top:0;
    left: -50%;transform: translateY(-80%);
    width: 240%;max-width: 900%;pointer-events: none;}
   .bg2{position: absolute;bottom:0;
    left: -9%;
    width: 217%;max-width: 900%;pointer-events: none;}
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
    img:new URL("./s9/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "麗寶樂園"
  },
  {
    img:new URL("./s9/2.jpg", import.meta.url).href ,
    caption: "福容大飯店-淡水漁人碼頭"
  },
  {
    img:new URL("./s9/3.jpg", import.meta.url).href ,
    caption: "淡水福容大飯店-淡水漁人碼頭"
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
