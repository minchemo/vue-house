<template>
  <article class="s6" ref="s6">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">優質建商 居住翻轉安心宅</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400"><span>淳真國際</span>用最真誠的心，為每個客戶打造夢想中的家。精準選地眼光、建築厚工實在，淳真年代1~6期系列於台南遍地開花，口碑極佳。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile && imgs.length > 1">
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



.s6 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:9.5em 0 4em 0;
  font-size:size(19);
  gap:3em;
  flex-wrap: wrap;
    flex-direction:row-reverse;


  .img{position: absolute;bottom:size(-30);left:size(-270);width:size(660);
  &::before{content: "";width:120%;
  height: 20%;border-radius: 50%;background: #1691CF;display: block;
  position: absolute;bottom: -10%;left: -10%;
}
  img{width: 100%;position: relative;}}
  .main {
    @apply relative flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
  z-index: 3;
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
      left: calc(100% + 3em);
      justify-content: flex-start;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s6 {
@apply flex-col;
  height: auto;
  padding: 0;
font-size:sizem(15);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
flex-direction:column-reverse;

.main {
    padding: 0 sizem(30);
    width: 100%;
}
.txt {margin: 2em auto 6.5em;
  width: 100%;
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

const imgs = [
  {
    img:new URL("./s6/1.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
]
const options = {
  rewind: false,
  arrows: false,
  pagination: imgs.length > 1,
  autoplay: imgs.length > 1,
  interval: 4000,
  gap: 10,
  type: 'loop',
  drag: imgs.length > 1
}
</script>

