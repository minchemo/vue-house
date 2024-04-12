<template>
  <article class="s5" ref="s5">
    <img src="./s3/l1.png" class="l" alt="線">
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
        <h3 class="title" data-aos="fade-up" data-aos-delay="0"><span class="icon"></span><span class="title_c"><b>嘉</b>饗樂</span><span class="en">SHOPPING AREA</span></h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">購物豐景<br>快意近商圈</h4>
    <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
    <p class="desc" data-aos="fade-up" data-aos-delay="600">重劃區的寬域街廓，彈指間快意抵達城心；站前、民生商圈鄰距離，新光三越、遠東百貨潮流接軌；輕鬆切換繁華城區與舒心街廓，動靜雙贏美好生活。</p>
    </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s5 {
  @apply relative flex items-center justify-center overflow-hidden text-[#633804];
  width: 100%;
  height:auto;
  padding:4.4em 0;
  font-size:size(28);
  gap:2.6em;
  flex-wrap: wrap;
    flex-direction:row;

    .l{position: absolute;bottom: size(-70);left: size(0);width: size(1920);

}
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


.s5 {
@apply flex-col;
  height: auto;
  padding:3em 0 2em;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
.l{bottom: sizem(-23);left: size(0);width: sizem(375);
}


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
    img:new URL("./s5/1.webp", import.meta.url).href ,
    caption: "新光三越"
  },
  {
    img:new URL("./s5/2.webp", import.meta.url).href ,
    caption: "耐斯廣場"
  },
  {
    img:new URL("./s5/3.webp", import.meta.url).href ,
    caption: "遠東百貨"
  },
  {
    img:new URL("./s5/4.webp", import.meta.url).href ,
    caption: "秀泰影城"
  },
  {
    img:new URL("./s5/5.webp", import.meta.url).href ,
    caption: "好市多"
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

