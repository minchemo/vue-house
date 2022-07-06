<template>
  <div class="s13 relative bg-black">
    <Splide ref="splide" :options="{
      rewind: true,
      autoWidth: true,
      pagination: false,
      arrows: false,
      drag: $isMobile() ? true : false,
      type: $isMobile() ? 'loop' : 'slide',
      perPage: $isMobile() ? 1 : 4,
      autoplay: true,
      interval: 4000,
      focus: $isMobile() ? 'center' : 0,
    }" @splide:move="move" class="slide-box absolute z-10">
      <SplideSlide @mouseover="activeIdx = i" class="slide" :class="{ active: activeIdx == i }" v-for="img, i in imgs">
        <div class="person" v-lazy:background-image="img.img"></div>
        <img class="icon absolute z-10" :src="img.icon" alt="心仝聚" srcset="">
        <div class="info absolute">
          <div class="t1 font-['Noto_serif_tc']">{{ img.t1 }}</div>
          <div class="t2">{{ img.t2 }}</div>
        </div>
      </SplideSlide>
    </Splide>
    <div v-if="$isMobile()" class="splide__arrows absolute z-20 w-full px-2 flex justify-between top-1/4 left-0">
      <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
        <img src="@/assets/prev.svg" alt="心仝聚" srcset="">
      </button>
      <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
        <img src="@/assets/next.svg" alt="心仝聚" srcset="">
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s13 {
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
      width: size(480);
      height: size(1080);
      position: relative;

      .person {
        width: 100%;
        height: 100%;
        background-size: cover;
        filter: brightness(30%);
        transition: all .2s;
      }

      .icon {
        width: size(150);
        left: 50%;
        transform: translateX(-50%);
        bottom: size(100);
        transition: all .2s;
      }

      .info {
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        padding-bottom: size(150);
        transition: all .2s;
        text-align: center;
        opacity: 0;

        .t1 {
          position: relative;
          font-size: size(40);
          color: #D47300;
          z-index: 1;
        }

        .t2 {
          position: relative;
          font-size: size(20);
          color: #fff;
          line-height: 150%;
          letter-spacing: 0.2em;
          z-index: 1;
        }

        &::after {
          content: '';
          width: size(100);
          height: 1px;
          background-color: #D47300;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
          bottom: size(120);
        }

        &::before {
          content: '';
          width: 100%;
          height: size(610);
          position: absolute;
          left: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 68.75%);
        }
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 95%;
        height: 97%;
        border: 1px solid #D47300;
      }

      &.active {
        .person {
          filter: brightness(100%);
        }

        .icon {
          opacity: 0;
        }

        &::after {
          border: 3 px solid #D47300;
        }

        .info {
          opacity: 1;
        }
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

}


@media screen and (max-width:768px) {

  .s13 {
    width: 100%;
    height: size-m(667);

    .slide-box {
      position: absolute;
      width: size-m(375);
      height: size-m(667);

      .splide__track {
        z-index: 10;
      }

      .slide {
        width: size-m(296);
        height: size-m(666);
        position: relative;

        .person {
          width: 100%;
          height: 100%;
          background-size: cover;
          filter: brightness(30%);
          transition: all .2s;
        }

        .icon {
          width: size-m(93);
          left: 50%;
          transform: translateX(-50%);
          bottom: size-m(180);
          transition: all .2s;
        }

        .info {
          width: 100%;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          padding-bottom: size-m(80);
          transition: all .2s;
          text-align: center;
          opacity: 0;

          .t1 {
            font-weight: 800;
            font-size: size-m(25);
            margin-bottom: size-m(10);
          }

          .t2 {
            font-size: size-m(15);
            line-height: 160%;
            letter-spacing: 0;
          }

          &::after {
            content: '';
            width: size-m(61.32);
            height: 1px;
            background-color: #D47300;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            bottom: size-m(110);
          }

          &::before {
            content: '';
            width: 100%;
            height: size-m(375);
            position: absolute;
            left: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 68.75%);
          }
        }

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 95%;
          height: 97%;
          border: 0;
        }

        &.active {
          .person {
            filter: brightness(100%);
          }

          .icon {
            opacity: 1;
          }

          &::after {
            border: 3px solid #D47300;
          }

          .info {
            opacity: 1;
          }
        }

      }

      .splide__pagination {
        display: none;
      }
    }

    .splide__arrows {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: size-m(375);
    }

  }
}
</style>

<script setup>
import { ref } from "vue"
const splide = ref();
const activeIdx = ref(0);

const move = (newIdx, prevIdx, destIdx) => {
  activeIdx.value = prevIdx
}


const imgs = ref([
  {
    img: new URL("../section/s13/1.jpg", import.meta.url).href,
    icon: new URL("../section/s13/1i.png", import.meta.url).href,
    t1: '黃烱祥建築師',
    t2: '於建築設計中 凝鍊生活之美'
  },
  {
    img: new URL("../section/s13/2.jpg", import.meta.url).href,
    icon: new URL("../section/s13/2i.png", import.meta.url).href,
    t1: '景觀鄭如珊設計師',
    t2: '綠影扶疏 雍容大度的城市花園'
  },
  {
    img: new URL("../section/s13/3.jpg", import.meta.url).href,
    icon: new URL("../section/s13/3i.png", import.meta.url).href,
    t1: '公設張祐銓設計師',
    t2: '打破框架 融匯建築與設計的精湛技藝'
  },
  {
    img: new URL("../section/s13/4.jpg", import.meta.url).href,
    icon: new URL("../section/s13/4i.png", import.meta.url).href,
    t1: '燈光羅伊真設計師',
    t2: '光影雕塑家 以流光襯映建築之美'
  },
])
</script>
