<template>
  <article class="s2" ref="s2">
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
        <img src="./s2/slogo.png" alt="slogo" class="slogo" data-aos="fade-up" data-aos-delay="0">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">國際級企業總部<br>
          讓台灣被世界看見</h3>
        <img src="./s2/icon.svg" alt="icon" class="icon" data-aos="fade-up" data-aos-delay="400">
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          台灣已成國際經濟樞紐，需要對應高度的企業總部。<br>
          麗寶集團以50年深厚底蘊，打造ACE王牌計畫新商辦。</p>
      </div>
    </div>
    <picture>
      <source srcset="./s2/imgm.png" media="(max-width: 768px)">
      <img src="./s2/img.png" loading="lazy" class="img" data-aos="fade-up" data-aos-delay="800">
    </picture>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}


.s2 {
  @apply relative flex justify-center;

  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0 0 sizem(60) 0;
  flex-wrap: nowrap;
  margin-bottom: 0em;
  gap: 0em;
  align-items: center;
  color: #FFF;
  background: url("./s2/bg.svg");
    background-size: sizem(56) auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 6.9em 0 6.9em 0;
    flex-wrap: wrap;
    gap: 4em;
    background-size: size(113) auto;
  }

  .main {
    @apply flex;
    padding: 0 sizem(31);
    width: 100%;
    margin: 0;
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
      }

    .slogo {
      width: sizem(208);
      margin-bottom: 2em;

      //  margin-top: 1em;
      @media screen and (min-width: 768px) {
        width: size(390);
        margin-bottom: 3.1em;
      }
    }

  }


  .slider {
    margin:0;
      width: 100%;
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

  .img {
    width: sizem(310);

    @media screen and (min-width: 768px) {
      width: size(1500);
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
  pagination: false,
  autoplay: false,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s2/1.webp", import.meta.url).href,
    caption: "台中-麗寶樂園購物街"
  },
  {
    img: new URL("./s2/2.webp", import.meta.url).href,
    caption: "麗寶樂園"
  },
  {
    img: new URL("./s2/3.webp", import.meta.url).href,
    caption: "福容VOCO酒店"
  },
  {
    img: new URL("./s2/4.webp", import.meta.url).href,
    caption: " 麗寶賽車場"
  },
  {
    img: new URL("./s2/5.webp", import.meta.url).href,
    caption: "福容大飯店 淡水漁人碼頭"
  },
]
</script>