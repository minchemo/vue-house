<template>
  <article class="s4">
    <div class="slider" data-aos="fade" v-if="!isMobile">
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img" :key="img">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <div class="mos4" v-else>
      <img src="./s4/s8-2m.jpg" class="img" alt="">
<div class="caption">示意圖僅供參考</div>
      <div class="main">
      <div class="txt">
        <p class="desc" data-aos="fade-left" data-aos-delay="0">桃捷綠線G09，散步就到</p>
      </div>
      <img src="./s4/en.svg" class="en" data-aos="fade-left" data-aos-delay="500">
    </div>
      <Fullview />
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4 {
  @apply relative flex flex-col items-center justify-center;
  width: 100%;
  background: #C6E2E2;
  background-size: cover;
  height: size(1080);
  padding: 0 0 0 0;
  font-size: size(18);
  gap: 1.5em;
  flex-wrap: nowrap;

  .main {
    @apply flex;
    margin: 0;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }

  .txt {
    text-align: center;
    position: relative;
    padding-top: 1.8em;
    z-index: 10;
    padding-bottom: 1.8em;
    color: #fff;

    .title {

      &::after,
      &::before {
        background: #fff;
        width: 7.3em;
      }
    }

    .title {
      font-size: 2em;
      font-weight: 700;
    }

    .en {
      margin-top: size(20);
    }

  }

  .slider {
    @apply relative;
    margin: 0 0 0 0;
    //flex-basis: size(812);
    height: size(1080);
    width: 100%;
  @media screen and (max-width: 767px) {
    height:auto;
    
  }

    .slide-item {
      @apply bg-cover;
      width: 100%;
      //flex-basis: size(1682);
      height: size(1080);
  @media screen and (max-width: 767px) {
    height: sizem(250);
    
  }

    }

    .arrows .prev,
    .arrows .next {
      width: 3%;
    }

    .splide__pagination {
      bottom: .5em;
    }

    .caption {
      position: absolute;
      color: #fff;
      font-size: 1em;
      bottom: size(10);
      right: size(10);
    }



    .arrows {
      @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
      padding: 0;
      height: 100%;
      pointer-events: none;

      .prev,
      .next {
        width: 3%;
        display: flex;
        pointer-events: stroke;
        cursor: pointer;

        justify-content: center;
        align-items: center;
        background: url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
        background-size: 50% auto;
        transition: background-color .5s;

        &:hover {
          background-color: #0003;
        }
      }

      .prev {
        transform: scaleX(-1);
      }

      img {
        margin: unset;
        @apply cursor-pointer hover:opacity-50;
      }
    }

    .splide__pagination {
      @apply absolute flex justify-center w-full;
      bottom: 2%;
      gap: .5em;
      color: #fff;

      li {
        button {
          @apply rounded-full hover:opacity-50;
          width: 1em;
          height: 1em;
          border: 2px solid currentColor;

          &.is-active {
            background: currentColor;
          }
        }
      }
    }
  }
}

.mos4{
  @apply flex flex-col items-center justify-center;
  width: 100%;
  background: #12A19F;
  background-size: cover;
  padding: 0 0 0 0;
  font-size: sizem(18);
 // gap: sizem(15);
  flex-wrap: nowrap;

.img{  height:sizem(250);}
  .main {
    @apply flex;
    margin: 0;
    flex-direction: column;
    text-align: center;
    width: 100%;
      padding:sizem(30) sizem(20) sizem(50) 0;
  }

  .txt {
    text-align: right;
    position: relative;
   // padding-top: sizem(40);
    z-index: 10;
    padding: 0;
    color: #fff;

    .desc {
      font-size: sizem(15);
      font-weight: 500;
    }

  }

  .en {
    width: sizem(326);
    margin: 0 0 sizem(0) auto;
  }
  .viewbox {
    height: sizem(448);
  }

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
.s4 {
  height: auto;
    .caption {
      position: absolute;
      color: #fff;
      font-size:sizem(12);
      top: sizem(230);
      right: 0.5em;
    }
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';

import Fullview from '../components/fullview2.vue';
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
    img: new URL("./s4/1.jpg", import.meta.url).href,
    caption: "示意圖僅供參考"
  },
  {
    img: new URL("./s4/2.jpg", import.meta.url).href,
    caption: " "
  },
] 
</script>
