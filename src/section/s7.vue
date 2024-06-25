<template>
  <article class="s7" ref="s7">
    <img src="./s1/bg1.jpg" class="bg" alt="bg" srcset="" v-if="!isMobile">
    <div class="main">
      <div class="txt">
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">建築巨擘 名家團隊鑄造</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400"><span class="t1 font-['Noto_Serif_TC']">協勝建設</span>以職人精神專研於建築，堅持鑄造永續安居，引領幸福回家的路；回應土地特質，預見環境價值，體貼購屋需求，攜手成就家的初心。</p>
    </div>
    </div>
    
    <div class="slider" data-aos="fade">
      <swiper  class="slide-item"
        :slidesPerView=" isMobile ? '2':'4'" 
        :spaceBetween="0"
        :pagination="{ clickable: true }"
        :navigation="true"
        :loop="true"
        :speed="2000"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide  class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption font-['LXGW_WenKai_Mono_TC']">{{ img.caption }}</span>
        </swiper-slide>
      </swiper>
    </div>
    <div class="title absolute"><img src="./s3/titleicon.png">團隊</div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s7 {
  @apply relative flex items-center text-[#fff] bg-[#000];
  width: 100%;
  height:auto;
  padding:0 0 3em 0;
  font-size:size(20);
  gap:0em;
  flex-wrap: wrap;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-end;
  .bg{position: absolute;bottom: 0;left: 0;width: 100%;
    height: 100%;z-index: 1
  }
    .en{width: size(850);position: absolute;top: size(675);left: 0;right: 0;z-index: 2;}
  .img{position: absolute;bottom: 0;left: size(50);width: size(410);z-index: 3
  }

  .main {
    @apply flex;
    flex: 1;
    margin: 0 auto;
  flex-direction: column;z-index:2;
}
  .title{top: size(130);right:0em;z-index: 3;
  }
.txt{width: size(720);padding: 0 0 0 2.8em;
  text-align: center;position: relative;

  .subtitle{text-align:center;margin: 2em auto 0 auto;
        display: inline-block;
    &::after{bottom: -.3em;left:-.15em;height: 2.1em;}
    &::before{left: -1.5em;width: 13em;}
  }
  .t1{position: absolute;left: -7.8em;bottom: 0.1em;font-size: 1.7em;line-height: 1.5;
    background: linear-gradient(to right,#7F4F2100 0%,#6A3906 50%,#7F4F2100 100%);
    padding:0 1.5em;
  }
  .desc{
    margin: 2em 0 3.2em;}
}



  .slider {
    margin: 0;
    background:#DFDFDF;
    width:100%;
    padding:size(100) size(200) size(85);
    height:auto;z-index: 1;text-align: center;
    .slide-item{display: flex;
    flex-direction:column;
    &:nth-child(even){
    flex-direction:column-reverse;

    }
  }
    img{width: 100%;margin: auto;
    height:size(450);}
    .caption{position: relative;
      text-align: center;top: 0;right: 0;line-height: 2.2;color: #000;
  font-size:size(30);}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s7 {
@apply flex-col;
  height: auto;
  padding: 0;
font-size:sizem(12);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
    .en{width: sizem(300);position: absolute;top:sizem(400);left: 0;right: 0;z-index: 2;}
  .img{top: sizem(38);left: 0;width: sizem(170);z-index: 2;
  }
.main {
  padding: 0 sizem(20);
  width: 100%;
}
.title{top: sizem(40);right:-5em;
  }

.txt {margin: 7.9em auto 0em;width: 100%;padding: 0;
  .subtitle{font-size: 1.65em;
    &::after{bottom: -.7em;height: 2.7em;}
    &::before{left:  -4.8em;width: 16em;}
  }
  .t1{position: relative;left:0;right: 0;bottom: 0.1em;font-size: 1.7em;line-height: 1.5;
    padding:0 1.5em;display: block;
    margin: 0 auto .7em;
  }
  .desc{
    margin: 2em 0 1.6em;}
}

.slider {
    margin: sizem(0) auto 0 auto;
    width: 100%;z-index: 2;
    padding:sizem(50) 0 sizem(50);
    height:auto;text-align: center;
    img{
    height:sizem(220);}
    .caption{
  font-size:sizem(15);}
  &::after{top:sizem(-7);left: sizem(45);
  width: sizem(300);height: 100%;border: 2px solid #555c;}
  }
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from "swiper";
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

const imgs = [
  {
    img:new URL("./s7/1.jpg", import.meta.url).href ,
    caption: "協勝玉子園"
  },
  {
    img:new URL("./s7/2.jpg", import.meta.url).href ,
    caption: "協勝OHIYO-花漾城"
  },
  {
    img:new URL("./s7/3.jpg", import.meta.url).href ,
    caption: "協勝OHIYO-海漾城"
  },
  {
    img:new URL("./s7/4.jpg", import.meta.url).href ,
    caption: "協勝知心"
  },
  {
    img:new URL("./s7/5.jpg", import.meta.url).href ,
    caption: "協勝詠心"
  },
  {
    img:new URL("./s7/6.jpg", import.meta.url).href ,
    caption: "協勝雙子城"
  },
]
</script>

