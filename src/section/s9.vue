<template>
  <article class="s9">
    <img src="./s1/img.webp" class="img img1" />
    <img src="./s1/img.webp" class="img img2" />
    
    <div class="main">
      <div class="txt">
        <h3 class="title"  data-aos="fade-up" data-aos-delay="0">傳承臻幸福</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">日系美墅 傳承臻品</h4>
        <p class="desc" data-aos="fade-up" v-if="!isMobile" data-aos-delay="400">以現代日式風格，勾勒出一幅全齡皆可悅的美好生活畫卷，離塵不離城，靜謐如初見，於繁華中保有一方心靈淨土。<br>竹塘難得一見的電梯美墅，為懂生活的您而生，值得臻藏傳承，細細品味，美好歲月，如梯而上。</p>
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

.s9 {
  @apply relative flex flex-col items-center justify-center bg-[#300b];
  width: 100%;
  // height: size(800);
  padding:0 0 7em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
  .img{position: absolute;
    animation: an 5s ease-in-out infinite alternate;}
    .img1{width: size(150);top:size(-50);right: size(60);animation-delay: -5s;}
    .img2{width: size(90);top:size(700);left: size(90);z-index: 5;}

  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  color: #fff;
.title{
  text-align: center;
&::after,
&::before{
      content: "";
      width: 8.7em;
      margin: auto 1em;
      height: 1px;
      background: #fff;
      display: inline-block;
      vertical-align: middle;
    }
}
.desc{font-size:size(30);}
}

  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(844);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(844);
      
    }
    .arrows .prev, .arrows .next{
      width:3%;
    }

    .splide__pagination{
      bottom: .5em;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
  @apply flex-col;
    height: sizem(600);
    justify-content: space-around;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .img1{width: sizem(40);top:sizem(0);right: sizem(40);}
  .img2{width: sizem(25);top:sizem(180);left: sizem(5);}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {
  margin-top: 3.5em;
.title{
&::after,
&::before{
width:0em;
}
&::before{margin-right: 1em; margin-left: 0;}
 &::after{margin-left: 1em; margin-right: 0;}
}
.desc{
    font-size: sizem(12);
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
      height: sizem(210);
      
    }
    .arrows .prev, .arrows .next{
      width:8%;
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

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
    img:new URL("./s9/1.webp", import.meta.url).href ,
    caption: "本案外觀3D透視示意圖"
  },
  {
    img:new URL("./s9/2.webp", import.meta.url).href ,
    caption: "本案外觀3D透視示意圖"
  },
  {
    img:new URL("./s9/3.webp", import.meta.url).href ,
    caption: "本案外觀3D透視示意圖"
  },
  {
    img:new URL("./s9/4.webp", import.meta.url).href ,
    caption: "本案外觀3D透視示意圖"
  },
  {
    img:new URL("./s9/5.webp", import.meta.url).href ,
    caption: "本案外觀3D透視示意圖"
  },
  {
    img:new URL("./s9/6.webp", import.meta.url).href ,
    caption: "本案外觀3D透視示意圖"
  },
]
</script>

