<template>
  <article class="s7" ref="s7">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">質感建材精品<br v-if="isMobile"> 舒適寧靜環保</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">嚴選TOTO日本百年衛浴、櫻花廚具料理美味、晶鑽木地板溫潤寧境、大合石膏磚環保輕隔間綠建材、耶魯美國知名電子門鎖…不只安全健康舒適，更全面提升居家質感品味。</p>
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



.s7 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:10em 0 10em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
    flex-direction:row-reverse;
    background:linear-gradient(0deg, #00383800 0%, #003838cc 100%);
    z-index: 2;


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
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s7 {
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
    img:new URL("./s7/1.jpg", import.meta.url).href ,
    caption: "晶鑽木地板"
  },
  {
    img:new URL("./s7/2.jpg", import.meta.url).href ,
    caption: "大合石膏磚"
  },
  {
    img:new URL("./s7/3.jpg", import.meta.url).href ,
    caption: "耶魯電子鎖"
  },
  {
    img:new URL("./s7/4.jpg", import.meta.url).href ,
    caption: "TOTO衛浴示意圖"
  },
  {
    img:new URL("./s7/5.jpg", import.meta.url).href ,
    caption: "櫻花廚具示意圖"
  },
]
</script>

