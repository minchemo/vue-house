

<template>
  <article class="s6">
    <div class="bg">
      <span></span>
      <span></span>
      <span></span>
      <span v-if="!$isMobile()"></span>
      <span v-if="!$isMobile()"></span>
      <span v-if="!$isMobile()"></span>
    </div>
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0"><span>味覺｜</span>多元生活的豐富滋味 </h3>
  </div>
    <div class="main">
      <div class="txt font-['Noto_Serif_TC',serif]">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">青埔高鐵特區旁，品味豐富多彩的生活！ </h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">隨著華泰名品城、航空城計劃、草漯重劃區的完善，這裡將成為美食、購物、休閒娛樂的理想場所。每一天的生活都充滿著多樣滋味，從青埔高鐵特區帶來的國際風采，到華泰名品城的豐富商圈，這裡將是品味生活的理想地，房市價值也如生活滋味般不斷提升。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index" v-lazy:background-image="img.img">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  @apply relative overflow-hidden flex items-center justify-center text-[#FFF];
  background: url("./right_bg.jpg") 50% 50%;
  background-size: cover;
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  .bg{
    span{
      &:nth-child(1){
        top: 1vw;
        left: 10vw;
        font-size: 3.5vw;
      }
      &:nth-child(2){
        top: 12vw;
        left: 2vw;
        font-size: 2vw;
      }
      &:nth-child(3){
        top: 3vw;
        left: 7vw;
        font-size: 9vw;
        transform: scale(.8);
        background: radial-gradient(ellipse at center, #bd925a33 65%,  #fff0 70%);
        animation-delay: 1.8s;
      }
      &:nth-child(4){
        top: 5vw;
        left: 26vw;
        font-size: 1.5vw;
      }
      &:nth-child(5){
        top: 12vw;
        right: 33vw;
        font-size: 4.5vw;
      }
      &:nth-child(6){
        top: 12vw;
        right: 1vw;
        font-size: 2.5vw;
        animation-delay: 1.5s;
      }
    }
  }



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
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      left: calc(100% + 3em);
      justify-content: flex-start;
    color: #C5C5C5; 
    li button.is-active{
      color: #B78E63;
    }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
  @apply flex-col;
  background: url("./bg_m.jpg") 50% 50%;
  background-size: cover;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:1.5em;

.img{bottom:sizem(230);right:sizem(-30);width:sizem(250);}
.bg{
    span{
      &:nth-child(1){
        top: 4vw;
        left: 82vw;
        font-size: 6vw;
      }
      &:nth-child(2){
        top: 57vw;
        left: 2vw;
        font-size: 8vw;
      }
      &:nth-child(3){
        top: 3vw;
        left: 77vw;
        font-size: 23vw;
      }
    }
  }

  .main {
    padding: 0 sizem(30);
    width: 100%;
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
    img:new URL("./s6/1.jpg", import.meta.url).href ,
    caption: "大園商圈街景"
  },
  {
    img:new URL("./s6/2.jpg", import.meta.url).href ,
    caption: "大園商圈街景"
  },
  {
    img:new URL("./s6/3.jpg", import.meta.url).href ,
    caption: "大園商圈街景"
  },
  {
    img:new URL("./s6/4.jpg", import.meta.url).href ,
    caption: "大園商圈街景"
  },
  {
    img:new URL("./s6/5.jpg", import.meta.url).href ,
    caption: "大園商圈街景"
  },
  {
    img:new URL("./s6/6.jpg", import.meta.url).href ,
    caption: "大園商圈街景"
  },
  {
    img:new URL("./s6/7.jpg", import.meta.url).href ,
    caption: "大觀路店家街景"
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

