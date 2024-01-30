<template>
  <article class="s11" ref="s11">
   <img class="bg0" src="./s11/bg.webp" alt="" srcset="">
    <div class="main">
      <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">大師聚首聯名　　<br>　　水岸地標鉅作</h3>
      </div>
    </div>
    <div class="img" data-aos="fade-up" data-aos-delay="200">
    <img src="./s11/1.webp" alt="img">
    <h4 class="subtitle">高樓結構權威</h4>
    <div class="desc">築遠工程顧問  張盈智</div>
  </div>
    <div class="img" data-aos="fade-up" data-aos-delay="200">
    <img src="./s11/2.webp" alt="img">
    <h4 class="subtitle">城市光藝美學</h4>
    <div class="desc">原碩照明設計 黃暖晰</div>
  </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s11 {
  @apply relative flex items-center justify-center text-[#B5761D];
  width: 100%;
  height:auto;
  padding:4em 0 12em 0;
  font-size:size(16);
  gap:2em;
  flex-wrap: wrap; justify-content:center;align-items:center;
 .bg0{position: absolute;bottom: 0;left: 0;width:size(4150);
    transform: translateX(calc(-100% + 100vw));
    animation: an1 30s alternate linear infinite;}

  .main {
    @apply relative flex;
    margin: -6.3em 2.3em 0 .7em;
    flex-basis: size(500);
  flex-direction: column;
  text-align: justify;
}


.txt {
  .title{
    margin: 0;
    text-align: center;
    line-height: 1.3;
    font-size: 2.8em;
    font-weight: 300;
  }
}

.img {
    @apply relative;
    flex-basis: size(332);margin: 0;
    text-align: center;
    img{width: 100%;}
    .subtitle{
    font-weight: 900;
    font-size: 1.5em;margin: .6em 0 0 0;
    letter-spacing: 0.06em;
    }
  .desc{
    font-size: 1.23em;
    letter-spacing: 0.2em;
  }
  }

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s11 {
 // @apply flex-col;
    height: auto;
    padding:sizem(120) 0 sizem(60) 0;
  font-size:sizem(13);
  flex-wrap:wrap;
  margin-bottom:0em;
  gap:0em;
 .bg0{width:sizem(1500);
    animation: an1 20s alternate linear infinite;}

  .main {
   // padding: 0 sizem(32.5);
    width: 100%;
    flex-basis:100%;
  }

  .txt {
    margin-bottom:2em;
  .title{
    font-size:2em;
  }
  }
  .img {
    flex-basis: sizem(150);width:sizem(150);
    margin:0 .5em;
  .desc{
    font-size: 1.1em;
    letter-spacing: 0.06em;
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
  pagination: false,
  autoplay: true,
  interval: 4000,
  gap: 10,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s11/531.jpg", import.meta.url).href ,
    caption: "CITY LINK情境示意"
  },
  {
    img:new URL("./s11/532.jpg", import.meta.url).href ,
    caption: "CITY LINK情境示意"
  },
  {
    img:new URL("./s11/533.jpg", import.meta.url).href ,
    caption: "CITY LINK情境示意"
  },
  {
    img:new URL("./s11/534.jpg", import.meta.url).href ,
    caption: "CITY LINK情境示意"
  },
]
</script>

