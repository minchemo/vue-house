

<template>
  <article class="s5">
    <div class="bg">
      <span></span>
      <span></span>
      <span v-if="$isMobile()"></span>
    </div>
  <!--div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">菁英學區</h3>
  </div-->
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">捷運輕軌 光速前進</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">機捷泰山站、中和新蘆線輔大站、新莊站，未來機捷A5a站、五泰輕軌、泰板輕軌，台北車站、桃園機場、市心精華四通八達。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index" v-lazy:background-image="img.img">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <div class="square" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000"></div>
    <img src="./s5/style.svg" v-if="!$isMobile()" class="style" alt="" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000"/>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
  @apply relative overflow-hidden flex items-center justify-center ;
  width: 100%;
  height:auto;
  padding:7em 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  .txt{
    border-top:2px solid #FFE000;
    border-bottom:2px solid #FFE000;
    z-index: 1;
  }

  .style{
    position: absolute;
    right: size(-13);
    top: size(193);
    opacity: 0.2 !important;
  }

  .square{
    position: absolute;
    width: size(830);
    height: size(508);
    z-index: 0;
    background: #FFE000;
    left: size(197);
    top:size(190);
  }


.img{position: absolute;bottom:0;right:size(50);width:size(795);
img{width: 100%;position: relative;}}

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}
  .slider {
    margin: 0;
    flex-basis: size(840);
    height: size(560);
    z-index: 2;
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      left: calc(100% + 3em);
      justify-content: flex-start;
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

  .s5 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

  .square{
    width: sizem(343);
    height: sizem(257);
    left: sizem(0);
    top:auto;
    bottom: 0;
  }

  .main {
    padding: sizem(20) sizem(32.5) sizem(5);
    width: 100%;
}

  .txt{
    border: none;
    

    .subtitle{
      text-align: center;
      
      &::before,
      &::after
      {
          content: "";
          width: sizem(69);
          height: 1.5px;
          background: #FFE000;
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
    .desc{margin: 0 !important;text-align: left;}
  }


.img{bottom:sizem(230);right:sizem(-30);width:sizem(250);}



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
    img:new URL("./s5/1.webp", import.meta.url).href ,
    caption: "機捷-A5泰山站"
  },
  {
    img:new URL("./s5/2.webp", import.meta.url).href ,
    caption: "中和新蘆線-新莊站"
  },
  {
    img:new URL("./s5/3.webp", import.meta.url).href ,
    caption: "中和新蘆線-輔大站"
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

