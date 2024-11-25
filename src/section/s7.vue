

<template>
  <article class="s7">
    <div class="bg">
      <span></span>
      <span></span>
      <span></span>
      <span v-if="!$isMobile()"></span>
      <span v-if="!$isMobile()"></span>
      <span v-if="!$isMobile()"></span>
    </div>
  <div class="txt">
    <h3 class="title-sub font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">Living in a Green Forest </h3>
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">擁抱公園綠意 迎接植感生活</h3>
    <hr class="hr" v-if="isMobile">
  </div>
    <div class="main">
      <div class="txt">
        <transition name="fade" mode="out-in">
          <h4 class="subtitle" :key="currentImg.subtitle" v-html="currentImg.subtitle"></h4>
        </transition>
        <transition name="fade" mode="out-in">
        <p :key="currentImg.desc" v-html="currentImg.desc"></p>
        </transition>
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

.s7 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
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
        background: radial-gradient(ellipse at center, #64c8da33 65%,  #fff0 70%);
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


.txt {
  
  .title{
    &::after,
    &::before{
      width: 11.1em;
    }
  }
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

  .s7 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

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

.txt {
  .title{
    &::after,
    &::before{
      width: 0;
    }
  }
  .hr{
    width: sizem(100);
    margin: sizem(20) auto sizem(10);
    }
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
    img:new URL("./s7/1.webp", import.meta.url).href ,
    caption: "77藝文町",
    subtitle: "16公里香榭大道 蒼翠相棲 私語四季",
    desc: "超越公園價值，成就整座桃心的馥郁，桃園鐵路地下化後的舊鐵道，將打造16公里香榭大道，用自然綠蔭溫柔消弭都會邊際，蓊鬱樹海篩落細碎天光，自在漫步其上，自然是城市原點，更是未來錨點。",
 },
  {
    img:new URL("./s7/2.webp", import.meta.url).href ,
    caption: "陽明運動公園",
    subtitle: "3萬坪陽明運動公園 桃園的中央公園",
    desc: "擁有綠蔭景深才是品味人生！三萬坪陽明公園，營造桃心慢活時區，遊戲場、體健區、生態教育應有盡有，大人在樹海中跑出健康，孩童在滑梯旁玩耍成長，大手拉小手奔赴草地懷抱，一座陽明運動公園，留住時序節氣，裝載滿城歡聲笑語。",
  },
  {
    img:new URL("./s7/3.webp", import.meta.url).href ,
    caption: "延平公園",
    subtitle: "3萬坪陽明運動公園 桃園的中央公園",
    desc: "擁有綠蔭景深才是品味人生！三萬坪陽明公園，營造桃心慢活時區，遊戲場、體健區、生態教育應有盡有，大人在樹海中跑出健康，孩童在滑梯旁玩耍成長，大手拉小手奔赴草地懷抱，一座陽明運動公園，留住時序節氣，裝載滿城歡聲笑語。",
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

