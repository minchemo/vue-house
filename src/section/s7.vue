<template>
  <div class="s7 relative bg-black">
    <Splide ref="splide" :options="{
      rewind: true,
      autoWidth: true,
      arrows: false,
      type: 'fade',
      autoplay: true,
      interval: 4000,
    }" @splide:move="move" class="slide-box absolute z-10">
      <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
        <div class="mask z-0"></div>
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
      <div class="t1 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="0">雙捷運便利生活圈</div>
      <div class="t2 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="200">心之所嚮 即刻抵達</div>
      <div class="t3" data-aos="fade" data-aos-delay="400">鄰近芝山生活圈，散步9分即抵明德站、芝山站。乘捷運紅線，17分直達台北車站，26分直抵信義計畫區。</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
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

      .mask {
        position: absolute;
        width: 50%;
        height: 100%;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(41, 28, 16, 0.75) 78.65%);
        backdrop-filter: blur(2px);
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
    width: size(320);
    right: size(200);
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    .t1 {
      font-weight: 800;
      font-size: size(40);
      line-height: 70%;
      color: #F6B39A;
      margin-bottom: size(25);
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
      font-size: size(20);
      line-height: 150%;
      letter-spacing: 0.2em;
      color: #fff;
    }

    &::before {
      content: '';
      position: absolute;
      width: size(150);
      height: 1px;
      background-color: #fff;
      left: 50%;
      transform: translateX(-50%);
      top: -#{size(45)};
    }

    &::after {
      content: '';
      position: absolute;
      width: size(150);
      height: 1px;
      background-color: #fff;
      left: 50%;
      transform: translateX(-50%);
      bottom: -#{size(45)};
    }
  }
}


@media screen and (max-width:768px) {
  .s7 {
    width: 100%;
    height: size-m(519);
    background-color: #B36649;

    .slide-box {
      position: absolute;
      width: size-m(375);
      height: size-m(250);
      bottom: 0;
      left: 0;

      .splide__track {
        z-index: 10;
      }

      .slide {
        width: size-m(375);
        height: size-m(250);
        background-size: cover;
        position: relative;

        .caption {
          font-size: size-m(12);
          bottom: size-m(10);
          left: size-m(20);
        }

        .mask {
          display: none;
        }
      }

      .splide__pagination {
        display: none;
      }
    }

    .splide__arrows {
      left: 50%;
      top: 80%;
      transform: translate(-50%, -50%);
      width: size-m(375);
    }

    .info {
      position: absolute;
      width: 100%;
      height: size-m(270);
      right: 0;
      text-align: center;
      top: 0;
      transform: translateY(0%);
      pointer-events: none;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, #362210 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 size-m(30);

      .t1 {
        font-size: size-m(25);
        line-height: 160%;
        margin-bottom: size-m(0);
      }

      .t2 {
        font-size: size-m(19);
        line-height: 160%;
        margin-bottom: size-m(15);
      }

      .t3 {
        font-size: size-m(15);
        line-height: 160%;
        letter-spacing: 0;
      }

      &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: size-m(150);
        background-color: #fff;
        left: 5%;
        transform: translateX(0);
        top: size-m(60);
      }

      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: size-m(150);
        background-color: #fff;
        right: 5%;
        left: unset;
        transform: translateX(0);
        top: size-m(60);
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
    img: globals.$isMobile() ? new URL("../section/s7/1_m.jpg", import.meta.url).href : new URL("../section/s7/1.jpg", import.meta.url).href,
    caption: '天母SOGO'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/2_m.jpg", import.meta.url).href : new URL("../section/s7/2.jpg", import.meta.url).href,
    caption: '石牌商圈'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/3_m.jpg", import.meta.url).href : new URL("../section/s7/3.jpg", import.meta.url).href,
    caption: '捷運明德站'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/4_m.jpg", import.meta.url).href : new URL("../section/s7/4.jpg", import.meta.url).href,
    caption: '捷運芝山站'
  },
])
</script>
