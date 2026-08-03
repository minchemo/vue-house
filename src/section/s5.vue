<template>
  <article class="s5" ref="s5">
    <div class="img">
    <img src="./s1/img.webp" data-aos="zoom-in-right"></div>
    <div class="main">
      <div class="txt">
        <h2 class="title" data-aos="fade-up" data-aos-delay="0"><span>鶯桃舒適圈</span>站前百貨 鶯桃共享</h2>
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">成熟商圈 共享繁華</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">坐擁市心便利機能，鶯桃商圈、桃園站前百貨、新三沅市場，串聯星巴克、麥當勞、大樹藥局、連鎖超市與生活品牌；鳳福公園親子遊憩、鳳鳴國中國小學區完善，成熟機能完美融入日常生活節奏。
</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
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



.s5 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:$pc-pa-tb 0 $pc-pa-tb 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
    flex-direction:row;
   // background: #003838cc;
    z-index: 2;
    
  .img{
  left: auto;
  transform: scaleX(-1);
  right: 0;
  @media screen and (max-width: 767px) {
    transform: rotate(-90deg) translate(100%, 0%);
    bottom: -30vw;
  }
}
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
    width: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s5 {
  @apply flex-col-reverse;
  height: auto;
  padding: 0;
font-size:sizem(15);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;

.main {
  padding: 0 sizem(32.5);
  width: 100%;
}

.txt {margin: 2em auto 5em;
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
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: "新光三越 站前商圈"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "桃鶯全聯星巴克"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "新三沅市場"
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "鶯桃商圈"
  },
]
</script>

