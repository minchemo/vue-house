<template>
  <article class="s10" ref="s10">
    <div class="slider" data-aos="fade">
      <swiper  class="slide"
        :slidesPerView="'auto'"
        :centeredSlides="true" 
        :pagination="isMobile ? false : { clickable: true }"
        :navigation="isMobile ? true : false"
        :loop="true"
        :speed="1000"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide  class="slide-item" v-for="img in imgs">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
      <span class="caption caption_r">{{ img.caption_r }}</span>
        </swiper-slide>
      </swiper>


    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0"><span class="icon"></span><span class="title_c"><b>嘉</b>榮耀</span><span class="en">REMARKABLE WORK</span></h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">慧眼選址<br v-if="isMobile"> 構築家經典</h4>
    <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
    <p class="desc" data-aos="fade-up" data-aos-delay="600">佳展建設嚴選值得期待的地段，與人居場域融合，與環境相互映襯，讓建築昇華，與土地共映美好生活；一路踏實、千戶美滿，超過1800戶幸福見證，成為幸福成家的後盾。</p>
    </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s10 {
  @apply relative flex items-center justify-center text-[#633804];
  width: 100%;
  height:auto;
  padding:6em 0 5em 0;
  font-size:size(28);
  gap:2.6em;
  flex-wrap: wrap;
    flex-direction:column-reverse;


  .img{position: absolute;bottom:size(-30);left:size(-270);width:size(660);
  &::before{content: "";width:120%;
  height: 20%;border-radius: 50%;background: #1691CF;display: block;
  position: absolute;bottom: -10%;left: -10%;
}
  img{width: 100%;position: relative;}}
  .main {
    @apply flex;
    margin: 0 size(190) 0 auto;
    width: size(1060);
  flex-direction: column;
  text-align: justify;
}
.caption{
  left:1em;
}
.caption_r{
    @apply font-['Noto_serif_TC',serif];
  left:auto;
      right:.8em;
      bottom: .3em;
      font-size: size(25);
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 1);
}
.txt{
@media screen and (min-width: 768px) {

  .title{position: absolute;top:size(30);left:size(-560);
  .title_c{
    font-size:3.3em;}
    
    .icon{
    font-size:1.6em;
  }
  &::before{background: #c6884e3d;height: 3em;width: 300%;
    top: .5em;left: 18em;
    }
    
    &::after{
      top:-1.7em;
    }
  }


}
}


.slider {
    margin: 0;
   // flex-basis: 100%;
    width: 100%;
      height: size(666);
.swiper {
      overflow: visible;height: 100%;


      .swiper-slide {
          width: size(1036);margin: 0 size(35);height: 100%;
  img{width: 100%;height: 100%;}
      }
  }
  }
  
  .swiper-button-prev,
  .swiper-button-next{
      position: absolute;
      top: 0;
      right: -2em;
      width:2em;
      height: sizem(257);
      display: flex;
      pointer-events: stroke;
      cursor: pointer;z-index: 3;
      
  justify-content: center;
  align-items:center;
    background:url("data:image/svg+xml,%3Csvg stroke='%23633804' stroke-width='5' stroke-linecap='round' width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:background-color .5s ;
    &:hover{
      //background-color: #0003;
    }
    }
    .swiper-button-prev{transform: scaleX(-1);
      left: -2em;
    }
    .swiper-pagination{
    bottom: -2em;}
    .swiper-pagination-bullet{
        width: 1em;
        height: 1em;
          background:#B4B4B4;opacity: 1;

    }
    .swiper-pagination-bullet-active{background:#22491B;}

    
/*
  .slider {
    margin: 0;
    flex-basis: 100%;
    width: 100%;
      height: size(1009);
    .slide-item {
      @apply bg-cover;
    flex-basis:100%;
    width: 100%;
      height: size(1009);
      
    }
  }*/


}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s10 {
@apply flex-col;
  height: auto;
  padding:3em 0 2em;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;


.main {
  padding: 0 0;
  width: 100%;
  margin: 0 auto;
}

.txt {margin: 2.3em auto 0em;
  width: 77%;
}

.caption_r{
      font-size: sizem(20);
}

.slider {
  width:sizem(327);
      height: sizem(257);
.swiper {

  width:sizem(327);
      .swiper-slide {width: 100%; margin: 0 sizem(30);
  img{width: 100%;height: 100%;}
      }
  }
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
const modules = ref([Pagination, Navigation, Autoplay]);

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
    img:new URL("./s10/1.webp", import.meta.url).href ,
    caption: "外觀實景拍攝電腦後製合成",
    caption_r: "2018｜佳展大景"
  },
  {
    img:new URL("./s10/2.webp", import.meta.url).href ,
    caption: "外觀3D示意圖",
    caption_r: "2018｜佳展大方"
  },
  {
    img:new URL("./s10/3.webp", import.meta.url).href ,
    caption: "外觀3D示意圖",
    caption_r: "2018｜佳展大展"
  },
]
</script>

