

<template>
  <article class="s4">
    <div class="bg">
      <span></span>
      <span></span>
      <span></span>
      <span v-if="!$isMobile()"></span>
      <span v-if="!$isMobile()"></span>
      <span v-if="!$isMobile()"></span>
    </div>
  <div class="txt">
    <h3 class="title-sub font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">International City Model</h3>
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">昨日東京車站，明日桃園新站</h3>
    <hr class="hr" v-if="isMobile">
  </div>
    <div class="main">
      <div class="txt">
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

.s4 {
  @apply relative overflow-hidden flex items-center justify-center text-[#FFF];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  .bg{
    span{
      &:nth-child(1){
        top: 1vw;
        left: 10vw;
        font-size: 3.5vw;
      }
      &:nth-child(2){
        top: 12vw;
        left: 2vw;
        font-size: 2vw;
      }
      &:nth-child(3){
        top: 3vw;
        left: 7vw;
        font-size: 9vw;
        transform: scale(.8);
        background: radial-gradient(ellipse at center, #64c8da33 65%,  #fff0 70%);
        animation-delay: 1.8s;
      }
      &:nth-child(4){
        top: 5vw;
        left: 26vw;
        font-size: 1.5vw;
      }
      &:nth-child(5){
        top: 12vw;
        right: 33vw;
        font-size: 4.5vw;
      }
      &:nth-child(6){
        top: 12vw;
        right: 1vw;
        font-size: 2.5vw;
        animation-delay: 1.5s;
      }
    }
  }



  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}


.txt {
  
  .title{
    &::after,
    &::before{
      width: 11.1em;
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

  .s4 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

.img{bottom:sizem(230);right:sizem(-30);width:sizem(250);}
.bg{
    span{
      &:nth-child(1){
        top: 4vw;
        left: 82vw;
        font-size: 6vw;
      }
      &:nth-child(2){
        top: 57vw;
        left: 2vw;
        font-size: 8vw;
      }
      &:nth-child(3){
        top: 3vw;
        left: 77vw;
        font-size: 23vw;
      }
    }
  }

  .main {
    padding: 0 sizem(30);
    width: 100%;
}

.txt {
  .title{
    &::after,
    &::before{
      width: 0;
    }
  }
  .hr{
    width: sizem(100);
    margin: sizem(20) auto sizem(10);
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
    img:new URL("./s4/1.webp", import.meta.url).href ,
    caption: "東京車站",
    subtitle: "TOD×CBD雙核引擎<br>三鐵共構×24層站前雙星",
    desc: "對位世界大都會車站，借鑑東京車站六本木，桃園新站蓄勢啟幕！桃園新站導入TOD×CBD雙引擎開發量能，力邀荷蘭建築師Mecancoo結合航空城意象，以摺紙飛機的輕躍天花，打造台灣難得一見國際級車站；主體建築規劃地上三層地下二層車站，以共構方式「鐵路在上、捷運在下」結合台鐵、捷運、巴士和商業空間的交通匯流，具有轉運、購物、商辦、等多功能場域。旅運人次直追台北車站，錢潮商機聚合，贏接桃園都會新盛世。",
 },
  {
    img:new URL("./s4/2.webp", import.meta.url).href ,
    caption: "桃園車站完工示意圖",
    subtitle: "大後站旗艦計畫<br>舊城再生×都市更新複刻信義計畫",
    desc: "大後站計劃即將發威，中正路、延平路打通，繁華不再楚河漢界！連動桃園新站開發，形塑千億新站特區，同時活化台銀土地、閒置工業區feat.倉儲用地轉型、住宅區都市更新，百貨巨頭、頂尖企業進駐，圍塑燙金增值版圖，共鳴國際CBD氣度，磁吸菁英人口紅利。",
  },
  {
    img:new URL("./s4/3.webp", import.meta.url).href ,
    caption: "桃園新站3D示意圖",
    subtitle: "桃園大中軸特區 鐵路地下化綠軸<br>波士頓森活既視感",
    desc: "無論城市如何更迭，宜居永遠是關鍵命題。桃園鐵路地下化、「大中軸特區」計畫啟動，借鏡波士頓綠園道設計，將橫跨桃園、八德、中壢、平鎮行政區的16公里路廊，建構森態綠意共棲的休憩空間，標誌宜居宜業的國際大都會典範。",
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

