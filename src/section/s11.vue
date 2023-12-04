<template>
  <article class="s11" ref="s11">
    <div class="bg" v-if="!$isMobile()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  <!--div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">雙核心地段</h3>
  </div-->
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">健康純淨 科技靚宅</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">
          ☆Alfa Safe耐震系統<br>
          ☆AI人臉辨識系統 <br>
          ☆永大電梯+ SHARP空氣清淨機<br>
          ☆德國HONEYWELL淨水系統<br>
          ☆英國STUDOR+PAPA排水通氣系統<br>
          ☆電動車友善社區
</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <div class="square" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000"></div>
    <img src="./s11/style.svg" v-if="!$isMobile()" class="style" alt="" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000"/>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s11 {
  @apply relative flex items-center justify-center ;
  width: 100%;
  height:auto;
  padding:7em 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;

  .txt{
    border-top:2px solid #F4A000;
    border-bottom:2px solid #F4A000;
    z-index: 1;
  }

  .style{
    position: absolute;
    left: 0;
    top: size(233);
    opacity: 0.2 !important;
    
  }

  .square{
    position: absolute;
    width: size(830);
    height: size(508);
    z-index: 0;
    background: #F4A000;
    right: size(197);
    top:size(190);
  }

  .img{position: absolute;bottom:size(-30);left:size(-270);width:size(660);
  &::before{content: "";width:120%;
  height: 20%;border-radius: 50%;background: #1691CF;display: block;
  position: absolute;bottom: -10%;left: -10%;
}
  img{width: 100%;position: relative;}}
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
      width: 15.3em;
    }
  }
}

  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(560);
      z-index: 1;
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

  .s11 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

  .square{
    width: sizem(343);
    height: sizem(257);
    right: sizem(0);
    top:auto;
    bottom: 0;
  }

  .img{position: absolute;top:sizem(300);left: auto;
    right:sizem(-155);width:sizem(260);bottom: auto;}

  .main {
    padding: sizem(20) sizem(32.5) sizem(5);
    width: 100%;
}

.txt {
  border:none;

  .subtitle{
    text-align: center;
    
    &::before,
    &::after
    {
        content: "";
        width: sizem(69);
        height: 1.5px;
        background: #F4A000;
        display: inline-block;
        vertical-align: middle;
        
    }
    &::before{
      margin: auto 1em auto 0;
    }
    &::after{
      margin: auto 0 auto 1em;
    }

  }
  .desc{margin:0;text-align: left;}
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
    img:new URL("./s11/1.webp", import.meta.url).href ,
    caption: "ai人臉辨識系統示意"
  },
  {
    img:new URL("./s11/2.webp", import.meta.url).href ,
    caption: "STUDOR+PAPA示意"
  },
  {
    img:new URL("./s11/3.webp", import.meta.url).href ,
    caption: "永大電梯示意"
  },
  {
    img:new URL("./s11/4.webp", import.meta.url).href ,
    caption: "空氣清淨機示意"
  },
  {
    img:new URL("./s11/5.webp", import.meta.url).href ,
    caption: "淨水器示意"
  },
  {
    img:new URL("./s11/6.webp", import.meta.url).href ,
    caption: "電動車友善社區示意"
  },
] 
</script>
