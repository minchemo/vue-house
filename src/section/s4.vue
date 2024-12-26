<template>
  <article class="s4" ref="s4">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">整座鶯歌<br v-if="isMobile"> 都是 你的美術館</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">陶然品味、玩轉老街、森活步道、走讀古蹟…「新北美術館」以鶯歌連結國際；2分鐘新三沅商場、1分鐘鶯桃商圈，鳳福公園、鳳鳴國中、鳳鳴國小…文教生活圈。</p>
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



.s4 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:10em 0 10em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
    flex-direction:row-reverse;
    background: #003838cc;
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


.s4 {
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
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    caption: "鳳鳴國小"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    caption: "鳳鳴國中"
  },
  {
    img:new URL("./s4/3.jpg", import.meta.url).href ,
    caption: "新北美術館"
  },
  {
    img:new URL("./s4/4.jpg", import.meta.url).href ,
    caption: "鳳福公園"
  },
  {
    img:new URL("./s4/5.jpg", import.meta.url).href ,
    caption: "鳳鳴公園"
  },
]
</script>

