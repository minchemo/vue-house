<template>
  <article class="s5" ref="s5">
    <!--  <img src="./s3/04.jpg" class="t0"> -->
    <div class="slider" data-aos="fade" data-aos-delay="400">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide :class="['slide-item v'+ (index + 1)]" class="slide-item" v-for="(img, index) in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

    <!-- Conditionally applying 'v1' class if on the first slide -->
    <div :class="['txt', currentSlideIndex === 0 ? 'v1' : '']">
      <img src="./s4/en.svg" class="en" data-aos="fade-up" data-aos-delay="0">
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="200">科技S廊道 置產前瞻視角</h3>
      <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="400">北高科技新都心</h4>
      <p class="desc" data-aos="fade-up" data-aos-delay="600">
        岡山鑽石級前景，S廊道正核心，世界級台積電<br>橋科、白埔產業園區國家級重劃，北高未來蓄勢待發</p>
    </div>
  </article>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';



.s5 {
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
  text-align: center;
    font-weight: 400;pointer-events: none;
    color: #000;transition: transform .5s;
    filter: invert(10%) sepia(85%) saturate(3509%) hue-rotate(209deg) brightness(97%) contrast(90%);

      img.en{width: size(945);display: block;opacity: .2;margin:2em auto -2.5em;}
    .title{display: inline-block;
      font-size:size(62);
      font-weight: 700;letter-spacing: 0.1em;
    //  border-bottom: 1px solid #000
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: -.4em auto .2em;
    }
    @media screen and (min-width: 768px) {
    &.v1{
      filter: invert(1);
      transform: translateY(size(390));
      img.en{opacity: 1;margin:0 auto .7em;}
    .title{
      font-size:size(82);border-bottom: 1px solid #000;
    }
    .subtitle{
      margin: 0em auto .8em;
    }
    
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
      align-items:flex-end;
      img{height: auto; width:size(1315);margin: auto auto 0 auto;
      
  }
    .caption{position: absolute;left:size(300);bottom: .5em;}
    @media screen and (min-width: 768px) {
      &.v1{
        img{width:100%;
        }
        .caption{left:.5em;bottom: .5em;}
    }
  }
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

  .s5 {
  @apply flex-col;
  height:sizem(560);
    padding:3em 0 0 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .txt {
    width:sizem(310);
    margin:0 auto;
    img.en{width:sizem(300);opacity: 1;margin:2em auto .5em;}

    .title{
      font-size:sizem(25);
      border-bottom: 1px solid currentColor;
      padding: 0 0 0.3em 0;
    }
    .subtitle{
      margin: .8em auto 1em;
      font-size:sizem(15);}
  }
  .slider {
   // height: sizem(300);
   height: auto;
    width:100%;
    left:0;
    top: auto;
    bottom:sizem(30);
    &::before{height: 70vw;}
    .slide-item {width:100%;

      img{ width:100%;margin: 0 auto auto auto;
      }
      .caption{left:.5em;font-size:sizem(12);bottom: 1em;}
      
      &.v2{
        img{ width:85%;}
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
  pagination: false,
  // autoplay: true,
  interval: 5000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s4/0.webp", import.meta.url).href,
    caption: "情境示意"
  },
  {
    img:globals.$isMobile() ?new URL("./s4/1m.webp", import.meta.url).href :new URL("./s4/1.webp", import.meta.url).href,
    caption: ""
  },
  {
    img:new URL("./s4/2.webp", import.meta.url).href ,
    caption: "岡山新行政中心模擬圖圖/高雄市府發展局"
  },
  {
    img:new URL("./s4/3.webp", import.meta.url).href ,
    caption: "第87期市地重劃區。圖/高雄市府地政局"
  },
]
</script>

