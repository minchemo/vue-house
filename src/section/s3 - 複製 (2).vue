<template>
  <article class="s3" ref="s3">
    <img src="./s3/en.svg" class="en" alt="en">
    <img src="./s3/img.webp" class="img user-n events-n" alt="高鐵示意圖">
    <div class="main">
      <div class="txt">
    <div class="title"><img src="./s3/titleicon.png">特區</div>
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">高鐵金軸<br> 億級科技領地</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">競速價值，高鐵特區核心富域，快意城際近在咫尺；繁盛榮景，竹北高鐵站步行微距650M，近距聯發科、未來之心Getway Plaza，昂首對位矽谷，區段價值不言而喻。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex items-center text-[#fff] bg-[#000];
  width: 100%;
  height:auto;
  padding:0 0 10em 0;
  font-size:size(20);
  gap:0em;
  flex-wrap: wrap;
    flex-direction:row-reverse;
    justify-content:flex-start;
    align-items: flex-end;
    .en{margin: size(180) auto 0;width: size(1530);}
  .img{position: absolute;bottom: 0;left: 0;width: size(1067);z-index: 3
  }

  .main {
    @apply flex;
    flex: 1;
    margin: 0;
  flex-direction: column;
  text-align: justify;z-index:2;
}
.txt{width: size(535);padding: 0 0 0 2.8em;

  .title{position: absolute;top: 0;right:-8em;
  }
  .subtitle{margin: 3.4em 0 0 0;text-align: right;
    &::after{bottom: -.7em;}
    &::before{right: -4.8em;}
  }
}



  .slider {
    margin: 0 0 0 size(190);
    flex-basis: size(999);
    height:auto;z-index: 1;
    img{width: 100%;}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s3 {
@apply flex-col;
  height: auto;
  padding: 0;
font-size:sizem(15);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
  .hr{
  width:sizem(500);bottom: sizem(-8);left:sizem(-50);
  }
.main {
  padding: 0 sizem(32.5);
  width: 100%;
}

.txt {margin: 4.4em auto 1.3em;width: 100%;
}


.slider {
  position: relative;
  height: auto;
  width: 115%;
  left: 0;
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
  pagination: false,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s3/1.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
]
</script>

