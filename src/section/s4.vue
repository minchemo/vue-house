<template>
  <article class="s4" ref="s4">
    <div class="bg" v-if="!$isMobile()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">品質域</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">榮耀品質域，六圈盡環伺</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">綜觀大鳳山，僅一軸保泰路能同時匯聚，保泰、五甲、海洋、大明、瑞隆、武慶等六大商圈，地段的好無須多言，一看便知曉，購物、美食、娛樂，一應俱全，一眼即是。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
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



.s4 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
  .bg{
    span{
      &:nth-child(1){
      top:size(26);left: 0;
  font-size:size(120);
}
      &:nth-child(2){
      top: size(147);left: size(110);
  font-size:size(27);
}
      &:nth-child(3){
      top: size(20);right:size(80);
  font-size:size(75);}
    }
  }

  .img{position: absolute;bottom:size(-30);left:size(-270);width:size(660);
  &::before{content: "";width:120%;
  height: 20%;border-radius: 50%;background: #1691CF;display: block;
  position: absolute;bottom: -10%;left: -10%;
}
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

  .s4 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .img{position: absolute;top:sizem(300);left: auto;
    right:sizem(-155);width:sizem(260);bottom: auto;}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}


  .slider {
    height: auto;
    width: 100%;
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

const imgs = [
  {
    img:new URL("./s4/1.webp", import.meta.url).href ,
    caption: "瑞隆商圈"
  },
  {
    img:new URL("./s4/2.webp", import.meta.url).href ,
    caption: "保泰商圈"
  },
  {
    img:new URL("./s4/3.webp", import.meta.url).href ,
    caption: "五甲商圈"
  },
  {
    img:new URL("./s4/4.webp", import.meta.url).href ,
    caption: "大明商圈"
  },
  {
    img:new URL("./s4/5.webp", import.meta.url).href ,
    caption: "海洋商圈"
  },
  {
    img:new URL("./s4/6.webp", import.meta.url).href ,
    caption: "武慶商圈"
  },
]
</script>

