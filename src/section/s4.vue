<template>
  <article class="s4" ref="s4">
    <img src="./s1/img.webp" class="img img1" />
    <img src="./s1/img.webp" class="img img2" />
  <div class="txt">
    
  </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">漫翠臻樂活</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">少點熙攘 多點蓊鬱<br>徜徉都市難尋的豐潤綠野</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">僅需4分鐘車程即可到達竹塘風雨球場，在充滿設計感的建築中運動，晴雨無礙地綻放活力。溪州森林公園、牛稠仔公園更是您週末的秘密花園，漫步在蒼翠林間，讓心靈在時間之外悄然栖息。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :key="img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s4 {
  @apply relative flex items-center justify-center text-[#fff] bg-[#300b];
  width: 100%;
  height:auto;
  padding:9em 0 9em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
  .img{position: absolute;
    animation: an 5s ease-in-out infinite alternate;}
    .img1{width: size(110);top:size(-50);right: size(560);animation-delay: -5s;}
    .img2{width: size(130);top:size(700);left: size(160);z-index: 5;}

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

  .s4 {
  @apply flex-col;
    height: sizem(600);
    justify-content: space-around;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
    .img1{width: sizem(40);top:sizem(-20);right: sizem(70);}
    .img2{width: sizem(30);top:sizem(30);left: sizem(60);}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
    flex-basis: auto;
    margin-top: 0em;
}

.txt {
  .title{
    &::after,
    &::before{
      width: 2em;
    }
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
    img:new URL("./s4/1.webp", import.meta.url).href ,
    caption: "竹塘公園風雨球場"
  },
  {
    img:new URL("./s4/2.webp", import.meta.url).href ,
    caption: "溪州森林公園"
  },
  {
    img:new URL("./s4/3.webp", import.meta.url).href ,
    caption: "牛稠仔公園"
  },
]
</script>

