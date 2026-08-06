<template>
  <article class="s3" ref="s3">
    <div class="bg">
      <img src="./s1/c3.png" alt="i2">
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">國道 × 台鐵 × 捷運<br>
三高奔馳 高速移動之城</h3>
       <!--  <hr class="hr" data-aos="fade-up" data-aos-delay="400" /> -->
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          約8分鐘上國道3號，南下北上串聯土城、中和、板橋等科技與產業聚落；串聯國道2號，直達桃園機場、高鐵桃園站，約10分鐘上國道1號，林口三井、內湖台北，生活、商務、休閒一次到位。</p>
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
@keyframes an {
  to {
    transform: translateX(0%);
  }
}


.s3 {
  @apply relative flex justify-center bg-[#6DAA43];
  width: 100%;
  height: auto;
  padding: 6.9em 0 6.9em 0;
  gap: 4em;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
      color: #FFF;

  .bg {
    width: 253%;
    height: 100%;
    position: absolute;
    bottom: sizem(-100);
    left: sizem(0);

    img {
      position: absolute;
      bottom: 0;
      right: 0;
        width: 100%;
        transform: translateX(-2%);
        transform-origin: 0 100%;
        animation: an 5s linear infinite alternate;


    }

    @media screen and (min-width: 768px) {
      width: 35%;
      bottom: 0;
      left: 0;
     // left: auto;
    }

  }
  .main {
    @apply flex;
    margin: 0;
    width: size(590);
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;
}
  .txt {
    // margin: auto auto 3vw auto;
    padding: 0;
  //  width: size(455);

    .title {
    }

    .hr {
  //    color: #7C519F;
    }

  }

  // size(110)

  .slider {
    margin: 0 0 0 0;
    flex-basis: size(840);
    width: size(840);
    height: size(560);

    .slide-item {
      @apply bg-cover;
      flex-basis: size(840);
      width: size(840);
      height: size(560);

    }

    .splide__pagination {
      left: calc(100% + 6em);
      justify-content: flex-start;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s3 {
  flex-direction: column-reverse;
    height: auto;
    padding: 0;
    font-size: sizem(13);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;

.bg{
  // top:sizem(270);
  bottom: sizem(0);
  left: sizem(0);
  width: 70%;
}



    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 4em auto 7em;
      padding: 0;
      width: auto;
    }


    .slider {
      height: auto;
      width: 100%;

      .caption {
        font-size: sizem(12);
        right: sizem(5);
        bottom: sizem(5);
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
    img: new URL("./s3/1.jpg", import.meta.url).href,
    caption: "國華站"
  },
  {
    img: new URL("./s3/2.jpg", import.meta.url).href,
    caption: "鶯歌車站"
  },
]
</script>