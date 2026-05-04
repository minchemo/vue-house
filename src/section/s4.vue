<template>
  <article class="s4">
    <div class="main">
      <div class="txt">
        <h4 class="title" data-aos="fade-up" data-aos-delay="200">戶戶景觀×低密度<br v-if="isMobile">  電梯寓所</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">白馬磁磚的深灰丁掛磚為主調，搭配白色系二丁掛磚與木紋線條勾勒層次，一樓正面外牆磚為白色文化石，沉穩中帶著溫度，頂部提籃設計結合夜間燈光計畫，讓建築在暮色中更顯立體與質感，單純22戶社區，鄰里單純、出入安靜，在城市裡，保留一份難得的從容與寧靜。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index">
          <img :src="img.img" :alt="img.caption">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s4 {
  @apply relative flex items-center justify-center ;
  width: 100%;
  height: auto;
  padding: 0em 0 3.5em 0;
  font-size: sizem(16);
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  background:#C8E632 url("./s3/bottommo.svg") no-repeat 0 100%;
  background-size: 100% auto;
      color:#1F1F1F;
  @media screen and (min-width: 768px) {
  background-image: url("./s3/bottom.svg");
  font-size: size(20);
  flex-direction: column;
  padding: 0em 0 13em 0;
  gap: 1.5em;
  }
   .txt  { 
      text-align: justify;
      width:sizem(310); 
  @media screen and (min-width: 768px) {
      text-align: center;
      width:size(1500); 

  }
    }
  .spot {
    position: absolute;
    top: sizem(120);
    right: sizem(-50);
    width: sizem(188);
    transform: rotate(-90deg);
    transform-origin: 100% 100%;
    pointer-events: none;
    z-index: 2;

    @media screen and (min-width: 768px) {
      top: size(290);
      right: size(-50);
      ;
      transform: rotate(0deg);
      width: size(600);
    }
  }

 

  .main {
    @apply flex;
    margin: 0;
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;
  }

  .txt {
    // margin: auto auto 3vw auto;
    padding: 0;

    .subtitle {
      font-weight: 400;
    }
  }

  // size(110)

  .slider {
    margin: 0 0 0 0;
    height: size(1000);
    width: size(1500);
@media screen and (max-width: 767px) {
    height: sizem(255);
    width: 100%;

}


    .splide__pagination {
      justify-content: center;
      bottom: -3em;
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
    img: new URL("./s4/1.webp", import.meta.url).href,
    caption: "建築外觀3D示意圖"
  },
  {
    img: new URL("./s4/2.webp", import.meta.url).href,
    caption: "建築外觀3D示意圖"
  },
  {
    img: new URL("./s4/3.webp", import.meta.url).href,
    caption: "建築外觀3D示意圖"
  },

]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>
