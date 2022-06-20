<template>
  <div class="s5 relative bg-[#BBE35B]" v-bind:class="{ reverse: currentIdx >= 2 }">
    <div class="info absolute z-10 flex flex-col justify-center items-center">
      <div data-aos="fade" class="flex items-end justify-center" v-if="currentIdx < 2">
        <lazy-component>
          <img class="girl" src="@/section/s5/i.png" alt="" srcset="" />
        </lazy-component>
        <p class="title">
          輕隱市心<br />
          風景首馥
        </p>
      </div>
      <div data-aos="fade" class="flex items-end justify-center" v-else>
        <p class="title">
          戶戶邊間 層層有景 有氧御邸
        </p>
      </div>
      <div data-aos="fade" data-aos-delay="200" class="content text-center" v-if="currentIdx < 2">
        選對環境，每一席都是舒適首選，<br />
        戶戶邊間，節氣流轉，<br />
        每一刻呼吸都享高純度氧；<br />
        環境採低密度開發、四方無垠，<br />
        層層有景，稻浪浮雲，盡收吾境。
      </div>
      <div data-aos="fade" data-aos-delay="200" class="content text-center" v-else>
        盈光明廳，馥郁室界，開朗好風水；<br />
        雙面開窗，節氣流轉，零暗房設計；<br />
        觀景陽台，盡收眼下，回家即度假！
      </div>
    </div>

    <Splide  data-aos="zoom-in" ref="splide" @splide:move="move" :options="{
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
      <img class="absolute newstart z-10" src="./s5/newstart.svg" alt="" srcset="" />

    </lazy-component>

  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size(1006);
  border-radius: size(180);

  &::after {
    content: "";
    width: size(1696);
    height: size(860);
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    border-radius: size(190);
    transform: translate(-50%, -50%);
  }

  .info {
    width: size(910);
    height: size(674);
    border-radius: size(190);
    left: size(900);
    top: size(180);
    padding: 0 size(110);

    .girl {
      height: size(151);
      margin-right: size(20);
    }

    .title {
      font-weight: 500;
      font-size: size(55);
      line-height: size(65.45);
    }

    .content {
      margin-top: size(20);
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
    top: size(228);
    left: size(160);

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
      width: size(859);
      height: size(500);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23BBE35B' viewBox='0 0 863 503'%3E%3Cpath d='M167.3,0l473.2,0c152.9,3.3,200.4,142.5,219.8,188.6c5.9,18,2.4,27.4-13.3,11c-9.6-10.1-56.3-26-56.3,1.3v148.4 c0,93.1-59.8,153.6-151.8,153.6H167.3C75.3,503,0,426.8,0,333.7l0-164.5C0,76.1,75.3,0,167.3,0z'/%3E%3C/svg%3E%0A");
      background-size: cover;
      background-position: center;
      position: absolute;
      bottom: -#{size(40)};
      right: -#{size(100)};
      z-index: 0;
    }

    .splide__pagination {
      position: absolute;
      left: -#{size(90)};
      bottom: size(200);
      flex-direction: column;

      li {
        height: size(20);
        margin-bottom: size(10);

        .splide__pagination__page {
          width: size(20);
          height: size(20);
          border: size(4) solid #fff;
          border-radius: 100%;

          &.is-active {
            border-color: #7fa523;
          }
        }
      }
    }
  }

  .newstart {
    width: size(709);
    left: size(1068);
    top: size(830);
  }


  &.reverse {
    .slide-box {
      width: size(667.04);
      height: size(752);
      top: size(120);
      left: size(200);

      .slide {
        width: size(667.04);
        height: size(752);
        border-radius: 0;

        .caption {
          display: none;
        }

      }

      .splide__pagination {
        left: -#{size(130)};
        bottom: size(300);
      }

      &::after {
        display: none;
      }
    }
  }
}


@media screen and (max-width:768px) {
  .s5 {
    width: size-m(375);
    height: size-m(600);
    border-radius: size-m(68);

    &::after {
      content: "";
      width: size-m(326);
      height: size-m(555);
      border-radius: size-m(64);
    }

    .info {
      width: size-m(326);
      height: size-m(555);
      border-radius: size-m(64);
      left: size-m(24);
      top: size-m(20);
      padding: size-m(290) size-m(18) size-m(55) size-m(18);
      color: #555555;

      .girl {
        height: size-m(65);
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
        background-image: url("data:image/svg+xml,%3Csvg fill='%23BBE35B' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 680 550'%3E%3Cpath d='M511.5,0h-343C75.8,0,0,75.8,0,168.4v163C0,424,60.3,484.3,153,484.3c0,0,326.6,0,327,0 c27.1,0,11.3,39.9,1.2,49.6c-18,17.5-8,24.7,41.1,0.1C570,510.1,680,447.1,680,315.9V168.4C680,75.8,604.2,0,511.5,0z'/%3E%3C/svg%3E");
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

    &.reverse {
      .info {
        padding: size-m(370) size-m(18) size-m(55) size-m(18);
      }

      .slide-box {
        width: size-m(300);
        height: size-m(338);
        top: size-m(40);
        left: size-m(35);

        .slide {
          width: size-m(300);
          height: size-m(338);
          border-radius: 0;
        }



        &::after {
          display: none;
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
const splide = ref();

const currentIdx = ref(0)

const imgs = ref([
  {
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "外觀3D示意圖 （建構中）",
  },
  {
    img: new URL("../section/s5/2.jpg", import.meta.url).href,
    caption: "外觀3D示意圖 （建構中）",
  },
  {
    img: new URL("../section/s5/3.png", import.meta.url).href,
    caption: "",
  },
  {
    img: new URL("../section/s5/4.png", import.meta.url).href,
    caption: "",
  },
])

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}
</script>
