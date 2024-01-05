<template>
  <article class="s7" ref="s7">
  <div class="txttop">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">台北西區新時代揭幕<br v-if="$isMobile()"> 邁向更好的未來</h3>
  </div>
<div class="list" data-aos="fade-up" data-aos-delay="200">
  <div class="txt">
    <h4 class="subtitle">台北車站六鐵共構特區</h4>
    <p class="desc">每天約逾50萬人次進出，台鐵、捷運、高鐵、機場捷運加上預辦登機直達機場，國際進出北市重要門戶要點。</p>
   <!-- <div class="subdesc">CATHAY REAL ESTATE</div> --> 
  </div>
  <div class="img">
  <img src="./s7/1.jpg" alt=""><span class="caption">台北車站</span></div>
</div>
<div class="list" data-aos="fade-up" data-aos-delay="400">
  <div class="txt">
    <h4 class="subtitle">C1D1台北雙子星</h4>
    <p class="desc">開發金額達606億台北雙子星大樓聯合開發案，規模超越101，以台灣第二高樓標識首都門戶意象，全球矚目。</p>
   <!--  <div class="subdesc">CATHAY REAL ESTATE</div> --> 
  </div>
  <div class="img">
  <img src="./s7/2.jpg" alt=""><span class="caption">台北雙子星3D示意圖<br v-if="$isMobile()"> （資料來源 臺北市政府捷運工程局）</span></div>
</div>
<!-- 
<div class="list" data-aos="fade-up" data-aos-delay="600">
  <div class="txt">
    <h4 class="subtitle">台鐵E1E2明日台北埕</h4>
    <p class="desc">基地範圍達3.47公頃，開發規劃分為高密度開發區住商大樓與低密度開發區文化資產，致力保存與開發並蓄榮景。</p>
    <div class="subdesc">CATHAY REAL ESTATE</div>
  </div>
  <div class="img">
  <img src="./s7/3.jpg" alt=""><span class="caption">圖說</span></div>
</div>
<div class="list" data-aos="fade-up" data-aos-delay="800">
  <div class="txt">
    <h4 class="subtitle">郵政雙塔</h4>
    <p class="desc">台灣版「JP Tower」北門郵局公辦都更計劃，投入經費約270億元，雙塔大樓，將打造創業平台和文創商場。</p>
    <div class="subdesc">CATHAY REAL ESTATE</div>
  </div>
  <div class="img">
  <img src="./s7/4.jpg" alt=""><span class="caption">圖說</span></div>
</div>
--> 

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s7 {
  @apply relative flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:0em 0 6em 0;
  font-size:size(16);
  gap:6em;
  flex-wrap: wrap;
  .txttop{
  width: 100%;
  text-align: center;
  font-size:size(45);
  letter-spacing: 0.07em;
  margin: 4em auto 0 auto;font-weight: 400;
  }
.list{width:size(650);
    @apply flex;
    margin: 0;
    flex-basis: size(650);
  text-align: justify;
    align-items:center;
    flex-direction:column;
  gap:1em;
.txt {
  flex: 1;
  text-align: center;
  width: 73%;
  .subtitle{font-size: 1.5em;color: #719679;}
}
.img{position: relative;
  flex: 0;
img{width: size(650);
  height:size(244);}
}
&:nth-child(4),
&:nth-child(5){flex-direction:row-reverse;}
}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
  @apply flex-col;
    height: auto;
    padding:sizem(60) 0 sizem(60) 0;
  font-size:sizem(11);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;
  .txttop{
  margin: 0em auto .5em auto;
  font-size:sizem(21);
  }
.list{width:100%;
    flex-basis:100%;
  gap:0;
.txt {
  flex: 1;
  padding: 0 1.7em;
  width: 95%;
  .subtitle{font-size: 1.3em;color: #719679;}
}
.img{position: relative;
  flex: 0;
img{width: sizem(310);
  height:sizem(169);}
}
/*
&:nth-child(3),
&:nth-child(5){flex-direction:row-reverse;}
&:nth-child(4){flex-direction:row;}
*/
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
/*
const imgs = [
  {
    img:new URL("./s3/1.jpg", import.meta.url).href ,
    caption: "台南市政府"
  },
  {
    img:new URL("./s3/2.jpg", import.meta.url).href ,
    caption: "新光三越"
  },
  {
    img:new URL("./s3/3.jpg", import.meta.url).href ,
    caption: "夏慕尼"
  },
  {
    img:new URL("./s3/4.jpg", import.meta.url).href ,
    caption: "燦坤"
  },
  {
    img:new URL("./s3/5.jpg", import.meta.url).href ,
    caption: "家樂福-安平店"
  },
  {
    img:new URL("./s3/6.jpg", import.meta.url).href ,
    caption: "碳佐麻里"
  },
]
*/
</script>

