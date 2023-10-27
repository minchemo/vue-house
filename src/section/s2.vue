<template>
  <article class="s2">
      <div class="cloud1"><img src="./s1/cloud1.png" alt="cloud"><img src="./s1/cloud1.png" alt="cloud"></div>
    <img src="./s2/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0"  data-aos-duration="800">
<ul class="txt">
  <li data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1200">翻轉你所未見</li>
  <li data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1200">觸及你所未想</li>
  <li data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1200">穿梭幻想與理想之境</li>
  <li data-aos="zoom-in" data-aos-delay="900" data-aos-duration="1200">登頂你所渴望</li>
  <li data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="1200">才稱「夢想」</li>
</ul>
    <img src="./s2/1.png" class="img1">
    <img src="./s2/2.png" class="img2">
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';
@keyframes an{
  to {
     transform: scale(1);opacity: 1;
  }
}

.s2 {
  @apply relative flex flex-col items-center justify-center text-[#000];
  width: 100%;
  // height: size(800);
  padding:0;
  font-size:size(32);overflow: hidden;
  gap:1.5em;
  flex-wrap:nowrap;
  background: linear-gradient(180deg, #002672 0%, #00489B 30.73%, #0082D0 59.37%, #00B5FF 74.48%, #8FDEFF 100%);
  
  /* 
  background: #012876 url("./s2/02.jpg") 0 0 ;
  background-size:100% auto;
  */
.cloud1{position: absolute;bottom:0;left: 0;white-space: nowrap;
  animation:an 30s linear infinite;
  transform: translateX(-50%);
  img{width: 100vw;height:size(400);}
}
  .logo{width:size(409);margin:size(275) auto size(430);position: relative;z-index: 3;}
  .txt{color: #FFF;margin: auto;text-align: center;font-size:size(32);letter-spacing: 0.3em;line-height:2.9;}

  .img1{position: relative;width:size(774);margin:size(150) auto size(130) ;
  transform: translateY(-15%);
    animation:an 8s ease-in-out alternate infinite;
  }
  .img2{position: absolute;left: 0;bottom: 0;width:size(660);}

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  font-size:sizem(12);
  gap:2em;
.cloud1{
  img{width: 200vw;height:sizem(340);}
}
  .logo{width:sizem(180);margin:sizem(70) auto sizem(70);}
  .txt{font-size:sizem(15);}

  .img1{width:sizem(250);margin:sizem(40) auto sizem(80) ;}
  .img2{width:sizem(220);left:sizem(-80);}

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
    img:new URL("./s2/1.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
  {
    img:new URL("./s2/2.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
  {
    img:new URL("./s2/3.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
  {
    img:new URL("./s2/4.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
  {
    img:new URL("./s2/5.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
]
/*
const imgs = [
  {
    img: getImg('s2/1'),
    caption: "內湖 豁達達禮"
  },
  {
    img: getImg('s2/2'),
    caption: "林口 長耀PARK"
  },
  {
    img: getImg('s2/3'),
    caption: "林口 長耀初"
  },
  {
    img: getImg('s2/4'),
    caption: "林口 長耀里"
  },
]
*/
</script>

