<template>
  <article class="s8">
    <div class="img" data-aos="fade-up" data-aos-delay="0"><img src="./s4/img.png" /></div>
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">通勤族酷愛</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">一捷╳雙快速道，風馳電掣，翻轉未來</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">打通淡水任督二脈的二大交通建設<br />
淡江大橋╳淡水北側快速道<br />
其中預計2025年完工的淡江大橋，不僅是全世界最大的跨距斜張橋<br />
更是媲美雪梨港灣大橋的景觀地標<br />
橫跨淡水與八里，快速串連台61、64線直達國際機場<br />
萬企君品，不需繞道關渡大橋<br />
直上淡江大橋僅需5分鐘<br />
有效分流車潮，不必跟塞車比耐心<br />
發動你的引擎，距淡水河北側道路，9分鐘就到<br />
捷運飛速暢行，不必跟紅燈乾瞪眼<br />
沿途盡是繁華與時尚，通勤族最愛</p>
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

.s8 {
  @apply relative flex items-center justify-center text-[#555] bg-[#F2F2F2];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
  .img{position: absolute;bottom:0;left:size(-270);width:size(660);
  img{width: 100%;position: relative;}}
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
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    color: #C5C5C5; 
    li button.is-active{
      color: #B78E63;
    }
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
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .img{position: absolute;top:sizem(350);left: auto;
    right:sizem(-155);width:sizem(260);bottom: auto;}

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
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s8/1_m.webp", import.meta.url).href : new URL("./s8/1.webp", import.meta.url).href,
    caption: "淡水捷運站 實景拍攝"
  },
  {
    img:new URL("./s8/2.jpg", import.meta.url).href ,
    caption: "捷運 實景拍攝"
  },
  {
    img:new URL("./s8/3.jpg", import.meta.url).href ,
    caption: "淡水捷運站 實景拍攝"
  },
]
</script>

