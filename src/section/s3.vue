<template>
  <article class="s3" ref="s3">
    <img src="./s1/img.webp" class="img img1" />
    <img src="./s1/img.webp" class="img img2" v-if="!isMobile" />
  <div class="txt">
    
  </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">生活臻便捷</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">完備生活機能  慢活幸福醍醐味</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">原來竹塘這麼方便！主婦生鮮超市、全聯、7-11…從日常採買到生活小確幸，車行2分鐘通通搞定！鄰近竹塘圖書館與慈航宮，隨時用文化與信仰豐富身心靈，每週四的早市與夜市，更能感受舌尖美味與濃濃人情味。
</p>
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



.s3 {
  @apply relative flex items-center justify-center text-[#fff] bg-[#300b];
  width: 100%;
  height:auto;
  padding:9em 0 9em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  
  @keyframes an {
  to {
     transform:translateY(100%);
  }
}
  .img{position: absolute;
    animation: an 5s ease-in-out infinite alternate;}
    .img1{width: size(150);top:size(0);right: size(260);animation-delay: -5s;}
    .img2{width: size(110);top:size(550);left: size(160);z-index: 5;}

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

  .s3 {
  @apply flex-col;
    height: sizem(630);
    justify-content: space-around;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .img1{width: sizem(50);top:sizem(280);right: sizem(300);}

  .main {
    padding: 0 sizem(32.5);
    margin-top: 0em;
    width: 100%;
    flex-basis: auto;
}

.txt {
  .title{
    &::after,
    &::before{
      width: 2.6em;
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
    img:new URL("./s3/1.webp", import.meta.url).href ,
    caption: "主婦生鮮超市"
  },
  {
    img:new URL("./s3/2.webp", import.meta.url).href ,
    caption: "全聯"
  },
  {
    img:new URL("./s3/3.webp", import.meta.url).href ,
    caption: "7-ELEVEN"
  },
  {
    img:new URL("./s3/4.webp", import.meta.url).href ,
    caption: "竹塘圖書館"
  },
  {
    img:new URL("./s3/5.webp", import.meta.url).href ,
    caption: "慈航宮"
  },
  {
    img:new URL("./s3/6.webp", import.meta.url).href ,
    caption: "竹塘傳統市場"
  },
  {
    img:new URL("./s3/7.webp", import.meta.url).href ,
    caption: "夜市"
  },
]
</script>

