

<template>
  <article class="s2">
    <img src="./s2/t.svg" alt="t" class="t" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s2/lighten.png" alt="lighten" class="lighten" data-aos="zoom-in" data-aos-delay="500">
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex bg-[#0D3A79] justify-center text-[#FFF];
  width: 100%;
  height:auto;
  padding:8em 0 6em 0;
  font-size:size(32);
  gap:4.4em;
  flex-direction: row;
    align-items:stretch;
  flex-wrap: wrap;

  .t{
    position: relative;
    z-index: 3;width:size(800);
  }
  .lighten{
    position: absolute;
    top: 8vw;left: 0;right: 0;margin: auto;mix-blend-mode: lighten;
    z-index: 3;width:size(860);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
    height: auto;
    padding:9em 0 2em 0;
  font-size:sizem(20);
  flex-wrap:nowrap;
  margin-bottom:0em;
  .t{
    position: relative;
    z-index: 3;width:sizem(318);
  }
  .lighten{
    position: absolute;
    top: 35vw;left: 0;right: 0;margin: auto;mix-blend-mode: lighten;
    z-index: 3;width:sizem(350);
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
  /*{
    img:new URL("./s4/0.jpg", import.meta.url).href ,
    caption: "中華西路接軌九份子重劃區、86快速道路"
  },*/
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

