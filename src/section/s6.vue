<template>
  <article class="s6">
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]"  data-aos="fade-up" data-aos-delay="0">品風采</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">居首品風采，俯瞰鳳山城</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">二十四層擎天擘劃，攬山海城景於心，繁華鳳山，盡收眼底，歷史與現代風情共存，享受時光交錯的無敵景緻。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
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

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  @apply relative flex flex-col items-center justify-center text-[#000];
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
  text-shadow:0 0 10px #fff;
 
.title{color: #6A3F12;
&::after,
&::before{
background: #6A3F12;
}
}
.subtitle{color: #6A3F12;}
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
    caption: "外觀實景"
  },
  {
    img:new URL("./s6/2.webp", import.meta.url).href ,
    caption: "外觀實景"
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

