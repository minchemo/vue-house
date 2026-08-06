<template>
  <article class="s6 " ref="s6">
    <div class="main">
      <div class="txt">
        <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">千坪歐式雙塔美學<br v-if="isMobile"> 古典拱廊對話當代</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="0">千坪壯闊基地，雙塔雄偉聳立；花崗岩基座融合新古典結構理性與巴洛克裝飾雕刻，散發出古羅馬圓拱門廊的恢弘氣勢，<br v-if="!isMobile">
浮雕和山牆展現出精巧而富有戲劇性的細節；垂直線條挺拔而上，結合框景式立面，打造鶯歌最具藝術美感的歐式巨擘地標。</p>
      </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s6 {
  @apply relative flex text-[#fff] bg-[#A4A428];
  width: 100%;
  height: auto;
  padding: 6em 0 1em 0;
  font-size: size(22);
  gap: 2.3em;
  flex-wrap: wrap;
  //overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #234F98 url('./s6/bg.webp') no-repeat center center;
  background-size: cover;
  height: size(1244);
@media screen and (max-width: 767px) {
    background-position: center bottom;
  background-size:sizem(534) auto;
}

  .txt {
    text-align: center;
@media screen and (max-width: 767px) {
    width: sizem(310);

}
  }

@media screen and (max-width: 767px) {
    height: sizem(540);
    font-size: sizem(13);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;
    padding: 5em 0 0;
}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
/*
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s6 {
    @apply flex-col;
    height: auto;
    font-size: sizem(12);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;
    padding: 5em 0 0;

    .txt {
      margin-bottom: 3em;

    }
  }
}
*/
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

const imgs = computed(() => [
  {
    img: isMobile.value ? new URL("./s6/1m.webp", import.meta.url).href : new URL("./s6/1.webp", import.meta.url).href,
    caption: "情境示意圖"
  },
  {
    img: isMobile.value ? new URL("./s6/2m.webp", import.meta.url).href : new URL("./s6/2.webp", import.meta.url).href,
    caption: isMobile.value ?"六合國際觀光夜市":""
  },
  ...(isMobile.value ? [{
    img: new URL("./s6/3m.webp", import.meta.url).href,
    caption: ""
  }] : []),
]);
</script>