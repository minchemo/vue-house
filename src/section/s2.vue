

<template>
  <article class="s2">
    <div class="con" v-if="!isMobile">
      <img src="./s2/t1.svg" alt="t1" class="t1" data-aos="zoom-in" data-aos-delay="0">
      <img src="./s2/t2.svg" alt="t2" class="t2" data-aos="zoom-in" data-aos-delay="400">
  </div>

  <div class="con" v-else>
        <img src="./s2/t1m.svg" alt="title" class="t1" data-aos="zoom-in"  data-aos-delay="0">
        <img src="./s2/t2m.svg" alt="title" class="t2" data-aos="zoom-in" data-aos-delay="400">
        
  </div>

  <img src="./s2/city.svg" alt="city" class="city" v-if="!isMobile">
  <img src="./s2/citym.svg" alt="city" class="city" v-else>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex  justify-center text-[#FFF];
  width: 100%;
  height:auto;
  padding:7em 0 0 0;
  font-size:size(32);
  gap:4.4em;
  flex-direction: row;
    align-items:stretch;
  flex-wrap: wrap;


  .con{
  gap: size(150);
  display: flex;
  margin: 0 0 size(70) 0;
  flex-direction: column;
  z-index: 99;
  position: relative;


.t1{
    width: size(1466);
  }

  .t2{
    width: size(477);
  }
}




  



  .city{
    position: absolute;
    width: size(1920);
    right: size(0);
    top: size(0);
    z-index: 0;
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


  .con{gap:sizem(90);  margin: sizem(94) 0  sizem(30) 0;flex-direction:column;
  img{margin: 0 auto;}

  .t1{
    width: sizem(242);
  }

  .t2{
    width: sizem(204);
  }

  }
  
  


  .city{
    position: absolute;
    width: sizem(375);
    right: sizem(0);
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

