<template>
  <article class="s6">
    <div class="slider">
      <div class="arrows">
        <img class="prev" @click="splide.splide.go('<')" src="@/section/prev.png" alt="" srcset="">
        <img class="next" @click="splide.splide.go('>')" src="@/section/next.png" alt="" srcset="">
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
        </SplideSlide>
      </Splide>
    </div>
    <div class="main">
      <div :key="currentSlideIndex">
        <div class="t1">生活，與森活並行</div>
        <div class="divide"></div>
        <div class="t2" data-aos="fade-up">{{ imgs[currentSlideIndex].t1 }}</div>
        <div class="t3" data-aos="fade-up" data-aos-delay="200" v-html="imgs[currentSlideIndex].t2"></div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  @apply relative overflow-hidden flex flex-col items-start justify-center text-white;
  width: 100%;
  height: size(1080);
  padding: size(16);
  background-size: cover;
  background-image: url('@/section/bg.jpg');

  .main {
    @apply grow flex items-center justify-center text-[#1E1B1B];
    >div {
      @apply flex items-center;
    
      padding-left: size(34);
      .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(56);
      letter-spacing: 0.05em;
      color: #1E1B1B;
    }
    .divide{
      width: size(1);
      height: size(64);
      background-color: #C5A260;
      margin: 0 size(40);
    }
    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(44);
      letter-spacing: 0.05em;
      color: #1E1B1B;
      margin-right: size(37);
    }
    .t3 {
      font-family: 'Noto Serif TC';
      font-style: normal;
      font-weight: 600;
      font-size: size(16);
      line-height: size(29);
      letter-spacing: 0.05em;
      color: #1E1B1B;

    }
    }
  }

  .slider {
    width: 100%;
    flex-basis: size(905);
    .slide-item {
      @apply bg-cover;
      width: size(1887.09);
      height: size(905);
      
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
  @apply flex-col;
  min-height: sizem(612);
  height: unset;
  padding: sizem(8);
  padding-top: sizem(28);
  padding-bottom: sizem(14);
  background-image: url('@/section/bgm.jpg');

  .main {
     width: sizem(310);
     margin: 0 auto;
     margin-top: sizem(10);
    >div {
      @apply flex-col items-start; 
      padding-left: 0;
      .t1 {
      font-size: sizem(25);
    }
    .divide{
      width: sizem(310);
      height: sizem(1);
      margin: sizem(9) 0;
    }
    .t2 {
      font-size: sizem(20);
      margin-right: 0;
      margin-bottom: sizem(5);
    }
    .t3 {
      font-size: sizem(14);
      line-height: sizem(24);
      text-align:justify;

    }
    }
  }

  .slider {
    width: 100%;
    flex-basis: sizem(359);
    .slide-item {
      @apply bg-cover;
      width: sizem(359);
      height: sizem(392.75);
      
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
  type: 'loop',
}

const imgs = [
  {
    img: getImg('s6/1'),
    t1: '大樹公園',
    t2: '家不遠，散步間，坐擁第二運動公園、立德公園、扶輪公園、力行公園4座<br class="hidden md:block"/>生機勃勃的大樹之境，蟲鳥和鳴，放空歸林，找回心沉的平靜。'
  },
  {
    img: getImg('s6/2'),
    t1: '豐盈生活',
    t2: '文化三路上的三井Outlet、昕境廣場商圈，以及周圍的運動中心、超市、<br class="hidden md:block"/>影城等豐饒的場域，更為長耀加的生活取得平衡一線間。'
  },
  {
    img: getImg('s6/3'),
    t1: '豐盈生活',
    t2: '文化三路上的三井Outlet、昕境廣場商圈，以及周圍的運動中心、超市、<br class="hidden md:block"/>影城等豐饒的場域，更為長耀加的生活取得平衡一線間。'
  },
  {
    img: getImg('s6/4'),
    t1: '出類拔萃',
    t2: '聚地理、生態、未來發展等優勢的林口，吸引眾多歸國華僑、台商、機師、外籍人士擇居於此，「馬禮遜美國學校」、<br class="hidden md:block"/>「新北美國學校」、「康橋國際學校」等異國菁英院校因應而生，形塑出林口高質感、高資產的生活風範。'
  },
  {
    img: getImg('s6/5'),
    t1: '出類拔萃',
    t2: '聚地理、生態、未來發展等優勢的林口，吸引眾多歸國華僑、台商、機師、外籍人士擇居於此，「馬禮遜美國學校」、<br class="hidden md:block"/>「新北美國學校」、「康橋國際學校」等異國菁英院校因應而生，形塑出林口高質感、高資產的生活風範。'
  },
  {
    img: getImg('s6/6'),
    t1: '出類拔萃',
    t2: '聚地理、生態、未來發展等優勢的林口，吸引眾多歸國華僑、台商、機師、外籍人士擇居於此，「馬禮遜美國學校」、<br class="hidden md:block"/>「新北美國學校」、「康橋國際學校」等異國菁英院校因應而生，形塑出林口高質感、高資產的生活風範。'
  },
]

</script>
