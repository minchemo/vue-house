<template>
  <article class="s7">

  
    <div class="main">
      <div class="txt">
    <h4 class="title" data-aos="fade-up" data-aos-delay="200">延續大合系列卓越口碑<br>
第三期全新預售正式公開</h4>
        <div class="desc" data-aos="fade-up" data-aos-delay="400">從透天別墅到電梯寓所，我們始終堅持低公設、高坪效、高品質，讓首購也能擁有頂級實績的精工品質。

    <ul>
      <li>觀音區 ｜ 和創大合（第一期）<br>
珍稀6戶臨路別墅
      </li>
      <li>新屋區 ｜ 合豐大墅（第二期）<br>
21戶質感社區別墅
      </li>
    </ul>


      </div>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index">
          <img :src="img.img" :alt="img.caption">
          <span class="caption" v-if="img.caption" v-html="img.caption"></span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 {
  @apply relative overflow-hidden flex text-[#FFF];
  width: 100%;
  height:auto;
  font-size: sizem(16);
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  background:url("./s3/bottommo.svg") no-repeat 0 100%, ;
  background-size:100% auto ;
  padding: 0em 0 3.5em 0;
  @media screen and (min-width: 768px) {
  background-image:url("./s7/bottom.svg");
  flex-direction: row-reverse;
     font-size: size(20);
  padding:7em 0 11em 0;
  gap:3em;
  }
  .main {
    @apply flex;
    margin: 0 0 .6em;
      width:100%; 
  flex-direction: column;
  text-align: justify;
  @media screen and (min-width: 768px) {
      width:size(590);

  }

}

.txt {
  @media screen and (max-width: 767px) {
      width:sizem(310); 
      margin: 0 auto;
    }
  @media screen and (min-width: 768px) {
  .title{margin: 0 0 .6em 0;}
}
  
  .desc{
    ul{list-style: disc;margin: 0 0 0 1.5em;
    li{margin: .8em 0;}
  }
  }
}
  .slider {
    margin: 0;
    width:100%;
      height: sizem(250);
  @media screen and (min-width: 768px) {

    width: size(840);
      height: size(560);

  }
    .splide__pagination{
      left: calc(100% + 3em);
      justify-content: flex-start;color: #fff;
    li button.is-active{
      color: #4FC1EF;
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
    img:new URL("./s7/1.webp", import.meta.url).href ,
    caption: "和創大合外觀實景拍攝"
  },
  {
    img:new URL("./s7/2.webp", import.meta.url).href ,
    caption: "合豐大墅外觀實景拍攝"
  },
  {
    img:new URL("./s7/3.webp", import.meta.url).href ,
    caption: "業績實景拍攝"
  },
  {
    img:new URL("./s7/4.webp", import.meta.url).href ,
    caption: "業績實景拍攝"
  },
  {
    img:new URL("./s7/5.webp", import.meta.url).href ,
    caption: "業績實景拍攝"
  },
  
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

