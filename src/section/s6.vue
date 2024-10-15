<template>
  <article class="s6" ref="s6">
     <!-- <img src="./s6/01.jpg" class="t0"> -->
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
      <img src="./s6/en.svg" class="en" data-aos="fade-up" data-aos-delay="0">
      <h4 class="subtitle t1 font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="200">捷運RK1╳台鐵岡山站</h4>
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="400"> 青快路網 無往不利</h3>
      <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="600">穿梭高雄都心 隨掌城市脈動</h4>
     <p class="desc" data-aos="fade-up" data-aos-delay="200">約3分鐘岡山車站，一站直達百貨核心，<br>
近享國道、高鐵、捷運、台鐵，<br>
串起都會核心，全台一日生活圈，輕鬆get！</p>
    </div>
  </article>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';



.s6 {
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
    transition: transform .5s;
    margin: auto 0 auto auto;width: size(685);
    filter: none;color: #0D3A79;

      .en{width: size(530);display: block;margin:0em auto 1.1em 0;}
    .title{display: inline-block;
      font-size:size(62);
      font-weight: 700;letter-spacing: 0.1em;
      border-bottom: 1px solid currentColor;
      margin: -.2em 0 0 0;
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: .1em auto .1em;
    }
    .desc{
      margin: .8em auto 0em;
    }
    @media screen and (min-width: 768px) {
    &.v1{text-align: center; margin: 0 auto auto auto;
      filter:saturate(0)brightness(600%)drop-shadow(0 0 8px #0D3A7999);
      width:auto;
      transform: translateY(size(120));
      .en{opacity: 1;margin:0 auto 1.6em;}
    .title{
      font-size:size(82);
    }
    .subtitle{
      margin: 0em auto .8em;
      &.t1{font-size:size(40); margin: 0em auto .1em;}
    }
    .desc{position: absolute;bottom: size(-420);left: size(-450);text-align: justify;}
    
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

  .s6 {
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
    .en{width:sizem(250);opacity: 1;margin:1.5em auto 0em;}

    .title{
      font-size:sizem(25);
      border-bottom: 1px solid currentColor;
      padding: 0 0 0.3em 0;
    }
    .subtitle{
      margin: .8em auto .5em;
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
      img{ width:100%;margin: 0 auto 0em auto;
        &.v2{width:85%;}
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
    img:new URL("./s6/bg.jpg", import.meta.url).href,
    caption: "情境示意圖"
  },
  {
    img:new URL("./s6/1.jpg", import.meta.url).href,
    caption: "高鐵左營站"
  },
  {
    img:new URL("./s6/2.jpg", import.meta.url).href ,
    caption: "岡山車站"
  },
  {
    img:new URL("./s6/3.jpg", import.meta.url).href ,
    caption: "岡山車站與RK1捷運站"
  },
]
</script>



