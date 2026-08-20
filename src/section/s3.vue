<template>
  <article class="s3" ref="s3">
    <div class="shine-row">
      <div class="shine-dot dot-y">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-iri">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-b">
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
        <img src="./s3/art.svg" alt="en" class="en" data-aos="fade-up" data-aos-delay="0">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">藝術靈魂</h3>
        <hr class="hr" data-aos="fade-up" data-aos-delay="400" />
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          攜手麗寶文化藝術基金會，<br>
          讓藝廊美學融入辦公日常，<br>
          淬鍊美學品味。</p>
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


.s3 {
  @apply relative flex justify-center;
  width: 100%;
  height: auto;
  padding: sizem(60) 0 sizem(20) 0;
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  font-size: sizem(13);

  @media screen and (min-width: 768px) {
    font-size: size(30);
    flex-direction: row;
    padding: 5.5em 0;
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

      .title {
        font-size: 2em;

      }
    }

  }

  // size(110)

  .slider {
    margin: 0;
    width: sizem(310);
    height: auto;

    @media screen and (min-width: 768px) {
      width: size(840);
    }

    .slide-item {
      @apply bg-cover;
      width: 100%;
      height: sizem(207);

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
    top: 5.6em;
    left: -.5em;
      @media screen and (min-width: 768px) {
    top: 1.3em;
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
    img: new URL("./s3/1.jpg", import.meta.url).href,
    caption: ""
  },
]
</script>