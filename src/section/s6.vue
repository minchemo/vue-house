<template>
  <article class="s6">
    <div class="main">
      <div class="txt">
        <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >公園首排<br>
景觀港灣地標</h2>
<div class="desc" data-aos="zoom-in" data-aos-delay="100">
  一座港灣新地標，將天地願景與公園首排視野寫進建築紋理，將如巨座多寶格的建築量體，融入風、光、水、綠、影，飾以灰、白、咖啡的沉穩色系，呈現千坪基地的恢弘氣勢。
</div>
      </div>
    </div>
    <div class="caption">3D外觀示意圖</div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  @apply relative flex items-start justify-center;
  width: 100%;
  height: size(960);
  padding:0;
  font-size:size(20);
  background:#03448e url("./s6/bg.jpg") no-repeat 100% 100%;
  background-size: 100% auto;
  .main {
    @apply flex text-[#fff];
    margin: 0;
    flex-basis: 100%;
  flex-direction: column;
  text-align: center;
  .txt {
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    margin: 4em 0 0;
  .title{
    font-size: 2em;
    margin: 0 auto .5em auto;
    line-height: 1.4;
    font-weight: 900;
	  border: 4px solid transparent;
    border-image: linear-gradient(70deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);
	  border-image-slice: 1;
    width:10em;
    padding: .1em 0;
    text-align: center;

  }
  .desc{
  //  width: 23em;
    margin:auto;
    padding-left:1.5em;
    list-style:disc;
    margin-bottom: 3em;
    li{color: #000;margin-bottom:.5em ;
    &::marker{color: #42167B;}
    }
  }
  }
}
  .caption{
      @apply absolute;
      right:1em;
      bottom: 1em;
      font-weight: 500;
      font-size: size(15);
      color: #FFF;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
  @apply flex-col;
    height:auto;
    padding:0em 0 25em;
    margin: 0;
  font-size:sizem(13);
  background: #03448e  url("./s6/bgm.jpg") no-repeat 50% 100%;
  background-size: 100% auto;

.main {
    padding: 0 sizem(32.5);
    text-align: center;
  .txt {
  .title{
    font-size: 2.2em;
    padding: .3em 0;
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
    img:new URL("./s6/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s4/1_m.webp", import.meta.url).href : new URL("./s4/1.webp", import.meta.url).href,
    caption: "聽心苑2外觀3D示意圖"
  },
  {
    img:new URL("./s6/2.jpg", import.meta.url).href ,
    caption: "聽心苑2外觀3D示意圖"
  },
  {
    img:new URL("./s6/3.jpg", import.meta.url).href ,
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
