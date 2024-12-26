<template>
  <article class="s3" ref="s3">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">斗六青年站出來<br v-if="isMobile"> 成家跟我這樣買</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">6大看點報哩哉 輕鬆成家真的溜</h4>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex  justify-center text-[#007DB9];
  width: 100%;
  height:sizem(863);
  padding:3.2em 0 0 0;
  font-size:sizem(16);
  background: url("./s3/bgm.jpg") center;
  background-size: cover;

  @media screen and (min-width: 768px) {
  height:size(1080);
  padding:2.5em 0 0 0;
    background: url("./s3/bg.jpg");
  font-size:size(24);
  }

  .txt {text-align: center;
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
    img:new URL("./s3/1.webp", import.meta.url).href ,
    caption: "重陽橋"
  },
  {
    img:new URL("./s3/2.webp", import.meta.url).href ,
    caption: "北環段捷運情境示意圖"
  },
  {
    img:new URL("./s3/3.webp", import.meta.url).href ,
    caption: "新蘆線捷運徐匯中學站"
  },
]
</script>

