

<template>
  <article class="s6">
    <div class="bg">
      <span></span>
      <span></span>
      <span v-if="$isMobile()"></span>
    </div>
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">菁英學區</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">優質學區 菁英養成圈</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">京都大學研究，境教，是未來卓越的關鍵！新南國小、慈濟國小、慈濟國中、金城高國中、慈濟高中，滿足高端家庭教育需求，精英搖籃，已經為您準備就緒。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
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
  @apply relative overflow-hidden flex items-center justify-center text-[#FFF];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  .bg{
    span{
      &:nth-child(1){
        top: 1vw;
        left: 8vw;
        font-size: 1.5vw;
      }
      &:nth-child(2){
        top: 0vw;
        right: 31vw;
        font-size: 5vw;
      }
    }
  }

.img{position: absolute;bottom:0;right:size(50);width:size(795);
img{width: 100%;position: relative;}}

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
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

.img{bottom:sizem(230);right:sizem(-30);width:sizem(250);}
  .bg{
    span{
      &:nth-child(1){
    top: 50vw;
    left: 86vw;
    font-size: 9vw;
}
      &:nth-child(2){
    top: 8vw;
    left: 7vw;
    font-size: 7vw;
}
      &:nth-child(3){
        top: 45vw;
        left: -10vw;
        font-size:36vw;
        transform: scale(.8);
        background: radial-gradient(ellipse at center, #64c8da33 65%,  #fff0 70%);
        animation-delay: 1.8s;
      }
    }
  }

  .main {
    padding: 0 sizem(30);
    width: 100%;
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
    img:new URL("./s6/1.jpg", import.meta.url).href ,
    caption: "新南國小"
  },
  {
    img:new URL("./s6/2.jpg", import.meta.url).href ,
    caption: "新南國小"
  },
  {
    img:new URL("./s6/3.jpg", import.meta.url).href ,
    caption: "新南國小"
  },
  {
    img:new URL("./s6/4.jpg", import.meta.url).href ,
    caption: "新南國小"
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

