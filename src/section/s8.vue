<template>
  <article class="s8">
  <div class="txt">
    <h3 class="title"  data-aos="fade-up" data-aos-delay="0">建材臻用心</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">嚴選建材  精緻生活新風尚</h4>
        </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :key="img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
  @apply relative flex flex-col items-center justify-center bg-[#300b];
  width: 100%;
  // height: size(800);
  padding:0 0 7em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  color: #fff;
.title{
  text-align: center;
&::after,
&::before{
      content: "";
      width: 8.7em;
      margin: auto 1em;
      height: 1px;
      background: #fff;
      display: inline-block;
      vertical-align: middle;
    }
}
}

  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(844);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(844);
      
    }
    .arrows .prev, .arrows .next{
      display: none;
      width:3%;
    }

    .splide__pagination{
      bottom: .5em;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
  @apply flex-col;
   //height: sizem(600);
    padding:6em 0 0 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}



.txt {
.title{
&::after,
&::before{
width:0em;
}
}
.title{margin-bottom: sizem(5);}
.subtitle{margin-bottom: sizem(28);}
}
  .slider {
    height: sizem(503);
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
      height: sizem(503);
      
    }
    .arrows .prev, .arrows .next{
      width:8%;
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

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
  autoplay: false,
  interval: 4000,
  gap: 0,
}

const imgs = [
  {
    img: globals.$isMobile() ? new URL("./s8/1m.webp", import.meta.url).href : new URL("./s8/1.webp", import.meta.url).href,
    caption: ""
  },
]

</script>

