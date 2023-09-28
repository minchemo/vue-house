<template>
  <article class="s3">
 <!--   <img src="./s3/03.jpg" class="t0">  -->
    <div class="main">
      <div class="txt">
        <h2 class="title" data-aos="zoom-in" data-aos-delay="0" >左擁新市鎮特區<br>
右享梧棲市心商圈</h2>
<ul class="desc">
  <li data-aos="zoom-in" data-aos-delay="100">交通、產業、醫療、娛樂、休閒、運動，國際性的十大建設翻轉海線。</li>
<li data-aos="zoom-in" data-aos-delay="200">重量級建商、國際集團共同打造領海新市鎮。</li>
</ul>
    <img src="./s3/img.svg" class="img" data-aos="zoom-in" data-aos-delay="300">
      </div>
    </div>
    <div class="t1" data-aos="zoom-in" data-aos-delay="0">市鎮<br>特區</div>
    <div class="t2" data-aos="zoom-in" data-aos-delay="0">文化<br>商圈</div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s3 {
  @apply relative flex items-center justify-center;
  width: 100%;
  padding:0;
  font-size:size(20);
  height:size(960);
  gap:3em;
 // margin-bottom:8em;
  background:#E7D5E8 url("./s3/bg.jpg") no-repeat 100% 50%;
  background-size: auto 100%;


  .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;}
  .main {
    @apply flex text-[#fff];
    margin: 0 auto 0 size(190);
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
  .txt {
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.5;
    color: #42167B;
  .title{
    font-size: 2em;
    margin: 0 auto 1.2em 0;
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
    padding-left:1.5em;
    list-style:disc;
    margin-bottom: 3em;
    li{color: #000;margin-bottom:.5em ;
    &::marker{color: #42167B;}
    }
  }
  }
}
  .t1,
  .t2{color: #FFF;position: absolute;top: calc(50% - 6.5vw);right:size(885);
  font-size:1.26em;
  line-height: 1.2;font-weight: 700;
    background: url("./s3/o.svg");
  background-size: 100% 100%;padding: 1em;}
  
  .t2{right:size(113);}
  .img{width:size(655);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
  @apply flex-col;
    height:auto;
    padding:5.5em 0 22em;
    margin: 0;
  font-size:sizem(14);
  background-image: url("./s3/bgm.jpg");
  background-position: 50% 100%;
  background-size: 100% auto;

.main {
    padding: 0 sizem(32.5);margin: auto;
    // text-align: center;
  .txt {
  .title{
    font-size: 2.2em;
    padding: .3em 0;
  }
  .img{
    width:sizem(310);
   // height: 10.8em;
  }
  }
}

.t1,
  .t2{top:auto;right:sizem(282);bottom:43.5vw;
  font-size:1em;}
  
  .t2{right:sizem(27);}

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
