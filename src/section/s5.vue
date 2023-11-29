<template>
  <article class="s5" ref="s5">
    <div class="main">
      <div class="txt">
    <h3 class="title">
      <div data-aos="fade-up" data-aos-delay="0"><span>16</span>座大安森林公園</div>
      <div data-aos="fade-up" data-aos-delay="100" class="title2">廣達<span>424</span>公頃，全長<span>7.7</span>公里</div>
      <div data-aos="fade-up" data-aos-delay="200" class="title3"><span>31</span>座溜滑梯、<span>100</span>多組遊樂設施</div>
    </h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="300">在大台北都會公園，發現一座森林</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">大台北都會公園，相當於16座大安森林公園，紐約中央公園的1.25倍！ 7.7公里珍稀水景，規劃24公里環狀自行車步道、68座多功能運動場，結合音樂節、路跑、野餐、煙火盛事等各項藝文活動！</p>
        <div class="subdesc" data-aos="fade-up" data-aos-delay="500">CATHAY REAL ESTATE</div>
      </div>
    </div>
    <div class="slider" data-aos="fade-up" data-aos-delay="600">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s5 {
  @apply relative flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:6em 0 6em 0;
  font-size:size(16);
  gap:6em;
  flex-wrap: wrap;
  background:#CAE1D2 url("./s5/bg.jpg") no-repeat 0 100%;
  background-size: size(874) auto;

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(500);
  flex-direction: column;
  text-align: justify;
}


.txt {
  .slogo{height:size(45);}
  .title{
    margin: 0 0 .4em;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    line-height: 1.3;
    span{font-size: 1.6em;letter-spacing: 0;margin-right: .05em;}
    .title2{align-self:flex-end;}
    .title3{
      &::after{content: "";display: inline-block;width: 3em;height: 1em;}
    }
  }
}

  .slider {
    margin: 0;
    flex-basis: size(720);
      height: size(700);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(720);
      height: size(700);
      
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

  .s5 {
  @apply flex-col;
    height: auto;
    padding:sizem(60) 0 sizem(60) 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  background-size: sizem(360) auto;
  background-position: 0 sizem(340);

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
  }

  .txt {
    margin-bottom: 5.5em;
  .title{
    span{font-size: 1.43em;}
  }
  }


  .slider {
    height: auto;
    width: sizem(310);

    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(5);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(208);
      
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
  pagination: false,
  autoplay: true,
  interval: 4000,
  gap: 10,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: "圖說"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "圖說"
  },
]
</script>

