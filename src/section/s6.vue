<template>
  <article class="s6">
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">爸媽也超愛</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">校園首席，園園不絕，<br />
16年完全學區文教聚落</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">
新興國小、正德國中雙學區散步就到<br />
孩子免接送爸媽最省心<br />
還有淡水國小國中、淡江中學、真理大學 16年完全教育學區，資優學府濃濃的教育豐澤，早在幼苗養成的路上</p>
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
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;

  .bg1{position: absolute;top:-4em;left:size(-69);width:size(429);opacity: .6;}
  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
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
    line-height: 1.5;
  }
  .desc{
    margin: 0 0 1em;
    b{}
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
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    color: #fff; 
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
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
    //img: globals.$isMobile() ? new URL("./s6/1_m.webp", import.meta.url).href : new URL("./s6/1.webp", import.meta.url).href,
    caption: "新興國小 實景拍攝"
  },
  {
    img:new URL("./s6/2.jpg", import.meta.url).href ,
    caption: "淡江中學 實景拍攝"
  },
  {
    img:new URL("./s6/3.jpg", import.meta.url).href ,
    caption: "淡江大學 實景拍攝"
  },
  {
    img:new URL("./s6/4.jpg", import.meta.url).href ,
    caption: "真理大學 實景拍攝"
  },
]
/*
const imgs = [
  {
    img: getImg('s6/1'),
    caption: "內湖 豁達達禮"
  },
  {
    img: getImg('s6/2'),
    caption: "林口 長耀PARK"
  },
  {
    img: getImg('s6/3'),
    caption: "林口 長耀初"
  },
  {
    img: getImg('s6/4'),
    caption: "林口 長耀里"
  },
]
*/
</script>

