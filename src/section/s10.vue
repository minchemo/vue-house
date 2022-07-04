<template>
  <div class="s10 relative bg-black">
    <Splide ref="splide" :options="{
      rewind: true,
      autoWidth: true,
      arrows: false,
      type: 'fade',
      autoplay: true,
      interval: 4000,
    }" @splide:move="move" class="slide-box absolute z-10">
      <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
        <div class="caption z-10">{{ img.caption }}</div>
      </SplideSlide>
    </Splide>
    <div class="splide__arrows absolute z-20 w-full px-2 flex justify-between top-1/4 left-0">
      <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
        <img src="@/assets/prev.svg" alt="心仝聚" srcset="">
      </button>
      <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
        <img src="@/assets/next.svg" alt="心仝聚" srcset="">
      </button>
    </div>
    <div class="info z-20">
      <div class="t1 font-['Noto_serif_tc']" data-aos="fade" data-aos-delay="0">打破空間界線的友好設計</div>
      <div class="t2 font-['Noto_serif_tc']" data-aos="fade" data-aos-delay="200">錯層、退縮，讓家與自然、與鄰里仝聚共生</div>
      <div class="t3" data-aos="fade" data-aos-delay="400">
        曲線優雅的錯層陽台，打破封閉的垂直框架，為建築立面賦予豐富神情，也讓戶與戶之間的距離更緊密而溫暖。家，與鄰里相依，多了幾分暖意；人與人之間的距離，以設計的語彙重新定義，保留恰如其分的餘裕，更加舒心。</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  width: 100%;
  height: size(1080);

  .slide-box {
    position: absolute;
    width: size(1920);
    height: size(1080);

    .splide__track {
      z-index: 10;
    }

    .slide {
      width: size(1920);
      height: size(1080);
      background-size: cover;
      position: relative;

      .caption {
        position: absolute;
        font-size: size(12);
        font-weight: 350;
        color: #fff;
        bottom: size(10);
        left: size(20);
      }
    }

    .splide__pagination {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: size(20);
      z-index: 20;
      gap: size(7.5);

      li {
        height: size(20);
        margin-bottom: size(10);

        .splide__pagination__page {
          width: size(15);
          height: size(15);
          border-radius: 100%;
          background: rgba($color: #fff, $alpha: 0.5);

          &.is-active {
            background: rgba($color: #fff, $alpha: 1);
          }
        }
      }
    }
  }

  .splide__arrows {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: size(1900);
  }

  .info {
    position: absolute;
    width: size(900);
    right: 0;
    bottom: 0;
    text-align: center;
    pointer-events: none;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: size(30) 0;

    .t1 {
      font-weight: 800;
      font-size: size(40);
      line-height: 70%;
      color: #EC9700;
      margin-bottom: size(25);
      text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.8);
    }

    .t2 {
      font-weight: 700;
      font-size: size(30);
      line-height: 70%;
      color: #fff;
      margin-bottom: size(70);
    }

    .t3 {
      font-weight: 400;
      width: size(600);
      font-size: size(20);
      line-height: 150%;
      letter-spacing: 0.2em;
      color: #fff;
    }
  }
}


@media screen and (max-width:768px) {

  .s10 {
    width: 100%;
    height: size-m(667);

    .slide-box {
      position: absolute;
      width: size-m(375);
      height: size-m(360);
      bottom: 0;
      left: 0;

      .splide__track {
        z-index: 10;
      }

      .slide {
        width: size-m(375);
        height: size-m(360);

        .caption {
          font-size: size-m(12);
          bottom: size-m(10);
          left: size-m(20);
        }
      }

      .splide__pagination {
        display: none;
      }
    }

    .splide__arrows {
      left: 50%;
      top: 75%;
      transform: translate(-50%, -50%);
      width: size(1900);
    }

    .info {
      position: absolute;
      width: size-m(375);
      height: size-m(307);
      right: 0;
      top: 0;
      bottom: unset;
      text-align: center;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 size-m(35);
      background-color: #192d4e;

      .t1 {
        font-weight: 800;
        font-size: size-m(25);
        line-height: 160%;
        margin-bottom: size-m(0);
      }

      .t2 {
        font-size: size-m(16);
        line-height: 160%;
        margin-bottom: size-m(20);
      }

      .t3 {
        width: 100%;
        font-size: size-m(15);
        line-height: 160%;
        letter-spacing: 0;
      }
    }
  }
}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
const splide = ref();

const currentIdx = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}
const globals = getCurrentInstance().appContext.config.globalProperties;

const imgs = ref([
  {
    img: globals.$isMobile() ? new URL("../section/s10/1_m.jpg", import.meta.url).href : new URL("../section/s10/1.jpg", import.meta.url).href,
    caption: '外觀3D圖'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s10/1_m.jpg", import.meta.url).href : new URL("../section/s10/2.jpg", import.meta.url).href,
    caption: '外觀3D圖'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s10/1_m.jpg", import.meta.url).href : new URL("../section/s10/3.jpg", import.meta.url).href,
    caption: '外觀3D圖'
  },
])
</script>
