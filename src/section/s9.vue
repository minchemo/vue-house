<template>
  <article class="s9" ref="s9">

    <img src="./s3/spot.png" class="spot">
    <div class="semicircle" v-if="!isMobile"></div>
    <img src="./s9/en.svg" class="en">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200"><img src="./s9/icon.svg" alt="icon" class="icon" />麗寶集團✕麗盛建設</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="0">深耕全台近半世紀硬實力</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          橫跨飯店、主題商場、不動產等多元領域，<br>
近50年深厚建築實力，<br>
自有甲級營造廠與精準選址眼光，<br>
打造長住久安的理想宅。</p>
<img src="./s9/img.svg" alt="img" class="img" />
      </div>
    </div>
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

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s9 {
  @apply relative flex items-center justify-center bg-[#E6E6E6];
  width: 100%;
  height: auto;
  padding: 11em 0 7em 0;
  font-size: size(20);
  gap: 4em;
  flex-wrap: wrap;
  flex-direction: row;
  .en{
    position: absolute;
    top: sizem(0);
    left: sizem(0);
    width: 100%;
    opacity: .53;
    z-index: 2;
  @media screen and (min-width: 768px) {
    left: size(15);
    width: size(910);

  }
  }

  .spot {
    position: absolute;
    top: sizem(120);
    right:sizem(-50);
    width: sizem(188); 
    transform: rotate(-90deg);
    transform-origin: 100% 100%;
    pointer-events: none;
    z-index: 2;
  @media screen and (min-width: 768px) {
    top: size(-520);
    right:0;
    width: size(760); }
  }

  .semicircle {
    position: absolute;
    top: sizem(-80);
    left: sizem(-375);
    aspect-ratio: 1/1;
    pointer-events: none;
    width: sizem(750);
    background: linear-gradient(180deg, #fff3 0%, #fff0 70%);
    border-radius: 50%;
    z-index: 1;
  @media screen and (min-width: 768px) {
    top: size(-0);
    left: size(-777);
    width: size(1554);}
  }

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
    width: size(590);
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;
  }

  .txt {
    // margin: auto auto 3vw auto;
    padding: 0;
    text-align: center;
    .title {
      .icon {
        width: auto;
        height: 1.4em;
        margin-right:.3em;
        vertical-align: middle;
      }
    }

    .subtitle {
      font-weight: 400;
    }
.img{width: 100%;margin-top: 3em;}
  }

  // size(110)

  .slider {
    margin: 0 0 0 0;
    flex-basis: size(840);
    width: size(840);
    height: size(560);

    .slide-item {
      @apply bg-cover;
      flex-basis: size(840);
      width: size(840);
      height: size(560);

    }

    .splide__pagination {
      left:0;
      bottom: -3em;
      justify-content:flex-start;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s9 {
    @apply flex-col;
    height: auto;
    padding: 0;
    font-size: sizem(15);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;


    .main {
      padding: 0 sizem(10);
      width: 100%;
    }

    .txt {
      margin: 3em auto 2em;
      padding: 0 ;
    .title {
      margin: 0 -1em;
    }
    .subtitle {margin-bottom: 1.5em;
    }
.img{margin: 2em auto -1em auto;}
    }


    .slider {
      height: auto;
      width: 100%;

      .caption {
        font-size: sizem(12);
        right: sizem(5);
        bottom: sizem(5);
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
    img: new URL("./s9/1.jpg", import.meta.url).href,
    caption: "麗寶 Outlet Mall"
  },
  {
    img: new URL("./s9/2.jpg", import.meta.url).href,
    caption: "福容大飯店"
  },
  {
    img: new URL("./s9/3.jpg", import.meta.url).href,
    caption: "麗盛大璽"
  },
  {
    img: new URL("./s9/4.jpg", import.meta.url).href,
    caption: "麗盛南京"
  },
  {
    img: new URL("./s9/5.jpg", import.meta.url).href,
    caption: "微笑歐洲"
  },
]
</script>