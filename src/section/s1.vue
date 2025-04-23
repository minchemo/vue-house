<template>
  <article class="s1">
    <!-- <img src="./s1/pc.jpg" class="t0" > --><img src="./s1/mo.png" class="t0" >
   <!--  <div class="main">
      <div class="txt">
        <div class="t1 decor" data-aos="fade-up">一年一樹，城森林</div>
        <div class="t2">建築為秧，城市為畝。在長耀一畝田的哲學裡，滿懷對大地的謙卑與感謝，於是內湖到林口，我們用心建築城市少數坐擁綠意的精華沃土，期盼藉由自然風土滋養每一個人，同時成為一個有根的人。</div>
      </div>
      <div class="caption">{{ imgs[currentSlideIndex].caption }}</div>
    </div> -->

    <div class="slider"><!-- 
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>  -->
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :key="img">
          <div class="caption font-['Noto_Serif_TC',serif]">{{ img.caption }}</div>
        </SplideSlide>
      </Splide>
    </div>
    <img src="./s1/title.svg" alt="" class="title">
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s1 {
  @apply relative text-white;
  width: 100%;
  // height: size(1280);
  .t0{position: absolute;width: 100%;top:0;left: 0; pointer-events: none;z-index: 9;opacity: 0.3;}
/*
  .main {
    @apply grow flex items-center justify-center text-[#1E1B1B];
    .caption {
      @apply absolute;
      left: size(580);
      bottom: size(36);
      font-family: 'Noto Sans TC';
      font-weight: 500;
      font-size: size(16);
      letter-spacing: 0.05em;
      padding-bottom: size(16);
      border-bottom: size(1) solid #000;
    }
  .txt {
    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(61);
      letter-spacing: 0.05em;
      &::before {
        width: size(161);
        height: size(67.04);
        right: 5%;
        bottom: -11%;
      }
      &::after {
        width: size(56.72);
        height: size(64.45);
        right: -9%;
        bottom: 50%;
      }
    }
    .t2{
      font-family: 'Noto Serif TC';
      font-weight: 600;
      width: size(509);
      font-size: size(20);
      line-height: 170%;
      letter-spacing: 0.05em;
      margin-top: size(34);
    }
  }
}*/
.title{font-size: size(30);
  position: absolute;top:size(88);left:size(70);width:size(605);
  filter: drop-shadow(0.1em 0.1em 0.4em #0a0a0acc);z-index:3;
}
  .slider {
    width: 100%; height:auto;
    aspect-ratio: 1920/1280;
    position: relative;
   /* flex-basis: size(1000);
    height: 100%;*/
    .caption {
      position: absolute;
      font-size: size(28);
      right: .5em;
      bottom: .5em;
      font-weight: 700;
      color: #fff;
    }
    .splide__pagination{position: absolute;}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
  .slider {
    .caption {
      font-size: sizem(12);
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
  arrows: globals.$isMobile()? true : false,
  pagination: globals.$isMobile()? false : true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s1/1.webp", import.meta.url).href ,
    caption: "頂誠建築團隊丰景系列外觀實景拍攝"
  },
  {
    img: new URL("./s1/2.webp", import.meta.url).href ,
    caption: "頂誠建築團隊丰景系列外觀實景拍攝"
  },
  {
    img: new URL("./s1/3.webp", import.meta.url).href ,
    caption: "頂誠建築團隊丰景系列外觀實景拍攝"
  },
  {
    img: new URL("./s1/4.webp", import.meta.url).href ,
    caption: "頂誠建築團隊丰景系列外觀實景拍攝"
  },
]
</script>
