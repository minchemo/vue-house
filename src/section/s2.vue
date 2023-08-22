<template>
  <article class="s2">
   <!-- <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-in">SMILE EUROPE</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in" data-aos-delay="200" v-html="img.title"></h3>
        <p data-aos="zoom-in" data-aos-delay="400" v-html="img.desc"></p>
      </div>
      <span class="caption" v-html="img.caption"></span>
        </SplideSlide>
      </Splide>
    </div>
    <img class="bg2" src="./s2/bg2.png" alt="" srcset="">
-->
<div class="txt">
    <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >根植新化 繁華核心</h2>
    <img src="./s2/en.svg" class="en" data-aos="zoom-in" data-aos-delay="200">
    <h4 class="subtitle" data-aos="zoom-in" data-aos-delay="400">南科園區｜繁華市心｜高鐵願景</h4>
 </div>
    <img src="./s2/bottom.svg" class="bottom" data-aos="zoom-in" data-aos-delay="0">
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  min-height: size(800);
  max-height: size(1020);
  height: calc(100vh - 3.125vw);
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: column;
  background: url("./s2/bg2.jpg") 50% 70%;
  background-size: cover;
  .txt {
    @apply absolute flex text-[#fff];
  z-index: 5;
    margin: 0;top: 5em;left: 0;right: 0;
  flex-direction: column;
  text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
  .title{
    font-size: 3.5em;
    margin: 0 0 .6em;
    line-height: 1.4;
    font-weight: 700;color: #F3DEB9;
  text-align: center;
  }
  .en{
    height: 4.1em;
  }
  .subtitle{
    font-size: 2.28em;
    margin: 1.5em 0 .6em;
    font-weight: 700;
  }
  }
  .bottom{position: absolute;
    width: size(330);
    margin: 0 auto;bottom:3em;left: 0;right: 0;}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
  min-height: sizem(0);
  max-height: sizem(1080);
  height: sizem(500);
  font-size:sizem(13);
  .txt {
    top: 4em;
  .title{
    font-size: 1.9em;
  }
  .en{
    height: 2.4em;
  }
  .subtitle{
    font-size: 1.3em;
  }
  }
  .bottom{
    width: sizem(160);}

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
</script>
