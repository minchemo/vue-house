<template>
  <article class="s4 " ref="s4">
    <div class="text">
      <div class="title">
        <h2 data-aos="fade-up" data-aos-delay="200">逐夢竹科  圓夢關西</h2>
        <h3 data-aos="fade-up" data-aos-delay="600">輕取未來  五大Best Buy</h3>
      </div>
    </div>
    <svg class="img" v-if="!isMobile" viewBox="0 0 100 100"></svg>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
          <!--圖說<span class="caption">{{ img.caption }}</span>-->
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';
.s4 {
  @apply relative flex items-center justify-center text-[#4F607A];
  width: 100%;
  padding:11em 0 10em 0;
  background: url("./s4/bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  //文字
  .text {
    @apply flex;
    margin: 0;
    flex-basis: size(620);
    flex-direction: column;
    text-align: justify;
    .title{
      text-align: center;
      position: absolute;
      top:calc(60% + #{size(352 - 1080 * .5)});
      left: calc(20% + #{size(380 - 1080 * .5)});
      
    }
    h2{
      font-size: size(50);
      font-weight:900;
      -webkit-text-stroke: 1px #4F607A;
      text-shadow: #00000030 3px 3px;
      letter-spacing: size(1);
      margin-bottom: size(33);
    }
    h3{
      font-size: size(30);
      font-weight:900;
      letter-spacing: size(0.8);
      margin-top: size(10);
    }
  }

  //輪播圖
  .img{
    position: absolute;
    right: size(510);
    bottom:size(0);
    mix-blend-mode: multiply;
    width: size(95);
    margin-left: size(20);
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
      right: size(593);
      justify-content: flex-start;
    }
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .s4 {
    @apply flex-col;
    height: auto;
    padding: 0 0 0.5em 0;
  font-size:sizem(14);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.title {margin:3em auto 3em;padding: 0;
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
    caption: "高速移居。國道三約3分鐘 時間換取空間"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    caption: "健康好住。 水美米好 休閒樂活 長壽之鄉"
  },
  {
    img:new URL("./s4/3.jpg", import.meta.url).href ,
    caption: "機能宜居。市心商圈 文教校園 全齡樂園"
  },
  {
    img:new URL("./s4/4.jpg", import.meta.url).href ,
    caption: "減壓成家 。甜蜜入手價 輕鬆移居更宜居"
  },
  {
    img:new URL("./s4/5.jpg", import.meta.url).href ,
    caption: "圓夢首棧。 美學建築 採光通風 舒適格局"
  },
]
</script>

