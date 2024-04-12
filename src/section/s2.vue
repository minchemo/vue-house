

<template>
  <article class="s2">
    <div class="main">
      <div class="txt">
        <p class="desc" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500">如何打造永續生存的韌性城市才是解決之道，也是全世界都在努力找尋的解方;看看世界想想台灣，從深耕建築出發，我們要更積極推動地球解方。找出『地球解方』的兩把鑰匙：提升能效與近零碳，從源頭設計管控，解決因極端氣候造成的問題，實現永續發展近零碳1+能效建築。唯有我們先做好準備才能防範於未然，衷心希望我們的 地球與下一代都能更好。</p>

      </div>
    </div>
    <div class="timg">
<img src="./s1/t2.svg" alt="title" class="t2" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="0">
<img src="./s1/t3.svg" alt="title" class="t3" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="0">
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex  justify-center text-[#FFF];
  width: 100%;
  height:auto;
  padding:7em 0 7em 0;
  font-size:size(32);
  gap:4.5em;
  flex-direction: row;
    align-items:stretch;
  flex-wrap: wrap;


  .main {
    margin: auto 0;
    flex-basis: size(523);
    .txt{text-align: justify}
}
  .timg {
    @apply flex;
  flex-direction: column;
    width: size(735);
    height: auto;margin:.5em 0;
    text-align: center;justify-content:space-between;
    .t2{width: size(735);}
    .t3{width: size(588);margin:auto auto 0;}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
    height: auto;
    padding:1em 0;
  font-size:sizem(14);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0;


  .main {
    padding: 0;
    width: sizem(222);
    margin: auto auto 4em auto;
}
      .txt {
    line-height: 2.3;
  }
  .timg {
    margin:.5em auto;
    width: auto;
    .t2{width: sizem(295); margin-bottom: 1em;}
    .t3{width: sizem(238);margin:auto auto 0;}
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

