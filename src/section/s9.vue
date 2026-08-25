<template>
  <article class="s9" ref="s9">
    <div class="shine-row">
      <div class="shine-dot dot-b">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-iri">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-y">
        <div class="shine-inner"></div>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <div class="main">
      <div class="txt">
        <img src="./s9/t1.svg" alt="en" class="t1" data-aos="fade-up" data-aos-delay="0">
        <h3 class="title" data-aos="fade-up" data-aos-delay="100">當代地標建築<br>
極緻美學思維</h3>
        <ul class="desc" data-aos="fade-up">
          <li>
            <span>建築外觀｜</span>寬泉建築師事務所  以劃時代地標享譽業界，融匯自然與人文，構築永續空間。
          </li>
          <li>
            <span>景觀設計｜</span>磐石景觀  引領當代風潮，以生態思維將四季風光化為無價景觀藝術。
          </li>
          <li>
            <span>公共空間｜</span>十邑設計  深耕高端豪宅公設，掌控光影與材質比例，定義頂級生活美學。
          </li>
          <li>
            <span>藝術雕塑｜</span>竹田光幸  日本國寶級木雕大師，以細膩刀法賦予溫潤永恆的生命力。
          </li>
        </ul>
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


.s9 {
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
    flex-direction: column;
  padding: 4em 0 9.5em 0;
 //   padding: 6.9em 0 6.9em 0;
    flex-wrap: wrap;
  gap: 2.3em;
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
      width: size(1500);
    }
  }

  .txt {
      display: flex;
      flex-wrap: wrap;
    padding: sizem(40) 0 sizem(40);
      .t1{margin: auto 1.5em auto 1em;}
      .title{
        margin: auto auto auto 0;
      font-size: 2em;

      }
      .desc{text-align: justify;
      span{color: #BC8518; white-space: nowrap;}}
    @media screen and (max-width: 767px) {
      .desc{margin: 1.5em 0 0;
        li{display: flex;margin: .2em auto;}
      }

    }
    @media screen and (min-width: 768px) {
//width: 100%;
    padding: 2.5em 0 0;
      .t1{margin: auto 2.5em auto 3.4em;}
      .title{
        margin: auto auto auto 0;
        letter-spacing: 0.03em;

      }
      .desc{
        letter-spacing: 0.01em;
      }
    }

  }

  // size(110)

  .slider {
    margin:0;
      width:100%;
      height: auto;
      @media screen and (min-width: 768px) {
    width: size(1500);
      }

    .slide-item {
      @apply bg-cover;
        width: 100%;
        height: sizem(305);
      @media screen and (min-width: 768px) {
      height: size(793);

      }

    }

    .splide__pagination {
      left: calc(100% + 6em);
      justify-content: flex-start;
    }
  }
  .shine-row {
    top: .6em;
    right: -.5em;
    display: none;
    @media screen and (min-width: 768px) {
  display: flex;
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
  drag: false
  //type: 'loop'
}

const imgs = [
  {
    img:globals.$isMobile()? new URL("./s9/1m.jpg", import.meta.url).href: new URL("./s9/1.jpg", import.meta.url).href,
    caption: ""
  },
]
</script>