<template>
  <article class="s10">
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">休旅者深愛</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">飯店俬旅，奢享一座藝術飯店沙龍的家</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">
          大尺度挑高門廳、交誼廳熱情迎賓、人文沙龍閱覽空間、健身房、韻律教室、兒童遊戲室…<br />
從社交到藝文，十多項全齡樂活公設，不只藝術，而且生活，美學實用兼容並蓄<br />
收納美感的堂奧，是盛裝嶄新故事、富享一生的家</p>
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

.s10 {
  @apply relative flex flex-col items-center justify-center text-[#555];
  width: 100%;
  // height: size(800);
  padding:0 0 7em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}
  .txt {
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    width: 100%;
  .title{
    font-size: 2.2em;
    margin: 2em 0 0em;
    line-height: 1.4;
    font-weight: 700;
    color:#B78E63;
    text-align: center;
    &::after,
    &::before{
      content: "";
      width: 15.7em;
      height: 1px;
      background: currentColor;
      display: inline-block;
      vertical-align: middle;
      margin: auto .5em;
    }
  }
  .subtitle{
    font-size: 1.65em;
    font-weight: 700;
    margin: 0 0 .8em;
    color:#B78E63;
    line-height: 1.5;
  }
  .desc{
    margin: 0 0 1em;
    b{
    color:#B78E63;}
  }
  }

  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(844);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(844);
      
    }
    .arrows .prev, .arrows .next{
      width:3%;
    }

    .splide__pagination{
      bottom: .5em;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s10 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

  .txt {
  .title{
    font-size: 1.8em;
    &::after,
    &::before{
      width: 4.2em;}
  }
  .subtitle{
    font-size: 1.4em;
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
    .arrows .prev, .arrows .next{
      width:8%;
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
    img:new URL("./s10/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s10/1_m.webp", import.meta.url).href : new URL("./s10/1.webp", import.meta.url).href,
    caption: "門廳 3D情境示意圖"
  },
  {
    img:new URL("./s10/2.jpg", import.meta.url).href ,
    caption: "閱覽空間 3D情境示意圖"
  },
  {
    img:new URL("./s10/3.jpg", import.meta.url).href ,
    caption: "交誼廳 3D情境示意圖"
  },
  {
    img:new URL("./s10/4.jpg", import.meta.url).href ,
    caption: "健身房 3D情境示意圖"
  },
]
/*
const imgs = [
  {
    img: getImg('s10/1'),
    caption: "內湖 豁達達禮"
  },
  {
    img: getImg('s10/2'),
    caption: "林口 長耀PARK"
  },
  {
    img: getImg('s10/3'),
    caption: "林口 長耀初"
  },
  {
    img: getImg('s10/4'),
    caption: "林口 長耀里"
  },
]
*/
</script>

