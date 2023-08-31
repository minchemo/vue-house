<template>
  <article class="s3">
    <div class="main">
      <div class="txt" data-aos="zoom-in">
    <!-- <h4 class="subtitle" data-aos="zoom-in-right">VILLA LIFESTYLE</h4> -->
        <transition name="fade" mode="out-in">
          <h3 class="title" :key="currentImg.title" v-html="currentImg.title"></h3>
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
.s3 {
  @apply relative overflow-hidden flex items-center justify-center text-white;
  width: 100%;
  height: size(800);
  padding:0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  background: url("./s3/bg.jpg") center;
  background-size: cover;


  .main {
    @apply flex text-[#555];
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
  .txt {
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
  .title{
    font-size: 2.28em;
    color: #003F28;
    margin: 0 0 .2em;
    line-height: 1.4;
    font-weight: 700;
  }
  .subtitle{
    font-size: 1.2em;
    margin: 0 0 .6em;
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
      left: calc(100% + 3em);
      justify-content: flex-start;
    color: #003F28; 
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
    height: auto;
    padding:2em 0 3em 0;
  font-size:sizem(13);
    flex-direction: column-reverse;
  gap:2em;
  background-image:url("./s3/bg_m.jpg");

  .main {
    padding: 0 sizem(32.5);

    
    
  .txt {
  .title{
    font-size: 1.8em;
  }
  .subtitle{
    font-size: 1.07em;
  }
  }
}

  .slider {
    height: auto;
    width: sizem(335); 

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
    img:new URL("./s3/1.jpg", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s3/1_m.webp", import.meta.url).href : new URL("./s3/1.webp", import.meta.url).href,
    caption: "北外環實景拍攝",
    title:"北外環第一站 大南科生活圈",
    desc:globals.$isMobile() ?"2026年南科3期將完成擴建，預估創造390億年產值，看見台南共榮生活圈。僅約15分鐘車程，就能連結南科園區，讓南科新貴從繁忙的步調中，找回靜謐的棲身之所。":"2026年南科3期將完成擴建，預估創造390億年產值，<br>看見台南共榮生活圈。僅約15分鐘車程，就能連結南科園區，<br>讓南科新貴從繁忙的步調中，找回靜謐的棲身之所。",
  },
  {
    img:new URL("./s3/2.jpg", import.meta.url).href ,
    caption: "國道實景拍攝",
    title:"國3+國8  高速串接路網",
    desc:globals.$isMobile() ?"東行7分鐘直上國道3號，接軌國道8號新化系統交流道，高速串聯四面八方，來往南科與都會，皆可暢行無阻，感受快意的通勤新距離，替日常打造更高效率的生活模式。":"東行7分鐘直上國道3號，接軌國道8號新化系統交流道，<br>高速串聯四面八方，來往南科與都會，皆可暢行無阻，<br>感受快意的通勤新距離，替日常打造更高效率的生活模式。",
  },
  {
    img:new URL("./s3/3.jpg", import.meta.url).href ,
    caption: "新化老街實景拍攝",
    title:"豐熟心聚落 新化老街商圈",
    desc:globals.$isMobile() ?"由中山路與中正路交匯的人文街廓，滿足全家人的食衣住行，每日生鮮蔬果，交給全聯、菜市場張羅，無法決定晚餐菜色，到周二限定的正新夜市外帶宵夜，感受幸福的日常。":"由中山路與中正路交匯的人文街廓，滿足全家人的食衣住行，<br>每日生鮮蔬果，交給全聯、菜市場張羅，無法決定晚餐菜色，<br>到周二限定的正新夜市外帶宵夜，感受幸福的日常。",
  },
  {
    img:new URL("./s3/4.jpg", import.meta.url).href ,
    caption: "新化果菜市場實景拍攝",
    title:"全台灣最美 新化果菜市場",
    desc:globals.$isMobile() ?"荷蘭建築團隊MVRDV 操刀設計，顛覆眾人對傳統市場的想像，如山巒高低起伏的綠屋頂，融合了新化自然風光之美，這座全台灣最美的市場，讓新化開始走向國際。":"荷蘭建築團隊MVRDV 操刀設計，顛覆眾人對傳統市場的想像，<br>如山巒高低起伏的綠屋頂，融合了新化自然風光之美，<br>這座全台灣最美的市場，讓新化開始走向國際。",
  },
  {
    img:new URL("./s3/5.jpg", import.meta.url).href ,
    caption: "新化林場實景拍攝",
    title:"療癒後花園 新化中興林場",
    desc:globals.$isMobile() ?"新化舊稱「大目降」，原意為山林之地，走進新化後花園──中興林場，遇見紛飛的桃花心木落葉，欣賞蝴蝶穿梭其間，沐浴新鮮芬多精，聆聽自然與微風共奏的美麗樂音。":"新化舊稱「大目降」，原意為山林之地，走進新化後花園──中興林場，<br>遇見紛飛的桃花心木落葉，欣賞蝴蝶穿梭其間，<br>沐浴新鮮芬多精，聆聽自然與微風共奏的美麗樂音。",
  },
]

const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>
