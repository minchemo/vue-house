<template>
  <div class="s6 relative bg-white">
    <div class="info absolute bg-[#FFEC2E] flex flex-col items-center justify-start">
      <div class="flex items-end">
        <p class="title text-center">
          人本・自然・永續<br />
          人地共好的建築信仰
        </p>
      </div>
      <div class="content">
        姮興開發，淬鍊30年房產實力，以人的五感為健康標準，視自然為舒適基因、永續為傳世奧義，精準控制日照、通風、溫度、濕度、空氣等五大元素，用建築為下一代守護地球。
      </div>
      <div class="absolute bar"></div>
    </div>

    <Splide ref="splide" :options="{
      rewind: true,
      autoWidth: true,
      arrows: false,
      type: 'fade',
      autoplay: true,
      interval: 4000,
    }" class="slide-box absolute z-10">
      <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
        <div class="caption absolute">{{ img.caption }}</div>
      </SplideSlide>
    </Splide>
    <div v-if="$isMobile()" class="splide__arrows absolute z-20 w-full px-2 flex justify-between top-1/4 left-0">
      <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
        <img src="@/assets/prev.svg" alt="" srcset="">
      </button>
      <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
        <img src="@/assets/next.svg" alt="" srcset="">
      </button>
    </div>


    <lazy-component>


      <img class="absolute newstart" src="@/section/s6/newstart.png" alt="" srcset="" />
    </lazy-component>

  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: 100%;
  height: size(854);
  border-radius: size(180);

  .info {
    width: size(910);
    height: size(674);
    border-radius: size(190);
    left: size(136);
    top: size(99);
    padding: size(210) size(153) 0 size(100);

    .title {
      font-weight: 500;
      font-size: size(55);
      line-height: size(65.45);
    }

    .content {
      margin-top: size(24);
      font-weight: 400;
      font-size: size(26);
      line-height: size(46.8);
    }

    .bar {
      bottom: 0;
      left: 50%;
      margin-left: -#{size(60)};
      width: size(120);
      height: size(10);
      border-radius: size(10) size(10) 0 0;
      background-color: #7c716d;
    }
  }

  .slide-box {
    width: size(790);
    height: size(548.69);
    top: size(57);
    left: size(999);

    .splide__track {
      z-index: 10;
    }

    .slide {
      width: size(790);
      height: size(548.69);
      background-size: cover;
      border-radius: size(150);

      .caption {
        background: rgba($color: #000000, $alpha: 0.5);
        font-size: size(15);
        line-height: size(24);
        color: #fff;
        border-radius: size(6) size(6) 0 0;
        padding: 0 size(8) 0 size(8);
        bottom: 0;
        left: size(150);
      }
    }

    &::after {
      content: "";
      width: size(863);
      height: size(503);
      background-image: url("@/section/s6/bubble.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: -#{size(30)};
      left: -#{size(100)};
      z-index: 0;
    }

    .splide__pagination {
      position: absolute;
      right: -#{size(35)};
      bottom: size(120);
      flex-direction: column;

      li {
        height: size(20);
        margin-bottom: size(10);

        .splide__pagination__page {
          width: size(20);
          height: size(20);
          border: size(4) solid #ffec2e;
          border-radius: 100%;

          &.is-active {
            border-color: #ff9900;
          }
        }
      }
    }
  }

  .newstart {
    width: size(709);
    left: size(1064);
    top: size(668);
  }
}


@media screen and (max-width:768px) {
  .s6 {
    width: size-m(375);
    height: size-m(580);
    border-radius: size-m(68);

    .info {
      width: size-m(326);
      height: size-m(535);
      border-radius: size-m(64);
      left: size-m(24);
      top: size-m(20);
      padding: size-m(290) size-m(18) size-m(55) size-m(18);
      color: #555555;

      .girl {
        height: size-m(74);
        margin-right: size-m(10);
      }

      .title {
        font-size: size-m(23);
        line-height: size-m(27.37);
      }

      .content {
        margin-top: size-m(20);
        font-weight: 400;
        font-size: size-m(15);
        line-height: size-m(24);
      }

      .bar {
        bottom: unset;
        top: 100%;
        left: 50%;
        margin-left: -#{size-m(30)};
        width: size-m(66);
        height: size-m(5);
        border-radius: 0px 0px 5px 5px;
        background-color: #7C716D;
      }
    }

    .slide-box {
      width: size-m(300);
      height: size-m(208);
      top: size-m(51);
      left: size-m(43);

      .slide {
        width: size-m(300);
        height: size-m(208);
        border-radius: size-m(50);

        .caption {
          font-size: size-m(12);
          line-height: size-m(20);
          color: #fff;
          border-radius: size-m(6) size-m(6) 0 0;
          padding: 0 size-m(8) 0 size-m(8);
          bottom: 0;
          left: size-m(50);
        }
      }

      &::after {
        width: size-m(284);
        height: size-m(230);
        background-image: url('@/section/s2/bubble_m.png');
        bottom: -#{size-m(40)};
        left: -#{size-m(10)};
      }

      .splide__pagination {
        display: none;
      }
    }

    .newstart {
      display: none;
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
const splide = ref();

const imgs = ref([
  {
    img: new URL("../section/s6/1.jpg", import.meta.url).href,
    caption: "業績：光禾墅",
  },
  {
    img: new URL("../section/s6/2.jpg", import.meta.url).href,
    caption: "業績：斗六恆星 德安恆星 ",
  },
  {
    img: new URL("../section/s6/3.jpg", import.meta.url).href,
    caption: "業績：台北內湖  輕山敘",
  },
])
</script>
