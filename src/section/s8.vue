<template>
  <article class="s8" ref="s8">
    <div class="oo1 absolute"></div>
    <div class="bubble1 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="./s1/bubble1.png" alt="bubble" v-if="!isMobile">
      <img src="./s1/bubble5.png" alt="bubble" v-else>
    </div>
    <div class="bubble2 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="./s1/bubble2.png" alt="bubble">
    </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle font-[caveat]" data-aos="fade-up" data-aos-delay="0">HAPPINESS LIHPAO</h4>
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">麗寶集團 <span>鵬程建設 x 麗寶百貨</span></h3>
        <img src="./s5/hr.png" class="hr" data-aos="fade-up" data-aos-delay="400" />
    <p class="desc" data-aos="fade-up" data-aos-delay="600">大公司蓋的房子住的最安心。麗寶集團全台企業版圖橫跨連鎖飯店、樂園百貨、不動產等，旗下鵬程建設30年以上深厚建築經驗與穩健售後服務，讓家住的安心有保障。</p>
    <img src="./s8/img.png" class="img" data-aos="fade-up" data-aos-delay="800" />

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



.s8 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:9em 0 5em 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  flex-direction:row-reverse;
  
  .oo1{right: size(-750);
    bottom:size(-200);
    width:size(1300);
    background: radial-gradient(ellipse at center,#F8D8A9 0%, #aad1b8dd 15%,#aad1b8aa 20%, #118fc700 60%);
    &::before{content:url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");width: 100%;display: block;}  
  }
.bubble1{right: size(-90);width:size(270);
  top: size(320);
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:translate(0,10%);}
}
.bubble2{left: size(-70);width:size(190);
  bottom: size(-100);
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:translate(0,10%);}
}

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
    flex-direction: column;
    text-align: justify;
  }
.txt{
 // margin: auto auto 3vw auto;
 padding: 0 6vw 0 0;
 .title{

  span{font-size: .5em;font-weight: 500;}
 }
 .subtitle{font-weight: 400;}
}
.img{
  margin: 2em auto 0 auto;display: block;
  width:size(452);
  filter:drop-shadow(size(20) size(20) size(30) rgba(0, 0, 0, 0.30));
}

  .slider {border-radius: 1em;overflow: hidden;
    margin: 0;
    flex-basis: size(840);
      height: size(580);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(580);
      
    }
    .splide__pagination{
      left: calc(100% + 3em);
      justify-content: flex-start;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s8 {
@apply flex-col;
  height: auto;
  padding: 0;
font-size:sizem(15);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;


.oo1{right: sizem(130);
    bottom:sizem(-30);
    width:sizem(625);
  }
.bubble1{right: sizem(-30);width:sizem(218);
  top: sizem(-140);
  img{
    animation:none;
    transform:translate(0);}
}
.bubble2{left: sizem(-17);width:sizem(47);
  bottom: auto;top: sizem(385);
}





.main {
  padding: 0 sizem(32.5);
  width: 100%;
}

.txt {margin: 3em auto 2em;padding: 0;
}

.img{
  width:sizem(273);
  filter:drop-shadow(sizem(10) sizem(10) sizem(12) rgba(0, 0, 0, 0.40));
}

.slider {
  height: auto;border-radius: 0;
  width: 100%;
  flex-basis:sizem(250);

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
  pagination: false,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    caption: "麗寶 Outlet Mall"
  },
  {
    img:new URL("./s8/2.jpg", import.meta.url).href ,
    caption: "淡水福容大飯店"
  },
  {
    img:new URL("./s8/3.jpg", import.meta.url).href ,
    caption: "微笑莊園"
  },
  {
    img:new URL("./s8/4.jpg", import.meta.url).href ,
    caption: "鵬程V1"
  },
  {
    img:new URL("./s8/5.jpg", import.meta.url).href ,
    caption: "鵬程NEW1"
  },
]
</script>

