<template>
  <article class="s7">
    <div class="oo1 absolute" v-if="isMobile"></div>
    <div class="bubble1 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" v-if="isMobile" >
      <img src="./s1/bubble1.png" alt="bubble">
    </div>
    <div class="bubble2 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" v-else >
      <img src="./s1/bubble5.png" alt="bubble">
    </div>
    <div class="main">
      <div class="txt">
        <h4 class="subtitle font-[caveat]" data-aos="fade-up" data-aos-delay="0">Design Aesthetics</h4>
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">建築大師出列<br v-if="isMobile"> 小資氣派當家</h3>
        <img src="./s5/hr.png" class="hr" data-aos="fade-up" data-aos-delay="400" />
        <p class="desc" data-aos="fade-up" data-aos-delay="600">房子不大，空間也可以很奢華!微笑雲朵禮聘世界大獎團隊打造包浩斯美學當代建築。氣派門廳、私家交誼廳、空中Lounge、健身房等公設，及嚴選日本、荷蘭與瑞典等經典品牌打造星級飯店家居，誠摯獻給有品味的主人。</p>
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
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:8em 0 5em 0;
  font-size:size(20);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column-reverse;
    background: linear-gradient(303deg, rgba(170, 209, 184, 0.83) 0%, rgba(129, 192, 188, 0.61) 37.97%, rgba(17, 143, 199, 0.00) 97.36%);
    background-blend-mode: lighten;
.bubble2{right: size(10);width:size(700);
  top: size(450);
  img{width: 100%;}
}
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto;
  width: size(1500);
  text-align:center;
  .subtitle{font-weight: 400;}
}

  .slider {
    margin: 0;border-radius: 1em;overflow: hidden;
    flex-basis: size(840);
      height: size(844);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(844);
      
    }
    .arrows{
    .prev,
    .next{
      width:3%;}
    }

    .splide__pagination{
      justify-content: flex-end;
      bottom: -2em;
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
  font-size:sizem(15);
  flex-wrap:nowrap;
gap:0em;
  .oo1{right: sizem(-280);
    bottom:auto;top:sizem(-330);
    width:sizem(600);
    background: radial-gradient(ellipse at center,#F8D8A9 0%, #aad1b8dd 15%,#aad1b8aa 20%, #118fc700 60%);
    &::before{content:url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");width: 100%;display: block;}  
  }
.bubble1{right: sizem(-50);width:sizem(150);
  bottom:auto;top:sizem(30);
  img{width: 100%;
    animation: bubble 4s -2s ease-in-out alternate infinite;
    transform:translateY(-10%);
  }
}
@keyframes bubble {
  to {
	transform:translate(0);
  }
}

  .main {
    padding: 0 0;
    width: 100%;
}
.txt {margin: 3em auto 2em;text-align: justify;padding: 0;width:sizem(310);
}

  .slider {
    height: auto;
    width: 100%;border-radius: 0;
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
    img:new URL("./s7/1.jpg", import.meta.url).href ,
    caption: "現場實景經電腦修飾"
  },
]
</script>

