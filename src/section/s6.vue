<template>
  <article class="s6" ref="s6">
    <div class="shine-row">
      <div class="shine-dot dot-y">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-b">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-iri">
        <div class="shine-inner"></div>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <div class="main">
      <div class="txt">
        <img src="./s6/t1.svg" alt="en" class="t1" data-aos="fade-up" data-aos-delay="0">
        <h3 class="title" data-aos="fade-up" data-aos-delay="100">前店後廠自由港<br>
串聯全球供應鏈</h3>
        <img src="./s2/icon.svg" alt="icon" class="icon" data-aos="fade-up" data-aos-delay="200">
        <p class="desc" data-aos="fade-up" data-aos-delay="300">
          台中正迎來轉型機遇，全力打造強大的商務引擎。<br>
          麗寶ACE以樞紐之姿串聯人流與資源，<br v-if="isMobile">將產品推展至全球，<br>
與這座城市一同昂首榮耀。</p>
      </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}


.s6 {
  @apply relative flex justify-center;
  width: 100%;
  height: auto;
  padding:0 0 sizem(20) 0;
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  color: #FFF;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 5.5em 0 7.5em 0;
 //   padding: 6.9em 0 6.9em 0;
    flex-wrap: wrap;
    gap: 4em;
    background-size: size(113) auto;
  }

  .main {
    @apply flex;
    padding: 0 sizem(32.5);
    width: 100%;
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;

    @media screen and (min-width: 768px) {
      padding: 0;
      width: size(590);
    }
  }

  .txt {
    padding: sizem(40) 0 sizem(40);
    @media screen and (min-width: 768px) {
      padding: 0;
      .title{
      font-size: 2em;

      }
    }

  }

  // size(110)

  .slider {
    margin:0;
      width:100%;
      height: auto;
      @media screen and (min-width: 768px) {
    width: size(840);
      }

    .slide-item {
      @apply bg-cover;
        width: 100%;
        height: sizem(250);
      @media screen and (min-width: 768px) {
      width: size(840);
      height: size(560);

      }

    }

    .splide__pagination {
      left: calc(100% + 6em);
      justify-content: flex-start;
    }
  }
  .shine-row {
    bottom: 3.5em;
    right: -.5em;
    @media screen and (min-width: 768px) {
    bottom: 1.5em;
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

const splide = ref()

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  autoplay: false,
  interval: 4000,
  gap: 0,
//  drag: false
  type: 'loop'
}

const imgs = [
  /*{
    img: new URL("./s6/1.png", import.meta.url).href,
    caption: "交通圖"
  },*/
  {
    img: new URL("./s6/2.webp", import.meta.url).href,
    caption: "台中車站"
  },
  {
    img: new URL("./s6/3.jpg", import.meta.url).href,
    caption: "台中機場 經電腦修飾"
  },
  {
    img: new URL("./s6/4.jpg", import.meta.url).href,
    caption: "台中港 經電腦修飾"
  },
]
</script>