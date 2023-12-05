<template>
  <article class="s10">
  <!--div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]"  data-aos="fade-up" data-aos-delay="0">電梯店墅</h3>
  </div-->
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">品味菁英 國際御所</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">正30米莊泰大道，雙校園首排、視野無極限，新藝術美學、經典興地標。</p>
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
  @apply relative flex flex-col items-center justify-center text-[#fff] bg-[#000];
  width: 100%;
  //height: size(1200);
  padding:7em 0 7em 0;
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
.title{
&::after,
&::before{
background: #C9A063;
}
}

.subtitle{
    text-align: center;
    color: #fff;
    
    &::before,
    &::after
    {
        content: "";
        width: size(550);
        height: 1.5px;
        background: #fff;
        display: inline-block;
        vertical-align: middle;
        
    }
    &::before{
      margin: auto size(40) auto 0;
    }
    &::after{
      margin: auto 0 auto size(40);
    }

  }
}


  .slider {
    margin: 0;
    flex-basis: size(1060);
    height: size(1060);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(1060);
      
    }
    .arrows .prev, .arrows .next{
      display: none !important;
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
    padding: 2em 0 0em 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;

    .desc{margin: 0;}

    .subtitle{
    text-align: center;
    
    &::before,
    &::after
    {
        content: "";
        width: sizem(69);
        height: 1.5px;
        background: #Fff;
        display: inline-block;
        vertical-align: middle;
        
    }
    &::before{
      margin: auto sizem(10) auto 0;
    }
    &::after{
      margin: auto 0 auto sizem(10);
    }

  }
 
}
  .slider {
    height: sizem(373);
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
      height: sizem(373);
      
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
    img: globals.$isMobile() ? new URL("./s10/1m.webp", import.meta.url).href : new URL("./s10/1.webp", import.meta.url).href,
    caption: "外觀實景"
  },
]
/*
const imgs = [
  {
    img: getImg('s8/1'),
    caption: "內湖 豁達達禮"
  },
  {
    img: getImg('s8/2'),
    caption: "林口 長耀PARK"
  },
  {
    img: getImg('s8/3'),
    caption: "林口 長耀初"
  },
  {
    img: getImg('s8/4'),
    caption: "林口 長耀里"
  },
]
*/
</script>

