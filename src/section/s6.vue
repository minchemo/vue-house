<template>
  <article class="s6">
  <div class="txt">
    <h3 class="title"  data-aos="fade-up" data-aos-delay="0">師承隈研吾派 林伯諭大師傑作</h3>
  </div>
    <div class="main">
      <div class="txt">
    <!--h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">地段好的店面，大老闆都搶</h4-->
        <p class="desc" data-aos="fade-up" data-aos-delay="400">"Less is more" 簡約線條、雋永獨秀，妝點煥新生活風景。建築薈萃風與光，以開闊的視野，融合周邊地景，打造一座美學與機能兼容的風光建築。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  @apply relative flex flex-col items-center justify-center;
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
&::after,
&::before{
background: #fff;
width: 11.3em;
}
}}

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

  .s6 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

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
}}
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
      height: sizem(210);
      
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
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s6/1.webp", import.meta.url).href ,
    caption: "3D立面示意圖"
  },
  {
    img:new URL("./s6/2.webp", import.meta.url).href ,
    caption: "3D立面示意圖"
  },
]
/*
const imgs = [
  {
    img: getImg('s6/1'),
    caption: "內湖 豁達達禮"
  },
  {
    img: getImg('s6/2'),
    caption: "林口 長耀PARK"
  },
  {
    img: getImg('s6/3'),
    caption: "林口 長耀初"
  },
  {
    img: getImg('s6/4'),
    caption: "林口 長耀里"
  },
]
*/
</script>

