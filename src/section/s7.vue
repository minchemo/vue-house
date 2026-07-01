<template>
  <article class="s7 " ref="s7">
    <div class="main">
      <div class="txt">
        <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">繁華核心 魅力生活 一見傾心</h3>
        <div class="subtitle" data-aos="fade-up" data-aos-delay="0">公園、美食、藝文、捷運，近在身邊風華自在盛放</div>
        <p class="desc" data-aos="fade-up" data-aos-delay="0">六合夜市、南華商圈繁華在側，捷運橘線如雙臂舒展，<br
            v-if="isMobile">駁二藝術特區、文化中心左右輝映，<br>
          一路延伸至衛武營國家藝文中心，匯聚視聽焦點，<br v-if="isMobile">
          以最高規格的款待——獻給真正懂生活的您！</p>
        <div class="en font-['Noto_Serif_TC',serif]">CULTURAL HUB</div>
      </div>
    </div>

    <div class="slider">
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



.s7 {
  @apply relative flex items-center justify-center text-[#fff] bg-[#A4A428];
  width: 100%;
  height: auto;
  padding: 4em 0 1em 0;
  font-size: size(22);
  gap: 2.3em;
  flex-wrap: wrap;
  //overflow: hidden;
  flex-direction: column;

  .txt {
    text-align: center;



    .en {
      position: absolute;
      top: size(-50);
      left: 13em;
      width: 9em;
      transform: rotate(90deg);
      transform-origin: 0 0;
    }
  }




  .slider {
    // background: #fff;
    margin: 0;
    width: size(1500);
    height: size(680);
    overflow: hidden;
    border-radius: 0;
    // border: size(3) solid #7C519F;
    //  padding: size(10);

    .slide-item {
      @apply bg-cover;
      width: 100%;
      height: size(600);

    }

    .splide__pagination {
      //   left: calc(100% + 3em);
      bottom: -2.2em;
      justify-content: flex-start;
      color: #fff;
      z-index: 10;
    }
  }


}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s7 {
    @apply flex-col;
    height: auto;
    font-size: sizem(12);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;
    padding: 5em 0 0;

    .txt {
      margin-bottom: 3em;

      .en {
        top: sizem(395);
        left: -1em;
        width: 9em;
        transform: rotate(0deg);
        transform-origin: 0 0;
      }
    }


    .slider {
      height: auto;
      width: 100%;
      padding: 0;
      border: 0;
      border-radius: 0;


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
    img: isMobile ? new URL("./s7/1m.webp", import.meta.url).href : new URL("./s7/1.webp", import.meta.url).href,
    caption: "情境示意圖"
  },
  {
    img: isMobile ? new URL("./s7/2m.webp", import.meta.url).href : new URL("./s7/2.webp", import.meta.url).href,
    caption: "六合國際觀光夜市"
  },
  ...(isMobile ? [{
    img: new URL("./s7/3m.webp", import.meta.url).href,
    caption: ""
  }] : []),
]
</script>