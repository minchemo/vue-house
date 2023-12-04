<template>
  <article class="s12">
  <!--div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]"  data-aos="fade-up" data-aos-delay="0">電梯店墅</h3>
  </div-->
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">國鉅機構 17大保證</h4>
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

.s12 {
  @apply relative flex flex-col items-center justify-center text-[#3E3A39] ;
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
}

  .slider {
    margin: 0;
    flex-basis: size(613);
    height: size(613);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(613);
      
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

  .s12 {
  @apply flex-col;
    height: auto;
    padding: 2em 0 5em 0;
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
        width: sizem(65);
        height: 1.5px;
        background: #F4A000;
        display: inline-block;
        vertical-align: middle;
        
    }
    &::before{
      margin: auto 1em auto 0;
    }
    &::after{
      margin: auto 0 auto 1em;
    }

  }
}
  .slider {
    height: sizem(450);
    width: sizem(310);

    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(5);
    }
    .slide-item {
      @apply bg-cover;
      width: sizem(310);
    flex-basis: auto;
      height: sizem(450);
      
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
    img: globals.$isMobile() ? new URL("./s12/1m.webp", import.meta.url).href : new URL("./s12/1.webp", import.meta.url).href,
    caption: ""
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

