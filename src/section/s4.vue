<template>
  <article class="s4" ref="s4">
  <div class="bg1 absolute">
		<img src="./s1/bg.webp"></div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">城市機能 生活便利翻轉</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">山上國中、山上國小，輕輕漫步皆可抵達，享受完整學區、教育資源。假日散步去山上傳統市場逛逛，是日常的美好；下班行車經善化全聯買食材，煮頓簡單的晚餐，生活就該如此溫暖愜意。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile && imgs.length > 1">
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



.s4 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:10em 0 10em 0;
  font-size:size(19);
  gap:3em;
  flex-wrap: wrap;
  .bg1{
    width: 100%;
    height: size(3000);
    top:  size(670);
    left: 0;
	pointer-events: none;
  //opacity: .5;
  z-index: 1;
  overflow: hidden;
  img{width:  size(2670);transform:rotate(-90deg)translateX(-100%);transform-origin: 0 0%}
}

  .main {
    @apply relative flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
  z-index: 3;
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
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
flex-direction:column-reverse;

  .bg1{
    height: sizem(1500);
    top:  sizem(450);
  img{width:  sizem(1300);
  }
}


  .main {
    padding: 0 sizem(30);
    width: 100%;
}

.txt {margin: 2em auto 6.5em;
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


const imgs = [
  {
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
  {
    img:new URL("./s4/3.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
  {
    img:new URL("./s4/4.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
  {
    img:new URL("./s4/5.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
]
const options = {
  rewind: false,
  arrows: false,
  pagination: imgs.length > 1,
  autoplay: imgs.length > 1,
  interval: 4000,
  gap: 10,
  type: 'loop',
  drag: imgs.length > 1
}
</script>

