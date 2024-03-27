

<template>
  <article class="s9">
    <div class="img">
  <img class="box" src="https://i.imgur.com/tEgarks.png">
  <img class="img1" src="./s9/img1.png">
  <img class="img2" src="./s9/img2.png">
  <img class="img3" src="./s9/img2.png">
  <img class="img4" src="./s9/img4.png">
  <img class="img5" src="./s9/img5.png">
</div>
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">沒有人不愛</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">賞河景、觀夕照、遊老街、探人文⋯<br />
在家，就能小旅行</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">閒看觀音山巒疊翠、大屯連峰<br />
沈浸淡水河靜謐流淌、江帆船影<br />
騎單車、坐渡輪、賞河景、觀夕照<br />
遊老街、探人文、享美食<br />
山水和風月，日常的美好，在家，就能小旅行</p>
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

.s9 {
  @apply relative overflow-hidden flex items-center justify-center text-[#fff];
  width: 100%;
  height: auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  .img {
  //尺寸位子只需要調這邊
  position: absolute;
  width:size(462);
  right: 0;
  bottom: size(-150);
  //底下都不用動
  @keyframes an {
    to {
      transform: rotate(0);
    }
  }
  img {
    position: absolute;
    &.box {
      width: 100%;
      position: relative;
    }
  }
  .img1 {
    width: 19.7%;
    top: 0%;
    left: 50%;
    transform: rotate(10deg);
    transform-origin: 7% 30%;
    animation: an 1.5s ease-in-out infinite alternate;
   
  }
  .img2 {
    width: 22.6%;
    top: 33.4%;
    left: 14.0%;
    transform: rotate(90deg);
    transform-origin:50% 50%;
    animation: an 2s linear infinite;}
  .img3 {
    width: 22.6%;
    top: 34%;
    left: 56%;
    transform: rotate(90deg);
    transform-origin:50% 50%;
    animation: an 2s linear infinite;}
  .img4 {
    width: 20.6%;
    top: 11.8%;
    left: 13.9%;
    transform: rotate(5deg);
    transform-origin: 55% 80%;
    animation: an 1.5s ease-in-out infinite alternate;
  }
  .img5 {
    width: 100%;
    top:0;
    left: 0;
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
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    width: 100%;
  .title{
    font-size: 2.2em;
    margin: 2em 0 0em;
    line-height: 1.4;
    font-weight: 700;
    text-align: center;
    &::after,
    &::before{
      content: "";
      width: 15.7em;
      height: 1px;
      background: currentColor;
      display: inline-block;
      vertical-align: middle;
      margin: auto .5em;
    }
  }
  .subtitle{
    font-size: 1.65em;
    font-weight: 700;
    margin: 0 0 .8em;
    line-height: 1.5;
  }
  .desc{
    margin: 0 0 1em;
    b{}
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
      left: calc(100% + 3em);
      justify-content: flex-start;
    color: #fff; 
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .img {
  //尺寸位子只需要調這邊
  width:sizem(150);
  right: sizem(-10);
  top: sizem(150);
  bottom: auto;
}

  .main {
    padding: 0 sizem(30);
    width: 100%;
}


.txt {
  .title{
    font-size: 1.8em;
    &::after,
    &::before{
      width: 4.2em;}
  }
  .subtitle{
    font-size: 1.4em;
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
    img:new URL("./s9/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s9/1_m.webp", import.meta.url).href : new URL("./s9/1.webp", import.meta.url).href,
    caption: "老街河岸 實景拍攝",
 },
  {
    img:new URL("./s9/2.jpg", import.meta.url).href ,
    caption: "金色水岸 實景拍攝",
  },
  {
    img:new URL("./s9/3.jpg", import.meta.url).href ,
    caption: "淡水老街 實景拍攝",
  },
  {
    img:new URL("./s9/4.jpg", import.meta.url).href ,
    caption: "漁人碼頭 實景拍攝",
  },
  {
    img:new URL("./s9/5.jpg", import.meta.url).href ,
    caption: "淡水老街小巷 實景拍攝",
  },
]
</script>

