<template>
  <article class="s7" ref="s7">
    <div class="bg" v-if="!$isMobile()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">品建築</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">城揚品建築，深植在地心</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">創立於民國83年的城揚建設為在地深耕品牌，建築本科起家的楊董事長，秉持著『專業、效率、品質、永續』的經營理念，以其專業實力及對社會的使命感，致力為世世代代打造出一座理想的家園。</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s7 {
  @apply relative flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
  .bg{
    span{
      &:nth-child(1){
      top:size(26);left: 0;
  font-size:size(120);
}
      &:nth-child(2){
      top: size(147);left: size(110);
  font-size:size(27);
}
      &:nth-child(3){
      top: size(20);right:size(80);
  font-size:size(75);}
    }
  }

  .img{position: absolute;bottom:size(-30);left:size(-270);width:size(660);
  &::before{content: "";width:120%;
  height: 20%;border-radius: 50%;background: #1691CF;display: block;
  position: absolute;bottom: -10%;left: -10%;
}
  img{width: 100%;position: relative;}}
  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}
.txt {
  text-shadow:0 0 10px #fff;
.title{color: #6A3F12;
&::after,
&::before{
background: #6A3F12;
}
}
.subtitle{color: #6A3F12;}
}


  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(560);
      background: url("./s7/bg.webp");
      background-size: cover;
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    color: #C5C5C5; 
    li button.is-active{
      color: #C9A063;
    }
    }
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
  gap:2em;
  .img{position: absolute;top:sizem(300);left: auto;
    right:sizem(-155);width:sizem(260);bottom: auto;}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}


  .slider {
    height: auto;
    width: 100%;
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
    img:new URL("./s7/01.webp", import.meta.url).href ,
    caption: "KS1"
  },
  {
    img:new URL("./s7/02.webp", import.meta.url).href ,
    caption: "珈柏麗"
  },
  {
    img:new URL("./s7/03.webp", import.meta.url).href ,
    caption: "美廳苑"
  },
  {
    img:new URL("./s7/04.webp", import.meta.url).href ,
    caption: "御廳苑"
  },
  {
    img:new URL("./s7/05.webp", import.meta.url).href ,
    caption: "新都廳"
  },
  {
    img:new URL("./s7/06.webp", import.meta.url).href ,
    caption: "帝品苑"
  },
  {
    img:new URL("./s7/07.webp", import.meta.url).href ,
    caption: "帝匯"
  },
  {
    img:new URL("./s7/08.webp", import.meta.url).href ,
    caption: "帝之匯"
  },
  {
    img:new URL("./s7/09.webp", import.meta.url).href ,
    caption: "都廳苑"
  },
  {
    img:new URL("./s7/10.webp", import.meta.url).href ,
    caption: "此為公設3D參考示意圖，實際以完工後為準，建設公司保有修正之權利"
  },
  {
    img:new URL("./s7/11.webp", import.meta.url).href ,
    caption: "此為公設3D參考示意圖，實際以完工後為準，建設公司保有修正之權利"
  },
  {
    img:new URL("./s7/12.webp", import.meta.url).href ,
    caption: "此為公設3D參考示意圖，實際以完工後為準，建設公司保有修正之權利"
  },
  {
    img:new URL("./s7/13.webp", import.meta.url).href ,
    caption: "此為公設3D參考示意圖，實際以完工後為準，建設公司保有修正之權利"
  },
  {
    img:new URL("./s7/14.webp", import.meta.url).href ,
    caption: "此為公設3D參考示意圖，實際以完工後為準，建設公司保有修正之權利"
  },
  {
    img:new URL("./s7/15.webp", import.meta.url).href ,
    caption: "此為公設3D參考示意圖，實際以完工後為準，建設公司保有修正之權利"
  },
  {
    img:new URL("./s7/16.webp", import.meta.url).href ,
    caption: "此為公設3D參考示意圖，實際以完工後為準，建設公司保有修正之權利"
  },
]
</script>

