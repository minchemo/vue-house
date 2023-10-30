<template>
  <article class="s5" ref="s5">
    <div class="main"><h3 class="title font-['Jost']" data-aos="fade-up" data-aos-delay="0">ARCHITECTURE<span><span>DREAM PARK</span></span></h3>
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">定格國際 對味大器</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">平實路交織裕永路的軸線氣度，極淬15層天際之藝<br>
獨步時尚與綠海一線的寬懷，私藏世界美學內涵<br>
玩藝語彙、從容曲線，致敬跨時空的傳世格調
</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <span class="current-slide">IMAGES {{ currentSlideIndex + 1 }}/{{ imgs.length }}</span>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
  @apply relative flex items-center text-[#000];
  width: 100%;
  height:auto;
  padding:0;
  font-size:size(14);justify-content:space-between;
  //gap:3em;
  //flex-wrap: wrap;
  background: url("./s5/024.jpg");
  background-size: 100% auto;
  background: #fff;
  border-bottom: 1px solid #000;

  .main {
    @apply flex;
    margin: 0;
    flex: 1 1 auto;
      height: size(1070);
  flex-direction: column;
  text-align: justify;
  justify-content:space-between;
  border-right: 1px solid #000;
  padding: 0 0em 0 5em;
  .title{font-size:size(53);margin: .6em 0 0 0;
    letter-spacing: 0.03em;
    font-weight: 500;
  span{display:block;
    span{font-size:size(16);
      border: 1px solid #000;padding: .1em .5em;
      border-radius: .7em;
  margin: 0;
float: left;
}
}
  }
.txt{padding:0 0 6em 0;line-height: 1.7;}
.subtitle{font-size:size(28);font-weight: 700;margin-bottom: .3em;letter-spacing: 0.2em;}
.desc{color: #666;font-weight: 500;}
}

  .slider {
    margin: 1.5em 0 0em;
    flex-basis: 73%;
    .slide-item {
      @apply bg-cover;
  background-color: #CCC;
      height: size(976);
      width: size(1414) ;
      
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
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0;

  .main {
    padding: 0 sizem(32.5);
    width: calc(100% - 1em);
  border-right: 0px solid #000;
  border-left: 1px solid #000;
      height:auto;
  padding: 0 1em;
  margin-left: 1em;
  .title{font-size:sizem(28);
    margin: 1.3em 0 2.2em 0;
  span{
    span{font-size:sizem(12);}
}
  }
.txt{padding:0 0 2em 0;}
.subtitle{font-size:sizem(20);}


}
  .slider {
  border-left: 1px solid #000;
    margin: 0 0 0 1em;
    height: auto;
    width: calc(100% - 1em);
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
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: "建築外觀3D模擬示意圖"
  },
  {
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: "建築外觀3D模擬示意圖"
  },
]
</script>

