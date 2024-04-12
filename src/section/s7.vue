<template>
  <article class="s7" ref="s7">
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile && imgs.length > 1">
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
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0"><span class="icon"></span><span class="title_c"><b>嘉</b>植感</span><span class="en">LOHAS GREEN LIFE</span></h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">綠動隨心<br>樂活有氧森</h4>
    <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
    <p class="desc" data-aos="fade-up" data-aos-delay="600">以城中有公園的擁綠理念，永續孕育公園綠地，近身植感相擁涵養健康；1.8公里綠帶廊道，散步遊憩、親子時光，悠遊自然生態，陽光鮮氧從此無須遠求。</p>
    </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s7 {
  @apply relative flex items-center justify-center text-[#633804];
  width: 100%;
  height:auto;
  padding:4.4em 0;
  font-size:size(28);
  gap:2.6em;
  flex-wrap: wrap;
    flex-direction:row;


  .img{position: absolute;bottom:size(-30);left:size(-270);width:size(660);
  &::before{content: "";width:120%;
  height: 20%;border-radius: 50%;background: #1691CF;display: block;
  position: absolute;bottom: -10%;left: -10%;
}
  img{width: 100%;position: relative;}}
  .main {
    @apply flex;
    margin: 0 size(120) 0 0;
    flex-basis: size(560);
  flex-direction: column;
  text-align: justify;
}



  .slider {
    margin: 0;
    flex-basis: size(1050);
      height: size(1009);
    .slide-item {
      @apply bg-cover;
    flex-basis:100%;
      height: size(1009);
      
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
  padding:3em 0 2em;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;


.main {
  padding: 0 0;
  width: 100%;
  margin: 0 auto;
}

.txt {margin: 2.3em auto 0em;
  width: 77%;
}


.slider {
  height: auto;
  width: sizem(327); 
  .slide-item {
    @apply bg-cover;
    width: 100%;
  flex-basis: auto;
    height: sizem(257);
    
  }
  .arrows{
    filter: invert(22%) sepia(14%) saturate(5170%) hue-rotate(9deg) brightness(96%) contrast(97%);
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
    img:new URL("./s7/1.webp", import.meta.url).href ,
    caption: "萬坪公園"
  },
  {
    img:new URL("./s7/2.webp", import.meta.url).href ,
    caption: "八掌溪黃花楓林木步道"
  },
  {
    img:new URL("./s7/3.webp", import.meta.url).href ,
    caption: "嘉義美術館"
  },
]

const options = {
  rewind: false,
  arrows: false,
  pagination: imgs.length > 1,
  autoplay: imgs.length > 1,
  interval: 4000,
  gap: 0,
  type: 'loop',
  drag: imgs.length > 1,
}

</script>


