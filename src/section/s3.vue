<template>
  <article class="s3" ref="s3">
    <div class="main">
      <div class="txt">
    <img src="./s3/slogo2.svg" class="slogo" alt="" data-aos="fade-up" data-aos-delay="0" />
    <h3 class="title" data-aos="fade-up" data-aos-delay="100">日本不動產知名品牌 締造城市未來</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="200">日本三井不動產自1941年獨立於三井合名公司不動產部門，歷經80多年來以創新思維佈局全球不動產領域，包括商業設施、飯店、複合商辦大樓、高優質住宅等事業版圖；致力創造城市進化與價值，啟動新時代的夢想與感動。</p>
        <div class="subdesc" data-aos="fade-up" data-aos-delay="300">Mistui Fudosan Group</div>
      </div>
    </div>
    <div class="slider" data-aos="fade-up" data-aos-delay="400">
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

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:6em 0 6em 0;
  font-size:size(16);
  gap:6em;
  flex-wrap: wrap;

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(470);
  flex-direction: column;
  text-align: justify;
}


.txt {
    font-weight: 400;
  .slogo{height:size(45);}
  .title{
    margin: .9em 0 0.3em;color: #9A6A28;
  }
  .desc{
    margin: 0 0 2.4em;
  }
}

  .slider {
    margin: 0;
    flex-basis: size(730);
      height: size(490);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(730);
      height: size(490);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    color: #C5C5C5; 
    li button.is-active{
      color: #C9A063;
    }
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
    padding:sizem(60) 0 0 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
  }

  .txt {
    .slogo{height:sizem(29);}
  }


  .slider {
    height: auto;
    width: sizem(310);

    .caption {
    font-size:sizem(7);  
    right:sizem(5);
    bottom:sizem(5);text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.8);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(208);
      
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
  pagination: false,
  autoplay: true,
  interval: 4000,
  gap: 10,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s3/1.webp", import.meta.url).href ,
    caption: "和苑三井花園飯店 台北忠孝"
  },
  {
    img:new URL("./s3/2.webp", import.meta.url).href ,
    caption: "東京中城日比谷"
  },
]
</script>

