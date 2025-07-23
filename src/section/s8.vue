<template>
  <article class="s8">

  
    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="200">坐鎮雙城正核心<br>城市繁華等你一聲號令</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">一座城不夠看，板橋土城雙城才痛快！「松陽馥麗」定錨新土城永寧生活圈，緊臨新板特區，精準踏穩雙城生活圈正核心。<br>向北可快速連接板橋大遠百百貨、威秀影城與國際級商辦，向南則坐擁永寧商圈、大全聯、公園、學區等成熟生活機能。都市生活不再只有單一選擇，而是從容切換繁華與靜謐、效率與自在的雙軸平衡。生活的每一步都走在最核心的節奏上，雙城資源無縫接軌。</p>
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

.s8 {
  @apply relative overflow-hidden flex items-center justify-center text-[#FFF];
  width: 100%;
  height:auto;
  padding:7em 0;
  font-size:size(18);
  gap:3em;
  //flex-direction: row-reverse;
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
    width: size(840);
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
      color: #529130;
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
  height: auto;
  padding:0 0 5em 0;
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
    img:new URL("./s8/1.webp", import.meta.url).href ,
    caption: "日月光廣場"
  },
  {
    img:new URL("./s8/2.webp", import.meta.url).href ,
    caption: "土城大全聯"
  },
  {
    img:new URL("./s8/3.webp", import.meta.url).href ,
    caption: "大廟市場"
  },
  {
    img:new URL("./s8/4.webp", import.meta.url).href ,
    caption: "UNIQLO"
  },
  {
    img:new URL("./s8/5.webp", import.meta.url).href ,
    caption: "新板特區"
  },
  {
    img:new URL("./s8/6.webp", import.meta.url).href ,
    caption: "全聯福利中心"
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

