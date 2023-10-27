<template>
  <article class="s3" ref="s3">
<div class="txt font-['Jost']"><span>THE FIRST, </span>THE INTERNATIONAL</div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:size(1080);
  padding:0 0 7em 0;
  font-size:size(18);
  flex-wrap: wrap;
  background: url("./s3/bg.jpg") center;
  background-size: auto 100%;z-index: 5;
.txt {text-align: center;font-size:size(52);letter-spacing: 0.06em;font-weight:300;
  margin: 0 auto 8.5em;
  span{font-weight: 500;}
}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
  @apply flex-col;
    height:sizem(400);
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
.txt {font-size:sizem(19);
  margin: 0 auto 13.5em;
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
    img:new URL("./s3/1.jpg", import.meta.url).href ,
    caption: "台南市政府"
  },
  {
    img:new URL("./s3/2.jpg", import.meta.url).href ,
    caption: "新光三越"
  },
  {
    img:new URL("./s3/3.jpg", import.meta.url).href ,
    caption: "夏慕尼"
  },
  {
    img:new URL("./s3/4.jpg", import.meta.url).href ,
    caption: "燦坤"
  },
  {
    img:new URL("./s3/5.jpg", import.meta.url).href ,
    caption: "家樂福-安平店"
  },
  {
    img:new URL("./s3/6.jpg", import.meta.url).href ,
    caption: "碳佐麻里"
  },
]
</script>

