<template>
  <article class="s7">

    <img src="./s7/t.svg" data-aos="zoom-in" class="t">
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
    <img src="./s7/3.jpg" data-aos="zoom-in" class="img">

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 {
  @apply relative flex items-center justify-center;
  width: 100%;
  padding:size(120) 0;
  margin: 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  // margin-bottom:8em;
  .t{width:size(1340);margin:size(60) auto auto;}

  .slider {
    margin: 0;
    width: size(1500);
      height: size(995);
    .slide-item {
      @apply bg-cover;
      height: 100%;
      
    }
    .splide__pagination{
      left:auto;
     // right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
  .img{width:size(1500);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
  @apply flex-col;
    height:auto;
  font-size:sizem(14);
  padding:sizem(30) 0;
  .t{width:85%;margin:sizem(30) auto auto;}

  .slider {
    width:  sizem(310);
    height: sizem(206);
  }
  .img{width:sizem(310);}
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
    img:new URL("./s7/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s7/1m.jpg", import.meta.url).href : new URL("./s7/1.jpg", import.meta.url).href,
    caption: "樣品屋實景拍攝"
  },
  {
    img:new URL("./s7/2.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s7/1m.jpg", import.meta.url).href : new URL("./s7/1.jpg", import.meta.url).href,
    caption: "樣品屋實景拍攝"
  },
]
const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  // pagination:  imgs.length > 1 ? true : false,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

</script>
