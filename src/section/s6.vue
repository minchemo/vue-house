<template>
  <article class="s6">
    <div class="main">
      <div class="txt">
        <h4 class="title" data-aos="fade-up" data-aos-delay="200">方正高坪效格局，<br v-if="isMobile">搭配3.2至3.4米的舒心挑高</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">撐起家人的自在尺度，讓生活不再受限。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index">
          <img :src="img.img" :alt="img.caption">
          <span class="caption" v-if="img.caption" v-html="img.caption"></span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s6 {
  @apply relative flex items-center justify-center ;
  width: 100%;
  height: auto;
  padding: 0em 0 3.5em 0;
  font-size: sizem(16);
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  background:url("./s3/bottommo.svg") no-repeat 0 100%, url("./s6/bg.png") ;
  background-size:100% auto ,sizem(150) auto;
      color:#1F1F1F;
  @media screen and (min-width: 768px) {
  background-image:url("./s6/bottom.svg"), url("./s6/bg.png");
  background-size:100% auto ,size(200) auto;
  font-size: size(20);
  flex-direction: column;
  padding: 0em 0 13em 0;
  gap: 0em;
  }
   .txt  { 
      text-align: justify;
      width:sizem(310); 
  @media screen and (min-width: 768px) {
      text-align: center;
      width:size(1500); 

  }
    }
  .spot {
    position: absolute;
    top: sizem(120);
    right: sizem(-50);
    width: sizem(188);
    transform: rotate(-90deg);
    transform-origin: 100% 100%;
    pointer-events: none;
    z-index: 2;

    @media screen and (min-width: 768px) {
      top: size(290);
      right: size(-50);
      ;
      transform: rotate(0deg);
      width: size(600);
    }
  }

 

  .main {
    @apply flex;
    margin: 0;
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;
  }

  .txt {
    // margin: auto auto 3vw auto;
    padding: 0;

    .subtitle {
      font-weight: 400;
    }
  }

  // size(110)

  .slider {
    margin: 0 0 0 0;
    width: size(1500);
    height: size(844);
@media screen and (max-width: 767px) {
    height: sizem(295);
    width: 100%;

}

  .caption {
    left: 0;
    background: none;
    text-align: center;
 // font-size: size(17);
@media screen and (max-width: 767px) {
    text-align: left;
    font-size: sizem(9);


}
  }


    .splide__pagination {
      justify-content: center;
      bottom: -3em;
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
    img: isMobile.value ? new URL("./s6/1m.webp", import.meta.url).href : new URL("./s6/1.png", import.meta.url).href,
    caption:isMobile.value ? "傢俱配置參考圖｜<br>本圖隔間及傢俱配置示意圖僅供參考<br>其銷售平面係依合約附圖及地政機關登記為主" : "傢俱配置參考圖｜本圖隔間及傢俱配置示意圖僅供參考，其銷售平面係依合約附圖及地政機關登記為主"
  },
  {
    img: isMobile.value ? new URL("./s6/2m.webp", import.meta.url).href : new URL("./s6/2.png", import.meta.url).href,
    caption: isMobile.value ? "傢俱配置參考圖｜<br>本圖隔間及傢俱配置示意圖僅供參考<br>其銷售平面係依合約附圖及地政機關登記為主" : "傢俱配置參考圖｜本圖隔間及傢俱配置示意圖僅供參考，其銷售平面係依合約附圖及地政機關登記為主"
  },
  {
    img: isMobile.value ? new URL("./s6/3m.webp", import.meta.url).href : new URL("./s6/3.png", import.meta.url).href,
    caption: isMobile.value ? "傢俱配置參考圖｜<br>本圖隔間及傢俱配置示意圖僅供參考<br>其銷售平面係依合約附圖及地政機關登記為主" : "傢俱配置參考圖｜本圖隔間及傢俱配置示意圖僅供參考，其銷售平面係依合約附圖及地政機關登記為主"
  },
  {
    img: isMobile.value ? new URL("./s6/4m.webp", import.meta.url).href : new URL("./s6/4.png", import.meta.url).href,
    caption: isMobile.value ? "傢俱配置參考圖｜<br>本圖隔間及傢俱配置示意圖僅供參考<br>其銷售平面係依合約附圖及地政機關登記為主" : "傢俱配置參考圖｜本圖隔間及傢俱配置示意圖僅供參考，其銷售平面係依合約附圖及地政機關登記為主"
  },
  {
    img: isMobile.value ? new URL("./s6/5m.webp", import.meta.url).href : new URL("./s6/5.png", import.meta.url).href,
    caption: isMobile.value ? "傢俱配置參考圖｜<br>本圖隔間及傢俱配置示意圖僅供參考<br>其銷售平面係依合約附圖及地政機關登記為主" : "傢俱配置參考圖｜本圖隔間及傢俱配置示意圖僅供參考，其銷售平面係依合約附圖及地政機關登記為主"
  },

]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>
