<template>
  <article class="s7">
<div class="txt">
    <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >新化正核心｜限量純三房<br>
一層<span>2</span>戶｜戶戶平車</h2>
    <img src="./s7/changji_logo.svg" class="changji_logo" data-aos="zoom-in" data-aos-delay="200" alt="長磯建設">
    <img src="./s7/en.svg" class="en" data-aos="zoom-in" data-aos-delay="200" alt="en">
 </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 {
  @apply relative overflow-hidden flex items-center justify-start text-white;
  width: 100%;
  height: size(604);
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: column;
  .txt {
    @apply relative flex text-[#fff];
  z-index: 5;
    margin: 0 ;
  flex-direction: column;
  text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
  .title{
    font-size: 3.5em;
    line-height: 1.2;
    font-weight: 700;color: #F3DEB9;
  text-align: center;
  span{font-size: 1.25em;display: inline-block;margin: 0 .1em 0 .1em;position: relative;top: .06em;}
  }
  .changji_logo{
    height: 2em;
    margin: 1.8em auto 5.7em;
  }
  .en{
    height: 4.1em;
  }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
  @apply flex-col  justify-center;
    padding: 0;
  height: sizem(350);
  font-size:sizem(14);

  .txt {
  .title{
    font-size: 1.9em;
  }
  .changji_logo{
    height: 1.2em;
    margin: 1.2em auto 3.5em;
  }
  .en{
    height: 2.3em;
  }
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
