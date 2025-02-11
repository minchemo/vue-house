<template>
  <article class="s2" ref="s2">
    <img src="./s1/img.webp" class="img img1" />
    <img src="./s1/img.webp" class="img img2" />
    <img src="./s1/img.webp" class="img img3" v-if="!isMobile" />
    
    <div class="main">
      <div class="txt">
         <h3 class="title" data-aos="fade-up" data-aos-delay="0">就業臻方便</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">離塵不離城 輕鬆切換城市與靜謐</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">
          車程10分鐘-中科二林園區<br>您是掌握未來的科技菁英，站在產業浪潮最前端。
          <br><br>車程8分鐘-埤頭工業區<br>您是傳承傳統產業，文化延續的力量。
          <br><br>回家後，您是質感品味生活的收藏家，在家靜享溫潤時光。事業與生活的平衡臻輕鬆</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :key="img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s2 {
  @apply relative flex items-center justify-center text-[#fff] bg-[#300b];
  width: 100%;
  height:auto;
  padding:9em 0 9em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;

  @keyframes an {
  to {
     transform:translateY(100%);
  }
}
  .img{position: absolute;
    animation: an 5s ease-in-out infinite alternate;}
  .img1{width: size(140);top:size(110);left: size(50);}
  .img2{width: size(100);top:size(0);right: size(520);animation-delay: -3s;}
  .img3{width: size(90);top:size(500);right: size(150);animation-delay: -5s;z-index: 3;}
  
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
    height: sizem(600);
    justify-content: space-around;
    padding:3em 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  .img1{width: sizem(60);top:sizem(0);left: sizem(40);}
  .img2{width: sizem(40);top:sizem(150);right: sizem(20);}
  
  .main {
    padding: 0 sizem(32.5);
    width: 100%;
    margin-top: 3.5em;
    flex-basis: auto;
}

.txt {
  .title{
    &::after,
    &::before{
      width: 2em;
    }
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
    img:new URL("./s2/1.webp", import.meta.url).href ,
    caption: "中部科學園區管理中心"
  },
  {
    img:new URL("./s2/2.webp", import.meta.url).href ,
    caption: "武漢機械"
  },
  {
    img:new URL("./s2/3.webp", import.meta.url).href ,
    caption: "矽品精密"
  },
  {
    img:new URL("./s2/4.webp", import.meta.url).href ,
    caption: "情境示意"
  },
  
]
</script>

