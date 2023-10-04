<template>
  <article class="s8">

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

.s8 {
  @apply relative flex items-center justify-center bg-[#CA9D76];
  width: 100%;
  padding:size(100) 0;
  margin: 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  // margin-bottom:8em;

  .slider {
    margin: 0;
    width: size(1500);
      height: size(860);
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
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
  @apply flex-col;
    height:auto;
  font-size:sizem(14);
  padding:sizem(30) 0;

  .slider {
    width:  sizem(310);
    height: sizem(206);
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
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s8/1m.jpg", import.meta.url).href : new URL("./s8/1.jpg", import.meta.url).href,
    caption: "樣品屋實景拍攝"
  },
  {
    img:new URL("./s8/2.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s8/1m.jpg", import.meta.url).href : new URL("./s8/1.jpg", import.meta.url).href,
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
