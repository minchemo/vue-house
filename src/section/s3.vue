<template>
  <article class="s3" ref="s3">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">斗六青年站出來<br v-if="isMobile"> 成家跟我這樣買</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200"><svg viewBox="0 0 30 50" fill="#007DB9" xmlns="http://www.w3.org/2000/svg">
<path d="M8.8,27.4l-0.3-0.6c7.4-7.5,16.9-6.5,20.1-0.4C32.7,34.2,28,49,13.5,49C-10.5,49,0,2.5,26.6,0l0.2,0.5	C5.7,3.5-2.1,47,13.4,47c11.5,0,13.1-13.7,10.3-19.3C21.1,22.6,13.4,22.6,8.8,27.4z"/>
</svg>
大看點報哩哉 輕鬆成家真的溜</h4>
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
  padding:3.1em 0 0 0;
    background-image: url("./s3/bg.jpg");
    font-size:size(20);
  }

  .txt {text-align: center;
    .title{margin-bottom: .1em;}
    .subtitle{font-size: 1em;
      font-weight: 500;
      svg{height: 2em;display: inline-block;vertical-align: bottom;
      }
      
  @media screen and (min-width: 768px) {
    font-size: 1.25em;
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

