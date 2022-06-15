<template>
  <div class="s7 relative bg-[#8EF0E2]">
    <div class="info bg-white absolute z-10 flex flex-col justify-center items-center">
      <div class="flex items-end justify-center">
        <lazy-component>
          <img class="girl" src="@/section/s7/i.png" alt="" srcset="" />

        </lazy-component>
        <p class="title">
          豪宅團隊心藝<br />
          有世界觀的家
        </p>
      </div>
      <div class="name text-center">{{ data[currentIdx].name }}</div>
      <div class="content text-center">
        {{ data[currentIdx].text }}
      </div>
      <div v-if="$isMobile()" class="absolute bar"></div>
    </div>

    <Splide :options="{
      rewind: true,
      autoWidth: true,
      arrows: false,
      type: 'fade',
      autoplay: true,
      interval: 4000,
    }" @splide:move="move" class="slide-box absolute z-10">
      <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
        <div class="caption absolute">{{ img.caption }}</div>
      </SplideSlide>
    </Splide>


    <lazy-component>


      <img class="absolute newstart z-10" src="@/section/s7/newstart.png" alt="" srcset="" />
    </lazy-component>

  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size(854);
  border-radius: size(180);

  .info {
    width: size(967);
    height: size(687);
    border-radius: size(190);
    left: size(800);
    top: size(78);
    padding: 0 size(110);

    .girl {
      height: size(197);
      margin-right: size(20);
    }

    .title {
      font-weight: 500;
      font-size: size(55);
      line-height: size(65.45);
    }

    .name {
      width: size(400);
      border-top: size(2) solid;
      border-bottom: size(2) solid;
      border-color: #000000;
      margin-top: size(20);
      font-weight: 700;
      font-size: size(26);
      line-height: size(46.8);
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
    top: size(56);
    left: size(135);

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
      width: size(813);
      height: size(463);
      background-image: url("@/section/s7/bubble.png");
      background-size: cover;
      background-position: center;
      position: absolute;
      bottom: -#{size(20)};
      right: -#{size(80)};
      z-index: 0;
    }

    .splide__pagination {
      position: absolute;
      left: -#{size(40)};
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
            border-color: #00cbd1;
          }
        }
      }
    }
  }

  .newstart {
    width: size(683);
    left: size(135);
    top: size(664);
  }
}


@media screen and (max-width:768px) {
  .s7 {
    width: size-m(375);
    height: size-m(523);
    border-radius: size-m(68);

    .info {
      width: size-m(326);
      height: size-m(478);
      border-radius: size-m(64);
      left: size-m(24);
      top: size-m(20);
      padding: size-m(290) size-m(18) size-m(55) size-m(18);
      color: #555555;

      .girl {
        height: size-m(100);
        margin-right: size-m(10);
      }

      .title {
        font-size: size-m(23);
        line-height: size-m(27.37);
      }

      .name {
        width: size-m(190);
        border-top: size-m(1) solid;
        border-bottom: size-m(1) solid;
        border-color: #000000;
        margin-top: size-m(10);
        font-size: size-m(16);
        line-height: size-m(25.6);
      }

      .content {
        margin-top: size-m(10);
        font-weight: 400;
        font-size: size-m(14);
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

const currentIdx = ref(0)

const imgs = ref([
  {
    img: new URL("../section/s7/1.jpg", import.meta.url).href,
    caption: "張國章 建築師",
  },
  {
    img: new URL("../section/s7/2.jpg", import.meta.url).href,
    caption: "陳福松 結構技師",
  },
])

const data = ref([
  {
    name: "張國章 建築師",
    text: "「人需與環境共生，建築需與環境共舞」",
  },
  {
    name: "超偉工程顧問",
    text: "北流音樂中心 南軟園區 國家級工程結構顧問",
  },
])

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}
</script>
