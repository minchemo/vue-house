<template>
  <article class="s4">
<div class="txt">
    <img src="./s4/en.svg" class="en" data-aos="zoom-in" data-aos-delay="0">
    <h2 class="title1" data-aos="zoom-in" data-aos-delay="100" >築居新化 國際視野</h2>
    <img src="./s2/bottom.svg" class="bottom" data-aos="zoom-in" data-aos-delay="200">
    <h2 class="title2" data-aos="zoom-in" data-aos-delay="300" >生活重回 自然原野</h2>
    <h4 class="subtitle" data-aos="zoom-in">一座試圖改寫新化美學的建築</h4>
    <p class="desc" data-aos="zoom-in" >「建築除了提供住戶優質的生活，更是對城市景觀的責任。」<br>
投身台南建築超過30年，長磯建設一路堅持追求完美，只為成為一座城市進步的推手，而且永不停歇，讓美的種子，在新化盛開。</p>
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
