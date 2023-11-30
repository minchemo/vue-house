<template>
  <article class="s8">
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]"  data-aos="fade-up" data-aos-delay="0">電梯店墅</h3>
  </div>
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">地段好的店面，大老闆都搶</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">角地店王，百米店街結市，76-98大建坪，電梯透天店住，開店、辦公、自住、出租，置產投資首選。<br />
零公設持分、免購車位、零虛坪，百坪大樓有找，超高CP值，當然選「如邑2」!</p>
      </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
  @apply relative flex flex-col items-center justify-center text-[#000] bg-[#F8F8F8];
  width: 100%;
  // height: size(800);
  padding:0 0 7em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
.title{
&::after,
&::before{
background: #C9A063;
}
}}

  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(844);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(844);
      
    }
    .arrows .prev, .arrows .next{
      width:3%;
    }

    .splide__pagination{
      bottom: .5em;
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
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
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
    .arrows .prev, .arrows .next{
      width:8%;
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

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
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
  {
    img:new URL("./s8/2.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
  {
    img:new URL("./s8/3.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
  {
    img:new URL("./s8/4.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
  {
    img:new URL("./s8/5.jpg", import.meta.url).href ,
    caption: "外觀實景"
  },
]
/*
const imgs = [
  {
    img: getImg('s8/1'),
    caption: "內湖 豁達達禮"
  },
  {
    img: getImg('s8/2'),
    caption: "林口 長耀PARK"
  },
  {
    img: getImg('s8/3'),
    caption: "林口 長耀初"
  },
  {
    img: getImg('s8/4'),
    caption: "林口 長耀里"
  },
]
*/
</script>

