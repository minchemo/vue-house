<template>
  <article class="s4">
    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-in-right">VILLA LIFESTYLE</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in-right" data-aos-delay="200" >徜徉大墅人生<br />看見家的無限可能</h3>
        <p data-aos="zoom-in-right" data-aos-delay="400" >住進微笑歐洲，有天有地的電梯別墅生活就此展開。單純52戶規劃，戶戶臨路並擁有私家庭院、四大主臥套房、室內車位，自在漫遊歐式大墅生活。</p>
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

.s4 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  height: size(800);
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;

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

  .s4 {
  @apply flex-col;
    height: sizem(605);
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
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "現場實景"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    caption: "現場實景"
  },
  {
    img:new URL("./s4/3.jpg", import.meta.url).href ,
    caption: "現場實景"
  },
  {
    img:new URL("./s4/4.jpg", import.meta.url).href ,
    caption: "現場實景"
  },
  {
    img:new URL("./s4/5.jpg", import.meta.url).href ,
    caption: "現場實景"
  },
  {
    img:new URL("./s4/6.jpg", import.meta.url).href ,
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
