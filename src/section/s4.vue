<template>
  <article class="s4">
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
    <img src="./s4/en.svg" class="en" data-aos="zoom-in" data-aos-delay="0">
    <h2 class="title1" data-aos="zoom-in" data-aos-delay="100" >築居新化 國際視野</h2>
    <img src="./s2/bottom.svg" class="bottom" data-aos="zoom-in" data-aos-delay="200">
    <h2 class="title2" data-aos="zoom-in" data-aos-delay="300" >生活重回 自然原野</h2>
    <h4 class="subtitle" data-aos="zoom-in">一座試圖改寫新化美學的建築</h4>
    <p class="desc" data-aos="zoom-in" >科技未來全到位!南科門戶—北外環，連結市區與南部科學園區，基地位於雙匝道口間，分鐘輕達海安路匝道口直上北外環，科技新貴通勤負擔。</p>
 </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  height:size(1860);
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: column;
  background: url("./s4/bg.jpg") center;
  background-size: cover;
  .txt {
    @apply relative flex text-[#fff];
  z-index: 5;
    margin: 0 auto 2.5em auto;
  flex-direction: column;
  text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    text-shadow: 2px 2px 10px #000C;
  .en{
    height: 16.5em;
  }

  .title1{
    font-size: 3.5em;
    margin: 3em 0 0;
    line-height: 1.4;
    font-weight: 700;color: #F3DEB9;
  }
  .bottom{
    width: size(330);
    margin: 12.2em auto;}
  .title2{
    font-size: 3.5em;
    margin: 0em 0 4.1em;
    line-height: 1.4;
    font-weight: 700;color: #F3DEB9;
  }
  .subtitle{
    font-size: 2.28em;
    margin: 0em 0 .5em;
    font-weight: 700;color: #F3DEB9;
  }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
  @apply flex-col;
    padding: 0;
  font-size:sizem(13);
  height:sizem(762);
  background-image:url("./s4/bg_m.jpg");
  .txt {
    margin: .6em auto 0 auto;
    width:sizem(310);
  .en{
    height: 9.4em;
  }
  .title1{
    font-size: 1.9em;
    margin: 3.4em 0 0;
  }
  .bottom{
    width: sizem(132);
    margin: 7em auto;}
  .title2{
    font-size: 1.9em;
    margin: 0em 0 3.6em;
  }
  .subtitle{
    font-size: 1.3em;
  }
.desc{}
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

</script>
