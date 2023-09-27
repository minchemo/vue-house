<template>
  <article class="s3">
    <div class="main">
      <div class="txt">
        <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >左擁新市鎮特區<br>
右享梧棲市心商圈</h2>
<ul class="desc">
  <li>交通、產業、醫療、娛樂、休閒、運動，國際性的十大建設翻轉海線。</li>
<li>重量級建商、國際集團共同打造領海新市鎮。</li>
</ul>
    <img src="./s3/img.svg" class="en" data-aos="zoom-in" data-aos-delay="200">
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="imgs.length > 1">
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

.s3 {
  @apply relative flex items-center justify-center text-white;
  width: 100%;
  height: size(800);
  padding:0;
  font-size:size(20);
  gap:3em;
  margin-bottom:8em;

  .bg1{position: absolute;top:-4em;left:size(-69);width:size(429);opacity: .6;}
  .main {
    @apply flex text-[#fff];
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
  .txt {
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    color: #42167B;
  .title{
    font-size: 2em;
    margin: 0 auto .2em;
    line-height: 1.4;
    font-weight: 900;
	  border: 4px solid transparent;
    border-image: linear-gradient(70deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);
	  border-image-slice: 1;
    width: 10em;
    padding: .1em 0;
    text-align: center;

  }
  .desc{
    padding-left:1.5em ;
    list-style:disc;
    li{color: #000;}
  }
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
      left:auto;
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
  @apply flex-col;
    height:auto;
    padding:3em 0 0;
    margin: 0;
  font-size:sizem(13);

.main {
    padding: 0 sizem(32.5);
    text-align: center;
  .txt {
  .title{
    font-size: 1.9em;
    margin: 0 0 .6em;
  }
  .en{
    height: 10.8em;
  }
  .subtitle{
    font-size: 1.3em;
    margin: 2em 0 .3em;
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
    img:new URL("./s3/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "聽心苑2外觀3D示意圖"
  },
]
const options = {
  rewind: false,
  arrows: false,
  pagination:  imgs.length > 1 ? true : false,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

</script>
