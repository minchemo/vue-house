

<template>
  <article class="s4-1">
  <div class="txt">
  </div>
    <div class="main">
      <div class="txt">
    <div class="subdesc" data-aos="fade-up" data-aos-delay="0">Mistui Fudosan Group</div>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="100">商業、飯店、住宅<br>三大範疇</h4>
    <h3 class="title" data-aos="fade-up" data-aos-delay="200">跨足台灣 移植日本元素</h3>
      </div>
    </div>
    <div class="slider" data-aos="fade-up" data-aos-delay="300">
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
  <img src="./s4/group1.webp" alt="group1" class="group1" data-aos="fade-up" data-aos-delay="400" v-if="!$isMobile()">
  <img src="./s4/group1m.webp" alt="group1m" class="group1" data-aos="fade-up" data-aos-delay="400" v-else>
  <img src="./s4/group2.webp" alt="group2" class="group2" data-aos="fade-up" data-aos-delay="500" v-if="!$isMobile()">
  <img src="./s4/group2m.webp" alt="group2" class="group2" data-aos="fade-up" data-aos-delay="500" v-else>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4-1 {
  @apply relative overflow-hidden flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:0 0 0 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  .group1{
  width:size(1341);
  margin: 2em auto 5em;
}
  .group2{
  width:size(1341);
  margin: 0em auto 5em;}
  .group3{
  width:100%;}
  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}

.txt {
  text-align: center;
  .subtitle{
    font-weight: 300;
    margin:  0.2em 0 0em;}
  .title{margin: 0 0 0em; color: #9A6A28;}
}
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

  .s4-1 {
  @apply flex-col;
    height: auto;
    padding:0 0 5em 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .group1{
  width:sizem(310);
  margin: 2em auto 5em;
}
  .group2{
  width:sizem(310);
  margin: 0em auto 5em;}
  .group3{
  width:100%;}

  .main {
    padding: 0 sizem(30);
    width: 100%;
}
.txt {
  margin: 0em auto 2em auto;
}

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
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    caption: "RAYARD MIYASHITA PARK"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    caption: "MITSUI OUTLET PARK 林口"
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

