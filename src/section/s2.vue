<template>
  <article class="s2" ref="s2">
    <div class="bg" v-if="!$isMobile()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">品奢潮</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">入境品奢潮，四大百貨聚首</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">15分鐘快捷距離，近佔夢時代百貨、三多大遠百、SKM Park Oulets高雄草衙、未來三井LALAPORT！一次體會新鳳山最極緻生活日場，感受奢華、懷擁品味，讓所有繁華就此靠攏、身段就此非凡。<br>(15分鐘來源依據是google map)</p>
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



.s2 {
  @apply relative flex items-center justify-center text-[#fff];
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

  .s2 {
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
    img:new URL("./s2/1.webp", import.meta.url).href ,
    caption: "大遠百"
  },
  {
    img:new URL("./s2/2.webp", import.meta.url).href ,
    caption: "統一時代"
  },
  {
    img:new URL("./s2/3.webp", import.meta.url).href ,
    caption: "SKM"
  },
  {
    img:new URL("./s2/4.webp", import.meta.url).href ,
    caption: "LaLaPort外觀示意圖／高雄市政府提供"
  },
]
</script>

