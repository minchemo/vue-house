<template>
  <div class="s8 relative bg-black">
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
      <div class="t1 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="0">和孩子仝探索 璀璨未來</div>
      <div class="t2 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="200">名校雲集 x 公園童趣時光</div>
      <div class="t3 font-['Noto_Serif_TC']" data-aos="fade" data-aos-delay="400">
        漫步2分鐘文林國小、中正高中優質學區，與薇閣、奎山、美日歐明星學校為鄰，孩子沐浴在良好教育學風中成長。步行5分鐘至軟橋公園、6分鐘建民公園賞水岸、8分鐘福星公園訪恐龍，五感遊樂創造都市兒童非凡回憶。</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: size(1080);
  background-color: #B36649;

  .slide-box {
    position: absolute;
    top: size(300);
    width: size(1920);
    height: size(700);

    .splide__track {
      z-index: 10;
    }

    .slide {
      width: size(1920);
      height: size(700);
      background-size: cover;
      position: relative;

      .caption {
        position: absolute;
        font-size: size(12);
        font-weight: 350;
        color: #fff;
        bottom: size(10);
        right: size(20);
        text-shadow: 0.1em 0.1em 0.2em black;
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
    top: size(610);
    transform: translateX(-50%);
    width: size(1900);
  }

  .info {
    position: absolute;
    width: size(800);
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    top: size(50);
    pointer-events: none;

    .t1 {
      font-weight: 800;
      font-size: size(40);
      line-height: 70%;
      color: #fff;
      margin-bottom: size(25);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }

    .t2 {
      font-weight: 700;
      font-size: size(30);
      line-height: 70%;
      color: #fff;
      margin-bottom: size(50);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }

    .t3 {
      font-weight: 500;
      font-size: size(20);
      line-height: 150%;
      letter-spacing: 0.2em;
      color: #000;
    }

    &::before {
      content: '';
      position: absolute;
      width: size(150);
      height: 1px;
      background-color: #000;
      left: 0;
      top: size(20);
    }

    &::after {
      content: '';
      position: absolute;
      width: size(150);
      height: 1px;
      background-color: #000;
      right: 0;
      top: size(20);
    }
  }
}


@media screen and (max-width:768px) {

  .s8 {
    width: 100%;
    height: size-m(570);
    background-color: #B36649;

    .slide-box {
      position: absolute;
      top: size-m(300);
      width: size-m(375);
      height: size-m(250);

      .splide__track {
        z-index: 10;
      }

      .slide {
        width: size-m(375);
        height: size-m(250);

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
      top: size-m(400);
      transform: translateX(-50%);
      width: size-m(375);
    }

    .info {
      position: absolute;
      width: size-m(375);
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      top: size-m(60);
      pointer-events: none;
      padding: 0 size-m(20);

      .t1 {
        font-weight: 800;
        font-size: size-m(25);
        line-height: 160%;
        margin-bottom: size-m(0);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      }

      .t2 {
        font-weight: 700;
        font-size: size-m(19);
        line-height: 160%;
        margin-bottom: size-m(10);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      }

      .t3 {
        font-weight: 400;
        font-size: size-m(15);
        line-height: 160%;
        letter-spacing: 0;
      }

      &::before {
        content: '';
        position: absolute;
        width: size-m(30);
        height: 1px;
        background-color: #000;
        left: size-m(20);
        top: size-m(20);
      }

      &::after {
        content: '';
        position: absolute;
        width: size-m(30);
        height: 1px;
        background-color: #000;
        right: size-m(20);
        top: size-m(20);
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
    img: globals.$isMobile() ? new URL("../section/s8/1_m.jpg", import.meta.url).href : new URL("../section/s8/1.jpg", import.meta.url).href,
    caption: '中正高中'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s8/2_m.jpg", import.meta.url).href : new URL("../section/s8/2.jpg", import.meta.url).href,
    caption: '福星公園'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s8/3_m.jpg", import.meta.url).href : new URL("../section/s8/3.jpg", import.meta.url).href,
    caption: '歐洲學校'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s8/4_m.jpg", import.meta.url).href : new URL("../section/s8/4.jpg", import.meta.url).href,
    caption: '薇閣中學'
  },
])
</script>
