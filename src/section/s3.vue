<template>
  <article class="s3" ref="s3">
  <div class="bg1 absolute">
		<img src="./s1/bg.webp"></div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">南科精彩 耀眼翻轉科技城</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">依據科學園區資料，「南部科學園區」坐擁1兆5855億元年產值，躍升全台最高產值科學園區。護國神山台積電21廠大舉佈局，以更吸引荷商艾司摩爾（ASML）、美商應材、東京威力科創…等國際廠商進駐，未來就業人口看12萬人。南科起飛，周邊房市同步邁進。</p>
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
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:9.5em 0 6em 0;
  font-size:size(19);
  gap:3em;
  flex-wrap: wrap;
    flex-direction:row-reverse;

    .bg1{
    width: 136%;
    bottom: -3vw;
    right: -45%;
	pointer-events: none;
  //opacity: .5;
  z-index: 1;
  overflow: hidden;
  img{width: 100%;transform: scale(-1)translateY(-8.4%)}
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
      left: calc(100% + 3em);
      justify-content: flex-start;
    }
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
flex-direction:column-reverse;


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
    img:new URL("./s3/1.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
]
</script>

