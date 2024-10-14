<template>
  <article class="s7" ref="s7">
    <!-- <img src="./s7/10.jpg" class="t0"> -->
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
      <img src="./s7/en.svg" class="en" data-aos="fade-up" data-aos-delay="0">
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="200">時尚輕購物<br> 文青潮流最錢線</h3>
      <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="400">樂購廣場╳秀泰影城</h4>
     <p class="desc" data-aos="fade-up" data-aos-delay="600">時尚不只一面，潮流不拘一格，<br v-if="!$isMobile()">南台灣最大4K超級巨幕影城，超大型複合式商場，<br v-if="!$isMobile()">樂購廣場成為心中的時尚標籤，享受無與倫比的購物體驗。<br v-if="!$isMobile()">在這裡，時尚購物、美食饗宴、頂尖娛樂應有盡有，<br v-if="!$isMobile()">盡情沉浸在岡山的非凡魅力與無限便利之中。</p>
    </div>
  </article>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';



.s7 {
  @apply relative flex  flex-col text-[#fff];
  width: 100%;
  height:size(1060);
  padding:0;
  font-size:size(24);
 // gap:6em;
  flex-wrap: wrap;
  background:radial-gradient(82% 54% at 33.5% 8%, #FFF 0%, #B0D5E1 57%, #78B7CB 100%);
  
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
  .txt {
  position: relative;
  z-index: 3;
  text-align: justify;
    font-weight: 400;pointer-events: none;
    color: #000;transition: transform .5s;
    margin: auto auto auto size(75);//width: size(685);
    filter: invert(10%) sepia(85%) saturate(3509%) hue-rotate(209deg) brightness(97%) contrast(90%);

      .en{width: size(565);display: block;margin:0em auto 0.5em 0;}
    .title{display: inline-block;
      font-size:size(62);
      font-weight: 700;letter-spacing: 0.1em;
      border-bottom: 1px solid #000;
      line-height: 1.4;
      padding: 0 0 .3em;
      margin: 0em 0 0 0;
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: .2em auto .1em;
    }
    .desc{
      margin: .8em auto 0em;
    }
    @media screen and (min-width: 768px) {
    &.v1{text-align: center; margin: 0 auto auto auto;
      filter: invert(1);
      width:auto;
      transform: translateY(size(125));
      .en{opacity: 1;margin:0 auto .4em;}
    .title{
      font-size:size(82);border-bottom: 1px solid #000;padding: 0 0 .1em;
      br{display: none;}
    }
    .subtitle{
      margin: 0.2em auto .8em;
      &.t1{font-size:size(40); margin: 0em auto .1em;}
    }
    .desc{position: absolute;bottom: size(-280);left: size(715);text-align: justify;width:size(650);}
    
  }
}
}

  .slider {
    position: absolute;
    top: 0;right:0;
    margin: 0;
    width: 100%;
    .slide-item {
      @apply bg-cover;
    flex-basis:100%;
      display: flex;
      text-align: center;
      justify-content:center;
      align-items:center;padding: 0 size(63) 0 0;
      img{height: auto; width:size(970);margin: 0 0 0 auto;
  }
  .caption{position: absolute;left:size(880);bottom:size(195);}
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

  .s7 {
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
    .en{width:sizem(250);margin:1.5em auto 1.3em;}

    .title{
      font-size:sizem(25);
      padding: 0 0 0.1em 0;width:sizem(360);
      text-align: center;
      border-bottom: 0;
      margin-left:sizem(-25);
      br{display:none;}
    }
    .subtitle{
      border-top: 1px solid currentColor;
      margin: .8em auto .5em;width:sizem(230);
      padding:.7em 0 0 0;
      font-size:sizem(15);}
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
      img{ width:100%;margin: 0 auto 0em auto;height:sizem(212);
      //  &.v2{width:85%;}
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
    img:new URL("./s7/bg.jpg", import.meta.url).href,
    caption: "情境示意"
  },
  {
    img:new URL("./s7/1.jpg", import.meta.url).href,
    caption: "秀泰生活｜影城/情境示意"
  },
  {
    img:new URL("./s7/2.jpg", import.meta.url).href ,
    caption: "樂購廣場"
  },
  {
    img:new URL("./s7/3.jpg", import.meta.url).href ,
    caption: "秀泰生活｜影城"
  },
  {
    img:new URL("./s7/4.jpg", import.meta.url).href ,
    caption: "樂購廣場"
  },
  {
    img:new URL("./s7/4.jpg", import.meta.url).href ,
    caption: "麥當勞"
  },
  {
    img:new URL("./s7/4.jpg", import.meta.url).href ,
    caption: "星巴克"
  },
]
</script>



