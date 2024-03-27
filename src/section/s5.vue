

<template>
  <article class="s5">
    <div class="img" data-aos="fade-up" data-aos-delay="0"><img src="./s5/img.png" /></div>
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">全家人都愛</h3>
        <p class="desc text-center" data-aos="fade-up" data-aos-delay="200">中山北，蛋黃圈，四大商圈繁華相伴，汲食行樂</p>
  </div>
    <div class="main">
      <div class="txt" data-aos="fade-up" data-aos-delay="300">
<transition name="fade" mode="out-in">
          <h4 class="subtitle" :key="currentImg.subtitle" v-html="currentImg.subtitle"></h4>
        </transition>
        <transition name="fade" mode="out-in">
        <p :key="currentImg.desc" v-html="currentImg.desc"></p>
        </transition>
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

.s5 {
  @apply relative overflow-hidden flex items-center justify-center text-[#555] bg-[#F2F2F2];
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
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    width: 100%;
  .title{
    font-size: 2.2em;
    margin: 2em 0 0em;
    line-height: 1.4;
    font-weight: 700;
    color:#B78E63;
    text-align: center;
    &::after,
    &::before{
      content: "";
      width: 15.7em;
      height: 1px;
      background: currentColor;
      display: inline-block;
      vertical-align: middle;
      margin: auto .5em;
    }
  }
  .subtitle{
    font-size: 1.65em;
    font-weight: 700;
    margin: 0 0 .8em;
    color:#B78E63;
    line-height: 1.5;
  }
  .desc{
    margin: 0 0 1em;
    b{
    color:#B78E63;}
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

  .s5 {
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


.txt {
  .title{
    font-size: 1.8em;
    &::after,
    &::before{
      width: 4.2em;}
  }
  .subtitle{
    font-size: 1.4em;
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
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: "中山北水碓商圈實景拍攝",
    subtitle: "淡水最火熱的中山北路水碓商圈",
    desc: "中山北路核心商圈，淡水人最愛全能生活超強機能<br>傳統市場，連鎖餐飲，電信公司，銀行，<br>所有民生必需，走路就可到<br>還有8-10線公車，到哪都方便",
 },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "老街人文商圈實景拍攝",
    subtitle: "老街人文商圈",
    desc: "伴著河岸風情、品嚐美食小吃<br>阿給、魚丸湯、鐵蛋、魚酥、蝦捲、酸梅汁⋯<br>米店、餅舖、雜貨店、布行，散發濃濃古早味<br>服飾、玩具、紀念品小棧、伴手禮專賣店，吸睛又有趣",
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "情境示意圖",
    subtitle: "家樂福商圈行政中心",
    desc: "家樂福、全聯、麥當勞、星巴克、燦坤、寶雅<br>便利商店、連鎖餐飲林立<br>還有行政中心、運動中心、雙語國小<br>　",
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "真理街學區實景拍攝",
    subtitle: "真理大學文教圈",
    desc: "以新民街、新生街為中心的生活圈，<br>店家林立、生活機能健全<br>鄰近紅毛城、小白宮、滬尾砲台、雲門等人文勝地<br>文化藝術氣息濃厚，還有淡江高中、淡水國小、文化國小",
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

