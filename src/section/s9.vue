<template>
  <article class="s9" ref="s9">
     <!-- <img src="./s9/01.jpg" class="t0"> -->
    <div class="slider" data-aos="fade" data-aos-delay="400">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide :class="['slide-item v'+ (index + 1)]" v-for="(img, index) in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

    <!-- Conditionally applying 'v1' class if on the first slide -->
    <div :class="['txt', currentSlideIndex === 0 ? 'v1' : '']">
      <img src="./s9/en.svg" class="en" data-aos="fade-up" data-aos-delay="0">
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="200">萬坪生態綠地<br> 綠意環繞城市森林</h3>
      <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="400">5分鐘半徑圈 六大馥郁綠金</h4>
     <p class="desc" data-aos="fade-up" data-aos-delay="600">盡享生態綠金全視野，成就岡山綠覆率之最。<br>
      住進優游綠意，刻畫健康樂活的未來眼界。</p>
<img src="./s8/sen.svg" class="sen">
    </div>
  </article>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';



.s9 {
  @apply relative flex  flex-col text-[#fff];
  width: 100%;
  height:size(1060);
  padding:0;
  font-size:size(24);
 // gap:6em;
  flex-wrap: wrap;
  background:radial-gradient(82% 54% at 33.5% 8%, #FFF 0%, #B0D5E1 57%, #78B7CB 100%);
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}


 .caption1{right: 15px;bottom: 15px;width: auto;white-space: nowrap;color: #fff;;font-size: size(14);text-shadow: 0px 0px 0px #0000;font-weight: 500;
 position: absolute;left: auto;z-index: 3;
 } 

.txt {
  position: relative;
  z-index: 3;
  text-align: justify;
    font-weight: 400;pointer-events: none;
    color: #000;transition: transform .5s;
    margin: auto 0 auto auto;width: size(685);
    filter: none;color: #0D3A79;

      .en{width: size(530);display: block;opacity: 1;margin:0em auto 1.1em 0;}
    .title{display: inline-block;
      font-size:size(62);
      font-weight: 700;letter-spacing: 0.1em;
      border-bottom: 1px solid currentColor;
      line-height: 1.3;
      margin: 0em 0 0 0;
      padding: 0 0 .5em;
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: .1em auto .1em;
    }
    .desc{
      margin: .8em auto 0em;
    }
    .sen{display:block;width: size(540);margin: 1em auto .8em 0;}
    @media screen and (min-width: 768px) {
    &.v1{text-align: center; margin: 0 auto auto auto;
      filter:saturate(0)brightness(600%);
      width:auto;
      transform: translateY(size(290));
      .en{opacity: 1;margin:0 auto .7em;}
    .title{
      font-size:size(82);
      padding: 0 0 .1em;
      br{display: none;}
    }
    .subtitle{
      margin: 0em auto .8em;
      &.t1{font-size:size(40); margin: 0em auto .1em;}
    }
    .sen{margin: 1em auto .8em auto;}
    
  }
}
}

  .slider {
    position: absolute;
    top: 0;left: 0;
    margin: 0;
    width: 100%;
    .slide-item {
      @apply bg-cover;
    flex-basis:100%;
      display: flex;
      text-align: center;
      justify-content:center;
      align-items:center;padding: 0 0 0 size(63);
      img{height: auto; width:size(1093);margin: 0 auto 0 0;
  }
  .caption{position: absolute;left:size(80);bottom:size(195);}
    @media screen and (min-width: 768px) {
      &.v1{padding: 0;
        img{width:100%;margin:0;}
        .caption{left:.5em;bottom: .5em;}
      }
    }
    // .caption{position: absolute;left: 0;bottom: 0;}
    }
    .splide__pagination{
    //  right: calc(100% + 3em);
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

  .s9 {
    flex-direction: column-reverse;
    
  height:sizem(667);
    padding:3em 0 0 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .txt {
    width:sizem(310);
    margin:0 auto auto auto;
    text-align: center;
    filter: none;color: #0D3A79;
    .en{width:sizem(250);opacity: 1;margin:1.5em auto 2.5em;}

    .title{
      font-size:sizem(30);
      border-bottom: 1px solid currentColor;
      padding: 0 0 0.3em 0;
    }
    .subtitle{
      margin: .8em auto .5em;
      font-size:sizem(15);}
      .sen{display:block;width: sizem(270);position: absolute;bottom: sizem(-255);left: 0;right: 0;
        filter:saturate(0)brightness(600%);
      margin: 0em auto 0;}
  }
  .slider {
    position: relative;
   // height: sizem(300);
   height: auto;
    width:100%;
    left:0;
    top: auto;
    bottom:sizem(0);
    margin: 0 0  sizem(55);
    &::before{height: 70vw;}
    .slide-item {width:100%;padding: 0 0 sizem(25) 0;
      img{ width:100%;margin: 0 auto 0em auto;
      }
      .caption{left:.5em;font-size:sizem(12);bottom: 0.5em;}
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
  // autoplay: true,
  interval: 5000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:globals.$isMobile() ?new URL("./s9/bgm.jpg", import.meta.url).href :new URL("./s9/bg.jpg", import.meta.url).href,
    caption: ""
  },
  {
    img:new URL("./s9/1.jpg", import.meta.url).href,
    caption: "岡山陽明公園"
  },
  {
    img:new URL("./s9/2.jpg", import.meta.url).href ,
    caption: "岡山夢想飛翔公園"
  },
  {
    img:new URL("./s9/3.jpg", import.meta.url).href ,
    caption: "岡山河堤公園"
  },
  {
    img:new URL("./s9/4.jpg", import.meta.url).href ,
    caption: "岡山和平公園"
  },
  {
    img:new URL("./s9/5.jpg", import.meta.url).href ,
    caption: "岡山劉厝公園"
  }, 
  {
    img:new URL("./s9/6.jpg", import.meta.url).href ,
    caption: "岡山公園"
  },
]
</script>



