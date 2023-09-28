<template>
  <article class="s9">
    <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >
      <img src="./s9/txt.svg" alt=""></h2>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s9 {
  @apply relative flex items-center justify-center;
  width: 100%;
  padding:3.5em 0;
  font-size:size(20);
  gap:3em;
  background: linear-gradient(70deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);
  
  // margin-bottom:8em;
  .title{

    img{width:size(672);}

  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
    height:auto;
  padding:3em 0;
    margin: 0;
  font-size:sizem(14);
  .title{

    img{width:sizem(300);}

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
const imgs = [
  {
    img:new URL("./s9/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "聽心苑2外觀3D示意圖"
  },
]
const options = {
  rewind: false,
  arrows: false,
  pagination:  imgs.length > 1 ? true : false,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

</script>
