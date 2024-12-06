<template>
  <article class="s5" ref="s5">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">溪福機構 × 新月建設<br>雙巨擘聯手</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">在地深耕、品質卓越，以「第芬尼」、「富景」、「世界W」、「綠富綠」…等區域地標累積品牌實力；「鳴日之城」翻轉鶯桃雙城中軸，仰望微軟數據園區、遊賞千坪公園綠意，打造藝術科技城心鉅作。</p>
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
  padding:0em 0 0em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
  background: #003838cc;

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
      height: size(1040);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(1040);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      bottom: 13em;
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
      // @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(330);
  img{
    object-fit: contain;
  }
      
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
    caption: "第芬尼"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "富景"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "世界W"
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "綠富綠"
  },
]
</script>

