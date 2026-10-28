<template>
  <article class="s6-1" ref="s6-1">
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
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
         <h3 class="title" data-aos="fade-up" data-aos-delay="100">宏偉營造  甲級營造團隊</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="300">
          宏偉營造以甲級營造實力，20年來秉持嚴謹工藝精神，穩健佈局全球，以卓越的施工品質與結構安全，為台灣構築無數安心，永續地標。</p>
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


.s6-1 {
  @apply relative flex justify-center;
  width: 100%;
  height: auto;
  padding:0 0 sizem(20) 0;
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  background: #036EB5;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 6em 0;
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
      text-align: left;
      padding: 0;
      .title{
      font-size: 2em;

      }
    }

  }

  // size(110)

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
      left: calc(100% + 5em);
      justify-content: flex-start;
    }
  }
  #splide05-slide01 .caption{color: #000;}
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
  pagination: true,
  autoplay: true,
  interval: 6000,
  gap: 0,
//  drag: false
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s61/1.jpg", import.meta.url).href,
    caption: "代表業績：國家住都社宅案（五股好室B）"
  },
  {
    img: new URL("./s61/2.jpg", import.meta.url).href,
    caption: "代表業績：枋客文旅"
  },
  {
    img: new URL("./s61/3.jpg", import.meta.url).href,
    caption: "代表業績：英特格"
  },
  {
    img: new URL("./s61/4.jpg", import.meta.url).href,
    caption: "代表業績：新應材	"
  },
]
</script>