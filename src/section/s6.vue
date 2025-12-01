<template>
  <article class="s6" ref="s6">
    <div class="semicircle"></div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">城市書香森呼吸<br>
          日常自有風景</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="0">Breathe with the City</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          在經貿繁華核心，靜靜綻放一處書香與綠意共生的角落。幼兒園到大學明星學區聚落，轉身即是67公頃中央公園森態，日常與自然書卷為伴，城心之中難得的靜謐生活場域。</p>
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



.s6 {
  @apply relative flex flex-row-reverse items-center justify-center bg-[#FAE3BF];
  width: 100%;
  height: auto;
  padding: 11em 0 10em 0;
  font-size: size(20);
  gap: 4em;
  flex-wrap: wrap;
  //overflow: hidden;
  //flex-direction:row-reverse;

  .spot {
    position: absolute;
    top: sizem(270);
    right: sizem(0);
    width: sizem(188);
    pointer-events: none;
    z-index: 2;
  @media screen and (min-width: 768px) {
    top: size(10);
    left: 0;
    width: size(420);
    
  }
  }

  .semicircle {
    position: absolute;
    top: sizem(-80);
    right: sizem(-375);
    aspect-ratio: 1/1;
    pointer-events: none;
    width: sizem(750);
    background: linear-gradient(180deg, #de680866 0%, #DF6A0700 70%);
    border-radius: 50%;
    z-index: 1;
  @media screen and (min-width: 768px) {
    top: 0;
    right: size(-777);
    width: size(1554);
  }
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
    padding: 0 0 0 0;

    .subtitle {
      font-weight: 400;
    }
  }


  .slider {
    margin: 0;
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
      left: calc(100% + 3em);
      justify-content: flex-start;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s6 {
    @apply flex-col;
    height: auto;
    padding: 0;
    font-size: sizem(15);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;

    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 3em auto 2em;
      padding: 0;
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
    img: new URL("./s6/1.jpg", import.meta.url).href,
    caption: "子曰幼兒園/現場實景"
  },
  {
    img: new URL("./s6/2.jpg", import.meta.url).href,
    caption: "大鵬國小/現場實景"
  },
  {
    img: new URL("./s6/3.jpg", import.meta.url).href,
    caption: "大德國中/現場實景"
  },
  {
    img: new URL("./s6/4.jpg", import.meta.url).href,
    caption: "中央公園/現場實景"
  },
  {
    img: new URL("./s6/5.jpg", import.meta.url).href,
    caption: "中國醫大水湳校區/現場實景"
  },
  {
    img: new URL("./s6/6.jpg", import.meta.url).href,
    caption: "老樹公園/現場實景"
  },
]
</script>