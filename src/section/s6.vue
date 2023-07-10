<template>
  <article class="s6">
    <img class="bg1" src="./s6/bg1.png" alt="" srcset="">
    <img class="bg2" src="./s6/bg2.png" alt="" srcset="">
    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-in-right">PLAY AROUND</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in-right" data-aos-delay="200">日子隨心所欲<br />
這樣樂活 那樣享受</h3>
        <p data-aos="zoom-in-right" data-aos-delay="400">5分鐘食衣住行圈，三井OUTLET、梧棲商圈、全聯超市、港區運動公園、童綜合醫院，出門轉個彎，臺灣大道與台61線快速道暢行大台中。</p>
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

.s6 {
  @apply relative flex items-center justify-center text-white;
  width: 100%;
  height: size(800);
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  background: #F27200;
  .bg1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(-80%);}
  .bg2{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(85%);z-index: 2;}

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

  .s6 {
  @apply flex-col;
    height: sizem(605);
    padding: 0;
  font-size:sizem(14);

  .bg1{position: absolute;top:0;
    left: -70%;transform: translateY(-80%);
    width: 240%;max-width: 900%;pointer-events: none;}
   .bg2{position: absolute;bottom:0;left: -90%;width: 230%;max-width: 900%;pointer-events: none;z-index:5;}
  .main {
    padding: 0 sizem(32.5);
    .caption {
    }
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
    img:new URL("./s6/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "港區運動公園"
  },
  {
    img:new URL("./s6/2.jpg", import.meta.url).href ,
    caption: "台中港"
  },
  {
    img:new URL("./s6/3.jpg", import.meta.url).href ,
    caption: "三井outlet情境示意圖"
  },
  {
    img:new URL("./s6/4.jpg", import.meta.url).href ,
    caption: "沙鹿火車站"
  },
  {
    img:new URL("./s6/5.jpg", import.meta.url).href ,
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
