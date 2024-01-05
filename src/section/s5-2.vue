<template>
  <article class="s5-2" ref="s5">
    <div class="main">
      <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">A2 機捷三重站+新蘆線三重站</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">双捷三重 一站台北一線世界</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">輕鬆擁抱三重站双捷運双線優勢，台北車站一站就到，高鐵、台北捷運網絡任意穿越，一線就到桃園國際機場，佈局全球放眼世界零時差掌握!</p>
      </div>
    </div>
    <div class="slider" data-aos="fade-up" data-aos-delay="600">
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



.s5-2 {
  @apply relative flex items-center justify-center text-[#000];
  width: 100%;
  height:auto;
  padding:6em 0 6em 0;
  font-size:size(16);
  gap:6em;
  flex-wrap: wrap;
  background:#CAE1D2;
  background-size: size(874) auto;
    flex-direction:row-reverse;

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(500);
  flex-direction: column;
  text-align: justify;
}


.txt {
  .slogo{height:size(45);}
  .title{
    margin: 0 0 .4em;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    line-height: 1.3;color: #11554B;
  }
  .subtitle{color: #B5761D;}

}

  .slider {
    margin: 0;
    flex-basis: size(720);
      height: size(440);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(720);
      height: size(440);
      
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

  .s5-2 {
  @apply flex-col;
    height: auto;
    padding:sizem(60) 0 sizem(40) 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
  background-size: sizem(360) auto;
  background-position: 0 sizem(340);

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
  }

  .txt {
    margin-bottom: 0em;
  .title{
    span{font-size: 1.43em;}
  }
  }


  .slider {
    height: auto;
    width: sizem(310);

    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(5);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(208);
      
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
  gap: 10,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s5/521.jpg", import.meta.url).href ,
    caption: "台北車站"
  },
  {
    img:new URL("./s5/522.jpg", import.meta.url).href ,
    caption: "雙捷交會三重站"
  },
  {
    img:new URL("./s5/523.jpg", import.meta.url).href ,
    caption: "雙捷交會三重站"
  },
  {
    img:new URL("./s5/524.jpg", import.meta.url).href ,
    caption: "雙捷交會三重站"
  },
]
</script>

