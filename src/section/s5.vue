<template>
  <article class="s5" ref="s5">
		<img src="./s1/oo.svg" class="oo">
    <div class="main">
      <div class="txt">
          <h3 class="title" data-aos="fade-up" data-aos-delay="200">商圈百貨環伺<br>繁華咫尺之間</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="600">身處三民正核心，大順一線匯聚無數精華，家樂福、建工商圈，走路輕鬆到，好市多、義享廣場，輕軌就能到，精品百貨的時尚魅力，四大商圈的繁華氣息，演繹您的日常風貌！</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
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



.s5 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:11em 0 10em 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  flex-direction:row-reverse;
  .oo{position: absolute;top: calc(50% - #{size(550)});left: calc(50% - #{size(190)});width: size(1100);
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
  .subtitle{font-weight: 400;}
  a{text-decoration:underline;margin: 0 1em 0 0;display: inline-block;
  &::after{content:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 17' fill='none' stroke='%23FFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M12,10v3.5c0,1.4-1.1,2.5-2.5,2.5H3.5c-1.4,0-2.5-1.1-2.5-2.5v-6c0-1.4,1.1-2.5,2.5-2.5h3.5M16,8V1h-7M5,12L16,1'/%3E%3C/svg%3E");display: inline-block;width: .8em;margin:0 0 0 .2em;position: relative;top: .1em;}
  &:hover{text-decoration:none;}
  }
}


  .slider {
    margin: 0;
    flex-basis: size(840);
    width: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
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


.s5 {
@apply flex-col-reverse;
  height: auto;
  padding: 0;
font-size:sizem(15);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;

.oo{bottom: sizem(-50);top: auto;
left: calc(50% - #{sizem(330)});
width: sizem(660);transform: rotate(90deg);
 }
.main {
  padding: 0 sizem(32.5);
  width: 100%;
}

.txt {margin: 2em auto 6em;padding: 0;
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
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: " 建工商圈"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "鼎山家樂福"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "好市多"
  },
  {
    img:new URL("./s5/4.jpg", import.meta.url).href ,
    caption: "義享廣場"
  },
  {
    img:new URL("./s5/5.jpg", import.meta.url).href ,
    caption: "漢神巨蛋"
  },
]
</script>

