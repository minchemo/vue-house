

<template>
  <article class="s9">
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">嚴選建材</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">精品建材，尊榮享受</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">衛浴：浴廁採用ＴＯＴＯ衛浴設備、ＨＣＧ、西班牙ＲＯＣＡ免治馬桶。<br>
廚具：世界級德匠名㕑，附贈林內雙口瓦斯爐、抽風機、烘碗機。<br>電梯：永大六人座電梯。<br>其他：錦鋐氣密窗、冠軍磁磚、台灣水泥、天然瓦斯。
</p>
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
  @apply relative overflow-hidden flex items-center justify-center text-[#000] bg-[#F8F8F8];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;

.img{position: absolute;bottom:0;right:size(50);width:size(795);
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
background: #C9A063;
}
}}

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

  .s9 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

.img{bottom:sizem(230);right:sizem(-30);width:sizem(250);}

  .main {
    padding: 0 sizem(30);
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
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s9/1.jpg", import.meta.url).href ,
    caption: "電梯"
  },
  {
    img:new URL("./s9/2.jpg", import.meta.url).href ,
    caption: "廚具"
  },
  {
    img:new URL("./s9/3.jpg", import.meta.url).href ,
    caption: "ROCA西班牙百年衛浴"
  },
  {
    img:new URL("./s9/4.png", import.meta.url).href ,
    caption: ""
  },
  {
    img:new URL("./s9/5.jpg", import.meta.url).href ,
    caption: "乾濕分離衛浴"
  },
  {
    img:new URL("./s9/6.jpg", import.meta.url).href ,
    caption: "Panasonic"
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

