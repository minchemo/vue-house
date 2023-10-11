<template>
  <article class="s5" ref="s5">
    <div class="bg">
      <span></span>
      <span></span>
      <span v-if="!$isMobile()"></span>
      <span v-if="!$isMobile()"></span>
    </div>
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">水岸生活</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">悠遊水岸 享受森活</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">出門就能享有國際水岸！2公頃的林默娘公園、港濱歷史公園享受水岸悠閒生活，探訪[大魚的祝福]藝術地標。出門就能享受健康！永華運動中心離家近，讓運動不再有藉口，生活美學館，文化展覽提升生活。</p>
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

.s5 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
  .bg{
    span{
      &:nth-child(1){
    top: 3vw;
    left: 9vw;
    font-size: 6vw;
}
      &:nth-child(2){
    top: 10vw;
    left: 2vw;
    font-size: 3vw;
}
      &:nth-child(3){
    top: 14vw;
    right: 2vw;
    font-size: 4vw;}
      &:nth-child(4){
        top: 20vw;
        left: 36vw;
        font-size: 9vw;
        transform: scale(.8);
        background: radial-gradient(ellipse at center, #64c8da33 65%,  #fff0 70%);
        animation-delay: 1.8s;
      }
    }
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

  .s5 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .img{position: absolute;top:sizem(300);left: auto;
    right:sizem(-155);width:sizem(260);bottom: auto;}
  .bg{
    span{
      &:nth-child(1){
    top: 3vw;
    left: 86vw;
    font-size: 8vw;
}
      &:nth-child(2){
    top: 20vw;
    left: 12vw;
    font-size: 3vw;
}
    }
  }

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
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
  autoplay: false,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: "台南生活美學館"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "永華國民運動中心"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "港濱歷史公園"
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "林默娘公園"
  },
]
</script>

