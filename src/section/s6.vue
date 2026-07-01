<template>
  <article class="s6" ref="s6">
    <div class="main">
      
    <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">一站中央公園<br v-if="!isMobile">
一步城市心</h3>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="0">萬坪城市綠洲 繁華之上，綠意之中</div>
      <p class="desc" data-aos="fade-up" data-aos-delay="0">萬坪城市綠洲、療癒森活主場，是城市最奢侈的留白，<br>
讓心靈節奏自在切換，找到快與慢之間，剛剛好的平衡。
</p>
      <div class="en font-['Noto_Serif_TC',serif]">URBAN NATURE</div>
      </div>
    </div>
    
    <div class="slider" data-aos="fade">
<img src="./s6/1.webp" alt="">
          <span class="caption">情境示意圖</span>


    </div>
   <!--  <div class="slider" data-aos="fade">
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
    </div> -->

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s6 {
  @apply relative flex flex-row items-center justify-center bg-[#7D51A0];
  width: 100%;
  height: auto;
  padding: 5em 0 18em 0 ;
  font-size: size(22);
  gap: 4em;
  flex-wrap: wrap;
  color: #fff;
  overflow: hidden;
  background:#0254DC url("./s6/bg.webp") no-repeat center center;
  background-size: cover;


  .main {
    @apply flex;
    margin: 0;
    width: size(590);
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .txt {
    // margin: auto auto 3vw auto;
    padding: 0 0 0 0;
    width: 100%;
    text-align: left;
    .subtitle{text-align: left;}
    
  .en{position: absolute;top: size(-190);left:-.7em; width: 9em;transform: rotate(90deg);transform-origin: 0 0;}
  }


  .slider {
    margin: 0;
    width: size(840);
    height: size(560);
    border-radius: 0 0 0 size(180) ;
    overflow: hidden;
    img{width: 100%;}

    .slide-item {
      @apply bg-cover;
      flex-basis: size(840);
      width: size(840);
      height: size(560);

    }

    .splide__pagination {
      left: calc(100% + 3em);
      justify-content: flex-start;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s6 {
    @apply flex-col;
    height: auto;
    padding: 1.5em 0 15em 0;
    font-size: sizem(12);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;
    background-position: 50% 120%;
  background-size: 220% auto;

    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 4em auto 3em;
      padding: 0;
      width: auto;
      
  .en{top: sizem(490);left:-.9em; width: 9em;transform: rotate(0deg);}
    }


    .slider {
      height: auto;
      width:sizem(310);
    border-radius: sizem(80) 0 0 0 ;

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
]
</script>