

<template>
  <article class="s6">
  <div class="txt">
  </div>
    <div class="main">
      <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">一橋之隔台北雙子星<br>
世界國門一線直通未來家門</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="100">一座橋，串起繁華與綠意，前擁新北大都會公園壯闊綠海，往前一步直達雙子星西區國門特區，十分鐘到達全國政經、商貿、交通，最中樞位置，開展下一個盛世繁華。</p>
   <!--  <div class="subdesc" data-aos="fade-up" data-aos-delay="200">CATHAY REAL ESTATE</div> -->
      </div>
    </div>
    <div class="slider" data-aos="fade-up" data-aos-delay="300">
      <div class="arrows" v-if="imgs.length > 1">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index" v-lazy:background-image="img.img">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  @apply relative overflow-hidden flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:2.5em 0 0 0;
  font-size:size(18);
  gap:4em;
  flex-direction: row-reverse;
  flex-wrap: wrap;



  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(530);
  flex-direction: column;
  text-align: justify;
}

.txt {
  .subtitle{
    font-weight: 300;
    margin:  0.2em 0 0em;}
  .title{margin: 0 0 0em;color: #719579;}
}
  .slider {
    margin: 0;
    flex-basis: size(760);
    .slide-item {
      @apply bg-cover;
    flex-basis: 100%;
      height: size(470);
      
    }
    .splide__pagination{
      left: calc(100% + 3em);
      justify-content: flex-start;
    color: #C5C5C5; 
    li button.is-active{
      color: #B78E63;
    }
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
    padding:2em 0 0 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .main {
    padding: 0 sizem(30);
    width: 100%;
}
.txt {
  margin: 0em auto 2em auto;
  .title{
    margin: 0 0 1em;
  }
}

  .slider {
    height: auto;
    width: sizem(310);

    .caption {
    font-size:sizem(12); 
    right:sizem(5);
    bottom:sizem(5); 
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(195);
      
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
const imgs = [
  {
    img:new URL("./s6/1.webp", import.meta.url).href ,
    caption: "一橋之隔台北雙子星"
  },
]

const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  autoplay: imgs.length > 1,
  interval: 4000,
  gap: 0,
 // type: 'loop'
}

const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

