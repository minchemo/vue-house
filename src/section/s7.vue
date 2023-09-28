<template>
  <article class="s7">
    <h2 class="title" data-aos="fade-down" data-aos-delay="0" >建材規格一步升級<br>七期名宅標準</h2>
    
    <div class="main">
      <img src="./s7/txt.svg" alt="建材規格" v-if="!$isMobile()">
      <img src="./s7/txtm.svg" alt="建材規格" v-else>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="imgs.length > 1">
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

.s7 {
  @apply relative flex items-center justify-center;
  width: 100%;
  padding:0 0 4em;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  // margin-bottom:8em;
  .title{
    color: #FFF;
    font-size: 2em;
    margin: 0 auto .5em auto;
    line-height: 1.4;
    font-weight: 900;
    background: linear-gradient(70deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);
    width:100%;
    padding: .6em 0;
    text-align: center;

  }
  .main {
    @apply flex text-[#fff];
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
  img{width: size(579);}
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
      left:auto;
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
  @apply flex-col;
    height:auto;
    padding:0 0 0;
    margin: 0;
  font-size:sizem(14);
  .title{
    font-size: 2.2em;

  }

.main {
    padding: 0 sizem(32.5);
    text-align: justify;
  img{width:sizem(300);}
}

  .slider {
    width:  sizem(300);

    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(-18);
    color: #666;
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
    height: sizem(122);
    margin: 0 0 1.5em;
      
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}
const imgs = [
  {
    //img:new URL("./s7/1.jpg", import.meta.url).href ,
    img: globals.$isMobile() ? new URL("./s7/1m.jpg", import.meta.url).href : new URL("./s7/1.jpg", import.meta.url).href,
    caption: "情境示意圖"
  },
]
const options = {
  rewind: false,
  arrows: false,
  pagination:  imgs.length > 1 ? true : false,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

</script>
