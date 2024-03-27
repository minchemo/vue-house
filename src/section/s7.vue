

<template>
  <article class="s7">
    <div class="love1"><img src="./s1/love.png" alt=""></div>
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">森活族最愛</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">都心綠肺，青潤濃抹，<br />公園第一排，景觀頭等艙</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">碧波盈盈，無疆視野，喧囂自外<br />
窗映時序，風光巨幕，森籟共鳴<br />
坐落市心難得2800坪公園預定地樹海首排<br />
不僅吸附落塵，降低PM2.5的危害<br />
運動/散步/溜溜孩子與毛小孩，健康樂活你的植感生活</p>
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
  @apply relative overflow-hidden flex items-center justify-center text-[#555] bg-[#F2F2F2];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;
    .love1{
    z-index: 1;
    position: absolute;  
    width: size(180);
    right: size(160);
    bottom: size(110); 
    animation: an 3s ease-in-out infinite alternate-reverse;
     transform:translate(10%, 20%);
     img{transform: scaleX(-1)rotate(-7deg);width:100%;}
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
    color:#B78E63;
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
    color:#B78E63;
    line-height: 1.5;
  }
  .desc{
    margin: 0 0 1em;
    b{
    color:#B78E63;}
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

  .s7 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
    .love1{
    width: sizem(60);
    right: sizem(40);
    bottom:auto; 
    top:sizem(100);
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
    img:new URL("./s7/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s7/1_m.webp", import.meta.url).href : new URL("./s7/1.webp", import.meta.url).href,
    caption: "老街河岸綠地 實景拍攝",
 },
  {
    img:new URL("./s7/2.jpg", import.meta.url).href ,
    caption: "老街河岸綠地 實景拍攝",
  },
]
</script>

