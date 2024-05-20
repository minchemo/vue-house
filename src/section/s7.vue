<template>
  <article class="s7" ref="s7">
    <img src="./s3/hr.webp" class="hr" alt="亮光">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">30年品牌  實力深蘊</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">勝偕集團二世代同為建築師，因為懂，所以更專精！以設計、結構、施工、建築、服務5大信念為基石，屢獲國家建築金獎、金獅獎首獎肯定，並在高雄厝綠建築大選、園冶獎等項目中脫穎而出，印證卓越品質。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
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



.s7 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:7em 0 11em 0;
  font-size:size(19);
  gap:3em;
    flex-direction:row-reverse;
  flex-wrap: wrap;
  .hr{position: absolute;
  width:size(2048);bottom: size(-104);left:size(-64);pointer-events: none;z-index: 2;
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
  @apply flex-col;
    height: auto;
    padding: 0 0 3em 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
  .hr{
  width:sizem(627);bottom: sizem(-60);left:sizem(-55);
  }

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {margin: 4.4em auto 1.3em;
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
    caption: "美學團隊"
  },
  {
    img:new URL("./s7/2.jpg", import.meta.url).href ,
    caption: "榮耀加冕"
  },
  {
    img:new URL("./s7/3.jpg", import.meta.url).href ,
    caption: "至真-公司業績"
  },
  {
    img:new URL("./s7/4.jpg", import.meta.url).href ,
    caption: "大千-外觀"
  },
  {
    img:new URL("./s7/5.jpg", import.meta.url).href ,
    caption: "見真-外觀公設"
  },
]
</script>

