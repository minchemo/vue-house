<template>
  <article class="s10">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">樣品屋預留</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">樣品屋預留一戶(文案&圖檔待補)這塊要先隱藏</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s10 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:5em 0 11em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto;
  width: size(1500);
}

  .slider {
    margin: 0;
    flex-basis: size(843);
      height: size(843);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(843);
      
    }

    .splide__pagination{
      justify-content: flex-end;
      bottom: -2em;
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
  font-size:sizem(15);
  flex-wrap:nowrap;
gap:0em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.txt {margin: 4.4em auto 1.3em;
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
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s10/1.webp", import.meta.url).href ,
    caption: "樣品屋預留"
  },
]
</script>

