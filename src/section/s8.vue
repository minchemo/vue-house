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
        <img src="@/assets/prev.svg" alt="" srcset="">
      </button>
      <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
        <img src="@/assets/next.svg" alt="" srcset="">
      </button>
    </div>
    <div class="info z-20">
      <div class="t1 font-['Noto_serif_tc']">樂活水岸</div>
      <div class="t2 font-['Noto_serif_tc']">一家人專屬的幸福流域</div>
      <div class="t3">晨間，呼吸著新鮮空氣，沿溪畔步道自在慢跑；日暮時分，悠閒漫步堤岸，夕照中遠眺大屯山群峰，享受都市中少有、與自然零距離的舒心日常。</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  width: 100%;
  height: size(1080);
  background-color: #EC9700;

  .slide-box {
    position: absolute;
    top: size(260);
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
      font-weight: 400;
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
    width: size-m(375);
    height: size-m(600);
  }
}
</style>

<script setup>
import { ref } from "vue"
const splide = ref();

const currentIdx = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}

const imgs = ref([
  {
    img: new URL("../section/s8/1.jpg", import.meta.url).href,
    caption: '雙溪河濱公園'
  },
  {
    img: new URL("../section/s8/2.jpg", import.meta.url).href,
    caption: '21號河濱公園'
  },
  {
    img: new URL("../section/s8/3.jpg", import.meta.url).href,
    caption: '情境示意圖'
  },
])
</script>
