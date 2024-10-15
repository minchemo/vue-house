<template>
  <article class="s11" ref="s11">
    <!--<img src="./s11/40.jpg" class="t0">
   -->
    <img src="./s11/bg.jpg" class="bg">
    <span class="caption">情境示意圖</span>
    <div class="slider" data-aos="fade-up" data-aos-delay="800">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="img">
          <img :src="img.img" :alt="img.caption" :class="['v'+ (index + 1)]">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <!-- Conditionally applying 'v1' class if on the first slide -->
    <div :class="['txt', currentSlideIndex === 0 ? 'v1' : '']">
      <img src="./s11/en.svg" class="en" data-aos="fade-up" data-aos-delay="0">
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="200">國家金獎肯定 誠信典範</h3>
        <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="400">一流功力-甲級營造實力</h4>
      <p class="desc" data-aos="fade-up" data-aos-delay="600">憑藉對品質和誠信的執著,獲頒「台灣誠信品牌」最高榮譽,<br v-if="!$isMobile()">
更多次獲頒「金質獎」、「建築園治獎」等權威大獎。<br v-if="!$isMobile()">
致力實現每一位業主對完美家園的獨特想像。</p>
    </div>
  </article>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';



.s11 {
  @apply relative flex  flex-col text-[#fff];
  width: 100%;
  height:size(1060);
  padding:0;
  font-size:size(24);
  overflow: hidden;
 // gap:6em;
  flex-wrap: wrap;
  background:radial-gradient(82% 54% at 33.5% 8%, #FFF 0%, #B0D5E1 57%, #78B7CB 100%);
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
  .bg{position: absolute;width: 100%;bottom:0;left: 0; pointer-events: none;z-index: 1;}


.txt {
  position: relative;
  z-index: 3;
  text-align: center;
    font-weight: 400;pointer-events: none;
    color: #000;transition: transform .5s;
    transform: translateY(size(120));
    //filter: invert(10%) sepia(85%) saturate(3509%) hue-rotate(209deg) brightness(97%) contrast(90%);

      .en{width: size(440);display: block;margin:1.5em auto .9em;}
    .title{display: inline-block;
      font-size:size(82);padding: 0 0 .1em;
      font-weight: 700;letter-spacing: 0.09em;
      border-bottom: 1px solid #000;
      line-height: 1.4;
      br{display:none;}
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: .1em auto .7em;
    }
    .sen{display:none;}
}

  .slider {
    position: absolute;
    bottom:size(275);left: 0;right: 0;
    margin: 0;
    width: size(730);z-index: 4;margin: auto;
    height: auto;
    .slide-item {
      @apply bg-cover;
      width:size(233);
      display: flex;
      text-align: center;
      justify-content:center;
      align-items:flex-end;//margin-right: size(20);
      img{height: auto; width:100%; margin: auto auto 1em auto;
      
  }
     .caption{left: 0;bottom: 0;width: auto;white-space: nowrap;color: #000;display: block;font-size: size(14);text-shadow: 0px 0px 0px #0000;font-weight: 500;}
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

  .s11 {
    flex-direction: column-reverse;
  height:sizem(667);
    padding:3em 0 0 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
  &::before{content: "";width: 100%;display: block;height: sizem(580);background: linear-gradient(180deg, #EFEFEF 83.48%, rgba(239, 239, 239, 0.00) 100%);position: absolute;top: 0;left: 0;z-index: 2;}

  .txt {
    width:sizem(320);
    margin:0.5em auto auto auto;transform: translateY(0);
    .en{width:sizem(225);opacity: 1;margin:0em auto 1.5em;}

    .title{
      font-size:sizem(28);
      border-bottom: 1px solid currentColor;
      padding: 0 0 0.3em 0;
      br{display:block;}
    }
    .subtitle{
      margin: .8em auto 1em;line-height: 1.4;
      font-size:sizem(14);}
  }
  .slider {
    position: relative;
   // height: sizem(300);
   height: auto;
    width:100%;
    left:0;
    top: auto;
    bottom:sizem(150);
    margin: 0;
    &::before{height: 70vw;}
    .slide-item {width:100%;padding: 0 0 sizem(25) 0;
      img{ width:100%;margin: 0 auto 0em auto;
       // &.v2{width:85%;}
      }
      .caption{left:.5em;font-size:sizem(12);bottom: 0.5em;}
    }
    }

      .caption{left:.5em;font-size:sizem(12);bottom: 0.5em;}
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


const imgs = [
  {
    img:new URL("./s11/1.jpg", import.meta.url).href,
    caption: "國立臺東大學三項合併工程"
  },
  {
    img:new URL("./s11/2.jpg", import.meta.url).href,
    caption: "高野大飯店新建工程"
  },
  {
    img:new URL("./s11/3.jpg", import.meta.url).href,
    caption: "迪卡儂商場新建工程"
  },
]
const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  // autoplay: true,
  interval: 5000,
  perPage:  globals.$isMobile()?1.5:3,
  gap: 20,
  focus: 'center',
  type: 'loop',
  drag:globals.$isMobile()?true:false,
}
</script>

