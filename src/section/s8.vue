<template>
  <article class="s8">
    <img src="./s4/hr.webp" class="hr" alt="亮光">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">「活建築」＋<br v-if="isMobile">「藝術建築」 別墅名作</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">以公園旁活氧綠憇基地，打好健康空間好基底，樹海棟距藏風納氣，「三井三錦」以生活好質，以及門當戶對的鄰里素質，敬獻層峰最佳名宅風範。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
  @apply relative flex flex-col items-center justify-center text-[#fff] bg-[#292A2B];
  width: 100%;
  // height: size(800);
  padding:6em 0 8em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;
  .hr{position: absolute;
  width:100%;bottom: size(-20);left:size(0);pointer-events: none;z-index:2;
  }
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto;
  width: size(1500);
}

  .slider {
    margin: 0;
    flex-basis: size(843);
      height: size(843);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(843);
      
    }

    .splide__pagination{
      justify-content: flex-end;
      bottom: -2em;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
  @apply flex-col;
    height: auto;
    padding: 0 0 3em 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
gap:0em;
  .hr{
  width:sizem(500);bottom: sizem(-8);left:sizem(-110);
  }

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.txt {margin: 4.4em auto 1.3em;width: 100%;
  .title{margin-left: -.4em;}
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
    img:new URL("./s8/1.webp", import.meta.url).href ,
    caption: "環示圖"
  },
  {
    img:new URL("./s8/2.webp", import.meta.url).href ,
    caption: "環示圖"
  },
]
</script>

