<template>
  <article class="s5 " ref="s5">
    <div class="main">
      <div class="txt">
        <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">捷運雙線 · 自在切換</h3>
        <div class="subtitle" data-aos="fade-up" data-aos-delay="0">精彩生活 一鍵啟動</div>
        <p class="desc" data-aos="fade-up" data-aos-delay="0">坐擁中山路×中正路雙軸，<br v-if="isMobile" />捷運紅線串連高鐵、機場兩大門戶，<br
            v-if="isMobile" />捷運橘線漫遊駁二、文化中心、衛武營，<br v-if="isMobile" />藝文風景一路綻放。</p>
        <div class="en font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">Easily Accessible</div>
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



.s5 {
  @apply relative flex items-center justify-center text-[#fff] bg-[#5D8EB3];
  width: 100%;
  height: auto;
  padding: 4em 0 2.7em;
  font-size: size(22);
  gap: 2.3em;
  flex-wrap: wrap;
  //overflow: hidden;
  flex-direction: column;

  .txt {
    text-align: center;



    .en {
      position: absolute;
      top: size(760);
      left: calc(50% - 6.5em);
    }
  }




  .slider {
    // background: #fff;
    margin: 0;
    width: size(1500);
    height: size(670);
    overflow: hidden;
    border-radius: 0 size(180) 0 0;
    // border: size(3) solid #7C519F;
    //  padding: size(10);


    .slide-item {
      @apply bg-cover;
      width: 100%;
      height: size(630);

    }

    .splide__pagination {
      //   left: calc(100% + 3em);
      bottom: -2.2em;
      justify-content: flex-end;
      color: #fff;
      z-index: 10;
    }
  }


}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s5 {
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
        left: calc(50% - 6em);
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

const imgs = computed(() => [
  {
    img: isMobile.value ? new URL("./s5/1.jpg", import.meta.url).href : new URL("./s5/1.webp", import.meta.url).href,
    caption: "情境示意圖"
  },
  {
    img: isMobile.value ? new URL("./s5/2.jpg", import.meta.url).href : new URL("./s5/2.webp", import.meta.url).href,
    caption: "情境示意圖"
  },
  {
    img: isMobile.value ? new URL("./s5/3.jpg", import.meta.url).href : new URL("./s5/3.webp", import.meta.url).href,
    caption: "情境示意圖"
  },
]);
</script>