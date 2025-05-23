<template>
  <article class="s5" ref="s5">
    <img src="./s1/img.webp" class="img img1" />
    <img src="./s1/img.webp" class="img img2" v-if="isMobile" />
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">交通臻便利</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">坐擁樞紐優勢  從容縱橫全台</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">駕車約10分鐘可抵國道一號，北斗交流道與台1線交織而成的便捷動脈，輕鬆連接全台南北，快速往來彰化市區、台中、高雄等地。鄰近溪州大橋，大幅縮短至雲林、嘉義等地的通勤時間。</p>
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



.s5 {
  @apply relative flex items-center justify-center text-[#fff] bg-[#300b];
  width: 100%;
  height:auto;
  padding:9em 0 9em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  .img{position: absolute;
    animation: an 5s ease-in-out infinite alternate;}
    .img1{width: size(110);top:size(0);right: size(700);animation-delay: -2s;}

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
      width: 8.3em;
    }
  }
}

  .slider {
    margin: 0;
    flex-basis: size(840);
    width:size(840) ;
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

  .s5 {
  @apply flex-col;
    //height: sizem(610);
    justify-content: space-around;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .img1{width: sizem(60);top:sizem(200);right: sizem(30);}
  .img2{width: sizem(40);top:sizem(-20);left: sizem(50);}

  .main {
    padding: 5em sizem(32.5) 5em sizem(32.5);
    width: 100%;
    flex-basis: auto;
}

.txt {
  .title{
    &::after,
    &::before{
      width: 1em;
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
    img:new URL("./s5/1.webp", import.meta.url).href ,
    caption: "情境示意"
  },
  {
    img:new URL("./s5/2.webp", import.meta.url).href ,
    caption: "情境示意"
  },
]
</script>

