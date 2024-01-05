

<template>
  <article class="s4-4">
  <img src="./s4/group3.jpg" alt="group3" class="group3" data-aos="fade-up" data-aos-delay="600" v-if="!$isMobile()">
    <div class="slider" data-aos="fade-up" data-aos-delay="300" v-else>
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

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4-4 {
  @apply relative overflow-hidden flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:0 0 0 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  .group3{
  width:100%;}
  .slider {
    margin: 0;
    flex-basis: size(730);
      height: size(400);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(730);
      height: size(400);
      
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

  .s4-4 {
  @apply flex-col;
    height: auto;
    padding:0 0 3em 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
  .group3{
  width:100%;}


  .slider {
    height: auto;
    width: sizem(310);

    .caption {
    font-size:sizem(12); 
    right:sizem(5);
    bottom:sizem(5); 
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(168);
      
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

const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 4000,
  gap: 10,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s4/441.jpg", import.meta.url).href ,
    caption: "TOKYO DOME CITY 東京巨蛋城"
  },
  {
    img:new URL("./s4/442.jpg", import.meta.url).href ,
    caption: "Halekulani 沖繩"
  },
  {
    img:new URL("./s4/443.jpg", import.meta.url).href ,
    caption: "東京中城日比谷(中庭)"
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

