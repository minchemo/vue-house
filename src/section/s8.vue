<template>
  <article class="s8" ref="s8">
    <!--<img src="./s8/40.jpg" class="t0">   -->
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
      <img src="./s8/en.svg" class="en" data-aos="fade-up" data-aos-delay="0">
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="200">國家級市醫特區<br>
        職醫菁英新聚落</h3>
        <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="400" v-if="!$isMobile()">高醫岡山醫院╳高雄市立岡山醫院╳國軍總醫院岡山分院</h4>
        <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="600" v-else>高醫岡山醫院高醫岡山醫院<br>高雄市立岡山醫院<br>國軍總醫院岡山分院</h4>
      <p class="desc" data-aos="fade-up" data-aos-delay="200">高雄首間捷運共構醫院落成岡山，三大醫院匯聚<br>
        醫療、交通雙重優勢，晉升醫療資源最完整的首善之區。</p>
        <img src="./s8/sen.svg" class="sen">
    </div>
  </article>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';



.s8 {
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
    transition: transform .5s;
    filter: none;color: #0D3A79;

      img.en{width: size(590);display: block;opacity: .2;margin:1.5em auto -2.5em;}
    .title{display: inline-block;
      font-size:size(62);
      font-weight: 700;letter-spacing: 0.1em;
      border-bottom: 1px solid currentColor;
      line-height: 1.4;
      br{display:none;}
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: .2em auto .2em;
    }
    .sen{display:none;}
    @media screen and (min-width: 768px) {
    &.v1{color: #000;
      transform: translateY(size(210));
      img.en{opacity: 1;margin:0 auto .7em;filter: invert(65%) sepia(38%) saturate(460%) hue-rotate(145deg) brightness(86%) contrast(88%);}
    .title{
      font-size:size(82);padding: 0 0 .2em;
      br{display:block;}
    }
    .subtitle{
      margin: 0em auto .8em;
    }
    .sen{display:block;width: size(540);
      margin: 1.5em auto 0;filter: invert(65%) sepia(38%) saturate(460%) hue-rotate(145deg) brightness(86%) contrast(88%);}
    
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

  .s8 {
    flex-direction: column-reverse;
  height:sizem(667);
    padding:3em 0 0 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .txt {
    width:sizem(290);
    margin:0 auto auto auto;
    img.en{width:sizem(245);opacity: 1;margin:0em auto 1.5em;}

    .title{
      font-size:sizem(28);
      border-bottom: 1px solid currentColor;
      padding: 0 0 0.3em 0;
      br{display:block;}
    }
    .subtitle{
      margin: .8em auto 1em;line-height: 1.4;
      font-size:sizem(14);}
      &.v1{
        filter: none;color: #0D3A79;
    .sen{display:block;width: sizem(270);position: absolute;bottom: sizem(-250);left: 0;right: 0;
      filter: invert(65%) sepia(38%) saturate(460%) hue-rotate(145deg) brightness(86%) contrast(88%);
      margin: 0em auto 0;}
      } 
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
       // &.v2{width:85%;}
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
    img:new URL("./s8/bg.jpg", import.meta.url).href,
    caption: "情境示意"
  },
  {
    img:new URL("./s8/3.jpg", import.meta.url).href ,
    caption: "高醫岡山分院"
  },
  {
    img:new URL("./s8/1.jpg", import.meta.url).href ,
  //  img:isMobile ?new URL("./s4/1m.webp", import.meta.url).href :new URL("./s4/1.webp", import.meta.url).href,
    caption: "高雄市立岡山醫院"
  },
  {
    img:new URL("./s8/2.jpg", import.meta.url).href ,
    caption: "國軍高雄總醫院岡山分院 "
  },
  
  
]
</script>

