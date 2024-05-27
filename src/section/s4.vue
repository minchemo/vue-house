<template>
  <article class="s4" id="s4" ref="s4">
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">
    <img src="./s4/title.svg">訂製作品</h3>
  </div>
  <div class="slider inside" data-aos="fade-up" data-aos-delay="200" v-if="maxImages == 0">
  <div class="slide-item" v-for="img in limitedImgs" :key="img.img">
    <a :href="img.link"  target=" _blank" class="link"></a>
      <img :src="img.img" :alt="img.name">
      <div class="name">{{ img.name }}</div>
      <div class="area">{{ img.area }}</div>
      <div class="desc">{{ img.caption }}</div>
  </div>
    <div class="button">
      <a href="/#s4">回首頁</a>
    </div>
  </div>
  <div class="slider" data-aos="fade-up" data-aos-delay="200" v-else>
      <swiper  class="slide"
        :slidesPerView="'auto'" 
        :spaceBetween="50"
        :navigation="true"
        :loop="true"
        :speed="1500"
        :centeredSlides="true"
        :modules="modules"
      >
        <swiper-slide  class="slide-item" v-for="img in limitedImgs" :key="img.img">
    <a :href="img.link"  target=" _blank" class="link"></a>
          <img :src="img.img" :alt="img.name">
      <div class="name">{{ img.name }}</div>
      <div class="area">{{ img.area }}</div>
      <div class="desc">{{ img.caption }}</div>
        </swiper-slide>
      </swiper>
  <!--  <div class="arrows">
        <div class="swiper-button-next"></div>
      </div>  -->  

      <div class="button" v-if="imgs.length > 4">
      <a href="/projects">更多資訊</a>
    </div>

  </div>
    

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:6em 0 9em 0;
  font-size:size(17);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;

    .txt{width:100%;
  text-align: center;
  .title{
    position: relative;margin: 0 auto 1.5em;display: inline-block;
    img{height: 3.2em;
      display: block;position: relative;
      margin: 0 auto 0.3em auto;left: .5em;
    }
  }
}
.button{width: 100%;position: relative;left: 13%;
text-align: center;
a{display: block;background: #B7A999; color: #000;border-radius: 0 .8em 0 .8em;margin: auto;width: 7.8em;line-height: 2;letter-spacing: .2em;
  transition:transform .5s ;
&:hover{transform: scale(1.1);}
}
}
.inside .button{left: 0;}

.slider {
  position: relative;left: -35%;
  margin: 0 auto 0 auto;padding:0;
  width:135%;
  height:auto;
  &.inside{left:0%;width: size(1280); margin: 0 auto 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 1em; justify-content:space-between;
    .slide-item { opacity:1;}
  }
  .swiper {height: 100%;padding:0 0 3em;
  }

 .slide-item { transition:opacity 1.5s;position: relative;
          width: size(615);margin: 0 0 2em 0;height: 100%;
          line-height: 1.7;
          .link{position: absolute;top: 0;left: 0;width: 100%;height: 100%;transition:background .5s;
          &:hover{background: #0006;}
          }
  img{width: 100%;height:auto;object-fit: cover;border-radius: 2em;margin: 0 0 1.8em;}
  .name{font-size: 1.4em;margin-bottom: .5em;}
  .area{font-size: 0.85em;}
  .desc{font-size: 1.1em;}
@media screen and (min-width: 767px) {
  /* 詭異跳動的除錯 */
  opacity:0;
  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(7),
  &:nth-child(8),
  &:nth-child(9) {opacity: 1;}
  &.swiper-slide-active{opacity: 1;}
  &.swiper-slide-prev {opacity: 0;
  }

  &.swiper-slide-next{opacity: 1;}
  &.swiper-slide-next + .swiper-slide,
  &.swiper-slide-next + .swiper-slide + .swiper-slide {opacity: 0;}

      }
  }
  }
  
  .swiper-button-prev,
  .swiper-button-next{
      position: absolute;
      bottom: 11.7em;
      right: calc(50% - 56.3vw);
      width:6em;
      height: 6em;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;z-index: 15;
  justify-content: center;
  align-items:center;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 52 52' fill='%23B7A999' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26,52c34.7,0,34.7-52,0-52S-8.7,52,26,52z'/%3E%3Cpath fill='none' stroke='%23000' stroke-width='1.5' d='M40.5,26h-28 M27.6,17.4L40.5,26l-12.9,8.6'/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:transform .5s ;
@media screen and (min-width: 767px) {
    &:hover{
      //background-color: #0003;
      transform: scale(1.2);
    }
    }
    }
    .swiper-button-prev{transform: scaleX(-1);
      left: 0;
    }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
  @apply flex-col;
    height: auto;
    padding: 3em 0 5em 0;
  font-size:sizem(14);
  flex-wrap:nowrap;
gap:0em;
    .txt{
  .title{margin: 0 auto 2.5em;
    img{height: 2.56em;left: 0em;
    }
  }
}
.button{
  font-size:1.2em;left: 0;
}
.slider {
  left: 0%;  width:100%;
  &.inside{width: 100%;
    justify-content: center;}
  .swiper {padding:0;}
  .slide-item{opacity: 1; width: sizem(275);
  .link:hover{background: #0000;}
    img{height:sizem(282);margin-bottom: .5em;}
  .name{font-size: 1.5em;margin-bottom: .2em;}
  .area{font-size: 1em;}
  .desc{font-size: 1.1em;}
  }
}
  .swiper-button-prev,
  .swiper-button-next{
      top: 7.5em;
      right: calc(50% - 13em);
      width:5.5em;
      height:5.5em;
    }
    .swiper-button-prev{
      left: calc(50% - 13em);
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

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const props = defineProps({
  maxImages: {
    type: Number,
    default: 0
  }
});

const imgs = [
  {
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    link:'https://cfyd.tw/',
    name: "春福御邸",
    area: "台南市安平區",
    caption: "3-4房 (42-52坪)"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    link:'https://cfanan.tw/',
    name: "春福安安",
    area: "台南市安南區",
    caption: "2-3房 (24-36坪)"
  },
  {
    img:new URL("./s4/3.jpg", import.meta.url).href ,
    link:'https://sjsj.sanjin.tw/',
    name: "三景三錦",
    area: "高雄市鳳山區國泰路二段13巷6號",
    caption: "總價3588-4680萬"
  },
  {
    img:new URL("./s4/4.jpg", import.meta.url).href ,
    link:'https://ry2.botb.tw/',
    name: "如邑Ⅱ",
    area: "台南市安平區府前四街147號",
    caption: "總價3880-5300萬"
  },/*
  {
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    link:'https://cfyd.tw/',
    name: "春福御邸",
    area: "台南市安平區",
    caption: "3-4房 (42-52坪)"
  },
  {
    img:new URL("./s4/2.jpg", import.meta.url).href ,
    link:'https://cfanan.tw/',
    name: "春福安安",
    area: "台南市安南區",
    caption: "2-3房 (24-36坪)"
  },
  {
    img:new URL("./s4/3.jpg", import.meta.url).href ,
    link:'https://sjsj.sanjin.tw/',
    name: "三景三錦",
    area: "高雄市鳳山區國泰路二段13巷6號",
    caption: "總價3588-4680萬"
  },
  {
    img:new URL("./s4/4.jpg", import.meta.url).href ,
    link:'https://ry2.botb.tw/',
    name: "如邑Ⅱ",
    area: "台南市安平區府前四街147號",
    caption: "總價3880-5300萬"
  },*/
]
const limitedImgs = computed(() => {
  return props.maxImages > 0 ? imgs.slice(0, props.maxImages) : imgs;
});
</script>