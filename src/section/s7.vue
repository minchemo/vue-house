<template>
  <article class="s7 " ref="s7">
    <div class="bg">
      <img src="./s1/i2.webp" alt="i2">
      <img src="./s1/i1.webp" alt="i1">
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">歐風莊園 奢尚公設<br v-if="isMobile"> 樂享日常度假感</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="0">庭園以林蔭步道、花卉植栽、街角綠意串聯社區與城市；豪宅級第二門廳規劃，挑高迎賓大廳到公設空間，<br v-if="!isMobile">
延續大理石、幾何拼花、藝術吊燈…以一致的歐風美學串聯生活風景，讓回家的每一步，都沉浸在莊園度假的愜意氛圍、感受精品飯店般的輕奢時尚。​</p>
      </div>
    </div>

    <div class="slider">
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



.s7 {
  @apply relative flex items-center justify-center text-[#fff] bg-[#EB6120];
  width: 100%;
  height: auto;
  padding: 4em 0 12em 0;
  font-size: size(22);
  gap: 2.3em;
  flex-wrap: wrap;
  //overflow: hidden;
  flex-direction: column;

  .bg {
    width: 200%;
    height: 100%;
    position: absolute;
    bottom: sizem(-70);
    left: sizem(0);

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;

      &:nth-child(1) {
        width: 106.5%;
        transform: translateX(2%);
        transform-origin: 0 100%;
        animation: an 10s linear infinite alternate;
      }


    }

    @media screen and (min-width: 768px) {
      width: 100%;
      bottom: size(-70);
      right: 0;
      left: auto;
    }

  }


  .txt {
    text-align: center;



    .en {
      position: absolute;
      top: size(-50);
      left: 13em;
      width: 9em;
      transform: rotate(90deg);
      transform-origin: 0 0;
    }
  }




  .slider {
    // background: #fff;
    margin: 0;
    width: size(1500);
    height: size(884);
    overflow: hidden;
    border-radius: 0;
    // border: size(3) solid #7C519F;
    //  padding: size(10);

    .slide-item {
      @apply bg-cover;
      width: 100%;
      height: size(884);

    }

    .splide__pagination {
      //   left: calc(100% + 3em);
      bottom: -2.2em;
      justify-content: flex-start;
      z-index: 10;
    }
  }


}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s7 {
  flex-direction: column-reverse;
    height: auto;
    font-size: sizem(13);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;
    padding: 0 0 0;
    overflow: hidden;

    .txt {
      width: sizem(310);
      margin: 3em auto 9em auto;

    }


    .slider {
      height: auto;
      width: 100%;
      padding: 0;
      border: 0;
      border-radius: 0;


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

const imgs = computed(() => [
  {
    img: new URL("./s7/1.jpg", import.meta.url).href,
    caption: "林蔭大道"
  },
]);
</script>