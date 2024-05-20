<template>
  <article class="s3" ref="s3">
    <img src="./s3/hr.webp" class="hr" alt="亮光">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">千億建設  聚富核心</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">鳳山重磅建設一級地段，匯聚三井LaLaport、衛武營藝術之丘、空中鳳城、 大東文創之星…國際級購物中心、高雄藝術新門戶、首宗雙捷運聯開案...鑽石領地前景無限。</p>
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



.s3 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:8em 0 9em 0;
  font-size:size(19);
  gap:3em;
  flex-wrap: wrap;
  .hr{position: absolute;
  width:size(2048);bottom: size(-104);left:size(-64);pointer-events: none;z-index: 2;
  }

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
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
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
  @apply flex-col;
    height: auto;
    padding: 0 0 3em;
  font-size:sizem(15);
  flex-wrap:nowrap;
  gap:0em;
  .hr{
  width:sizem(627);bottom: sizem(-60);left:sizem(-55);
  }

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {margin: 4.4em auto 1.3em;
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
    img:new URL("./s3/1.webp", import.meta.url).href ,
    caption: "重陽橋"
  },
  {
    img:new URL("./s3/2.webp", import.meta.url).href ,
    caption: "北環段捷運情境示意圖"
  },
  {
    img:new URL("./s3/3.webp", import.meta.url).href ,
    caption: "新蘆線捷運徐匯中學站"
  },
]
</script>

