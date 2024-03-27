<template>
  <article class="s11">
    <div class="love1"><img src="./s1/love.png" alt=""></div>
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">懂生活，肯定愛</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">富而不奢的國際精品味，<br />新富生活質感對位</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">
          日系精工與德國極致工藝<br />
讓療癒廚房與衛浴，解放超載疲累的身心<br />
降噪地板與隔音氣密窗，日藏每個舒適又靜好時光<br />
完善的淨水系統，讓每一滴水都乾淨又純粹<br />
嚴格精選，專鑄細節，用心呈現美好您的日常
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

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s11 {
  @apply relative flex items-center justify-center text-[#555] bg-[#F2F2F2];
  width: 100%;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
    .love1{
    z-index: 1;
    position: absolute;  
    width: size(150);
    left: size(160);
    bottom: size(70); 
    animation: an 3s ease-in-out infinite alternate-reverse;
     transform:translate(10%, 20%);
     img{transform:rotate(-20deg);width:100%;}
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
      right: calc(100% + 3em);
      justify-content: flex-end;
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

  .s11 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
    .love1{
    width: sizem(60);
    left: auto;
    right: sizem(40);
    bottom:auto; 
    top:sizem(100);
     img{transform:rotate(20deg)scaleX(-1);width:100%;}
    }

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

  .txt {
  .title{
    font-size: 1.8em;
    &::after,
    &::before{
      width: 3.3em;}
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
    img:new URL("./s11/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s11/1_m.webp", import.meta.url).href : new URL("./s11/1.webp", import.meta.url).href,
    caption: "廚具情境示意圖"
  },
  {
    img:new URL("./s11/2.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
  {
    img:new URL("./s11/3.jpg", import.meta.url).href ,
    caption: "衛浴情境示意圖"
  },/*
  {
    img:new URL("./s11/4.jpg", import.meta.url).href ,
    caption: "衛浴情境示意圖"
  },*/
  {
    img:new URL("./s11/5.jpg", import.meta.url).href ,
    caption: "電梯情境示意圖"
  },
  {
    img:new URL("./s11/6.jpg", import.meta.url).href ,
    caption: "木地板情境示意圖"
  },
  {
    img:new URL("./s11/7.jpg", import.meta.url).href ,
    caption: "電子鎖情境示意圖"
  },
]
/*
const imgs = [
  {
    img: getImg('s11/1'),
    caption: "內湖 豁達達禮"
  },
  {
    img: getImg('s11/2'),
    caption: "林口 長耀PARK"
  },
  {
    img: getImg('s11/3'),
    caption: "林口 長耀初"
  },
  {
    img: getImg('s11/4'),
    caption: "林口 長耀里"
  },
]
*/
</script>

