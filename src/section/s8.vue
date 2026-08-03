<template>
  <article class="s8">
    <div class="main">
      <div class="txt">
        <h2 class="title" data-aos="fade-up" data-aos-delay="0"><span>鶯歌地王</span>2500坪大社區 多元公設</h2>
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">鶯歌捷捷向上 鳴日大大有禮</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">捷運三鶯線通車，「鳴日之城」價值浮現，搶佔三鶯線房市第一波通車行情，起始站LB12鶯桃福德站+2500坪市心地王大基地＋桃園站前共同生活圈，<br v-if="!isMobile">三大地利優勢迎向鶯歌嶄新的生活時代，翻轉未來、快趁現在。
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

.s8 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:$pc-pa-tb 0 $pc-pa-tb 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column-reverse;
   //  background: #003838cc;
    z-index: 2;
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin:2em auto 0 auto;
  width: size(1500);
}

  .slider {
    margin: 0;
    flex-basis: size(840);
    width: size(840);
      height: size(844);
    width: size(1500);
    .caption {
      left:1em;
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(844);
      
    }

    .splide__pagination{
      justify-content: flex-end;
      bottom: -2em;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
    @apply flex-col-reverse;
    height: auto;
    padding: 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
gap:0em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.txt {margin: 2em auto 5em;
  .title{font-size: 1.82em;}
}

  .slider {
    height: auto;
    width: 100%;

    .caption {
    font-size:sizem(12);  
    left:sizem(5);
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
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    caption: "大廳"
  },
  {
    img:new URL("./s8/2.jpg", import.meta.url).href ,
    caption: "交誼廳"
  },
  {
    img:new URL("./s8/3.jpg", import.meta.url).href ,
    caption: "KTV"
  },
  {
    img:new URL("./s8/4.jpg", import.meta.url).href ,
    caption: "兒童遊戲區"
  },
  {
    img:new URL("./s8/5.jpg", import.meta.url).href ,
    caption: "親子教室"
  },
  {
    img:new URL("./s8/6.jpg", import.meta.url).href ,
    caption: "健身房"
  },
]
</script>