<template>
  <article class="s7" ref="s7">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">鴻儀臻誠意</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">以誠信承載土地溫度  人情築就居家品質</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">鴻儀建設從銷售到設計，從開發到施工，細膩雕琢每一處細節，堅守【誠信為主、質量為優】的理念。用專業回應需求，用情感與土地對話，以【好地方、好緣份、重人情】的精神，將土地的價值轉化為家的溫度。代表作品包括龍潭五福莊園電梯別墅、宜蘭三星馥悅透天別墅、規劃中的台南南紡購物中心旁商圈大樓及台北副都心中央商辦，以專業、誠信與情感，打造理想生活的幸福藍圖。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :key="img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s7 {
  @apply relative flex items-center justify-center text-[#fff] bg-[#300b];
  width: 100%;
  height:auto;
  padding:9em 0 9em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;

}


.txt {
  .title{
    &::after,
    &::before{
      width: 8.3em;
    }
  }
}

  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
     left: calc(100% + 3em);
      justify-content: flex-start;
    color: #C5C5C5; 
    li button.is-active{
      color: #B78E63;
    }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
  @apply flex-col;
   // height: sizem(600);
    justify-content: space-around;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .img{position: absolute;top:sizem(300);left: auto;
    right:sizem(-155);width:sizem(260);bottom: auto;}

  .main {
    padding: 3em sizem(32.5) 3em sizem(32.5);
    width: 100%;
    flex-basis: auto;
}

.txt {
  .title{
    &::after,
    &::before{
      width: 1em;
    }
  }
}


  .slider {
    height: auto;
    width: 100%;

    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(5);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(250);
      
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
    img:new URL("./s7/1.webp", import.meta.url).href ,
    caption: "鴻儀建設"
  },
  {
    img:new URL("./s7/2.webp", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s7/3.webp", import.meta.url).href ,
    caption: "情境示意"
  },
  {
    img:new URL("./s7/4.webp", import.meta.url).href ,
    caption: "情境示意"
  },
  
]
</script>

