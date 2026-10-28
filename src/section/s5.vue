<template>
  <article class="s5" ref="s5">
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
    <div class="main">
      <div class="txt">
         <h3 class="title" data-aos="fade-up" data-aos-delay="100">繁華與綠意  都是日常風景</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="300">
          LaLaport、CITYLINK與星級飯店，豐富購物、餐飲與休閒選擇；車程約5分鐘到汐止好市多，家庭採買輕鬆補給。橫科市場、全聯與美廉社照顧日常所需，橫科、新富、富康公園與四分河濱公園，讓生活在便利與綠意間自在切換。
</p>
      </div>
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


.s5 {
  @apply relative flex justify-center;
  width: 100%;
  height: auto;
  padding:0 0 sizem(20) 0;
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  background: #003F69;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 6em 0;
 //   padding: 6.9em 0 6.9em 0;
    flex-wrap: wrap;
    gap: 4em;
    background-size: size(113) auto;
  }

  .main {
    @apply flex;
    padding: 0 sizem(32.5);
    width: 100%;
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;

    @media screen and (min-width: 768px) {
      padding: 0;
      width: size(590);
    }
  }

  .txt {
    padding: sizem(40) 0 sizem(40);
    @media screen and (min-width: 768px) {
      text-align: left;
      padding: 0;
      .title{
      font-size: 2em;

      }
    }

  }

  // size(110)

  .slider {
    margin:0;
      width: 100%;
      height: auto;
      @media screen and (min-width: 768px) {
    width: size(840);
      }

    .slide-item {
      @apply bg-cover;
        width: 100%;
        height: sizem(250);
      @media screen and (min-width: 768px) {
      width: size(840);
      height: size(560);

      }

    }

    .splide__pagination {
      left: calc(100% + 5em);
      justify-content: flex-start;
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

const splide = ref()

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 6000,
  gap: 0,
//  drag: false
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s5/1.jpg", import.meta.url).href,
    caption: "LaLaport百貨"
  },
  {
    img: new URL("./s5/2.jpg", import.meta.url).href,
    caption: "五星飯店環聚"
  },
  {
    img: new URL("./s5/3.jpg", import.meta.url).href,
    caption: "汐止好市多"
  },
  {
    img: new URL("./s5/4.jpg", import.meta.url).href,
    caption: "橫科市場"
  },
  {
    img: new URL("./s5/5.jpg", import.meta.url).href,
    caption: "公園綠意生活"
  },
]
</script>